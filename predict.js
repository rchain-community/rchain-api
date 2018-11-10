const { RNode } = require('./rnodeAPI');
const grpc = require('grpc');
const blake2b = require('blake2b');

const myNode = RNode(grpc, { host:'localhost', port: 40401 });



var input = Buffer.from('hello world');

// This hash will be 32 bytes long (like RNode uses)
var hash = blake2b(32);
hash.update(input);
var predictedId = hash.digest(new Uint8Array(32));
console.log("predicted: " +  toHexString(predictedId));

getFromChain();




async function getFromChain() {
  const publicChan = Math.random().toString(36).substring(10);
  const code = `
    new x, y in {
      @"${publicChan}"!(*x)
    }
  `;

  const deployData = {
    term: code,
    timestamp: 123456789,
    phloLimit: { value: 999999 },
    phloPrice: { value: 11 },
  };

  await myNode.doDeploy(deployData, true);
  const blocks = await myNode.listenForDataAtPublicName(publicChan);

  const retrievedId = blocks[0].postBlockData[0].ids[0].id;

  console.log("retrieved: " + toHexString(retrievedId));
  console.log(retrievedId.length + " bytes long")

}


// Helper cribbed from https://stackoverflow.com/a/50868276
function toHexString(bytes) {
  return bytes.reduce((str, byte) => str + byte.toString(16).padStart(2, '0'), '');
}
