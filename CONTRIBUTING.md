## Protobuf Encoding: protobuf.js
All of our protobuf encoding and decoding is done using [protobuf.js](https://github.com/dcodeIO/protobuf.js)

![protobuf.js diagram](https://camo.githubusercontent.com/f090df881cc6c82ecb7c5d09c9fad550fdfd153e/687474703a2f2f64636f64652e696f2f70726f746f6275662e6a732f746f6f6c7365742e737667)

## Code Style: airbnb

We follow the airbnb style, mostly. Use:

    npm run lint

See .eslitrc.json for additional details.

## Object Capability Paradigm

We follow the object capability design pattern. Some background is available at http://www.erights.org/elib/capability/ode/

One illustrative example in the code is the signature for a creating a node instance
```javascript
function RNode(
      grpc /*: typeof grpcT */,
      endPoint /*: { host: string, port: number } */
    )
```
In non-ocap style the `grpc` instance would not be passed in but we only allow our node to use authority that was explicitly given to it. Thus if it is to communicate over gRPC, we need to pass in the capability.

We also define the convenience method `def`
```javascript
const def = obj => Object.freeze(obj)
```
which is used to box up the methods associated with an object like the node instance.


##  Struggles with extracting API doc

We don't use classes (TODO: cite explanation as to why not)
but neither of the relevant recipies seem to work:

> Many libraries and frameworks have special 'class constructor
> methods' that accept an object as an input and return a class with
> that object's properties as prototype properties.

https://github.com/documentationjs/documentation/blob/master/docs/RECIPES.md#class-factories-using-lends


We'd like to use these scripts in our `package.json`:

    "doc": "node ./node_modules/.bin/documentation build --github rnodeAPI.js -f html -o docs",
    "doc-watch": "node ./node_modules/.bin/documentation serve --watch --github rnodeAPI.js"

## Static Typechecking: flow

We use [flow](https://flow.org/) for static typing. You can test your code with `npm run flow-check`

There is also `npm run flow-status`
