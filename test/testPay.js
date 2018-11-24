/** Scenario: Alice pays Bob 10 REV.

Alice has 100 REV at genesis. All she knows about Bob is his public key.

ISSUE: should be: all she knows about Bob is his eth address.

*/
/* global require */

const { RNode, b2h, h2b, RHOCore, makeProxy } = require('..');
const { link } = require('./assets');

const { toJSData } = RHOCore;

const aliceInit = link('./aliceBobWallets.rho');
const defaultPayment = { from: '0x1', nonce: 0, phloPrice: 1, phloLimit: 100000 };
const user = h2b('d72d0a7c0c9378b4874efbf871ae8089dd81f2ed3c54159fffeaba6e6fca4236'); // arbitrary


async function test({ rnode, clock, setTimeout }) {
  const aliceWalletURI = await genesis({ rnode, clock, setTimeout });
  await alicePaysBob(aliceWalletURI, { rnode, clock, setTimeout });
}


async function alicePaysBob(aliceWalletURI, { rnode, clock, _setTimeout }) {
  const aliceWallet = makeProxy(aliceWalletURI, { user, ...defaultPayment }, { rnode, clock });

  const aliceBalance = await aliceWallet.getBalance();
  console.log({ aliceBalance });
  const aliceNonce = await aliceWallet.getNonce();
  console.log({ aliceNonce });
}


async function genesis({ rnode, clock, setTimeout }) {
  const initDeploy = {
    user,
    term: aliceInit,
    timestamp: clock().valueOf(),
    ...defaultPayment,
  };
  const walletURI = await callContract(initDeploy, { rnode, setTimeout });
  console.log({ walletURI });
  return walletURI;
}


async function callContract(deploy, { rnode, setTimeout }) {
  const [ret] = await rnode.previewPrivateChannels(deploy, 1);
  console.log('callContract ret:', b2h(ret.ids[0].id));
  await rnode.doDeploy(deploy, true);
  await makeTimer(setTimeout)(250);
  const found = await rnode.listenForDataAtName(ret);
  const par = firstBlockData(found);
  // console.log('callContract ret par:', par);
  console.log('callContract ret par JS:', toJSData(par));
  return toJSData(par);
}


// Get the first piece of data from listenForDataAtName
function firstBlockData(blockResults) {
  // console.log('found:', JSON.stringify(blockResults, null, 2));
  const ea = [].concat(...blockResults.map(br => br.postBlockData));
  // console.log('ea: ', JSON.stringify(ea, null, 2));
  const good = ea.filter(it => it.exprs.length > 0 || it.bundles.length > 0 || it.ids.length > 0);
  // console.log('good:');
  // console.log(JSON.stringify(good, null, 2));
  return good[0];
}

function makeTimer(setTimeout) {
  return function timer(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  };
}


/*global module, setTimeout */
if (require.main === module) {
  /* global process */
  /* eslint-disable global-require */
  const endpoint = {
    host: process.env.npm_config_host || 'localhost',
    port: parseInt(process.env.npm_config_port || '40401', 10),
  };
  const rnode = RNode(require('grpc'), endpoint);

  try {
    test({
      rnode,
      setTimeout,
      clock: () => new Date().valueOf(),
    });
  } catch (oops) {
    console.error(oops);
    process.exit(1);
  }
}
