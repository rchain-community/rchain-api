WGET=wget

protobuf/CasperMessage.proto:
	$(WGET) -O $@ https://github.com/rchain/rchain/blob/master/models/src/main/protobuf/CasperMessage.proto

protobuf/RhoTypes.proto:
	$(WGET) -O $@ https://github.com/rchain/rchain/blob/master/models/src/main/protobuf/RhoTypes.proto

downloading https://raw.githubusercontent.com/google/protobuf/master/src/google/protobuf/empty.proto ...
and https://raw.githubusercontent.com/scalapb/ScalaPB/master/protobuf/scalapb/scalapb.proto ...
ed https://github.com/rchain/rchain/archive/dev.zip and unpacked it in .data(edited)
