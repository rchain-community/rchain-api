// @ts-check
import sha3 from 'js-sha3';
import blake from 'blakejs';
import elliptic from 'elliptic';
import { Base16, Base58 } from './codec';

const { keccak256 } = sha3;
const { ec } = elliptic;

// eslint-disable-next-line new-cap
const secp256k1 = new ec('secp256k1');

// Algorithm to generate ETH and REV address is taken from RNode source
// https://github.com/rchain/rchain/blob/bf7a30e1/rholang/src/main/scala/coop/rchain/rholang/interpreter/util/AddressTools.scala#L47

// Prefix as defined in https://github.com/rchain/rchain/blob/c6721a6/rholang/src/main/scala/coop/rchain/rholang/interpreter/util/RevAddress.scala#L13
const prefix = { coinId: '000000', version: '00' };

/**
 * @typedef {Object} RevAccount - Represents different formats of REV address
 * @property {string=} privKey
 * @property {string=} pubKey
 * @property {string=} ethAddr
 * @property {string} revAddr
 */

/**
 * Get REV address from ETH address.
 *
 * @param {string} ethAddrRaw
 * @returns {string | null}
 */
export const getAddrFromEth = (ethAddrRaw) => {
  const ethAddr = ethAddrRaw.replace(/^0x/, '');
  if (!ethAddr || ethAddr.length !== 40) return null;

  // Hash ETH address
  const ethAddrBytes = Base16.decode(ethAddr);
  const ethHash = keccak256(ethAddrBytes);

  // Add prefix with hash and calculate checksum (blake2b-256 hash)
  const payload = `${prefix.coinId}${prefix.version}${ethHash}`;
  const payloadBytes = Base16.decode(payload);
  const checksum = blake.blake2bHex(payloadBytes, undefined, 32).slice(0, 8);

  // Return REV address
  return Base58.encode(`${payload}${checksum}`);
};

/**
 * Get REV address (with ETH address) from public key.
 *
 * @param {string} publicKeyRaw
 */
export const getAddrFromPublicKey = (publicKeyRaw) => {
  const publicKey = publicKeyRaw.replace(/^0x/, '');
  if (!publicKey || publicKey.length !== 130) return null;

  // Public key bytes from hex string
  const pubKeyBytes = Base16.decode(publicKey);
  // Remove one byte from pk bytes and hash
  const pkHash = keccak256(pubKeyBytes.slice(1));
  // Take last 40 chars from hashed pk (ETH address)
  const ethAddr = pkHash.slice(-40);

  const revAddr = getAddrFromEth(ethAddr);
  if (!revAddr) throw new TypeError('assert');

  // Return both REV and ETH address
  return { revAddr, ethAddr };
};

/**
 * Get REV address (with ETH address and public key) from private key.
 *
 * @param {string} privateKeyRaw
 */
export const getAddrFromPrivateKey = (privateKeyRaw) => {
  const privateKey = privateKeyRaw.replace(/^0x/, '');
  if (!privateKey || privateKey.length !== 64) return null;

  // Generate REV address from private key
  const key = secp256k1.keyFromPrivate(privateKey);
  const pubKey = key.getPublic('hex');
  const addr = getAddrFromPublicKey(pubKey);
  if (!addr) throw new TypeError('assert');

  // Return public key, REV and ETH address
  return { pubKey, ...addr };
};

/**
 * Verify REV address
 * @param {string} revAddr
 */
export const verifyRevAddr = (revAddr) => {
  const revBytes = Base58.decodeSafe(revAddr);
  if (!revBytes) return undefined;

  // Extract payload and checksum
  const revHex = Base16.encode(revBytes);
  const payload = revHex.slice(0, -8); // without checksum
  const checksum = revHex.slice(-8); // without payload
  // Calculate checksum
  const payloadBytes = Base16.decode(payload);
  const checksumCalc = blake
    .blake2bHex(payloadBytes, undefined, 32)
    .slice(0, 8);

  return checksum === checksumCalc;
};

/**
 * Creates REV address from different formats
 * (private key -> public key -> ETH address -> REV address)
 *
 * @param {string} text
 * @returns {RevAccount=}
 */
export const createRevAccount = (text) => {
  const val = text.replace(/^0x/, '').trim();

  // Account from private key, public key, ETH or REV address
  const fromPriv = getAddrFromPrivateKey(val);
  const fromPub = getAddrFromPublicKey(val);
  const fromEth = getAddrFromEth(val);
  const isRev = verifyRevAddr(val);

  if (isRev) {
    return { revAddr: text };
  } else if (fromPriv) {
    return { privKey: val, ...fromPriv };
  } else if (fromPub) {
    return { pubKey: val, ...fromPub };
  } else if (fromEth) {
    return { privKey: '', pubKey: '', ethAddr: val, revAddr: fromEth };
  }
  throw new RangeError();
};
