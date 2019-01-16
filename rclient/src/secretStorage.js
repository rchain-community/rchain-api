// https://github.com/ethereum/wiki/wiki/Web3-Secret-Storage-Definition
// https://github.com/ethereumjs/ethereumjs-wallet/blob/master/src/index.js
// why reimplement? (1) education, (2) ocap discipline (3) static typing

/* global require, exports, Buffer */
// @flow

const scrypt = require('scrypt.js'); // ISSUE: just use crypto.script?
const crypto = require('crypto');
const assert = require('assert');

const { keccak256Hash } = require('rchain-api');

/*::

opaque type Bytes<L> = Buffer | string;
opaque type EthAddr = Bytes<20>;
opaque type UUID = string;
type PrivateKey = Buffer;

type SecretStorageV3<C, K> = {
  version: 3,
  id: UUID,
  crypto: C & K & {
    ciphertext: Bytes<32>,
    mac: Bytes<32>,
  },
};

type Cipher<N, P> = {
    cipher: N,
    cipherparams: P,
};

type AES128CTR = Cipher<'aes-128-ctr', { iv: Bytes<16> }>;

type KDF<N, P> = {
  kdf: N,
  kdfparams: P,
};

type SCrypt = KDF<'scrypt', {
    dklen: 32,
    salt: Bytes<32>,
    n: number,
    r: number,
    p: number,
  }>;
*/


const testVectorScrypt /*: SecretStorageV3<AES128CTR, SCrypt> */ = {
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

const testPk = decrypt(Buffer.from('testpassword'), testVectorScrypt);
assert(testPk.toString('hex') === '7a28b5ba57c53603b0b07b56bba752f7784bf506fa95edc395f5cf6c7514fe9d');


exports.decrypt = decrypt;
function decrypt(
  password /*: Buffer*/,
  item /*: SecretStorageV3<AES128CTR, SCrypt>*/,
) /*: PrivateKey */ {
  assert(item.crypto.kdf === 'scrypt');

  const { salt, n, r, p, dklen } = item.crypto.kdfparams;
  const derivedKey = scrypt(password, h2b(salt), n, r, p, dklen);
  // console.log('Derived key:', derivedKey.toString('hex'));

  const MACBody = Buffer.concat([
    derivedKey.slice(16, 32),
    h2b(item.crypto.ciphertext),
  ]);
  // console.log('MAC Body', MACBody.toString('hex'));
  const MAC = Buffer.from(keccak256Hash(MACBody));
  // console.log('MAC', MAC.toString('hex'));
  const diff = MAC.compare(h2b(item.crypto.mac));
  // console.log('MAC diff?', diff);
  if (diff) {
    throw new Error('bad MAC (probably bad password)');
  }

  const cipherKey = derivedKey.slice(0, 128 / 8);
  assert(item.crypto.cipher === 'aes-128-ctr');
  const decipher = crypto.createDecipheriv(
    item.crypto.cipher, cipherKey, Buffer.from(h2b(item.crypto.cipherparams.iv)),
  );
  const privateKey = decipher.update(h2b(item.crypto.ciphertext));
  return privateKey;
}


exports.encrypt = encrypt;
function encrypt(
  privateKey /*: PrivateKey */,
  password /*: Buffer */,
  randomBytes /*: number => Buffer */,
  uuidv4 /*: () => UUID */,
) /*: SecretStorageV3<AES128CTR, SCrypt> */ {
  const kdf /*: SCrypt */ = {
    kdf: 'scrypt',
    kdfparams: {
      salt: randomBytes(32),
      n: 262144,
      r: 8,
      p: 1,
      dklen: 32,
    },
  };
  const derivedKey /*: Buffer */ = scrypt(password, ...Object.values(kdf.kdfparams));
  // console.log('Derived key:', derivedKey.toString('hex'));

  const cipherKey = derivedKey.slice(0, 128 / 8);

  const cipher /*: AES128CTR */ = {
    cipher: 'aes-128-ctr',
    cipherparams: { iv: randomBytes(16) },
  };

  const encipher = crypto.createCipheriv(cipher.cipher, cipherKey, cipher.cipherparams.iv);
  const ciphertext = encipher.update(privateKey);
  encipher.final().copy(ciphertext, ciphertext.length);

  const MACBody = Buffer.concat([
    derivedKey.slice(16, 32),
    ciphertext,
  ]);
  // console.log('MAC Body', MACBody.toString('hex'));
  const mac = Buffer.from(keccak256Hash(MACBody)).toString('hex');
  // console.log('MAC', MAC.toString('hex'));

  const item = {
    version: 3,
    id: uuidv4(),
    crypto: {
      mac,
      ciphertext,
      ...kdf,
      ...cipher,
    },
  };

  // umm... not pretty...
  const bytes = item.crypto;
  bytes.mac = b2h(item.crypto.mac);
  bytes.ciphertext = b2h(item.crypto.ciphertext);
  bytes.cipherparams.iv = b2h(bytes.cipherparams.iv);
  bytes.kdfparams.salt = b2h(item.crypto.kdfparams.salt);

  return item;
}


function h2b/*:: <L>*/(data /*: Bytes<L>*/) /*: Buffer */{
  return typeof data === 'string' ? Buffer.from(data, 'hex') : data;
}

function b2h/*:: <L>*/(data /*: Bytes<L>*/) /*: string */{
  return typeof data === 'string' ? data : data.toString('hex');
}
