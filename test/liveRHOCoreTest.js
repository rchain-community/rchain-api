/** Test RHOCore test suite data against live node.
 */
/* global require, module, Buffer */

const { RNode } = require('../rnodeAPI');
const { rhol } = require('../RHOCore');
const { b2h } = require('../signing');
const testData = require('./RHOCoreSuite.json');
const { runAndListen } = require('./testRNode');


function integrationTest({ Suite, endpoint, grpc, clock, rng }) {
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
  if (process.argv.length !== 4) {
    process.stderr.write('usage: node liveRHOCoreTest.js <host> <port>\n');
    process.exit(1);
  }
  const endpoint = {
    host: process.argv[2],
    port: parseInt(process.argv[3], 10),
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
