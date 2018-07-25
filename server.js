/** server -- RChain / OAuth gateway

See also: CONTRIBUTING.md design notes on Capper and webkeys
as well as ocap discipline.

ISSUE: add @flow static types
*/

const Capper = require('Capper');
const docopt = require('docopt').docopt;

const capper_start = require('./capper_start');
const gateway = require('./gateway/server/main');
const keyPair = require('./gateway/server/keyPair');
const rnodeAPI = require('./gateway/server/rnodeAPI');
const gameSession = require('./gateway/server/gameSession');

const usage = `
Start with "make game.gameBoard MyGame" to generate (and save) your initial
webkey, whose state includes a key pair for use on RChain.

Then visit that webkey URL in your browser to configure the rest.

Usage:
  server.js [options] list
  server.js [options] make REVIVER [ARG...]
  server.js [options] post WEBKEY METHOD [ARG...]
  server.js [options] drop WEBKEY
  server.js [options]

Options:
 REVIVER                app reviver; e.g. gateway.gateway
 --conf FILE            specification of protocol (http / https), domain, and
                        port of this service, in JSON.
                        [default: capper.config]
 --ssl DIR              where to find SSL server.key, server.crt, ca.crt
                        if protocol is https
                        [default: ./ssl]
 --db FILE              persistent object storage
                        [default: capper.db]
 --grpc-host NAME       Where to contact rnode gRPC service [default: localhost]
 --grpc-port NUM        Where to contact rnode gRPC service [default: 50000]
 --proto DIR            Where to find CasperMessage.proto
                        [default: gateway/server/rnode_proto]
 -h --help              show usage

ISSUE: add option to list all REVIVERs?
ISSUE: help on each REVIVER?
`;

const def = obj => Object.freeze(obj);


function main(argv, { fs, path, clock, crypto, https, express, passport, random_keyPair, grpc }) {
    const unique = Capper.caplib.makeUnique(crypto.randomBytes);

    const cli = docopt(usage, { argv: argv.slice(2) });
    // console.log('DEBUG: cli:', cli);

    const dbfile = Capper.fsSyncAccess(fs, path.join, cli['--db']);
    const rd = arg => Capper.fsReadAccess(fs, path.join, cli[arg]);

    Capper.makeConfig(rd('--conf')).then(config => {
	let signIn;  // ISSUE: how to link to the oauthClient at start-up?

	const app = express(),
	      expressWrap = () => app;
	const apps = def({
	    gateway: gateway.appFactory({app, passport, setSignIn,
					 sturdyPath,
					 baseURL: config.domain}),
	    keyChain: keyPair.appFactory({ random_keyPair }),
	    rnode: rnodeAPI.appFactory(cli['--proto'] + '/CasperMessage.proto',
				       {
					   grpc, clock,
					   endPoint: {
					       host: cli['--grpc-host'],
					       port: parseInt(cli['--grpc-port'])
					   }
				       }),
	    game: gameSession.appFactory('game', { clock })
	});

	const reviver = capper_start.makeReviver(apps),
	      saver = Capper.makeSaver(unique, dbfile, reviver.toMaker),
	      sturdy = Capper.makeSturdy(saver, config.domain);

	if (cli['list']) {
	    Object.keys(apps).forEach(reviver => {
		console.log(`app: ${reviver}`);
		Object.keys(apps[reviver]).forEach(method => {
		    console.log(`app reviver: ${reviver}.${method}`);
		    const maker = apps[reviver][method];

		    if ('usage' in maker) {
			console.log('args: ', maker.usage);
		    }
		});
	    });
	    return;
	}

        if (capper_start.command(cli, config, saver, sturdy)) {
            return;
        } else {
	    // reserve the homepage before Capper does
	    app.get("/", home);

	    Capper.run(argv, config, reviver, saver,
		       rd('--ssl'), https.createServer, expressWrap);

	    console.log('server started...');
	}

	// ISSUE: how to link to the oauthClient at start-up?
	function setSignIn(path) {
	    signIn = path;
	}

	function home(req, res) {
	    res.set('Content-Type', 'text/html');
	    if (signIn) {
		res.send(`<a href="${signIn}">Sign In</a>`);
	    } else {
		res.send(`<em>Stand by...</em>`);
	    }
        }

	function sturdyPath(obj) {
	    const webKey = sturdy.idToWebkey(saver.asId(obj));
	    // ISSUE: double-check waterken / Capper docs on # -> ?
	    return '/' + webKey.substring(config.domain.length).replace('#', '?');
	}
    }).done();
}


if (require.main == module) {
    // Import primitive effects only when invoked as main module.
    //
    // See Object capability discipline design note in
    // CONTRIBUTING.md.
    main(process.argv,
         {
	     // Opening a file based on filename is a primitive effect.
	     fs: require('fs'),
	     // path.join is platform-specific and hence a primitive effect.
	     path: require('path'),
	     // Random number generation is primitive (typically implemented
	     // as access to a special file, /dev/urandom).
	     crypto: require('crypto'),
	     random_keyPair: require('tweetnacl').sign.keyPair,
	     // Access to the clock is primitive.
	     clock: () => new Date(),
	     // If node's https module followed ocap discipline, it would
	     // have us pass in capabilities to make TCP connections.
	     // But it doesn't, so we treat it as primitive.
             https: require('https'),
	     // If express followed ocap discipine, we would pass it
	     // access to files and the network and such.
             express: require('express'),
	     // grpc is much like express
	     grpc: require('grpc'),
	     // The top-level passport strategy registry seems to be
	     // global mutable state.
	     // ISSUE: use passport constructors to avoid global mutable state?
             passport: require('passport'),
	 });
}
