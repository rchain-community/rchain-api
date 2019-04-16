/* global exports, Buffer */
// @flow

/*::
// ISSUE: opaque types?
export type HexStr<T> = string;
export type Bytes = Uint8Array | Buffer;
*/

/**
 * A byte sequence
 *
 * @typedef { Uint8Array | Buffer } Bytes
 *
 * @memberof Hex
 */

/**
 * Hex (base16) encoding of a Bytes type
 *
 * @typedef { string } HexStr<T: Bytes>
 *
 * @memberof Hex
 */

/**
 * Encode bytes as hex string
 *
 * @memberof Hex
 */
function encode/*:: <T: Bytes>*/(bytes /*: T */) /*: string*/ {
  return Buffer.from(bytes).toString('hex');
}
exports.encode = encode;

exports.fromBytes = fromBytes;
function fromBytes/*:: <T: Bytes>*/(bytes /*: T */) /*: HexStr<T>*/ {
  return Buffer.from(bytes).toString('hex');
}

/**
 * Decode hex string to bytes
 *
 * @memberof Hex
 */
function decode/*:: <T: Bytes>*/(hex /*: HexStr<T>*/) /*: Bytes*/ {
  return Buffer.from(hex, 'hex');
}
exports.decode = decode;
