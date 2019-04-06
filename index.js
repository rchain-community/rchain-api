/**
 * "we can detail a direct representation of JSON into a
 * fragment of the rholang syntax referred to in the diagram
 * below as RHOCore." -- [Mobile process calculi for programming the blockchain[1]
 *
 * [1]: https://github.com/rchain/mobile-process-calculi-for-blockchain/blob/master/enter-the-blockchain.rst
 */

/* global require, exports, module */
// @flow

const RHOCore = require('./src/RHOCore');

module.exports.RHOCore = RHOCore;


const { RNode } = require('./src/rnodeAPI');

module.exports.RNode = RNode;
/*::
import type { IRNode } from './src/rnodeAPI';
export type { IRNode };
 */

const { sendCall, makeProxy, callSource } = require('./src/proxy');

module.exports.sendCall = sendCall;
module.exports.makeProxy = makeProxy;
module.exports.callSource = callSource;

const signing = require('./src/signing');

/*::
export type Hex<T> = Hex<T>;
export type Bytes = Bytes;
export type Signature = Signature;
export type PrivateKey = PrivateKey;
export type PublicKey = PublicKey;
*/
module.exports.keyPair = signing.keyPair;
module.exports.verify = signing.verify;
module.exports.b2h = signing.b2h;
module.exports.h2b = signing.h2b;


const hashing = require('./src/hashing.js');

module.exports.sha256Hash = hashing.sha256Hash;
module.exports.keccak256Hash = hashing.keccak256Hash;
module.exports.blake2b256Hash = hashing.blake2b256Hash;
module.exports.simplifiedSHA256Hash = hashing.simplifiedSHA256Hash;
module.exports.simplifiedKeccak256Hash = hashing.simplifiedKeccak256Hash;
module.exports.simplifiedBlake2b256Hash = hashing.simplifiedBlake2b256Hash;

const { RevAddress } = require('./src/revAddress');

module.exports.RevAddress = RevAddress;
