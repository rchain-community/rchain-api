/* global require*/
const ttest = require('tape'); // ISSUE: separate tests
const { h2b, RevAddress } = require('..');

const testCases = [
  {
    label: 'all ones',
    privateKey: '1111111111111111111111111111111111111111111111111111111111111111',
    publicKey: 'd04ab232742bb4ab3a1368bd4615e4e6d0224ab71a016baf8520a332c9778737',
    revAddress: '11112cFcjtrjwn7qCDvTLMu5jEvMSBN2qT1sBwQxDP9AyQCVi26xKZ',
  },
  {
    // https://github.com/rchain/rchain/blob/9ae5825aa8b0469372976873b7f229d73060d5fd/rholang/src/test/scala/coop/rchain/rholang/interpreter/util/RevAddressSpec.scala#L11
    label: 'RevAddressSpec.scala#L11',
    publicKey: '00322ba649cebf90d8bd0eeb0658ea7957bcc59ecee0676c86f4fec517c06251',
    revAddress: '1111K9MczqzZrNkUNmNGrNFyz7F7LiCUgaCHXd28g2k5PxiaNuCAi',
  },
];


testCases.forEach((info) => {
  ttest(`RevAddress: ${info.label}`, (t) => {
    t.equal(RevAddress.fromPublicKey(h2b(info.publicKey)).toString(), info.revAddress);
    t.end();
  });
});
