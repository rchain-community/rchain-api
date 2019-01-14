// https://github.com/ethereum/wiki/wiki/Web3-Secret-Storage-Definition
// https://github.com/ethereumjs/ethereumjs-wallet/blob/master/src/index.js

/* global require, exports, Buffer */

const scrypt = require('scrypt.js'); // ISSUE: just use crypto.script?
const crypto = require('crypto');
const assert = require('assert');

const { h2b, keccak256Hash } = require('rchain-api');

/*::

opaque type Hex<L> = string;
opaque type EthAddr = Hex<20>;
opaque type UUID = string;
opaque type PrivateKey = Buffer;

type SecretStorageV3 = {
  version: 3,
  id: UUID,
  crypto: {
    ciphertext: Hex<32>,
    cipherparams: { iv: Hex<16> },
    cipher: 'aes-128-ctr', // TODO: handle others?
    kdf: 'scrypt', // TODO: handle others?
    kdfparams: {
      dklen: 32,
      salt: Hex<32>,
      n: number,
      r: number,
      p: number,
    },
    mac: Hex<32>,
  },
};

*/


const testVectorScrypt /*: SecretStorageV3 */ = {
  crypto: {
    cipher: 'aes-128-ctr',
    cipherparams: { iv: '83dbcc02d8ccb40e466191a123791e0e' },
    ciphertext: 'd172bf743a674da9cdad04534d56926ef8358534d458fffccd4e6ad2fbde479c',
    kdf: 'scrypt',
    kdfparams: {
      dklen: 32,
      n: 262144,
      p: 8,
      r: 1,
      salt: 'ab0c7876052600dd703518d6fc3fe8984592145b591fc8fb5c6d43190334ba19',
    },
    mac: '2103ac29920d71da29f15d75b4a16dbe95cfd7ff8faea1056c33131d846e3097',
  },
  id: '3198bc9c-6672-5ab3-d995-4942343ae5b6',
  version: 3,
};

const testPk = load(Buffer.from('testpassword'), testVectorScrypt);
assert(testPk.toString('hex') === '7a28b5ba57c53603b0b07b56bba752f7784bf506fa95edc395f5cf6c7514fe9d');


exports.load = load;
function load(password /*: Buffer*/, item /*: SecretStorageV3*/) /*: PrivateKey */ {
  assert(item.crypto.kdf === 'scrypt');

  const { salt, n, r, p, dklen } = item.crypto.kdfparams;
  const derivedKey = scrypt(password, h2b(salt), n, r, p, dklen);
  // console.log('Derived key:', derivedKey.toString('hex'));

  const MACBody = Buffer.concat([
    derivedKey.slice(16, 32),
    Buffer.from(h2b(item.crypto.ciphertext)),
  ]);
  // console.log('MAC Body', MACBody.toString('hex'));
  const MAC = Buffer.from(keccak256Hash(MACBody));
  // console.log('MAC', MAC.toString('hex'));
  const diff = MAC.compare(Buffer.from(h2b(item.crypto.mac)));
  // console.log('MAC diff?', diff);
  if (diff) {
    throw new Error('bad MAC (probably bad password)');
  }

  const cipherKey = derivedKey.slice(0, 128 / 8);
  assert(item.crypto.cipher === 'aes-128-ctr');
  const decipher = crypto.createDecipheriv(
    item.crypto.cipher, cipherKey, Buffer.from(h2b(item.crypto.cipherparams.iv)),
  );
  const privateKey = decipher.update(item.crypto.ciphertext, 'hex');
  return privateKey;
}
