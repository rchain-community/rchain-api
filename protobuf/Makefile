# Automatically fetch .proto files

WGET=wget
PERL=perl
PBJS=../node_modules/.bin/pbjs
PBTS=../node_modules/.bin/pbts

# npm install -g flowgen
FLOWGEN=flowgen

# REV=v0.6.1
# REV=master
REV=dev

PROTO_SRC=CasperMessage.proto RhoTypes.proto Either.proto google/protobuf/empty.proto

download: $(PROTO_SRC)


## static codegen (WIP)
static: messages.js

messages.json:
	$(PBJS) -t json --keep-case -o $@ $(PROTO_SRC)

messages.js: $(PROTO_SRC)
	$(PBJS) -t static-module -w commonjs --keep-case -o $@ $(PROTO_SRC)

update: $(PROTO_SRC)

realclean:
	rm -rf $(PROTO_SRC) *.proto messages.js

RAW_GH=https://raw.githubusercontent.com
R_SRC=$(RAW_GH)/rchain/rchain/dev

CasperMessage.proto:
	$(WGET) -O $@ $(R_SRC)/models/src/main/protobuf/CasperMessage.proto

RhoTypes.proto:
	$(WGET) -O $@ $(R_SRC)/models/src/main/protobuf/RhoTypes.proto

Either.proto:
	$(WGET) -O $@ $(R_SRC)/models/src/main/protobuf/Either.proto


google/protobuf/empty.proto:
	mkdir -p google/protobuf
	$(WGET) -O $@ $(RAW_GH)/google/protobuf/v3.5.1/src/google/protobuf/empty.proto

flowtyped: interfaces/RhoTypes.js

RhoTypes.d.ts: RhoTypes.js
	$(PBTS) -o $@ --no-comments $<

interfaces/RhoTypes.js: RhoTypes.d.ts
	mkdir -p interfaces
	$(FLOWGEN) -o $@ $<
	$(PERL) -i.bak -pe 's/declare interface /interface /; s/ mixins / implements /' $@


RhoTypes.js:
	$(PBJS) -t static-module -w commonjs --keep-case -o $@ RhoTypes.proto

clean:
	rm -rf messages.json messages.d.ts

