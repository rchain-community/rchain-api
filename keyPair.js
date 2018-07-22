/** keyPair -- ed25519 signing keys as Capper persistent objects

key parts (publicKey, privateKey) are persisted in hex, which
should integrate nicely with rho:pubkey:ed25519:xxxxx.

 */

// ref https://nodejs.org/api/util.html#util_custom_inspection_functions_on_objects
// ack: https://stackoverflow.com/a/46870568
const inspect = require('util').inspect;

const sign = require('tweetnacl').sign;  // ocap discpline: "hiding" keyPair

const b2h = bytes => new Buffer(bytes).toString('hex');
const h2b = hex => new Buffer(hex, 'hex');
const t2b = text => new Buffer(text);

const def = obj => Object.freeze(obj);  // cf. ocap design note


module.exports.appFactory = appFactory;
function appFactory({ random_keyPair }) /*: CapperApp */ {
    return def({ keyPair: keyPair });

    function keyPair(context){
	let state = context.state ? context.state : null /* state.X throws until init() */;
	const toString = () => `<keyPair ${state.label}: ${state.publicKey.substring(0, 12)}...>`;
	const signBytes = bytes => sign.detached(bytes, privateKey());

	return def({
	    init, toString, signBytes,
	    signBytesHex: bytes => b2h(signBytes(bytes)),
	    signText: text => signBytes(t2b(text)),
	    signTextHex: text => b2h(signBytes(t2b(text))),
	    publicKey: () => state.publicKey,
	    label: () => state.label,
	    [inspect.custom]: toString
	});

	function init(label) {
	    const key = random_keyPair();

	    state = context.state;
	    state.label = label;
	    state.publicKey = b2h(key.publicKey);
	    state.secretKey = b2h(key.secretKey);
	}

	function privateKey() {
	    return sign.keyPair.fromSecretKey(h2b(state.secretKey)).secretKey;
	}
    }
}


function integrationTest(argv, { random_keyPair }) {
    const kpApp = appFactory({ random_keyPair });

    const context1 = { state: {} };
    const pair1 = kpApp.keyPair(context1);
    pair1.init('k1');
    console.log('inspect keyPair:', pair1);
    console.log('keyPair.toString():', pair1.toString());
    console.log('public key:', pair1.publicKey());
    console.log('signature:', pair1.signTextHex('hello world'));
}


if (require.main == module) {
    // ocap: Import powerful references only when invoked as a main module.
    integrationTest(
	process.argv,
	{
	    random_keyPair: require('tweetnacl').sign.keyPair
	});
}
