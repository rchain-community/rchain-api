const { RNode, RHOCore } = require('../index');
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
/*
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
*/

//////////////////////////////////////////////////////


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
    // NOTE: This test only passes reliably on a fresh node
    // becuase of unintuitive behavior of listen...AtName
    // as documented in https://gist.github.com/JoshOrndorff/b0fe7aed93d16beabc2885484c6e8c54
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


///////////////////////////////////////////////////////////////////


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
