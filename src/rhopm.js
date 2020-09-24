// @ts-check

const { getDataForDeploy } = require('./rnode-client/rnode-web');
const { nodeFetch } = require('./curl');
const { RNode } = require('./rnode');

// @ts-ignore
const { keys, freeze, fromEntries } = Object;

export const rhoDir = 'rho_modules';
export const rhoInfoPath = (src) =>
  `${rhoDir}/${src.replace(/\.rho$/, '.json')}`;
export const importPattern = /match\s*\("import",\s*"(?<specifier>[^"]+)",\s*`(?<uri>rho:id:[^`]*)`\)/g;

function log(...args) {
  if (!process.env.LOG_RHOPM_QUIET) {
    console.log(...args);
  }
}

/**
 * @param {{src: string, dataForDeploy: DataForDeploy }} info
 * @typedef {{ data: { expr: RhoExpr }}} DataForDeploy
 *
 * @typedef { import('./rnode-openapi-schema').RhoExpr } RhoExpr
 */
export function depEntry(info) {
  const {
    src: dep,
    dataForDeploy: {
      data: {
        expr: {
          // @ts-ignore WARNING: we assume input data is correctly formatted.
          ExprUri: { data: uri },
        },
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

export function PkgManager({ io, shard, signWithKey }) {
  const {
    fs: {
      promises: { readFile },
    },
    sched: { setTimeout, clearTimeout },
    clock,
  } = io;

  /** @type { (parts?: string[], limit?: number) => (...more: string[]) => void } */
  const progressFn = (parts = [], limit = 24) => (...more) => {
    more.map(abbr(limit)).forEach((s) => {
      parts.push(s);
    });
    log(...parts);
  };

  return freeze({
    /**
     * @param {string} src
     * @param {string[]} deps
     * @returns {Promise<{ src: string, signed: DeployRequest, dataForDeploy: DataForDeploy }>}
     * @typedef { import('./rnode-openapi-schema').DeployRequest } DeployRequest
     */
    async deploy(src, deps) {
      const depTargets = deps.map(rhoInfoPath);
      const progress = progressFn([src]);

      progress('deps:', `${depTargets.length}`);
      const term = await resolveDeps(src, depTargets, { readFile });

      progress('{', abbr(24)(term), '}', shard.observer.apiBase(), 'after:');
      const timestamp = clock().valueOf();
      const [
        { blockNumber: validAfterBlockNumber },
      ] = await shard.observer.getBlocks(1);

      const signed = signWithKey({ term, timestamp, validAfterBlockNumber });

      shard.startProposing();

      progress(`${validAfterBlockNumber}`, 'sig:', signed.signature, 'deploy');
      await shard.validator.deploy(signed);

      const onProgress = async () => {
        progress('@'); // (very) short for "still waiting for data at name"
        return false; // don't abort; keep trying.
      };
      const dataForDeploy = await getDataForDeploy(
        shard.observer,
        signed.signature,
        onProgress,
        { setTimeout, clearTimeout },
      );
      progress(JSON.stringify(dataForDeploy.data.expr.ExprUri.data));
      shard.stopProposing();

      return { src, signed, dataForDeploy };
    },
  });
}

export function makeContractTask(TARGETS, { jake, io, shard, signWithKey }) {
  const mgr = PkgManager({ io, shard, signWithKey });
  const { writeFile } = io.fs.promises;

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
 *
 * @param {*} readFileSync
 * @param {*} http
 * @param {SchedulerAccess} sched
 * @param {*} dotEnv
 * @param {*} period
 *
 * @typedef { {
 *   setTimeout: typeof setTimeout,
 *   clearTimeout: typeof clearTimeout,
 *   setInterval: typeof setInterval,
 *   clearInterval: typeof clearInterval,
 * } } SchedulerAccess
 */
export function shardIO(
  readFileSync,
  http,
  sched,
  dotEnv = 'docker-shard/.env',
  period = 2 * 1000,
) {
  const fetch = nodeFetch({ http });
  const env = parseEnv(readFileSync(dotEnv, 'utf8'));
  const api = {
    admin: `http://${env.MY_NET_IP}:40405`,
    boot: `http://${env.MY_NET_IP}:40403`,
    read: `http://${env.MY_NET_IP}:40413`,
  };
  const rnode = RNode(fetch);

  const proposer = rnode.admin(api.admin);
  let proposing = false;
  let waiters = 0;
  let pid;

  return freeze({
    env,
    ...api,
    validator: rnode.validator(api.boot),
    observer: rnode.observer(api.read),
    startProposing() {
      waiters += 1;
      if (typeof pid !== 'undefined') {
        return;
      }
      pid = sched.setInterval(() => {
        if (!proposing) {
          proposing = true;
          proposer
            .propose()
            .then(() => {
              proposing = false;
            })
            .catch((_err) => {
              proposing = false;
            });
        }
      }, period);
    },
    stopProposing() {
      if (waiters <= 0) {
        return;
      }
      waiters -= 1;
      sched.clearInterval(pid);
      pid = undefined;
    },
  });
}
