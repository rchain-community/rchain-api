const discord = require('passport-discord');
const github = require('passport-github');


exports.makeGateway = makeGateway;
function makeGateway(app, passport) {
    // ISSUE: refresh = require('passport-oauth2-refresh')
    app.use(passport.initialize());
    // ISSUE: app.use(passport.session());

    return Object.freeze({ gateway, client });

    function gateway(context) {
	const state = context.state;

	function init() {
	    state.clients = [];
	}

	function makeClient(label, path, callbackURL, id, secret, scope) {
	    const it = context.make('gateway.client', path, callbackURL, id, secret, scope);
	    state.clients.push([label, it]);
	    return it;
	}
	const getClients = () => state.clients;

	return Object.freeze({ init, makeClient, getClients });
    }


    function client(context) {
	const state = context.state;

	function init(path, callbackURL, id, secret, scope) {
	    console.log('client init:', { path, callbackURL, id });
	    state.path = path;
	    const opts = state.opts = {
		scope: scope || 'identify',
		clientID: id,
		clientSecret: secret,
		callbackURL: callbackURL  // ISSUE: relative to server root?
	    };

	    function win(accessToken, refreshToken, profile, cb) {
		console.log('@@discord auth:', {
		    accessToken, refreshToken, profile, cb});
	    }

	    passport.use(new discord.Strategy(state.opts, win));
	    app.get(path, passport.authenticate('discord', () => {
		console.log('authenticate callback???@@');
		return '@@check docs';
	    }));
	}

	const getId = () => state.id;

	return Object.freeze({ init, getId });
    }
}


function main(argv, {express, passport}) {
    // ISSUE: refresh = require('passport-oauth2-refresh')
    const app = express();

    const gwApp = makeGateway(app, passport);
    function make(reviver, ...arg) {
	console.log('make:', { reviver, arg });
	const context = { state: {} };
	const it = gwApp.client(context);
	it.init(...arg);
	return it;
    }
    const gwContext = {state: {}, make};
    const gw = gwApp.gateway(gwContext);

    const cl = gwContext.make(
	'gateway.client',
	'/auth/discord', 'https://rewards.rchain.coop/index.php?discord_oauth_callback=true',
	'...',
	'...');

    const port = parseInt(argv[2]);
    console.log('starting %s on %s', argv, app, port);
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


