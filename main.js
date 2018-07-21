/**
ISSUE: sessions?
  refresh = require('passport-oauth2-refresh')
  app.use(passport.session());

rho:pubkey:ed25519

ISSUE: indirect to SecretService for CLIENT_SECRET?

*/
const URL = require('url').URL;

const discord = require('passport-discord');
const github = require('passport-github');


exports.makeGateway = makeGateway;
/** makeGateway -- construct Capper app for RChain OAuth oracle.
 * app: as from express(), with .use(), .get()
 * passport: as from require('passport'), since it has mutable state
 *           ISSUE: use passport constructors
 * baseURL: base URL for mounting OAuth login, callback URLs
 * sign: nacl.sign, with .keyPair(), .sign()
 */
function makeGateway(app, passport, baseURL, sign) {
    app.use(passport.initialize());
    passport.serializeUser((user, done) => done(null, user));
    passport.deserializeUser((obj, done) => done(null, obj));

    const strategies = {
	github: opts => new github.Strategy(opts, verify),
	discord: opts => new discord.Strategy(Object.assign({ scope: 'identity'}, opts), verify)
    };

    return Object.freeze({ gateway, oauthClient });

    function gateway(context) {
	// ISSUE: clients don't revive when the server restarts.
	const state = context.state;

	const b2h = bytes => new Buffer(bytes).toString('hex');
	const h2b = hex => new Buffer(hex, 'hex');
	const t2b = text => new Buffer(text);

	function init() {
	    state.clients = [];

	    const key = sign.keyPair();
	    state.publicKey = b2h(key.publicKey);
	    state.secretKey = b2h(key.secretKey);

	    console.log('@@gateway public key:', state.publicKey);
	}

	function makeClient(path, callbackPath, strategy, id, secret) {
	    const it = context.make('gateway.oauthClient',
				    path, callbackPath,
				    strategy, id, secret);
	    state.clients.push(it);
	    return it;
	}
	const getClients = () => state.clients;

	function publicKey() {
	    return state.publicKey;
	}

	function signText(message) {
	    const k = sign.keyPair.fromSecretKey(h2b(state.secretKey));
	    return b2h(sign(t2b(message), k.secretKey));
	}

	return Object.freeze({ init, makeClient, getClients,
			       publicKey, signText });
    }

    function oauthClient(context) {
	const state = context.state;

	function init(path, callbackPath, strategy, id, secret) {
	    // console.log('client init:', { path, callbackPath, strategy, id });
	    state.path = path;
	    state.strategy = strategy;
	    state.opts = {
		clientID: id,
		clientSecret: secret,
		callbackPath: callbackPath
	    };

	    use();
	}

	function use() {
	    const strategy = state.strategy;
	    if (!strategy) {
		return; // not yet initialized
	    }
	    const makeStrategy = strategies[strategy];
	    if (!makeStrategy) {
		throw new Error(`unknown strategy: ${strategy}`);
	    }
	    const opts = state.opts;
	    opts.callbackURL = new URL(opts.callbackPath, baseURL).toString();

	    passport.use(makeStrategy(opts, verify));
	    DEBUG: console.log('opts:', opts);

	    app.get(state.path, passport.authenticate(strategy));

	    app.get(opts.callbackPath,
		    passport.authenticate(strategy,
					  { failureRedirect: '/auth-failure-@@'  }),
		    (req, res) => {
			res.redirect(`/user/${req.user.username}`);
		    });

	}

	const getId = () => state.id;

	use();
	return Object.freeze({ init, getId });
    }

    function verify(accessToken, refreshToken, profile, done) {
	done(null, {
	    username: profile.username,
	    displayName: profile.displayName,
	    detail: profile._json
	});
    }
}


function integrationTest(argv, {express, passport, sign}) {
    // ISSUE: refresh = require('passport-oauth2-refresh')
    const app = express();
    const port = parseInt(argv[2]);
    const base = `http://jambox:${port}`;

    const gwApp = makeGateway(app, passport, base, sign);
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

    console.log('gateway public key:', gw.publicKey());
    console.log('gateway public signature:', gw.signText('hello world'));

    const clgh = gw.makeClient(
	'/auth/github/login', '/auth/github/callback', 'github',
	'...gh client id', '...gh secret'
    );

    const cld = gw.makeClient(
	'/auth/discord/login', '/auth/discord/callback', 'discord',
	'index.php?discord_oauth_callback=true',
	'...',
	'...');

    app.listen(port);
}


if (require.main == module) {
    // Access ambient stuff only when invoked as main module.
    integrationTest(process.argv,
         {
	     express: require('express'),
	     // ISSUE: isolate global mutable state?
	     passport: require('passport'),
	     sign: require('tweetnacl').sign
	 });
}
