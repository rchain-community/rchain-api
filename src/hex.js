// @ts-check

export const Base16 = Object.freeze({
  encode(bytes) {
    /** @type {(x: number) => number } */
    return (
      Array.from(bytes)
        // eslint-disable-next-line no-bitwise
        .map((x) => (x & 0xff).toString(16).padStart(2, '0'))
        .join('')
    );
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
