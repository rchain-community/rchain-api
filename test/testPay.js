/** Scenario: Alice pays Bob 10 REV.

Alice has 100 REV at genesis. All she knows about Bob is his public key.

ISSUE: should be: all she knows about Bob is his eth address.

*/
/* global require */

const { URL } = require('url');

const { GPrivate } = require('../protobuf/RhoTypes.js');

const {
  RNode, b2h, h2b, RHOCore, makeProxy, keyPair, blake2b256Hash,
} = require('..');
const { link } = require('./assets');

const { toJSData, rhol } = RHOCore;

const aliceInit = link('./aliceBobWallets.rho');
const defaultPayment = { from: '0x1', nonce: 0, phloPrice: 1, phloLimit: 100000 };
const user = h2b('d72d0a7c0c9378b4874efbf871ae8089dd81f2ed3c54159fffeaba6e6fca4236'); // arbitrary


async function test({ rnode, clock, setTimeout }) {
  const aliceWalletURI = await genesis({ rnode, clock, setTimeout });
  await alicePaysBob(aliceWalletURI, { rnode, clock, setTimeout });
}


const R = {
  debug: new URL('rho:io:stderr'),
  lookup: new URL('rho:registry:lookup'),
  insertArbitrary: new URL('rho:registry:insertArbitrary'),
  sys: new URL('rho:id:wdwc36f4ixa6xacck3ddepmgueum7zueuczgthcqp6771kdu8jogm8'),
  BasicWallet: new URL('rho:id:3yicxut5xtx5tnmnneta7actof4yse3xangw4awzt8c8owqmddgyms'),
};


async function alicePaysBob(aliceWalletURI, { rnode, clock, _setTimeout }) {
  const aliceWallet = makeProxy(aliceWalletURI, { user, ...defaultPayment }, { rnode, clock });

  const aliceBalance = await aliceWallet.getBalance();
  console.log({ aliceBalance });
  const aliceNonce = await aliceWallet.getNonce();
  console.log({ aliceNonce });

  const amount = 10;
  const aliceKey = keyPair(h2b('f6664a95992958bbfeb7e6f50bbca2aa7bfd015aec79820caf362a3c874e9247'));
  const bobKey = keyPair(h2b('9217509f61d80a69627daad29796774d1b65d06e70762aa114e9aa534c0d76bb'));
  const dPmt = { user, timestamp: clock().valueOf(), ...defaultPayment };
  const [retId, depositResultId, bobWalletURIId] = await rnode.previewPrivateIds(dPmt, 3);
  console.log('preview of unforgeable name needed for signing', retId);

  const msg = RHOCore.toByteArray(RHOCore.fromJSData(
    [aliceNonce + 1, amount, GPrivate.create({ id: retId })],
  ));
  console.log('transfer bytes to hash, sign', b2h(msg));
  const sigHex = aliceKey.signBytesHex(blake2b256Hash(msg));
  console.log('pk, sig:', aliceKey.publicKey(), sigHex);

  const term = rhol`
new retCh, depositResult, bobWalletURICh, statusCh,
    debug(${R.debug}), rl(${R.lookup}), ri(${R.insertArbitrary}),
    wCh, bwCh, sysCh, revCh, bobwCh in {
  rl!(${aliceWalletURI}, *wCh) |
  rl!(${R.sys}, *sysCh) |
  rl!(${R.BasicWallet}, *bwCh) |
  for(aliceWallet <- wCh; @(_, sys) <- sysCh) {
    debug!({"aliceWallet": *aliceWallet, "to hash, sign": [${aliceNonce + 1}, ${amount}, *retCh].toByteArray()}) |

    @sys!("lookup", "rev", *revCh) |
    for(@(_, BasicWallet) <- bwCh; rev <- revCh) {
      new emptyREVPurseCh in {
        rev!("makePurse", *emptyREVPurseCh) |
        for(empty <- emptyREVPurseCh) {
          debug!({"empty purse for bob's wallet": *empty}) |
          @BasicWallet!(*empty, "ed25519", ${bobKey.publicKey()}, *bobwCh)
        }
      }
    }
    |
    // ISSUE: if you pass in bytes rather than hex for sig, nothing comes back
    aliceWallet!("transfer", ${amount}, ${aliceNonce + 1}, ${sigHex}, *retCh, *statusCh) |
    for(@status <- statusCh) {
      debug!({"transfer status": status}) |
      if (status == "Success") {
          for(pmt <- retCh; @[bobWallet] <- bobwCh) {
            debug!({"pmt": *pmt, "bob wallet": bobWallet}) | // ISSUE: purses can go out of scope and get lost forever
            @bobWallet!("deposit", 10, *pmt, *depositResult) |
            new ch in { ri!(bobWallet, *ch) | for (@uri <- ch) { bobWalletURICh!(uri) } }
          }
      } else {
        debug!("lose!")
      }
    }
  }
}

  `;
  console.log('code to pay:', dPmt.timestamp, term);
  await rnode.doDeploy({ term, ...dPmt }, true);
  const found = await rnode.listenForDataAtName({ ids: [{ id: depositResultId }] });
  const par = firstBlockData(found);
  console.log('payment result:', toJSData(par));

  const f2 = await rnode.listenForDataAtName({ ids: [{ id: bobWalletURIId }] });
  const par2 = firstBlockData(f2);
  const bobWalletURI = toJSData(par2);
  console.log('bob wallet URI:', bobWalletURI);

  const bobWallet = makeProxy(bobWalletURI, { user, ...defaultPayment }, { rnode, clock });

  const bobBalance = await bobWallet.getBalance();
  console.log({ bobBalance });
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
