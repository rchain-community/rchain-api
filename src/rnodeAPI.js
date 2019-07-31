/* rnodeAPI -- RChain node Casper gRPC API endpoints

refs:
  - [DeployService.proto][1] and RhoTypes.proto.
  - [gRPC in node.js][2]

[1]: https://github.com/rchain/rchain/blob/release-rnode-v0.9.11/models/src/main/protobuf/DeployService.proto
[2]: https://grpc.io/docs/tutorials/basic/node.html

*/
/* global require, exports, Buffer */
// @flow strict

const assert = require('assert');
const protoLoader = require('@grpc/proto-loader');
const {
  BlockQueryResponse,
  LightBlockInfo,
  DataWithBlockInfo,
  DeployData,
  DeployServiceResponse,
  ListeningNameContinuationResponse,
  ListeningNameDataResponse,
  PrivateNamePreviewResponse,
} = require('../protobuf/DeployService').coop.rchain.casper.protocol;
const RHOCore = require('./RHOCore');
const Hex = require('./hex');
const { RholangCrypto } = require('./signing');

const { blake2b256Hash, ed25519Verify } = RholangCrypto;

const def = obj => Object.freeze(obj); // cf. ocap design note

// Options for similarity to grpc.load behavior
// https://grpc.io/docs/tutorials/basic/node.html#loading-service-descriptors-from-proto-files
const likeLoad = { keepCase: true, longs: String, enums: String, defaults: true, oneofs: true };
const deployServiceDefinition = protoLoader.loadSync(
  __dirname + '/../protobuf/DeployService.proto', // eslint-disable-line
  likeLoad,
);
const proposeServiceDefinition = protoLoader.loadSync(
  __dirname + '/../protobuf/ProposeService.proto', // eslint-disable-line
  likeLoad,
);


/*::
import type { JsonExt } from './RHOCore';
import type { KeyPair } from './signing';

type JSData = JsonExt<URL | GPrivate>;
 */

/*::
type EndPoint = { host: string, port: number };
import GRPCAccess from 'grpc';

export type IRNode = $Call<typeof RNode, GRPCAccess, EndPoint>;

export type IDeployData = coop$rchain$casper$protocol$IDeployData;
type DeployService = coop$rchain$casper$protocol$DeployService;

type Decoder<T> = { decode(reader: Uint8Array): T };
*/


exports.RNode = RNode;
/**
 * RChain node API client
 *
 *
 * Methods are asynchronous; they return promises. Where
 * DeployService.proto specifies an Either, this API
 * resolves the promise on success or rejects it on failure.
 *
 * The promise may also reject for the usual gRPC reasons such as
 * `UNAVAILABLE: Connect Failed`.
 *
 * Refs:
 *  - [Node API Specification][nodeAPI] May 2018
 *  - [DeployService.proto][cAPI] and dependencies such as
 *    - [RhoTypes.proto][rAPI]
 *  - [RChain Protocol Documentation][apidoc]
 *
 * [cAPI]: https://github.com/rchain/rchain/blob/release-rnode-v0.9.11/models/src/main/protobuf/DeployService.proto
 * [rAPI]: https://github.com/rchain/rchain/blob/release-rnode-v0.9.11/models/src/main/protobuf/RhoTypes.proto
 * [apidoc]: https://github.com/rchain/rchain/blob/dev/docs/rnode-api/index.md
 *
 * [nodeAPI]:  https://rchain.atlassian.net/wiki/spaces/CORE/pages/392462355/Node+API+Specification
 *
 * @param grpc access make gRPC network calls
 * @param endPoint rnode gRPC service
 * @return a thin wrapper around a gRPC client stub
 *
 * @example
 * // Get current block info
 * const { RNode, REV, Ed25519keyPair, Hex } = require('rchain-api');
 * const grpc = require('grpc');
 *
 * const rnode = RNode(grpc, { host: 'localhost', port: 40401 });
 * rnode.getBlocks().then((blocks) => { assert.ok(blocks[0].blockHash); });
 *
 * // Deploy a simple Rholang process, given a key to authorize payment.
 * const term = '@"world"!("Hello!")';
 * const myKey = Ed25519keyPair(Hex.decode('11'.repeat(32)));
 * const timestamp = new Date('2019-04-12T17:59:29.274Z').valueOf();
 * const info = REV.SignDeployment.sign(myKey, { timestamp, term, phloLimit: 10000, phloPrice: 1 });
 * rnode.doDeploy(info, true).then((message) => { assert(message.startsWith('Success')); });
 */
function RNode(
  grpc /*: GRPCAccess */,
  endPoint /*: { host: string, port: number } */,
) /*: IRNode */ {
  const { host, port } = endPoint;
  assert.ok(host, 'endPoint.host missing');
  assert.ok(port, 'endPoint.port missing');

  const deployProto = grpc.loadPackageDefinition(deployServiceDefinition);
  const client /*: DeployService */ = new deployProto.coop.rchain.casper.protocol.DeployService(
    `${host}:${port}`, grpc.credentials.createInsecure(), // ISSUE: let caller do secure?
  );

  const proposeProto = grpc.loadPackageDefinition(proposeServiceDefinition);
  const proposeClient /*: ProposeService */ = new proposeProto.coop.rchain.casper.protocol.ProposeService(
    `${host}:${port}`, grpc.credentials.createInsecure(),  // ISSUE: let caller do secure?
  );

  /**
   * Ask rnode to compute ids of top level private names, given deploy parameters.
   *
   * @param {Object} d
   * @param {Uint8Array} d.user - public key as in `deployer` in `doDeploy`
   * @param {number} d.timestamp - timestamp (ms) as in doDeploy
   * @param nameQty - how many names to preview? (max: 1024)
   * @return a byte Buffer for each id
   * @memberof RNode
   * @instance
   */
  async function previewPrivateNames(
    { user, timestamp } /*: $ReadOnly<{ user?: Uint8Array, timestamp?: number }> */,
    nameQty /*: number */,
  ) /*: Promise<Buffer[]> */{
    const response = await either(
      PrivateNamePreviewResponse,
      send(f => client.previewPrivateNames({ user, timestamp, nameQty }, f)),
    );
    return response.ids;
  }

  const idToPar = id => ({ ids: [{ id }] });

  /**
   * Deploys a rholang term to a node
   * @memberof RNode
   * @instance
   * @param deployData a DeployData (cf CasperMessage.proto)
   * @param deployData.deployer public key
   * @param deployData.term A string of rholang code (for example @"world"!("Hello!")  )
   * @param deployData.timestamp millisecond timestamp
   *        e.g. new Date().valueOf()
   * @param deployData.sig signature of (hash(term) + timestamp) using private key
   * @param deployData.sigAlgorithm name of the algorithm used to sign
   * @param deployData.phloLimit
   * @param deployData.phloPrice
   * @param deployData.validAfterBlockNumber ???ISSUE???
   *
   * @param autoCreateBlock automatically create a new block after deploy transaction success
   * @return A promise for message
   *
   * @throws {Error} Could not deploy, casper instance was not available yet.
   * @throws {Error} Missing / invalid / wrong size signature
   */
  async function doDeploy(deployData /*: IDeployData */,
    autoCreateBlock /*: boolean*/ = false) /*: Promise<string>*/ {
    // See also
    // casper/src/main/scala/coop/rchain/casper/util/comm/DeployRuntime.scala#L38
    // d        = DeployString().withTimestamp(timestamp).withTerm(code)
    if (!Number.isInteger(deployData.phloLimit)) {
      throw new Error('ERROR: DeployData structure requires "phloLimit" to be specified');
    }
    if (!Number.isInteger(deployData.phloPrice)) {
      throw new Error('ERROR: DeployData structure requires "phloPrice" to be specified');
    }
    let out = await either(DeployServiceResponse, send(f => client.doDeploy(deployData, f)));
    if (autoCreateBlock) {
      out = await either(DeployServiceResponse, send(f => proposeClient.propose({}, f)));
    }
    return out.message;
  }

  /**
   * Creates a block on your node
   * @memberof RNode
   * @instance
   * @return A promise for response message
   */
  async function createBlock() /*: Promise<string>*/ {
    const r = await either(DeployServiceResponse, send(f => proposeClient.propose({}, f)));
    return r.message;
  }

  async function either/*::<T>*/(cls /*: Decoder<T>*/, px /*: Promise<Either>*/) /*: Promise<T>*/{
    const x = await px;
    return eitherSync(cls, x);
  }

  function eitherSync/*::<T>*/(cls /*: Decoder<T>*/, x /*: IEither*/) /*: T*/{
    if (x.success) {
      /* $FlowFixMe$ ISSUE: Either.proto fibs a bit*/
      return cls.decode(x.success.response.value);
    }
    throw new Error((x.error || {}).messages);
  }

  /**
   * Listen for data at a PUBLIC name in the RChain tuple-space.
   *
   * @memberof RNode
   * @instance
   * @param nameObj: JSON-ish data: string, number, {}, [], ...
   * @return promise for [DataWithBlockInfo]
   * @throws Error if status is not Success
   * @deprecated
   * @ignore
   */
  function listenForDataAtPublicName(nameObj /*: JSData */, depth /*: number */ = 1) {
    return listenForDataAtName(RHOCore.fromJSData(nameObj), depth);
  }

  /**
   * Listen for data at a PRIVATE name in the RChain tuple-space.
   *
   * @memberof RNode
   * @instance
   * @param nameId: Hex string representing an UnforgeableName's Id
   * @return promise for [DataWithBlockInfo]
   * @throws Error if status is not Success
   * @deprecated
   * @ignore
   */
  function listenForDataAtPrivateName(nameId /*: string */, depth /*: number */ = 1) {
    // Convert the UnforgeableName into a byte array
    const nameByteArray = Buffer.from(nameId, 'hex');

    // Create the Par object with the nameByteArray as an ID
    const channelRequest = idToPar(nameByteArray);
    return listenForDataAtName(channelRequest, depth);
  }

  /**
   * Listen for data at a name in the RChain tuple-space.
   *
   * @memberof RNode
   * @instance
   * @param par: JSON-ish Par data. See protobuf/RhoTypes.proto
   * @param blockDepth: Number of blocks to look back in for the name to listen on
   * @return: promise for DataWithBlockInfo[]
   * @throws Error if status is not Success
   */
  async function listenForDataAtName(
    par /*: IPar */,
    depth /*: number */ = 1,
  ) /*: Promise<DataWithBlockInfo[]> */ {
    // console.log('listen', { par: JSON.stringify(par) });
    const channelRequest = {
      depth,
      name: par,
    };
    const _ = DataWithBlockInfo; // mark used
    const response = await either(
      ListeningNameDataResponse,
      send(f => client.listenForDataAtName(channelRequest, f)),
    );
    // console.log('listen', { response });
    return response.blockResults;
  }


  /**
   * Listen for a continuation at an individual public name or
   * JOINed set of public names in the tuplespace
   * @param nameObjs a list of names (strings)
   * @return promise for ContinuationsWithBlockInfo
   * @throws Error if status is not Success
   * @deprecated
   * @ignore
   */
  function listenForContinuationAtPublicName(nameObjs /*: string[] */, depth /*: number */ = 1) {
    return listenForContinuationAtName(nameObjs.map(RHOCore.fromJSData), depth);
  }

  /**
   * Listen for a continuation at an individual private name or
   * JOINed set of private names in the tuplespace
   * @param nameIds a list hex strings representing the unforgeable names' Ids
   * @return promise for ContinuationsWithBlockInfo
   * @throws Error if status is not Success
   * @deprecated
   * @ignore
   */
  function listenForContinuationAtPrivateName(nameIds /*: string[] */, depth /*: number */ = 1) {
    // Convert the UnforgeableNames into a byte arrays
    const nameByteArrays = nameIds.map(nameId => Buffer.from(nameId, 'hex'));

    // Create the Par objects with the nameByteArrays as IDs
    const channelRequests = nameByteArrays.map(nameByteArray => ({ ids: [{ id: nameByteArray }] }));
    //TODO Does this parse? I think x => { a: b } needs ()s, i.e. x => ({ a: b }).
    return listenForContinuationAtName(channelRequests, depth);
  }


  /**
   * Listen for a continuation at an individual name or
   * JOINed set of names in the tuplespace
   * @memberof RNode
   * @instance
   * @param pars The names onwhich to listen
   * @return promise for DataWithBlockInfo
   * @throws Error if status is not Success
   */
  async function listenForContinuationAtName(
    pars /*: IPar[] */,
    depth /*: number */,
  ) /*: Promise<ListeningNameContinuationResponse> */{
    const channelRequest = {
      depth,
      names: pars,
    };

    const response = await send(f => client.listenForContinuationAtName(channelRequest, f));
    return either(ListeningNameContinuationResponse, response);
  }

  /**
   * Retrieve a block with the tuplespace for a specific block hash
   *
   * @memberof RNode
   * @instance
   * @param blockHash: String of the hash for the block being requested
   * @return BlockInfo structure that will include all metadata and also includes Tuplespace
   * @throws Error if the hash is blank or does not correspond to an existing block
   */
  async function getBlock(blockHash /*: string */) {
    if (blockHash.trim().length === 0 || blockHash === null || blockHash === undefined) { throw new Error('ERROR: blockHash is blank'); }
    if (typeof blockHash !== 'string') { throw new Error('ERROR: blockHash must be a string value'); }

    const response = await either(
      BlockQueryResponse,
      send(f => client.getBlock({ hash: blockHash }, f)),
    );
    return response.blockInfo;
  }

  /**
   * Retrieve the block summary for a series of blocks starting with the most recent,
   * including the number of blocks specified by the block_depth
   *
   * @memberof RNode
   * @instance
   * @param blockDepth: Number indicating the number of blocks to retrieve
   * @return List of LightBlockInfo structures for each block retrieved
   * @throws Error if blockDepth < 1 or no blocks were able to be retrieved
   */
  function getBlocks(blockDepth /*: number */ = 1) /*: Promise<LightBlockInfo> */{
    if (!Number.isInteger(blockDepth)) { throw new Error('ERROR: blockDepth must be an integer'); }
    if (blockDepth < 1) { throw new Error('ERROR: blockDepth parameter must be >= 1'); }
    return sendThenReceiveStream(client.getBlocks({ depth: blockDepth }))
      .then((parts) => {
        if (parts.length === 0) {
          throw new Error('ERROR: Failed to retrieve the requested blocks');
        }
        return parts.map(x => eitherSync(LightBlockInfo, x));
      });
  }

  return def({
    doDeploy,
    createBlock,
    listenForDataAtName,
    listenForDataAtPrivateName,
    listenForDataAtPublicName,
    listenForContinuationAtName,
    listenForContinuationAtPrivateName,
    listenForContinuationAtPublicName,
    getBlock,
    getBlocks,
    previewPrivateNames,
  });
}


function firstBlockData(blockResults /*: DataWithBlockInfo[] */) {
  const _ = DataWithBlockInfo; // mark used
  // console.log({ blockResults });
  if (!blockResults.length) { throw new Error('no blocks found'); }
  return RHOCore.toJSData(firstBlockProcess(blockResults));
}
exports.Block = Object.freeze({
  firstData: firstBlockData,
  firstProcess: firstBlockProcess,
});


// Get the first piece of data from listenForDataAtName
function firstBlockProcess(blockResults /*: DataWithBlockInfo[] */) {
  // console.log('found:', JSON.stringify(blockResults, null, 2));
  const ea = [].concat(...blockResults.map(br => br.postBlockData));
  // console.log('ea: ', JSON.stringify(ea, null, 2));
  const good = ea.filter(it => (it.exprs || []).length > 0
                         || (it.bundles || []).length > 0
                         || (it.ids || []).length > 0);
  // console.log('good:');
  // console.log(JSON.stringify(good, null, 2));
  return good[0];
}


/**
 * a port of [casper/SignDeployment.scala](https://github.com/rchain/rchain/blob/9ae5825/casper/src/main/scala/coop/rchain/casper/SignDeployment.scala)
 *
 * ISSUE: only ed25519 is supported.
 *
 * @memberof REV
 */
const SignDeployment = (() => {
  const algName = 'ed25519';

  const fill = deployData => (deployer, sig, sigAlgorithm) => (
    { ...deployData, deployer, sig, sigAlgorithm }
  );

  const clear = deployData => fill(deployData)(null, null, null);

  /**
   * @memberof REV.SignDeployment
   */
  function sign(key /*: KeyPair */, deployData /*: DeployData*/)/*: DeployData*/ {
    const toSign = DeployData.encode(clear(deployData)).finish();
    const hash = blake2b256Hash(toSign);
    const signature = key.signBytes(hash);

    return fill(deployData)(Hex.decode(key.publicKey()), signature, algName);
  }

  /**
   * @memberof REV.SignDeployment
   */
  function verify(deployData /*: DeployData*/)/*: boolean */ {
    if (deployData.sigAlgorithm !== algName) {
      throw new Error(`unsupported: ${deployData.sigAlgorithm}`);
    }
    const toVerify = DeployData.encode(clear(deployData)).finish();
    const hash = blake2b256Hash(toVerify);
    return ed25519Verify(hash, deployData.sig, deployData.deployer);
  }

  return Object.freeze({ sign, verify });
})();
exports.SignDeployment = SignDeployment;

/*
 * Adapt callback-style API using Promises.
 *
 * Instead of obj.method(...arg, callback),
 * use send(cb => obj.method(...arg, cb)) and get a promise.
 *
 * @param calling: a function of the form (cb) => o.m(..., cb)
 * @return A promise for the result passed to cb
 */
function send/*:: <T>*/(calling /*: Callback<T> => mixed*/) /*: Promise<T> */{
  function executor(resolve, reject) {
    const callback = (err, result) => {
      if (err) {
        reject(err);
        return;
      }
      if (typeof result === 'undefined') { throw new TypeError('must give err or result'); }
      resolve(result);
    };

    calling(callback);
  }

  return new Promise(executor);
}
/*::
type Callback<T> = (error: Error | null, response?: T) => void;
*/


/*
 * Adapt streamResponse-style API using Promises.
 *
 * Instead of obj.method(...arg) and event handlers for 'data', 'end', 'error', and 'status',
 * use sendThenReceiveStream(() => obj.method(...arg)) and get a promise.
 *
 * @param stream: emitter
 * @return A promise for the result of the received stream
*/
function sendThenReceiveStream(stream) {
  function executor(resolve, reject) {
    const results = [];
    stream.on('data', (dataChunk) => { results.push(dataChunk); });
    stream.on('end', () => { resolve(results); });
    stream.on('error', (e) => { reject(e); });
    stream.on('status', (status) => {
      if (status.code !== 0 && status.details !== '') {
        console.log(`INFO - Stream received status : ${status.details}`);
      }
    });
  }

  return new Promise(executor);
}
