/*global require, exports, Buffer*/
// @flow

const { URL } = require('url');
const { RNode, Block, RHOCore, RegistryProxy, REV, Hex, Ed25519keyPair } = require('..');
const { link } = require('./assets');

const { sendCall, makeProxy } = RegistryProxy;
const { fromIds } = RHOCore;
const h2b = Hex.decode;

const def = Object.freeze;
const remoteContract = link('./target1.rho');


/**
 * Get remoteTarget registry URI and make method calls on the
 * registered object.
 */
async function test({ rnode, clock, deployer, setTimeout }) {
  const target = await remoteTarget({ rnode, clock, deployer });

  const timestamp = clock().valueOf();

  const delay = _i => makeTimer(setTimeout)(500);
  const ansToSend = await sendCall(
    { target, method: 'buy', args: ['orange', 20] },
    timestamp, deployer, payFor,
    { rnode, clock, delay, unary: true },
  );
  console.log({ ansToSend });

  const targetProxy = makeProxy(target, deployer, payFor, { rnode, clock, delay, unary: true });
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
async function remoteTarget({ rnode, clock, deployer }) /*: Promise<URL> */{
  const timestamp = clock().valueOf();
  const deployTarget = payFor({ term: remoteContract, timestamp });
  const [targetCh] = await fromIds(rnode.previewPrivateNames({ user: deployer, timestamp }, 1));
  // console.log({ targetCh: JSON.stringify(targetCh) });
  await rnode.doDeploy(deployTarget, true);
  console.log(`remote: listening at return chan ${RHOCore.prettyPrivate(targetCh)}`);
  const found = await rnode.listenForDataAtName(targetCh);
  // console.log('found:', JSON.stringify(found));
  const target = Block.firstData(found);
  console.log({ target });
  if (!(target instanceof URL)) { throw new Error('expected URL'); }
  return target;
}


const defaultSec = Hex.decode('b18e1d0045995ec3d010c387ccfeb984d783af8fbb0f40fa7db126d889f6dadd');

function payFor(d0, key, phloPrice = 1, phloLimit = 10000000) {
  const dout = REV.SignDeployment.sign(Ed25519keyPair(defaultSec), {
    ...d0,
    phloPrice,
    phloLimit,
  });
  // console.log({ valid: SignDeployment.verify(dout), sig: b2h(dout.sig) });
  return dout;
}


function mockRNode() {
  let nextAnswer = {};

  async function previewPrivateNames({ user, timestamp }, nameQty) {
    const each = i => Buffer.from([(user.length * i + timestamp) % 51]);
    return [...Array(nameQty).keys()].map(each);
  }
  async function doDeploy(deployData, _auto = false) {
    console.log('deploy: ', deployData);
    if (deployData.term.match(/rho:registry/)) {
      nextAnswer = { exprs: [{ g_uri: 'rho:id:123456' }] };
    } else {
      nextAnswer = { exprs: [{ g_int: '42' }] };
    }
    return 'Success! (mock)';
  }

  async function listenForDataAtName(_name /*: IPar*/) {
    // console.log('listen for data at', JSON.stringify(_name));
    return [{ postBlockData: [nextAnswer] }];
  }
  return def({ previewPrivateNames, doDeploy, listenForDataAtName });
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
      clock: () => new Date(),
    }).catch((oops) => {
      console.error(oops);
      console.error(oops.stack);
      process.exit(1);
    });
  }
}
