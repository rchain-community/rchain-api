/* eslint-disable object-curly-newline */
/* eslint-disable object-curly-newline */

const Suite = require('testjs');

const RHOCore = require('../RHOCore');
const testData = require('./RHOCoreSuite.json');

function testRHOCore() {
  function rtest(item) {
    return (test) => {
      test.deepEqual(RHOCore.fromJSData(item.data), item.rho);
      test.deepEqual(RHOCore.toJSData(item.rho), item.data);
      test.deepEqual(RHOCore.toRholang(item.rho), item.rholang);
      test.deepEqual(RHOCore.toByteArray(item.rho).toString('hex'), item.hex);

      test.done();
    };
  }

  function mapValues(obj, f) {
    return Object.entries(obj).reduce(
      (acc, [k, v]) => ({ [k]: f(v), ...acc }), {},
    );
  }

  Suite.run(mapValues(testData, rtest));
}

testRHOCore();
