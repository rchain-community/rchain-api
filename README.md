# RChain-API

An API for dapps to communicate with the RChain blockchain.

The RChain blockchain is developing a decentralized, economically sustainable public compute infrastructure. Decentralized applications or "Dapps" will run their business logic as smart contracts on the blockchain. Their userinterfaces will be more traditional programs that interact with the backend. This separation allows Dapp developers to create nice abstract interfaces, and allows end users to create their own sovereign interfaces should they choose to do so.

## Real world meets blockchain
In the world of rholang, we facilitate [object capabilities]() by using unforgeable names. These names exist only on the blockchain, and cannot be saved to disk or locked in a safe in the real world. This seems to create a problem when a human wants to use an unforgeable name to eg. update her facebook-style status, then later return to her computer and update it again. How does she keep track of the unforgeable name while away from her computer?

Public-key crypto to the rescue. The user can lock the relevant unforgeable name into "safe" a contract that anyone can call. When called the safe will give back the correct unforgeable name, but only if it is given a valid cryptographic signature. Michael Birch recently showed an [example of such a scheme](https://www.youtube.com/watch?v=WzAdfjwgaQs#t=9m28s).

## Quickstart
### Find an RChain node whose grpc you can use.
At the moment that likely means running your own rnode. We're also working on a community node at rnode-test.rhobot.net

### Write your rholang smart contract and deploy it to a blockchain of your choice.
There are not yet nice truffle-style build tools, so you will probably deploy your code directly using the `rnode deploy` thin client or using this very API.

### Write your front end
Because the library is written in js that likely means you will write HTML/CSS/JS targeting a browser or something like electron js.

### (Optional) Write abstractions for your dapp
The API currently exposes a direct interface to an rnode which runs as a node.js server. You may find it useful to write your own dapp-specific abstractions on top of the API.

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

### Run server.js on your server
And connect to it from the browser

## Key Management
There are a few options for managing keys.

*Server Stores Keys* Server creates and stores key pairs and uses something like capper or other session-related tools to communicate with the browser. This option trusts the server not to act fraudulently on your behalf. Further this option is only available for web-app style frontends. For frontends that run entirely client-side, there is no server even in the picture.
*Frontend Stores Keys* The client-side code creates and manages the keys without ever showing them to users. This only requires trusting the frontend code which in many cases is auditable.
*User Stores Keys* The frontend presents the data to sign, the user produces that signature however he wants (GPG, hardware wallet, etc) and pastes it back into the frontend.
*RMetaMask* We don't have [this kind of tool](https://metamask.io/) available yet, but hopefully soon. It combines the best of the latter two options.


## Future Directions
At the moment the API is for javascript only because it seems the be in highest demand from the community and in our own work. If the project is successful it would be great to write similar libraries for other languages like the ethereum community has.

(I vote for python next)


## License
Copyright 2018 RChain Cooperative

Apache 2.0 License

See LICENSE.txt for details
