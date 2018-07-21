/** rnodeAPI -- RChain node gRPC API

This is patterned after the July 11 Genesis Block Demo where he signed
transactions using the rnode command line.

https://www.youtube.com/watch?v=WzAdfjwgaQs#t=9m28s

The relevant gRPC protocol is:
https://github.com/rchain/rchain/blob/dev/models/src/main/protobuf/CasperMessage.proto

Docs on gRPC in node.js:
https://grpc.io/docs/tutorials/basic/node.html

We follow Capper conventions for persistent objects.
See integrationTest.


 */

'use strict';

module.exports.makeRNodeApp = makeRNodeApp;
function makeRNodeApp(grpc, clock) {
    return Object.freeze({ rnode, casperClient });

    function rnode(context) {
	return Object.freeze({ init, makeCasper});

	function init() {
	}

	function makeCasper(protoSrc, host, port) {
	    return context.make('rnode.casperClient',
				protoSrc, host, port);
	}
    }

    function casperClient(context) {
	const state = context.state;
	let proto;
	let casper;
	let client;
	return Object.freeze({ init,
			       doDeploy, createBlock, addBlock, propose,
			       rhoList, toByteArray });

	function init(protoSrc, host, port) {
	    state.protoSrc = protoSrc;
	    state.endPoint = { host: host, port: port};
	}

	function theClient() {
	    if (!casper) {
		proto = grpc.load(state.protoSrc);
		casper = proto.coop.rchain.casper.protocol;
	    }
	    if (!client) {
		const { host, port} = state.endPoint;
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
		timestamp: clock()
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
		return addBlock(logged('@@createBlock():', maybeBlock).block);
	    });
	}

	function logged(label, obj) {
	    console.log(label, JSON.stringify(obj, bufAsHex, 2));
	    return obj;
	}

	function rhoList(ints) {
	    // this locallyFree: emptyBitSet stuff shouldn't be necessary; see
	    // https://rchain.atlassian.net/browse/RHOL-537
	    const bytesPerLong = 8;
	    const emptyBitSet = new Buffer(Array(bytesPerLong).fill(0));

	    // [1, 2, 2] is a process with one exprs, which is a list
	    // The list has one 3 items, each of which is a process
	    // with one exprs, which is an int.
	    const parObj = {
		exprs: [{e_list_body: {
		    ps: [{
			exprs: ints.map(i => ({ g_int: i })),
			locallyFree: emptyBitSet
                    }],
                    locallyFree: emptyBitSet
                }}],
                locallyFree: emptyBitSet
            };

	    return logged('@@rhoList', parObj);
	}

	function toByteArray(termObj) {
	    theClient();  // Make sure proto is loaded. (ISSUE: refactor)

	    // note: if we forget new here, we get:
	    // TypeError: this.$set is not a function
            const term = new proto.Par(termObj);

	    const buf = term.toBuffer();
            console.log('@@term serialized hex: ', buf.toString('hex'));
	    return buf;
	}
    }
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
 * JSON replacer: stringify Buffer data as hex
 */
function bufAsHex(prop, val) {
    if (prop == 'data' && typeof(val) == 'object' && val instanceof Array) {
	return new Buffer(val).toString('hex');
    }
    return val;
}


function integrationTest(argv, {grpc, clock}) {
    const host = argv[2], port = parseInt(argv[3]);

    const rnodeApp = makeRNodeApp(grpc, clock);
    function make(reviver, ...arg) {
	console.log('make stub:', { reviver, arg });
	const context = { state: {} };
	const it = rnodeApp.casperClient(context);
	it.init(...arg);
	return it;
    }
    const rnodeContext = {state: {}, make};
    const rnode = rnodeApp.rnode(rnodeContext);
    rnode.init();

    const ca = rnode.makeCasper(
	__dirname + '/rnode_proto/CasperMessage.proto',
	host, port);

    const stuffToSign = ca.rhoList([42]);
    const serialized = ca.toByteArray(stuffToSign);

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
    integrationTest(
	process.argv,
	{
	    grpc: require('grpc'),
	    clock: () => new Date().valueOf()
	});
}
