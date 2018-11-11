/** rnodeAPI -- RChain node Casper gRPC API endpoints

You can run `integrationTest()` a la `node rnodeAPI.js`.

refs:
  - [CasperMessage.proto][1] and RhoTypes.proto.
  - [gRPC in node.js][2]

[1]: https://github.com/rchain/rchain/blob/dev/models/src/main/protobuf/CasperMessage.proto
[2]: https://grpc.io/docs/tutorials/basic/node.html

 */
// @flow strict

const assert = require('assert');
const protoLoader = require('@grpc/proto-loader');
const blake2 = require('blake2');
const crypto = require('crypto');
const { keccak256 } = require('js-sha3');

const RHOCore = require('./RHOCore');
const signing = require('./signing');

const def = obj => Object.freeze(obj); // cf. ocap design note

// Options for similarity to grpc.load behavior
// https://grpc.io/docs/tutorials/basic/node.html#loading-service-descriptors-from-proto-files
const likeLoad = { keepCase: true, longs: String, enums: String, defaults: true, oneofs: true };
const packageDefinition = protoLoader.loadSync(
  __dirname + '/protobuf/CasperMessage.proto', // eslint-disable-line
  likeLoad,
);


module.exports.keyPair = signing.keyPair;
module.exports.verify = signing.verify;
module.exports.b2h = signing.b2h;
module.exports.h2b = signing.h2b;
module.exports.RHOCore = RHOCore;


/*::
import grpcT from 'grpc';
 */

/*::
type DeployData = {
  user: Uint8Array ,
  term: string,
  timestamp: number,
  sig: Uint8Array,
  sigAlgorithm: string,
  from: string,
  phloPrice: PhloPrice,
  phloLimit: PhloLimit,
  nonce: number
}
type DeployDataInsecure = {
  term: string,
  timestamp: number,
  from: string,
  phloPrice: PhloPrice,
  phloLimit: PhloLimit,
  nonce: number
}
type PhloPrice = {
  value: number
}
type PhloLimit = {
  value: number
}
*/

/**
 * Connect to an RChain node (RNode).
 *
 * @param grpc access to the network: grpc instance from the node grpc package
 * @param endpoint { host, port } of rnode gRPC service
 * @return a thin wrapper around a gRPC client stub
 */
module.exports.RNode = RNode;
function RNode(grpc /*: typeof grpcT */, endPoint /*: { host: string, port: number } */) {
  const { host, port } = endPoint;
  assert.ok(host, 'endPoint.host missing');
  assert.ok(port, 'endPoint.port missing');

  const proto = grpc.loadPackageDefinition(packageDefinition);
  const casper = proto.coop.rchain.casper.protocol;

  const client = new casper.DeployService(
    `${host}:${port}`, grpc.credentials.createInsecure(), // ISSUE: let caller do secure?
  );

  /**
   * Deploys a rholang term to a node
   * @param deployData a DeployData (cf CasperMessage.proto)
   * @param deployData.term A string of rholang code (for example @"world"!("Hello!")  )
   * @param deployData.purseAddress where deployment price is paid from
   * @param deployData.timestamp millisecond timestamp
   *        e.g. new Date().valueOf()
   * @param deployData.nonce
   * @param deployData.phloLimit
   * @param deployData.phloPrice
   * UNTESTED:
   * @param sig signature of (hash(term) + timestamp) using private key
   * @param deployData.sigAlgorithm name of the algorithm used to sign
   * @param autoCreateBlock automatically create a new block after deploy transaction success
   * @return A promise for a response message
   *
   * ISSUE: import / generate DeployData static type
   */
  function doDeploy(deployData /*: DeployDataInsecure*/, autoCreateBlock /*: boolean*/ = false) {
    // See also
    // casper/src/main/scala/coop/rchain/casper/util/comm/DeployRuntime.scala#L38
    // d        = DeployString().withTimestamp(timestamp).withTerm(code)
    if (deployData.phloLimit === undefined || !Number.isInteger(deployData.phloLimit.value)) {
      throw new Error('ERROR: DeployData structure requires "phloLimit" to be specified');
    }
    if (deployData.phloPrice === undefined || !Number.isInteger(deployData.phloPrice.value)) {
      throw new Error('ERROR: DeployData structure requires "phloPrice" to be specified');
    }
    return deployResponse(
      send(deployNext => client.DoDeploy(deployData, deployNext)).then((response) => {
        if (autoCreateBlock) {
          return send(createBlockNext => client.createBlock({}, createBlockNext))
            .then(() => response);
        }
        return response;
      }),
    );
  }

  /**
   * Creates a block on your node
   * @return A promise for response message
   */
  function createBlock() {
    return deployResponse(send(next => client.createBlock({}, next)));
  }

  /**
   * Adds block to local DAG and gossips block to peers on network
   * @param block The block to be added
   * @return A promise for response message
   */
  function addBlock(block /*: mixed */) {
    // ISSUE: Error: Illegal value for Message.Field ...
    // .Expr.g_bool of type bool: object
    // (proto3 field without field presence cannot be null)
    // https://gist.github.com/dckc/e60f22866aa47938bcd06e39be351aea
    return deployResponse(send(then => client.addBlock(block, then)));
  }

  function deployResponse(responseP) {
    return responseP.then((response) => {
      if (!response.success) { throw new Error(response.message); }
      return response.message;
    });
  }

  /**
   * Listen for data at a PUBLIC name in the RChain tuple-space.
   *
   * @param nameObj: JSON-ish data: string, number, {}, [], ...
   * @return promise for [DataWithBlockInfo]
   * @throws Error if status is not Success
   */
  function listenForDataAtPublicName(nameObj /*: Json */, depth /*: number */ = 1 ) {
    return listenForDataAtName(RHOCore.fromJSData(nameObj), depth);
  }

  /**
   * Listen for data at a PRIVATE name in the RChain tuple-space.
   *
   * @param nameId: Hex string representing an UnforgeableName's Id
   * @return promise for [DataWithBlockInfo]
   * @throws Error if status is not Success
   */
  function listenForDataAtPrivateName(nameId /*: string */, depth /*: number */ = 1) {
    // Convert the UnforgeableName into a byte array
    const nameByteArray = Buffer.from(nameId, 'hex');

    // Create the Par object with the nameByteArray as an ID
    const channelRequest = { ids: [{ id: nameByteArray }] };
    return listenForDataAtName(channelRequest, depth);
  }

  /**
   * Listen for data at a name in the RChain tuple-space.
   *
   * @param par: JSON-ish Par data. See protobuf/RhoTypes.proto
   * @param block_depth: Number of blocks to look back in for the name to listen on
   * @return: promise for [DataWithBlockInfo]
   * @throws Error if status is not Success
   */
  function listenForDataAtName(par /*: Json */, depth /*: number */ = 1) {
    const channelRequest = {
      depth,
      name: par,
    };
    return send(then => client.listenForDataAtName(channelRequest, then))
      .then((response) => {
        if (response.status !== 'Success') {
          throw new Error(response);
        }
        // ISSUE: make use of int32 length = 3;?
        return response.blockResults;
      });
  }


  /**
   * Listen for a continuation at an individual public name or
   * JOINed set of public names in the tuplespace
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
   * @param pars The names onwhich to listen
   * @return promise for ContinuationsWithBlockInfo
   * @throws Error if status is not Success
   */
  function listenForContinuationAtName(pars /*: IPar[] */, depth /*: number */) {
    const channelRequest = {
      depth,
      names: pars,
    };

    return send(then => client.listenForContinuationAtName(channelRequest, then))
      .then((response) => {
        if (response.status !== 'Success') {
          throw new Error(response);
        }

        return response.blockResults;
      });
  }

  /**
   * Convert the ack channel into a HEX-formatted unforgeable name
   *
   * @param par: JSON-ish Par data: https://github.com/rchain/rchain/blob/master/models/src/main/protobuf/RhoTypes.proto
   * @return HEX-formatted string of unforgeable name's Id
   * @throws Error if the Par does not represent an unforgeable name
   */
  function getIdFromUnforgeableName(par /*: IPar */) {
    if (par.ids && par.ids.length === 1 && par.ids[0].id) {
      return Buffer.from(par.ids[0].id).toString('hex');
    }
    throw new Error('Provided Par object does not represent a single unforgeable name');
  }

  /**
   * Retrieve a block with the tuplespace for a specific block hash
   *
   * @param blockHash: String of the hash for the block being requested
   * @return BlockInfo structure that will include all metadata and also includes Tuplespace
   * @throws Error if the hash is blank or does not correspond to an existing block
   */
  function getBlock(blockHash /*: string */) {
    if (blockHash.trim().length === 0 || blockHash === null || blockHash === undefined) { throw new Error('ERROR: blockHash is blank'); }
    if (typeof blockHash !== 'string') { throw new Error('ERROR: blockHash must be a string value'); }

    const blockQuery = { hash: blockHash };
    return send(then => client.showBlock(blockQuery, then))
      .then((blockWithTuplespace) => {
        if (blockWithTuplespace.blockInfo === null) {
          throw new Error(`ERROR: Could not locate a block by hash : ${blockHash}`);
        }
        return blockWithTuplespace;
      });
  }

  /**
   * Retrieve the block summary for a series of blocks starting with the most recent,
   * including the number of blocks specified by the block_depth
   *
   * @param blockDepth: Number indicating the number of blocks to retrieve
   * @return List of BlockInfoWithoutTuplespace structures for each block retrieved
   * @throws Error if blockDepth < 1 or no blocks were able to be retrieved
   */
  function getAllBlocks(blockDepth /*: number */ = 1) {
    if (!Number.isInteger(blockDepth)) { throw new Error('ERROR: blockDepth must be an integer'); }
    if (blockDepth < 1) { throw new Error('ERROR: blockDepth parameter must be >= 1'); }

    const blockQuery = { depth: blockDepth };
    return sendThenReceiveStream(() => client.showBlocks(blockQuery))
      .then((blockList) => {
        if (blockList.length === 0) {
          throw new Error('ERROR: Failed to retrieve the requested blocks');
        }
        return blockList;
      });
  }

  return def({
    doDeploy,
    createBlock,
    addBlock,
    listenForDataAtName,
    listenForDataAtPrivateName,
    listenForDataAtPublicName,
    listenForContinuationAtName,
    listenForContinuationAtPrivateName,
    listenForContinuationAtPublicName,
    getBlock,
    getAllBlocks,
    getIdFromUnforgeableName,
  });
}


/**
 * Adapt callback-style API using Promises.
 *
 * Instead of obj.method(...arg, callback),
 * use send(cb => obj.method(...arg, cb)) and get a promise.
 *
 * @param calling: a function of the form (cb) => o.m(..., cb)
 * @return A promise for the result passed to cb
 */
function send(calling) {
  function executor(resolve, reject) {
    const callback = (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    };

    calling(callback);
  }

  return new Promise(executor);
}

/**
 * Adapt streamResponse-style API using Promises.
 *
 * Instead of obj.method(...arg) and event handlers for 'data', 'end', 'error', and 'status',
 * use sendThenReceiveStream(() => obj.method(...arg)) and get a promise.
 *
 * @param callToExecute: a function of the form () => o.m(...)
 * @return A promise for the result of the received stream
 */
function sendThenReceiveStream(callToExecute) {
  function executor(resolve, reject) {
    const results = [];
    const call = callToExecute();
    call.on('data', (dataChunk) => { results.push(dataChunk); });
    call.on('end', () => { resolve(results); });
    call.on('error', (e) => { reject(e); });
    call.on('status', (status) => {
      if (status.code !== 0 && status.details !== '') {
        console.log(`INFO - Stream received status : ${status.details}`);
      }
    });
  }

  return new Promise(executor);
}


/**
 * log with JSON replacer: stringify Buffer data as hex
 */
module.exports.logged = logged;
function logged(obj /*: mixed */, label /*: ?string */) {
  console.log(label, JSON.stringify(obj, bufAsHex, 2));
  return obj;
}
function bufAsHex(prop, val) {
  if (prop === 'data' && 'type' in this && this.type === 'Buffer') {
    return Buffer.from(val).toString('hex');
  }
  return val;
}


/**
 * Compute a SHA256 hash over some data, the way that it will be computed in Rholang
 *
 * @param serializedData: Uint8Array of serialized Rholang data, used to compute the hash
 * @return Uint8Array of bytes representing the computed hash
 */
module.exports.sha256Hash = sha256Hash;
function sha256Hash(serializedData /*: Uint8Array*/) {
  const sha256 = crypto.createHash('sha256');
  sha256.update(Buffer.from(serializedData));
  return Uint8Array.from(sha256.digest());
}

/**
 * Compute a Keccak-256 hash over some data, the way that it will be computed in Rholang
 *
 * @param serializedData: Uint8Array of serialized Rholang data, used to compute the hash
 * @return Uint8Array of bytes representing the computed hash
 */
module.exports.keccak256Hash = keccak256Hash;
function keccak256Hash(serializedData /*: Uint8Array*/) {
  return new Uint8Array(keccak256.arrayBuffer(serializedData));
}

/**
 * Compute a Blake2b-256 hash over some data, the way that it will be computed in Rholang
 *
 * @param serializedData: Uint8Array of serialized Rholang data, used to compute the hash
 * @return Uint8Array of bytes representing the computed hash
 */
module.exports.blake2b256Hash = blake2b256Hash;
function blake2b256Hash(serializedData /*: Uint8Array*/) {
  const blake2b256 = blake2.createHash('blake2b', { digestLength: 32 });
  blake2b256.update(serializedData);
  return Uint8Array.from(blake2b256.digest());
}

/**
 * Compute a SHA256 hash for some Rholang-compatible data, then return the
 * string representing a HEX-encoded hash
 *
 * @param jsData: JS Data compatible with Rholang, used to compute the hash
 * @return HEX-formatted string representing the computed hash
 * @throws Error if the js_data contains a non-Rholang data structure
 */
module.exports.simplifiedSHA256Hash = simplifiedSHA256Hash;
function simplifiedSHA256Hash(jsData /*: Json*/) {
  const sha256 = crypto.createHash('sha256');
  const serializedData = RHOCore.toByteArray(RHOCore.fromJSData(jsData));
  sha256.update(Buffer.from(serializedData));
  return sha256.digest('hex');
}

/**
 * Compute a Keccak-256 hash for some Rholang-compatible data, then return the
 * string representing a HEX-encoded hash
 *
 * @param jsData: JS Data compatible with Rholang, used to compute the hash
 * @return HEX-formatted string representing the computed hash
 * @throws Error if the js_data contains a non-Rholang data structure
 */
module.exports.simplifiedKeccak256Hash = simplifiedKeccak256Hash;
function simplifiedKeccak256Hash(jsData /*: Json*/) {
  const serializedData = RHOCore.toByteArray(RHOCore.fromJSData(jsData));
  return keccak256(serializedData);
}

/**
 * Compute a Blake2b-256 hash for some Rholang-compatible data, then return the
 * string representing a HEX-encoded hash
 *
 * @param jsData: JS Data compatible with Rholang, used to compute the hash
 * @return HEX-formatted string representing the computed hash
 * @throws Error if the js_data contains a non-Rholang data structure
 */
module.exports.simplifiedBlake2b256Hash = simplifiedBlake2b256Hash;
function simplifiedBlake2b256Hash(jsData /*: Json*/) {
  const blake2b256 = blake2.createHash('blake2b', { digestLength: 32 });
  const serializedData = RHOCore.toByteArray(RHOCore.fromJSData(jsData));
  blake2b256.update(serializedData);
  return blake2b256.digest('hex');
}


/**
 * Integration test for major features. Requires a running node.
 */
async function integrationTest({ grpc, endpoint, clock }) {
  // Now make an RNode instance
  console.log({ endpoint });
  const rchain = RNode(grpc, endpoint);

  // Test deploys and listens
  const term = `
  new private, print(\`rho:io:stdout\`) in {
    print!(*private) |
    private!("Get this text into javascript") |
    @"public"!(*private) |
    for(@{Int} <- private){Nil} |
    for(_ <- @"chan1"; _ <- @"chan2"){Nil}
  }
  `;
  const deployData = {
    term,
    timestamp: clock().valueOf(),
    from: '0x1',
    nonce: 0,
    phloPrice: { value: 1 },
    phloLimit: { value: 100000 },
  };

  try {
    // Deploy term
    const deployMessage = await rchain.doDeploy(deployData, true);
    console.log('doDeploy result:', deployMessage);

    // Listen for data at public name
    let blockResults = await rchain.listenForDataAtPublicName('public');
    const lastBlock = blockResults.slice(-1).pop();
    const privateNameId = await lastBlock.postBlockData.slice(-1).pop();

    // Listen for data at private name
    blockResults = await rchain.listenForDataAtName(privateNameId);
    blockResults.forEach((b) => {
      b.postBlockData.forEach((d) => {
        logged(RHOCore.toRholang(d), 'Data Received from unforgeable name');
      });
    });

    // Listen for continuation joined public names
    blockResults = await rchain.listenForContinuationAtPublicName(['chan1', 'chan2']);
    if (blockResults.length > 0) {
      console.log('Got continuation at joined public names');
    } else {
      console.log('Failed to get continuation at joined public names');
    }

    // Listen for continuation at single private name
    blockResults = await rchain.listenForContinuationAtName([privateNameId]);
    if (blockResults.length > 0) {
      console.log('Got continuation at single private name');
    } else {
      console.log('Failed to get continuation at single private name');
    }
  } catch (oops) {
    console.log(oops);
  }
}


if (require.main === module) {
  // Access ambient stuff only when invoked as main module.
  /* eslint-disable global-require */
  const endpoint = {
    host: process.env.npm_config_host || 'localhost',
    port: parseInt(process.env.npm_config_port || '40401', 10),
  };
  integrationTest(
    {
      endpoint,
      grpc: require('grpc'),
      clock: () => new Date(),
    },
  );
}
