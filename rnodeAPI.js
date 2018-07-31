/** rnodeAPI -- RChain node Casper gRPC API endpoints

We create Capper persistent objects for rnode endpoints.

You can run `integrationTest()` a la `node rnodeAPI.js`.

refs:
  - [CasperMessage.proto][1] and RhoTypes.proto.
  - [gRPC in node.js][2]

[1]: https://github.com/rchain/rchain/blob/dev/models/src/main/protobuf/CasperMessage.proto
[2]: https://grpc.io/docs/tutorials/basic/node.html

 */

'use strict';

const def = obj => Object.freeze(obj);  // cf. ocap design note
const protoSrc = __dirname + '/protobuf/CasperMessage.proto';

/**
 * endPoint: { host, port } of gRPC server
 */
module.exports.clientFactory = clientFactory;
function clientFactory({grpc, clock}) {
    return def({ casperClient });

    function casperClient(endPoint) {
	let proto;
	let casper;
	let client;
	return def({
		     doDeploy, createBlock, addBlock, propose,
		     toByteArray });

	function theClient() {
	    if (!casper) {
		proto = grpc.load(protoSrc);
		casper = proto.coop.rchain.casper.protocol;
	    }
	    if (!client) {
		const { host, port} = endPoint;
		client = new casper.DeployService(
		    `${host}:${port}`, grpc.credentials.createInsecure());
	    }
            return client;
        }

        function doDeploy(term) {
            const deployString = {
                // casper/src/main/scala/coop/rchain/casper/util/comm/DeployRuntime.scala#L38
                // d        = DeployString().withTimestamp(timestamp).withTerm(code)
                term: term,
                timestamp: clock().valueOf()
            };

            return send(theClient(), 'DoDeploy', deployString);
        }

        function createBlock() {
            return send(theClient(), 'createBlock', {});
        }

        function addBlock(block) {
            // ISSUE: Error: Illegal value for Message.Field ...
            // .Expr.g_bool of type bool: object
            // (proto3 field without field presence cannot be null)
            // https://gist.github.com/dckc/e60f22866aa47938bcd06e39be351aea
            return send(theClient(), 'addBlock', block);
        }

        function propose() {
            return createBlock().then(maybeBlock => {
                return addBlock(logged(maybeBlock, '@@createBlock(): ').block);
            });
        }

        function toByteArray(termObj) {
            theClient();  // Make sure proto is loaded. (ISSUE: refactor)

            // note: if we forget new here, we get:
            // TypeError: this.$set is not a function
            const term = new proto.Par(termObj);

            const buf = term.toBuffer();
            return buf;
        }
    }
}


const RSON = def({
    fromData: toRSON,
    stringify: RSONsrc
});
module.exports.RSON = RSON;

/**
 * "we can detail a direct representation of JSON into a
 * fragment of the rholang syntax referred to in the diagram
 * below as RHOCore." -- [Mobile process calculi for programming the blockchain[1]
 *
 * [1]: https://github.com/rchain/mobile-process-calculi-for-blockchain/blob/master/enter-the-blockchain.rst
 */
// this locallyFree: emptyBitSet stuff shouldn't be necessary; see
// https://rchain.atlassian.net/browse/RHOL-537
const bytesPerLong = 8;
const emptyBitSet = new Buffer(Array(bytesPerLong).fill(0));
function toRSON(x) {
    const fixLF = p => Object.assign({ locallyFree: emptyBitSet }, p);

    const expr1 = kv => fixLF({ exprs: [kv] });

    function recur(x) {
        switch (typeof x) {
        case 'boolean':
            return expr1({ g_bool: x });
        case 'number':
            // ISSUE: only integers
            return expr1({ g_int: x });
        case 'string':
            return expr1({ g_string: x });
        case 'object':
            if (x === null) {
                return fixLF({});
            } else if (Array.isArray(x)) {
                return toArry(x);
            } else {
                return keysValues(x);
            }
        default:
            throw(new Error('no mapping to RSON for ' +  typeof x));
        };
    }

    function toArry(items) {
        // [1, 2, 2] is a process with one exprs, which is a list
        // The list has one 3 items, each of which is a process
        // with one exprs, which is an int.
        return expr1({e_list_body: fixLF({ ps: items.map(recur) }) });
    }

    function keysValues(obj) {
        const sends = Object.keys(obj).sort().map(k => {
            const chan = { quote: expr1({ g_string: k }) };
            return fixLF({ chan: chan, data: [recur(obj[k])] });
        });
        return fixLF({ sends });
    }

    return recur(x);
}

function RSONsrc(par) {
    const src = x => JSON.stringify(x);

    function recur(p) {
        if (p.exprs) {
            if (p.exprs.length != 1) {
                throw('not implemented');
            }
            const ex = p.exprs[0];
            if ('g_bool' in ex) {
                return src(ex.g_bool);
            } else if ('g_int' in ex) {
                return src(ex.g_int);
            } else if ('g_string' in ex) {
                return src(ex.g_string);
            } else if ('e_list_body' in ex) {
                return '[' + ex.e_list_body.ps.map(recur).join(', ') + ']';
            } else {
                throw(new Error(`not RSON? ${ex}`));
            }
        } else if (p.sends) {
            const ea = s => `@${recur(s.chan.quote)}!(${s.data.map(recur).join(', ')})`;
            return p.sends.map(ea).join(' | ');
        } else {
            // TODO: check that everything else is empty
            return 'Nil';
        }
    }

    return recur(par);
}


/**
 * Adapt callback-style API using Promises.
 *
 * Instead of obj.method(...arg, callback),
 * use send(obj, 'method', ...arg) and get a promise.
 *
 * ISSUE: is this just Q.nfcall()?
 */
function send(obj, method, ...arg) {
    return new Promise(executor);

    function executor(resolve, reject) {
        const callback = (err, result) => {
            if (err) {
                reject(err);
            }
            resolve(result);
        };

        obj[method](...(arg.concat([callback])));
    }
}


/**
 * log with JSON replacer: stringify Buffer data as hex
 */
module.exports.logged = logged;
function logged(obj, label) {
    let bufferData = null;

    console.log(label, JSON.stringify(obj, bufAsHex, 2));
    return obj;
}
function bufAsHex(prop, val) {
    if (prop == 'data' && 'type' in this && this.type == 'Buffer') {
        return new Buffer(val).toString('hex');
    }
    return val;
}



function integrationTest(argv, {grpc, clock}) {
    if (argv.length < 4) {
        throw new Error('usage: node SCRIPT host port');
    }
    const host = argv[2], port = parseInt(argv[3]);

    const stuffToSign = {x: "abc"};

    const maker = clientFactory({ grpc, clock });
    const ca = maker.casperClient({ host, port });

    logged(ca.toByteArray(toRSON(stuffToSign)), 'stuffToSign serialized');

    // const rhoTerm = 'contract @"certifyPeer"(peer, level) = { peer!(*level) }';
    const rhoTerm = '@"world"!("hello!")';
    ca.doDeploy(rhoTerm).then(result => {
        console.log('doDeploy result:', result);

        if (!result.success) {
            throw(result);
        }

        return ca.propose();
    }).catch(oops => {
        console.log('deploy, propose failed:', oops);
    });
}


// ISSUE: move to test file
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
            test.deepEqual(unfixLF(toRSON(item.data)), item.RSON);
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


if (require.main == module) {
    // Access ambient stuff only when invoked as main module.
    if (process.argv.length == 4) {
        integrationTest(
            process.argv,
            {
                grpc: require('grpc'),
                clock: () => new Date()
            });
    } else {
	testRSON();
    }
}
