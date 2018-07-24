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
    return def({ gameSession, gameBoard });

    function gameSession(context) {
        let state = context.state ? context.state : null;  // state.X throws until init()

        function init(userProfile, game) {
            state = context.state;
            state.userProfile = userProfile;
            state.game = game;
            state.created = clock().valueOf();  // persist as millis
        }

        return def({
	    init, info,
	    select: (...arg) => state.game.select(...arg),
	    merge: (...arg) => state.game.merge(...arg)
	});

        function info() {
            return def({
                created: state.created,
                userProfile: state.userProfile,
		gameLabel: state.game.label(),
                gameKey: state.game.publicKey()
            });
        }
    }

    function gameBoard(context) {
	let state = context.state ? context.state : null;  // state.X throws until init()

	function init(label) {
            state = context.state;
	    state.label = label;
            state.rchain = context.make(`rnode.casperClient`);
            state.gameKey = context.make(`keyChain.keyPair`, `for ${label}`);
	    state.players = {};
            // ISSUE: TODO: state.peers = ... from github
	}

	const self = def({
            init, select, merge, makeSignIn, sessionFor,
	    label: () => state.label,
            publicKey: () => state.gameKey.publicKey(),
	    rchain: () => state.rchain
	});
	return self;

	function makeSignIn(path, callbackPath, strategy, id, secret) {
	    return context.make(`gateway.oauthClient`,  // ISSUE: hard-code gateway?
				path, callbackPath,
				strategy, id, secret, self);
	}

	function sessionFor(userProfile) {
	    const id = userProfile.id,
		  players = state.players;
	    let session = players[id];
	    if (!session) {
		session = context.make(`${parent}.gameSession`, userProfile, self);
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
		  recordKey = table.key.map(field => record[field]);

            const rholang = obj => RSON.stringify(RSON.fromData(obj)),
		  rchain = state.rchain,
		  gameKey = state.gameKey;

            const gameTerm = rholang(state.gameKey.publicKey()),
		  turnMsg = RSON.fromData(['merge', tablename, record]),
		  turnTerm = RSON.stringify(turnMsg),
		  turnSig = gameKey.signBytesHex(rchain.toByteArray(turnMsg)),
		  turnSigTerm = rholang(turnSig),
		  takeTurnTerm = `@"takeTurn"!(${gameTerm}, ${turnTerm}, ${turnSigTerm})`;

            return rchain.doDeploy(takeTurnTerm).then(result => {
		console.log('doDeploy result:', result);
		if (!result.success) {
                    throw(result);
		}

		return rchain.createBlock().then(maybeBlock => {
		    if (maybeBlock.block) {
			logged(maybeBlock.block.blockHash, 'created block:');
			return {
			    turnSig, takeTurnTerm, recordKey
			};
		    } else {
			throw new Error('createBlock failed');
		    }
		});
	    });
	}
    }
}
