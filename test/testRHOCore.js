/* eslint-disable object-curly-newline */
/* eslint-disable object-curly-newline */

const Suite = require('testjs');

const { Par } = require('../protobuf/RhoTypes.js');
const RHOCore = require('../RHOCore');
const { h2b } = require('../signing');
const testData = require('./RHOCoreSuite.json');


function testRHOCore() {
  function rtest(item) {
    return (test) => {
      test.deepEqual(Par.encode(Par.decode(h2b(item.hex))), Par.encode(item.rho));
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

  const { rhol } = RHOCore;
  Suite.run({
    'rhol template: numbers, strings, lists, objects': (test) => {
      test.deepEqual(rhol`c1!(${['a']}, ${{ b: 2 }})`, 'c1!(["a"], @"b"!(2))');
      test.done();
    },
    'rhol template: string quoting': (test) => {
      const txt = '"Hi," he said; "I\'m John."';
      test.deepEqual(rhol`c1!(${txt})`, 'c1!("\\"Hi,\\" he said; \\"I\'m John.\\"")');
      test.done();
    },
    'rhol template: begining': (test) => {
      test.deepEqual(rhol`${'a'}!(bc)`, '"a"!(bc)');
      test.done();
    },
    'rhol template: ending': (test) => {
      test.deepEqual(rhol`0!${'a'}`, '0!"a"');
      test.done();
    },
  });
}

testRHOCore();
