# Automatically fetch .proto files

WGET=wget
PBJS=../node_modules/.bin/pbjs

# REV=v0.6.1
# REV=master
REV=dev

PROTO_SRC=CasperMessage.proto RhoTypes.proto google/protobuf/empty.proto

static: messages.js

messages.json:
	$(PBJS) -t json --keep-case -o $@ $(PROTO_SRC)

messages.js:
	$(PBJS) -t static-module -w commonjs --keep-case -o $@ $(PROTO_SRC)

update: $(PROTO_SRC)

realclean:
	rm -rf $(PROTO_SRC) *.proto messages.js

RAW_GH=https://raw.githubusercontent.com
R_SRC=$(RAW_GH)/rchain/rchain/dev

CasperMessage.proto:
	$(WGET) -O $@ $(R_SRC)/models/src/main/protobuf/CasperMessage.proto

RhoTypes.proto: no-scalapb-rhotypes.patch
	$(WGET) -O $@ $(R_SRC)/models/src/main/protobuf/RhoTypes.proto


google/protobuf/empty.proto:
	mkdir -p google/protobuf
	$(WGET) -O $@ $(RAW_GH)/google/protobuf/v3.5.1/src/google/protobuf/empty.proto
