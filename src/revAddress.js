/* global require, exports, Buffer */
// @flow

const base58 = require('bs58');
const { blake2b256Hash } = require('./signing').RholangCrypto;
const h2b = require('./hex').decode;

const checksumLength = 4;
const keyLength = 32;
const coinId = '000000';
const version = '00';
const prefix = h2b(coinId + version);

/*::
export interface IRevAddress {
  address: Address,
  toString: () => string,
};

type Address = {
  prefix: Uint8Array,
  keyHash: Uint8Array,
  checksum: Uint8Array,
};
*/

/**
 * A RevAddress refers to a REV vault.
 *
 * Use `toString()` to get base58 form.
 *
 * Refs:
 *  - [RevAddress.scala](https://github.com/rchain/rchain/blob/9ae5825/rholang/src/main/scala/coop/rchain/rholang/interpreter/util/RevAddress.scala)
 *  - [AddressTools.scala](https://github.com/rchain/rchain/blob/9ae5825/rholang/src/main/scala/coop/rchain/rholang/interpreter/util/AddressTools.scala)
 *
 * @memberof REV
 */
const RevAddress = (() => {
  /**
   * Compute REV Address from public key
   *
   * @param pk ed25519 public key
   *
   * @memberof REV.RevAddress
   */
  function fromPublicKey(pk /*: Uint8Array */) /*: IRevAddress */ {
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

  return Object.freeze({ fromPublicKey });
})();
exports.RevAddress = RevAddress;

function computeChecksum(toCheck /*: Uint8Array */) /*: Uint8Array */ {
  return blake2b256Hash(toCheck).slice(0, checksumLength);
}

function concat(a, b) {
  const out = new Uint8Array(a.length + b.length);
  out.set(a);
  out.set(b, a.length);
  return out;
}
