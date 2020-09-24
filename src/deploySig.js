// @ts-check
import blake from 'blakejs';
import elliptic from 'elliptic';
import jspb from 'google-protobuf';

import { Base16 } from './hex.js';

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
function serialize(info) {
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
      term,
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
