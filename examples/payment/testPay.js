/** Scenario: Alice pays Bob 10 REV.

Alice has 100 REV at genesis. All she knows about Bob is his public key.

ISSUE: should be: all she knows about Bob is his eth address.

*/
/* global require */
// @flow

const { URL } = require('url');

const { GPrivate } = require('../../protobuf/RhoTypes.js');
const {
  RNode, b2h, h2b, RHOCore, makeProxy, sendCall, keyPair, blake2b256Hash,
} = require('../..');
const { link } = require('./assets');
const { loadRhoModules, unforgeableWithId } = require('../../src/loading');

/*::
import type { ModuleInfo } from '../../src/loading';
 */

const defaultDeployInfo = {
  from: '0x1',
  nonce: 0,
  phloPrice: 1,
  phloLimit: 100000,
  sig: h2b(''),
  sigAlgorithm: 'ed25519',
  term: '',
  timestamp: 0,
};
const user = h2b('d72d0a7c0c9378b4874efbf871ae8089dd81f2ed3c54159fffeaba6e6fca4236'); // arbitrary

const Scenario = {
  amount: 10,
  aliceKey: keyPair(h2b('f6664a95992958bbfeb7e6f50bbca2aa7bfd015aec79820caf362a3c874e9247')),
  bobPk: keyPair(h2b('9217509f61d80a69627daad29796774d1b65d06e70762aa114e9aa534c0d76bb')).publicKey(),
};


async function test({ rnode, clock }) {
  const aliceWalletURI = await genesis({ rnode, clock });

  const [sendMod] /*: ModuleInfo[] */ = await loadRhoModules(
    [link('./sending.rho')], user,
    { rnode, clock },
  );

  await alicePaysBob({ aliceWalletURI, sendURI: sendMod.URI }, { rnode, clock });
}


async function alicePaysBob({ aliceWalletURI, sendURI }, { rnode, clock }) {
  // Wrap send contract with an extra unforgeable channel.
  function sendVia(ch, timestamp, args) {
    return sendCall(
      { target: sendURI, args, method: '' },
      { ...defaultDeployInfo, user, timestamp, term: '' },
      { rnode, predeclare: [ch] },
    );
  }

  const aliceWallet = makeProxy(aliceWalletURI, { user, ...defaultDeployInfo }, { rnode, clock });

  const aliceBalance = await aliceWallet.getBalance();
  console.log({ aliceBalance });
  const aliceNonce = await aliceWallet.getNonce();
  if (!(typeof aliceNonce === 'number')) { throw new Error('expected number; got: ${typeof aliceNonce'); }
  console.log({ aliceNonce });

  const tPmt = clock().valueOf();
  // ISSUE: we're going over gRPC here to get varId and in sendCall to get _ret.
  const [_ret, viaId] = await rnode.previewPrivateIds({ timestamp: tPmt, user }, 2);

  const sigHex = basicWalletSig(Scenario.aliceKey, Scenario.amount, aliceNonce + 1, viaId);

  const bobWalletURI = await sendVia('viaCh', tPmt, [
    aliceWalletURI, Scenario.amount, aliceNonce + 1, sigHex, Scenario.bobPk,
  ]);
  if (!(bobWalletURI instanceof URL)) { throw new Error('expected URL'); }
  console.log(`URI of wallet for Bob: ${String(bobWalletURI)}`);

  const bobWallet = makeProxy(bobWalletURI, { user, ...defaultDeployInfo }, { rnode, clock });

  const bobBalance = await bobWallet.getBalance();
  console.log({ bobBalance });

  const aliceBalanceAfter = await aliceWallet.getBalance();
  console.log({ aliceBalanceAfter });
}


// Compute signature over [nonce, amount, retCh] as in BasicWallet.rho
function basicWalletSig(key, amount, nonce, retId) {
  console.log(
    'preview of unforgeable name needed for signing',
    unforgeableWithId(retId),
  );

  const msg = RHOCore.toByteArray(RHOCore.fromJSData(
    [nonce, Scenario.amount, GPrivate.create({ id: retId })],
  ));

  const sigHex = key.signBytesHex(blake2b256Hash(msg));
  console.log(`sign[${key.publicKey()}](${b2h(msg)}) = ${sigHex}`);

  return sigHex;
}


async function genesis({ rnode, clock }) /*: Promise<URL> */ {
  const [walletMod] /*: ModuleInfo[] */= await loadRhoModules(
    link('./aliceBobWallets.rho'), user,
    { rnode, clock },
  );
  return walletMod.URI;
}


/*global module */
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
      clock: () => new Date(),
    });
  } catch (oops) {
    console.error(oops);
    process.exit(1);
  }
}
