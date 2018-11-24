/** keyPair -- ed25519 signing

Note also rho:pubkey:ed25519:xxxxx.

 */
/* global require, exports, Buffer */

// ref https://nodejs.org/api/util.html#util_custom_inspection_functions_on_objects
// ack: https://stackoverflow.com/a/46870568
// const inspect = require('util').inspect;

const { sign } = require('tweetnacl'); // ocap discpline: "hiding" keyPair

const { fromJSData, toByteArray } = require('./RHOCore');

const b2h = bytes => Buffer.from(bytes).toString('hex');
const h2b = hex => Buffer.from(hex, 'hex');
const t2b = text => Buffer.from(text);

const def = obj => Object.freeze(obj); // cf. ocap design note

exports.b2h = b2h;
exports.h2b = h2b;

exports.keyPair = keyPair;
/**
 * Build key pair from seed.
 * @param seed: 32 bytes, as from crypto.randombytes(32)
 * @return: object with .signBytes etc. methods (IOU real docs, or at least tests)
 */
function keyPair(seed) {
  const key = sign.keyPair.fromSeed(seed);

  // TODO const toString = () => `<keyPair ${label}: ${state.publicKey.substring(0, 12)}...>`;
  const signBytes = bytes => sign.detached(bytes, key.secretKey);

  return def({
    // TODO toString,
    signBytes,
    signBytesHex: bytes => b2h(signBytes(bytes)),
    signText: text => signBytes(t2b(text)),
    signTextHex: text => b2h(signBytes(t2b(text))),
    signData: data => signBytes(toByteArray(fromJSData(data))),
    signDataHex: data => b2h(signBytes(toByteArray(fromJSData(data)))),
    publicKey: () => b2h(key.publicKey),
    // TODO label: () => state.label,
    // TODO [inspect.custom]: toString
  });
}


exports.verify = verify;
function verify(message /*: Uint8Array*/, sig /*: Uint8Array*/, publicKey /*: Uint8Array*/) {
  return sign.detached.verify(message, sig, publicKey);
}


function integrationTest({ randomBytes }) {
  const seed = randomBytes(32);

  const pair1 = keyPair(seed);
  // TODO console.log('inspect keyPair:', pair1);
  // TODO console.log('keyPair.toString():', pair1.toString());
  console.log('public key:', pair1.publicKey());
  console.log('signature:', pair1.signTextHex('hello world'));
}


if (require.main === module) {
  // ocap: Import powerful references only when invoked as a main module.
  /* eslint-disable global-require */
  integrationTest({ randomBytes: require('crypto').randomBytes });
}
