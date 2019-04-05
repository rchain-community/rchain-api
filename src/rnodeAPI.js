/* rnodeAPI -- RChain node Casper gRPC API endpoints

refs:
  - [CasperMessage.proto][1] and RhoTypes.proto.
  - [gRPC in node.js][2]

[1]: https://github.com/rchain/rchain/blob/dev/models/src/main/protobuf/CasperMessage.proto
[2]: https://grpc.io/docs/tutorials/basic/node.html

*/
/* global require, exports, Buffer */
// @flow strict

const assert = require('assert');
const protoLoader = require('@grpc/proto-loader');
const {
  BlockQueryResponse,
  BlockInfoWithoutTuplespace,
  DeployServiceResponse,
  ListeningNameContinuationResponse,
  ListeningNameDataResponse,
  PrivateNamePreviewResponse,
} = require('../protobuf/CasperMessage').coop.rchain.casper.protocol;
const RHOCore = require('./RHOCore');

const def = obj => Object.freeze(obj); // cf. ocap design note

// Options for similarity to grpc.load behavior
// https://grpc.io/docs/tutorials/basic/node.html#loading-service-descriptors-from-proto-files
const likeLoad = { keepCase: true, longs: String, enums: String, defaults: true, oneofs: true };
const packageDefinition = protoLoader.loadSync(
  __dirname + '/../protobuf/CasperMessage.proto', // eslint-disable-line
  likeLoad,
);


/*::
import grpcT from 'grpc';
import type { JsonExt } from './RHOCore';

type JSData = JsonExt<URL | GPrivate>;
 */

/*::
type EndPoint = { host: string, port: number };
export type IRNode = $Call<typeof RNode, grpcT, EndPoint>;

export type IDeployData = coop$rchain$casper$protocol$IDeployData;
type DeployService = coop$rchain$casper$protocol$DeployService;

type Decoder<T> = { decode(reader: Uint8Array): T };
*/


exports.RNode = RNode;
/**
 * Connect to an RChain node (RNode).
 *
 * @param grpc access to the network: grpc instance from the node grpc package
 * @param endPoint rnode gRPC service
 * @return a thin wrapper around a gRPC client stub
 */
function RNode(grpc /*: grpcT */, endPoint /*: { host: string, port: number } */) {
  const { host, port } = endPoint;
  assert.ok(host, 'endPoint.host missing');
  assert.ok(port, 'endPoint.port missing');

  const proto = grpc.loadPackageDefinition(packageDefinition);
  const casper = proto.coop.rchain.casper.protocol;

  const client /*: DeployService */ = new casper.DeployService(
    `${host}:${port}`, grpc.credentials.createInsecure(), // ISSUE: let caller do secure?
  );

  /**
   * Ask rnode to compute ids of top level private names, given deploy parameters.
   *
   * @param d
   * @param d.deployer - public key (of validating node?) as in doDeploy
   * @param d.timestamp - timestamp (ms) as in doDeploy
   * @param nameQty - how many names to preview? (max: 1024)
   */
  async function previewPrivateIds(
    { deployer, timestamp } /*: $ReadOnly<{ deployer?: Uint8Array, timestamp?: number }> */,
    nameQty /*: number */,
  ) /*: Promise<Buffer[]> */{
    const response = await either(
      PrivateNamePreviewResponse,
      send(f => client.previewPrivateNames({ deployer, timestamp, nameQty }, f)),
    );
    return response.ids;
  }

  const idToPar = id => ({ ids: [{ id }] });

  /**
   * Ask rnode to compute top level private channels, given deploy parameters.
   *
   * @param d
   * @param d.user - public key (of validating node?) as in doDeploy
   * @param d.timestamp - timestamp (ms) as in doDeploy
   * @param nameQty - how many names to preview? (max: 1024)
   */
  function previewPrivateChannels(
    { user, timestamp } /*: { user: Uint8Array, timestamp: number } */,
    nameQty /*: number*/,
  ) /*: Promise<IPar[]> */{
    return previewPrivateIds({ user, timestamp }, nameQty)
      .then(ids => ids.map(idToPar));
  }

  /**
   * Deploys a rholang term to a node
   * @memberof RNode
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
   * ISSUE: import / generate DeployData static type
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
      out = await either(DeployServiceResponse, send(f => client.createBlock({}, f)));
    }
    return out.message;
  }

  /**
   * Creates a block on your node
   * @memberof RNode
   * @return A promise for { .message }
   */
  async function createBlock() /*: Promise<string>*/ {
    const r = await either(DeployServiceResponse, send(f => client.createBlock({}, f)));
    return r.message;
  }

  async function either/*::<T>*/(cls /*: Decoder<T>*/, px /*: Promise<Either>*/) /*: Promise<T>*/{
    const x = await px;
    return eitherSync(cls, x);
  }

  async function eitherSync/*::<T>*/(cls /*: Decoder<T>*/, x /*: IEither*/) /*: T*/{
    if (x.success) {
      /* $FlowFixMe$ ISSUE: Either.proto fibs a bit*/
      return cls.decode(x.success.response.value);
    }
    throw (x.error || {}).messages;
  }

  /**
   * Listen for data at a PUBLIC name in the RChain tuple-space.
   *
   * @memberof RNode
   * @param nameObj: JSON-ish data: string, number, {}, [], ...
   * @return promise for [DataWithBlockInfo]
   * @throws Error if status is not Success
   */
  function listenForDataAtPublicName(nameObj /*: JSData */, depth /*: number */ = 1) {
    return listenForDataAtName(RHOCore.fromJSData(nameObj), depth);
  }

  /**
   * Listen for data at a PRIVATE name in the RChain tuple-space.
   *
   * @memberof RNode
   * @param nameId: Hex string representing an UnforgeableName's Id
   * @return promise for [DataWithBlockInfo]
   * @throws Error if status is not Success
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
   * @param par: JSON-ish Par data. See protobuf/RhoTypes.proto
   * @param blockDepth: Number of blocks to look back in for the name to listen on
   * @return: promise for [DataWithBlockInfo]
   * @throws Error if status is not Success
   */
  async function listenForDataAtName(
    par /*: IPar */,
    depth /*: number */ = 1,
  ) /*: Promise<ListeningNameDataResponse> */ {
    const channelRequest = {
      depth,
      name: par,
    };
    const response = await either(
      ListeningNameDataResponse,
      send(f => client.listenForDataAtName(channelRequest, f)),
    );
    return response.blockResults;
  }


  /**
   * Listen for a continuation at an individual public name or
   * JOINed set of public names in the tuplespace
   * @memberof RNode
   * @param nameObjs a list of names (strings)
   * @return promise for ContinuationsWithBlockInfo
   * @throws Error if status is not Success
   */
  function listenForContinuationAtPublicName(nameObjs /*: string[] */, depth /*: number */ = 1) {
    return listenForContinuationAtName(nameObjs.map(RHOCore.fromJSData), depth);
  }

  /**
   * Listen for a continuation at an individual private name or
   * JOINed set of private names in the tuplespace
   * @memberof RNode
   * @param nameIds a list hex strings representing the unforgeable names' Ids
   * @return promise for ContinuationsWithBlockInfo
   * @throws Error if status is not Success
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
   * @param blockHash: String of the hash for the block being requested
   * @return BlockInfo structure that will include all metadata and also includes Tuplespace
   * @throws Error if the hash is blank or does not correspond to an existing block
   */
  async function getBlock(blockHash /*: string */) {
    if (blockHash.trim().length === 0 || blockHash === null || blockHash === undefined) { throw new Error('ERROR: blockHash is blank'); }
    if (typeof blockHash !== 'string') { throw new Error('ERROR: blockHash must be a string value'); }

    const response = await either(
      BlockQueryResponse,
      send(f => client.showBlock({ hash: blockHash }, f)),
    );
    return response.blockInfo;
  }

  /**
   * Retrieve the block summary for a series of blocks starting with the most recent,
   * including the number of blocks specified by the block_depth
   *
   * @memberof RNode
   * @param blockDepth: Number indicating the number of blocks to retrieve
   * @return List of BlockInfoWithoutTuplespace structures for each block retrieved
   * @throws Error if blockDepth < 1 or no blocks were able to be retrieved
   */
  function getAllBlocks(blockDepth /*: number */ = 1) {
    if (!Number.isInteger(blockDepth)) { throw new Error('ERROR: blockDepth must be an integer'); }
    if (blockDepth < 1) { throw new Error('ERROR: blockDepth parameter must be >= 1'); }
    sendThenReceiveStream(client.showBlocks({ depth: blockDepth }))
      .then((parts) => {
        if (parts.length === 0) {
          throw new Error('ERROR: Failed to retrieve the requested blocks');
        }
        return parts.map(x => eitherSync(BlockInfoWithoutTuplespace, x));
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
    getAllBlocks,
    getIdFromUnforgeableName,
    previewPrivateIds,
    previewPrivateChannels,
  });
}


exports.getIdFromUnforgeableName = getIdFromUnforgeableName;
/**
 * Convert the ack channel into a HEX-formatted unforgeable name
 *
 * @param par: JSON-ish Par data: https://github.com/rchain/rchain/blob/master/models/src/main/protobuf/RhoTypes.proto
 * @return HEX-formatted string of unforgeable name's Id
 * @throws Error if the Par does not represent an unforgeable name
 */
function getIdFromUnforgeableName(par /*: IPar */) /*: string */ {
  if (par.ids && par.ids.length === 1 && par.ids[0].id) {
    return Buffer.from(par.ids[0].id).toString('hex');
  }
  throw new Error('Provided Par object does not represent a single unforgeable name');
}


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
