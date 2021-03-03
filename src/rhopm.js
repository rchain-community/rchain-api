// @ts-check

import { nodeFetch } from './curl';
import { RNode } from './rnode';
import { startTerm, listenAtDeployId } from './proxy';
import { proposer } from './proposer';

// @ts-ignore
const { keys, freeze, fromEntries } = Object;

/* TODO: handle non-posix paths? */
/** @type {(net: string) => string} */
export const rhoDir = (net) => `rho_modules/${net}`;
/** @type {(src: string, net: string) => string} */
export const rhoInfoPath = (src, net) =>
  `${rhoDir(net)}/${src.replace(/\.rho$/, '.json')}`;
export const importPattern = /match\s*\("import",\s*"(?<specifier>[^"]+)",\s*`(?<uri>rho:id:[^`]*)`\)/g;

function log(...args) {
  if (
    typeof process !== 'undefined' &&
    typeof process.env !== 'undefined' &&
    !process.env.LOG_RHOPM_QUIET
  ) {
    console.log(...args);
  }
}

/**
 * @param {{src: string, dataForDeploy: RhoExprWithBlock }} info
 *        WARNING: we assume expr is URI
 *
 * @typedef { import('./rnode-openapi-schema').RhoExpr } RhoExpr
 */
export function depEntry(info) {
  const {
    src: dep,
    dataForDeploy: {
      expr: {
        // @ts-ignore
        ExprUri: { data: uri },
      },
    },
  } = info;
  return [dep, uri];
}

/**
 * @param {string} src
 * @param {string} term
 * @param {{[specifier: string]: string}} uriByDep
 */
export function fixupImports(src, term, uriByDep) {
  const each = (_match, specifier, _uri) => {
    const dep = specifier.replace(/^\.\//, ''); // TODO: more path resolution?
    const uri = uriByDep[dep];
    if (!uri) {
      throw new Error(
        `failed to satisfy ${src} -> ${dep} dependency among ${keys(uriByDep)}`,
      );
    }
    return `match ("import", "${specifier}", \`${uri}\`)`;
  };
  return term.replace(importPattern, each);
}

/**
 * WARNING: we assume format of depTargets files are correct:
 *   {src: string, dataForDeploy: RhoExprWithBlock }
 *
 * @param {string} src
 * @param {string[]} depTargets
 * @param {{ readFile: typeof import('fs').promises.readFile }} io
 * @returns { Promise<string> }
 */
export async function resolveDeps(src, depTargets, { readFile }) {
  log('resolve', { src });
  const termRaw = await readFile(src, 'utf8');
  log('resolve', { src, depTargets });
  const reading = depTargets.map((fn) => readFile(fn, 'utf8'));
  const info = (await Promise.all(reading)).map((txt) => JSON.parse(txt));
  const byDep = fromEntries(info.map(depEntry));
  log({ src, byDep });
  return fixupImports(src, termRaw, byDep);
}

/**
 * @template T
 * @param {undefined | T} x
 * @returns {T}
 */
function notNull(x) {
  if (!x) {
    throw new Error('null!');
  }
  return x;
}

/**
 * @param {string} term
 * @returns { string[] }
 */
export function findImports(term) {
  return [...term.matchAll(importPattern)].map(
    (m) => notNull(m.groups).specifier,
  );
}

/** @type { (n: number) => (s: string) => string } */
const abbr = (n) => (s) =>
  (s.length > n ? `${s.slice(0, n)}...` : s).replace(/\s+/g, ' ');

/**
 * @param {{
 *   validator: Validator,
 *   observer: Observer,
 *   startProposing: () => void,
 *   stopProposing: () => void,
 * }} shard
 * @param {Account} account
 * @param {{ readFile: typeof import('fs').promises.readFile }} io
 *
 * @typedef { import('./rnode').Validator } Validator
 * @typedef { import('./rnode').Observer } Observer
 * @typedef { import('./proxy').Account } Account
 * @typedef { import('./rnode-openapi-schema').DeployRequest } DeployRequest
 * @typedef { import('./rnode-openapi-schema').RhoExprWithBlock } RhoExprWithBlock
 */
export function PkgManager(shard, account, { readFile }) {
  /** @type { (parts?: string[], limit?: number) => (...more: string[]) => void } */
  const progressFn = (parts = [], limit = 24) => (...more) => {
    more.map(abbr(limit)).forEach((s) => {
      parts.push(s);
    });
    log(...parts);
  };

  const { validator, observer } = shard;

  return freeze({
    /**
     * @param {string} src
     * @param {string[]} deps
     * @returns {Promise<{ src: string, signed: DeployRequest, dataForDeploy: RhoExprWithBlock }>}
     */
    async deploy(src, deps) {
      const depTargets = deps.map(rhoInfoPath);
      const progress = progressFn([src]);

      progress('deps:', `${depTargets.length}`);
      const term = await resolveDeps(src, depTargets, { readFile });

      progress('{', abbr(24)(term), '}', observer.apiBase(), 'after:');

      const signed = await account.sign(term);

      shard.startProposing();

      progress(
        `${signed.data.validAfterBlockNumber}`,
        'sig:',
        signed.signature,
        'deploy',
      );

      const progressAcct = {
        sign: account.sign,
        async polling() {
          await account.polling();
          progress('@'); // (very) short for "still waiting for data at name"
        },
      };

      const deploy = await startTerm(term, validator, observer, progressAcct);
      const dataForDeploy = await listenAtDeployId(observer, deploy);
      const { expr: result } = dataForDeploy;

      if (!('ExprUri' in result)) {
        throw TypeError(`expected URI; got ${result}`);
      }
      progress(JSON.stringify(result.ExprUri.data));
      shard.stopProposing();

      return { src, signed, dataForDeploy };
    },
  });
}

export function makeContractTask(
  TARGETS,
  { jake, io: { readFile, writeFile }, shard, account },
) {
  const mgr = PkgManager(shard, account, { readFile });

  return function contractTask(src, deps = []) {
    const depTargets = deps.map((d) => TARGETS[d]);
    jake.desc(`deploy ${src}${deps.length ? ' -> ' : ''}${deps}`);
    jake.file(TARGETS[src], [src, ...depTargets], async () => {
      const { signed, dataForDeploy } = await mgr.deploy(src, deps);

      await writeFile(
        TARGETS[src],
        JSON.stringify({ src, signed, dataForDeploy }, null, 2),
      );
    });
  };
}

/** @type {(txt: string) => {[name: string]: string}} */
function parseEnv(txt) {
  const bindings = txt
    .split('\n')
    .filter((line) => !line.trim().startsWith('#'))
    .map((line) => line.match(/(?<name>\w+)\s*=\s*(?<value>.*)/))
    .filter((parts) => parts && parts.groups)
    // @ts-ignore
    .map((parts) => [parts.groups.name, parts.groups.value]);
  return Object.fromEntries(bindings);
}

/**
 * @param {Record<string, string | undefined>} env
 * @param {{ admin?: string, boot: string, read: string }} api
 * @param {typeof import('http')} http
 * @param {SchedulerAccess} sched
 * @param {number=} period
 *
 * @typedef {import('./proposer').SchedulerAccess} SchedulerAccess
 */
export function shardAccess(env, api, http, sched, period = 2 * 1000) {
  const fetch = nodeFetch({ http });

  const rnode = RNode(fetch);
  const blockMaker = proposer(api, rnode, sched, period);

  return freeze({
    env,
    ...api,
    validator: rnode.validator(api.boot),
    observer: rnode.observer(api.read),
    ...blockMaker,
  });
}

/**
 * Local shard I/O
 *
 * @param {string} envText
 * @param {typeof import('http')} http
 * @param {SchedulerAccess} sched
 * @param {number=} period
 */
export function shardIO(envText, http, sched, period = 2 * 1000) {
  const env = parseEnv(envText);
  const api = {
    admin: `http://${env.MY_NET_IP}:40405`,
    boot: `http://${env.MY_NET_IP}:40403`,
    read: `http://${env.MY_NET_IP}:40413`,
  };
  return shardAccess(env, api, http, sched, period);
}
