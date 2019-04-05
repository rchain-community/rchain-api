/** Test RHOCore test suite data against live node.
 */
/* global require, module, Buffer */

const ttest = require('tape');

const { RNode, RHOCore, b2h } = require('../index');
const testData = require('./RHOCoreSuite.json');
const { runAndListen } = require('./testRNode');

const { rhol } = RHOCore;

function integrationTest({ endpoint, grpc, clock, rng }) {
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

      test.comment({ term });
      runAndListen(term, returnChannel, clock().valueOf(), node)
        .then((par) => {
          const bytes = par.exprs[0].g_byte_array;
          test.comment({ actual: b2h(bytes), expected: item.hex });
          test.equal(b2h(bytes), item.hex);
          test.end();
        })
        .catch((oops) => {
          test.fail(oops.message);
          test.end();
        });
    };
  }

  Object.entries(mapValues(testData, byteArrayTest))
    .forEach(([desc, fn]) => ttest(desc, fn));
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
    },
  );
}
