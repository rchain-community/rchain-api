/* keyPair -- ed25519 signing
 */
/* global require, exports, Buffer */
// @flow

/*::

// ISSUE: opaque types?
export type Hex<T> = string;
export type Bytes = Uint8Array | Buffer;
export type Signature = Bytes;
export type PrivateKey = Bytes;
export type PublicKey = Bytes;

*/

// ref https://nodejs.org/api/util.html#util_custom_inspection_functions_on_objects
// ack: https://stackoverflow.com/a/46870568
// const inspect = require('util').inspect;

const { sign } = require('tweetnacl'); // ocap discpline: "hiding" keyPair

const { fromJSData, toByteArray } = require('./RHOCore');
/*::
import type { JsonExt } from './RHOCore';
*/

function b2h/*:: <T: Bytes>*/(bytes /*: T */) /*: string*/ {
  return Buffer.from(bytes).toString('hex');
}
function b2hx/*:: <T: Bytes>*/(bytes /*: T */) /*: Hex<T>*/ {
  return Buffer.from(bytes).toString('hex');
}
function h2b/*:: <T: Bytes>*/(hex /*: Hex<T>*/) /*: Bytes*/ {
  return Buffer.from(hex, 'hex');
}

const t2b = text => Buffer.from(text);

const def = obj => Object.freeze(obj); // cf. ocap design note

exports.b2h = b2h;
exports.h2b = h2b;

exports.keyPair = keyPair;
/**
 * Build key pair from seed.
 * @param seed 32 bytes, as from crypto.randombytes(32)
 */
function keyPair(seed /*: PrivateKey */) {
  const key = sign.keyPair.fromSeed(seed);

  // TODO const toString = () => `<keyPair ${label}: ${state.publicKey.substring(0, 12)}...>`;
  /**
   * @memberof keyPair
   */
  function signBytes(bytes /*: Uint8Array */) /*: Signature */ {
    return sign.detached(bytes, key.secretKey);
  }

  return def({
    // TODO toString,
    signBytes,
    /**
     * @memberof keyPair
     */
    signBytesHex(bytes /*: Uint8Array*/) /*: Hex<Signature> */ { return b2hx(signBytes(bytes)); },
    /**
     * @memberof keyPair
     */
    signText(text /*: string*/) /*: Signature */ { return signBytes(t2b(text)); },
    /**
     * @memberof keyPair
     */
    signTextHex(text /*: string*/) /*: Hex<Signature> */ { return b2hx(signBytes(t2b(text))); },
    /**
     * @memberof keyPair
     */
    publicKey() /*: Hex<PublicKey> */ { return b2hx(key.publicKey); },

    /**
     * @memberof keyPair
     */
    signData(data /*: JsonExt<URL | GPrivate>*/) /*: Signature */ {
      return signBytes(toByteArray(fromJSData(data)));
    },
    /**
     * @memberof keyPair
     */
    signDataHex(data /*: JsonExt<URL | GPrivate>*/) /*: Hex<Signature> */ {
      return b2hx(signBytes(toByteArray(fromJSData(data))));
    },
    // TODO label: () => state.label,
    // TODO [inspect.custom]: toString
  });
}


exports.verify = verify;
/**
 * Verify ed25519 signature
 */
function verify(
  message /*: Uint8Array*/,
  sig /*: Signature */,
  publicKey /*: PublicKey */,
) /*: Signature */ {
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


// ocap: Import powerful references only when invoked as a main module.
/* global module */
/* eslint-disable global-require */
if (require.main === module) {
  integrationTest({ randomBytes: require('crypto').randomBytes });
}
