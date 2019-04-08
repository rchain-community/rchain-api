/*global require, exports, Buffer*/

const { sendCall, makeProxy, RNode, h2b, firstBlockData } = require('..');
const { link } = require('./assets');
const { prettyPrivate } = require('../src/loading'); // ISSUE: cheating?

const def = Object.freeze;
const remoteContract = link('./target1.rho');
const defaultPayment = {
  from: '0x1',
  nonce: 0,
  phloPrice: 1,
  phloLimit: 100000,
};


/**
 * Get remoteTarget registry URI and make method calls on the
 * registered object.
 */
async function test({ rnode, clock, deployer, setTimeout }) {
  const target = await remoteTarget({ rnode, clock, deployer });

  const timeout = clock().valueOf();

  const deployData = { deployer, timeout, ...defaultPayment };
  const delay = () => makeTimer(setTimeout)(500);
  const ansToSend = await sendCall(
    { target, method: 'buy', args: ['orange', 20] },
    deployData,
    { rnode, clock, delay, unary: true },
  );
  console.log({ ansToSend });

  const targetProxy = makeProxy(target, deployData, { rnode, clock, delay, unary: true });
  const ansToProxy = await targetProxy.sell('banana', 20, 3);
  console.log({ ansToProxy });

  return ansToProxy;
}

function makeTimer(setTimeout) {
  return function timer(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  };
}


/**
 * Get registry URI of object created in target1.rho.
 */
async function remoteTarget({ rnode, clock, deployer }) {
  const timestamp = clock().valueOf();
  const deployTarget = { term: remoteContract, deployer, timestamp, ...defaultPayment };
  const [id1] = await rnode.previewPrivateIds({ user: deployer, timestamp }, 1);
  const idToPar = id => ({ ids: [{ id }] });
  const targetCh = idToPar(id1);
  // console.log({ targetCh: JSON.stringify(targetCh) });
  await rnode.doDeploy(deployTarget, true);
  console.log(`remote: listening at return chan ${prettyPrivate(targetCh)}`);
  const found = await rnode.listenForDataAtName(targetCh);
  // console.log('found:', JSON.stringify(found));
  const target = firstBlockData(found);
  console.log({ target });
  return target;
}


function mockRNode() {
  let nextAnswer = {};

  async function previewPrivateIds({ user, timestamp }, nameQty) {
    const each = i => Buffer.from([(user.length * i + timestamp) % 51]);
    return [...Array(nameQty).keys()].map(each);
  }
  async function doDeploy(deployData) {
    console.log('deploy: ', deployData);
    if (deployData.term.match(/rho:registry/)) {
      nextAnswer = { exprs: [{ g_string: 'rho:id:123456' }] };
    } else {
      nextAnswer = { exprs: [{ g_int: '42' }] };
    }
    return 'Success! (mock)';
  }

  async function listenForDataAtName(_name /*: IPar*/) {
    // console.log('listen for data at', JSON.stringify(_name));
    return [{ postBlockData: [nextAnswer] }];
  }
  return def({ previewPrivateIds, doDeploy, listenForDataAtName });
}

/*global module, setTimeout */
if (require.main === module) {
  /* global process */
  /* eslint-disable global-require */
  if (!process.argv.includes('--net')) {
    console.log('*** Mock Test');
    test({
      setTimeout,
      deployer: h2b('deadbeef1234'),
      rnode: mockRNode(),
      clock: () => new Date(1542492713352),
    });
  } else {
    const endpoint = {
      host: process.env.npm_config_host || 'localhost',
      port: parseInt(process.env.npm_config_port || '40401', 10),
    };
    const rnode = RNode(require('grpc'), endpoint);

    console.log('*** Live Test');
    test({
      setTimeout,
      rnode,
      deployer: h2b('1122334455667788112233445566778811223344556677881122334455667788'),
      clock: () => new Date().valueOf(),
    }).catch((oops) => {
      console.error(oops);
      console.error(oops.stack);
      process.exit(1);
    });
  }
}
