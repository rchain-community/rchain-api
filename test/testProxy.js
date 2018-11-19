/*global require, exports*/

const { makePeer, RNode, RHOCore, h2b } = require('..');

const { fromJSData } = RHOCore;
const def = Object.freeze;

/**
 * To run this test, first deploy target1.rho (and propose).
 * It will register a contract and print out the registry URI.
 *
 * Pass that URI on the command line.
 */


async function test({ rnode, clock, user, setTimeout, target }) {
  const peer = makePeer(rnode, user, clock, setTimeout);

  const ansToSend = await peer.sendCall(target, 'buy', ['orange', 20]);
  console.log({ ansToSend });

  const targetProxy = peer.makeProxy(target);
  const ansToProxy = await targetProxy.sell('banana', 20, 3);
  console.log({ ansToProxy });
}


function mockRNode() {
  async function previewPrivateNames({ user, timestamp, nameQty }) {
    const each = i => (user.length * i + timestamp) % 51;
    return { ids: [...Array(nameQty).keys()].map(each) };
  }
  async function doDeploy(deployData) {
    console.log('deploy: ', deployData);
  }
  async function listenForDataAtName(_name /*: IPar*/) {
    const answer = 42;
    return [{ postBlockData: [fromJSData(answer)] }];
  }
  return def({ previewPrivateNames, doDeploy, listenForDataAtName });
}

/*global module, setTimeout */
if (require.main === module) {
  test({
    setTimeout,
    target: 'registrythingy1234',
    user: h2b('deadbeef1234'),
    rnode: mockRNode(),
    clock: () => new Date(1542492713352),
  });

  try {
    /* global process */
    /* eslint-disable global-require */
    const target = process.argv[2] || 'rho:id:egrz6o7om89jmpybhjk8foa6t1e11uqghgsrfq1chna7gszfj1g47d';
    const rnode = RNode(require('grpc'), { host: 'localhost', port: 40401 });

    test({
      setTimeout,
      target,
      rnode,
      user: h2b('deadbeef1234'),
      clock: () => new Date().valueOf(),
    });
  } catch (oops) {
    console.error(oops);
  }
}
