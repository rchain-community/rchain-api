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
   * @return A promise for a response message
   *
   * ISSUE: import / generate DeployData static type
   */
  function doDeploy(deployData /*: mixed*/) {
    // See also
    // casper/src/main/scala/coop/rchain/casper/util/comm/DeployRuntime.scala#L38
    // d        = DeployString().withTimestamp(timestamp).withTerm(code)
    return deployResponse(send(next => client.DoDeploy(deployData, next)));
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
   * Listen for data at a name in the RChain tuple-space.
   *
   * @param nameObj: JSON-ish data: string, number, {}, [], ...
   * @return: promise for [DataWithBlockInfo]
   * @throws Error if status is not Success
   */
  function listenForDataAtName(nameObj /*: Json */) {
    const chan = { quote: RHOCore.fromJSData(nameObj) };
    return send(then => client.listenForDataAtName(chan, then))
      .then((response) => {
        if (response.status !== 'Success') {
          throw new Error(response);
        }
        // ISSUE: make use of int32 length = 3;?
        return response.blockResults;
      });
  }

  return def({ doDeploy, createBlock, addBlock, listenForDataAtName });
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
 *
 */
function integrationTest({ grpc, endpoint, clock }) {
  const stuffToSign = { x: 'abc' };

  const ca = RNode(grpc, endpoint);

  friendUpdatesStory(ca, clock);

  logged(RHOCore.toByteArray(RHOCore.fromJSData(stuffToSign)), 'stuffToSign serialized');

  // const rhoTerm = 'contract @"certifyPeer"(peer, level) = { peer!(*level) }';
  const rhoTerm = '@"world"!("hello!")';
  ca.doDeploy({
    term: rhoTerm,
    timestamp: clock().valueOf(),
    // from: '0x1',
    // nonce: 0,
  }).then((deployMessage) => {
    console.log('doDeploy result:', deployMessage);

    return ca.createBlock();
  }).then((createBlockMessage) => {
    console.log('createBlock result:', createBlockMessage);
  }).catch((oops) => {
    console.log('deploy, createBlock failed:', oops);
  });
}


function friendUpdatesStory(rchain, clock) {
  // Alice posts and update
  rchain.doDeploy({
    term: '@"aliceUpdates"!("Having fun traveling!")',
    timestamp: clock().valueOf(),
    // from: '0x1',
    // nonce: 0,
  })
  // We check for it
    .then(() => rchain.listenForDataAtName('aliceUpdates'))
    .then((blockResults) => {
      blockResults.forEach((b) => {
        b.postBlockData.forEach((d) => {
          logged(RHOCore.toRholang(d), 'Alice said');
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
