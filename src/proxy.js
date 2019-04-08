/*global require, exports*/
// @flow

const { Writer } = require('protobufjs');
const { DataWithBlockInfo } = require('../protobuf/CasperMessage').coop.rchain.casper.protocol;

const { b2h } = require('./signing');
const { rhol, toJSData } = require('./RHOCore');
const { GPrivate } = require('../protobuf/RhoTypes.js');

/*::
import type { IRNode, IDeployData } from './rnodeAPI';
import { URL } from 'url';

type Message = {
  target: URL,
  method: ?string,
  args: mixed[],
};

type Receiver = {
  [string]: (...mixed[]) => Promise<mixed>
}

interface Opts {
  predeclare?: string[],
  unary?: boolean,
  returnCh?: IPar,
  insertSigned?: boolean,
  fixArgs?: (mixed[], IPar[]) => mixed[]
};

interface SourceOpts extends Opts {
  chanArgs?: GPrivate[],
};

interface SendOpts extends Opts {
  rnode: IRNode,
  delay?: (number) => Promise<void>,
};

interface ProxyOpts extends SendOpts {
  clock: () => Date
}

*/


/**
 * Make an object that proxies method calls to registered RChain
 * channels.
 *
 * For rholang calling conventions, see `callSource`.
 *
 * @param target: URI where channel is registered.
 * @param deployData: as in doDeploy (though term is ignored and replaced)
 * @param opts
 * @param opts.rnode: access to RChain node via gRPC
 * @param opts.clock: access to millisecond-resolution clock.
 * @param opts.delay: an optional async function to call between sending
 *                    a call and listening for the response.
 * @param opts.unary: whether to use unary calling conventions.
 * @param opts.predeclare: names to pre-declare after `return`
 */
exports.makeProxy = makeProxy;
function makeProxy(
  target /*: URL */,
  deployData /*: $ReadOnly<IDeployData> */,
  opts /*: ProxyOpts */,
) /*: Receiver */{
  const { clock } = opts;
  const sendIt = msg => sendCall(msg, { ...deployData, timestamp: clock().valueOf() }, opts);
  return new Proxy({}, {
    get: (_, method) => (...args) => sendIt({ target, method, args }),
    // override set to make it read-only?
  });
}


/**
 * Call a method on a registered RChain channel.
 *
 * For rholang calling conventions, see `callSource`.
 *
 * @param target: URI where channel is registered.
 * @param deployData: as in doDeploy (though term is ignored and replaced)
 * @param opts
 * @param opts.rnode: access to RChain node via gRPC
 * @param opts.delay: an optional async function to call between sending
 *                    a call and listening for the response.
 * @param opts.unary: whether to use unary calling conventions.
 */
exports.sendCall = sendCall;
async function sendCall(
  { target, method, args } /*: Message*/,
  deployData /*: $ReadOnly<IDeployData> */,
  opts /*: SendOpts */,
) {
  const { rnode } = opts;
  let returnChan/*: IPar */;
  let chanArgs /*: GPrivate[] */= [];
  if (opts.returnCh) {
    if (opts.fixArgs) { throw new Error('fixArgs not supported with returnCh'); }
    returnChan = opts.returnCh;
  } else {
    const chans /*: Buffer[] */ = await rnode.previewPrivateIds(
      { user: deployData.deployer, timestamp: deployData.timestamp },
      1 + (opts.predeclare || []).length,
    );
    // console.log({ chans: chans.map(b2h) });

    const [returnId, ..._] = chans;
    const idToPar = id => ({ ids: [{ id }] });
    returnChan = idToPar(returnId);
    // console.log({ returnChan: JSON.stringify(returnChan) });

    const idToGPrivate = id => GPrivate.create({ id });
    chanArgs = chans.reverse().map(idToGPrivate);
  }

  const term = callSource(
    { target, method, args },
    { ...opts, chanArgs },
  );
  console.log({ deployData, note: 'placeholder term' });
  const deployResult = await rnode.doDeploy({ ...deployData, term }, true);
  console.log({ deployResult });

  const blockResults = await pollAt(returnChan, method || '?', { delay: opts.delay, rnode });
  return firstBlockData(blockResults);
}


exports.pollAt = pollAt;
async function pollAt(
  returnChan /*: IPar */,
  doing /*: string*/,
  { rnode, delay } /*: { rnode: IRNode, delay?: (number) => Promise<void> }*/,
) {
  let blockResults = [];
  const returnPretty = prettyPrivate(returnChan);
  // eslint-disable-next-line no-restricted-syntax
  for (const poll of [1, 2, 3, 4]) {
    console.log(`${doing}: listen #${poll} at return chan ${returnPretty}`);
    // eslint-disable-next-line no-await-in-loop
    blockResults = await rnode.listenForDataAtName(returnChan);
    // console.log({ blockResults });
    if (blockResults.length > 0) {
      break;
    }
    // eslint-disable-next-line no-await-in-loop
    if (delay) { await delay(poll); }
  }
  if (!blockResults.length) { throw new Error(`${doing}: no reply at ${returnPretty}`); }
  return blockResults;
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

exports.firstBlockData = firstBlockData;
function firstBlockData(blockResults /*: DataWithBlockInfo[] */) {
  const _ = DataWithBlockInfo; // mark used
  // console.log({ blockResults });
  if (!blockResults.length) { throw new Error('no blocks found'); }
  return toJSData(firstBlockProcess(blockResults));
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


/**
 * Make a rholang term for looking up a target and calling a method.
 *
 * @param msg
 * @param opts
 * @param opts.unary: For better compositionality, JS args are combined into one
 *                    list arg on the rholang side.
 */
exports.callSource = callSource;
function callSource(
  { target, method, args } /*: Message*/,
  opts /*: SourceOpts */,
) {
  const args2 = opts.fixArgs ? opts.fixArgs(args, opts.chanArgs || []) : args;
  return rhoCall({
    // ISSUE: assume target is injection-safe?
    target: `\`${String(target)}\``,
    method: method && method.length > 0 ? [rhol`${method}`] : [],
    args: (
      opts.unary
        ? [rhol`${args2}`]
        : args2.map(arg => rhol`${arg}`)),
  }, opts.predeclare || [], opts.insertSigned || false);
}


/**
 * Caller is responsible for converting pieces to rholang.
 *
 * @param m: message
 * @param m.target: a rholang URI expression: `rho:id:...`
 * @param m.method: [] or ["eat"]
 * @param m.args: a list of rholang terms
 * @param predeclare: names to pre-declare in addition to `return`
 *                    They are passed (deref'd to processes) to target
 *                    in reverse order.
 * @param insertSigned: was `insertSigned` used to register the target?
 */
function rhoCall({ target, method, args }, predeclare, insertSigned) {
  const newNames = ['return', ...predeclare.reverse()];
  const pieces = [...method, ...args, [...predeclare, 'return'].map(n => `*${n}`)];
  /*
        // ISSUE: what comes back from the registry is
        // a tuple if insertSigned and just the thing if insertArbitrary.
        // is that by design?
        for(@(_nonce, target) <- targetCh) {
  */
  const targetPattern = insertSigned ? '@(_, *target)' : 'target';
  const term = `
      new ${newNames.join(', ')}, targetCh, lookup(\`rho:registry:lookup\`), trace(\`rho:io:stderr\`) in {
        trace!({"in remote call to": ${target}, "return": *return}) |
        lookup!(${target}, *targetCh) |
        for(${targetPattern} <- targetCh) {
          trace!({ "target": *target }) |
          target!(${pieces.join(', ')})
        }
      }
    `;
  console.log(term);
  return term;
}
