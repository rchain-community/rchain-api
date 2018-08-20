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
 * TODO @dckc, I'm not clear why we need all of clientFactory, casperClient, and theClient
 * @param grpc grpc instance from the node grpc package
 * @param clock Some access to system time
 */
module.exports.clientFactory = clientFactory;
function clientFactory({grpc, clock}) {
    return def({ casperClient });

    /**
     * Generates an immutable casperClient object listening on the given endpoint
     * @param endpoint { host, port } of gRPC server
     * @return An immutable casperClient object
     */
    function casperClient(endPoint) {
        if (!endPoint.port) {
          console.log("Port not set, defaulting to 40401")
          endPoint.port = 40401
        }
        if (!endPoint.host) {
          console.log("Host not set, defaulting to localhost")
          endPoint.host - "localhost"
        }
        let proto;
        let casper;
        let client;
        return def({ doDeploy, createBlock, addBlock, propose, toByteArray });

        /**
         * Get a reference to the casper client
         * @return The casper client
         */
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

        /**
         * Deploys a rholang term to a node
         * @param term A string of rholang code (for example @"world"!("Hello!")  )
         * @return A promise for a DeployServiceResponse
         */
        function doDeploy(term) {
            const deployString = {
                // casper/src/main/scala/coop/rchain/casper/util/comm/DeployRuntime.scala#L38
                // d        = DeployString().withTimestamp(timestamp).withTerm(code)
                term: term,
                timestamp: clock().valueOf()
            };

            return send(theClient(), 'DoDeploy', deployString);
        }

        /**
         * Creates a block on your node
         * @return A promise for MaybeBlockMessage
         */
        function createBlock() {
            return send(theClient(), 'createBlock', {});
        }

        /**
         * Adds block to local DAG and gossips block to peers on network
         * @param block The block to be added
         * @return A promise for a google.protobuf.Empty
         */
        function addBlock(block) {
            // ISSUE: Error: Illegal value for Message.Field ...
            // .Expr.g_bool of type bool: object
            // (proto3 field without field presence cannot be null)
            // https://gist.github.com/dckc/e60f22866aa47938bcd06e39be351aea
            return send(theClient(), 'addBlock', block);
        }

        /**
         * Create and add a block
         * @return A promise for a google.protobuf.Empty
         */
        function propose() {
          //TODO Maybe test for success on create before adding.
            return createBlock().then(maybeBlock => {
                return addBlock(logged(maybeBlock, '@@createBlock(): ').block);
            });
        }

        /**
         * Turns a rholang term into a byte-array compatible with Rholang
         * @param termObj a rholang term object
         * @return The byte-array
         */
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
 * @param x Any javascript object to be serialized to RSON
 * @return A rholang term representing the object in RSON form.
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

/**
 * Converts an RSON object into a JSON string
 * Opposite of toRSON
 * @param par A rholang term representing the object.
 * @return A JSON string
 */
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
 * @param obj Object whose method you want to call
 * @param method String of method name
 * @param arg Any arguments that method requires
 * @return A promise of method's result
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


/**
 *
 */
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
        throw("usage: node rnodeAPI.js <host> <port>");
    }
}
