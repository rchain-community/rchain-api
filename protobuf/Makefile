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

GOOG=google/protobuf/empty.proto google/protobuf/any.proto
PROTO_SRC=CasperMessage.proto RhoTypes.proto Either.proto $(GOOG)

STATIC_JS=CasperMessage.js RhoTypes.js Either.js
STATIC_TS=CasperMessage.d.ts RhoTypes.d.ts Either.d.ts
STATIC_FLOW=interfaces/CasperMessage.js.flow interfaces/RhoTypes.js.flow interfaces/Either.js.flow \
	interfaces/protobufjs.js.flow

download: $(PROTO_SRC)


realclean:
	rm -rf $(PROTO_SRC) $(STATIC_JS) $(STATIC_TS) $(STATIC_FLOW) messages.js messages.json

RAW_GH=https://raw.githubusercontent.com
R_SRC=$(RAW_GH)/rchain/rchain/$(REV)

CasperMessage.proto:
	$(WGET) -O $@ $(R_SRC)/models/src/main/protobuf/CasperMessage.proto

RhoTypes.proto:
	$(WGET) -O $@ $(R_SRC)/models/src/main/protobuf/RhoTypes.proto

Either.proto:
	$(WGET) -O $@ $(R_SRC)/models/src/main/protobuf/Either.proto


google/protobuf/empty.proto:
	mkdir -p google/protobuf
	$(WGET) -O $@ $(RAW_GH)/google/protobuf/v3.5.1/src/google/protobuf/empty.proto

google/protobuf/any.proto:
	mkdir -p google/protobuf
	$(WGET) -O $@ $(RAW_GH)/google/protobuf/v3.5.1/src/google/protobuf/any.proto

## static codegen (WIP)
static: $(STATIC_JS)

%.js: %.proto
	$(PBJS) -t static-module -w commonjs --no-comments --keep-case -o $@ $<

CasperMessage.js: CasperMessage.proto

RhoTypes.js: RhoTypes.proto

Either.js: Either.proto

static-types: definitelytyped flowtyped

flowtyped: $(STATIC_FLOW)

.SUFFIXES: .proto .js .d.ts .js.flow

%.d.ts: %.proto
	$(PBJS) -t static-module --keep-case $< | $(PBTS) -o $@ --no-comments -

definitelytyped: $(STATIC_TS)

CasperMessage.d.ts: CasperMessage.proto

RhoTypes.d.ts: RhoTypes.proto

Either.d.ts: Either.proto


interfaces:
	mkdir -p interfaces

interfaces/%.js.flow: %.d.ts
	$(FLOWGEN) -o $@ $<

interfaces/CasperMessage.js.flow: CasperMessage.d.ts

interfaces/RhoTypes.js.flow: RhoTypes.d.ts

interfaces/Either.js.flow: Either.d.ts

interfaces/protobufjs.js.flow: ../node_modules/protobufjs/index.d.ts
	$(FLOWGEN) -o $@ $<

clean:
	rm -rf messages.json messages.d.ts
