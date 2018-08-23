// const util = require('util');

const Suite = require('testjs');

const { RHOCore } = require('../rnodeAPI');

function testRHOCore() {
  Suite.run({
    null: rtest({ data: null, rho: {}, rholang: 'Nil' }),
    number: rtest({
      data: 123,
      rho: { exprs: [{ g_int: 123, expr_instance: 'g_int' }] },
      rholang: '123',
    }),
    'list of scalars': rtest({
      data: [true, 123, 'abc'],
      rholang: '[true, 123, "abc"]',
      rho: {
        exprs: [{
          expr_instance: 'e_list_body',
          e_list_body: {
            ps: [
              { exprs: [{ g_bool: true, expr_instance: 'g_bool' }] },
              { exprs: [{ g_int: 123, expr_instance: 'g_int' }] },
              { exprs: [{ g_string: 'abc', expr_instance: 'g_string' }] },
            ],
          },
        }],
      },
    }),
    object: rtest({
      data: { x: 'abc' },
      rholang: '@"x"!("abc")',
      rho: {
        sends: [
          {
            chan: { quote: { exprs: [{ g_string: 'x', expr_instance: 'g_string' }] } },
            data: [{ exprs: [{ g_string: 'abc', expr_instance: 'g_string' }] }],
          },
        ],
      },
    }),
    'nested object': rtest({
      data: { x: 'abc', y: { a: true } },
      rholang: '@"x"!("abc") | @"y"!(@"a"!(true))',
      rho: {
        sends: [
          {
            chan: { quote: { exprs: [{ g_string: 'x', expr_instance: 'g_string' }] } },
            data: [{ exprs: [{ g_string: 'abc', expr_instance: 'g_string' }] }],
          },
          {
            chan: { quote: { exprs: [{ g_string: 'y', expr_instance: 'g_string' }] } },
            data: [
              {
                sends: [
                  {
                    chan: { quote: { exprs: [{ g_string: 'a', expr_instance: 'g_string' }] } },
                    data: [{ exprs: [{ g_bool: true, expr_instance: 'g_bool' }] }],
                  },
                ],
              }],
          }],
      },
    }),
    'trust vote': rtest({
      data: ['merge', 'trust_cert',
        {
          voter: 'dckc', subject: 'a1', rating: 1, cert_time: '2018-07-29T02:00:21.259Z',
        }],
      rholang: '["merge", "trust_cert", @"cert_time"!("2018-07-29T02:00:21.259Z") | @"rating"!(1) | @"subject"!("a1") | @"voter"!("dckc")]',
      rho: {
        exprs: [{
          expr_instance: 'e_list_body',
          e_list_body: {
            ps: [
              { exprs: [{ g_string: 'merge', expr_instance: 'g_string' }] },
              { exprs: [{ g_string: 'trust_cert', expr_instance: 'g_string' }] },
              {
                sends: [
                  {
                    chan: { quote: { exprs: [{ g_string: 'cert_time', expr_instance: 'g_string' }] } },
                    data: [{ exprs: [{ g_string: '2018-07-29T02:00:21.259Z', expr_instance: 'g_string' }] }],
                  },
                  {
                    chan: { quote: { exprs: [{ g_string: 'rating', expr_instance: 'g_string' }] } },
                    data: [{ exprs: [{ g_int: 1, expr_instance: 'g_int' }] }],
                  },
                  {
                    chan: { quote: { exprs: [{ g_string: 'subject', expr_instance: 'g_string' }] } },
                    data: [{ exprs: [{ g_string: 'a1', expr_instance: 'g_string' }] }],
                  },
                  {
                    chan: { quote: { exprs: [{ g_string: 'voter', expr_instance: 'g_string' }] } },
                    data: [{ exprs: [{ g_string: 'dckc', expr_instance: 'g_string' }] }],
                  }],
              }],
          },
        }],
      },
    }),
  });

  function rtest(item) {
    return (test) => {
      /*
      test.log(util.inspect(
        {
          unfixed: unfixLF(RHOCore.fromJSData(item.data)),
          rho: item.rho,
          data: item.data,
        },
        {showHidden: false, depth: null}));
       */
      // console.log(JSON.stringify(unfixLF(toRSON(item.data)), bufAsHex));
      test.deepEqual(unfixLF(RHOCore.fromJSData(item.data)), item.rho);
      test.deepEqual(RHOCore.toJSData(item.rho), item.data);
      test.deepEqual(RHOCore.toRholang(item.rho), item.rholang);

      test.done();
    };
  }

  function unfixLF(x) {
    if (x instanceof Array) {
      return x.map(unfixLF);
    }
    if (typeof x === 'object' && x !== null && x !== undefined) {
      const nolf = {};
      Object.entries(x).forEach(([property, value]) => {
        if (property === 'locallyFree') { return; }
        nolf[property] = unfixLF(value);
      });
      return nolf;
    }
    return x;
  }
}

testRHOCore();
