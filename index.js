const RHOCore = require('./src/RHOCore');

module.exports.RHOCore = RHOCore;


const RNode = require('./src/rnodeAPI.js');

module.exports.RNode = RNode.RNode;

const { sendCall, makeProxy, callSource } = require('./src/proxy');

module.exports.sendCall = sendCall;
module.exports.makeProxy = makeProxy;
module.exports.callSource = callSource;

const signing = require('./src/signing');

module.exports.keyPair = signing.keyPair;
module.exports.verify = signing.verify;
module.exports.b2h = signing.b2h;
module.exports.h2b = signing.h2b;


const hashing = require('./src/hashing.js');

module.exports.sha256Hash = hashing.sha256Hash;
module.exports.keccak256Hash = hashing.keccak256Hash;
module.exports.blake2b256Hash = hashing.blake2b256Hash;
module.exports.simplifiedSHA256Hash = hashing.simplifiedSHA256Hash;
module.exports.simplifiedKeccak256Hash = hashing.simplifiedKeccak256Hash;
module.exports.simplifiedBlake2b256Hash = hashing.simplifiedBlake2b256Hash;
