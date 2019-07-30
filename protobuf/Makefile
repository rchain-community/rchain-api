# Automatically fetch .proto files

WGET=wget
PERL=perl
# npm install protobufjs
PBJS=../node_modules/.bin/pbjs
PBTS=../node_modules/.bin/pbts

# npm install flowgen
FLOWGEN=../node_modules/.bin/flowgen

# Set version needed and run `make update`
REV=release-rnode-v0.9.11

GOOG=google/protobuf/empty.proto google/protobuf/any.proto
PROTO_SRC=CasperMessage.proto DeployService.proto RhoTypes.proto ProposeService.proto Either.proto routing.proto $(GOOG)

download: $(PROTO_SRC)

## static codegen (WIP)
static: messages.js messages.json

messages.json:
	$(PBJS) -t json --keep-case -o $@ $(PROTO_SRC)

messages.js: $(PROTO_SRC)
	$(PBJS) -t static-module -w commonjs --keep-case -o $@ $(PROTO_SRC)

RAW_GH=https://raw.githubusercontent.com
R_SRC=$(RAW_GH)/rchain/rchain/$(REV)

CasperMessage.proto:
	$(WGET) -O $@ $(R_SRC)/models/src/main/protobuf/CasperMessage.proto

RhoTypes.proto:
	$(WGET) -O $@ $(R_SRC)/models/src/main/protobuf/RhoTypes.proto

Either.proto:
	$(WGET) -O $@ $(R_SRC)/models/src/main/protobuf/Either.proto

DeployService.proto:
	$(WGET) -O $@ $(R_SRC)/models/src/main/protobuf/DeployService.proto

ProposeService.proto:
	$(WGET) -O $@ $(R_SRC)/models/src/main/protobuf/ProposeService.proto

routing.proto:
	$(WGET) -O $@ $(R_SRC)/models/src/main/protobuf/routing.proto

google/protobuf/empty.proto:
	mkdir -p google/protobuf
	$(WGET) -O $@ $(RAW_GH)/google/protobuf/v3.5.1/src/google/protobuf/empty.proto

google/protobuf/any.proto:
	mkdir -p google/protobuf
	$(WGET) -O $@ $(RAW_GH)/google/protobuf/v3.5.1/src/google/protobuf/any.proto

flowtyped: interfaces/CasperMessage.js interfaces/RhoTypes.js interfaces/Either.js interfaces/DeployService.js interfaces/ProposeService.js interfaces/routing.js

CasperMessage.d.ts: CasperMessage.js
	$(PBTS) -o $@ --no-comments $<

RhoTypes.d.ts: RhoTypes.js
	$(PBTS) -o $@ --no-comments $<

Either.d.ts: Either.js
	$(PBTS) -o $@ --no-comments $<

DeployService.d.ts: DeployService.js
	$(PBTS) -o $@ --no-comments $<

ProposeService.d.ts: ProposeService.js
	$(PBTS) -o $@ --no-comments $<

routing.d.ts: routing.js
	$(PBTS) -o $@ --no-comments $<

interfaces/CasperMessage.js: CasperMessage.d.ts
	mkdir -p interfaces
	$(FLOWGEN) -o $@ $<

interfaces/RhoTypes.js: RhoTypes.d.ts
	mkdir -p interfaces
	$(FLOWGEN) -o $@ $<

interfaces/Either.js: Either.d.ts
	mkdir -p interfaces
	$(FLOWGEN) -o $@ $<

interfaces/DeployService.js: DeployService.d.ts
	mkdir -p interfaces
	$(FLOWGEN) -o $@ $<

interfaces/ProposeService.js: ProposeService.d.ts
	mkdir -p interfaces
	$(FLOWGEN) -o $@ $<

interfaces/routing.js: routing.d.ts
	mkdir -p interfaces
	$(FLOWGEN) -o $@ $<

CasperMessage.js:
	$(PBJS) -t static-module -w commonjs --keep-case -o $@ CasperMessage.proto

RhoTypes.js:
	$(PBJS) -t static-module -w commonjs --keep-case -o $@ RhoTypes.proto

Either.js:
	$(PBJS) -t static-module -w commonjs --keep-case -o $@ Either.proto

DeployService.js:
	$(PBJS) -t static-module -w commonjs --keep-case -o $@ DeployService.proto

ProposeService.js:
	$(PBJS) -t static-module -w commonjs --keep-case -o $@ ProposeService.proto

routing.js:
	$(PBJS) -t static-module -w commonjs --keep-case -o $@ routing.proto

clean:
	rm -rf messages.json messages.d.ts

realclean:
	rm -rf $(PROTO_SRC) *.proto messages.json interfaces/ *.js *.ts

update: realclean download static flowtyped
