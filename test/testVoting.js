
const { RNode, makeProxy, h2b, keyPair } = require('..');

const { link } = require('./assets');
const { loadRhoModule, unforgeableWithId } = require('./loading');

const defaultPayment = { from: '0x1', nonce: 0, phloPrice: 1, phloLimit: 100000 };
const user = h2b('d72d0a7c0c9378b4874efbf871ae8089dd81f2ed3c54159fffeaba6e6fca4236'); // arbitrary

const Scenario = {
  choices: ["Lincoln", "Douglas"],  // ISSUE: set vs list in JSON / RSON
  chair: {
    nickname: "Chip the chair",
    keyPair: keyPair(h2b('9217509f61d80a69627daad29796774d1b65d06e70762aa114e9aa534c0d76bb')),
  },
  voter: {
    nickname: "Vick the voter", 
    keyPair: keyPair(h2b('f6664a95992958bbfeb7e6f50bbca2aa7bfd015aec79820caf362a3c874e9247')),
    choice: "Lincoln",
  },
};


async function test({ rnode, clock }) {
  const load = src => loadRhoModule(src, user, { rnode, clock });

  const BallotURI = await load(link('./voting.rho'));
  const LockerURI = await load(link('./locker.rho'));

  const chairRoleURI = await load(link('./chairRole.rho'));
  const voterRoleURI = await load(link('./voterRole.rho'));

  const chairRole = makeProxy(chairRoleURI, { user, ...defaultPayment }, { rnode, clock });
  const voterRole = makeProxy(voterRoleURI, { user, ...defaultPayment }, { rnode, clock });

  const chairLockerURI = await chairRole.makeLocker(
    Scenario.chair.nickname, h2b(Scenario.chair.keyPair.publicKey()), Scenario.choices,
    { Locker: LockerURI, Ballot: BallotURI });
  const chairLocker = makeProxy(chairLockerURI, { user, ...defaultPayment }, { rnode, clock });

  const { locker, inbox } = await voterRole.makeLocker(
    Scenario.voter.nickname, h2b(Scenario.voter.keyPair.publicKey()), LockerURI);
  const voterLocker = makeProxy(locker, { user, ...defaultPayment }, { rnode, clock });

  await chairLocker.giveRightToVote("TODO: sig", 0, inbox, "TODO: reject");

  await voterLocker.voteFor("TODO: sig", 0, Scenario.voter.choice, "TODO: reject");

  const outcome = await chairLocker.getWinner();

  console.log(outcome);
}


function delay25(v) {
  // ack: https://stackoverflow.com/a/39538518/7963
  const t = 3000;
  console.log('adding 3 sec delay');
  return new Promise(function(resolve) { 
    setTimeout(resolve.bind(null, v), t)
  });
}

/*global module */
if (require.main === module) {
  /* global process */
  /* eslint-disable global-require */
  const endpoint = {
    host: process.env.npm_config_host || 'localhost',
    port: parseInt(process.env.npm_config_port || '40401', 10),
  };
  const rnode = RNode(require('grpc'), endpoint);

  try {
    test({
      rnode,
      clock: () => new Date(),
    });
  } catch (oops) {
    console.error(oops);
    process.exit(1);
  }
}
