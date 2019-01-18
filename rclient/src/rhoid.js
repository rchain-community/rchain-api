// https://github.com/rchain/rchain/blob/27f76eb02ab2d83bf2bc9cd766157c4723db0854/rholang/src/main/scala/coop/rchain/rholang/interpreter/Registry.scala#L1028-L1047  // eslint-disable-line
// @flow
/* global exports, Buffer */
/*eslint no-bitwise: [2, { allow: ["^", "&", "<<", ">>>"] }] */

const { blake2b256Hash, b2h } = require('rchain-api');
const base32 = require('base32-encoding');

const zbase32 = buf => base32.stringify(buf, 'ybndrfg8ejkmcpqxot1uwisza345h769');


const INIT_REMAINDER = 0;

function update(rem0, b) {
  function loop(i, rem) {
    if (i < 8) {
      const shiftRem = (rem << 1) & 0xFFFF;
      return ((shiftRem & 0x4000) !== 0)
        ? loop(i + 1, (shiftRem ^ 0x4805) & 0xFFFF)
        : loop(i + 1, shiftRem);
    }
    return rem;
  }
  return loop(0, (rem0 ^ (b << 6)) & 0xFFFF);
}

exports.CRC14 = { compute };
function compute(b /*: Buffer*/) /*: number */{
  return [...b.values()].reduce(update, INIT_REMAINDER);
}


exports.buildURI = buildURI;
function buildURI(arr /*: Buffer*/) /*: string */{
  const fullKey = Buffer.alloc(34, 0);
  arr.copy(fullKey, 0, 0, 32);
  const crc = compute(fullKey.slice(0, 32));
  fullKey[32] = crc & 0xff;
  fullKey[33] = ((crc & 0xff00) >>> 6) & 0xff;
  return `rho:id:${zbase32(fullKey).slice(0, 270 / 5)}`; // 270 bits
}

exports.pkURI = pkURI;
function pkURI(pk /*: Buffer*/) {
  const hash = blake2b256Hash(pk);
  return buildURI(Buffer.from(hash));
}


function test() {
  const pk = Buffer.from('a2c8007965d9695298679722b6a822b0c36b280ec2ee4ce44454509658345226', 'hex');
  const hash = blake2b256Hash(pk);
  const uri = buildURI(Buffer.from(hash));
  console.log({
    pk: pk.toString('hex'),
    hash: b2h(hash),
    uri,
    ok: uri === 'rho:id:5x4bpc8y66ek1yiutdkqwm6t46qbaw41f6wwea1eoizbaifx6o5ikb',
  });
}


if (require.main === module) {
  test();
}
