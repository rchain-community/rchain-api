/*global require, exports*/
// @flow

const { rhol, toJSData } = require('./RHOCore');

/*::
import type { IRNode, DeployData } from './rnodeAPI';

type Message = {
  target: string,
  method: ?string,
  args: mixed[],
};

interface SendOpts {
  rnode: IRNode,
  predeclare?: string[],
  delay?: () => Promise<void>,
  unary?: boolean
};

interface ProxyOpts extends SendOpts {
  clock: () => Date
}

*/


/**
 * Make an object that proxies method calls to registered RChain
 * channels.
 *
 * For rholang calling conventions, see `callSource` (and unaryCallSource).
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
  target /*: string */,
  deployData /*: DeployData */,
  { rnode, clock, delay, unary = false } /*: ProxyOpts */,
) {
  const sendIt = msg => sendCall(
    msg, { timestamp: clock().valueOf(), ...deployData },
    { rnode, delay: delay || noDelay, unary },
  );
  return new Proxy({}, {
    get: (_, method) => (...args) => sendIt({ target, method, args }),
    // override set to make it read-only?
  });
}


/**
 * Call a method on a registered RChain channel.
 *
 * For rholang calling conventions, see `callSource` (and unaryCallSource).
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
  deployData /*: DeployData */,
  { rnode, predeclare = [], delay, unary = false } /*: SendOpts */,
) {
  const term = callSource({ target, method, args }, { predeclare: predeclare || [], unary });
  const [returnCh] = await rnode.previewPrivateChannels(deployData, 1);
  await rnode.doDeploy({ term, ...deployData }, true);
  if (delay) {
    await delay();
  }
  // ISSUE: loop until we get results?
  const blockResults = await rnode.listenForDataAtName(returnCh);
  // console.log({ blockResults });
  const answerPar = blockResults[0].postBlockData[0];
  // console.log('answerPar', JSON.stringify(answerPar, null, 2));
  return toJSData(answerPar);
}


async function noDelay() {
  return undefined;
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
  { predeclare = [], unary = false } /*: { predeclare: string[], unary: boolean } */,
) {
  return rhoCall({
    // ISSUE: assume target is injection-safe?
    target: `\`${target}\``,
    method: method && method.length > 0 ? [rhol`${method}`] : [],
    args: (
      unary
        ? [rhol`${args}`]
        : args.map(arg => rhol`${arg}`)),
  }, predeclare);
}


/**
 * Caller is responsible for converting pieces to rholang.
 *
 * @param m: message
 * @param m.target: a rholang URI expression: `rho:id:...`
 * @param m.method: [] or ["eat"]
 * @param m.args: a list of rholang terms
 * @param predeclare: names to pre-declare in addition to `return`
 *                    They are passed (deref's do processes) to target
 *                    in reverse order.
 */
function rhoCall({ target, method, args }, predeclare = []) {
  const newNames = ['return', ...predeclare.reverse()];
  const pieces = [...method, ...args, [...predeclare, 'return'].map(n => `*${n}`)];
  /*
        // ISSUE: what comes back from the registry is
        // a tuple if insertSigned and just the thing if insertArbitrary.
        // is that by design?
        for(@(_nonce, target) <- targetCh) {
   */
  const term = `
      new ${newNames.join(', ')}, targetCh, lookup(\`rho:registry:lookup\`), trace(\`rho:io:stderr\`) in {
        trace!({"in remote call to": ${target}}) |
        lookup!(${target}, *targetCh) |
        for(target <- targetCh) {
          trace!({ "target": *target }) |
          target!(${pieces.join(', ')})
        }
      }
    `;
  console.log(term);
  return term;
}
