/* global require, exports */
// @flow

/**
 * Exchanging data between Rholang and JavaScript
 *
 * RChain uses gRPC and protobuf for its network
 * protocol. [RhoTypes.proto][rAPI] gives the protobuf messages for
 * Rholang. The main one is `Par`.
 *
 * The RHOCore mapping here is derived from Currin et. al but uses a
 * differet mapping for object properties and includes more ground
 * rholang types.
 *
 * **ISSUE**: Document support for unforgeable names.
 *
 * Refs:
 *  - [Mobile process calculi for programming the blockchain][1]
 *    Currin, Denman, Eykholt, Meredith Dec 2016
 *  - [RhoTypes.proto][rAPI] v0.9.1 bf1b2c6 Mar 28, 2019
 *
 * [1]: https://mobile-process-calculi-for-programming-the-new-blockchain.readthedocs.io/en/latest/enter-the-blockchain.html#from-data-storage-to-block-storage-in-the-rchain-model
 * [rAPI]: https://github.com/rchain/rchain/blob/bf1b2c6/models/src/main/protobuf/RhoTypes.proto
 *
 * @example <caption>JSON to rholang and back</caption>
 *
 * const { RHOCore, RhoTypes } = require('rchain-api');
 *
 * const data = [true, 1, 'abc', null, [1, 2, 3]];
 *
 * const rhoProto = RHOCore.fromJSData(data);
 * RhoTypes.Par.verify(rhoProto);
 * assert.deepEqual(RHOCore.toJSData(rhoProto), data);
 *
 * assert.equal(RHOCore.toRholang(rhoProto),
 *     '[true, 1, "abc", Nil, [1, 2, 3]]');
 *
 * @example <caption>Uri and ByteArray</caption>
 *
 * const { URL } = require('url');
 * const { RHOCore, Hex } = require('rchain-api');
 *
 * const data = [new URL('rho:id:123'), Hex.decode('deadbeef')];
 * const rhoProto = RHOCore.fromJSData(data);
 * assert.deepEqual(RHOCore.toJSData(rhoProto), data);
 * assert.equal(RHOCore.toRholang(rhoProto),
 *     '[`rho:id:123`, "deadbeef".hexToBytes()]');
 */
const RHOCore = require('./src/RHOCore');

/*::
export type JsonExt<T> = JsonExt<T>;
 */

exports.RHOCore = RHOCore;
exports.RhoTypes = require('./protobuf/RhoTypes');


const { RNode, SignDeployment, Block } = require('./src/rnodeAPI');
const { RevAddress } = require('./src/revAddress');

/*::
import type { IRNode } from './src/rnodeAPI';
export type { IRNode };
 */
exports.RNode = RNode;
exports.Block = Block;
exports.CasperMessage = require('./protobuf/CasperMessage');

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
 * const { REV, Ed25519keyPair, Hex } = require('rchain-api');
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
 *
 * @example
 * // We can check a REV address before deploying any code.
 * assert.throws(() => {
 *   REV.RevAddress.parse('123');
 * });
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
