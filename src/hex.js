/* global exports, Buffer */
// @flow

/*::
// ISSUE: opaque types?
export type HexStr<T> = string;
export type Bytes = Uint8Array | Buffer;
*/

exports.encode = encode;
function encode/*:: <T: Bytes>*/(bytes /*: T */) /*: string*/ {
  return Buffer.from(bytes).toString('hex');
}

exports.fromBytes = fromBytes;
function fromBytes/*:: <T: Bytes>*/(bytes /*: T */) /*: HexStr<T>*/ {
  return Buffer.from(bytes).toString('hex');
}

exports.decode = decode;
function decode/*:: <T: Bytes>*/(hex /*: HexStr<T>*/) /*: Bytes*/ {
  return Buffer.from(hex, 'hex');
}
