/*global require, exports*/

const { sendCall, makeProxy, RNode, RHOCore, h2b } = require('..');
const { link } = require('../src/assets');

const { toJSData } = RHOCore;
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
async function test({ rnode, clock, user, setTimeout }) {
  const target = await remoteTarget({ rnode, clock, user });

  const timeout = clock().valueOf();

  const deployData = { user, timeout, ...defaultPayment };
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
async function remoteTarget({ rnode, clock, user }) {
  const timestamp = clock().valueOf();
  const deployTarget = { term: remoteContract, user, timestamp, ...defaultPayment };
  const [targetCh] = await rnode.previewPrivateChannels(deployTarget, 1);
  // console.log({ targetCh: JSON.stringify(targetCh) });
  await rnode.doDeploy(deployTarget, true);
  const found = await rnode.listenForDataAtName(targetCh);
  // console.log('found:', JSON.stringify(found));
  const target = toJSData(firstBlockData(found));
  console.log({ target });
  return target;
}


// Get the first piece of data from listenForDataAtName
function firstBlockData(blockResults) {
  return blockResults[0].postBlockData[0];
}


function mockRNode() {
  let nextAnswer = {};

  const idToPar = id => ({ ids: [{ id }] });

  async function previewPrivateChannels({ user, timestamp }, nameQty) {
    const each = i => (user.length * i + timestamp) % 51;
    return [...Array(nameQty).keys()].map(each).map(idToPar);
  }
  async function doDeploy(deployData) {
    console.log('deploy: ', deployData);
    if (deployData.term.match(/rho:registry/)) {
      nextAnswer = { exprs: [{ g_string: 'rho:id:123456' }] };
    } else {
      nextAnswer = { exprs: [{ g_int: '42' }] };
    }
  }

  async function listenForDataAtName(_name /*: IPar*/) {
    // console.log('listen for data at', JSON.stringify(_name));
    return [{ postBlockData: [nextAnswer] }];
  }
  return def({ previewPrivateChannels, doDeploy, listenForDataAtName });
}

/*global module, setTimeout */
if (require.main === module) {
  /* global process */
  /* eslint-disable global-require */
  test({
    setTimeout,
    user: h2b('deadbeef1234'),
    rnode: mockRNode(),
    clock: () => new Date(1542492713352),
  });

  const endpoint = {
    host: process.env.npm_config_host || 'localhost',
    port: parseInt(process.env.npm_config_port || '40401', 10),
  };
  const rnode = RNode(require('grpc'), endpoint);

  try {
    test({
      setTimeout,
      rnode,
      user: h2b('deadbeef1234'),
      clock: () => new Date().valueOf(),
    });
  } catch (oops) {
    console.error(oops);
    process.exit(1);
  }
}
