/**
ISSUE: sessions?
  refresh = require('passport-oauth2-refresh')
  app.use(passport.session());
*/
const discord = require('passport-discord');
const github = require('passport-github');


exports.makeGateway = makeGateway;
function makeGateway(app, passport, baseURL) {
    app.use(passport.initialize());
    passport.serializeUser((user, done) => done(null, user));
    passport.deserializeUser((obj, done) => done(null, obj));

    const strategies = {
	github: opts => new github.Strategy(opts, verify),
	discord: opts => new discord.Strategy(Object.assign({ scope: 'identity'}, opts), verify)
    };

    return Object.freeze({ gateway, oauthClient });

    function gateway(context) {
	const state = context.state;

	function init() {
	    state.clients = [];
	}

	function makeClient(label, path, callbackPath, strategy, id, secret) {
	    const it = context.make('gateway.oauthClient',
				    path, callbackPath,
				    strategy, id, secret);
	    state.clients.push([label, it]);
	    return it;
	}
	const getClients = () => state.clients;

	return Object.freeze({ init, makeClient, getClients });
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
	    opts.callbackURL = baseURL + opts.callbackPath;  // ISSUE: urljoin

	    passport.use(makeStrategy(opts, verify));
	    // DEBUG: console.log('opts:', opts);

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


function main(argv, {express, passport}) {
    // ISSUE: refresh = require('passport-oauth2-refresh')
    const app = express();
    const port = parseInt(argv[2]);
    const base = `http://jambox:${port}`;

    const gwApp = makeGateway(app, passport, base);
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
	'thing 1',
	'/auth/github/login', '/auth/github/callback', 'github',
	'...gh client id', '...gh secret'
    );

    const cld = gw.makeClient(
	'thing 2',
	'/auth/discord/login', '/auth/discord/callback', 'discord',
	'index.php?discord_oauth_callback=true',
	'...',
	'...');

    app.listen(port);
}


if (require.main == module) {
    // Access ambient stuff only when invoked as main module.
    main(process.argv,
         {
	     express: require('express'),
	     passport: require('passport')  // ISSUE: isolate global mutable state?
	 });
}
