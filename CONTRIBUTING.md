# Code Conventions and Design Notes

As noted in `.travis.yml`, all contributions must pass `npm run check`,
which runs `test`, `lint`, etc. The `test` check is conventional unit tests.

Contributions should also pass `npm run integrationTest`, which
requires a running validator node (see below).

To run both the offline and online tests, use `npm run testAll`.


## Static Typechecking: flow

We use [flow](https://flow.org/) for static typing. The `npm run
flow-check` script does a complete check and `npm run flow-status`
does an incremental check.


## RChain Validator Node for Integration testing

One way to provide a validator node for testing, provided you're OK
with the security risks around `--net host`, is to first have
the node start up and generate some random validator keys:

```bash
docker run --rm --net host -v$HOME/.rnode:/var/lib/rnode \
    rchain/rnode run -s
```

Then grab one of the secret keys for use as a validator private key:

```bash
first_key=$(cat $(ls ~/.rnode/genesis/*.sk|head -1))

docker run --rm --net host -v$HOME/.rnode:/var/lib/rnode \
    rchain/rnode run -s --validator-private-key $first_key
```


## Code Style: airbnb

We follow the [Airbnb JavaScript Style Guide][asg], mostly. Use `npm
run lint`.  See `.eslitrc.json` for additional details.

[asg]: https://github.com/airbnb/javascript#readme


## Object capability (ocap) discipline

In order to supporting robust composition and cooperation without
vulnerability, code in this project should adhere to [object
capability discipline][ocap].

  - **Memory safety and encapsulation**
    - There is no way to get a reference to an object except by
      creating one or being given one at creation or via a message; no
      casting integers to pointers, for example. _JavaScript is safe
      in this way._

      From outside an object, there is no way to access the internal
      state of the object without the object's consent (where consent
      is expressed by responding to messages). _We use `def` (aka
      `Object.freeze`) and closures rather than properties on `this`
      to achieve this._

  - **Primitive effects only via references**
    - The only way an object can affect the world outside itself is
      via references to other objects. All primitives for interacting
      with the external world are embodied by primitive objects and
      **anything globally accessible is immutable data**. There must be
      no `open(filename)` function in the global namespace, nor may
      such a function be imported. _It takes some discipline to use
      modules in node.js in this way.  We use a convention
      of only accessing ambient authority inside `if (require.main ==
      module) { ... }`._

[ocap]: http://erights.org/elib/capability/ode/ode-capabilities.html


## Protobuf Encoding: protobuf.js
All of our protobuf encoding and decoding is done using [protobuf.js](https://github.com/dcodeIO/protobuf.js)

![protobuf.js diagram](https://camo.githubusercontent.com/f090df881cc6c82ecb7c5d09c9fad550fdfd153e/687474703a2f2f64636f64652e696f2f70726f746f6275662e6a732f746f6f6c7365742e737667)


##  Extracting API doc

We use [documentation.js](https://documentation.js.org/) to build API
docs (docs/index.md) from sources. Use the `docs-watch`, `build:docs`,
or `build:docs-html` npm scripts.
