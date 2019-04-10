/* keyPair -- ed25519 signing
 */
/* global require, exports, Buffer */
// @flow

/*::

import type { HexStr, Bytes } from './hex';

// ISSUE: opaque types?
export type Signature = Bytes;
export type PrivateKey = Bytes;
export type PublicKey = Bytes;

export type KeyPair = $Call<typeof keyPair, PrivateKey>;
*/

// ref https://nodejs.org/api/util.html#util_custom_inspection_functions_on_objects
// ack: https://stackoverflow.com/a/46870568
// const inspect = require('util').inspect;

const crypto = require('crypto');

const { sign } = require('tweetnacl'); // ocap discpline: "hiding" keyPair
const blake2 = require('blake2');
const { keccak256 } = require('js-sha3');

const b2hx = require('./hex').fromBytes;

const def = obj => Object.freeze(obj); // cf. ocap design note

/**
 * Build key pair from seed.
 *
 * @param seed 32 bytes, as from crypto.randombytes(32)
 * @memberof Ed25519
 */
function keyPair(seed /*: PrivateKey */) {
  const key = sign.keyPair.fromSeed(seed);
  const t2b = text => Buffer.from(text);

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
    signBytesHex(bs /*: Uint8Array*/) /*: HexStr<Signature> */ { return b2hx(signBytes(bs)); },
    /**
     * @memberof keyPair
     */
    signText(text /*: string*/) /*: Signature */ { return signBytes(t2b(text)); },
    /**
     * @memberof keyPair
     */
    signTextHex(text /*: string*/) /*: HexStr<Signature> */ { return b2hx(signBytes(t2b(text))); },
    /**
     * @memberof keyPair
     */
    publicKey() /*: HexStr<PublicKey> */ { return b2hx(key.publicKey); },

    // TODO label: () => state.label,
    // TODO [inspect.custom]: toString
  });
}


/**
 * Verify ed25519 signature
 *
 * @memberof Ed25519
 */
function verify(
  message /*: Uint8Array*/,
  sig /*: Signature */,
  publicKey /*: PublicKey */,
) /*: boolean */ {
  return sign.detached.verify(message, sig, publicKey);
}

exports.Ed25519 = Object.freeze({ keyPair, verify });

exports.SHA256 = Object.freeze({ hash: sha256Hash });
/**
 * Compute a SHA256 hash over some data, the way that it will be computed in Rholang
 *
 * @param serializedData: Uint8Array of serialized Rholang data, used to compute the hash
 * @return Uint8Array of bytes representing the computed hash
 * @memberof SHA256
 */
function sha256Hash(serializedData /*: Uint8Array*/) /*: Uint8Array*/ {
  const sha256 = crypto.createHash('sha256');
  sha256.update(Buffer.from(serializedData));
  return Uint8Array.from(sha256.digest());
}

/**
 * Compute a Keccak-256 hash over some data, the way that it will be computed in Rholang
 *
 * @param serializedData: Uint8Array of serialized Rholang data, used to compute the hash
 * @return Uint8Array of bytes representing the computed hash
 */
function keccak256Hash(serializedData /*: Uint8Array*/) /*: Uint8Array*/ {
  return new Uint8Array(keccak256.arrayBuffer(serializedData));
}
exports.Keccak256 = { hash: keccak256Hash };


exports.Blake2b256 = Object.freeze({ hash: blake2b256Hash });
/**
 * Compute a Blake2b-256 hash over some data, the way that it will be computed in Rholang
 *
 * @param serializedData: Uint8Array of serialized Rholang data, used to compute the hash
 * @return Uint8Array of bytes representing the computed hash
 */
function blake2b256Hash(serializedData /*: Uint8Array*/) /*: Uint8Array*/ {
  const blake2b256 = blake2.createHash('blake2b', { digestLength: 32 });
  blake2b256.update(serializedData);
  return Uint8Array.from(blake2b256.digest());
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
