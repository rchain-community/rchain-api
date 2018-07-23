/** gameSession -- sit in on RChain games

Each game is represented by a key pair. If you are granted a session
(e.g. via OAuth), your moves will be signed and deployed to RChain.

 */

const rnodeAPI = require('./rnodeAPI'),
      RSON = rnodeAPI.RSON, logged = rnodeAPI.logged;

const def = obj => Object.freeze(obj);

// ISSUE: TODO: get peers to rate from github / discord
const mockDB = {
    // ISSUE: dbr_tables.sql calls it github_users, with login
    users: {
        key: ['username'],
        // JSON-stringified key cols -> record
        records: {
            '["a1"]': { username: 'a1', displayName: 'Angela' },
            '["b2"]': { username: 'b2', displayName: 'Bob' },
            '["c3"]': { username: 'c3', displayName: 'Charlie' },
            '["d4"]': { username: 'd4', displayName: 'Darlene' },
        }
    },
    trust_cert: {
        key: ['voter', 'subject'],
        records: {}
    }
};


module.exports.appFactory = appFactory;
function appFactory(parent, { clock }) {
    return def({ gameSession, makeGame });

    function gameSession(context) {
        let state = context.state ? context.state : null;  // state.X throws until init()

        function init(userProfile, game) {
            state = context.state;
            state.userProfile = userProfile;
            state.game = game;
            state.created = clock().valueOf();  // persist as millis
        }

        return def({ init, info });

        function info() {
            return def({
                created: state.created,
                userProfile: state.userProfile,
                gameKey: state.game.publicKey()
            });
        }
    }

    function makeGame(context) {
	let state = context.state ? context.state : null;  // state.X throws until init()

	function init(rchain, gameKey) {
            state = context.state;
            state.rchain = rchain;
            state.gameKey = gameKey;
	    state.players = {};
            // ISSUE: TODO: state.peers = ... from github
	}

	return def({
            init, select, merge, sessionFor,
            publicKey: () => state.gameKey.publicKey()
	});

	function sessionFor(userProfile) {
	    const id = userProfile.id,
		  players = state.players;
	    let session = players[id];
	    if (!session) {
		session = context.make(`${parent}.makeSession`, userProfile, this);
		players[id] = session;
	    }
	    return session;
	}

	function select(tablename) {
            const table = mockDB[tablename];
            if (!table) {
		throw new Error('unknown table: ' + tablename);
            }

            return Object.values(table.records);
	}

	function merge(tablename, record) {
            if (tablename != 'trust_cert') {
		throw new Error('not implemented: ' + tablename);
            }

            const table = mockDB[tablename],
		  key = table.key.map(field => record[field]);

            const rholang = obj => RSON.stringify(RSON.fromData(obj)),
		  rchain = state.rchain,
		  gameKey = state.gameKey;

            const gameTerm = rholang(state.gameKey.publicKey()),
		  turnMsg = RSON.fromData(['merge', tablename, record]),
		  turnTerm = RSON.stringify(turnMsg),
		  turnSigTerm = rholang(gameKey.signBytesHex(rchain.toByteArray(turnMsg))),
		  takeTurnTerm = `@"takeTurn"!(${gameTerm}, ${turnTerm}, ${turnSigTerm})`;

            return rchain.doDeploy(takeTurnTerm).then(result => {
		console.log('@@doDeploy result:', result);
		if (!result.success) {
                    throw(result);
		}

		return rchain.createBlock().then(maybeBlock => {
		    logged(maybeBlock, 'createBlock?');
		    if (maybeBlock.block) {
			return key;
		    } else {
			throw new Error('createBlock failed');
		    }
		});
	    });
	}
    }
}
