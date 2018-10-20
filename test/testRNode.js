/* global require, module, exports */
const rnode = require('../rnodeAPI');
const { RNode, RHOCore, b2h } = rnode;
const { sha256Hash, keccak256Hash, blake2b256Hash } = rnode;


/**
 * Run unit tests plus supplemental tests.
 *
 * Suite.run() can only be called in one place because
 * it does `process.exit()`. Using ocap discipline
 * means passing such powerful objects in explicitly.
 *
 * @param suite2: supplemental tests
 */
function testRNode({ Suite }, suite2) {
  // mock enough of grpc
  const casper = { DeployService: function(hostPort, chan) { } };
  const proto = { coop: { rchain: { casper: { protocol: casper } } } };
  const grpc0 = {
    loadPackageDefinition(d) { return proto; },
    credentials: {
      createInsecure() { },
    },
  };

  Suite.run({
    'args check': (test) => {
      test.doesNotThrow(() => RNode(grpc0, { host: 'h', port: 123 }));
      // $FlowFixMe args are intentionally wrong type
      test.throws(() => RNode(grpc0, null), Error);
      // $FlowFixMe
      test.throws(() => RNode(grpc0, { host: 'hi' }), Error);
      // $FlowFixMe
      test.throws(() => RNode(grpc0, { port: 123 }), Error);
      test.done();
    },
    ...suite2
  });
}


function netTests({ grpc, clock, rng }) {
  const localNode = () => RNode(grpc, { host: 'localhost', port: 40401 });

  function hashTest(test, fn, fname) {
    const returnChannel = rng().toString(36).substring(7);
    const txt = 'test';
    const hashProc = `@"${fname}"!("${txt}".toByteArray(), "${returnChannel}")`;

    runAndListen(hashProc, returnChannel, clock().valueOf(), localNode(), test)
      .then((rholangHash) => {
        test.equal(fn('test'), b2h(rholangHash.exprs[0].g_byte_array));
        test.done();
      })
      .catch((oops) => {
        test.equal(oops, 0);
        test.done();
      });
  }

  return {
    'smart contract deploy': (test) => {
      const term = 'new test in { contract test(return) = { return!("test") } }';
      const timestamp = clock().valueOf();

      localNode().doDeploy({ term, timestamp, ...payment() }, true).then((results) => {
        test.equal(results, 'Success!');
        test.done();
      });
    },
    'get block by hash - error test': (test) => {
      const blockHash = 'thisshouldbreak';
      localNode().getBlock(blockHash).catch((err) => {
        test.equal(err.message, 'ERROR: Could not locate a block by hash : thisshouldbreak');
        test.done();
      });
    },
    'sha256 hashing': (test) => hashTest(test, sha256Hash, 'sha256Hash'),
    'keccak256 hashing': (test) => hashTest(test, keccak256Hash, 'keccak256Hash'),
    'blake2b256 hashing': (test) => hashTest(test, blake2b256Hash, 'blake2b256Hash'),
  };
}


exports.runAndListen = runAndListen;
function runAndListen(term, returnChannel, timestamp,
                      node, test = null) {
  // console.log("run:", { term, returnChannel });
  return node.doDeploy({ term, timestamp, ...payment() }, true).then((results) => {
    if (test) { test.equal(results, 'Success!'); }

    // Get the generated result from the channel
    return node.listenForDataAtPublicName(returnChannel);
  }).then((blockResults) => {
    if (test) { test.notEqual(blockResults.length, 0); }

    const lastBlock = blockResults.slice(-1).pop();
    const lastDatum = lastBlock.postBlockData.slice(-1).pop();
    return lastDatum;
  });
}


function payment(phloPrice = 1, phloLimit = 10000000) {
  return {
    from: '0x01',
    nonce: 0,
    phloPrice: { value: phloPrice },
    phloLimit: { value: phloLimit },
  };
}


if (require.main === module) {
  // Access ambient stuff only when invoked as main module.
  /* eslint-disable global-require */
  /* global process */
  if (process.argv.includes('--net')) {
    testRNode({ Suite: require('testjs') }, netTests({
      grpc: require('grpc'),
      clock: () => new Date(),
      rng: () => Math.random(),
    }));
  } else {
    testRNode({ Suite: require('testjs') }, {});
  }
}
