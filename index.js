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
const { RevAddress } = require('./src/revAddress');

/*::
import type { IRNode } from './src/rnodeAPI';
export type { IRNode };
 */
exports.RNode = RNode;
exports.Block = Block;

/**
 * REV transaction, vault support
 *
 * Refs:
 *  - [REV Vault][vault] Feb 2019
 *
 * [vault]: https://rchain.atlassian.net/wiki/spaces/CORE/pages/652640311/Wallet+proposal
 *
 * @example
 * // Suppose Alice generates a key pair.
 * const aliceKey = Ed25519keyPair(Hex.decode('11'.repeat(32)));
 * const alicePub = aliceKey.publicKey();
 * assert.equal(alicePub, 'd04ab232742bb4ab3a1368bd4615e4e6d0224ab71a016baf8520a332c9778737');
 *
 * // She can then share her REV address.
 * const aliceAddr = REV.RevAddress.fromPublicKey(Hex.decode(alicePub));
 * assert.equal(aliceAddr.toString(), '11112cFcjtrjwn7qCDvTLMu5jEvMSBN2qT1sBwQxDP9AyQCVi26xKZ');
 *
 * // She can also sign deployments:
 * const term = '@"world"!("Hello!")';
 * const timestamp = new Date('2019-04-12T17:59:29.274Z').valueOf();
 * const info = REV.SignDeployment.sign(aliceKey, { timestamp, term });
 *
 * assert.deepEqual(info.deployer, Hex.decode(alicePub));
 * assert.equal(Hex.encode(info.sig).slice(0, 16), 'ebc47a0a923b7feb');
 * assert(REV.SignDeployment.verify(info));
 */
const REV = { SignDeployment, RevAddress };
exports.REV = REV;

exports.SignDeployment = SignDeployment;

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
