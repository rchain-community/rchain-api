# Automatically fetch .proto files

WGET=wget

REV=v0.6.1
# REV=master
# REV=dev

PROTO_SRC=CasperMessage.proto RhoTypes.proto google/protobuf/empty.proto

all: $(PROTO_SRC)

realclean:
	rm -rf $(PROTO_SRC) *.proto

RAW_GH=https://raw.githubusercontent.com
R_SRC=$(RAW_GH)/rchain/rchain/dev

CasperMessage.proto:
	$(WGET) -O $@ $(R_SRC)/models/src/main/protobuf/CasperMessage.proto
	patch -p2 <no-scalapb-casper.patch

RhoTypes.proto: no-scalapb-rhotypes.patch
	$(WGET) -O $@ $(R_SRC)/models/src/main/protobuf/RhoTypes.proto
	patch -p2 <no-scalapb-rhotypes.patch

google/protobuf/empty.proto:
	mkdir -p google/protobuf
	$(WGET) -O $@ $(RAW_GH)/google/protobuf/v3.5.1/src/google/protobuf/empty.proto
