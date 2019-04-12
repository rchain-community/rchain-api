/**
 * "we can detail a direct representation of JSON into a
 * fragment of the rholang syntax referred to in the diagram
 * below as RHOCore." -- [Mobile process calculi for programming the blockchain[1]
 *
 * [1]: https://github.com/rchain/mobile-process-calculi-for-blockchain/blob/master/enter-the-blockchain.rst
 */

/* global require, exports */
// @flow

const RHOCore = require('./src/RHOCore');

/*::
export type JsonExt<T> = JsonExt<T>;
 */

exports.RHOCore = RHOCore;


const { RNode, SignDeployment, Block } = require('./src/rnodeAPI');

/*::
import type { IRNode } from './src/rnodeAPI';
export type { IRNode };
 */
exports.RNode = RNode;
exports.SignDeployment = SignDeployment;
exports.Block = Block;

/**
 * Proxy method calls to registered RChain channels.
 */
const RegistryProxy = require('./src/proxy');

exports.RegistryProxy = RegistryProxy;

/*::
export type Signature = Signature;
export type PrivateKey = PrivateKey;
export type PublicKey = PublicKey;
*/
const { Ed25519keyPair, RholangCrypto } = require('./src/signing');

exports.Ed25519keyPair = Ed25519keyPair;
exports.RholangCrypto = RholangCrypto;

/*::
export type HexStr<T> = HexStr<T>;
export type Bytes = Bytes;
*/

exports.Hex = require('./src/hex');

const { RevAddress } = require('./src/revAddress');

exports.RevAddress = RevAddress;
