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

const crypto = require('crypto');
const sha256 = crypto.createHash('sha256');
const keccak256 = require('js-sha3').keccak256;


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
module.exports.b2h = signing.b2h;
module.exports.h2b = signing.h2b;
module.exports.RHOCore = RHOCore;

/*::
import grpcT from 'grpc';
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
   * @param create_block automatically create a new block after deploy transaction success
   * @return A promise for a response message
   *
   * ISSUE: import / generate DeployData static type
   */
  function doDeploy(deployData /*: mixed*/, create_block=false /*: boolean*/) {
    // See also
    // casper/src/main/scala/coop/rchain/casper/util/comm/DeployRuntime.scala#L38
    // d        = DeployString().withTimestamp(timestamp).withTerm(code)
    return deployResponse(
        send(deployNext => client.DoDeploy(deployData, deployNext)).then((deployResponse) => {
            if (create_block) {
              return send(createBlockNext => client.createBlock({}, createBlockNext)).then((blockCreated) => {
                return Promise.resolve(deployResponse);
              });
            } else {
              return Promise.resolve(deployResponse);
            }
          }
        )
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
  function listenForDataAtPublicName(nameObj /*: Json */) {
    return listenForDataAtName(RHOCore.fromJSData(nameObj));
  }

  /**
   * Listen for data at a PRIVATE name in the RChain tuple-space.
   *
   * @param nameId: Hex string representing an UnforgeableName's Id
   * @return promise for [DataWithBlockInfo]
   * @throws Error if status is not Success
   */
  function listenForDataAtPrivateName(nameId /*: string */) {
    // Convert the UnforgeableName into a byte array
    const nameByteArray = Buffer.from(nameId, 'hex');

    // Create the Par object with the nameByteArray as an ID
    const channelRequest = { ids: [{ id: nameByteArray }] };
    return listenForDataAtName(channelRequest);
  }

  /**
   * Listen for data at a name in the RChain tuple-space.
   *
   * @param par: JSON-ish Par data. See protobuf/RhoTypes.proto
   * @return: promise for [DataWithBlockInfo]
   * @throws Error if status is not Success
   */
  function listenForDataAtName(par /*: Json */) {
    const channelRequest = { 
                name : par,
                depth : 10000
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
   * @param block_hash: String of the hash for the block being requested
   * @return BlockInfo structure that will include all metadata and also includes Tuplespace
   * @throws Error if the hash is blank or does not correspond to an existing block
   */
  function getBlock( block_hash /*: string */) { 
    if ( block_hash.trim().length == 0) { throw new Error("ERROR: block_hash is blank"); }

    var request = { hash: block_hash };
    return send(then => client.showBlock(request, then))
      .then((blockWithTuplespace) => {
        if (blockWithTuplespace === undefined) {
          console.log("ERROR: Could not locate a block by hash : " + block_hash);
          throw new Error("ERROR: Could not locate a block by hash : " + block_hash);
        }
        return blockWithTuplespace;
      });
  }

  /**
   * Retrieve the block summary for a series of blocks starting with the most recent, 
   * including the number of blocks specified by the block_depth
   * 
   * @param depth: Number indicating the number of blocks to retrieve
   * @return List of BlockInfoWithoutTuplespace structures that include metadata for each block retrieved
   * @throws Error if block_depth < 0 or no blocks were able to be retrieved from the blockchain (network / grpc issue)
   */
  function getAllBlocks( block_depth=1 /*: number */) { 
    if (block_depth < 1) { throw new Error("ERROR: block_depth parameter must be >= 1"); }

    var request = { depth: block_depth };
    return sendThenReceiveStream(() => client.showBlocks(request))
      .then((blockList) => {
        if (blockList.length === 0) {
          throw new Error("ERROR: Failed to retrieve the requested blocks");
        }
        return blockList;
      });
  }


  function sha256Hash( js_data /*: string*/) {
    const serializedData = serializeJSToRholangByteArray(js_data);
    sha256.update(serializedData);
    return sha256.digest('hex');
  }
  
  function keccak256Hash( js_data /*: string*/) {
    const serializedData = serializeJSToRholangByteArray(js_data);
    return keccak256(serializedData);
  }


  return def({
    doDeploy,
    createBlock,
    addBlock,
    listenForDataAtName,
    listenForDataAtPrivateName,
    listenForDataAtPublicName,
    getBlock,
    getAllBlocks,
    getIdFromUnforgeableName,
    sha256Hash,
    keccak256Hash
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
    var results = new Array();
    var call = callToExecute();
    call.on('data', function(dataChunk) {
      results[results.length] = dataChunk;
    });
    call.on('end', function() {
      resolve(results);
    });
    call.on('error', function(e) {
      console.log('ERROR - Failed while receiving a stream');
      console.log(e);
      reject(e);
    });
    call.on('status', function(status) {
      if (status.code !== 0 && status.details !== "") {
        console.log('INFO - Stream received status : ' + status.details);
      }
    });
  }

  return new Promise(executor);
}


function serializeJSToRholangByteArray( js_data /*: string*/ ){
  switch(typeof js_data) {
    case 'string':
      var byteArray = RHOCore.toByteArray(RHOCore.fromJSData(js_data));
      var hexFromBytes = signing.b2h(byteArray);
      // Something Rholang adds to serialized strings
      hexFromBytes += "4a080000000000000000";
      return signing.h2b(hexFromBytes);
    default:
      throw new Error("Only string hashing is supported at this time");
      break;
  }
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
 * Integration test for major features. Requires a running node.
 */
function integrationTest({ grpc, endpoint, clock }) {
  // Test some serializing
  const stuffToSign = { x: 'abc' };
  logged(RHOCore.toByteArray(RHOCore.fromJSData(stuffToSign)), 'stuffToSign serialized');

  // Now make an RNode instance
  const rchain = RNode(grpc, endpoint);

  // Test deploys and listens
  const term = `
  new private, print(\`rho:io:stdout\`) in {
    print!(*private)|
    private!("Get this text into javascript")|
    @"public"!(*private)
  }
  `;
  rchain.doDeploy({
    term,
    timestamp: clock().valueOf(),
    // from: '0x1',
    // nonce: 0,
  })
    .then((deployMessage) => {
      console.log('doDeploy result:', deployMessage);

      return rchain.createBlock();
    })
    .then(() => rchain.listenForDataAtPublicName('public'))
    .then((blockResults) => {
      const lastBlock = blockResults.slice(-1).pop();
      return lastBlock.postBlockData.slice(-1).pop();
    })
    .then(privateName => rchain.listenForDataAtName(privateName))
    .then((blockResults) => {
      blockResults.forEach((b) => {
        b.postBlockData.forEach((d) => {
          logged(RHOCore.toRholang(d), 'Data Received from unforgeable name');
        });
      });
    })
    .catch((oops) => { console.log(oops); });
}


if (require.main === module) {
  // Access ambient stuff only when invoked as main module.
  /* eslint-disable global-require */
  if (process.argv.length !== 4) {
    process.stderr.write('usage: node rnodeAPI.js <host> <port>\n');
    process.exit(1);
  }
  const endpoint = {
    host: process.argv[2],
    port: parseInt(process.argv[3], 10),
  };
  integrationTest(
    {
      endpoint,
      grpc: require('grpc'),
      clock: () => new Date(),
    },
  );
}
