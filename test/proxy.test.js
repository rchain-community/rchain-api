// jest conventions. hm.
/* global test, expect */
/* global require */
const { URL } = require('url');
const { callSource } = require('..');

test('callSource with no args', () => {
  expect(callSource({ target: new URL('x:'), method: 'm', args: [] }, {})).toEqual(`
      new return, targetCh, lookup(\`rho:registry:lookup\`), trace(\`rho:io:stderr\`) in {
        trace!({"in remote call to": \`x:\`, "return": *return}) |
        lookup!(\`x:\`, *targetCh) |
        for(target <- targetCh) {
          trace!({ "target": *target }) |
          target!("m", *return)
        }
      }
    `);
});

test('callSource with 1 predeclared arg', () => {
  expect(callSource(
    { target: new URL('x:'), method: 'm', args: [] },
    { predeclare: ['dest'] },
  )).toEqual(`
      new return, dest, targetCh, lookup(\`rho:registry:lookup\`), trace(\`rho:io:stderr\`) in {
        trace!({"in remote call to": \`x:\`, "return": *return}) |
        lookup!(\`x:\`, *targetCh) |
        for(target <- targetCh) {
          trace!({ "target": *target }) |
          target!("m", *dest,*return)
        }
      }
    `);
});

test('callSource with BasicWallet signature', () => {
  function signArgs(args, _chanArgs) {
    return [...args.slice(0, -1), 'DEADBEEF'];
  }

  expect(callSource({
    target: new URL('rho:id:tools'),
    method: 'pay',
    args: [10, 1, 'SIGTODO'],
  }, {
    chanArgs: [null],
    predeclare: ['dest'],
    fixArgs: signArgs,
  })).toEqual(`
      new return, dest, targetCh, lookup(\`rho:registry:lookup\`), trace(\`rho:io:stderr\`) in {
        trace!({"in remote call to": \`rho:id:tools\`, "return": *return}) |
        lookup!(\`rho:id:tools\`, *targetCh) |
        for(target <- targetCh) {
          trace!({ "target": *target }) |
          target!("pay", 10, 1, "DEADBEEF", *dest,*return)
        }
      }
    `);
});
