/** gateway -- RChain / OAuth gateway Capper persistent objects

BUG: clients don't revive when the server restarts.

ISSUE: sessions?
  refresh = require('passport-oauth2-refresh')
  app.use(passport.session());

ISSUE: indirect to SecretService for CLIENT_SECRET?
*/
const URL = require('url').URL;

const discord = require('passport-discord');
const github = require('passport-github');

const keyPair = require('./keyPair');
const rnodeAPI = require('./rnodeAPI');

const def = obj => Object.freeze(obj);  // cf. ocap design note


/**
 * Construct Capper app for RChain OAuth oracle.
 *
 * app: as from express(), with .use(), .get()
 * passport: as from require('passport'), since it has mutable state
 *           ISSUE: use passport constructors
 * baseURL: base URL for mounting OAuth login, callback URLs
 */
exports.appFactory = appFactory;
function appFactory({app, passport, baseURL, setSignIn, sturdyPath}) {
    app.use(passport.initialize());
    passport.serializeUser((user, done) => done(null, user));
    passport.deserializeUser((obj, done) => done(null, obj));

    const strategies = {
	github: opts => new github.Strategy(opts, verify),
	discord: opts => new discord.Strategy(Object.assign({ scope: 'identity'}, opts), verify)
    };

    return def({ oauthClient });

    function oauthClient(context) {
	let state; // state.X throws until init()
	if ('strategy' in context.state) {
	    state = context.state;
	    use();
	}

	return def({
	    init,
	    path: () => state.path,
	    strategy: () => state.strategy,
	    clientId: () => state.id
	});

	function init(path, callbackPath, strategy, id, secret, game) {
	    state = context.state;
	    // console.log('client init:', { path, callbackPath, strategy, id });
	    state.path = path;
	    state.strategy = strategy;
	    state.opts = {
		clientID: id,
		clientSecret: secret,
		callbackPath: callbackPath
	    };
	    state.game = game;

	    use();
	}

	function use() {
	    const strategy = state.strategy;
	    const makeStrategy = strategies[strategy];
	    if (!makeStrategy) {
		throw new Error(`unknown strategy: ${strategy}`);
	    }

	    const opts = state.opts;
	    opts.callbackURL = new URL(opts.callbackPath, baseURL).toString();

	    passport.use(makeStrategy(opts, verify));
	    // console.log('DEBUG: opts:', opts);

	    app.get(state.path, passport.authenticate(strategy));
	    setSignIn(state.path);

	    app.get(opts.callbackPath,
		    passport.authenticate(strategy,
					  { failureRedirect: '/auth-failure-@@'  }),
		    (req, res) => {
			const session = state.game.sessionFor(req.user);
			const sessionAddr = sturdyPath(session);
			res.redirect(sessionAddr);
		    });
	}

    }

    function verify(accessToken, refreshToken, profile, done) {
	done(null, {
	    username: profile.username,
	    displayName: profile.displayName,
	    detail: profile._json
	});
    }
}


function trustCertTest(argv, { clock, random_keyPair, grpc }) {
    const host = argv[2], port = parseInt(argv[3]);  // GRPC peer
    const logged = rnodeAPI.logged, RSON = rnodeAPI.RSON;

    const cert1 = {
	voter: "dckc",
	subject: "bob",
	rating: 2,
	cert_time: clock().toISOString()
    };

    const gatewayKey = keyPair.appFactory({ random_keyPair }).keyPair({ state: {} });
    gatewayKey.init('gateway 1 key');
    console.log(gatewayKey, gatewayKey.publicKey());

    const rnodeApp = rnodeAPI.appFactory('rnode', {grpc, clock});

    function make(reviver, ...arg) {
	console.log('make stub:', { reviver, arg });
	const context = { state: {} };
	const it = rnodeApp.casperClient(context);
	it.init(...arg);
	return it;
    }
    const rnode1 = rnodeApp.rnode({ state: {}, make });
    rnode1.init();
    logged(rnode1, 'rnode1');

    const rchain = rnode1.makeCasper(
	__dirname + '/rnode_proto/CasperMessage.proto',
	host, port);

    const certSigHex = gatewayKey.signBytesHex(rchain.toByteArray(RSON.fromData(cert1)));
    const certTerm = logged(
	`@"certify"!(${RSON.stringify(RSON.fromData(cert1))}, ${JSON.stringify(certSigHex)})`,
	'certTerm');
    rchain.doDeploy(certTerm).then(result => {
	console.log('doDeploy result:', result);

	if (!result.success) {
	    throw(result);
	}
	return rchain.createBlock().then(maybeBlock => {
	    logged(maybeBlock, 'createBlock?');
	});
    }).catch(oops => { console.log(oops); });
}

function integrationTest(argv, {express, passport}) {
    // ISSUE: refresh = require('passport-oauth2-refresh')
    const app = express();
    const host = argv[2], port = parseInt(argv[3]);
    const baseURL = `http://${host}:${port}`;

    const gwApp = appFactory({app, passport, baseURL});
    function make(reviver, ...arg) {
	console.log('make:', { reviver, arg });
	const context = { state: {} };
	const it = gwApp.oauthClient(context);
	it.init(...arg);
	return it;
    }
    const gwContext = {state: {}, make};
    const gw = gwApp.gateway(gwContext);
    gw.init();

    const clgh = gw.makeClient(
	'/auth/github/login', '/auth/github/callback', 'github',
	'...gh client id', '...gh secret'
    );

    const cld = gw.makeClient(
	'/auth/discord/login', '/auth/discord/callback', 'discord',
	'index.php?discord_oauth_callback=true',
	'...',
	'...');

    console.log(`listening at ${baseURL}`);
    app.listen(port);
}


if (require.main == module) {
    // ocap: Import powerful references only when invoked as a main module.
    trustCertTest(
	process.argv,
	{
	    grpc: require('grpc'),
	    clock: () => new Date(),
	    random_keyPair: require('tweetnacl').sign.keyPair
	});

    if (0) {
    integrationTest(process.argv,
         {
	     express: require('express'),
	     // ISSUE: isolate global mutable state?
	     passport: require('passport'),
	 });
    }
}
