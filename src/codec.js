// @ts-check
import base58 from 'bs58';

const { freeze } = Object;

export const Base16 = freeze({
  /**
   * Encode bytes to base 16 string.
   *
   * @param {Uint8Array | number[]} bytes
   * @returns { string }
   */
  encode(bytes) {
    return (
      Array.from(bytes)
        // eslint-disable-next-line no-bitwise
        .map((x) => (x & 0xff).toString(16).padStart(2, '0'))
        .join('')
    );
  },

  /**
   * Decode base 16 string to bytes.
   *
   * @param {string} hexStr
   */
  decode: (hexStr) => {
    const removed0x = hexStr.replace(/^0x/, '');
    const byte2hex = ([arr, bhi], x) =>
      bhi ? [[...arr, parseInt(`${bhi}${x}`, 16)]] : [arr, x];
    const [resArr] = Array.from(removed0x).reduce(byte2hex, [[]]);
    return Uint8Array.from(resArr);
  },

  /**
   * Encode bytes as hex string
   *
   * ISSUE: uses Buffer API. Require this for browsers?
   * @param {Uint8Array | Buffer} bytes
   * @returns { string }
   */
  encodeBuf(bytes) {
    return Buffer.from(bytes).toString('hex');
  },

  /**
   * Decode hex string to bytes
   * @param {string} hex in hex (base16)
   * @returns { Buffer }
   */
  decodeBuf(hex) {
    return Buffer.from(hex, 'hex');
  },
});

export const Base58 = freeze({
  /**
   * Encode base 16 string to base 58.
   *
   * @param {string} hexStr
   * @returns {string}
   */
  encode: (hexStr) => {
    const bytes = Base16.decode(hexStr);
    return base58.encode(bytes);
  },

  /**
   * Decode base 58 string (handle errors).
   *
   * @param {string} str
   * @returns {Uint8Array | undefined}
   */
  decodeSafe: (str) => {
    try {
      return base58.decode(str);
    } catch (_) {
      return undefined;
    }
  },
});

export const Ascii = freeze({
  /**
   * Decode ASCII string to bytes.
   *
   * @param {string} str
   */
  decode: (str = '') => Array.from(str).map((x) => `${x}`.charCodeAt(0)),
});
