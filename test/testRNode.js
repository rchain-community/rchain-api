/* global require, module */
const { RNode, RHOCore, b2h } = require('../rnodeAPI');


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
  return {
    'smart contract deploy': (test) => {
      const node = RNode(grpc, { host: 'localhost', port: 40401 });
      const smartContract = 'new test in { contract test(return) = { return!("test") } }';
      const request = createCompleteRequest(smartContract, clock().valueOf());

      node.doDeploy(request, true).then((results) => {
        test.equal(results, 'Success!');
        test.done();
      });
    },
    'get block by hash - error test': (test) => {
      const node = RNode(grpc, { host: 'localhost', port: 40401 });
      const blockHash = 'thisshouldbreak';
      node.getBlock(blockHash).catch((err) => {
        test.equal(err.message, 'ERROR: Could not locate a block by hash : thisshouldbreak');
        test.done();
      });
    },
    'sha256 hashing': (test) => {
      const returnChannel = rng().toString(36).substring(7);
      const node = RNode(grpc, { host: 'localhost', port: 40401 });
      const smartContract = `new test, hashResult in { 
                              contract test(return) = {
                                @"sha256Hash"!("test".toByteArray(), *hashResult)
                                |
                                for(@hash <- hashResult) {
                                  return!(hash)
                                }
                              }
                              |
                              test!("${returnChannel}")
                            }`;
      const request = createCompleteRequest(smartContract, clock().valueOf());

      node.doDeploy(request, true).then((results) => {
        test.equal(results, 'Success!');

        // Get the generated result from the channel
        return node.listenForDataAtPublicName(returnChannel);
      }).then((blockResults) => {
        test.notEqual(blockResults.length, 0);

        const lastBlock = blockResults.slice(-1).pop();
        const lastDatum = lastBlock.postBlockData.slice(-1).pop();
        const rholangHash = b2h(RHOCore.toJSData(lastDatum));

        test.equal(node.sha256Hash('test'), rholangHash);
        test.done();
      });
    },
    'keccak256 hashing': (test) => {
      const returnChannel = rng().toString(36).substring(7);
      const node = RNode(grpc, { host: 'localhost', port: 40401 });
      const smartContract = `new test, hashResult in { 
                              contract test(return) = {
                                @"keccak256Hash"!("test".toByteArray(), *hashResult)
                                |
                                for(@hash <- hashResult) {
                                  return!(hash)
                                }
                              }
                              |
                              test!("${returnChannel}")
                            }`;
      const request = createCompleteRequest(smartContract, clock().valueOf());

      node.doDeploy(request, true).then((results) => {
        test.equal(results, 'Success!');

        // Get the generated result from the channel
        return node.listenForDataAtPublicName(returnChannel);
      }).then((blockResults) => {
        test.notEqual(blockResults.length, 0);

        const lastBlock = blockResults.slice(-1).pop();
        const lastDatum = lastBlock.postBlockData.slice(-1).pop();
        const rholangHash = b2h(RHOCore.toJSData(lastDatum));

        test.equal(node.keccak256Hash('test'), rholangHash);
        test.done();
      });
    },
    'blake2b256 hashing': (test) => {
      const returnChannel = rng().toString(36).substring(7);
      const node = RNode(grpc, { host: 'localhost', port: 40401 });
      const smartContract = `new test, hashResult in { 
                              contract test(return) = {
                                @"blake2b256Hash"!("test".toByteArray(), *hashResult)
                                |
                                for(@hash <- hashResult) {
                                  return!(hash)
                                }
                              }
                              |
                              test!("${returnChannel}")
                            }`;
      const request = createCompleteRequest(smartContract, clock().valueOf());

      node.doDeploy(request, true).then((results) => {
        test.equal(results, 'Success!');

        // Get the generated result from the channel
        return node.listenForDataAtPublicName(returnChannel);
      }).then((blockResults) => {
        test.notEqual(blockResults.length, 0);

        const lastBlock = blockResults.slice(-1).pop();
        const lastDatum = lastBlock.postBlockData.slice(-1).pop();
        const rholangHash = b2h(RHOCore.toJSData(lastDatum));

        test.equal(node.blake2b256Hash('test'), rholangHash);
        test.done();
      });
    },
  };
}


function createCompleteRequest(term, timestamp, phloPrice = 1, phloLimit = 10000000) {
  return {
    term,
    timestamp,
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
