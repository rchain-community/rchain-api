/*global require, exports*/

const { rhol, toJSData, fromJSData } = require('./RHOCore');
const { h2b } = require('./signing');
const { RNode } = require('./rnodeAPI');

const def = Object.freeze;

/*::
import type { IRNode } from './rnodeAPI';
*/

exports.makePeer = makePeer;
function makePeer(rnode /*: IRNode */, user /*: Uint8Array */,
                  clock /*: () => Date */,
                  setTimeout,
                  // ISSUE: is 1/2 sec between createBlock and listen long enough?
                  delay=500,
                  payOpts={ phloLimit: 100000, phloPrice: 1, from: '0x01'}) {

  /**
   * Note: For better compositionality, JS args are combined into one
   * list arg on the rholang side.
   */
  function callSource(target /*: string*/,
                      method /*: string*/,
                      args /*: mixed[]*/) {
    // ISSUE: assume target is injection-safe?
    const term = rhol`
      new return, targetCh, lookup(\`rho:registry:lookup\`) in {
        lookup!(\`__TARGET__\`, *targetCh) |
        for(target <- targetCh) {
          target!(${method}, ${args}, *return)
        }
      }
    `.replace('__TARGET__', target);
    console.log(term);
    return term;
  }

  async function returnChannel(timestamp) {
    const ids = await rnode.previewPrivateNames({ user, timestamp, nameQty: 1 });
    const id = ids.ids[0];
    return { ids: [{ id }] };
  }

  async function sendCall(target /*: string*/,
                          method /*: string*/,
                          args /*: mixed[]*/) {
    const term = callSource(target, method, args);
    const timestamp = clock().valueOf();
    const returnCh = await returnChannel(timestamp);
    await rnode.doDeploy({ term, user, timestamp, ...payOpts }, true);
    if (delay) {
      await makeTimer(setTimeout)(delay);
    }
    const blockResults = await rnode.listenForDataAtName(returnCh);
    // console.log({ blockResults });
    const answerPar = blockResults[0].postBlockData[0];
    // console.log('answerPar', JSON.stringify(answerPar, null, 2));
    return toJSData(answerPar);
  }

  function makeProxy(rName /*: string */) {
    return new Proxy({}, {
      get: (_, prop) => (...args) => sendCall(rName, prop, args),
      // override set to make it read-only?
    });
  }

  return def({ sendCall, makeProxy, callSource, returnChannel });
}


function makeTimer(setTimeout) {
  return function timer(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  };
}
