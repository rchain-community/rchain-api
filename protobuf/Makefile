# Automatically fetch .proto files

WGET=wget
PERL=perl
PBJS=../node_modules/.bin/pbjs
PBTS=../node_modules/.bin/pbts

# npm install -g flowgen
FLOWGEN=flowgen

REV=v0.9.12
# REV=master
# REV=dev

GOOG=google/protobuf/empty.proto google/protobuf/any.proto
PROTO_SRC=DeployService.proto ProposeService.proto \
	CasperMessage.proto RhoTypes.proto Either.proto \
	$(GOOG)

STATIC_JS=DeployService.js ProposeService.js RhoTypes.js
STATIC_TS=DeployService.d.ts ProposeService.d.ts CasperMessage.d.ts RhoTypes.d.ts Either.d.ts
STATIC_FLOW=interfaces/DeployService.js.flow interfaces/ProposeService.js.flow \
	interfaces/CasperMessage.js.flow interfaces/RhoTypes.js.flow interfaces/Either.js.flow \
	interfaces/protobufjs.js.flow

download: $(PROTO_SRC)

protoclean:
	rm -rf $(PROTO_SRC)

realclean:
	rm -rf $(PROTO_SRC) $(STATIC_JS) $(STATIC_TS) $(STATIC_FLOW)

RAW_GH=https://raw.githubusercontent.com
R_SRC=$(RAW_GH)/rchain/rchain/$(REV)

DeployService.proto:
	$(WGET) -O $@ $(R_SRC)/models/src/main/protobuf/DeployService.proto

ProposeService.proto:
	$(WGET) -O $@ $(R_SRC)/models/src/main/protobuf/ProposeService.proto

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

DeployService.js: DeployService.proto CasperMessage.proto Either.proto RhoTypes.proto
	$(PBJS) -t static-module -w commonjs --no-comments --keep-case -o $@ \
		DeployService.proto CasperMessage.proto Either.proto RhoTypes.proto

ProposeService.js: ProposeService.proto CasperMessage.proto Either.proto RhoTypes.proto
	$(PBJS) -t static-module -w commonjs --no-comments --keep-case -o $@ \
		ProposeService.proto CasperMessage.proto Either.proto RhoTypes.proto

RhoTypes.js: RhoTypes.proto
	$(PBJS) -t static-module -w commonjs --no-comments --keep-case -o $@ $<

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
