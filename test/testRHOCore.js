/* global require */
/* eslint-disable object-curly-newline */

const { URL } = require('url');
const Suite = require('testjs');

const { Par, GPrivate } = require('../protobuf/RhoTypes.js');
const { RHOCore, h2b, b2h, keyPair } = require('../index');
const testData = require('./RHOCoreSuite.json');

function testRHOCore() {
  function rtest(item) {
    return (test) => {
      test.deepEqual(RHOCore.fromJSData(item.data), item.rho);
      test.deepEqual(RHOCore.toJSData(item.rho), item.data);
      if (item.rholang != null) {
        test.deepEqual(RHOCore.toRholang(item.rho), item.rholang);
      }
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
    'JSON extension: bytes': (test) => {
      const hex = 'deadbeef';
      rtest({
        data: h2b(hex),
        rholang: `"${hex}".hexToBytes()`,
        hex: '2a07ca0104deadbeef',
        rho: { exprs: [{ g_byte_array: h2b(hex) }] },
      })(test);
    },
    'JSON extension: unforgeable names': (test) => {
      const [destid, statusid] = [
        h2b('476ec6197e7106e0f0c64fc4cc39e5439658f6b8540b95765496cfe01e92c6b4'),
        h2b('fc4af4925456aec1b3b1bf003ded72a04557cce8ed0a367b5e1c4021e9adf9de'),
      ];
      const k1 = keyPair(h2b('f6664a95992958bbfeb7e6f50bbca2aa7bfd015aec79820caf362a3c874e9247'));

      // BasicWallet.transfer signature is over these params:
      const [nonce, amount, destination] = [12, 100, GPrivate.fromObject({ id: destid })];
      const status = GPrivate.fromObject({ id: statusid });
      test.log('destination:', destination);
      const sig = k1.signBytes(
        RHOCore.toByteArray(RHOCore.fromJSData([nonce, amount, destination]))
      );
      const rholWithDest = RHOCore.rholInScope({
        [b2h(destid)]: 'destination',
        [b2h(statusid)]: 'status',
      });
      test.equal(
        rholWithDest`new destination, status in {
          BasicWallet!("transfer", ${amount}, ${nonce}, ${sig}, ${destination}, ${status})
        }`,
        '@@TODO',
      );

      const par = { ids: [destid] };
      rtest({
        rho: par,
        data: GPrivate.fromObject({ id: destid }),
        rholang: null,
        hex: '3a220a20476ec6197e7106e0f0c64fc4cc39e5439658f6b8540b95765496cfe01e92c6b4',
      })(test);
    },
  });
}

testRHOCore();
