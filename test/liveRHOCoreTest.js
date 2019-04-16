/** Test RHOCore test suite data against live node.
 */
// @flow

/* global require, module, Buffer */

const ttest = require('tape');

const { RNode, RHOCore, Hex } = require('..');
const testData = require('./RHOCoreSuite.json');
const { runAndListen } = require('./testRNode');

const { rhol } = RHOCore;
const b2h = Hex.encode;

/*::
type Item = { data: Object, hex: string };
 */

function integrationTest({ endpoint, grpc, clock, rng }) {
  console.log({ endpoint });
  const node = RNode(grpc, endpoint);

  function byteArrayTest(item /*: Item*/) {
    return (test) => {
      const returnChannel = rng().toString(36).substring(7);
      const term = rhol`
        @${returnChannel}!({${item.data}}.toByteArray())
      `;

      test.comment({ term });
      runAndListen(term, returnChannel, clock().valueOf(), node)
        .then((bytes) => {
          test.equal(typeof bytes, 'object');
          test.ok(bytes instanceof Uint8Array);
          if (bytes instanceof Uint8Array) {
            test.comment({ actual: b2h(bytes), expected: item.hex });
            test.equal(b2h(bytes), item.hex);
          }
          test.end();
        })
        .catch((oops) => {
          test.fail(oops.message);
          test.end();
        });
    };
  }

  Object.entries(testData).forEach(([desc, item]) => {
    /* $FlowFixMe */
    ttest(desc, byteArrayTest(item));
  });
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
