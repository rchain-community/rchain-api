/** Test RHOCore test suite data against live node.
 */
/* global require, module, Buffer */

const { RNode, RHOCore, b2h } = require('../index');
const { rhol } = RHOCore;
const testData = require('./RHOCoreSuite.json');
const { runAndListen } = require('./testRNode');

function integrationTest({ Suite, endpoint, grpc, clock, rng }) {
  console.log({ endpoint });
  const node = RNode(grpc, endpoint);

  function mapValues(obj, f) {
    return Object.entries(obj).reduce(
      (acc, [k, v]) => ({ [k]: f(v), ...acc }), {},
    );
  }

  function byteArrayTest(item) {
    return (test) => {
      const returnChannel = rng().toString(36).substring(7);
      const term = rhol`
        @${returnChannel}!({${item.data}}.toByteArray())
      `;

      test.log({ term });
      runAndListen(term, returnChannel, clock().valueOf(), node)
        .then((par) => {
          const bytes = par.exprs[0].g_byte_array;
          test.log({ actual: b2h(bytes), expected: item.hex });
          test.equal(b2h(bytes), item.hex);
          test.done();
        })
        .catch((oops) => {
          test.fail(oops.message);
          test.done();
        });
    };
  }

  Suite.run(mapValues(testData, byteArrayTest));
}


if (require.main === module) {
  // Access ambient stuff only when invoked as main module.
  /* eslint-disable global-require */
  /* global process */
  const endpoint = {
    host: process.env.npm_config_host || 'localhost',
    port: parseInt(process.env.npm_config_port || '40401', 10),
  };
  integrationTest(
    {
      clock: () => new Date(),
      rng: () => Math.random(),
      endpoint,
      grpc: require('grpc'),
      Suite: require('testjs'),
    },
  );
}
