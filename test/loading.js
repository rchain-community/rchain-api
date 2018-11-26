/* global require, exports */

const { Writer } = require('protobufjs');

const { RHOCore, b2h } = require('..');

const { link } = require('./assets');

const LOADER_TEMPLATE = link('./loader.rho');

const defaultPayment = { from: '0x1', nonce: 0, phloPrice: 1, phloLimit: 100000 };


exports.loadRhoModule = loadRhoModule;
async function loadRhoModule(source, user, { rnode, clock }) {
  const timestamp = clock().valueOf();
  const [return_] = await rnode.previewPrivateChannels({ user, timestamp }, 1);
  const mh = moduleHeader(source);
  console.log(`Loading: ${mh.title}\n return channel: ${prettyPrivate(return_)}`);
  const term = LOADER_TEMPLATE
    .replace('__SOURCE__', source)
    .replace('__NAME__', mh.name);
  const loaded = await rnode.doDeploy({ user, term, timestamp, ...defaultPayment }, true);
  console.log({ loaded, name: mh.name });
  const found = await rnode.listenForDataAtName(return_);
  const moduleURI = firstBlockData(found);
  console.log(`${mh.name} registered at: ${moduleURI}`);
  return moduleURI;
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
function unforgeableWithId(id) {
  const bytes = Writer.create().bytes(id).finish().slice(1);
  return `Unforgeable(0x${b2h(bytes)})`;
}

exports.prettyPrivate = prettyPrivate;
function prettyPrivate(par) {
  return unforgeableWithId(par.ids[0].id);
}

function firstBlockData(blockResults) {
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
