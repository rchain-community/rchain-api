// ISSUE: squatting on `export:`

/* global require, exports */
// @flow

const { URL } = require('url');

const { Writer } = require('protobufjs');

const { RHOCore, b2h } = require('..');

const { link } = require('./assets');

const LOADER_TEMPLATE = link('./loader.rho');

const defaultPayment = { from: '0x1', nonce: 0, phloPrice: 1, phloLimit: 100000 };

/*::
import type { IRNode } from '..';

interface LoadAccess {
  rnode: IRNode,
  clock: () => Date,
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
  sources /*: string[]*/, user /*: Uint8Array*/,
  { rnode, clock } /*: LoadAccess */,
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
    const [chan] = await rnode.previewPrivateChannels({ user, timestamp }, 1);
    console.log(`Deploying: ${title}\n`);
    const deployResult = await rnode.doDeploy({ user, term, timestamp, ...defaultPayment });
    console.log({ deployResult, name });
    return { name, title, term, chan };
  }

  const parts = sources.map(parseModule);
  const deployed = await Promise.all(parts.map(deploy1));

  const createdBlock = await rnode.createBlock();
  console.log({ createdBlock, loading: deployed.map(({ name }) => name) });

  async function register1({ name, title, term, chan }) /*: Promise<ModuleInfo> */{
    console.log(`${name}: listening for URI at ${prettyPrivate(chan)}`);
    const found = await rnode.listenForDataAtName(chan);
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


/**
 * Get printable form of unforgeable name, given id.
 */
exports.unforgeableWithId = unforgeableWithId;
function unforgeableWithId(id /*: Uint8Array */) {
  const bytes = Writer.create().bytes(id).finish().slice(1);
  return `Unforgeable(0x${b2h(bytes)})`;
}

exports.prettyPrivate = prettyPrivate;
function prettyPrivate(par /*: IPar */) {
  if (!(par.ids && par.ids.length && par.ids[0].id)) { throw new Error('expected GPrivate'); }
  return unforgeableWithId(par.ids[0].id);
}

function firstBlockData(blockResults) {
  if (!blockResults.length) { throw new Error('no blocks found'); }
  return RHOCore.toJSData(firstBlockProcess(blockResults));
}


// Get the first piece of data from listenForDataAtName
function firstBlockProcess(blockResults) {
  // console.log('found:', JSON.stringify(blockResults, null, 2));
  const ea = [].concat(...blockResults.map(br => br.postBlockData));
  // console.log('ea: ', JSON.stringify(ea, null, 2));
  const good = ea.filter(it => it.exprs.length > 0 || it.bundles.length > 0 || it.ids.length > 0);
  // console.log('good:');
  // console.log(JSON.stringify(good, null, 2));
  return good[0];
}


function integrationTest(argv, { readFileSync }) {
  const sourceFileName = argv[2];
  const src = readFileSync(sourceFileName, 'utf8');
  const { name, title, term } = parseModule(src);
  console.log({ name, title });
  console.log(term);
}


/*global module */
if (require.main === module) {
  /* global process */
  /* eslint-disable global-require */
  integrationTest(process.argv, { readFileSync: require('fs').readFileSync });
}
