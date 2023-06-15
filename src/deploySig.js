// @ts-check

import blake from 'blakejs';
import elliptic from 'elliptic';
import jspb from 'google-protobuf';
import * as ethUtil from 'ethereumjs-util';

import { Base16 } from './codec.js';
import { MetaMaskAccount } from './ethProvider.js';

// eslint-disable-next-line new-cap
const secp256k1 = new elliptic.ec('secp256k1');

/**
 * @param {string} keyHex
 * @param {DeployData} info
 * @typedef {import('./rnode-openapi-schema').DeployData} DeployData
 */
export function signPrep(keyHex, info) {
  const key = secp256k1.keyFromPrivate(keyHex);
  // eslint-disable-next-line no-use-before-define
  const deploySerialized = serialize(info);
  const hashed = blake.blake2bHex(deploySerialized, undefined, 32);
  const deployer = Uint8Array.from(key.getPublic('array'));
  const sigArray = key.sign(hashed, { canonical: true }).toDER('array');
  const signature = Uint8Array.from(sigArray);
  const signedDeploy = { ...info, signature, deployer };
  return {
    hashed,
    deployer,
    deploySerialized,
    key,
    sigArray,
    signature,
    signedDeploy,
  };
}

/**
 * @param {DeployData} info
 */
export function serialize(info) {
  const { term, timestamp, phloPrice, phloLimit, validAfterBlockNumber } = info;

  // Serialize payload with protobuf
  const writer = new jspb.BinaryWriter();
  // Write fields (protobuf doesn't serialize default values)
  // TODO: test!
  const writeString = (order, val) =>
    val !== '' && writer.writeString(order, val);
  const writeInt64 = (order, val) => val !== 0 && writer.writeInt64(order, val);

  writeString(2, term);
  writeInt64(3, timestamp);
  writeInt64(7, phloPrice);
  writeInt64(8, phloLimit);
  writeInt64(10, validAfterBlockNumber);
  return writer.getResultBuffer();
}

/**
 * @param {string} keyHex
 * @param {DeployData} info
 * @returns { DeployRequest }
 * @typedef {import('./rnode-openapi-schema').DeployRequest} DeployRequest
 */
export function sign(keyHex, info) {
  const { term, timestamp, phloPrice, phloLimit, validAfterBlockNumber } = info;
  const { deployer, signature } = signPrep(keyHex, info);

  return {
    data: {
      Base16.encode(term),
      timestamp,
      phloPrice,
      phloLimit,
      validAfterBlockNumber,
    },
    sigAlgorithm: 'secp256k1',
    signature: Base16.encode(signature),
    deployer: Base16.encode(deployer),
  };
}

/**
 * @param {Iterable<number>} data
 * @param {string} sigHex
 * @returns { string } public key in hex
 */
export function recoverPublicKeyEth(data, sigHex) {
  // Ethereum lib to recover public key from massage and signature
  const hashed = ethUtil.hashPersonalMessage(ethUtil.toBuffer([...data]));
  const sigBytes = ethUtil.toBuffer(sigHex);
  // @ts-ignore fromRpcSig seems ok with a buffer as well as string
  const { v, r, s } = ethUtil.fromRpcSig(sigBytes);
  // Public key without prefix
  const pubkeyRecover = ethUtil.ecrecover(hashed, v, r, s);

  return Base16.encode([4, ...pubkeyRecover]);
}

/**
 * Serialize and sign with Metamask extension
 * - this will open a popup for user to confirm/review
 *
 * @param {DeployData} deployData
 * @param {MetaMaskProvider} ethereum
 * @returns {Promise<DeployRequest>}
 *
 * @typedef { import('./ethProvider').MetaMaskProvider } MetaMaskProvider
 */
export async function signMetaMask(deployData, ethereum) {
  const data = serialize(deployData);
  const acct = MetaMaskAccount(ethereum);
  const ethAddr = await acct.ethereumAddress();
  const sigHex = await acct.ethereumSign(data, ethAddr);
  // Extract public key from signed message and signature
  const pubKeyHex = recoverPublicKeyEth(data, sigHex);
  // Create deploy object for signature verification
  return {
    data: deployData,
    signature: sigHex.replace(/^0x/, ''),
    deployer: pubKeyHex,
    sigAlgorithm: 'secp256k1:eth',
  };
}
