# RChain-API

An API for dApps to communicate with the RChain blockchain.

The [RChain Cooperative][1] is developing a decentralized, economically sustainable public compute infrastructure. Decentralized applications or "dApps" will run their business logic as smart contracts on the blockchain. Their userinterfaces will be more traditional programs that interact with the backend. This separation allows dApp developers to create nice abstract interfaces, and allows end users to create their own sovereign interfaces should they choose to do so.

[1]: https://www.rchain.coop/

## Real world meets blockchain
In the world of rholang, we facilitate [object capabilities]() by using unforgeable names. These names exist only on the blockchain, and cannot be saved to disk or locked in a safe in the real world. This seems to create a problem when a human wants to use an unforgeable name to eg. update her facebook-style status, then later return to her computer and update it again. How does she keep track of the unforgeable name while away from her computer?

Public-key crypto to the rescue. The user can lock the relevant unforgeable name into "safe" a contract that anyone can call. When called the safe will give back the correct unforgeable name, but only if it is given a valid cryptographic signature. Michael Birch recently showed an [example of such a scheme](https://www.youtube.com/watch?v=WzAdfjwgaQs#t=9m28s).

## Quickstart
### Find an RChain node whose grpc you can use.
At the moment that likely means running your own rnode. We're also working on a community node at rnode-test.rhobot.net

Make note of the hostname and gRPC port.

## Run the integration test

_TODO: refine this test to tell a story._

Run `rnodeAPI.js` with _host_ and _port_ arguments, as in: `node rnodeAPI.js rnode-test.rhobot.net 50000`.

You should see something like:

```
stuffToSign serialized {
  "type": "Buffer",
  "data": "0a300a110a0f2a031a01784a08000000000000000012112a051a036162634a0800000000000000002a0800000000000000004a080000000000000000"
}
...
doDeploy result: { success: true, message: 'Success!' }
@@createBlock():  {
  "block": {
    "blockHash": {
      "type": "Buffer",
      "data": "3c5d97e2627432026b6d4a17c8027afb95b72e8d08a936d785b58459eff5859e"
```

## Theory of Operation

_Note: this is aspirational. The start of one such application is in
development in https://github.com/dckc/rchain-dbr._

### Write your rholang smart contract and deploy it to an RChain network of your choice.
There are not yet nice truffle-style build tools, so you will probably deploy your code directly using the `rnode deploy` thin client or using this very API

### ISSUE: how to connect to front end?

Options we're aware of:
  1. https://github.com/grpc/grpc-web
  1. Capper (e.g. https://github.com/dckc/rchain-dbr )

Both of these seem to involve a proxy between the browser and any
RChain rnode services.

## Key Management
There are a few options for managing keys.

*Server Stores Keys* Server creates and stores key pairs and uses something like capper or other session-related tools to communicate with the browser. This option trusts the server not to act fraudulently on your behalf. Further this option is only available for web-app style frontends. For frontends that run entirely client-side, there is no server even in the picture.
*Frontend Stores Keys* The client-side code creates and manages the keys without ever showing them to users. This only requires trusting the frontend code which in many cases is auditable.
*User Stores Keys* The frontend presents the data to sign, the user produces that signature however he wants (GPG, hardware wallet, etc) and pastes it back into the frontend.
*RMetaMask* We don't have [this kind of tool](https://metamask.io/) available yet, but hopefully soon. It combines the best of the latter two options.


## Other RChain rnode API clients: scala, python

The https://github.com/rchain/rchain repository has other rnode gRPC clients.
The `rnode` command-line itself is a gRPC client. As of this writing,
there are also a couple python clients under `node-client/`.


## License
Copyright 2018 RChain Cooperative

Apache 2.0 License

See LICENSE.txt for details
