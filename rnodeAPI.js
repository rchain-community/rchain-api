/** rnodeAPI -- RChain node gRPC API

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
	let casper;
	let client;
	return Object.freeze({ init, doDeploy, createBlock, addBlock });

	function init(protoSrc, host, port) {
	    state.protoSrc = protoSrc;
	    state.endPoint = { host: host, port: port};
	}

	function theClient() {
	    if (!casper) {
		casper = grpc.load(state.protoSrc).coop.rchain.casper.protocol;
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
		//  precedent: .withUser(ByteString.EMPTY)
		//  casper/src/main/scala/coop/rchain/casper/util/ProtoUtil.scala#L251
		user: '',   
		term: term,
		timestamp: clock(),
		// sig: 'bytes', //signature of (hash(term) + timestamp) using private key
		// sigAlgorithm: '???' // name of the algorithm used to sign
	    };
	    return send(theClient(), 'DoDeploy', deployString);
	}

	function createBlock() {
	    return send(theClient(), 'createBlock', {});
	}
	function addBlock(block) {
	    return send(theClient(), 'addBlock', block);
	}
    }
}


/**
 * Adapt callback-style API using Promises.
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
    ca.doDeploy('Nil').then(result => {
	console.log('doDeploy result:', result);
    });
    
    ca.createBlock().then(result => {
	console.log('createBlock result:', result);
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

