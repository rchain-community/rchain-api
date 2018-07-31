"use strict";

const RSON = require("../rnodeAPI").RSON;

function testRSON() {
    const Suite = require("testjs");

    Suite.run({
        'null': rtest({ data: null, RSON: {} }),
        'number': rtest({ data: 123, RSON: { exprs: [ { g_int: 123 } ] } }),
        'list of scalars': rtest({
            data: [true, 123, "abc"],
            RSON: { "exprs": [ { "e_list_body": { "ps": [
                { "exprs": [ { "g_bool": true } ] },
                { "exprs": [ { "g_int": 123 } ] },
                { "exprs": [ { "g_string": "abc" } ] }
            ]}}]} }),
        'object': rtest({
            data: {x: "abc"},
            RSON: { sends: [
                { chan: {quote: { exprs: [{ g_string: "x" }]}},
                  data: [{ exprs: [{ g_string: "abc"}]}]}
            ]}
        }),
        'nested object': rtest({
            data: {x: "abc", y: {a: true }},
            RSON: { sends: [
                { chan: { quote: { exprs: [{ g_string: "x"}]}},
                  data: [{ exprs: [{ g_string: "abc"}]}]},
                { chan: { quote: { exprs: [{ g_string: "y"}]}},
                  data: [{ sends: [
                      { chan: { quote: { exprs: [{ g_string: "a"}]}},
                        data: [{ exprs: [{ g_bool: true }] }] }
                  ] }] }
            ]}
        }),
        'trust vote': rtest({
            data: ["merge", "trust_cert",
                   {voter: "dckc", subject: "a1", rating: 1, cert_time: "2018-07-29T02:00:21.259Z"}],
            RSON: { exprs: [{ e_list_body: { ps: [
                { exprs: [{ g_string: "merge" }]},
                { exprs: [{ g_string:"trust_cert" }]},
                { sends: [{ chan: { quote: { exprs: [{ g_string: "cert_time"}]}},
                            data: [{ exprs :[{ g_string: "2018-07-29T02:00:21.259Z"}]}]},
                          { chan: { quote: { exprs: [{ g_string: "rating"}]}},
                            data: [{ exprs: [{ g_int: 1 }]}]},
                          { chan: { quote: { exprs: [{ g_string:  "subject"}]}},
                            data: [{ exprs: [{ g_string: "a1" }]}]},
                          { chan: { quote: { exprs: [{ g_string: "voter"}]}},
                            data: [{ exprs: [{ g_string: "dckc"}]}]}]}
            ]}}]}
        })
    });

    function rtest(item) {
        return test => {
            // console.log(JSON.stringify(unfixLF(toRSON(item.data)), bufAsHex));
            test.deepEqual(unfixLF(RSON.fromData(item.data)), item.RSON);
            test.done();
        };
    }

    function unfixLF(x) {
        if(x instanceof Array) {
            return x.map(unfixLF);
        } else if (typeof x == 'object' && x !== null && x !== undefined) {
            const nolf = {};
            for (let prop in x) {
                if (prop == 'locallyFree') { continue; }
                nolf[prop] = unfixLF(x[prop]);
            }
            return nolf;
        } else {
            return x;
        }
    }
}

testRSON();
