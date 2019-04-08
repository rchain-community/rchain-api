/* global require, exports, Buffer */

const base58 = require('bs58');
const { blake2b256Hash } = require('./hashing');
const { h2b } = require('./signing');

const checksumLength = 4;
const keyLength = 32;
const coinId = '000000';
const version = '00';
const prefix = h2b(coinId + version);

/*::
type Bytes = Uint8Array;
type PublicKey = Bytes; // newtype? length?

export type RevAddr = {
  address: Address,
  toString: () => string,
};

type Address = {
  prefix: Bytes,
  keyHash: Bytes,
  checksum: Bytes,
};
*/

/**
 * A RevAddress has a prefix, a keyHash, and a checksum.
 *
 * Use toString() to get base58 form.
 */
const RevAddress = Object.freeze({ fromPublicKey });
exports.RevAddress = RevAddress;

/**
 * Compute REV Address
 * @memberof RevAddress
 * @param pk: ed25519 public key
 * @return: RevAddress
 *
 * Refs:
 * https://github.com/rchain/rchain/blob/9ae5825/rholang/src/main/scala/coop/rchain/rholang/interpreter/util/AddressTools.scala
 * https://github.com/rchain/rchain/blob/9ae5825/rholang/src/main/scala/coop/rchain/rholang/interpreter/util/RevAddress.scala#L16
 *
 * - ISSUE: find RevAddress spec
 * - ISSUE: how to use tests as documentation?
 */
exports.fromPublicKey = fromPublicKey;
function fromPublicKey(pk /*: PublicKey */) /*: RevAddr */ {
  if (keyLength !== pk.length) { throw new Error(`bad public key length: ${pk.length}`); }
  const keyHash = blake2b256Hash(pk);
  const payload = concat(prefix, keyHash);
  const checksum = computeChecksum(payload);
  const s = base58.encode(Buffer.from(concat(payload, checksum)));

  return Object.freeze({
    address: {
      prefix,
      keyHash,
      checksum,
    },
    toString: () => s,
  });
}

function computeChecksum(toCheck /*: Bytes */) /*: Bytes*/ {
  return blake2b256Hash(toCheck).slice(0, checksumLength);
}

function concat(a, b) {
  const out = new Uint8Array(a.length + b.length);
  out.set(a);
  out.set(b, a.length);
  return out;
}
