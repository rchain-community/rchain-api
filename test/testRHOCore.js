/* global require */
/* eslint-disable object-curly-newline */

const { URL } = require('url');
const Suite = require('testjs');

const { Par } = require('../protobuf/RhoTypes.js');
const { RHOCore, h2b } = require('../index');
const testData = require('./RHOCoreSuite.json');


function testRHOCore() {
  function rtest(item) {
    return (test) => {
      test.deepEqual(RHOCore.fromJSData(item.data), item.rho);
      test.deepEqual(RHOCore.toJSData(item.rho), item.data);
      test.deepEqual(RHOCore.toRholang(item.rho), item.rholang);
      test.deepEqual(RHOCore.toByteArray(item.rho).toString('hex'), item.hex);
      test.deepEqual(Par.encode(Par.decode(h2b(item.hex))), Par.encode(item.rho));

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
    'JSON extension: URI': (test) => {
      const uri = 'rho:id:wdwc36f4ixa6xacck3ddepmgueum7zueuczgthcqp6771kdu8jogm8';
      rtest({
        data: new URL(uri),
        rholang: `\`${uri}\``,
        hex: '2a3f223d72686f3a69643a776477633336663469786136786163636b33646465706d677565756d377a756575637a677468637170363737316b6475386a6f676d38',
        rho: { exprs: [{ g_uri: uri }] },
      })(test);
    },
    'rhol template: URL': (test) => {
      const uri = new URL('rho:id:wdwc36f4ixa6xacck3ddepmgueum7zueuczgthcqp6771kdu8jogm8');
      test.deepEqual(
        rhol`lookup!(${uri}, *return)`,
        'lookup!(`rho:id:wdwc36f4ixa6xacck3ddepmgueum7zueuczgthcqp6771kdu8jogm8`, *return)',
      );
      test.done();
    },
  });
}

testRHOCore();
