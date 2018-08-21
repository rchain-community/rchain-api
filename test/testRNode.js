const Suite = require('testjs');
const grpc = require('grpc');

const { RNode } = require('../rnodeAPI');

function testRNode() {
  function argChecks(test) {
    test.doesNotThrow(() => RNode(grpc, { host: 'h', port: 123 }));
    test.throws(() => RNode(null, null), Error);
    test.throws(() => RNode(null, { host: 'hi' }), Error);
    test.throws(() => RNode(null, { port: 123 }), Error);
    test.done();
  }

  Suite.run({
    argChecks,
  });
}

testRNode();
