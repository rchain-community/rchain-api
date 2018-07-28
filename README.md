# RChain-API

An API for dApps to communicate with the RChain blockchain.

The [RChain Cooperative][1] is developing a decentralized, economically sustainable public compute infrastructure. Decentralized applications or "dApps" will run their business logic as smart contracts on the

[1]: https://www.rchain.coop/

## Quickstart
### Find an RChain node whose grpc you can use.
At the moment that likely means running your own rnode.

Make note of the hostname an gRPC port.

## Run the integration test

Run `rnodeAPI.js` with _host_ and _port_ arguments, as in: `node rnodeAPI.js jambox 50001`.

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


## Other RChain rnode API clients: scala, python

The https://github.com/rchain/rchain repository has other rnode gRPC clients.
The `rnode` command-line itself is a gRPC client. As of this writing,
there are also a couple python clients under `node-client/`.


## License
Copyright 2018 RChain Cooperative

Apache 2.0 License

See LICENSE.txt for details
