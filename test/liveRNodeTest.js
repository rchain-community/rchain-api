
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
function integrationTest({ RHOCore, node, clock }) {
  // Test deploys and listens
  const term = `
  new private, print(\`rho:io:stdout\`) in {
    print!(*private)|
    private!("Get this text into javascript")|
    @"public"!(*private)
  }
  `;
  node.doDeploy({
    term,
    timestamp: clock().valueOf(),
    from: '0x1',
    nonce: 0,
    phloPrice: { value: 1 },
    phloLimit: { value: 100000 },
  })
    .then((deployMessage) => {
      console.log('doDeploy result:', deployMessage);

      return node.createBlock();
    })
    .then(() => node.listenForDataAtPublicName('public'))
    .then((blockResults) => {
      const lastBlock = blockResults.slice(-1).pop();
      return lastBlock.postBlockData.slice(-1).pop();
    })
    .then(privateName => node.listenForDataAtName(privateName))
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
  const { RNode, RHOCore } = require('../index');
  const grpc = require('grpc');

  const endpoint = {
    host: process.env.npm_config_host || 'localhost',
    port: parseInt(process.env.npm_config_port || '40401', 10),
  };

  integrationTest(
    {
      RHOCore,
      node: RNode(grpc, endpoint),
      clock: () => new Date(),
    },
  );
}
