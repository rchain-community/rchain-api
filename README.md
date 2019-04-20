# RChain-API

An API for dApp frontends to communicate with the RChain blockchain.

The [RChain Cooperative][1] is developing a decentralized, economically sustainable public compute infrastructure. Decentralized applications or "dApps" will run their business logic as smart contracts on the blockchain. Their user interfaces will be more traditional programs that interact with the blockchain as a backend. This separation allows dApp developers to create nice abstract interfaces, and allows end users to create their own sovereign interfaces should they choose to do so.

[1]: https://www.rchain.coop/


## Quickstart

Install with `npm install rchain-community/rchain-api`. Then, with
rnode on `localhost`, you can get current block info:


```js
const grpc = require('grpc');
const { RNode } = require('rchain-api');

const rnode = RNode(grpc, { host: 'localhost', port: 40401 });
rnode.showBlocks()
  .then((blocks) => { assert.ok(blocks[0].blockHash); });
```

If your node is a validator and you have a key to authorize payment, you can deploy code:

```js
const grpc = require('grpc');
const { RNode, Ed25519keyPair, Hex, REV } = require('rchain-api');

const rnode = RNode(grpc, { host: 'localhost', port: 40401 });

const term = '@"world"!("Hello!")';
const myKey = Ed25519keyPair(Hex.decode('11'.repeat(32)));
const timestamp = new Date('2019-04-12T17:59:29.274Z').valueOf();
const info = REV.SignDeployment.sign(myKey, { timestamp, term, phloLimit: 10000, phloPrice: 1 });
rnode.doDeploy(info, true).then((message) => { assert(message.startsWith('Success')); });
```

## API

[./docs/](./docs/index.md)


## Getting access to an RChain node

Choices include:

  - [RChain testnet][testnet] nodes such as `node4.testnet.rchain-dev.tk`
  - a community node at `rnode-test.rhobot.net`
  - [running your own RNode][2]
  
[testnet]: https://rchain.atlassian.net/wiki/spaces/CORE/pages/678756429/RChain+public+testnet+information
[2]: https://rchain.atlassian.net/wiki/spaces/CORE/pages/428376065/User+guide+for+running+RNode


### RChain gRPC protobuf compatibility

[protobuf][proto]: v0.9.1 bf1b2c6 Mar 28, 2019

[proto]: https://github.com/rchain/rchain/tree/bf1b2c6c6662515403c0a429e8c9fa25edd64638/models/src/main/protobuf


## Examples and Related Projects
* [Nth Caller](https://github.com/JoshOrndorff/nth-caller-game) a minimal RChain-based dApp game that uses RChain-API
* [Status](https://github.com/JoshOrndorff/RChain-Status) a moderately complex dapp that uses more RChain-API features as well as [RSign](https://github.com/dckc/RSign)
* [Coin Faucet](https://github.com/BlockSpaces/coin-faucet/) An advanced robust dApp that use raspberry PI to airdrop tokens to devices in physical proximity
* [RChain-dbr](https://github.com/dckc/rchain-dbr) A web-of-trust based distributed budgeting and rewards dApp
* [RSign](https://github.com/dckc/RSign) A chrome extension for generating client-side signatures akin to metamask
* [node-client](https://github.com/rchain/rchain/tree/dev/node-client) A similar but less mature RChain API written in python


## License
Copyright 2018-2019 RChain Cooperative

Apache 2.0 License (See LICENSE.txt)

Contributions welcome (See CONTRIBUTING.md)
