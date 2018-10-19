const Suite = require('testjs');
const grpc = require('grpc');

const { RNode, RHOCore, b2h } = require('../rnodeAPI');

function testRNode() {
  Suite.run({
    "args check" : (test) => {
      test.doesNotThrow(() => RNode(grpc, { host: 'h', port: 123 }));
      test.throws(() => RNode(null, null), Error);
      test.throws(() => RNode(null, { host: 'hi' }), Error);
      test.throws(() => RNode(null, { port: 123 }), Error);
      test.done();
    },
    "smart contract deploy" : (test) => {
      var node = RNode(grpc, {host: 'localhost', port: '40401' });
      var smart_contract = `new test in { contract test(return) = { return!("test") } }`;
      var request = createCompleteRequest(smart_contract);

      node.doDeploy(request, true).then(results => {
        test.equal(results, "Success!");
        test.done();
      }).catch(err => {
        console.log('Failed while testing a smart contract deployment');
        console.log(err);
        test.done();
      });
    },
    "sha256 hashing" : (test) => {
      var returnChannel = Math.random().toString(36).substring(7);
      var node = RNode(grpc, {host: 'localhost', port: '40401' });
      var smart_contract = `new test, hashResult in { 
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
      var request = createCompleteRequest(smart_contract);

      node.doDeploy(request, true).then(results => {
        test.equal(results, "Success!");

        // Get the generated result from the channel
        return node.listenForDataAtPublicName(returnChannel);
      }).then((blockResults) => {
        test.notEqual(blockResults.length, 0);
        
        var lastBlock = blockResults.slice(-1).pop();
        var lastDatum = lastBlock.postBlockData.slice(-1).pop();
        var rholangHash = b2h(RHOCore.toJSData(lastDatum));

        test.equal(node.sha256Hash('test'), rholangHash);
        test.done();
      });
    },
    "keccak256 hashing" : (test) => {
      var returnChannel = Math.random().toString(36).substring(7);
      var node = RNode(grpc, {host: 'localhost', port: '40401' });
      var smart_contract = `new test, hashResult in { 
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
      var request = createCompleteRequest(smart_contract);

      node.doDeploy(request, true).then(results => {
        test.equal(results, "Success!");

        // Get the generated result from the channel
        return node.listenForDataAtPublicName(returnChannel);
      }).then((blockResults) => {
        test.notEqual(blockResults.length, 0);
        
        var lastBlock = blockResults.slice(-1).pop();
        var lastDatum = lastBlock.postBlockData.slice(-1).pop();
        var rholangHash = b2h(RHOCore.toJSData(lastDatum));

        test.equal(node.keccak256Hash('test'), rholangHash);
        test.done();
      });
    },
    "blake2b256 hashing" : (test) => {
      var returnChannel = Math.random().toString(36).substring(7);
      var node = RNode(grpc, {host: 'localhost', port: '40401' });
      var smart_contract = `new test, hashResult in { 
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
      var request = createCompleteRequest(smart_contract);

      node.doDeploy(request, true).then(results => {
        test.equal(results, "Success!");

        // Get the generated result from the channel
        return node.listenForDataAtPublicName(returnChannel);
      }).then((blockResults) => {
        test.notEqual(blockResults.length, 0);
        
        var lastBlock = blockResults.slice(-1).pop();
        var lastDatum = lastBlock.postBlockData.slice(-1).pop();
        var rholangHash = b2h(RHOCore.toJSData(lastDatum));

        test.equal(node.blake2b256Hash('test'), rholangHash);
        test.done();
      });
    }
  });
}


function createCompleteRequest(smartContractCall, phloPrice=1, phloLimit=10000000) {
  return {
    term:  smartContractCall,
    timestamp: new Date().valueOf(),
    from: '0x01',
    nonce: 0,
    phloPrice: { value: phloPrice },
    phloLimit: { value: phloLimit }
  };
}



testRNode();
