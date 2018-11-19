const { RNode, RHOCore, h2b, b2h } = require('../index');

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


const defaultPayment = {
  from: '0x1',
  nonce: 0,
  phloPrice: 1,
  phloLimit: 100000,
};


/**
 * Integration test for major features. Requires a running node.
 */
async function integrationTest({ node, clock }) {
  const user = h2b('464f6780d71b724525be14348b59c53dc8795346dfd7576c9f01c397ee7523e6');
  const timestamp = clock().valueOf();

  // Test deploys and listens
  const term = `
  new x, y, z, out(\`rho:io:stdout\`) in {
    out!(["names:", *x, *y, *z, *out]) |
      x!("x") | y!("y") | z!("z")
  }
  `;

  const deployData = { term, user, timestamp, ...defaultPayment };
  const preview = await node.previewPrivateIds(deployData, 3);
  console.log(preview.map(b2h));
  const deployMessage = await node.doDeploy(deployData);
  console.log('doDeploy result:', deployMessage);

  console.log('create: ', await node.createBlock());

  const idToPar = id => ({ ids: [{ id }] });
  const blockResults = await node.listenForDataAtName(idToPar(preview[0]));
  blockResults.forEach((b) => {
    b.postBlockData.forEach((d) => {
      logged(RHOCore.toJSData(d), 'Data at x');
    });
  });
}


if (require.main === module) {
  // Access ambient stuff only when invoked as main module.
  /* eslint-disable global-require */
  const grpc = require('grpc');

  const endpoint = {
    host: process.env.npm_config_host || 'localhost',
    port: parseInt(process.env.npm_config_port || '40401', 10),
  };

  const node = RNode(grpc, endpoint);
  const clock = () => new Date();
  try {
  integrationTest({ node, clock });
  } catch (oops) { console.log(oops); }
}
