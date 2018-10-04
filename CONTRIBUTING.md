## Protobuf Encoding: protobuf.js
All of our protobuf encoding and decoding is done using [protobuf.js](https://github.com/dcodeIO/protobuf.js)

![protobuf.js diagram](https://camo.githubusercontent.com/f090df881cc6c82ecb7c5d09c9fad550fdfd153e/687474703a2f2f64636f64652e696f2f70726f746f6275662e6a732f746f6f6c7365742e737667)

## Code Style: airbnb

We follow the airbnb style, mostly. Use:

    npm run lint

See .eslitrc.json for additional details.

TODO: talk about ocap and def()


### Struggles with extracting API doc

We don't use classes (TODO: cite explanation as to why not)
but neither of the relevant recipies seem to work:

> Many libraries and frameworks have special 'class constructor
> methods' that accept an object as an input and return a class with
> that object's properties as prototype properties.

https://github.com/documentationjs/documentation/blob/master/docs/RECIPES.md#class-factories-using-lends


We'd like to use these scripts in our `package.json`:

    "doc": "node ./node_modules/.bin/documentation build --github rnodeAPI.js -f html -o docs",
    "doc-watch": "node ./node_modules/.bin/documentation serve --watch --github rnodeAPI.js"

## TODO: Static Typechecking: flow

clues from https://github.com/mapbox/mapbox-gl-js/blob/master/package.json :

    "flow-coverage-report": "^0.3.0",
    "eslint-plugin-flowtype": "^2.34.0",
