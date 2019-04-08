// ISSUE: squatting on `export:`

/* global require, exports */
// @flow

const { URL } = require('url');

const { h2b, keyPair, SignDeployment } = require('./signing');
const { pollAt, firstBlockData } = require('./proxy');

const { link } = require('./assets');

const LOADER_TEMPLATE = link('./loader.rho');

/*::
import type { DeployInfo } from '../protobuf/CasperMessage';
import type { IRNode } from '..';

interface LoadAccess {
  rnode: IRNode,
  clock: () => Date,
  delay?: (number) => Promise<void>,
}

export type ModuleInfo = {
  name: string,
  title: string,
  term: string,
  URI: URL,
};
 */


exports.loadRhoModules = loadRhoModules;
async function loadRhoModules(
  sources /*: string[]*/, payFor /*: DeployInfo => DeployInfo */,
  { rnode, clock, delay } /*: LoadAccess */,
) /*: Promise<ModuleInfo[]> */ {
  let t1 = null;
  function monotonicClock() {
    let t2;
    do {
      t2 = clock().valueOf();
    } while (t1 !== null && t2 <= t1);
    t1 = t2;
    return t2;
  }

  async function deploy1({ name, title, term }) {
    const timestamp = monotonicClock();
    const info = payFor({ term, timestamp });
    const [chan] = await rnode.previewPrivateChannels({ user: info.deployer, timestamp }, 1);
    console.log(`Deploying: ${title}\n`);
    const deployResult = await rnode.doDeploy(info);
    console.log({ deployResult, name });
    return { name, title, term, chan };
  }

  const parts = sources.map(parseModule);
  const deployed = await Promise.all(parts.map(deploy1));

  const createdBlock = await rnode.createBlock();
  console.log({ createdBlock, loading: deployed.map(({ name }) => name) });

  async function register1({ name, title, term, chan }) /*: Promise<ModuleInfo> */{
    console.log({ pollAt });
    const found = await pollAt(chan, name, { rnode, delay });
    const d = firstBlockData(found);
    if (!(d instanceof URL)) { throw new Error(`Expected URL; got: ${String(d)}`); }
    const URI = d;
    console.log(`${name} registered at: ${String(URI)}`);
    return { name, title, term, URI };
  }

  const registered = await Promise.all(deployed.map(register1));
  return registered;
}

function parseModule(sourceCode) {
  const { name, title } = moduleHeader(sourceCode);

  const topParts = sourceCode.match(/(new\s+\S[\s\S]*?\s+in {)([\s\S]*)/);
  if (!topParts) { throw new Error('bad module syntax: no {'); }
  const [_, modtop, rest] = topParts;

  const exportParts = modtop.match(/(\b\w+\b)\s*\(`export:`\)/);
  if (!exportParts) { throw new Error(`bad module syntax: no export: ${modtop}`); }
  const [_2, exportVar] = exportParts;
  const top = modtop.replace('(`export:`)', '');

  const bodyEnd = rest.lastIndexOf('}');
  if (!bodyEnd) { throw new Error('bad module syntax: no ending }'); }
  const body = rest.slice(0, bodyEnd);

  const term = LOADER_TEMPLATE
    .replace('__TOP__{', top)
    .replace('__EXPORT__', exportVar)
    .replace('__NAME__', name)
    .replace('__BODY__', body);
  return { term, name, title };
}


function moduleHeader(sourceCode) {
  const parts = sourceCode.match(/...\n...((\S+).*)/);
  if (!parts) { throw new Error('cannot find title in source code'); }
  const [_, title, name] = parts;
  return { title, name };
}


async function integrationTest(argv, { readFileSync, clock, rnode, setTimeout }) {
  const sourceFileName = argv[2];
  const src = readFileSync(sourceFileName, 'utf8');
  const { name, title, term } = parseModule(src);
  console.log({ name, title });
  console.log(term);

  const dur = 3 * 1000;
  const delay = _i => new Promise((resolve) => { setTimeout(resolve, dur); });

  const key = keyPair(h2b('11'.repeat(32)));
  function payFor(d0 /*: DeployInfo*/) {
    return SignDeployment.sign(key, {
      ...d0,
      phloPrice: 1,
      phloLimit: 100000,
    });
  }

  const sources = [src];
  return loadRhoModules(sources, payFor, { rnode, clock, delay });
}


/*global module */
if (require.main === module) {
  /* global process, setTimeout */
  /* eslint-disable global-require */
  const grpc = require('grpc');
  const { RNode } = require('./rnodeAPI');
  const rnode = RNode(grpc, { host: 'localhost', port: 40401 });
  integrationTest(process.argv, {
    readFileSync: require('fs').readFileSync,
    clock: () => new Date(),
    rnode,
    setTimeout,
  })
    .catch((oops) => { console.error(oops); });
}
