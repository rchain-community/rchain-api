# RChain-API

An API for dapps to communicate with the RChain blockchain.

# Overview

The RChain blockchain is developing a decentralized, economically sustainable public compute infrastructure. Decentralized applications or "Dapps" will run their business logic as smart contracts on the

# Quickstart
## Find an RChain node whose grpc you can use.
At the moment that likely means running your own rnode.

## Write your rholang smart contract and deploy it to a blockchain of your choice.
There are not yet nice truffle-style build tools, so you will probably deploy your code directly using the `rnode deploy` thin client or using this very API

## Write your front end
Because the library is written in js that likely means you will write HTML/CSS/JS targetting a browser or something like electron js.

## Include the API in your front end
```html
<script type="text/javascript" src=rchainAPI.js></script>
```

## (Optional) Write abstractions for your dapp
The API currently exposes a direct interface to an rnode. You may find it useful to write your own dapp-specific abstractions.

```javascript
/**
 * This function represents a call to the rholang contract on the blockchain.
 * @param arg The argument to ultimately go to the contract
 */
function callMyContract(arg) {
  let term = `@"myContract"!(${arg})`
  doDeploy(term)
}
```

## Run server.js on your server
This is the part I'm really not clear on because in the ethereum world metamask handles it for us. What exactly does the server.js do again? Will a dapp developer need to modify it at all?




# Future Directions
At the moment the API is for javascript only because it seems the be in highest demand from the community and in our own work. If the project is successful it would be great to write similar libraries for other languages like the ethereum community has.

(I vote for python next)


# License
Copyright 2018 RChain Cooperative

Apache 2.0 License

See LICENSE.txt for details
