/* global require, module, exports */
const ttest = require('tape');
const api = require('../index');

const { RNode, SignDeployment, RHOCore, Hex } = api;
const { Ed25519, SHA256, Keccak256, Blake2b256 } = api;


/**
 * Run unit tests plus supplemental tests.
 *
 * @param suite2: supplemental tests
 */
function testRNode(suite2) {
  // mock enough of grpc
  function DeployService(_hostPort, _chan) { }
  const casper = { DeployService };
  const proto = { coop: { rchain: { casper: { protocol: casper } } } };
  const grpc0 = {
    loadPackageDefinition(_d) { return proto; },
    credentials: { createInsecure() { } },
  };

  Object.entries({
    'args check': (test) => {
      test.doesNotThrow(() => RNode(grpc0, { host: 'h', port: 123 }));
      // $FlowFixMe args are intentionally wrong type
      test.throws(() => RNode(grpc0, null), Error);
      // $FlowFixMe
      test.throws(() => RNode(grpc0, { host: 'hi' }), Error);
      // $FlowFixMe
      test.throws(() => RNode(grpc0, { port: 123 }), Error);
      test.end();
    },
    ...suite2,
  }).forEach(([desc, fn]) => ttest(desc, fn));
}


const defaultSec = Hex.decode('b18e1d0045995ec3d010c387ccfeb984d783af8fbb0f40fa7db126d889f6dadd');

function netTests({ grpc, clock, rng }) {
  const localNode = () => RNode(grpc, { host: 'localhost', port: 40401 });

  function hashTest(test, fn, fname, isNormalTest = true) {
    const returnChannel = rng().toString(36).substring(7);
    const config = (isNormalTest)
      ? { txt: 'deadbeef', func: 'hexToBytes' }
      : { txt: 'testtest', func: 'toByteArray' };
    const hashProc = `@"${fname}"!("${config.txt}".${config.func}(), "${returnChannel}")`;

    runAndListen(hashProc, returnChannel, clock().valueOf(), localNode(), test)
      .then((rholangHash) => {
        if (isNormalTest) {
          const serializedData = Hex.decode(config.txt);
          test.deepEqual(fn(serializedData), Uint8Array.from(rholangHash.exprs[0].g_byte_array));
        } else {
          test.equal(fn('testtest'), Hex.encode(rholangHash.exprs[0].g_byte_array));
        }
        test.end();
      })
      .catch((oops) => {
        test.equal(oops, 0);
        test.end();
      });
  }

  return {
    'smart contract deploy': (test) => {
      const term = 'new test in { contract test(return) = { return!("test") } }';
      const timestamp = clock().valueOf();

      const key = Ed25519.keyPair(defaultSec);
      localNode().doDeploy(payFor({ term, timestamp }, key), true).then((results) => {
        test.equal(results.slice(0, 'Success'.length), 'Success');
        test.end();
      });
    },
    'test getAllBlocks': (test) => {
      const expected = [
        'parentsHashList', 'blockHash', 'blockSize', 'blockNumber', 'version',
        'deployCount', 'tupleSpaceHash', 'timestamp', 'faultTolerance',
        'mainParentHash', 'sender',
      ];
      localNode().getAllBlocks()
        .then((actual) => {
          test.equal(actual.length > 0, true);
          test.deepEqual(Object.keys(actual[0]), expected);
          test.end();
        });
    },
    'get block by hash - error test': (test) => {
      const blockHash = 'thisshouldbreak';
      localNode().getBlock(blockHash).catch((err) => {
        test.deepEqual(err.message, 'Error: Failure to find block with hash thisshouldbreak');
        test.end();
      });
    },
    'simplified SHA256 hashing': (test) => {
      hashTest(test, RHOCore.wrapHash(SHA256.hash), 'sha256hash', false);
    },
    'simplified Keccak256 hashing': (test) => {
      hashTest(test, RHOCore.wrapHash(Keccak256.hash), 'keccak256hash', false);
    },
    'simplified Blake2b256 hashing': (test) => {
      hashTest(test, RHOCore.wrapHash(Blake2b256.hash), 'blake2b256hash', false);
    },
    'normal SHA256 hashing': (test) => {
      hashTest(test, SHA256.hash, 'SHA256.hash', true);
    },
    'normal Keccak256 hashing': (test) => {
      hashTest(test, Keccak256.hash, 'keccak256.hash', true);
    },
    'normal Blake2b256 hashing': (test) => {
      hashTest(test, Blake2b256.hash, 'Blake2b256.hash', true);
    },
  };
}


exports.runAndListen = runAndListen;
function runAndListen(
  term, returnChannel, timestamp,
  node, test = null,
) {
  const key = Ed25519.keyPair(defaultSec);
  // console.log("run:", { term, returnChannel });
  return node.doDeploy(payFor({ term, timestamp }, key), true).then((results) => {
    if (test) { test.equal(results.slice(0, 'Success'.length), 'Success'); }

    // Get the generated result from the channel
    return node.listenForDataAtPublicName(returnChannel);
  }).then((blockResults) => {
    if (test) { test.notEqual(blockResults.length, 0); }

    const lastBlock = blockResults.slice(-1).pop();
    const lastDatum = lastBlock.postBlockData.slice(-1).pop();
    return lastDatum;
  });
}


function payFor(d0, key, phloPrice = 1, phloLimit = 10000000) {
  const dout = SignDeployment.sign(key, {
    ...d0,
    phloPrice,
    phloLimit,
  });
  // console.log({ valid: SignDeployment.verify(dout), sig: b2h(dout.sig) });
  return dout;
}


if (require.main === module) {
  // Access ambient stuff only when invoked as main module.
  /* eslint-disable global-require */
  /* global process */
  if (process.argv.includes('--net')) {
    testRNode(netTests({
      grpc: require('grpc'),
      clock: () => new Date(),
      rng: () => Math.random(),
    }));
  } else {
    testRNode({});
  }
}
