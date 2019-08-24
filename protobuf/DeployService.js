/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.coop = (function() {

    var coop = {};

    coop.rchain = (function() {

        var rchain = {};

        rchain.casper = (function() {

            var casper = {};

            casper.protocol = (function() {

                var protocol = {};

                protocol.DeployService = (function() {

                    function DeployService(rpcImpl, requestDelimited, responseDelimited) {
                        $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
                    }

                    (DeployService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = DeployService;

                    DeployService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                        return new this(rpcImpl, requestDelimited, responseDelimited);
                    };


                    Object.defineProperty(DeployService.prototype.doDeploy = function doDeploy(request, callback) {
                        return this.rpcCall(doDeploy, $root.coop.rchain.casper.protocol.DeployData, $root.Either, request, callback);
                    }, "name", { value: "DoDeploy" });


                    Object.defineProperty(DeployService.prototype.getBlock = function getBlock(request, callback) {
                        return this.rpcCall(getBlock, $root.coop.rchain.casper.protocol.BlockQuery, $root.Either, request, callback);
                    }, "name", { value: "getBlock" });


                    Object.defineProperty(DeployService.prototype.visualizeDag = function visualizeDag(request, callback) {
                        return this.rpcCall(visualizeDag, $root.coop.rchain.casper.protocol.VisualizeDagQuery, $root.Either, request, callback);
                    }, "name", { value: "visualizeDag" });


                    Object.defineProperty(DeployService.prototype.machineVerifiableDag = function machineVerifiableDag(request, callback) {
                        return this.rpcCall(machineVerifiableDag, $root.coop.rchain.casper.protocol.MachineVerifyQuery, $root.Either, request, callback);
                    }, "name", { value: "machineVerifiableDag" });


                    Object.defineProperty(DeployService.prototype.showMainChain = function showMainChain(request, callback) {
                        return this.rpcCall(showMainChain, $root.coop.rchain.casper.protocol.BlocksQuery, $root.Either, request, callback);
                    }, "name", { value: "showMainChain" });


                    Object.defineProperty(DeployService.prototype.getBlocks = function getBlocks(request, callback) {
                        return this.rpcCall(getBlocks, $root.coop.rchain.casper.protocol.BlocksQuery, $root.Either, request, callback);
                    }, "name", { value: "getBlocks" });


                    Object.defineProperty(DeployService.prototype.listenForDataAtName = function listenForDataAtName(request, callback) {
                        return this.rpcCall(listenForDataAtName, $root.coop.rchain.casper.protocol.DataAtNameQuery, $root.Either, request, callback);
                    }, "name", { value: "listenForDataAtName" });


                    Object.defineProperty(DeployService.prototype.listenForContinuationAtName = function listenForContinuationAtName(request, callback) {
                        return this.rpcCall(listenForContinuationAtName, $root.coop.rchain.casper.protocol.ContinuationAtNameQuery, $root.Either, request, callback);
                    }, "name", { value: "listenForContinuationAtName" });


                    Object.defineProperty(DeployService.prototype.findBlockWithDeploy = function findBlockWithDeploy(request, callback) {
                        return this.rpcCall(findBlockWithDeploy, $root.coop.rchain.casper.protocol.FindDeployInBlockQuery, $root.Either, request, callback);
                    }, "name", { value: "findBlockWithDeploy" });


                    Object.defineProperty(DeployService.prototype.findDeploy = function findDeploy(request, callback) {
                        return this.rpcCall(findDeploy, $root.coop.rchain.casper.protocol.FindDeployQuery, $root.Either, request, callback);
                    }, "name", { value: "findDeploy" });


                    Object.defineProperty(DeployService.prototype.previewPrivateNames = function previewPrivateNames(request, callback) {
                        return this.rpcCall(previewPrivateNames, $root.coop.rchain.casper.protocol.PrivateNamePreviewQuery, $root.Either, request, callback);
                    }, "name", { value: "previewPrivateNames" });


                    Object.defineProperty(DeployService.prototype.lastFinalizedBlock = function lastFinalizedBlock(request, callback) {
                        return this.rpcCall(lastFinalizedBlock, $root.coop.rchain.casper.protocol.LastFinalizedBlockQuery, $root.Either, request, callback);
                    }, "name", { value: "lastFinalizedBlock" });

                    return DeployService;
                })();

                protocol.FindDeployQuery = (function() {

                    function FindDeployQuery(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    FindDeployQuery.prototype.deployId = $util.newBuffer([]);

                    FindDeployQuery.create = function create(properties) {
                        return new FindDeployQuery(properties);
                    };

                    FindDeployQuery.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.deployId != null && message.hasOwnProperty("deployId"))
                            writer.uint32(10).bytes(message.deployId);
                        return writer;
                    };

                    FindDeployQuery.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    FindDeployQuery.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coop.rchain.casper.protocol.FindDeployQuery();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.deployId = reader.bytes();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    FindDeployQuery.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    FindDeployQuery.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.deployId != null && message.hasOwnProperty("deployId"))
                            if (!(message.deployId && typeof message.deployId.length === "number" || $util.isString(message.deployId)))
                                return "deployId: buffer expected";
                        return null;
                    };

                    FindDeployQuery.fromObject = function fromObject(object) {
                        if (object instanceof $root.coop.rchain.casper.protocol.FindDeployQuery)
                            return object;
                        var message = new $root.coop.rchain.casper.protocol.FindDeployQuery();
                        if (object.deployId != null)
                            if (typeof object.deployId === "string")
                                $util.base64.decode(object.deployId, message.deployId = $util.newBuffer($util.base64.length(object.deployId)), 0);
                            else if (object.deployId.length)
                                message.deployId = object.deployId;
                        return message;
                    };

                    FindDeployQuery.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            if (options.bytes === String)
                                object.deployId = "";
                            else {
                                object.deployId = [];
                                if (options.bytes !== Array)
                                    object.deployId = $util.newBuffer(object.deployId);
                            }
                        if (message.deployId != null && message.hasOwnProperty("deployId"))
                            object.deployId = options.bytes === String ? $util.base64.encode(message.deployId, 0, message.deployId.length) : options.bytes === Array ? Array.prototype.slice.call(message.deployId) : message.deployId;
                        return object;
                    };

                    FindDeployQuery.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return FindDeployQuery;
                })();

                protocol.FindDeployInBlockQuery = (function() {

                    function FindDeployInBlockQuery(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    FindDeployInBlockQuery.prototype.user = $util.newBuffer([]);
                    FindDeployInBlockQuery.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    FindDeployInBlockQuery.create = function create(properties) {
                        return new FindDeployInBlockQuery(properties);
                    };

                    FindDeployInBlockQuery.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.user != null && message.hasOwnProperty("user"))
                            writer.uint32(10).bytes(message.user);
                        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                            writer.uint32(16).int64(message.timestamp);
                        return writer;
                    };

                    FindDeployInBlockQuery.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    FindDeployInBlockQuery.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coop.rchain.casper.protocol.FindDeployInBlockQuery();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.user = reader.bytes();
                                break;
                            case 2:
                                message.timestamp = reader.int64();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    FindDeployInBlockQuery.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    FindDeployInBlockQuery.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.user != null && message.hasOwnProperty("user"))
                            if (!(message.user && typeof message.user.length === "number" || $util.isString(message.user)))
                                return "user: buffer expected";
                        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                            if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                                return "timestamp: integer|Long expected";
                        return null;
                    };

                    FindDeployInBlockQuery.fromObject = function fromObject(object) {
                        if (object instanceof $root.coop.rchain.casper.protocol.FindDeployInBlockQuery)
                            return object;
                        var message = new $root.coop.rchain.casper.protocol.FindDeployInBlockQuery();
                        if (object.user != null)
                            if (typeof object.user === "string")
                                $util.base64.decode(object.user, message.user = $util.newBuffer($util.base64.length(object.user)), 0);
                            else if (object.user.length)
                                message.user = object.user;
                        if (object.timestamp != null)
                            if ($util.Long)
                                (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                            else if (typeof object.timestamp === "string")
                                message.timestamp = parseInt(object.timestamp, 10);
                            else if (typeof object.timestamp === "number")
                                message.timestamp = object.timestamp;
                            else if (typeof object.timestamp === "object")
                                message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
                        return message;
                    };

                    FindDeployInBlockQuery.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            if (options.bytes === String)
                                object.user = "";
                            else {
                                object.user = [];
                                if (options.bytes !== Array)
                                    object.user = $util.newBuffer(object.user);
                            }
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.timestamp = options.longs === String ? "0" : 0;
                        }
                        if (message.user != null && message.hasOwnProperty("user"))
                            object.user = options.bytes === String ? $util.base64.encode(message.user, 0, message.user.length) : options.bytes === Array ? Array.prototype.slice.call(message.user) : message.user;
                        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                            if (typeof message.timestamp === "number")
                                object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                            else
                                object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
                        return object;
                    };

                    FindDeployInBlockQuery.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return FindDeployInBlockQuery;
                })();

                protocol.BlockQuery = (function() {

                    function BlockQuery(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    BlockQuery.prototype.hash = "";

                    BlockQuery.create = function create(properties) {
                        return new BlockQuery(properties);
                    };

                    BlockQuery.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.hash != null && message.hasOwnProperty("hash"))
                            writer.uint32(10).string(message.hash);
                        return writer;
                    };

                    BlockQuery.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    BlockQuery.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coop.rchain.casper.protocol.BlockQuery();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.hash = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    BlockQuery.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    BlockQuery.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.hash != null && message.hasOwnProperty("hash"))
                            if (!$util.isString(message.hash))
                                return "hash: string expected";
                        return null;
                    };

                    BlockQuery.fromObject = function fromObject(object) {
                        if (object instanceof $root.coop.rchain.casper.protocol.BlockQuery)
                            return object;
                        var message = new $root.coop.rchain.casper.protocol.BlockQuery();
                        if (object.hash != null)
                            message.hash = String(object.hash);
                        return message;
                    };

                    BlockQuery.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.hash = "";
                        if (message.hash != null && message.hasOwnProperty("hash"))
                            object.hash = message.hash;
                        return object;
                    };

                    BlockQuery.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return BlockQuery;
                })();

                protocol.BlocksQuery = (function() {

                    function BlocksQuery(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    BlocksQuery.prototype.depth = 0;

                    BlocksQuery.create = function create(properties) {
                        return new BlocksQuery(properties);
                    };

                    BlocksQuery.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.depth != null && message.hasOwnProperty("depth"))
                            writer.uint32(8).int32(message.depth);
                        return writer;
                    };

                    BlocksQuery.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    BlocksQuery.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coop.rchain.casper.protocol.BlocksQuery();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.depth = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    BlocksQuery.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    BlocksQuery.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.depth != null && message.hasOwnProperty("depth"))
                            if (!$util.isInteger(message.depth))
                                return "depth: integer expected";
                        return null;
                    };

                    BlocksQuery.fromObject = function fromObject(object) {
                        if (object instanceof $root.coop.rchain.casper.protocol.BlocksQuery)
                            return object;
                        var message = new $root.coop.rchain.casper.protocol.BlocksQuery();
                        if (object.depth != null)
                            message.depth = object.depth | 0;
                        return message;
                    };

                    BlocksQuery.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.depth = 0;
                        if (message.depth != null && message.hasOwnProperty("depth"))
                            object.depth = message.depth;
                        return object;
                    };

                    BlocksQuery.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return BlocksQuery;
                })();

                protocol.DataAtNameQuery = (function() {

                    function DataAtNameQuery(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    DataAtNameQuery.prototype.depth = 0;
                    DataAtNameQuery.prototype.name = null;

                    DataAtNameQuery.create = function create(properties) {
                        return new DataAtNameQuery(properties);
                    };

                    DataAtNameQuery.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.depth != null && message.hasOwnProperty("depth"))
                            writer.uint32(8).int32(message.depth);
                        if (message.name != null && message.hasOwnProperty("name"))
                            $root.Par.encode(message.name, writer.uint32(18).fork()).ldelim();
                        return writer;
                    };

                    DataAtNameQuery.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    DataAtNameQuery.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coop.rchain.casper.protocol.DataAtNameQuery();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.depth = reader.int32();
                                break;
                            case 2:
                                message.name = $root.Par.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    DataAtNameQuery.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    DataAtNameQuery.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.depth != null && message.hasOwnProperty("depth"))
                            if (!$util.isInteger(message.depth))
                                return "depth: integer expected";
                        if (message.name != null && message.hasOwnProperty("name")) {
                            var error = $root.Par.verify(message.name);
                            if (error)
                                return "name." + error;
                        }
                        return null;
                    };

                    DataAtNameQuery.fromObject = function fromObject(object) {
                        if (object instanceof $root.coop.rchain.casper.protocol.DataAtNameQuery)
                            return object;
                        var message = new $root.coop.rchain.casper.protocol.DataAtNameQuery();
                        if (object.depth != null)
                            message.depth = object.depth | 0;
                        if (object.name != null) {
                            if (typeof object.name !== "object")
                                throw TypeError(".coop.rchain.casper.protocol.DataAtNameQuery.name: object expected");
                            message.name = $root.Par.fromObject(object.name);
                        }
                        return message;
                    };

                    DataAtNameQuery.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.depth = 0;
                            object.name = null;
                        }
                        if (message.depth != null && message.hasOwnProperty("depth"))
                            object.depth = message.depth;
                        if (message.name != null && message.hasOwnProperty("name"))
                            object.name = $root.Par.toObject(message.name, options);
                        return object;
                    };

                    DataAtNameQuery.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return DataAtNameQuery;
                })();

                protocol.ContinuationAtNameQuery = (function() {

                    function ContinuationAtNameQuery(properties) {
                        this.names = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    ContinuationAtNameQuery.prototype.depth = 0;
                    ContinuationAtNameQuery.prototype.names = $util.emptyArray;

                    ContinuationAtNameQuery.create = function create(properties) {
                        return new ContinuationAtNameQuery(properties);
                    };

                    ContinuationAtNameQuery.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.depth != null && message.hasOwnProperty("depth"))
                            writer.uint32(8).int32(message.depth);
                        if (message.names != null && message.names.length)
                            for (var i = 0; i < message.names.length; ++i)
                                $root.Par.encode(message.names[i], writer.uint32(18).fork()).ldelim();
                        return writer;
                    };

                    ContinuationAtNameQuery.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    ContinuationAtNameQuery.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coop.rchain.casper.protocol.ContinuationAtNameQuery();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.depth = reader.int32();
                                break;
                            case 2:
                                if (!(message.names && message.names.length))
                                    message.names = [];
                                message.names.push($root.Par.decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    ContinuationAtNameQuery.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    ContinuationAtNameQuery.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.depth != null && message.hasOwnProperty("depth"))
                            if (!$util.isInteger(message.depth))
                                return "depth: integer expected";
                        if (message.names != null && message.hasOwnProperty("names")) {
                            if (!Array.isArray(message.names))
                                return "names: array expected";
                            for (var i = 0; i < message.names.length; ++i) {
                                var error = $root.Par.verify(message.names[i]);
                                if (error)
                                    return "names." + error;
                            }
                        }
                        return null;
                    };

                    ContinuationAtNameQuery.fromObject = function fromObject(object) {
                        if (object instanceof $root.coop.rchain.casper.protocol.ContinuationAtNameQuery)
                            return object;
                        var message = new $root.coop.rchain.casper.protocol.ContinuationAtNameQuery();
                        if (object.depth != null)
                            message.depth = object.depth | 0;
                        if (object.names) {
                            if (!Array.isArray(object.names))
                                throw TypeError(".coop.rchain.casper.protocol.ContinuationAtNameQuery.names: array expected");
                            message.names = [];
                            for (var i = 0; i < object.names.length; ++i) {
                                if (typeof object.names[i] !== "object")
                                    throw TypeError(".coop.rchain.casper.protocol.ContinuationAtNameQuery.names: object expected");
                                message.names[i] = $root.Par.fromObject(object.names[i]);
                            }
                        }
                        return message;
                    };

                    ContinuationAtNameQuery.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.names = [];
                        if (options.defaults)
                            object.depth = 0;
                        if (message.depth != null && message.hasOwnProperty("depth"))
                            object.depth = message.depth;
                        if (message.names && message.names.length) {
                            object.names = [];
                            for (var j = 0; j < message.names.length; ++j)
                                object.names[j] = $root.Par.toObject(message.names[j], options);
                        }
                        return object;
                    };

                    ContinuationAtNameQuery.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return ContinuationAtNameQuery;
                })();

                protocol.DeployServiceResponse = (function() {

                    function DeployServiceResponse(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    DeployServiceResponse.prototype.message = "";

                    DeployServiceResponse.create = function create(properties) {
                        return new DeployServiceResponse(properties);
                    };

                    DeployServiceResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.message != null && message.hasOwnProperty("message"))
                            writer.uint32(10).string(message.message);
                        return writer;
                    };

                    DeployServiceResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    DeployServiceResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coop.rchain.casper.protocol.DeployServiceResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.message = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    DeployServiceResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    DeployServiceResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.message != null && message.hasOwnProperty("message"))
                            if (!$util.isString(message.message))
                                return "message: string expected";
                        return null;
                    };

                    DeployServiceResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.coop.rchain.casper.protocol.DeployServiceResponse)
                            return object;
                        var message = new $root.coop.rchain.casper.protocol.DeployServiceResponse();
                        if (object.message != null)
                            message.message = String(object.message);
                        return message;
                    };

                    DeployServiceResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.message = "";
                        if (message.message != null && message.hasOwnProperty("message"))
                            object.message = message.message;
                        return object;
                    };

                    DeployServiceResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return DeployServiceResponse;
                })();

                protocol.BlockQueryResponse = (function() {

                    function BlockQueryResponse(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    BlockQueryResponse.prototype.blockInfo = null;

                    BlockQueryResponse.create = function create(properties) {
                        return new BlockQueryResponse(properties);
                    };

                    BlockQueryResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.blockInfo != null && message.hasOwnProperty("blockInfo"))
                            $root.coop.rchain.casper.protocol.BlockInfo.encode(message.blockInfo, writer.uint32(10).fork()).ldelim();
                        return writer;
                    };

                    BlockQueryResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    BlockQueryResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coop.rchain.casper.protocol.BlockQueryResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.blockInfo = $root.coop.rchain.casper.protocol.BlockInfo.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    BlockQueryResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    BlockQueryResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.blockInfo != null && message.hasOwnProperty("blockInfo")) {
                            var error = $root.coop.rchain.casper.protocol.BlockInfo.verify(message.blockInfo);
                            if (error)
                                return "blockInfo." + error;
                        }
                        return null;
                    };

                    BlockQueryResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.coop.rchain.casper.protocol.BlockQueryResponse)
                            return object;
                        var message = new $root.coop.rchain.casper.protocol.BlockQueryResponse();
                        if (object.blockInfo != null) {
                            if (typeof object.blockInfo !== "object")
                                throw TypeError(".coop.rchain.casper.protocol.BlockQueryResponse.blockInfo: object expected");
                            message.blockInfo = $root.coop.rchain.casper.protocol.BlockInfo.fromObject(object.blockInfo);
                        }
                        return message;
                    };

                    BlockQueryResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.blockInfo = null;
                        if (message.blockInfo != null && message.hasOwnProperty("blockInfo"))
                            object.blockInfo = $root.coop.rchain.casper.protocol.BlockInfo.toObject(message.blockInfo, options);
                        return object;
                    };

                    BlockQueryResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return BlockQueryResponse;
                })();

                protocol.LightBlockQueryResponse = (function() {

                    function LightBlockQueryResponse(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    LightBlockQueryResponse.prototype.blockInfo = null;

                    LightBlockQueryResponse.create = function create(properties) {
                        return new LightBlockQueryResponse(properties);
                    };

                    LightBlockQueryResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.blockInfo != null && message.hasOwnProperty("blockInfo"))
                            $root.coop.rchain.casper.protocol.LightBlockInfo.encode(message.blockInfo, writer.uint32(10).fork()).ldelim();
                        return writer;
                    };

                    LightBlockQueryResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    LightBlockQueryResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coop.rchain.casper.protocol.LightBlockQueryResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.blockInfo = $root.coop.rchain.casper.protocol.LightBlockInfo.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    LightBlockQueryResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    LightBlockQueryResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.blockInfo != null && message.hasOwnProperty("blockInfo")) {
                            var error = $root.coop.rchain.casper.protocol.LightBlockInfo.verify(message.blockInfo);
                            if (error)
                                return "blockInfo." + error;
                        }
                        return null;
                    };

                    LightBlockQueryResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.coop.rchain.casper.protocol.LightBlockQueryResponse)
                            return object;
                        var message = new $root.coop.rchain.casper.protocol.LightBlockQueryResponse();
                        if (object.blockInfo != null) {
                            if (typeof object.blockInfo !== "object")
                                throw TypeError(".coop.rchain.casper.protocol.LightBlockQueryResponse.blockInfo: object expected");
                            message.blockInfo = $root.coop.rchain.casper.protocol.LightBlockInfo.fromObject(object.blockInfo);
                        }
                        return message;
                    };

                    LightBlockQueryResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.blockInfo = null;
                        if (message.blockInfo != null && message.hasOwnProperty("blockInfo"))
                            object.blockInfo = $root.coop.rchain.casper.protocol.LightBlockInfo.toObject(message.blockInfo, options);
                        return object;
                    };

                    LightBlockQueryResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return LightBlockQueryResponse;
                })();

                protocol.VisualizeDagQuery = (function() {

                    function VisualizeDagQuery(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    VisualizeDagQuery.prototype.depth = 0;
                    VisualizeDagQuery.prototype.showJustificationLines = false;

                    VisualizeDagQuery.create = function create(properties) {
                        return new VisualizeDagQuery(properties);
                    };

                    VisualizeDagQuery.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.depth != null && message.hasOwnProperty("depth"))
                            writer.uint32(8).int32(message.depth);
                        if (message.showJustificationLines != null && message.hasOwnProperty("showJustificationLines"))
                            writer.uint32(16).bool(message.showJustificationLines);
                        return writer;
                    };

                    VisualizeDagQuery.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    VisualizeDagQuery.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coop.rchain.casper.protocol.VisualizeDagQuery();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.depth = reader.int32();
                                break;
                            case 2:
                                message.showJustificationLines = reader.bool();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    VisualizeDagQuery.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    VisualizeDagQuery.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.depth != null && message.hasOwnProperty("depth"))
                            if (!$util.isInteger(message.depth))
                                return "depth: integer expected";
                        if (message.showJustificationLines != null && message.hasOwnProperty("showJustificationLines"))
                            if (typeof message.showJustificationLines !== "boolean")
                                return "showJustificationLines: boolean expected";
                        return null;
                    };

                    VisualizeDagQuery.fromObject = function fromObject(object) {
                        if (object instanceof $root.coop.rchain.casper.protocol.VisualizeDagQuery)
                            return object;
                        var message = new $root.coop.rchain.casper.protocol.VisualizeDagQuery();
                        if (object.depth != null)
                            message.depth = object.depth | 0;
                        if (object.showJustificationLines != null)
                            message.showJustificationLines = Boolean(object.showJustificationLines);
                        return message;
                    };

                    VisualizeDagQuery.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.depth = 0;
                            object.showJustificationLines = false;
                        }
                        if (message.depth != null && message.hasOwnProperty("depth"))
                            object.depth = message.depth;
                        if (message.showJustificationLines != null && message.hasOwnProperty("showJustificationLines"))
                            object.showJustificationLines = message.showJustificationLines;
                        return object;
                    };

                    VisualizeDagQuery.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return VisualizeDagQuery;
                })();

                protocol.VisualizeBlocksResponse = (function() {

                    function VisualizeBlocksResponse(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    VisualizeBlocksResponse.prototype.content = "";

                    VisualizeBlocksResponse.create = function create(properties) {
                        return new VisualizeBlocksResponse(properties);
                    };

                    VisualizeBlocksResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.content != null && message.hasOwnProperty("content"))
                            writer.uint32(10).string(message.content);
                        return writer;
                    };

                    VisualizeBlocksResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    VisualizeBlocksResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coop.rchain.casper.protocol.VisualizeBlocksResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.content = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    VisualizeBlocksResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    VisualizeBlocksResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.content != null && message.hasOwnProperty("content"))
                            if (!$util.isString(message.content))
                                return "content: string expected";
                        return null;
                    };

                    VisualizeBlocksResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.coop.rchain.casper.protocol.VisualizeBlocksResponse)
                            return object;
                        var message = new $root.coop.rchain.casper.protocol.VisualizeBlocksResponse();
                        if (object.content != null)
                            message.content = String(object.content);
                        return message;
                    };

                    VisualizeBlocksResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.content = "";
                        if (message.content != null && message.hasOwnProperty("content"))
                            object.content = message.content;
                        return object;
                    };

                    VisualizeBlocksResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return VisualizeBlocksResponse;
                })();

                protocol.MachineVerifyQuery = (function() {

                    function MachineVerifyQuery(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    MachineVerifyQuery.create = function create(properties) {
                        return new MachineVerifyQuery(properties);
                    };

                    MachineVerifyQuery.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        return writer;
                    };

                    MachineVerifyQuery.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    MachineVerifyQuery.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coop.rchain.casper.protocol.MachineVerifyQuery();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    MachineVerifyQuery.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    MachineVerifyQuery.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        return null;
                    };

                    MachineVerifyQuery.fromObject = function fromObject(object) {
                        if (object instanceof $root.coop.rchain.casper.protocol.MachineVerifyQuery)
                            return object;
                        return new $root.coop.rchain.casper.protocol.MachineVerifyQuery();
                    };

                    MachineVerifyQuery.toObject = function toObject() {
                        return {};
                    };

                    MachineVerifyQuery.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return MachineVerifyQuery;
                })();

                protocol.MachineVerifyResponse = (function() {

                    function MachineVerifyResponse(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    MachineVerifyResponse.prototype.content = "";

                    MachineVerifyResponse.create = function create(properties) {
                        return new MachineVerifyResponse(properties);
                    };

                    MachineVerifyResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.content != null && message.hasOwnProperty("content"))
                            writer.uint32(10).string(message.content);
                        return writer;
                    };

                    MachineVerifyResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    MachineVerifyResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coop.rchain.casper.protocol.MachineVerifyResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.content = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    MachineVerifyResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    MachineVerifyResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.content != null && message.hasOwnProperty("content"))
                            if (!$util.isString(message.content))
                                return "content: string expected";
                        return null;
                    };

                    MachineVerifyResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.coop.rchain.casper.protocol.MachineVerifyResponse)
                            return object;
                        var message = new $root.coop.rchain.casper.protocol.MachineVerifyResponse();
                        if (object.content != null)
                            message.content = String(object.content);
                        return message;
                    };

                    MachineVerifyResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.content = "";
                        if (message.content != null && message.hasOwnProperty("content"))
                            object.content = message.content;
                        return object;
                    };

                    MachineVerifyResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return MachineVerifyResponse;
                })();

                protocol.ListeningNameDataResponse = (function() {

                    function ListeningNameDataResponse(properties) {
                        this.blockResults = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    ListeningNameDataResponse.prototype.blockResults = $util.emptyArray;
                    ListeningNameDataResponse.prototype.length = 0;

                    ListeningNameDataResponse.create = function create(properties) {
                        return new ListeningNameDataResponse(properties);
                    };

                    ListeningNameDataResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.blockResults != null && message.blockResults.length)
                            for (var i = 0; i < message.blockResults.length; ++i)
                                $root.coop.rchain.casper.protocol.DataWithBlockInfo.encode(message.blockResults[i], writer.uint32(10).fork()).ldelim();
                        if (message.length != null && message.hasOwnProperty("length"))
                            writer.uint32(16).int32(message.length);
                        return writer;
                    };

                    ListeningNameDataResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    ListeningNameDataResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coop.rchain.casper.protocol.ListeningNameDataResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.blockResults && message.blockResults.length))
                                    message.blockResults = [];
                                message.blockResults.push($root.coop.rchain.casper.protocol.DataWithBlockInfo.decode(reader, reader.uint32()));
                                break;
                            case 2:
                                message.length = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    ListeningNameDataResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    ListeningNameDataResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.blockResults != null && message.hasOwnProperty("blockResults")) {
                            if (!Array.isArray(message.blockResults))
                                return "blockResults: array expected";
                            for (var i = 0; i < message.blockResults.length; ++i) {
                                var error = $root.coop.rchain.casper.protocol.DataWithBlockInfo.verify(message.blockResults[i]);
                                if (error)
                                    return "blockResults." + error;
                            }
                        }
                        if (message.length != null && message.hasOwnProperty("length"))
                            if (!$util.isInteger(message.length))
                                return "length: integer expected";
                        return null;
                    };

                    ListeningNameDataResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.coop.rchain.casper.protocol.ListeningNameDataResponse)
                            return object;
                        var message = new $root.coop.rchain.casper.protocol.ListeningNameDataResponse();
                        if (object.blockResults) {
                            if (!Array.isArray(object.blockResults))
                                throw TypeError(".coop.rchain.casper.protocol.ListeningNameDataResponse.blockResults: array expected");
                            message.blockResults = [];
                            for (var i = 0; i < object.blockResults.length; ++i) {
                                if (typeof object.blockResults[i] !== "object")
                                    throw TypeError(".coop.rchain.casper.protocol.ListeningNameDataResponse.blockResults: object expected");
                                message.blockResults[i] = $root.coop.rchain.casper.protocol.DataWithBlockInfo.fromObject(object.blockResults[i]);
                            }
                        }
                        if (object.length != null)
                            message.length = object.length | 0;
                        return message;
                    };

                    ListeningNameDataResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.blockResults = [];
                        if (options.defaults)
                            object.length = 0;
                        if (message.blockResults && message.blockResults.length) {
                            object.blockResults = [];
                            for (var j = 0; j < message.blockResults.length; ++j)
                                object.blockResults[j] = $root.coop.rchain.casper.protocol.DataWithBlockInfo.toObject(message.blockResults[j], options);
                        }
                        if (message.length != null && message.hasOwnProperty("length"))
                            object.length = message.length;
                        return object;
                    };

                    ListeningNameDataResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return ListeningNameDataResponse;
                })();

                protocol.ListeningNameContinuationResponse = (function() {

                    function ListeningNameContinuationResponse(properties) {
                        this.blockResults = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    ListeningNameContinuationResponse.prototype.blockResults = $util.emptyArray;
                    ListeningNameContinuationResponse.prototype.length = 0;

                    ListeningNameContinuationResponse.create = function create(properties) {
                        return new ListeningNameContinuationResponse(properties);
                    };

                    ListeningNameContinuationResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.blockResults != null && message.blockResults.length)
                            for (var i = 0; i < message.blockResults.length; ++i)
                                $root.coop.rchain.casper.protocol.ContinuationsWithBlockInfo.encode(message.blockResults[i], writer.uint32(10).fork()).ldelim();
                        if (message.length != null && message.hasOwnProperty("length"))
                            writer.uint32(16).int32(message.length);
                        return writer;
                    };

                    ListeningNameContinuationResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    ListeningNameContinuationResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coop.rchain.casper.protocol.ListeningNameContinuationResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.blockResults && message.blockResults.length))
                                    message.blockResults = [];
                                message.blockResults.push($root.coop.rchain.casper.protocol.ContinuationsWithBlockInfo.decode(reader, reader.uint32()));
                                break;
                            case 2:
                                message.length = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    ListeningNameContinuationResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    ListeningNameContinuationResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.blockResults != null && message.hasOwnProperty("blockResults")) {
                            if (!Array.isArray(message.blockResults))
                                return "blockResults: array expected";
                            for (var i = 0; i < message.blockResults.length; ++i) {
                                var error = $root.coop.rchain.casper.protocol.ContinuationsWithBlockInfo.verify(message.blockResults[i]);
                                if (error)
                                    return "blockResults." + error;
                            }
                        }
                        if (message.length != null && message.hasOwnProperty("length"))
                            if (!$util.isInteger(message.length))
                                return "length: integer expected";
                        return null;
                    };

                    ListeningNameContinuationResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.coop.rchain.casper.protocol.ListeningNameContinuationResponse)
                            return object;
                        var message = new $root.coop.rchain.casper.protocol.ListeningNameContinuationResponse();
                        if (object.blockResults) {
                            if (!Array.isArray(object.blockResults))
                                throw TypeError(".coop.rchain.casper.protocol.ListeningNameContinuationResponse.blockResults: array expected");
                            message.blockResults = [];
                            for (var i = 0; i < object.blockResults.length; ++i) {
                                if (typeof object.blockResults[i] !== "object")
                                    throw TypeError(".coop.rchain.casper.protocol.ListeningNameContinuationResponse.blockResults: object expected");
                                message.blockResults[i] = $root.coop.rchain.casper.protocol.ContinuationsWithBlockInfo.fromObject(object.blockResults[i]);
                            }
                        }
                        if (object.length != null)
                            message.length = object.length | 0;
                        return message;
                    };

                    ListeningNameContinuationResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.blockResults = [];
                        if (options.defaults)
                            object.length = 0;
                        if (message.blockResults && message.blockResults.length) {
                            object.blockResults = [];
                            for (var j = 0; j < message.blockResults.length; ++j)
                                object.blockResults[j] = $root.coop.rchain.casper.protocol.ContinuationsWithBlockInfo.toObject(message.blockResults[j], options);
                        }
                        if (message.length != null && message.hasOwnProperty("length"))
                            object.length = message.length;
                        return object;
                    };

                    ListeningNameContinuationResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return ListeningNameContinuationResponse;
                })();

                protocol.PrivateNamePreviewQuery = (function() {

                    function PrivateNamePreviewQuery(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    PrivateNamePreviewQuery.prototype.user = $util.newBuffer([]);
                    PrivateNamePreviewQuery.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
                    PrivateNamePreviewQuery.prototype.nameQty = 0;

                    PrivateNamePreviewQuery.create = function create(properties) {
                        return new PrivateNamePreviewQuery(properties);
                    };

                    PrivateNamePreviewQuery.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.user != null && message.hasOwnProperty("user"))
                            writer.uint32(10).bytes(message.user);
                        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                            writer.uint32(16).int64(message.timestamp);
                        if (message.nameQty != null && message.hasOwnProperty("nameQty"))
                            writer.uint32(24).int32(message.nameQty);
                        return writer;
                    };

                    PrivateNamePreviewQuery.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    PrivateNamePreviewQuery.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coop.rchain.casper.protocol.PrivateNamePreviewQuery();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.user = reader.bytes();
                                break;
                            case 2:
                                message.timestamp = reader.int64();
                                break;
                            case 3:
                                message.nameQty = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    PrivateNamePreviewQuery.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    PrivateNamePreviewQuery.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.user != null && message.hasOwnProperty("user"))
                            if (!(message.user && typeof message.user.length === "number" || $util.isString(message.user)))
                                return "user: buffer expected";
                        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                            if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                                return "timestamp: integer|Long expected";
                        if (message.nameQty != null && message.hasOwnProperty("nameQty"))
                            if (!$util.isInteger(message.nameQty))
                                return "nameQty: integer expected";
                        return null;
                    };

                    PrivateNamePreviewQuery.fromObject = function fromObject(object) {
                        if (object instanceof $root.coop.rchain.casper.protocol.PrivateNamePreviewQuery)
                            return object;
                        var message = new $root.coop.rchain.casper.protocol.PrivateNamePreviewQuery();
                        if (object.user != null)
                            if (typeof object.user === "string")
                                $util.base64.decode(object.user, message.user = $util.newBuffer($util.base64.length(object.user)), 0);
                            else if (object.user.length)
                                message.user = object.user;
                        if (object.timestamp != null)
                            if ($util.Long)
                                (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                            else if (typeof object.timestamp === "string")
                                message.timestamp = parseInt(object.timestamp, 10);
                            else if (typeof object.timestamp === "number")
                                message.timestamp = object.timestamp;
                            else if (typeof object.timestamp === "object")
                                message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
                        if (object.nameQty != null)
                            message.nameQty = object.nameQty | 0;
                        return message;
                    };

                    PrivateNamePreviewQuery.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            if (options.bytes === String)
                                object.user = "";
                            else {
                                object.user = [];
                                if (options.bytes !== Array)
                                    object.user = $util.newBuffer(object.user);
                            }
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.timestamp = options.longs === String ? "0" : 0;
                            object.nameQty = 0;
                        }
                        if (message.user != null && message.hasOwnProperty("user"))
                            object.user = options.bytes === String ? $util.base64.encode(message.user, 0, message.user.length) : options.bytes === Array ? Array.prototype.slice.call(message.user) : message.user;
                        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                            if (typeof message.timestamp === "number")
                                object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                            else
                                object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
                        if (message.nameQty != null && message.hasOwnProperty("nameQty"))
                            object.nameQty = message.nameQty;
                        return object;
                    };

                    PrivateNamePreviewQuery.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return PrivateNamePreviewQuery;
                })();

                protocol.PrivateNamePreviewResponse = (function() {

                    function PrivateNamePreviewResponse(properties) {
                        this.ids = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    PrivateNamePreviewResponse.prototype.ids = $util.emptyArray;

                    PrivateNamePreviewResponse.create = function create(properties) {
                        return new PrivateNamePreviewResponse(properties);
                    };

                    PrivateNamePreviewResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.ids != null && message.ids.length)
                            for (var i = 0; i < message.ids.length; ++i)
                                writer.uint32(10).bytes(message.ids[i]);
                        return writer;
                    };

                    PrivateNamePreviewResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    PrivateNamePreviewResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coop.rchain.casper.protocol.PrivateNamePreviewResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.ids && message.ids.length))
                                    message.ids = [];
                                message.ids.push(reader.bytes());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    PrivateNamePreviewResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    PrivateNamePreviewResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.ids != null && message.hasOwnProperty("ids")) {
                            if (!Array.isArray(message.ids))
                                return "ids: array expected";
                            for (var i = 0; i < message.ids.length; ++i)
                                if (!(message.ids[i] && typeof message.ids[i].length === "number" || $util.isString(message.ids[i])))
                                    return "ids: buffer[] expected";
                        }
                        return null;
                    };

                    PrivateNamePreviewResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.coop.rchain.casper.protocol.PrivateNamePreviewResponse)
                            return object;
                        var message = new $root.coop.rchain.casper.protocol.PrivateNamePreviewResponse();
                        if (object.ids) {
                            if (!Array.isArray(object.ids))
                                throw TypeError(".coop.rchain.casper.protocol.PrivateNamePreviewResponse.ids: array expected");
                            message.ids = [];
                            for (var i = 0; i < object.ids.length; ++i)
                                if (typeof object.ids[i] === "string")
                                    $util.base64.decode(object.ids[i], message.ids[i] = $util.newBuffer($util.base64.length(object.ids[i])), 0);
                                else if (object.ids[i].length)
                                    message.ids[i] = object.ids[i];
                        }
                        return message;
                    };

                    PrivateNamePreviewResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.ids = [];
                        if (message.ids && message.ids.length) {
                            object.ids = [];
                            for (var j = 0; j < message.ids.length; ++j)
                                object.ids[j] = options.bytes === String ? $util.base64.encode(message.ids[j], 0, message.ids[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.ids[j]) : message.ids[j];
                        }
                        return object;
                    };

                    PrivateNamePreviewResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return PrivateNamePreviewResponse;
                })();

                protocol.LastFinalizedBlockQuery = (function() {

                    function LastFinalizedBlockQuery(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    LastFinalizedBlockQuery.create = function create(properties) {
                        return new LastFinalizedBlockQuery(properties);
                    };

                    LastFinalizedBlockQuery.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        return writer;
                    };

                    LastFinalizedBlockQuery.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    LastFinalizedBlockQuery.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coop.rchain.casper.protocol.LastFinalizedBlockQuery();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    LastFinalizedBlockQuery.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    LastFinalizedBlockQuery.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        return null;
                    };

                    LastFinalizedBlockQuery.fromObject = function fromObject(object) {
                        if (object instanceof $root.coop.rchain.casper.protocol.LastFinalizedBlockQuery)
                            return object;
                        return new $root.coop.rchain.casper.protocol.LastFinalizedBlockQuery();
                    };

                    LastFinalizedBlockQuery.toObject = function toObject() {
                        return {};
                    };

                    LastFinalizedBlockQuery.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return LastFinalizedBlockQuery;
                })();

                protocol.LastFinalizedBlockResponse = (function() {

                    function LastFinalizedBlockResponse(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    LastFinalizedBlockResponse.prototype.blockInfo = null;

                    LastFinalizedBlockResponse.create = function create(properties) {
                        return new LastFinalizedBlockResponse(properties);
                    };

                    LastFinalizedBlockResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.blockInfo != null && message.hasOwnProperty("blockInfo"))
                            $root.coop.rchain.casper.protocol.BlockInfo.encode(message.blockInfo, writer.uint32(10).fork()).ldelim();
                        return writer;
                    };

                    LastFinalizedBlockResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    LastFinalizedBlockResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coop.rchain.casper.protocol.LastFinalizedBlockResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.blockInfo = $root.coop.rchain.casper.protocol.BlockInfo.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    LastFinalizedBlockResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    LastFinalizedBlockResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.blockInfo != null && message.hasOwnProperty("blockInfo")) {
                            var error = $root.coop.rchain.casper.protocol.BlockInfo.verify(message.blockInfo);
                            if (error)
                                return "blockInfo." + error;
                        }
                        return null;
                    };

                    LastFinalizedBlockResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.coop.rchain.casper.protocol.LastFinalizedBlockResponse)
                            return object;
                        var message = new $root.coop.rchain.casper.protocol.LastFinalizedBlockResponse();
                        if (object.blockInfo != null) {
                            if (typeof object.blockInfo !== "object")
                                throw TypeError(".coop.rchain.casper.protocol.LastFinalizedBlockResponse.blockInfo: object expected");
                            message.blockInfo = $root.coop.rchain.casper.protocol.BlockInfo.fromObject(object.blockInfo);
                        }
                        return message;
                    };

                    LastFinalizedBlockResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.blockInfo = null;
                        if (message.blockInfo != null && message.hasOwnProperty("blockInfo"))
                            object.blockInfo = $root.coop.rchain.casper.protocol.BlockInfo.toObject(message.blockInfo, options);
                        return object;
                    };

                    LastFinalizedBlockResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return LastFinalizedBlockResponse;
                })();

                protocol.LightBlockInfo = (function() {

                    function LightBlockInfo(properties) {
                        this.parentsHashList = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    LightBlockInfo.prototype.blockHash = "";
                    LightBlockInfo.prototype.blockSize = "";
                    LightBlockInfo.prototype.blockNumber = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
                    LightBlockInfo.prototype.version = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
                    LightBlockInfo.prototype.deployCount = 0;
                    LightBlockInfo.prototype.tupleSpaceHash = "";
                    LightBlockInfo.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
                    LightBlockInfo.prototype.faultTolerance = 0;
                    LightBlockInfo.prototype.mainParentHash = "";
                    LightBlockInfo.prototype.parentsHashList = $util.emptyArray;
                    LightBlockInfo.prototype.sender = "";

                    LightBlockInfo.create = function create(properties) {
                        return new LightBlockInfo(properties);
                    };

                    LightBlockInfo.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.blockHash != null && message.hasOwnProperty("blockHash"))
                            writer.uint32(10).string(message.blockHash);
                        if (message.blockSize != null && message.hasOwnProperty("blockSize"))
                            writer.uint32(18).string(message.blockSize);
                        if (message.blockNumber != null && message.hasOwnProperty("blockNumber"))
                            writer.uint32(24).int64(message.blockNumber);
                        if (message.version != null && message.hasOwnProperty("version"))
                            writer.uint32(32).int64(message.version);
                        if (message.deployCount != null && message.hasOwnProperty("deployCount"))
                            writer.uint32(40).int32(message.deployCount);
                        if (message.tupleSpaceHash != null && message.hasOwnProperty("tupleSpaceHash"))
                            writer.uint32(50).string(message.tupleSpaceHash);
                        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                            writer.uint32(56).int64(message.timestamp);
                        if (message.faultTolerance != null && message.hasOwnProperty("faultTolerance"))
                            writer.uint32(69).float(message.faultTolerance);
                        if (message.mainParentHash != null && message.hasOwnProperty("mainParentHash"))
                            writer.uint32(74).string(message.mainParentHash);
                        if (message.parentsHashList != null && message.parentsHashList.length)
                            for (var i = 0; i < message.parentsHashList.length; ++i)
                                writer.uint32(82).string(message.parentsHashList[i]);
                        if (message.sender != null && message.hasOwnProperty("sender"))
                            writer.uint32(90).string(message.sender);
                        return writer;
                    };

                    LightBlockInfo.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    LightBlockInfo.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coop.rchain.casper.protocol.LightBlockInfo();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.blockHash = reader.string();
                                break;
                            case 2:
                                message.blockSize = reader.string();
                                break;
                            case 3:
                                message.blockNumber = reader.int64();
                                break;
                            case 4:
                                message.version = reader.int64();
                                break;
                            case 5:
                                message.deployCount = reader.int32();
                                break;
                            case 6:
                                message.tupleSpaceHash = reader.string();
                                break;
                            case 7:
                                message.timestamp = reader.int64();
                                break;
                            case 8:
                                message.faultTolerance = reader.float();
                                break;
                            case 9:
                                message.mainParentHash = reader.string();
                                break;
                            case 10:
                                if (!(message.parentsHashList && message.parentsHashList.length))
                                    message.parentsHashList = [];
                                message.parentsHashList.push(reader.string());
                                break;
                            case 11:
                                message.sender = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    LightBlockInfo.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    LightBlockInfo.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.blockHash != null && message.hasOwnProperty("blockHash"))
                            if (!$util.isString(message.blockHash))
                                return "blockHash: string expected";
                        if (message.blockSize != null && message.hasOwnProperty("blockSize"))
                            if (!$util.isString(message.blockSize))
                                return "blockSize: string expected";
                        if (message.blockNumber != null && message.hasOwnProperty("blockNumber"))
                            if (!$util.isInteger(message.blockNumber) && !(message.blockNumber && $util.isInteger(message.blockNumber.low) && $util.isInteger(message.blockNumber.high)))
                                return "blockNumber: integer|Long expected";
                        if (message.version != null && message.hasOwnProperty("version"))
                            if (!$util.isInteger(message.version) && !(message.version && $util.isInteger(message.version.low) && $util.isInteger(message.version.high)))
                                return "version: integer|Long expected";
                        if (message.deployCount != null && message.hasOwnProperty("deployCount"))
                            if (!$util.isInteger(message.deployCount))
                                return "deployCount: integer expected";
                        if (message.tupleSpaceHash != null && message.hasOwnProperty("tupleSpaceHash"))
                            if (!$util.isString(message.tupleSpaceHash))
                                return "tupleSpaceHash: string expected";
                        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                            if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                                return "timestamp: integer|Long expected";
                        if (message.faultTolerance != null && message.hasOwnProperty("faultTolerance"))
                            if (typeof message.faultTolerance !== "number")
                                return "faultTolerance: number expected";
                        if (message.mainParentHash != null && message.hasOwnProperty("mainParentHash"))
                            if (!$util.isString(message.mainParentHash))
                                return "mainParentHash: string expected";
                        if (message.parentsHashList != null && message.hasOwnProperty("parentsHashList")) {
                            if (!Array.isArray(message.parentsHashList))
                                return "parentsHashList: array expected";
                            for (var i = 0; i < message.parentsHashList.length; ++i)
                                if (!$util.isString(message.parentsHashList[i]))
                                    return "parentsHashList: string[] expected";
                        }
                        if (message.sender != null && message.hasOwnProperty("sender"))
                            if (!$util.isString(message.sender))
                                return "sender: string expected";
                        return null;
                    };

                    LightBlockInfo.fromObject = function fromObject(object) {
                        if (object instanceof $root.coop.rchain.casper.protocol.LightBlockInfo)
                            return object;
                        var message = new $root.coop.rchain.casper.protocol.LightBlockInfo();
                        if (object.blockHash != null)
                            message.blockHash = String(object.blockHash);
                        if (object.blockSize != null)
                            message.blockSize = String(object.blockSize);
                        if (object.blockNumber != null)
                            if ($util.Long)
                                (message.blockNumber = $util.Long.fromValue(object.blockNumber)).unsigned = false;
                            else if (typeof object.blockNumber === "string")
                                message.blockNumber = parseInt(object.blockNumber, 10);
                            else if (typeof object.blockNumber === "number")
                                message.blockNumber = object.blockNumber;
                            else if (typeof object.blockNumber === "object")
                                message.blockNumber = new $util.LongBits(object.blockNumber.low >>> 0, object.blockNumber.high >>> 0).toNumber();
                        if (object.version != null)
                            if ($util.Long)
                                (message.version = $util.Long.fromValue(object.version)).unsigned = false;
                            else if (typeof object.version === "string")
                                message.version = parseInt(object.version, 10);
                            else if (typeof object.version === "number")
                                message.version = object.version;
                            else if (typeof object.version === "object")
                                message.version = new $util.LongBits(object.version.low >>> 0, object.version.high >>> 0).toNumber();
                        if (object.deployCount != null)
                            message.deployCount = object.deployCount | 0;
                        if (object.tupleSpaceHash != null)
                            message.tupleSpaceHash = String(object.tupleSpaceHash);
                        if (object.timestamp != null)
                            if ($util.Long)
                                (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                            else if (typeof object.timestamp === "string")
                                message.timestamp = parseInt(object.timestamp, 10);
                            else if (typeof object.timestamp === "number")
                                message.timestamp = object.timestamp;
                            else if (typeof object.timestamp === "object")
                                message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
                        if (object.faultTolerance != null)
                            message.faultTolerance = Number(object.faultTolerance);
                        if (object.mainParentHash != null)
                            message.mainParentHash = String(object.mainParentHash);
                        if (object.parentsHashList) {
                            if (!Array.isArray(object.parentsHashList))
                                throw TypeError(".coop.rchain.casper.protocol.LightBlockInfo.parentsHashList: array expected");
                            message.parentsHashList = [];
                            for (var i = 0; i < object.parentsHashList.length; ++i)
                                message.parentsHashList[i] = String(object.parentsHashList[i]);
                        }
                        if (object.sender != null)
                            message.sender = String(object.sender);
                        return message;
                    };

                    LightBlockInfo.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.parentsHashList = [];
                        if (options.defaults) {
                            object.blockHash = "";
                            object.blockSize = "";
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.blockNumber = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.blockNumber = options.longs === String ? "0" : 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.version = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.version = options.longs === String ? "0" : 0;
                            object.deployCount = 0;
                            object.tupleSpaceHash = "";
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.timestamp = options.longs === String ? "0" : 0;
                            object.faultTolerance = 0;
                            object.mainParentHash = "";
                            object.sender = "";
                        }
                        if (message.blockHash != null && message.hasOwnProperty("blockHash"))
                            object.blockHash = message.blockHash;
                        if (message.blockSize != null && message.hasOwnProperty("blockSize"))
                            object.blockSize = message.blockSize;
                        if (message.blockNumber != null && message.hasOwnProperty("blockNumber"))
                            if (typeof message.blockNumber === "number")
                                object.blockNumber = options.longs === String ? String(message.blockNumber) : message.blockNumber;
                            else
                                object.blockNumber = options.longs === String ? $util.Long.prototype.toString.call(message.blockNumber) : options.longs === Number ? new $util.LongBits(message.blockNumber.low >>> 0, message.blockNumber.high >>> 0).toNumber() : message.blockNumber;
                        if (message.version != null && message.hasOwnProperty("version"))
                            if (typeof message.version === "number")
                                object.version = options.longs === String ? String(message.version) : message.version;
                            else
                                object.version = options.longs === String ? $util.Long.prototype.toString.call(message.version) : options.longs === Number ? new $util.LongBits(message.version.low >>> 0, message.version.high >>> 0).toNumber() : message.version;
                        if (message.deployCount != null && message.hasOwnProperty("deployCount"))
                            object.deployCount = message.deployCount;
                        if (message.tupleSpaceHash != null && message.hasOwnProperty("tupleSpaceHash"))
                            object.tupleSpaceHash = message.tupleSpaceHash;
                        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                            if (typeof message.timestamp === "number")
                                object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                            else
                                object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
                        if (message.faultTolerance != null && message.hasOwnProperty("faultTolerance"))
                            object.faultTolerance = options.json && !isFinite(message.faultTolerance) ? String(message.faultTolerance) : message.faultTolerance;
                        if (message.mainParentHash != null && message.hasOwnProperty("mainParentHash"))
                            object.mainParentHash = message.mainParentHash;
                        if (message.parentsHashList && message.parentsHashList.length) {
                            object.parentsHashList = [];
                            for (var j = 0; j < message.parentsHashList.length; ++j)
                                object.parentsHashList[j] = message.parentsHashList[j];
                        }
                        if (message.sender != null && message.hasOwnProperty("sender"))
                            object.sender = message.sender;
                        return object;
                    };

                    LightBlockInfo.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return LightBlockInfo;
                })();

                protocol.BlockInfo = (function() {

                    function BlockInfo(properties) {
                        this.parentsHashList = [];
                        this.bondsValidatorList = [];
                        this.deployCost = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    BlockInfo.prototype.blockHash = "";
                    BlockInfo.prototype.blockSize = "";
                    BlockInfo.prototype.blockNumber = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
                    BlockInfo.prototype.version = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
                    BlockInfo.prototype.deployCount = 0;
                    BlockInfo.prototype.tupleSpaceHash = "";
                    BlockInfo.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
                    BlockInfo.prototype.faultTolerance = 0;
                    BlockInfo.prototype.mainParentHash = "";
                    BlockInfo.prototype.parentsHashList = $util.emptyArray;
                    BlockInfo.prototype.sender = "";
                    BlockInfo.prototype.shardId = "";
                    BlockInfo.prototype.bondsValidatorList = $util.emptyArray;
                    BlockInfo.prototype.deployCost = $util.emptyArray;

                    BlockInfo.create = function create(properties) {
                        return new BlockInfo(properties);
                    };

                    BlockInfo.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.blockHash != null && message.hasOwnProperty("blockHash"))
                            writer.uint32(10).string(message.blockHash);
                        if (message.blockSize != null && message.hasOwnProperty("blockSize"))
                            writer.uint32(18).string(message.blockSize);
                        if (message.blockNumber != null && message.hasOwnProperty("blockNumber"))
                            writer.uint32(24).int64(message.blockNumber);
                        if (message.version != null && message.hasOwnProperty("version"))
                            writer.uint32(32).int64(message.version);
                        if (message.deployCount != null && message.hasOwnProperty("deployCount"))
                            writer.uint32(40).int32(message.deployCount);
                        if (message.tupleSpaceHash != null && message.hasOwnProperty("tupleSpaceHash"))
                            writer.uint32(50).string(message.tupleSpaceHash);
                        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                            writer.uint32(56).int64(message.timestamp);
                        if (message.faultTolerance != null && message.hasOwnProperty("faultTolerance"))
                            writer.uint32(69).float(message.faultTolerance);
                        if (message.mainParentHash != null && message.hasOwnProperty("mainParentHash"))
                            writer.uint32(74).string(message.mainParentHash);
                        if (message.parentsHashList != null && message.parentsHashList.length)
                            for (var i = 0; i < message.parentsHashList.length; ++i)
                                writer.uint32(82).string(message.parentsHashList[i]);
                        if (message.sender != null && message.hasOwnProperty("sender"))
                            writer.uint32(90).string(message.sender);
                        if (message.shardId != null && message.hasOwnProperty("shardId"))
                            writer.uint32(98).string(message.shardId);
                        if (message.bondsValidatorList != null && message.bondsValidatorList.length)
                            for (var i = 0; i < message.bondsValidatorList.length; ++i)
                                writer.uint32(106).string(message.bondsValidatorList[i]);
                        if (message.deployCost != null && message.deployCost.length)
                            for (var i = 0; i < message.deployCost.length; ++i)
                                writer.uint32(114).string(message.deployCost[i]);
                        return writer;
                    };

                    BlockInfo.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    BlockInfo.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coop.rchain.casper.protocol.BlockInfo();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.blockHash = reader.string();
                                break;
                            case 2:
                                message.blockSize = reader.string();
                                break;
                            case 3:
                                message.blockNumber = reader.int64();
                                break;
                            case 4:
                                message.version = reader.int64();
                                break;
                            case 5:
                                message.deployCount = reader.int32();
                                break;
                            case 6:
                                message.tupleSpaceHash = reader.string();
                                break;
                            case 7:
                                message.timestamp = reader.int64();
                                break;
                            case 8:
                                message.faultTolerance = reader.float();
                                break;
                            case 9:
                                message.mainParentHash = reader.string();
                                break;
                            case 10:
                                if (!(message.parentsHashList && message.parentsHashList.length))
                                    message.parentsHashList = [];
                                message.parentsHashList.push(reader.string());
                                break;
                            case 11:
                                message.sender = reader.string();
                                break;
                            case 12:
                                message.shardId = reader.string();
                                break;
                            case 13:
                                if (!(message.bondsValidatorList && message.bondsValidatorList.length))
                                    message.bondsValidatorList = [];
                                message.bondsValidatorList.push(reader.string());
                                break;
                            case 14:
                                if (!(message.deployCost && message.deployCost.length))
                                    message.deployCost = [];
                                message.deployCost.push(reader.string());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    BlockInfo.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    BlockInfo.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.blockHash != null && message.hasOwnProperty("blockHash"))
                            if (!$util.isString(message.blockHash))
                                return "blockHash: string expected";
                        if (message.blockSize != null && message.hasOwnProperty("blockSize"))
                            if (!$util.isString(message.blockSize))
                                return "blockSize: string expected";
                        if (message.blockNumber != null && message.hasOwnProperty("blockNumber"))
                            if (!$util.isInteger(message.blockNumber) && !(message.blockNumber && $util.isInteger(message.blockNumber.low) && $util.isInteger(message.blockNumber.high)))
                                return "blockNumber: integer|Long expected";
                        if (message.version != null && message.hasOwnProperty("version"))
                            if (!$util.isInteger(message.version) && !(message.version && $util.isInteger(message.version.low) && $util.isInteger(message.version.high)))
                                return "version: integer|Long expected";
                        if (message.deployCount != null && message.hasOwnProperty("deployCount"))
                            if (!$util.isInteger(message.deployCount))
                                return "deployCount: integer expected";
                        if (message.tupleSpaceHash != null && message.hasOwnProperty("tupleSpaceHash"))
                            if (!$util.isString(message.tupleSpaceHash))
                                return "tupleSpaceHash: string expected";
                        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                            if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                                return "timestamp: integer|Long expected";
                        if (message.faultTolerance != null && message.hasOwnProperty("faultTolerance"))
                            if (typeof message.faultTolerance !== "number")
                                return "faultTolerance: number expected";
                        if (message.mainParentHash != null && message.hasOwnProperty("mainParentHash"))
                            if (!$util.isString(message.mainParentHash))
                                return "mainParentHash: string expected";
                        if (message.parentsHashList != null && message.hasOwnProperty("parentsHashList")) {
                            if (!Array.isArray(message.parentsHashList))
                                return "parentsHashList: array expected";
                            for (var i = 0; i < message.parentsHashList.length; ++i)
                                if (!$util.isString(message.parentsHashList[i]))
                                    return "parentsHashList: string[] expected";
                        }
                        if (message.sender != null && message.hasOwnProperty("sender"))
                            if (!$util.isString(message.sender))
                                return "sender: string expected";
                        if (message.shardId != null && message.hasOwnProperty("shardId"))
                            if (!$util.isString(message.shardId))
                                return "shardId: string expected";
                        if (message.bondsValidatorList != null && message.hasOwnProperty("bondsValidatorList")) {
                            if (!Array.isArray(message.bondsValidatorList))
                                return "bondsValidatorList: array expected";
                            for (var i = 0; i < message.bondsValidatorList.length; ++i)
                                if (!$util.isString(message.bondsValidatorList[i]))
                                    return "bondsValidatorList: string[] expected";
                        }
                        if (message.deployCost != null && message.hasOwnProperty("deployCost")) {
                            if (!Array.isArray(message.deployCost))
                                return "deployCost: array expected";
                            for (var i = 0; i < message.deployCost.length; ++i)
                                if (!$util.isString(message.deployCost[i]))
                                    return "deployCost: string[] expected";
                        }
                        return null;
                    };

                    BlockInfo.fromObject = function fromObject(object) {
                        if (object instanceof $root.coop.rchain.casper.protocol.BlockInfo)
                            return object;
                        var message = new $root.coop.rchain.casper.protocol.BlockInfo();
                        if (object.blockHash != null)
                            message.blockHash = String(object.blockHash);
                        if (object.blockSize != null)
                            message.blockSize = String(object.blockSize);
                        if (object.blockNumber != null)
                            if ($util.Long)
                                (message.blockNumber = $util.Long.fromValue(object.blockNumber)).unsigned = false;
                            else if (typeof object.blockNumber === "string")
                                message.blockNumber = parseInt(object.blockNumber, 10);
                            else if (typeof object.blockNumber === "number")
                                message.blockNumber = object.blockNumber;
                            else if (typeof object.blockNumber === "object")
                                message.blockNumber = new $util.LongBits(object.blockNumber.low >>> 0, object.blockNumber.high >>> 0).toNumber();
                        if (object.version != null)
                            if ($util.Long)
                                (message.version = $util.Long.fromValue(object.version)).unsigned = false;
                            else if (typeof object.version === "string")
                                message.version = parseInt(object.version, 10);
                            else if (typeof object.version === "number")
                                message.version = object.version;
                            else if (typeof object.version === "object")
                                message.version = new $util.LongBits(object.version.low >>> 0, object.version.high >>> 0).toNumber();
                        if (object.deployCount != null)
                            message.deployCount = object.deployCount | 0;
                        if (object.tupleSpaceHash != null)
                            message.tupleSpaceHash = String(object.tupleSpaceHash);
                        if (object.timestamp != null)
                            if ($util.Long)
                                (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                            else if (typeof object.timestamp === "string")
                                message.timestamp = parseInt(object.timestamp, 10);
                            else if (typeof object.timestamp === "number")
                                message.timestamp = object.timestamp;
                            else if (typeof object.timestamp === "object")
                                message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
                        if (object.faultTolerance != null)
                            message.faultTolerance = Number(object.faultTolerance);
                        if (object.mainParentHash != null)
                            message.mainParentHash = String(object.mainParentHash);
                        if (object.parentsHashList) {
                            if (!Array.isArray(object.parentsHashList))
                                throw TypeError(".coop.rchain.casper.protocol.BlockInfo.parentsHashList: array expected");
                            message.parentsHashList = [];
                            for (var i = 0; i < object.parentsHashList.length; ++i)
                                message.parentsHashList[i] = String(object.parentsHashList[i]);
                        }
                        if (object.sender != null)
                            message.sender = String(object.sender);
                        if (object.shardId != null)
                            message.shardId = String(object.shardId);
                        if (object.bondsValidatorList) {
                            if (!Array.isArray(object.bondsValidatorList))
                                throw TypeError(".coop.rchain.casper.protocol.BlockInfo.bondsValidatorList: array expected");
                            message.bondsValidatorList = [];
                            for (var i = 0; i < object.bondsValidatorList.length; ++i)
                                message.bondsValidatorList[i] = String(object.bondsValidatorList[i]);
                        }
                        if (object.deployCost) {
                            if (!Array.isArray(object.deployCost))
                                throw TypeError(".coop.rchain.casper.protocol.BlockInfo.deployCost: array expected");
                            message.deployCost = [];
                            for (var i = 0; i < object.deployCost.length; ++i)
                                message.deployCost[i] = String(object.deployCost[i]);
                        }
                        return message;
                    };

                    BlockInfo.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults) {
                            object.parentsHashList = [];
                            object.bondsValidatorList = [];
                            object.deployCost = [];
                        }
                        if (options.defaults) {
                            object.blockHash = "";
                            object.blockSize = "";
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.blockNumber = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.blockNumber = options.longs === String ? "0" : 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.version = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.version = options.longs === String ? "0" : 0;
                            object.deployCount = 0;
                            object.tupleSpaceHash = "";
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.timestamp = options.longs === String ? "0" : 0;
                            object.faultTolerance = 0;
                            object.mainParentHash = "";
                            object.sender = "";
                            object.shardId = "";
                        }
                        if (message.blockHash != null && message.hasOwnProperty("blockHash"))
                            object.blockHash = message.blockHash;
                        if (message.blockSize != null && message.hasOwnProperty("blockSize"))
                            object.blockSize = message.blockSize;
                        if (message.blockNumber != null && message.hasOwnProperty("blockNumber"))
                            if (typeof message.blockNumber === "number")
                                object.blockNumber = options.longs === String ? String(message.blockNumber) : message.blockNumber;
                            else
                                object.blockNumber = options.longs === String ? $util.Long.prototype.toString.call(message.blockNumber) : options.longs === Number ? new $util.LongBits(message.blockNumber.low >>> 0, message.blockNumber.high >>> 0).toNumber() : message.blockNumber;
                        if (message.version != null && message.hasOwnProperty("version"))
                            if (typeof message.version === "number")
                                object.version = options.longs === String ? String(message.version) : message.version;
                            else
                                object.version = options.longs === String ? $util.Long.prototype.toString.call(message.version) : options.longs === Number ? new $util.LongBits(message.version.low >>> 0, message.version.high >>> 0).toNumber() : message.version;
                        if (message.deployCount != null && message.hasOwnProperty("deployCount"))
                            object.deployCount = message.deployCount;
                        if (message.tupleSpaceHash != null && message.hasOwnProperty("tupleSpaceHash"))
                            object.tupleSpaceHash = message.tupleSpaceHash;
                        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                            if (typeof message.timestamp === "number")
                                object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                            else
                                object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
                        if (message.faultTolerance != null && message.hasOwnProperty("faultTolerance"))
                            object.faultTolerance = options.json && !isFinite(message.faultTolerance) ? String(message.faultTolerance) : message.faultTolerance;
                        if (message.mainParentHash != null && message.hasOwnProperty("mainParentHash"))
                            object.mainParentHash = message.mainParentHash;
                        if (message.parentsHashList && message.parentsHashList.length) {
                            object.parentsHashList = [];
                            for (var j = 0; j < message.parentsHashList.length; ++j)
                                object.parentsHashList[j] = message.parentsHashList[j];
                        }
                        if (message.sender != null && message.hasOwnProperty("sender"))
                            object.sender = message.sender;
                        if (message.shardId != null && message.hasOwnProperty("shardId"))
                            object.shardId = message.shardId;
                        if (message.bondsValidatorList && message.bondsValidatorList.length) {
                            object.bondsValidatorList = [];
                            for (var j = 0; j < message.bondsValidatorList.length; ++j)
                                object.bondsValidatorList[j] = message.bondsValidatorList[j];
                        }
                        if (message.deployCost && message.deployCost.length) {
                            object.deployCost = [];
                            for (var j = 0; j < message.deployCost.length; ++j)
                                object.deployCost[j] = message.deployCost[j];
                        }
                        return object;
                    };

                    BlockInfo.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return BlockInfo;
                })();

                protocol.DataWithBlockInfo = (function() {

                    function DataWithBlockInfo(properties) {
                        this.postBlockData = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    DataWithBlockInfo.prototype.postBlockData = $util.emptyArray;
                    DataWithBlockInfo.prototype.block = null;

                    DataWithBlockInfo.create = function create(properties) {
                        return new DataWithBlockInfo(properties);
                    };

                    DataWithBlockInfo.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.postBlockData != null && message.postBlockData.length)
                            for (var i = 0; i < message.postBlockData.length; ++i)
                                $root.Par.encode(message.postBlockData[i], writer.uint32(10).fork()).ldelim();
                        if (message.block != null && message.hasOwnProperty("block"))
                            $root.coop.rchain.casper.protocol.LightBlockInfo.encode(message.block, writer.uint32(18).fork()).ldelim();
                        return writer;
                    };

                    DataWithBlockInfo.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    DataWithBlockInfo.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coop.rchain.casper.protocol.DataWithBlockInfo();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.postBlockData && message.postBlockData.length))
                                    message.postBlockData = [];
                                message.postBlockData.push($root.Par.decode(reader, reader.uint32()));
                                break;
                            case 2:
                                message.block = $root.coop.rchain.casper.protocol.LightBlockInfo.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    DataWithBlockInfo.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    DataWithBlockInfo.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.postBlockData != null && message.hasOwnProperty("postBlockData")) {
                            if (!Array.isArray(message.postBlockData))
                                return "postBlockData: array expected";
                            for (var i = 0; i < message.postBlockData.length; ++i) {
                                var error = $root.Par.verify(message.postBlockData[i]);
                                if (error)
                                    return "postBlockData." + error;
                            }
                        }
                        if (message.block != null && message.hasOwnProperty("block")) {
                            var error = $root.coop.rchain.casper.protocol.LightBlockInfo.verify(message.block);
                            if (error)
                                return "block." + error;
                        }
                        return null;
                    };

                    DataWithBlockInfo.fromObject = function fromObject(object) {
                        if (object instanceof $root.coop.rchain.casper.protocol.DataWithBlockInfo)
                            return object;
                        var message = new $root.coop.rchain.casper.protocol.DataWithBlockInfo();
                        if (object.postBlockData) {
                            if (!Array.isArray(object.postBlockData))
                                throw TypeError(".coop.rchain.casper.protocol.DataWithBlockInfo.postBlockData: array expected");
                            message.postBlockData = [];
                            for (var i = 0; i < object.postBlockData.length; ++i) {
                                if (typeof object.postBlockData[i] !== "object")
                                    throw TypeError(".coop.rchain.casper.protocol.DataWithBlockInfo.postBlockData: object expected");
                                message.postBlockData[i] = $root.Par.fromObject(object.postBlockData[i]);
                            }
                        }
                        if (object.block != null) {
                            if (typeof object.block !== "object")
                                throw TypeError(".coop.rchain.casper.protocol.DataWithBlockInfo.block: object expected");
                            message.block = $root.coop.rchain.casper.protocol.LightBlockInfo.fromObject(object.block);
                        }
                        return message;
                    };

                    DataWithBlockInfo.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.postBlockData = [];
                        if (options.defaults)
                            object.block = null;
                        if (message.postBlockData && message.postBlockData.length) {
                            object.postBlockData = [];
                            for (var j = 0; j < message.postBlockData.length; ++j)
                                object.postBlockData[j] = $root.Par.toObject(message.postBlockData[j], options);
                        }
                        if (message.block != null && message.hasOwnProperty("block"))
                            object.block = $root.coop.rchain.casper.protocol.LightBlockInfo.toObject(message.block, options);
                        return object;
                    };

                    DataWithBlockInfo.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return DataWithBlockInfo;
                })();

                protocol.ContinuationsWithBlockInfo = (function() {

                    function ContinuationsWithBlockInfo(properties) {
                        this.postBlockContinuations = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    ContinuationsWithBlockInfo.prototype.postBlockContinuations = $util.emptyArray;
                    ContinuationsWithBlockInfo.prototype.block = null;

                    ContinuationsWithBlockInfo.create = function create(properties) {
                        return new ContinuationsWithBlockInfo(properties);
                    };

                    ContinuationsWithBlockInfo.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.postBlockContinuations != null && message.postBlockContinuations.length)
                            for (var i = 0; i < message.postBlockContinuations.length; ++i)
                                $root.coop.rchain.casper.protocol.WaitingContinuationInfo.encode(message.postBlockContinuations[i], writer.uint32(10).fork()).ldelim();
                        if (message.block != null && message.hasOwnProperty("block"))
                            $root.coop.rchain.casper.protocol.LightBlockInfo.encode(message.block, writer.uint32(18).fork()).ldelim();
                        return writer;
                    };

                    ContinuationsWithBlockInfo.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    ContinuationsWithBlockInfo.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coop.rchain.casper.protocol.ContinuationsWithBlockInfo();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.postBlockContinuations && message.postBlockContinuations.length))
                                    message.postBlockContinuations = [];
                                message.postBlockContinuations.push($root.coop.rchain.casper.protocol.WaitingContinuationInfo.decode(reader, reader.uint32()));
                                break;
                            case 2:
                                message.block = $root.coop.rchain.casper.protocol.LightBlockInfo.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    ContinuationsWithBlockInfo.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    ContinuationsWithBlockInfo.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.postBlockContinuations != null && message.hasOwnProperty("postBlockContinuations")) {
                            if (!Array.isArray(message.postBlockContinuations))
                                return "postBlockContinuations: array expected";
                            for (var i = 0; i < message.postBlockContinuations.length; ++i) {
                                var error = $root.coop.rchain.casper.protocol.WaitingContinuationInfo.verify(message.postBlockContinuations[i]);
                                if (error)
                                    return "postBlockContinuations." + error;
                            }
                        }
                        if (message.block != null && message.hasOwnProperty("block")) {
                            var error = $root.coop.rchain.casper.protocol.LightBlockInfo.verify(message.block);
                            if (error)
                                return "block." + error;
                        }
                        return null;
                    };

                    ContinuationsWithBlockInfo.fromObject = function fromObject(object) {
                        if (object instanceof $root.coop.rchain.casper.protocol.ContinuationsWithBlockInfo)
                            return object;
                        var message = new $root.coop.rchain.casper.protocol.ContinuationsWithBlockInfo();
                        if (object.postBlockContinuations) {
                            if (!Array.isArray(object.postBlockContinuations))
                                throw TypeError(".coop.rchain.casper.protocol.ContinuationsWithBlockInfo.postBlockContinuations: array expected");
                            message.postBlockContinuations = [];
                            for (var i = 0; i < object.postBlockContinuations.length; ++i) {
                                if (typeof object.postBlockContinuations[i] !== "object")
                                    throw TypeError(".coop.rchain.casper.protocol.ContinuationsWithBlockInfo.postBlockContinuations: object expected");
                                message.postBlockContinuations[i] = $root.coop.rchain.casper.protocol.WaitingContinuationInfo.fromObject(object.postBlockContinuations[i]);
                            }
                        }
                        if (object.block != null) {
                            if (typeof object.block !== "object")
                                throw TypeError(".coop.rchain.casper.protocol.ContinuationsWithBlockInfo.block: object expected");
                            message.block = $root.coop.rchain.casper.protocol.LightBlockInfo.fromObject(object.block);
                        }
                        return message;
                    };

                    ContinuationsWithBlockInfo.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.postBlockContinuations = [];
                        if (options.defaults)
                            object.block = null;
                        if (message.postBlockContinuations && message.postBlockContinuations.length) {
                            object.postBlockContinuations = [];
                            for (var j = 0; j < message.postBlockContinuations.length; ++j)
                                object.postBlockContinuations[j] = $root.coop.rchain.casper.protocol.WaitingContinuationInfo.toObject(message.postBlockContinuations[j], options);
                        }
                        if (message.block != null && message.hasOwnProperty("block"))
                            object.block = $root.coop.rchain.casper.protocol.LightBlockInfo.toObject(message.block, options);
                        return object;
                    };

                    ContinuationsWithBlockInfo.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return ContinuationsWithBlockInfo;
                })();

                protocol.WaitingContinuationInfo = (function() {

                    function WaitingContinuationInfo(properties) {
                        this.postBlockPatterns = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    WaitingContinuationInfo.prototype.postBlockPatterns = $util.emptyArray;
                    WaitingContinuationInfo.prototype.postBlockContinuation = null;

                    WaitingContinuationInfo.create = function create(properties) {
                        return new WaitingContinuationInfo(properties);
                    };

                    WaitingContinuationInfo.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.postBlockPatterns != null && message.postBlockPatterns.length)
                            for (var i = 0; i < message.postBlockPatterns.length; ++i)
                                $root.BindPattern.encode(message.postBlockPatterns[i], writer.uint32(10).fork()).ldelim();
                        if (message.postBlockContinuation != null && message.hasOwnProperty("postBlockContinuation"))
                            $root.Par.encode(message.postBlockContinuation, writer.uint32(18).fork()).ldelim();
                        return writer;
                    };

                    WaitingContinuationInfo.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    WaitingContinuationInfo.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coop.rchain.casper.protocol.WaitingContinuationInfo();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.postBlockPatterns && message.postBlockPatterns.length))
                                    message.postBlockPatterns = [];
                                message.postBlockPatterns.push($root.BindPattern.decode(reader, reader.uint32()));
                                break;
                            case 2:
                                message.postBlockContinuation = $root.Par.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    WaitingContinuationInfo.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    WaitingContinuationInfo.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.postBlockPatterns != null && message.hasOwnProperty("postBlockPatterns")) {
                            if (!Array.isArray(message.postBlockPatterns))
                                return "postBlockPatterns: array expected";
                            for (var i = 0; i < message.postBlockPatterns.length; ++i) {
                                var error = $root.BindPattern.verify(message.postBlockPatterns[i]);
                                if (error)
                                    return "postBlockPatterns." + error;
                            }
                        }
                        if (message.postBlockContinuation != null && message.hasOwnProperty("postBlockContinuation")) {
                            var error = $root.Par.verify(message.postBlockContinuation);
                            if (error)
                                return "postBlockContinuation." + error;
                        }
                        return null;
                    };

                    WaitingContinuationInfo.fromObject = function fromObject(object) {
                        if (object instanceof $root.coop.rchain.casper.protocol.WaitingContinuationInfo)
                            return object;
                        var message = new $root.coop.rchain.casper.protocol.WaitingContinuationInfo();
                        if (object.postBlockPatterns) {
                            if (!Array.isArray(object.postBlockPatterns))
                                throw TypeError(".coop.rchain.casper.protocol.WaitingContinuationInfo.postBlockPatterns: array expected");
                            message.postBlockPatterns = [];
                            for (var i = 0; i < object.postBlockPatterns.length; ++i) {
                                if (typeof object.postBlockPatterns[i] !== "object")
                                    throw TypeError(".coop.rchain.casper.protocol.WaitingContinuationInfo.postBlockPatterns: object expected");
                                message.postBlockPatterns[i] = $root.BindPattern.fromObject(object.postBlockPatterns[i]);
                            }
                        }
                        if (object.postBlockContinuation != null) {
                            if (typeof object.postBlockContinuation !== "object")
                                throw TypeError(".coop.rchain.casper.protocol.WaitingContinuationInfo.postBlockContinuation: object expected");
                            message.postBlockContinuation = $root.Par.fromObject(object.postBlockContinuation);
                        }
                        return message;
                    };

                    WaitingContinuationInfo.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.postBlockPatterns = [];
                        if (options.defaults)
                            object.postBlockContinuation = null;
                        if (message.postBlockPatterns && message.postBlockPatterns.length) {
                            object.postBlockPatterns = [];
                            for (var j = 0; j < message.postBlockPatterns.length; ++j)
                                object.postBlockPatterns[j] = $root.BindPattern.toObject(message.postBlockPatterns[j], options);
                        }
                        if (message.postBlockContinuation != null && message.hasOwnProperty("postBlockContinuation"))
                            object.postBlockContinuation = $root.Par.toObject(message.postBlockContinuation, options);
                        return object;
                    };

                    WaitingContinuationInfo.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return WaitingContinuationInfo;
                })();

                protocol.HasBlockRequest = (function() {

                    function HasBlockRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    HasBlockRequest.prototype.hash = $util.newBuffer([]);

                    HasBlockRequest.create = function create(properties) {
                        return new HasBlockRequest(properties);
                    };

                    HasBlockRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.hash != null && message.hasOwnProperty("hash"))
                            writer.uint32(10).bytes(message.hash);
                        return writer;
                    };

                    HasBlockRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    HasBlockRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coop.rchain.casper.protocol.HasBlockRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.hash = reader.bytes();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    HasBlockRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    HasBlockRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.hash != null && message.hasOwnProperty("hash"))
                            if (!(message.hash && typeof message.hash.length === "number" || $util.isString(message.hash)))
                                return "hash: buffer expected";
                        return null;
                    };

                    HasBlockRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.coop.rchain.casper.protocol.HasBlockRequest)
                            return object;
                        var message = new $root.coop.rchain.casper.protocol.HasBlockRequest();
                        if (object.hash != null)
                            if (typeof object.hash === "string")
                                $util.base64.decode(object.hash, message.hash = $util.newBuffer($util.base64.length(object.hash)), 0);
                            else if (object.hash.length)
                                message.hash = object.hash;
                        return message;
                    };

                    HasBlockRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            if (options.bytes === String)
                                object.hash = "";
                            else {
                                object.hash = [];
                                if (options.bytes !== Array)
                                    object.hash = $util.newBuffer(object.hash);
                            }
                        if (message.hash != null && message.hasOwnProperty("hash"))
                            object.hash = options.bytes === String ? $util.base64.encode(message.hash, 0, message.hash.length) : options.bytes === Array ? Array.prototype.slice.call(message.hash) : message.hash;
                        return object;
                    };

                    HasBlockRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return HasBlockRequest;
                })();

                protocol.HasBlock = (function() {

                    function HasBlock(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    HasBlock.prototype.hash = $util.newBuffer([]);

                    HasBlock.create = function create(properties) {
                        return new HasBlock(properties);
                    };

                    HasBlock.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.hash != null && message.hasOwnProperty("hash"))
                            writer.uint32(10).bytes(message.hash);
                        return writer;
                    };

                    HasBlock.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    HasBlock.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coop.rchain.casper.protocol.HasBlock();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.hash = reader.bytes();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    HasBlock.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    HasBlock.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.hash != null && message.hasOwnProperty("hash"))
                            if (!(message.hash && typeof message.hash.length === "number" || $util.isString(message.hash)))
                                return "hash: buffer expected";
                        return null;
                    };

                    HasBlock.fromObject = function fromObject(object) {
                        if (object instanceof $root.coop.rchain.casper.protocol.HasBlock)
                            return object;
                        var message = new $root.coop.rchain.casper.protocol.HasBlock();
                        if (object.hash != null)
                            if (typeof object.hash === "string")
                                $util.base64.decode(object.hash, message.hash = $util.newBuffer($util.base64.length(object.hash)), 0);
                            else if (object.hash.length)
                                message.hash = object.hash;
                        return message;
                    };

                    HasBlock.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            if (options.bytes === String)
                                object.hash = "";
                            else {
                                object.hash = [];
                                if (options.bytes !== Array)
                                    object.hash = $util.newBuffer(object.hash);
                            }
                        if (message.hash != null && message.hasOwnProperty("hash"))
                            object.hash = options.bytes === String ? $util.base64.encode(message.hash, 0, message.hash.length) : options.bytes === Array ? Array.prototype.slice.call(message.hash) : message.hash;
                        return object;
                    };

                    HasBlock.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return HasBlock;
                })();

                protocol.BlockRequest = (function() {

                    function BlockRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    BlockRequest.prototype.hash = $util.newBuffer([]);

                    BlockRequest.create = function create(properties) {
                        return new BlockRequest(properties);
                    };

                    BlockRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.hash != null && message.hasOwnProperty("hash"))
                            writer.uint32(10).bytes(message.hash);
                        return writer;
                    };

                    BlockRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    BlockRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coop.rchain.casper.protocol.BlockRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.hash = reader.bytes();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    BlockRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    BlockRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.hash != null && message.hasOwnProperty("hash"))
                            if (!(message.hash && typeof message.hash.length === "number" || $util.isString(message.hash)))
                                return "hash: buffer expected";
                        return null;
                    };

                    BlockRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.coop.rchain.casper.protocol.BlockRequest)
                            return object;
                        var message = new $root.coop.rchain.casper.protocol.BlockRequest();
                        if (object.hash != null)
                            if (typeof object.hash === "string")
                                $util.base64.decode(object.hash, message.hash = $util.newBuffer($util.base64.length(object.hash)), 0);
                            else if (object.hash.length)
                                message.hash = object.hash;
                        return message;
                    };

                    BlockRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            if (options.bytes === String)
                                object.hash = "";
                            else {
                                object.hash = [];
                                if (options.bytes !== Array)
                                    object.hash = $util.newBuffer(object.hash);
                            }
                        if (message.hash != null && message.hasOwnProperty("hash"))
                            object.hash = options.bytes === String ? $util.base64.encode(message.hash, 0, message.hash.length) : options.bytes === Array ? Array.prototype.slice.call(message.hash) : message.hash;
                        return object;
                    };

                    BlockRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return BlockRequest;
                })();

                protocol.ForkChoiceTipRequest = (function() {

                    function ForkChoiceTipRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    ForkChoiceTipRequest.create = function create(properties) {
                        return new ForkChoiceTipRequest(properties);
                    };

                    ForkChoiceTipRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        return writer;
                    };

                    ForkChoiceTipRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    ForkChoiceTipRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coop.rchain.casper.protocol.ForkChoiceTipRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    ForkChoiceTipRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    ForkChoiceTipRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        return null;
                    };

                    ForkChoiceTipRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.coop.rchain.casper.protocol.ForkChoiceTipRequest)
                            return object;
                        return new $root.coop.rchain.casper.protocol.ForkChoiceTipRequest();
                    };

                    ForkChoiceTipRequest.toObject = function toObject() {
                        return {};
                    };

                    ForkChoiceTipRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return ForkChoiceTipRequest;
                })();

                protocol.ApprovedBlockCandidate = (function() {

                    function ApprovedBlockCandidate(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    ApprovedBlockCandidate.prototype.block = null;
                    ApprovedBlockCandidate.prototype.requiredSigs = 0;

                    ApprovedBlockCandidate.create = function create(properties) {
                        return new ApprovedBlockCandidate(properties);
                    };

                    ApprovedBlockCandidate.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.block != null && message.hasOwnProperty("block"))
                            $root.coop.rchain.casper.protocol.BlockMessage.encode(message.block, writer.uint32(10).fork()).ldelim();
                        if (message.requiredSigs != null && message.hasOwnProperty("requiredSigs"))
                            writer.uint32(16).int32(message.requiredSigs);
                        return writer;
                    };

                    ApprovedBlockCandidate.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    ApprovedBlockCandidate.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coop.rchain.casper.protocol.ApprovedBlockCandidate();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.block = $root.coop.rchain.casper.protocol.BlockMessage.decode(reader, reader.uint32());
                                break;
                            case 2:
                                message.requiredSigs = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    ApprovedBlockCandidate.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    ApprovedBlockCandidate.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.block != null && message.hasOwnProperty("block")) {
                            var error = $root.coop.rchain.casper.protocol.BlockMessage.verify(message.block);
                            if (error)
                                return "block." + error;
                        }
                        if (message.requiredSigs != null && message.hasOwnProperty("requiredSigs"))
                            if (!$util.isInteger(message.requiredSigs))
                                return "requiredSigs: integer expected";
                        return null;
                    };

                    ApprovedBlockCandidate.fromObject = function fromObject(object) {
                        if (object instanceof $root.coop.rchain.casper.protocol.ApprovedBlockCandidate)
                            return object;
                        var message = new $root.coop.rchain.casper.protocol.ApprovedBlockCandidate();
                        if (object.block != null) {
                            if (typeof object.block !== "object")
                                throw TypeError(".coop.rchain.casper.protocol.ApprovedBlockCandidate.block: object expected");
                            message.block = $root.coop.rchain.casper.protocol.BlockMessage.fromObject(object.block);
                        }
                        if (object.requiredSigs != null)
                            message.requiredSigs = object.requiredSigs | 0;
                        return message;
                    };

                    ApprovedBlockCandidate.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.block = null;
                            object.requiredSigs = 0;
                        }
                        if (message.block != null && message.hasOwnProperty("block"))
                            object.block = $root.coop.rchain.casper.protocol.BlockMessage.toObject(message.block, options);
                        if (message.requiredSigs != null && message.hasOwnProperty("requiredSigs"))
                            object.requiredSigs = message.requiredSigs;
                        return object;
                    };

                    ApprovedBlockCandidate.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return ApprovedBlockCandidate;
                })();

                protocol.UnapprovedBlock = (function() {

                    function UnapprovedBlock(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    UnapprovedBlock.prototype.candidate = null;
                    UnapprovedBlock.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
                    UnapprovedBlock.prototype.duration = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    UnapprovedBlock.create = function create(properties) {
                        return new UnapprovedBlock(properties);
                    };

                    UnapprovedBlock.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.candidate != null && message.hasOwnProperty("candidate"))
                            $root.coop.rchain.casper.protocol.ApprovedBlockCandidate.encode(message.candidate, writer.uint32(10).fork()).ldelim();
                        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                            writer.uint32(16).int64(message.timestamp);
                        if (message.duration != null && message.hasOwnProperty("duration"))
                            writer.uint32(24).int64(message.duration);
                        return writer;
                    };

                    UnapprovedBlock.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    UnapprovedBlock.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coop.rchain.casper.protocol.UnapprovedBlock();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.candidate = $root.coop.rchain.casper.protocol.ApprovedBlockCandidate.decode(reader, reader.uint32());
                                break;
                            case 2:
                                message.timestamp = reader.int64();
                                break;
                            case 3:
                                message.duration = reader.int64();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    UnapprovedBlock.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    UnapprovedBlock.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.candidate != null && message.hasOwnProperty("candidate")) {
                            var error = $root.coop.rchain.casper.protocol.ApprovedBlockCandidate.verify(message.candidate);
                            if (error)
                                return "candidate." + error;
                        }
                        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                            if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                                return "timestamp: integer|Long expected";
                        if (message.duration != null && message.hasOwnProperty("duration"))
                            if (!$util.isInteger(message.duration) && !(message.duration && $util.isInteger(message.duration.low) && $util.isInteger(message.duration.high)))
                                return "duration: integer|Long expected";
                        return null;
                    };

                    UnapprovedBlock.fromObject = function fromObject(object) {
                        if (object instanceof $root.coop.rchain.casper.protocol.UnapprovedBlock)
                            return object;
                        var message = new $root.coop.rchain.casper.protocol.UnapprovedBlock();
                        if (object.candidate != null) {
                            if (typeof object.candidate !== "object")
                                throw TypeError(".coop.rchain.casper.protocol.UnapprovedBlock.candidate: object expected");
                            message.candidate = $root.coop.rchain.casper.protocol.ApprovedBlockCandidate.fromObject(object.candidate);
                        }
                        if (object.timestamp != null)
                            if ($util.Long)
                                (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                            else if (typeof object.timestamp === "string")
                                message.timestamp = parseInt(object.timestamp, 10);
                            else if (typeof object.timestamp === "number")
                                message.timestamp = object.timestamp;
                            else if (typeof object.timestamp === "object")
                                message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
                        if (object.duration != null)
                            if ($util.Long)
                                (message.duration = $util.Long.fromValue(object.duration)).unsigned = false;
                            else if (typeof object.duration === "string")
                                message.duration = parseInt(object.duration, 10);
                            else if (typeof object.duration === "number")
                                message.duration = object.duration;
                            else if (typeof object.duration === "object")
                                message.duration = new $util.LongBits(object.duration.low >>> 0, object.duration.high >>> 0).toNumber();
                        return message;
                    };

                    UnapprovedBlock.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.candidate = null;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.timestamp = options.longs === String ? "0" : 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.duration = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.duration = options.longs === String ? "0" : 0;
                        }
                        if (message.candidate != null && message.hasOwnProperty("candidate"))
                            object.candidate = $root.coop.rchain.casper.protocol.ApprovedBlockCandidate.toObject(message.candidate, options);
                        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                            if (typeof message.timestamp === "number")
                                object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                            else
                                object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
                        if (message.duration != null && message.hasOwnProperty("duration"))
                            if (typeof message.duration === "number")
                                object.duration = options.longs === String ? String(message.duration) : message.duration;
                            else
                                object.duration = options.longs === String ? $util.Long.prototype.toString.call(message.duration) : options.longs === Number ? new $util.LongBits(message.duration.low >>> 0, message.duration.high >>> 0).toNumber() : message.duration;
                        return object;
                    };

                    UnapprovedBlock.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return UnapprovedBlock;
                })();

                protocol.Signature = (function() {

                    function Signature(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    Signature.prototype.publicKey = $util.newBuffer([]);
                    Signature.prototype.algorithm = "";
                    Signature.prototype.sig = $util.newBuffer([]);

                    Signature.create = function create(properties) {
                        return new Signature(properties);
                    };

                    Signature.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.publicKey != null && message.hasOwnProperty("publicKey"))
                            writer.uint32(10).bytes(message.publicKey);
                        if (message.algorithm != null && message.hasOwnProperty("algorithm"))
                            writer.uint32(18).string(message.algorithm);
                        if (message.sig != null && message.hasOwnProperty("sig"))
                            writer.uint32(26).bytes(message.sig);
                        return writer;
                    };

                    Signature.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    Signature.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coop.rchain.casper.protocol.Signature();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.publicKey = reader.bytes();
                                break;
                            case 2:
                                message.algorithm = reader.string();
                                break;
                            case 3:
                                message.sig = reader.bytes();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    Signature.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    Signature.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.publicKey != null && message.hasOwnProperty("publicKey"))
                            if (!(message.publicKey && typeof message.publicKey.length === "number" || $util.isString(message.publicKey)))
                                return "publicKey: buffer expected";
                        if (message.algorithm != null && message.hasOwnProperty("algorithm"))
                            if (!$util.isString(message.algorithm))
                                return "algorithm: string expected";
                        if (message.sig != null && message.hasOwnProperty("sig"))
                            if (!(message.sig && typeof message.sig.length === "number" || $util.isString(message.sig)))
                                return "sig: buffer expected";
                        return null;
                    };

                    Signature.fromObject = function fromObject(object) {
                        if (object instanceof $root.coop.rchain.casper.protocol.Signature)
                            return object;
                        var message = new $root.coop.rchain.casper.protocol.Signature();
                        if (object.publicKey != null)
                            if (typeof object.publicKey === "string")
                                $util.base64.decode(object.publicKey, message.publicKey = $util.newBuffer($util.base64.length(object.publicKey)), 0);
                            else if (object.publicKey.length)
                                message.publicKey = object.publicKey;
                        if (object.algorithm != null)
                            message.algorithm = String(object.algorithm);
                        if (object.sig != null)
                            if (typeof object.sig === "string")
                                $util.base64.decode(object.sig, message.sig = $util.newBuffer($util.base64.length(object.sig)), 0);
                            else if (object.sig.length)
                                message.sig = object.sig;
                        return message;
                    };

                    Signature.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            if (options.bytes === String)
                                object.publicKey = "";
                            else {
                                object.publicKey = [];
                                if (options.bytes !== Array)
                                    object.publicKey = $util.newBuffer(object.publicKey);
                            }
                            object.algorithm = "";
                            if (options.bytes === String)
                                object.sig = "";
                            else {
                                object.sig = [];
                                if (options.bytes !== Array)
                                    object.sig = $util.newBuffer(object.sig);
                            }
                        }
                        if (message.publicKey != null && message.hasOwnProperty("publicKey"))
                            object.publicKey = options.bytes === String ? $util.base64.encode(message.publicKey, 0, message.publicKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.publicKey) : message.publicKey;
                        if (message.algorithm != null && message.hasOwnProperty("algorithm"))
                            object.algorithm = message.algorithm;
                        if (message.sig != null && message.hasOwnProperty("sig"))
                            object.sig = options.bytes === String ? $util.base64.encode(message.sig, 0, message.sig.length) : options.bytes === Array ? Array.prototype.slice.call(message.sig) : message.sig;
                        return object;
                    };

                    Signature.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Signature;
                })();

                protocol.BlockApproval = (function() {

                    function BlockApproval(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    BlockApproval.prototype.candidate = null;
                    BlockApproval.prototype.sig = null;

                    BlockApproval.create = function create(properties) {
                        return new BlockApproval(properties);
                    };

                    BlockApproval.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.candidate != null && message.hasOwnProperty("candidate"))
                            $root.coop.rchain.casper.protocol.ApprovedBlockCandidate.encode(message.candidate, writer.uint32(10).fork()).ldelim();
                        if (message.sig != null && message.hasOwnProperty("sig"))
                            $root.coop.rchain.casper.protocol.Signature.encode(message.sig, writer.uint32(18).fork()).ldelim();
                        return writer;
                    };

                    BlockApproval.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    BlockApproval.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coop.rchain.casper.protocol.BlockApproval();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.candidate = $root.coop.rchain.casper.protocol.ApprovedBlockCandidate.decode(reader, reader.uint32());
                                break;
                            case 2:
                                message.sig = $root.coop.rchain.casper.protocol.Signature.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    BlockApproval.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    BlockApproval.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.candidate != null && message.hasOwnProperty("candidate")) {
                            var error = $root.coop.rchain.casper.protocol.ApprovedBlockCandidate.verify(message.candidate);
                            if (error)
                                return "candidate." + error;
                        }
                        if (message.sig != null && message.hasOwnProperty("sig")) {
                            var error = $root.coop.rchain.casper.protocol.Signature.verify(message.sig);
                            if (error)
                                return "sig." + error;
                        }
                        return null;
                    };

                    BlockApproval.fromObject = function fromObject(object) {
                        if (object instanceof $root.coop.rchain.casper.protocol.BlockApproval)
                            return object;
                        var message = new $root.coop.rchain.casper.protocol.BlockApproval();
                        if (object.candidate != null) {
                            if (typeof object.candidate !== "object")
                                throw TypeError(".coop.rchain.casper.protocol.BlockApproval.candidate: object expected");
                            message.candidate = $root.coop.rchain.casper.protocol.ApprovedBlockCandidate.fromObject(object.candidate);
                        }
                        if (object.sig != null) {
                            if (typeof object.sig !== "object")
                                throw TypeError(".coop.rchain.casper.protocol.BlockApproval.sig: object expected");
                            message.sig = $root.coop.rchain.casper.protocol.Signature.fromObject(object.sig);
                        }
                        return message;
                    };

                    BlockApproval.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.candidate = null;
                            object.sig = null;
                        }
                        if (message.candidate != null && message.hasOwnProperty("candidate"))
                            object.candidate = $root.coop.rchain.casper.protocol.ApprovedBlockCandidate.toObject(message.candidate, options);
                        if (message.sig != null && message.hasOwnProperty("sig"))
                            object.sig = $root.coop.rchain.casper.protocol.Signature.toObject(message.sig, options);
                        return object;
                    };

                    BlockApproval.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return BlockApproval;
                })();

                protocol.ApprovedBlock = (function() {

                    function ApprovedBlock(properties) {
                        this.sigs = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    ApprovedBlock.prototype.candidate = null;
                    ApprovedBlock.prototype.sigs = $util.emptyArray;

                    ApprovedBlock.create = function create(properties) {
                        return new ApprovedBlock(properties);
                    };

                    ApprovedBlock.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.candidate != null && message.hasOwnProperty("candidate"))
                            $root.coop.rchain.casper.protocol.ApprovedBlockCandidate.encode(message.candidate, writer.uint32(10).fork()).ldelim();
                        if (message.sigs != null && message.sigs.length)
                            for (var i = 0; i < message.sigs.length; ++i)
                                $root.coop.rchain.casper.protocol.Signature.encode(message.sigs[i], writer.uint32(18).fork()).ldelim();
                        return writer;
                    };

                    ApprovedBlock.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    ApprovedBlock.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coop.rchain.casper.protocol.ApprovedBlock();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.candidate = $root.coop.rchain.casper.protocol.ApprovedBlockCandidate.decode(reader, reader.uint32());
                                break;
                            case 2:
                                if (!(message.sigs && message.sigs.length))
                                    message.sigs = [];
                                message.sigs.push($root.coop.rchain.casper.protocol.Signature.decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    ApprovedBlock.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    ApprovedBlock.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.candidate != null && message.hasOwnProperty("candidate")) {
                            var error = $root.coop.rchain.casper.protocol.ApprovedBlockCandidate.verify(message.candidate);
                            if (error)
                                return "candidate." + error;
                        }
                        if (message.sigs != null && message.hasOwnProperty("sigs")) {
                            if (!Array.isArray(message.sigs))
                                return "sigs: array expected";
                            for (var i = 0; i < message.sigs.length; ++i) {
                                var error = $root.coop.rchain.casper.protocol.Signature.verify(message.sigs[i]);
                                if (error)
                                    return "sigs." + error;
                            }
                        }
                        return null;
                    };

                    ApprovedBlock.fromObject = function fromObject(object) {
                        if (object instanceof $root.coop.rchain.casper.protocol.ApprovedBlock)
                            return object;
                        var message = new $root.coop.rchain.casper.protocol.ApprovedBlock();
                        if (object.candidate != null) {
                            if (typeof object.candidate !== "object")
                                throw TypeError(".coop.rchain.casper.protocol.ApprovedBlock.candidate: object expected");
                            message.candidate = $root.coop.rchain.casper.protocol.ApprovedBlockCandidate.fromObject(object.candidate);
                        }
                        if (object.sigs) {
                            if (!Array.isArray(object.sigs))
                                throw TypeError(".coop.rchain.casper.protocol.ApprovedBlock.sigs: array expected");
                            message.sigs = [];
                            for (var i = 0; i < object.sigs.length; ++i) {
                                if (typeof object.sigs[i] !== "object")
                                    throw TypeError(".coop.rchain.casper.protocol.ApprovedBlock.sigs: object expected");
                                message.sigs[i] = $root.coop.rchain.casper.protocol.Signature.fromObject(object.sigs[i]);
                            }
                        }
                        return message;
                    };

                    ApprovedBlock.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.sigs = [];
                        if (options.defaults)
                            object.candidate = null;
                        if (message.candidate != null && message.hasOwnProperty("candidate"))
                            object.candidate = $root.coop.rchain.casper.protocol.ApprovedBlockCandidate.toObject(message.candidate, options);
                        if (message.sigs && message.sigs.length) {
                            object.sigs = [];
                            for (var j = 0; j < message.sigs.length; ++j)
                                object.sigs[j] = $root.coop.rchain.casper.protocol.Signature.toObject(message.sigs[j], options);
                        }
                        return object;
                    };

                    ApprovedBlock.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return ApprovedBlock;
                })();

                protocol.ApprovedBlockRequest = (function() {

                    function ApprovedBlockRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    ApprovedBlockRequest.prototype.identifier = "";

                    ApprovedBlockRequest.create = function create(properties) {
                        return new ApprovedBlockRequest(properties);
                    };

                    ApprovedBlockRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.identifier != null && message.hasOwnProperty("identifier"))
                            writer.uint32(10).string(message.identifier);
                        return writer;
                    };

                    ApprovedBlockRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    ApprovedBlockRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coop.rchain.casper.protocol.ApprovedBlockRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.identifier = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    ApprovedBlockRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    ApprovedBlockRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.identifier != null && message.hasOwnProperty("identifier"))
                            if (!$util.isString(message.identifier))
                                return "identifier: string expected";
                        return null;
                    };

                    ApprovedBlockRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.coop.rchain.casper.protocol.ApprovedBlockRequest)
                            return object;
                        var message = new $root.coop.rchain.casper.protocol.ApprovedBlockRequest();
                        if (object.identifier != null)
                            message.identifier = String(object.identifier);
                        return message;
                    };

                    ApprovedBlockRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.identifier = "";
                        if (message.identifier != null && message.hasOwnProperty("identifier"))
                            object.identifier = message.identifier;
                        return object;
                    };

                    ApprovedBlockRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return ApprovedBlockRequest;
                })();

                protocol.NoApprovedBlockAvailable = (function() {

                    function NoApprovedBlockAvailable(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    NoApprovedBlockAvailable.prototype.identifier = "";
                    NoApprovedBlockAvailable.prototype.nodeIdentifer = "";

                    NoApprovedBlockAvailable.create = function create(properties) {
                        return new NoApprovedBlockAvailable(properties);
                    };

                    NoApprovedBlockAvailable.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.identifier != null && message.hasOwnProperty("identifier"))
                            writer.uint32(10).string(message.identifier);
                        if (message.nodeIdentifer != null && message.hasOwnProperty("nodeIdentifer"))
                            writer.uint32(18).string(message.nodeIdentifer);
                        return writer;
                    };

                    NoApprovedBlockAvailable.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    NoApprovedBlockAvailable.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coop.rchain.casper.protocol.NoApprovedBlockAvailable();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.identifier = reader.string();
                                break;
                            case 2:
                                message.nodeIdentifer = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    NoApprovedBlockAvailable.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    NoApprovedBlockAvailable.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.identifier != null && message.hasOwnProperty("identifier"))
                            if (!$util.isString(message.identifier))
                                return "identifier: string expected";
                        if (message.nodeIdentifer != null && message.hasOwnProperty("nodeIdentifer"))
                            if (!$util.isString(message.nodeIdentifer))
                                return "nodeIdentifer: string expected";
                        return null;
                    };

                    NoApprovedBlockAvailable.fromObject = function fromObject(object) {
                        if (object instanceof $root.coop.rchain.casper.protocol.NoApprovedBlockAvailable)
                            return object;
                        var message = new $root.coop.rchain.casper.protocol.NoApprovedBlockAvailable();
                        if (object.identifier != null)
                            message.identifier = String(object.identifier);
                        if (object.nodeIdentifer != null)
                            message.nodeIdentifer = String(object.nodeIdentifer);
                        return message;
                    };

                    NoApprovedBlockAvailable.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.identifier = "";
                            object.nodeIdentifer = "";
                        }
                        if (message.identifier != null && message.hasOwnProperty("identifier"))
                            object.identifier = message.identifier;
                        if (message.nodeIdentifer != null && message.hasOwnProperty("nodeIdentifer"))
                            object.nodeIdentifer = message.nodeIdentifer;
                        return object;
                    };

                    NoApprovedBlockAvailable.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return NoApprovedBlockAvailable;
                })();

                protocol.BlockMessage = (function() {

                    function BlockMessage(properties) {
                        this.justifications = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    BlockMessage.prototype.blockHash = $util.newBuffer([]);
                    BlockMessage.prototype.header = null;
                    BlockMessage.prototype.body = null;
                    BlockMessage.prototype.justifications = $util.emptyArray;
                    BlockMessage.prototype.sender = $util.newBuffer([]);
                    BlockMessage.prototype.seqNum = 0;
                    BlockMessage.prototype.sig = $util.newBuffer([]);
                    BlockMessage.prototype.sigAlgorithm = "";
                    BlockMessage.prototype.shardId = "";
                    BlockMessage.prototype.extraBytes = $util.newBuffer([]);

                    BlockMessage.create = function create(properties) {
                        return new BlockMessage(properties);
                    };

                    BlockMessage.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.blockHash != null && message.hasOwnProperty("blockHash"))
                            writer.uint32(10).bytes(message.blockHash);
                        if (message.header != null && message.hasOwnProperty("header"))
                            $root.coop.rchain.casper.protocol.Header.encode(message.header, writer.uint32(18).fork()).ldelim();
                        if (message.body != null && message.hasOwnProperty("body"))
                            $root.coop.rchain.casper.protocol.Body.encode(message.body, writer.uint32(26).fork()).ldelim();
                        if (message.justifications != null && message.justifications.length)
                            for (var i = 0; i < message.justifications.length; ++i)
                                $root.coop.rchain.casper.protocol.Justification.encode(message.justifications[i], writer.uint32(34).fork()).ldelim();
                        if (message.sender != null && message.hasOwnProperty("sender"))
                            writer.uint32(42).bytes(message.sender);
                        if (message.seqNum != null && message.hasOwnProperty("seqNum"))
                            writer.uint32(48).int32(message.seqNum);
                        if (message.sig != null && message.hasOwnProperty("sig"))
                            writer.uint32(58).bytes(message.sig);
                        if (message.sigAlgorithm != null && message.hasOwnProperty("sigAlgorithm"))
                            writer.uint32(66).string(message.sigAlgorithm);
                        if (message.shardId != null && message.hasOwnProperty("shardId"))
                            writer.uint32(74).string(message.shardId);
                        if (message.extraBytes != null && message.hasOwnProperty("extraBytes"))
                            writer.uint32(82).bytes(message.extraBytes);
                        return writer;
                    };

                    BlockMessage.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    BlockMessage.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coop.rchain.casper.protocol.BlockMessage();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.blockHash = reader.bytes();
                                break;
                            case 2:
                                message.header = $root.coop.rchain.casper.protocol.Header.decode(reader, reader.uint32());
                                break;
                            case 3:
                                message.body = $root.coop.rchain.casper.protocol.Body.decode(reader, reader.uint32());
                                break;
                            case 4:
                                if (!(message.justifications && message.justifications.length))
                                    message.justifications = [];
                                message.justifications.push($root.coop.rchain.casper.protocol.Justification.decode(reader, reader.uint32()));
                                break;
                            case 5:
                                message.sender = reader.bytes();
                                break;
                            case 6:
                                message.seqNum = reader.int32();
                                break;
                            case 7:
                                message.sig = reader.bytes();
                                break;
                            case 8:
                                message.sigAlgorithm = reader.string();
                                break;
                            case 9:
                                message.shardId = reader.string();
                                break;
                            case 10:
                                message.extraBytes = reader.bytes();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    BlockMessage.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    BlockMessage.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.blockHash != null && message.hasOwnProperty("blockHash"))
                            if (!(message.blockHash && typeof message.blockHash.length === "number" || $util.isString(message.blockHash)))
                                return "blockHash: buffer expected";
                        if (message.header != null && message.hasOwnProperty("header")) {
                            var error = $root.coop.rchain.casper.protocol.Header.verify(message.header);
                            if (error)
                                return "header." + error;
                        }
                        if (message.body != null && message.hasOwnProperty("body")) {
                            var error = $root.coop.rchain.casper.protocol.Body.verify(message.body);
                            if (error)
                                return "body." + error;
                        }
                        if (message.justifications != null && message.hasOwnProperty("justifications")) {
                            if (!Array.isArray(message.justifications))
                                return "justifications: array expected";
                            for (var i = 0; i < message.justifications.length; ++i) {
                                var error = $root.coop.rchain.casper.protocol.Justification.verify(message.justifications[i]);
                                if (error)
                                    return "justifications." + error;
                            }
                        }
                        if (message.sender != null && message.hasOwnProperty("sender"))
                            if (!(message.sender && typeof message.sender.length === "number" || $util.isString(message.sender)))
                                return "sender: buffer expected";
                        if (message.seqNum != null && message.hasOwnProperty("seqNum"))
                            if (!$util.isInteger(message.seqNum))
                                return "seqNum: integer expected";
                        if (message.sig != null && message.hasOwnProperty("sig"))
                            if (!(message.sig && typeof message.sig.length === "number" || $util.isString(message.sig)))
                                return "sig: buffer expected";
                        if (message.sigAlgorithm != null && message.hasOwnProperty("sigAlgorithm"))
                            if (!$util.isString(message.sigAlgorithm))
                                return "sigAlgorithm: string expected";
                        if (message.shardId != null && message.hasOwnProperty("shardId"))
                            if (!$util.isString(message.shardId))
                                return "shardId: string expected";
                        if (message.extraBytes != null && message.hasOwnProperty("extraBytes"))
                            if (!(message.extraBytes && typeof message.extraBytes.length === "number" || $util.isString(message.extraBytes)))
                                return "extraBytes: buffer expected";
                        return null;
                    };

                    BlockMessage.fromObject = function fromObject(object) {
                        if (object instanceof $root.coop.rchain.casper.protocol.BlockMessage)
                            return object;
                        var message = new $root.coop.rchain.casper.protocol.BlockMessage();
                        if (object.blockHash != null)
                            if (typeof object.blockHash === "string")
                                $util.base64.decode(object.blockHash, message.blockHash = $util.newBuffer($util.base64.length(object.blockHash)), 0);
                            else if (object.blockHash.length)
                                message.blockHash = object.blockHash;
                        if (object.header != null) {
                            if (typeof object.header !== "object")
                                throw TypeError(".coop.rchain.casper.protocol.BlockMessage.header: object expected");
                            message.header = $root.coop.rchain.casper.protocol.Header.fromObject(object.header);
                        }
                        if (object.body != null) {
                            if (typeof object.body !== "object")
                                throw TypeError(".coop.rchain.casper.protocol.BlockMessage.body: object expected");
                            message.body = $root.coop.rchain.casper.protocol.Body.fromObject(object.body);
                        }
                        if (object.justifications) {
                            if (!Array.isArray(object.justifications))
                                throw TypeError(".coop.rchain.casper.protocol.BlockMessage.justifications: array expected");
                            message.justifications = [];
                            for (var i = 0; i < object.justifications.length; ++i) {
                                if (typeof object.justifications[i] !== "object")
                                    throw TypeError(".coop.rchain.casper.protocol.BlockMessage.justifications: object expected");
                                message.justifications[i] = $root.coop.rchain.casper.protocol.Justification.fromObject(object.justifications[i]);
                            }
                        }
                        if (object.sender != null)
                            if (typeof object.sender === "string")
                                $util.base64.decode(object.sender, message.sender = $util.newBuffer($util.base64.length(object.sender)), 0);
                            else if (object.sender.length)
                                message.sender = object.sender;
                        if (object.seqNum != null)
                            message.seqNum = object.seqNum | 0;
                        if (object.sig != null)
                            if (typeof object.sig === "string")
                                $util.base64.decode(object.sig, message.sig = $util.newBuffer($util.base64.length(object.sig)), 0);
                            else if (object.sig.length)
                                message.sig = object.sig;
                        if (object.sigAlgorithm != null)
                            message.sigAlgorithm = String(object.sigAlgorithm);
                        if (object.shardId != null)
                            message.shardId = String(object.shardId);
                        if (object.extraBytes != null)
                            if (typeof object.extraBytes === "string")
                                $util.base64.decode(object.extraBytes, message.extraBytes = $util.newBuffer($util.base64.length(object.extraBytes)), 0);
                            else if (object.extraBytes.length)
                                message.extraBytes = object.extraBytes;
                        return message;
                    };

                    BlockMessage.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.justifications = [];
                        if (options.defaults) {
                            if (options.bytes === String)
                                object.blockHash = "";
                            else {
                                object.blockHash = [];
                                if (options.bytes !== Array)
                                    object.blockHash = $util.newBuffer(object.blockHash);
                            }
                            object.header = null;
                            object.body = null;
                            if (options.bytes === String)
                                object.sender = "";
                            else {
                                object.sender = [];
                                if (options.bytes !== Array)
                                    object.sender = $util.newBuffer(object.sender);
                            }
                            object.seqNum = 0;
                            if (options.bytes === String)
                                object.sig = "";
                            else {
                                object.sig = [];
                                if (options.bytes !== Array)
                                    object.sig = $util.newBuffer(object.sig);
                            }
                            object.sigAlgorithm = "";
                            object.shardId = "";
                            if (options.bytes === String)
                                object.extraBytes = "";
                            else {
                                object.extraBytes = [];
                                if (options.bytes !== Array)
                                    object.extraBytes = $util.newBuffer(object.extraBytes);
                            }
                        }
                        if (message.blockHash != null && message.hasOwnProperty("blockHash"))
                            object.blockHash = options.bytes === String ? $util.base64.encode(message.blockHash, 0, message.blockHash.length) : options.bytes === Array ? Array.prototype.slice.call(message.blockHash) : message.blockHash;
                        if (message.header != null && message.hasOwnProperty("header"))
                            object.header = $root.coop.rchain.casper.protocol.Header.toObject(message.header, options);
                        if (message.body != null && message.hasOwnProperty("body"))
                            object.body = $root.coop.rchain.casper.protocol.Body.toObject(message.body, options);
                        if (message.justifications && message.justifications.length) {
                            object.justifications = [];
                            for (var j = 0; j < message.justifications.length; ++j)
                                object.justifications[j] = $root.coop.rchain.casper.protocol.Justification.toObject(message.justifications[j], options);
                        }
                        if (message.sender != null && message.hasOwnProperty("sender"))
                            object.sender = options.bytes === String ? $util.base64.encode(message.sender, 0, message.sender.length) : options.bytes === Array ? Array.prototype.slice.call(message.sender) : message.sender;
                        if (message.seqNum != null && message.hasOwnProperty("seqNum"))
                            object.seqNum = message.seqNum;
                        if (message.sig != null && message.hasOwnProperty("sig"))
                            object.sig = options.bytes === String ? $util.base64.encode(message.sig, 0, message.sig.length) : options.bytes === Array ? Array.prototype.slice.call(message.sig) : message.sig;
                        if (message.sigAlgorithm != null && message.hasOwnProperty("sigAlgorithm"))
                            object.sigAlgorithm = message.sigAlgorithm;
                        if (message.shardId != null && message.hasOwnProperty("shardId"))
                            object.shardId = message.shardId;
                        if (message.extraBytes != null && message.hasOwnProperty("extraBytes"))
                            object.extraBytes = options.bytes === String ? $util.base64.encode(message.extraBytes, 0, message.extraBytes.length) : options.bytes === Array ? Array.prototype.slice.call(message.extraBytes) : message.extraBytes;
                        return object;
                    };

                    BlockMessage.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return BlockMessage;
                })();

                protocol.BlockMetadataInternal = (function() {

                    function BlockMetadataInternal(properties) {
                        this.parents = [];
                        this.justifications = [];
                        this.bonds = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    BlockMetadataInternal.prototype.blockHash = $util.newBuffer([]);
                    BlockMetadataInternal.prototype.parents = $util.emptyArray;
                    BlockMetadataInternal.prototype.sender = $util.newBuffer([]);
                    BlockMetadataInternal.prototype.justifications = $util.emptyArray;
                    BlockMetadataInternal.prototype.bonds = $util.emptyArray;
                    BlockMetadataInternal.prototype.blockNum = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
                    BlockMetadataInternal.prototype.seqNum = 0;
                    BlockMetadataInternal.prototype.invalid = false;

                    BlockMetadataInternal.create = function create(properties) {
                        return new BlockMetadataInternal(properties);
                    };

                    BlockMetadataInternal.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.blockHash != null && message.hasOwnProperty("blockHash"))
                            writer.uint32(10).bytes(message.blockHash);
                        if (message.parents != null && message.parents.length)
                            for (var i = 0; i < message.parents.length; ++i)
                                writer.uint32(18).bytes(message.parents[i]);
                        if (message.sender != null && message.hasOwnProperty("sender"))
                            writer.uint32(26).bytes(message.sender);
                        if (message.justifications != null && message.justifications.length)
                            for (var i = 0; i < message.justifications.length; ++i)
                                $root.coop.rchain.casper.protocol.Justification.encode(message.justifications[i], writer.uint32(34).fork()).ldelim();
                        if (message.bonds != null && message.bonds.length)
                            for (var i = 0; i < message.bonds.length; ++i)
                                $root.coop.rchain.casper.protocol.Bond.encode(message.bonds[i], writer.uint32(42).fork()).ldelim();
                        if (message.blockNum != null && message.hasOwnProperty("blockNum"))
                            writer.uint32(48).int64(message.blockNum);
                        if (message.seqNum != null && message.hasOwnProperty("seqNum"))
                            writer.uint32(56).int32(message.seqNum);
                        if (message.invalid != null && message.hasOwnProperty("invalid"))
                            writer.uint32(64).bool(message.invalid);
                        return writer;
                    };

                    BlockMetadataInternal.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    BlockMetadataInternal.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coop.rchain.casper.protocol.BlockMetadataInternal();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.blockHash = reader.bytes();
                                break;
                            case 2:
                                if (!(message.parents && message.parents.length))
                                    message.parents = [];
                                message.parents.push(reader.bytes());
                                break;
                            case 3:
                                message.sender = reader.bytes();
                                break;
                            case 4:
                                if (!(message.justifications && message.justifications.length))
                                    message.justifications = [];
                                message.justifications.push($root.coop.rchain.casper.protocol.Justification.decode(reader, reader.uint32()));
                                break;
                            case 5:
                                if (!(message.bonds && message.bonds.length))
                                    message.bonds = [];
                                message.bonds.push($root.coop.rchain.casper.protocol.Bond.decode(reader, reader.uint32()));
                                break;
                            case 6:
                                message.blockNum = reader.int64();
                                break;
                            case 7:
                                message.seqNum = reader.int32();
                                break;
                            case 8:
                                message.invalid = reader.bool();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    BlockMetadataInternal.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    BlockMetadataInternal.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.blockHash != null && message.hasOwnProperty("blockHash"))
                            if (!(message.blockHash && typeof message.blockHash.length === "number" || $util.isString(message.blockHash)))
                                return "blockHash: buffer expected";
                        if (message.parents != null && message.hasOwnProperty("parents")) {
                            if (!Array.isArray(message.parents))
                                return "parents: array expected";
                            for (var i = 0; i < message.parents.length; ++i)
                                if (!(message.parents[i] && typeof message.parents[i].length === "number" || $util.isString(message.parents[i])))
                                    return "parents: buffer[] expected";
                        }
                        if (message.sender != null && message.hasOwnProperty("sender"))
                            if (!(message.sender && typeof message.sender.length === "number" || $util.isString(message.sender)))
                                return "sender: buffer expected";
                        if (message.justifications != null && message.hasOwnProperty("justifications")) {
                            if (!Array.isArray(message.justifications))
                                return "justifications: array expected";
                            for (var i = 0; i < message.justifications.length; ++i) {
                                var error = $root.coop.rchain.casper.protocol.Justification.verify(message.justifications[i]);
                                if (error)
                                    return "justifications." + error;
                            }
                        }
                        if (message.bonds != null && message.hasOwnProperty("bonds")) {
                            if (!Array.isArray(message.bonds))
                                return "bonds: array expected";
                            for (var i = 0; i < message.bonds.length; ++i) {
                                var error = $root.coop.rchain.casper.protocol.Bond.verify(message.bonds[i]);
                                if (error)
                                    return "bonds." + error;
                            }
                        }
                        if (message.blockNum != null && message.hasOwnProperty("blockNum"))
                            if (!$util.isInteger(message.blockNum) && !(message.blockNum && $util.isInteger(message.blockNum.low) && $util.isInteger(message.blockNum.high)))
                                return "blockNum: integer|Long expected";
                        if (message.seqNum != null && message.hasOwnProperty("seqNum"))
                            if (!$util.isInteger(message.seqNum))
                                return "seqNum: integer expected";
                        if (message.invalid != null && message.hasOwnProperty("invalid"))
                            if (typeof message.invalid !== "boolean")
                                return "invalid: boolean expected";
                        return null;
                    };

                    BlockMetadataInternal.fromObject = function fromObject(object) {
                        if (object instanceof $root.coop.rchain.casper.protocol.BlockMetadataInternal)
                            return object;
                        var message = new $root.coop.rchain.casper.protocol.BlockMetadataInternal();
                        if (object.blockHash != null)
                            if (typeof object.blockHash === "string")
                                $util.base64.decode(object.blockHash, message.blockHash = $util.newBuffer($util.base64.length(object.blockHash)), 0);
                            else if (object.blockHash.length)
                                message.blockHash = object.blockHash;
                        if (object.parents) {
                            if (!Array.isArray(object.parents))
                                throw TypeError(".coop.rchain.casper.protocol.BlockMetadataInternal.parents: array expected");
                            message.parents = [];
                            for (var i = 0; i < object.parents.length; ++i)
                                if (typeof object.parents[i] === "string")
                                    $util.base64.decode(object.parents[i], message.parents[i] = $util.newBuffer($util.base64.length(object.parents[i])), 0);
                                else if (object.parents[i].length)
                                    message.parents[i] = object.parents[i];
                        }
                        if (object.sender != null)
                            if (typeof object.sender === "string")
                                $util.base64.decode(object.sender, message.sender = $util.newBuffer($util.base64.length(object.sender)), 0);
                            else if (object.sender.length)
                                message.sender = object.sender;
                        if (object.justifications) {
                            if (!Array.isArray(object.justifications))
                                throw TypeError(".coop.rchain.casper.protocol.BlockMetadataInternal.justifications: array expected");
                            message.justifications = [];
                            for (var i = 0; i < object.justifications.length; ++i) {
                                if (typeof object.justifications[i] !== "object")
                                    throw TypeError(".coop.rchain.casper.protocol.BlockMetadataInternal.justifications: object expected");
                                message.justifications[i] = $root.coop.rchain.casper.protocol.Justification.fromObject(object.justifications[i]);
                            }
                        }
                        if (object.bonds) {
                            if (!Array.isArray(object.bonds))
                                throw TypeError(".coop.rchain.casper.protocol.BlockMetadataInternal.bonds: array expected");
                            message.bonds = [];
                            for (var i = 0; i < object.bonds.length; ++i) {
                                if (typeof object.bonds[i] !== "object")
                                    throw TypeError(".coop.rchain.casper.protocol.BlockMetadataInternal.bonds: object expected");
                                message.bonds[i] = $root.coop.rchain.casper.protocol.Bond.fromObject(object.bonds[i]);
                            }
                        }
                        if (object.blockNum != null)
                            if ($util.Long)
                                (message.blockNum = $util.Long.fromValue(object.blockNum)).unsigned = false;
                            else if (typeof object.blockNum === "string")
                                message.blockNum = parseInt(object.blockNum, 10);
                            else if (typeof object.blockNum === "number")
                                message.blockNum = object.blockNum;
                            else if (typeof object.blockNum === "object")
                                message.blockNum = new $util.LongBits(object.blockNum.low >>> 0, object.blockNum.high >>> 0).toNumber();
                        if (object.seqNum != null)
                            message.seqNum = object.seqNum | 0;
                        if (object.invalid != null)
                            message.invalid = Boolean(object.invalid);
                        return message;
                    };

                    BlockMetadataInternal.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults) {
                            object.parents = [];
                            object.justifications = [];
                            object.bonds = [];
                        }
                        if (options.defaults) {
                            if (options.bytes === String)
                                object.blockHash = "";
                            else {
                                object.blockHash = [];
                                if (options.bytes !== Array)
                                    object.blockHash = $util.newBuffer(object.blockHash);
                            }
                            if (options.bytes === String)
                                object.sender = "";
                            else {
                                object.sender = [];
                                if (options.bytes !== Array)
                                    object.sender = $util.newBuffer(object.sender);
                            }
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.blockNum = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.blockNum = options.longs === String ? "0" : 0;
                            object.seqNum = 0;
                            object.invalid = false;
                        }
                        if (message.blockHash != null && message.hasOwnProperty("blockHash"))
                            object.blockHash = options.bytes === String ? $util.base64.encode(message.blockHash, 0, message.blockHash.length) : options.bytes === Array ? Array.prototype.slice.call(message.blockHash) : message.blockHash;
                        if (message.parents && message.parents.length) {
                            object.parents = [];
                            for (var j = 0; j < message.parents.length; ++j)
                                object.parents[j] = options.bytes === String ? $util.base64.encode(message.parents[j], 0, message.parents[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.parents[j]) : message.parents[j];
                        }
                        if (message.sender != null && message.hasOwnProperty("sender"))
                            object.sender = options.bytes === String ? $util.base64.encode(message.sender, 0, message.sender.length) : options.bytes === Array ? Array.prototype.slice.call(message.sender) : message.sender;
                        if (message.justifications && message.justifications.length) {
                            object.justifications = [];
                            for (var j = 0; j < message.justifications.length; ++j)
                                object.justifications[j] = $root.coop.rchain.casper.protocol.Justification.toObject(message.justifications[j], options);
                        }
                        if (message.bonds && message.bonds.length) {
                            object.bonds = [];
                            for (var j = 0; j < message.bonds.length; ++j)
                                object.bonds[j] = $root.coop.rchain.casper.protocol.Bond.toObject(message.bonds[j], options);
                        }
                        if (message.blockNum != null && message.hasOwnProperty("blockNum"))
                            if (typeof message.blockNum === "number")
                                object.blockNum = options.longs === String ? String(message.blockNum) : message.blockNum;
                            else
                                object.blockNum = options.longs === String ? $util.Long.prototype.toString.call(message.blockNum) : options.longs === Number ? new $util.LongBits(message.blockNum.low >>> 0, message.blockNum.high >>> 0).toNumber() : message.blockNum;
                        if (message.seqNum != null && message.hasOwnProperty("seqNum"))
                            object.seqNum = message.seqNum;
                        if (message.invalid != null && message.hasOwnProperty("invalid"))
                            object.invalid = message.invalid;
                        return object;
                    };

                    BlockMetadataInternal.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return BlockMetadataInternal;
                })();

                protocol.Header = (function() {

                    function Header(properties) {
                        this.parentsHashList = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    Header.prototype.parentsHashList = $util.emptyArray;
                    Header.prototype.postStateHash = $util.newBuffer([]);
                    Header.prototype.deploysHash = $util.newBuffer([]);
                    Header.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
                    Header.prototype.version = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
                    Header.prototype.deployCount = 0;
                    Header.prototype.extraBytes = $util.newBuffer([]);

                    Header.create = function create(properties) {
                        return new Header(properties);
                    };

                    Header.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.parentsHashList != null && message.parentsHashList.length)
                            for (var i = 0; i < message.parentsHashList.length; ++i)
                                writer.uint32(10).bytes(message.parentsHashList[i]);
                        if (message.postStateHash != null && message.hasOwnProperty("postStateHash"))
                            writer.uint32(18).bytes(message.postStateHash);
                        if (message.deploysHash != null && message.hasOwnProperty("deploysHash"))
                            writer.uint32(26).bytes(message.deploysHash);
                        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                            writer.uint32(40).int64(message.timestamp);
                        if (message.version != null && message.hasOwnProperty("version"))
                            writer.uint32(48).int64(message.version);
                        if (message.deployCount != null && message.hasOwnProperty("deployCount"))
                            writer.uint32(56).int32(message.deployCount);
                        if (message.extraBytes != null && message.hasOwnProperty("extraBytes"))
                            writer.uint32(66).bytes(message.extraBytes);
                        return writer;
                    };

                    Header.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    Header.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coop.rchain.casper.protocol.Header();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.parentsHashList && message.parentsHashList.length))
                                    message.parentsHashList = [];
                                message.parentsHashList.push(reader.bytes());
                                break;
                            case 2:
                                message.postStateHash = reader.bytes();
                                break;
                            case 3:
                                message.deploysHash = reader.bytes();
                                break;
                            case 5:
                                message.timestamp = reader.int64();
                                break;
                            case 6:
                                message.version = reader.int64();
                                break;
                            case 7:
                                message.deployCount = reader.int32();
                                break;
                            case 8:
                                message.extraBytes = reader.bytes();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    Header.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    Header.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.parentsHashList != null && message.hasOwnProperty("parentsHashList")) {
                            if (!Array.isArray(message.parentsHashList))
                                return "parentsHashList: array expected";
                            for (var i = 0; i < message.parentsHashList.length; ++i)
                                if (!(message.parentsHashList[i] && typeof message.parentsHashList[i].length === "number" || $util.isString(message.parentsHashList[i])))
                                    return "parentsHashList: buffer[] expected";
                        }
                        if (message.postStateHash != null && message.hasOwnProperty("postStateHash"))
                            if (!(message.postStateHash && typeof message.postStateHash.length === "number" || $util.isString(message.postStateHash)))
                                return "postStateHash: buffer expected";
                        if (message.deploysHash != null && message.hasOwnProperty("deploysHash"))
                            if (!(message.deploysHash && typeof message.deploysHash.length === "number" || $util.isString(message.deploysHash)))
                                return "deploysHash: buffer expected";
                        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                            if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                                return "timestamp: integer|Long expected";
                        if (message.version != null && message.hasOwnProperty("version"))
                            if (!$util.isInteger(message.version) && !(message.version && $util.isInteger(message.version.low) && $util.isInteger(message.version.high)))
                                return "version: integer|Long expected";
                        if (message.deployCount != null && message.hasOwnProperty("deployCount"))
                            if (!$util.isInteger(message.deployCount))
                                return "deployCount: integer expected";
                        if (message.extraBytes != null && message.hasOwnProperty("extraBytes"))
                            if (!(message.extraBytes && typeof message.extraBytes.length === "number" || $util.isString(message.extraBytes)))
                                return "extraBytes: buffer expected";
                        return null;
                    };

                    Header.fromObject = function fromObject(object) {
                        if (object instanceof $root.coop.rchain.casper.protocol.Header)
                            return object;
                        var message = new $root.coop.rchain.casper.protocol.Header();
                        if (object.parentsHashList) {
                            if (!Array.isArray(object.parentsHashList))
                                throw TypeError(".coop.rchain.casper.protocol.Header.parentsHashList: array expected");
                            message.parentsHashList = [];
                            for (var i = 0; i < object.parentsHashList.length; ++i)
                                if (typeof object.parentsHashList[i] === "string")
                                    $util.base64.decode(object.parentsHashList[i], message.parentsHashList[i] = $util.newBuffer($util.base64.length(object.parentsHashList[i])), 0);
                                else if (object.parentsHashList[i].length)
                                    message.parentsHashList[i] = object.parentsHashList[i];
                        }
                        if (object.postStateHash != null)
                            if (typeof object.postStateHash === "string")
                                $util.base64.decode(object.postStateHash, message.postStateHash = $util.newBuffer($util.base64.length(object.postStateHash)), 0);
                            else if (object.postStateHash.length)
                                message.postStateHash = object.postStateHash;
                        if (object.deploysHash != null)
                            if (typeof object.deploysHash === "string")
                                $util.base64.decode(object.deploysHash, message.deploysHash = $util.newBuffer($util.base64.length(object.deploysHash)), 0);
                            else if (object.deploysHash.length)
                                message.deploysHash = object.deploysHash;
                        if (object.timestamp != null)
                            if ($util.Long)
                                (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                            else if (typeof object.timestamp === "string")
                                message.timestamp = parseInt(object.timestamp, 10);
                            else if (typeof object.timestamp === "number")
                                message.timestamp = object.timestamp;
                            else if (typeof object.timestamp === "object")
                                message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
                        if (object.version != null)
                            if ($util.Long)
                                (message.version = $util.Long.fromValue(object.version)).unsigned = false;
                            else if (typeof object.version === "string")
                                message.version = parseInt(object.version, 10);
                            else if (typeof object.version === "number")
                                message.version = object.version;
                            else if (typeof object.version === "object")
                                message.version = new $util.LongBits(object.version.low >>> 0, object.version.high >>> 0).toNumber();
                        if (object.deployCount != null)
                            message.deployCount = object.deployCount | 0;
                        if (object.extraBytes != null)
                            if (typeof object.extraBytes === "string")
                                $util.base64.decode(object.extraBytes, message.extraBytes = $util.newBuffer($util.base64.length(object.extraBytes)), 0);
                            else if (object.extraBytes.length)
                                message.extraBytes = object.extraBytes;
                        return message;
                    };

                    Header.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.parentsHashList = [];
                        if (options.defaults) {
                            if (options.bytes === String)
                                object.postStateHash = "";
                            else {
                                object.postStateHash = [];
                                if (options.bytes !== Array)
                                    object.postStateHash = $util.newBuffer(object.postStateHash);
                            }
                            if (options.bytes === String)
                                object.deploysHash = "";
                            else {
                                object.deploysHash = [];
                                if (options.bytes !== Array)
                                    object.deploysHash = $util.newBuffer(object.deploysHash);
                            }
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.timestamp = options.longs === String ? "0" : 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.version = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.version = options.longs === String ? "0" : 0;
                            object.deployCount = 0;
                            if (options.bytes === String)
                                object.extraBytes = "";
                            else {
                                object.extraBytes = [];
                                if (options.bytes !== Array)
                                    object.extraBytes = $util.newBuffer(object.extraBytes);
                            }
                        }
                        if (message.parentsHashList && message.parentsHashList.length) {
                            object.parentsHashList = [];
                            for (var j = 0; j < message.parentsHashList.length; ++j)
                                object.parentsHashList[j] = options.bytes === String ? $util.base64.encode(message.parentsHashList[j], 0, message.parentsHashList[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.parentsHashList[j]) : message.parentsHashList[j];
                        }
                        if (message.postStateHash != null && message.hasOwnProperty("postStateHash"))
                            object.postStateHash = options.bytes === String ? $util.base64.encode(message.postStateHash, 0, message.postStateHash.length) : options.bytes === Array ? Array.prototype.slice.call(message.postStateHash) : message.postStateHash;
                        if (message.deploysHash != null && message.hasOwnProperty("deploysHash"))
                            object.deploysHash = options.bytes === String ? $util.base64.encode(message.deploysHash, 0, message.deploysHash.length) : options.bytes === Array ? Array.prototype.slice.call(message.deploysHash) : message.deploysHash;
                        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                            if (typeof message.timestamp === "number")
                                object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                            else
                                object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
                        if (message.version != null && message.hasOwnProperty("version"))
                            if (typeof message.version === "number")
                                object.version = options.longs === String ? String(message.version) : message.version;
                            else
                                object.version = options.longs === String ? $util.Long.prototype.toString.call(message.version) : options.longs === Number ? new $util.LongBits(message.version.low >>> 0, message.version.high >>> 0).toNumber() : message.version;
                        if (message.deployCount != null && message.hasOwnProperty("deployCount"))
                            object.deployCount = message.deployCount;
                        if (message.extraBytes != null && message.hasOwnProperty("extraBytes"))
                            object.extraBytes = options.bytes === String ? $util.base64.encode(message.extraBytes, 0, message.extraBytes.length) : options.bytes === Array ? Array.prototype.slice.call(message.extraBytes) : message.extraBytes;
                        return object;
                    };

                    Header.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Header;
                })();

                protocol.DeployData = (function() {

                    function DeployData(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    DeployData.prototype.deployer = $util.newBuffer([]);
                    DeployData.prototype.term = "";
                    DeployData.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
                    DeployData.prototype.sig = $util.newBuffer([]);
                    DeployData.prototype.sigAlgorithm = "";
                    DeployData.prototype.phloPrice = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
                    DeployData.prototype.phloLimit = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
                    DeployData.prototype.validAfterBlockNumber = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    DeployData.create = function create(properties) {
                        return new DeployData(properties);
                    };

                    DeployData.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.deployer != null && message.hasOwnProperty("deployer"))
                            writer.uint32(10).bytes(message.deployer);
                        if (message.term != null && message.hasOwnProperty("term"))
                            writer.uint32(18).string(message.term);
                        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                            writer.uint32(24).int64(message.timestamp);
                        if (message.sig != null && message.hasOwnProperty("sig"))
                            writer.uint32(34).bytes(message.sig);
                        if (message.sigAlgorithm != null && message.hasOwnProperty("sigAlgorithm"))
                            writer.uint32(42).string(message.sigAlgorithm);
                        if (message.phloPrice != null && message.hasOwnProperty("phloPrice"))
                            writer.uint32(56).int64(message.phloPrice);
                        if (message.phloLimit != null && message.hasOwnProperty("phloLimit"))
                            writer.uint32(64).int64(message.phloLimit);
                        if (message.validAfterBlockNumber != null && message.hasOwnProperty("validAfterBlockNumber"))
                            writer.uint32(80).int64(message.validAfterBlockNumber);
                        return writer;
                    };

                    DeployData.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    DeployData.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coop.rchain.casper.protocol.DeployData();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.deployer = reader.bytes();
                                break;
                            case 2:
                                message.term = reader.string();
                                break;
                            case 3:
                                message.timestamp = reader.int64();
                                break;
                            case 4:
                                message.sig = reader.bytes();
                                break;
                            case 5:
                                message.sigAlgorithm = reader.string();
                                break;
                            case 7:
                                message.phloPrice = reader.int64();
                                break;
                            case 8:
                                message.phloLimit = reader.int64();
                                break;
                            case 10:
                                message.validAfterBlockNumber = reader.int64();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    DeployData.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    DeployData.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.deployer != null && message.hasOwnProperty("deployer"))
                            if (!(message.deployer && typeof message.deployer.length === "number" || $util.isString(message.deployer)))
                                return "deployer: buffer expected";
                        if (message.term != null && message.hasOwnProperty("term"))
                            if (!$util.isString(message.term))
                                return "term: string expected";
                        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                            if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                                return "timestamp: integer|Long expected";
                        if (message.sig != null && message.hasOwnProperty("sig"))
                            if (!(message.sig && typeof message.sig.length === "number" || $util.isString(message.sig)))
                                return "sig: buffer expected";
                        if (message.sigAlgorithm != null && message.hasOwnProperty("sigAlgorithm"))
                            if (!$util.isString(message.sigAlgorithm))
                                return "sigAlgorithm: string expected";
                        if (message.phloPrice != null && message.hasOwnProperty("phloPrice"))
                            if (!$util.isInteger(message.phloPrice) && !(message.phloPrice && $util.isInteger(message.phloPrice.low) && $util.isInteger(message.phloPrice.high)))
                                return "phloPrice: integer|Long expected";
                        if (message.phloLimit != null && message.hasOwnProperty("phloLimit"))
                            if (!$util.isInteger(message.phloLimit) && !(message.phloLimit && $util.isInteger(message.phloLimit.low) && $util.isInteger(message.phloLimit.high)))
                                return "phloLimit: integer|Long expected";
                        if (message.validAfterBlockNumber != null && message.hasOwnProperty("validAfterBlockNumber"))
                            if (!$util.isInteger(message.validAfterBlockNumber) && !(message.validAfterBlockNumber && $util.isInteger(message.validAfterBlockNumber.low) && $util.isInteger(message.validAfterBlockNumber.high)))
                                return "validAfterBlockNumber: integer|Long expected";
                        return null;
                    };

                    DeployData.fromObject = function fromObject(object) {
                        if (object instanceof $root.coop.rchain.casper.protocol.DeployData)
                            return object;
                        var message = new $root.coop.rchain.casper.protocol.DeployData();
                        if (object.deployer != null)
                            if (typeof object.deployer === "string")
                                $util.base64.decode(object.deployer, message.deployer = $util.newBuffer($util.base64.length(object.deployer)), 0);
                            else if (object.deployer.length)
                                message.deployer = object.deployer;
                        if (object.term != null)
                            message.term = String(object.term);
                        if (object.timestamp != null)
                            if ($util.Long)
                                (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                            else if (typeof object.timestamp === "string")
                                message.timestamp = parseInt(object.timestamp, 10);
                            else if (typeof object.timestamp === "number")
                                message.timestamp = object.timestamp;
                            else if (typeof object.timestamp === "object")
                                message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
                        if (object.sig != null)
                            if (typeof object.sig === "string")
                                $util.base64.decode(object.sig, message.sig = $util.newBuffer($util.base64.length(object.sig)), 0);
                            else if (object.sig.length)
                                message.sig = object.sig;
                        if (object.sigAlgorithm != null)
                            message.sigAlgorithm = String(object.sigAlgorithm);
                        if (object.phloPrice != null)
                            if ($util.Long)
                                (message.phloPrice = $util.Long.fromValue(object.phloPrice)).unsigned = false;
                            else if (typeof object.phloPrice === "string")
                                message.phloPrice = parseInt(object.phloPrice, 10);
                            else if (typeof object.phloPrice === "number")
                                message.phloPrice = object.phloPrice;
                            else if (typeof object.phloPrice === "object")
                                message.phloPrice = new $util.LongBits(object.phloPrice.low >>> 0, object.phloPrice.high >>> 0).toNumber();
                        if (object.phloLimit != null)
                            if ($util.Long)
                                (message.phloLimit = $util.Long.fromValue(object.phloLimit)).unsigned = false;
                            else if (typeof object.phloLimit === "string")
                                message.phloLimit = parseInt(object.phloLimit, 10);
                            else if (typeof object.phloLimit === "number")
                                message.phloLimit = object.phloLimit;
                            else if (typeof object.phloLimit === "object")
                                message.phloLimit = new $util.LongBits(object.phloLimit.low >>> 0, object.phloLimit.high >>> 0).toNumber();
                        if (object.validAfterBlockNumber != null)
                            if ($util.Long)
                                (message.validAfterBlockNumber = $util.Long.fromValue(object.validAfterBlockNumber)).unsigned = false;
                            else if (typeof object.validAfterBlockNumber === "string")
                                message.validAfterBlockNumber = parseInt(object.validAfterBlockNumber, 10);
                            else if (typeof object.validAfterBlockNumber === "number")
                                message.validAfterBlockNumber = object.validAfterBlockNumber;
                            else if (typeof object.validAfterBlockNumber === "object")
                                message.validAfterBlockNumber = new $util.LongBits(object.validAfterBlockNumber.low >>> 0, object.validAfterBlockNumber.high >>> 0).toNumber();
                        return message;
                    };

                    DeployData.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            if (options.bytes === String)
                                object.deployer = "";
                            else {
                                object.deployer = [];
                                if (options.bytes !== Array)
                                    object.deployer = $util.newBuffer(object.deployer);
                            }
                            object.term = "";
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.timestamp = options.longs === String ? "0" : 0;
                            if (options.bytes === String)
                                object.sig = "";
                            else {
                                object.sig = [];
                                if (options.bytes !== Array)
                                    object.sig = $util.newBuffer(object.sig);
                            }
                            object.sigAlgorithm = "";
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.phloPrice = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.phloPrice = options.longs === String ? "0" : 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.phloLimit = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.phloLimit = options.longs === String ? "0" : 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.validAfterBlockNumber = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.validAfterBlockNumber = options.longs === String ? "0" : 0;
                        }
                        if (message.deployer != null && message.hasOwnProperty("deployer"))
                            object.deployer = options.bytes === String ? $util.base64.encode(message.deployer, 0, message.deployer.length) : options.bytes === Array ? Array.prototype.slice.call(message.deployer) : message.deployer;
                        if (message.term != null && message.hasOwnProperty("term"))
                            object.term = message.term;
                        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                            if (typeof message.timestamp === "number")
                                object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                            else
                                object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
                        if (message.sig != null && message.hasOwnProperty("sig"))
                            object.sig = options.bytes === String ? $util.base64.encode(message.sig, 0, message.sig.length) : options.bytes === Array ? Array.prototype.slice.call(message.sig) : message.sig;
                        if (message.sigAlgorithm != null && message.hasOwnProperty("sigAlgorithm"))
                            object.sigAlgorithm = message.sigAlgorithm;
                        if (message.phloPrice != null && message.hasOwnProperty("phloPrice"))
                            if (typeof message.phloPrice === "number")
                                object.phloPrice = options.longs === String ? String(message.phloPrice) : message.phloPrice;
                            else
                                object.phloPrice = options.longs === String ? $util.Long.prototype.toString.call(message.phloPrice) : options.longs === Number ? new $util.LongBits(message.phloPrice.low >>> 0, message.phloPrice.high >>> 0).toNumber() : message.phloPrice;
                        if (message.phloLimit != null && message.hasOwnProperty("phloLimit"))
                            if (typeof message.phloLimit === "number")
                                object.phloLimit = options.longs === String ? String(message.phloLimit) : message.phloLimit;
                            else
                                object.phloLimit = options.longs === String ? $util.Long.prototype.toString.call(message.phloLimit) : options.longs === Number ? new $util.LongBits(message.phloLimit.low >>> 0, message.phloLimit.high >>> 0).toNumber() : message.phloLimit;
                        if (message.validAfterBlockNumber != null && message.hasOwnProperty("validAfterBlockNumber"))
                            if (typeof message.validAfterBlockNumber === "number")
                                object.validAfterBlockNumber = options.longs === String ? String(message.validAfterBlockNumber) : message.validAfterBlockNumber;
                            else
                                object.validAfterBlockNumber = options.longs === String ? $util.Long.prototype.toString.call(message.validAfterBlockNumber) : options.longs === Number ? new $util.LongBits(message.validAfterBlockNumber.low >>> 0, message.validAfterBlockNumber.high >>> 0).toNumber() : message.validAfterBlockNumber;
                        return object;
                    };

                    DeployData.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return DeployData;
                })();

                protocol.ProcessedDeploy = (function() {

                    function ProcessedDeploy(properties) {
                        this.deployLog = [];
                        this.paymentLog = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    ProcessedDeploy.prototype.deploy = null;
                    ProcessedDeploy.prototype.cost = null;
                    ProcessedDeploy.prototype.deployLog = $util.emptyArray;
                    ProcessedDeploy.prototype.paymentLog = $util.emptyArray;
                    ProcessedDeploy.prototype.errored = false;

                    ProcessedDeploy.create = function create(properties) {
                        return new ProcessedDeploy(properties);
                    };

                    ProcessedDeploy.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.deploy != null && message.hasOwnProperty("deploy"))
                            $root.coop.rchain.casper.protocol.DeployData.encode(message.deploy, writer.uint32(10).fork()).ldelim();
                        if (message.cost != null && message.hasOwnProperty("cost"))
                            $root.PCost.encode(message.cost, writer.uint32(18).fork()).ldelim();
                        if (message.deployLog != null && message.deployLog.length)
                            for (var i = 0; i < message.deployLog.length; ++i)
                                $root.coop.rchain.casper.protocol.Event.encode(message.deployLog[i], writer.uint32(26).fork()).ldelim();
                        if (message.paymentLog != null && message.paymentLog.length)
                            for (var i = 0; i < message.paymentLog.length; ++i)
                                $root.coop.rchain.casper.protocol.Event.encode(message.paymentLog[i], writer.uint32(34).fork()).ldelim();
                        if (message.errored != null && message.hasOwnProperty("errored"))
                            writer.uint32(40).bool(message.errored);
                        return writer;
                    };

                    ProcessedDeploy.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    ProcessedDeploy.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coop.rchain.casper.protocol.ProcessedDeploy();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.deploy = $root.coop.rchain.casper.protocol.DeployData.decode(reader, reader.uint32());
                                break;
                            case 2:
                                message.cost = $root.PCost.decode(reader, reader.uint32());
                                break;
                            case 3:
                                if (!(message.deployLog && message.deployLog.length))
                                    message.deployLog = [];
                                message.deployLog.push($root.coop.rchain.casper.protocol.Event.decode(reader, reader.uint32()));
                                break;
                            case 4:
                                if (!(message.paymentLog && message.paymentLog.length))
                                    message.paymentLog = [];
                                message.paymentLog.push($root.coop.rchain.casper.protocol.Event.decode(reader, reader.uint32()));
                                break;
                            case 5:
                                message.errored = reader.bool();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    ProcessedDeploy.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    ProcessedDeploy.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.deploy != null && message.hasOwnProperty("deploy")) {
                            var error = $root.coop.rchain.casper.protocol.DeployData.verify(message.deploy);
                            if (error)
                                return "deploy." + error;
                        }
                        if (message.cost != null && message.hasOwnProperty("cost")) {
                            var error = $root.PCost.verify(message.cost);
                            if (error)
                                return "cost." + error;
                        }
                        if (message.deployLog != null && message.hasOwnProperty("deployLog")) {
                            if (!Array.isArray(message.deployLog))
                                return "deployLog: array expected";
                            for (var i = 0; i < message.deployLog.length; ++i) {
                                var error = $root.coop.rchain.casper.protocol.Event.verify(message.deployLog[i]);
                                if (error)
                                    return "deployLog." + error;
                            }
                        }
                        if (message.paymentLog != null && message.hasOwnProperty("paymentLog")) {
                            if (!Array.isArray(message.paymentLog))
                                return "paymentLog: array expected";
                            for (var i = 0; i < message.paymentLog.length; ++i) {
                                var error = $root.coop.rchain.casper.protocol.Event.verify(message.paymentLog[i]);
                                if (error)
                                    return "paymentLog." + error;
                            }
                        }
                        if (message.errored != null && message.hasOwnProperty("errored"))
                            if (typeof message.errored !== "boolean")
                                return "errored: boolean expected";
                        return null;
                    };

                    ProcessedDeploy.fromObject = function fromObject(object) {
                        if (object instanceof $root.coop.rchain.casper.protocol.ProcessedDeploy)
                            return object;
                        var message = new $root.coop.rchain.casper.protocol.ProcessedDeploy();
                        if (object.deploy != null) {
                            if (typeof object.deploy !== "object")
                                throw TypeError(".coop.rchain.casper.protocol.ProcessedDeploy.deploy: object expected");
                            message.deploy = $root.coop.rchain.casper.protocol.DeployData.fromObject(object.deploy);
                        }
                        if (object.cost != null) {
                            if (typeof object.cost !== "object")
                                throw TypeError(".coop.rchain.casper.protocol.ProcessedDeploy.cost: object expected");
                            message.cost = $root.PCost.fromObject(object.cost);
                        }
                        if (object.deployLog) {
                            if (!Array.isArray(object.deployLog))
                                throw TypeError(".coop.rchain.casper.protocol.ProcessedDeploy.deployLog: array expected");
                            message.deployLog = [];
                            for (var i = 0; i < object.deployLog.length; ++i) {
                                if (typeof object.deployLog[i] !== "object")
                                    throw TypeError(".coop.rchain.casper.protocol.ProcessedDeploy.deployLog: object expected");
                                message.deployLog[i] = $root.coop.rchain.casper.protocol.Event.fromObject(object.deployLog[i]);
                            }
                        }
                        if (object.paymentLog) {
                            if (!Array.isArray(object.paymentLog))
                                throw TypeError(".coop.rchain.casper.protocol.ProcessedDeploy.paymentLog: array expected");
                            message.paymentLog = [];
                            for (var i = 0; i < object.paymentLog.length; ++i) {
                                if (typeof object.paymentLog[i] !== "object")
                                    throw TypeError(".coop.rchain.casper.protocol.ProcessedDeploy.paymentLog: object expected");
                                message.paymentLog[i] = $root.coop.rchain.casper.protocol.Event.fromObject(object.paymentLog[i]);
                            }
                        }
                        if (object.errored != null)
                            message.errored = Boolean(object.errored);
                        return message;
                    };

                    ProcessedDeploy.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults) {
                            object.deployLog = [];
                            object.paymentLog = [];
                        }
                        if (options.defaults) {
                            object.deploy = null;
                            object.cost = null;
                            object.errored = false;
                        }
                        if (message.deploy != null && message.hasOwnProperty("deploy"))
                            object.deploy = $root.coop.rchain.casper.protocol.DeployData.toObject(message.deploy, options);
                        if (message.cost != null && message.hasOwnProperty("cost"))
                            object.cost = $root.PCost.toObject(message.cost, options);
                        if (message.deployLog && message.deployLog.length) {
                            object.deployLog = [];
                            for (var j = 0; j < message.deployLog.length; ++j)
                                object.deployLog[j] = $root.coop.rchain.casper.protocol.Event.toObject(message.deployLog[j], options);
                        }
                        if (message.paymentLog && message.paymentLog.length) {
                            object.paymentLog = [];
                            for (var j = 0; j < message.paymentLog.length; ++j)
                                object.paymentLog[j] = $root.coop.rchain.casper.protocol.Event.toObject(message.paymentLog[j], options);
                        }
                        if (message.errored != null && message.hasOwnProperty("errored"))
                            object.errored = message.errored;
                        return object;
                    };

                    ProcessedDeploy.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return ProcessedDeploy;
                })();

                protocol.Body = (function() {

                    function Body(properties) {
                        this.deploys = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    Body.prototype.state = null;
                    Body.prototype.deploys = $util.emptyArray;
                    Body.prototype.extraBytes = $util.newBuffer([]);

                    Body.create = function create(properties) {
                        return new Body(properties);
                    };

                    Body.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.state != null && message.hasOwnProperty("state"))
                            $root.coop.rchain.casper.protocol.RChainState.encode(message.state, writer.uint32(10).fork()).ldelim();
                        if (message.deploys != null && message.deploys.length)
                            for (var i = 0; i < message.deploys.length; ++i)
                                $root.coop.rchain.casper.protocol.ProcessedDeploy.encode(message.deploys[i], writer.uint32(18).fork()).ldelim();
                        if (message.extraBytes != null && message.hasOwnProperty("extraBytes"))
                            writer.uint32(26).bytes(message.extraBytes);
                        return writer;
                    };

                    Body.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    Body.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coop.rchain.casper.protocol.Body();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.state = $root.coop.rchain.casper.protocol.RChainState.decode(reader, reader.uint32());
                                break;
                            case 2:
                                if (!(message.deploys && message.deploys.length))
                                    message.deploys = [];
                                message.deploys.push($root.coop.rchain.casper.protocol.ProcessedDeploy.decode(reader, reader.uint32()));
                                break;
                            case 3:
                                message.extraBytes = reader.bytes();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    Body.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    Body.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.state != null && message.hasOwnProperty("state")) {
                            var error = $root.coop.rchain.casper.protocol.RChainState.verify(message.state);
                            if (error)
                                return "state." + error;
                        }
                        if (message.deploys != null && message.hasOwnProperty("deploys")) {
                            if (!Array.isArray(message.deploys))
                                return "deploys: array expected";
                            for (var i = 0; i < message.deploys.length; ++i) {
                                var error = $root.coop.rchain.casper.protocol.ProcessedDeploy.verify(message.deploys[i]);
                                if (error)
                                    return "deploys." + error;
                            }
                        }
                        if (message.extraBytes != null && message.hasOwnProperty("extraBytes"))
                            if (!(message.extraBytes && typeof message.extraBytes.length === "number" || $util.isString(message.extraBytes)))
                                return "extraBytes: buffer expected";
                        return null;
                    };

                    Body.fromObject = function fromObject(object) {
                        if (object instanceof $root.coop.rchain.casper.protocol.Body)
                            return object;
                        var message = new $root.coop.rchain.casper.protocol.Body();
                        if (object.state != null) {
                            if (typeof object.state !== "object")
                                throw TypeError(".coop.rchain.casper.protocol.Body.state: object expected");
                            message.state = $root.coop.rchain.casper.protocol.RChainState.fromObject(object.state);
                        }
                        if (object.deploys) {
                            if (!Array.isArray(object.deploys))
                                throw TypeError(".coop.rchain.casper.protocol.Body.deploys: array expected");
                            message.deploys = [];
                            for (var i = 0; i < object.deploys.length; ++i) {
                                if (typeof object.deploys[i] !== "object")
                                    throw TypeError(".coop.rchain.casper.protocol.Body.deploys: object expected");
                                message.deploys[i] = $root.coop.rchain.casper.protocol.ProcessedDeploy.fromObject(object.deploys[i]);
                            }
                        }
                        if (object.extraBytes != null)
                            if (typeof object.extraBytes === "string")
                                $util.base64.decode(object.extraBytes, message.extraBytes = $util.newBuffer($util.base64.length(object.extraBytes)), 0);
                            else if (object.extraBytes.length)
                                message.extraBytes = object.extraBytes;
                        return message;
                    };

                    Body.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.deploys = [];
                        if (options.defaults) {
                            object.state = null;
                            if (options.bytes === String)
                                object.extraBytes = "";
                            else {
                                object.extraBytes = [];
                                if (options.bytes !== Array)
                                    object.extraBytes = $util.newBuffer(object.extraBytes);
                            }
                        }
                        if (message.state != null && message.hasOwnProperty("state"))
                            object.state = $root.coop.rchain.casper.protocol.RChainState.toObject(message.state, options);
                        if (message.deploys && message.deploys.length) {
                            object.deploys = [];
                            for (var j = 0; j < message.deploys.length; ++j)
                                object.deploys[j] = $root.coop.rchain.casper.protocol.ProcessedDeploy.toObject(message.deploys[j], options);
                        }
                        if (message.extraBytes != null && message.hasOwnProperty("extraBytes"))
                            object.extraBytes = options.bytes === String ? $util.base64.encode(message.extraBytes, 0, message.extraBytes.length) : options.bytes === Array ? Array.prototype.slice.call(message.extraBytes) : message.extraBytes;
                        return object;
                    };

                    Body.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Body;
                })();

                protocol.Justification = (function() {

                    function Justification(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    Justification.prototype.validator = $util.newBuffer([]);
                    Justification.prototype.latestBlockHash = $util.newBuffer([]);

                    Justification.create = function create(properties) {
                        return new Justification(properties);
                    };

                    Justification.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.validator != null && message.hasOwnProperty("validator"))
                            writer.uint32(10).bytes(message.validator);
                        if (message.latestBlockHash != null && message.hasOwnProperty("latestBlockHash"))
                            writer.uint32(18).bytes(message.latestBlockHash);
                        return writer;
                    };

                    Justification.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    Justification.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coop.rchain.casper.protocol.Justification();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.validator = reader.bytes();
                                break;
                            case 2:
                                message.latestBlockHash = reader.bytes();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    Justification.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    Justification.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.validator != null && message.hasOwnProperty("validator"))
                            if (!(message.validator && typeof message.validator.length === "number" || $util.isString(message.validator)))
                                return "validator: buffer expected";
                        if (message.latestBlockHash != null && message.hasOwnProperty("latestBlockHash"))
                            if (!(message.latestBlockHash && typeof message.latestBlockHash.length === "number" || $util.isString(message.latestBlockHash)))
                                return "latestBlockHash: buffer expected";
                        return null;
                    };

                    Justification.fromObject = function fromObject(object) {
                        if (object instanceof $root.coop.rchain.casper.protocol.Justification)
                            return object;
                        var message = new $root.coop.rchain.casper.protocol.Justification();
                        if (object.validator != null)
                            if (typeof object.validator === "string")
                                $util.base64.decode(object.validator, message.validator = $util.newBuffer($util.base64.length(object.validator)), 0);
                            else if (object.validator.length)
                                message.validator = object.validator;
                        if (object.latestBlockHash != null)
                            if (typeof object.latestBlockHash === "string")
                                $util.base64.decode(object.latestBlockHash, message.latestBlockHash = $util.newBuffer($util.base64.length(object.latestBlockHash)), 0);
                            else if (object.latestBlockHash.length)
                                message.latestBlockHash = object.latestBlockHash;
                        return message;
                    };

                    Justification.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            if (options.bytes === String)
                                object.validator = "";
                            else {
                                object.validator = [];
                                if (options.bytes !== Array)
                                    object.validator = $util.newBuffer(object.validator);
                            }
                            if (options.bytes === String)
                                object.latestBlockHash = "";
                            else {
                                object.latestBlockHash = [];
                                if (options.bytes !== Array)
                                    object.latestBlockHash = $util.newBuffer(object.latestBlockHash);
                            }
                        }
                        if (message.validator != null && message.hasOwnProperty("validator"))
                            object.validator = options.bytes === String ? $util.base64.encode(message.validator, 0, message.validator.length) : options.bytes === Array ? Array.prototype.slice.call(message.validator) : message.validator;
                        if (message.latestBlockHash != null && message.hasOwnProperty("latestBlockHash"))
                            object.latestBlockHash = options.bytes === String ? $util.base64.encode(message.latestBlockHash, 0, message.latestBlockHash.length) : options.bytes === Array ? Array.prototype.slice.call(message.latestBlockHash) : message.latestBlockHash;
                        return object;
                    };

                    Justification.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Justification;
                })();

                protocol.RChainState = (function() {

                    function RChainState(properties) {
                        this.bonds = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    RChainState.prototype.preStateHash = $util.newBuffer([]);
                    RChainState.prototype.postStateHash = $util.newBuffer([]);
                    RChainState.prototype.bonds = $util.emptyArray;
                    RChainState.prototype.blockNumber = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    RChainState.create = function create(properties) {
                        return new RChainState(properties);
                    };

                    RChainState.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.preStateHash != null && message.hasOwnProperty("preStateHash"))
                            writer.uint32(10).bytes(message.preStateHash);
                        if (message.postStateHash != null && message.hasOwnProperty("postStateHash"))
                            writer.uint32(18).bytes(message.postStateHash);
                        if (message.bonds != null && message.bonds.length)
                            for (var i = 0; i < message.bonds.length; ++i)
                                $root.coop.rchain.casper.protocol.Bond.encode(message.bonds[i], writer.uint32(26).fork()).ldelim();
                        if (message.blockNumber != null && message.hasOwnProperty("blockNumber"))
                            writer.uint32(32).int64(message.blockNumber);
                        return writer;
                    };

                    RChainState.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    RChainState.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coop.rchain.casper.protocol.RChainState();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.preStateHash = reader.bytes();
                                break;
                            case 2:
                                message.postStateHash = reader.bytes();
                                break;
                            case 3:
                                if (!(message.bonds && message.bonds.length))
                                    message.bonds = [];
                                message.bonds.push($root.coop.rchain.casper.protocol.Bond.decode(reader, reader.uint32()));
                                break;
                            case 4:
                                message.blockNumber = reader.int64();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    RChainState.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    RChainState.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.preStateHash != null && message.hasOwnProperty("preStateHash"))
                            if (!(message.preStateHash && typeof message.preStateHash.length === "number" || $util.isString(message.preStateHash)))
                                return "preStateHash: buffer expected";
                        if (message.postStateHash != null && message.hasOwnProperty("postStateHash"))
                            if (!(message.postStateHash && typeof message.postStateHash.length === "number" || $util.isString(message.postStateHash)))
                                return "postStateHash: buffer expected";
                        if (message.bonds != null && message.hasOwnProperty("bonds")) {
                            if (!Array.isArray(message.bonds))
                                return "bonds: array expected";
                            for (var i = 0; i < message.bonds.length; ++i) {
                                var error = $root.coop.rchain.casper.protocol.Bond.verify(message.bonds[i]);
                                if (error)
                                    return "bonds." + error;
                            }
                        }
                        if (message.blockNumber != null && message.hasOwnProperty("blockNumber"))
                            if (!$util.isInteger(message.blockNumber) && !(message.blockNumber && $util.isInteger(message.blockNumber.low) && $util.isInteger(message.blockNumber.high)))
                                return "blockNumber: integer|Long expected";
                        return null;
                    };

                    RChainState.fromObject = function fromObject(object) {
                        if (object instanceof $root.coop.rchain.casper.protocol.RChainState)
                            return object;
                        var message = new $root.coop.rchain.casper.protocol.RChainState();
                        if (object.preStateHash != null)
                            if (typeof object.preStateHash === "string")
                                $util.base64.decode(object.preStateHash, message.preStateHash = $util.newBuffer($util.base64.length(object.preStateHash)), 0);
                            else if (object.preStateHash.length)
                                message.preStateHash = object.preStateHash;
                        if (object.postStateHash != null)
                            if (typeof object.postStateHash === "string")
                                $util.base64.decode(object.postStateHash, message.postStateHash = $util.newBuffer($util.base64.length(object.postStateHash)), 0);
                            else if (object.postStateHash.length)
                                message.postStateHash = object.postStateHash;
                        if (object.bonds) {
                            if (!Array.isArray(object.bonds))
                                throw TypeError(".coop.rchain.casper.protocol.RChainState.bonds: array expected");
                            message.bonds = [];
                            for (var i = 0; i < object.bonds.length; ++i) {
                                if (typeof object.bonds[i] !== "object")
                                    throw TypeError(".coop.rchain.casper.protocol.RChainState.bonds: object expected");
                                message.bonds[i] = $root.coop.rchain.casper.protocol.Bond.fromObject(object.bonds[i]);
                            }
                        }
                        if (object.blockNumber != null)
                            if ($util.Long)
                                (message.blockNumber = $util.Long.fromValue(object.blockNumber)).unsigned = false;
                            else if (typeof object.blockNumber === "string")
                                message.blockNumber = parseInt(object.blockNumber, 10);
                            else if (typeof object.blockNumber === "number")
                                message.blockNumber = object.blockNumber;
                            else if (typeof object.blockNumber === "object")
                                message.blockNumber = new $util.LongBits(object.blockNumber.low >>> 0, object.blockNumber.high >>> 0).toNumber();
                        return message;
                    };

                    RChainState.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.bonds = [];
                        if (options.defaults) {
                            if (options.bytes === String)
                                object.preStateHash = "";
                            else {
                                object.preStateHash = [];
                                if (options.bytes !== Array)
                                    object.preStateHash = $util.newBuffer(object.preStateHash);
                            }
                            if (options.bytes === String)
                                object.postStateHash = "";
                            else {
                                object.postStateHash = [];
                                if (options.bytes !== Array)
                                    object.postStateHash = $util.newBuffer(object.postStateHash);
                            }
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.blockNumber = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.blockNumber = options.longs === String ? "0" : 0;
                        }
                        if (message.preStateHash != null && message.hasOwnProperty("preStateHash"))
                            object.preStateHash = options.bytes === String ? $util.base64.encode(message.preStateHash, 0, message.preStateHash.length) : options.bytes === Array ? Array.prototype.slice.call(message.preStateHash) : message.preStateHash;
                        if (message.postStateHash != null && message.hasOwnProperty("postStateHash"))
                            object.postStateHash = options.bytes === String ? $util.base64.encode(message.postStateHash, 0, message.postStateHash.length) : options.bytes === Array ? Array.prototype.slice.call(message.postStateHash) : message.postStateHash;
                        if (message.bonds && message.bonds.length) {
                            object.bonds = [];
                            for (var j = 0; j < message.bonds.length; ++j)
                                object.bonds[j] = $root.coop.rchain.casper.protocol.Bond.toObject(message.bonds[j], options);
                        }
                        if (message.blockNumber != null && message.hasOwnProperty("blockNumber"))
                            if (typeof message.blockNumber === "number")
                                object.blockNumber = options.longs === String ? String(message.blockNumber) : message.blockNumber;
                            else
                                object.blockNumber = options.longs === String ? $util.Long.prototype.toString.call(message.blockNumber) : options.longs === Number ? new $util.LongBits(message.blockNumber.low >>> 0, message.blockNumber.high >>> 0).toNumber() : message.blockNumber;
                        return object;
                    };

                    RChainState.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return RChainState;
                })();

                protocol.Event = (function() {

                    function Event(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    Event.prototype.produce = null;
                    Event.prototype.consume = null;
                    Event.prototype.comm = null;

                    var $oneOfFields;

                    Object.defineProperty(Event.prototype, "event_instance", {
                        get: $util.oneOfGetter($oneOfFields = ["produce", "consume", "comm"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    Event.create = function create(properties) {
                        return new Event(properties);
                    };

                    Event.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.produce != null && message.hasOwnProperty("produce"))
                            $root.coop.rchain.casper.protocol.ProduceEvent.encode(message.produce, writer.uint32(10).fork()).ldelim();
                        if (message.consume != null && message.hasOwnProperty("consume"))
                            $root.coop.rchain.casper.protocol.ConsumeEvent.encode(message.consume, writer.uint32(18).fork()).ldelim();
                        if (message.comm != null && message.hasOwnProperty("comm"))
                            $root.coop.rchain.casper.protocol.CommEvent.encode(message.comm, writer.uint32(26).fork()).ldelim();
                        return writer;
                    };

                    Event.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    Event.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coop.rchain.casper.protocol.Event();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.produce = $root.coop.rchain.casper.protocol.ProduceEvent.decode(reader, reader.uint32());
                                break;
                            case 2:
                                message.consume = $root.coop.rchain.casper.protocol.ConsumeEvent.decode(reader, reader.uint32());
                                break;
                            case 3:
                                message.comm = $root.coop.rchain.casper.protocol.CommEvent.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    Event.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    Event.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        var properties = {};
                        if (message.produce != null && message.hasOwnProperty("produce")) {
                            properties.event_instance = 1;
                            {
                                var error = $root.coop.rchain.casper.protocol.ProduceEvent.verify(message.produce);
                                if (error)
                                    return "produce." + error;
                            }
                        }
                        if (message.consume != null && message.hasOwnProperty("consume")) {
                            if (properties.event_instance === 1)
                                return "event_instance: multiple values";
                            properties.event_instance = 1;
                            {
                                var error = $root.coop.rchain.casper.protocol.ConsumeEvent.verify(message.consume);
                                if (error)
                                    return "consume." + error;
                            }
                        }
                        if (message.comm != null && message.hasOwnProperty("comm")) {
                            if (properties.event_instance === 1)
                                return "event_instance: multiple values";
                            properties.event_instance = 1;
                            {
                                var error = $root.coop.rchain.casper.protocol.CommEvent.verify(message.comm);
                                if (error)
                                    return "comm." + error;
                            }
                        }
                        return null;
                    };

                    Event.fromObject = function fromObject(object) {
                        if (object instanceof $root.coop.rchain.casper.protocol.Event)
                            return object;
                        var message = new $root.coop.rchain.casper.protocol.Event();
                        if (object.produce != null) {
                            if (typeof object.produce !== "object")
                                throw TypeError(".coop.rchain.casper.protocol.Event.produce: object expected");
                            message.produce = $root.coop.rchain.casper.protocol.ProduceEvent.fromObject(object.produce);
                        }
                        if (object.consume != null) {
                            if (typeof object.consume !== "object")
                                throw TypeError(".coop.rchain.casper.protocol.Event.consume: object expected");
                            message.consume = $root.coop.rchain.casper.protocol.ConsumeEvent.fromObject(object.consume);
                        }
                        if (object.comm != null) {
                            if (typeof object.comm !== "object")
                                throw TypeError(".coop.rchain.casper.protocol.Event.comm: object expected");
                            message.comm = $root.coop.rchain.casper.protocol.CommEvent.fromObject(object.comm);
                        }
                        return message;
                    };

                    Event.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (message.produce != null && message.hasOwnProperty("produce")) {
                            object.produce = $root.coop.rchain.casper.protocol.ProduceEvent.toObject(message.produce, options);
                            if (options.oneofs)
                                object.event_instance = "produce";
                        }
                        if (message.consume != null && message.hasOwnProperty("consume")) {
                            object.consume = $root.coop.rchain.casper.protocol.ConsumeEvent.toObject(message.consume, options);
                            if (options.oneofs)
                                object.event_instance = "consume";
                        }
                        if (message.comm != null && message.hasOwnProperty("comm")) {
                            object.comm = $root.coop.rchain.casper.protocol.CommEvent.toObject(message.comm, options);
                            if (options.oneofs)
                                object.event_instance = "comm";
                        }
                        return object;
                    };

                    Event.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Event;
                })();

                protocol.ProduceEvent = (function() {

                    function ProduceEvent(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    ProduceEvent.prototype.channelsHash = $util.newBuffer([]);
                    ProduceEvent.prototype.hash = $util.newBuffer([]);
                    ProduceEvent.prototype.persistent = false;
                    ProduceEvent.prototype.sequenceNumber = 0;

                    ProduceEvent.create = function create(properties) {
                        return new ProduceEvent(properties);
                    };

                    ProduceEvent.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.channelsHash != null && message.hasOwnProperty("channelsHash"))
                            writer.uint32(10).bytes(message.channelsHash);
                        if (message.hash != null && message.hasOwnProperty("hash"))
                            writer.uint32(18).bytes(message.hash);
                        if (message.persistent != null && message.hasOwnProperty("persistent"))
                            writer.uint32(24).bool(message.persistent);
                        if (message.sequenceNumber != null && message.hasOwnProperty("sequenceNumber"))
                            writer.uint32(32).int32(message.sequenceNumber);
                        return writer;
                    };

                    ProduceEvent.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    ProduceEvent.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coop.rchain.casper.protocol.ProduceEvent();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.channelsHash = reader.bytes();
                                break;
                            case 2:
                                message.hash = reader.bytes();
                                break;
                            case 3:
                                message.persistent = reader.bool();
                                break;
                            case 4:
                                message.sequenceNumber = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    ProduceEvent.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    ProduceEvent.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.channelsHash != null && message.hasOwnProperty("channelsHash"))
                            if (!(message.channelsHash && typeof message.channelsHash.length === "number" || $util.isString(message.channelsHash)))
                                return "channelsHash: buffer expected";
                        if (message.hash != null && message.hasOwnProperty("hash"))
                            if (!(message.hash && typeof message.hash.length === "number" || $util.isString(message.hash)))
                                return "hash: buffer expected";
                        if (message.persistent != null && message.hasOwnProperty("persistent"))
                            if (typeof message.persistent !== "boolean")
                                return "persistent: boolean expected";
                        if (message.sequenceNumber != null && message.hasOwnProperty("sequenceNumber"))
                            if (!$util.isInteger(message.sequenceNumber))
                                return "sequenceNumber: integer expected";
                        return null;
                    };

                    ProduceEvent.fromObject = function fromObject(object) {
                        if (object instanceof $root.coop.rchain.casper.protocol.ProduceEvent)
                            return object;
                        var message = new $root.coop.rchain.casper.protocol.ProduceEvent();
                        if (object.channelsHash != null)
                            if (typeof object.channelsHash === "string")
                                $util.base64.decode(object.channelsHash, message.channelsHash = $util.newBuffer($util.base64.length(object.channelsHash)), 0);
                            else if (object.channelsHash.length)
                                message.channelsHash = object.channelsHash;
                        if (object.hash != null)
                            if (typeof object.hash === "string")
                                $util.base64.decode(object.hash, message.hash = $util.newBuffer($util.base64.length(object.hash)), 0);
                            else if (object.hash.length)
                                message.hash = object.hash;
                        if (object.persistent != null)
                            message.persistent = Boolean(object.persistent);
                        if (object.sequenceNumber != null)
                            message.sequenceNumber = object.sequenceNumber | 0;
                        return message;
                    };

                    ProduceEvent.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            if (options.bytes === String)
                                object.channelsHash = "";
                            else {
                                object.channelsHash = [];
                                if (options.bytes !== Array)
                                    object.channelsHash = $util.newBuffer(object.channelsHash);
                            }
                            if (options.bytes === String)
                                object.hash = "";
                            else {
                                object.hash = [];
                                if (options.bytes !== Array)
                                    object.hash = $util.newBuffer(object.hash);
                            }
                            object.persistent = false;
                            object.sequenceNumber = 0;
                        }
                        if (message.channelsHash != null && message.hasOwnProperty("channelsHash"))
                            object.channelsHash = options.bytes === String ? $util.base64.encode(message.channelsHash, 0, message.channelsHash.length) : options.bytes === Array ? Array.prototype.slice.call(message.channelsHash) : message.channelsHash;
                        if (message.hash != null && message.hasOwnProperty("hash"))
                            object.hash = options.bytes === String ? $util.base64.encode(message.hash, 0, message.hash.length) : options.bytes === Array ? Array.prototype.slice.call(message.hash) : message.hash;
                        if (message.persistent != null && message.hasOwnProperty("persistent"))
                            object.persistent = message.persistent;
                        if (message.sequenceNumber != null && message.hasOwnProperty("sequenceNumber"))
                            object.sequenceNumber = message.sequenceNumber;
                        return object;
                    };

                    ProduceEvent.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return ProduceEvent;
                })();

                protocol.ConsumeEvent = (function() {

                    function ConsumeEvent(properties) {
                        this.channelsHashes = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    ConsumeEvent.prototype.channelsHashes = $util.emptyArray;
                    ConsumeEvent.prototype.hash = $util.newBuffer([]);
                    ConsumeEvent.prototype.persistent = false;
                    ConsumeEvent.prototype.sequenceNumber = 0;

                    ConsumeEvent.create = function create(properties) {
                        return new ConsumeEvent(properties);
                    };

                    ConsumeEvent.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.channelsHashes != null && message.channelsHashes.length)
                            for (var i = 0; i < message.channelsHashes.length; ++i)
                                writer.uint32(10).bytes(message.channelsHashes[i]);
                        if (message.hash != null && message.hasOwnProperty("hash"))
                            writer.uint32(18).bytes(message.hash);
                        if (message.persistent != null && message.hasOwnProperty("persistent"))
                            writer.uint32(24).bool(message.persistent);
                        if (message.sequenceNumber != null && message.hasOwnProperty("sequenceNumber"))
                            writer.uint32(32).int32(message.sequenceNumber);
                        return writer;
                    };

                    ConsumeEvent.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    ConsumeEvent.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coop.rchain.casper.protocol.ConsumeEvent();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.channelsHashes && message.channelsHashes.length))
                                    message.channelsHashes = [];
                                message.channelsHashes.push(reader.bytes());
                                break;
                            case 2:
                                message.hash = reader.bytes();
                                break;
                            case 3:
                                message.persistent = reader.bool();
                                break;
                            case 4:
                                message.sequenceNumber = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    ConsumeEvent.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    ConsumeEvent.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.channelsHashes != null && message.hasOwnProperty("channelsHashes")) {
                            if (!Array.isArray(message.channelsHashes))
                                return "channelsHashes: array expected";
                            for (var i = 0; i < message.channelsHashes.length; ++i)
                                if (!(message.channelsHashes[i] && typeof message.channelsHashes[i].length === "number" || $util.isString(message.channelsHashes[i])))
                                    return "channelsHashes: buffer[] expected";
                        }
                        if (message.hash != null && message.hasOwnProperty("hash"))
                            if (!(message.hash && typeof message.hash.length === "number" || $util.isString(message.hash)))
                                return "hash: buffer expected";
                        if (message.persistent != null && message.hasOwnProperty("persistent"))
                            if (typeof message.persistent !== "boolean")
                                return "persistent: boolean expected";
                        if (message.sequenceNumber != null && message.hasOwnProperty("sequenceNumber"))
                            if (!$util.isInteger(message.sequenceNumber))
                                return "sequenceNumber: integer expected";
                        return null;
                    };

                    ConsumeEvent.fromObject = function fromObject(object) {
                        if (object instanceof $root.coop.rchain.casper.protocol.ConsumeEvent)
                            return object;
                        var message = new $root.coop.rchain.casper.protocol.ConsumeEvent();
                        if (object.channelsHashes) {
                            if (!Array.isArray(object.channelsHashes))
                                throw TypeError(".coop.rchain.casper.protocol.ConsumeEvent.channelsHashes: array expected");
                            message.channelsHashes = [];
                            for (var i = 0; i < object.channelsHashes.length; ++i)
                                if (typeof object.channelsHashes[i] === "string")
                                    $util.base64.decode(object.channelsHashes[i], message.channelsHashes[i] = $util.newBuffer($util.base64.length(object.channelsHashes[i])), 0);
                                else if (object.channelsHashes[i].length)
                                    message.channelsHashes[i] = object.channelsHashes[i];
                        }
                        if (object.hash != null)
                            if (typeof object.hash === "string")
                                $util.base64.decode(object.hash, message.hash = $util.newBuffer($util.base64.length(object.hash)), 0);
                            else if (object.hash.length)
                                message.hash = object.hash;
                        if (object.persistent != null)
                            message.persistent = Boolean(object.persistent);
                        if (object.sequenceNumber != null)
                            message.sequenceNumber = object.sequenceNumber | 0;
                        return message;
                    };

                    ConsumeEvent.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.channelsHashes = [];
                        if (options.defaults) {
                            if (options.bytes === String)
                                object.hash = "";
                            else {
                                object.hash = [];
                                if (options.bytes !== Array)
                                    object.hash = $util.newBuffer(object.hash);
                            }
                            object.persistent = false;
                            object.sequenceNumber = 0;
                        }
                        if (message.channelsHashes && message.channelsHashes.length) {
                            object.channelsHashes = [];
                            for (var j = 0; j < message.channelsHashes.length; ++j)
                                object.channelsHashes[j] = options.bytes === String ? $util.base64.encode(message.channelsHashes[j], 0, message.channelsHashes[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.channelsHashes[j]) : message.channelsHashes[j];
                        }
                        if (message.hash != null && message.hasOwnProperty("hash"))
                            object.hash = options.bytes === String ? $util.base64.encode(message.hash, 0, message.hash.length) : options.bytes === Array ? Array.prototype.slice.call(message.hash) : message.hash;
                        if (message.persistent != null && message.hasOwnProperty("persistent"))
                            object.persistent = message.persistent;
                        if (message.sequenceNumber != null && message.hasOwnProperty("sequenceNumber"))
                            object.sequenceNumber = message.sequenceNumber;
                        return object;
                    };

                    ConsumeEvent.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return ConsumeEvent;
                })();

                protocol.CommEvent = (function() {

                    function CommEvent(properties) {
                        this.produces = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    CommEvent.prototype.consume = null;
                    CommEvent.prototype.produces = $util.emptyArray;

                    CommEvent.create = function create(properties) {
                        return new CommEvent(properties);
                    };

                    CommEvent.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.consume != null && message.hasOwnProperty("consume"))
                            $root.coop.rchain.casper.protocol.ConsumeEvent.encode(message.consume, writer.uint32(10).fork()).ldelim();
                        if (message.produces != null && message.produces.length)
                            for (var i = 0; i < message.produces.length; ++i)
                                $root.coop.rchain.casper.protocol.ProduceEvent.encode(message.produces[i], writer.uint32(18).fork()).ldelim();
                        return writer;
                    };

                    CommEvent.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    CommEvent.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coop.rchain.casper.protocol.CommEvent();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.consume = $root.coop.rchain.casper.protocol.ConsumeEvent.decode(reader, reader.uint32());
                                break;
                            case 2:
                                if (!(message.produces && message.produces.length))
                                    message.produces = [];
                                message.produces.push($root.coop.rchain.casper.protocol.ProduceEvent.decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    CommEvent.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    CommEvent.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.consume != null && message.hasOwnProperty("consume")) {
                            var error = $root.coop.rchain.casper.protocol.ConsumeEvent.verify(message.consume);
                            if (error)
                                return "consume." + error;
                        }
                        if (message.produces != null && message.hasOwnProperty("produces")) {
                            if (!Array.isArray(message.produces))
                                return "produces: array expected";
                            for (var i = 0; i < message.produces.length; ++i) {
                                var error = $root.coop.rchain.casper.protocol.ProduceEvent.verify(message.produces[i]);
                                if (error)
                                    return "produces." + error;
                            }
                        }
                        return null;
                    };

                    CommEvent.fromObject = function fromObject(object) {
                        if (object instanceof $root.coop.rchain.casper.protocol.CommEvent)
                            return object;
                        var message = new $root.coop.rchain.casper.protocol.CommEvent();
                        if (object.consume != null) {
                            if (typeof object.consume !== "object")
                                throw TypeError(".coop.rchain.casper.protocol.CommEvent.consume: object expected");
                            message.consume = $root.coop.rchain.casper.protocol.ConsumeEvent.fromObject(object.consume);
                        }
                        if (object.produces) {
                            if (!Array.isArray(object.produces))
                                throw TypeError(".coop.rchain.casper.protocol.CommEvent.produces: array expected");
                            message.produces = [];
                            for (var i = 0; i < object.produces.length; ++i) {
                                if (typeof object.produces[i] !== "object")
                                    throw TypeError(".coop.rchain.casper.protocol.CommEvent.produces: object expected");
                                message.produces[i] = $root.coop.rchain.casper.protocol.ProduceEvent.fromObject(object.produces[i]);
                            }
                        }
                        return message;
                    };

                    CommEvent.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.produces = [];
                        if (options.defaults)
                            object.consume = null;
                        if (message.consume != null && message.hasOwnProperty("consume"))
                            object.consume = $root.coop.rchain.casper.protocol.ConsumeEvent.toObject(message.consume, options);
                        if (message.produces && message.produces.length) {
                            object.produces = [];
                            for (var j = 0; j < message.produces.length; ++j)
                                object.produces[j] = $root.coop.rchain.casper.protocol.ProduceEvent.toObject(message.produces[j], options);
                        }
                        return object;
                    };

                    CommEvent.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return CommEvent;
                })();

                protocol.Bond = (function() {

                    function Bond(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    Bond.prototype.validator = $util.newBuffer([]);
                    Bond.prototype.stake = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    Bond.create = function create(properties) {
                        return new Bond(properties);
                    };

                    Bond.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.validator != null && message.hasOwnProperty("validator"))
                            writer.uint32(10).bytes(message.validator);
                        if (message.stake != null && message.hasOwnProperty("stake"))
                            writer.uint32(16).int64(message.stake);
                        return writer;
                    };

                    Bond.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    Bond.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coop.rchain.casper.protocol.Bond();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.validator = reader.bytes();
                                break;
                            case 2:
                                message.stake = reader.int64();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    Bond.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    Bond.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.validator != null && message.hasOwnProperty("validator"))
                            if (!(message.validator && typeof message.validator.length === "number" || $util.isString(message.validator)))
                                return "validator: buffer expected";
                        if (message.stake != null && message.hasOwnProperty("stake"))
                            if (!$util.isInteger(message.stake) && !(message.stake && $util.isInteger(message.stake.low) && $util.isInteger(message.stake.high)))
                                return "stake: integer|Long expected";
                        return null;
                    };

                    Bond.fromObject = function fromObject(object) {
                        if (object instanceof $root.coop.rchain.casper.protocol.Bond)
                            return object;
                        var message = new $root.coop.rchain.casper.protocol.Bond();
                        if (object.validator != null)
                            if (typeof object.validator === "string")
                                $util.base64.decode(object.validator, message.validator = $util.newBuffer($util.base64.length(object.validator)), 0);
                            else if (object.validator.length)
                                message.validator = object.validator;
                        if (object.stake != null)
                            if ($util.Long)
                                (message.stake = $util.Long.fromValue(object.stake)).unsigned = false;
                            else if (typeof object.stake === "string")
                                message.stake = parseInt(object.stake, 10);
                            else if (typeof object.stake === "number")
                                message.stake = object.stake;
                            else if (typeof object.stake === "object")
                                message.stake = new $util.LongBits(object.stake.low >>> 0, object.stake.high >>> 0).toNumber();
                        return message;
                    };

                    Bond.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            if (options.bytes === String)
                                object.validator = "";
                            else {
                                object.validator = [];
                                if (options.bytes !== Array)
                                    object.validator = $util.newBuffer(object.validator);
                            }
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.stake = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.stake = options.longs === String ? "0" : 0;
                        }
                        if (message.validator != null && message.hasOwnProperty("validator"))
                            object.validator = options.bytes === String ? $util.base64.encode(message.validator, 0, message.validator.length) : options.bytes === Array ? Array.prototype.slice.call(message.validator) : message.validator;
                        if (message.stake != null && message.hasOwnProperty("stake"))
                            if (typeof message.stake === "number")
                                object.stake = options.longs === String ? String(message.stake) : message.stake;
                            else
                                object.stake = options.longs === String ? $util.Long.prototype.toString.call(message.stake) : options.longs === Number ? new $util.LongBits(message.stake.low >>> 0, message.stake.high >>> 0).toNumber() : message.stake;
                        return object;
                    };

                    Bond.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Bond;
                })();

                return protocol;
            })();

            return casper;
        })();

        return rchain;
    })();

    return coop;
})();

$root.Par = (function() {

    function Par(properties) {
        this.sends = [];
        this.receives = [];
        this.news = [];
        this.exprs = [];
        this.matches = [];
        this.unforgeables = [];
        this.bundles = [];
        this.connectives = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    Par.prototype.sends = $util.emptyArray;
    Par.prototype.receives = $util.emptyArray;
    Par.prototype.news = $util.emptyArray;
    Par.prototype.exprs = $util.emptyArray;
    Par.prototype.matches = $util.emptyArray;
    Par.prototype.unforgeables = $util.emptyArray;
    Par.prototype.bundles = $util.emptyArray;
    Par.prototype.connectives = $util.emptyArray;
    Par.prototype.locallyFree = $util.newBuffer([]);
    Par.prototype.connective_used = false;

    Par.create = function create(properties) {
        return new Par(properties);
    };

    Par.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.sends != null && message.sends.length)
            for (var i = 0; i < message.sends.length; ++i)
                $root.Send.encode(message.sends[i], writer.uint32(10).fork()).ldelim();
        if (message.receives != null && message.receives.length)
            for (var i = 0; i < message.receives.length; ++i)
                $root.Receive.encode(message.receives[i], writer.uint32(18).fork()).ldelim();
        if (message.news != null && message.news.length)
            for (var i = 0; i < message.news.length; ++i)
                $root.New.encode(message.news[i], writer.uint32(34).fork()).ldelim();
        if (message.exprs != null && message.exprs.length)
            for (var i = 0; i < message.exprs.length; ++i)
                $root.Expr.encode(message.exprs[i], writer.uint32(42).fork()).ldelim();
        if (message.matches != null && message.matches.length)
            for (var i = 0; i < message.matches.length; ++i)
                $root.Match.encode(message.matches[i], writer.uint32(50).fork()).ldelim();
        if (message.unforgeables != null && message.unforgeables.length)
            for (var i = 0; i < message.unforgeables.length; ++i)
                $root.GUnforgeable.encode(message.unforgeables[i], writer.uint32(58).fork()).ldelim();
        if (message.connectives != null && message.connectives.length)
            for (var i = 0; i < message.connectives.length; ++i)
                $root.Connective.encode(message.connectives[i], writer.uint32(66).fork()).ldelim();
        if (message.locallyFree != null && message.hasOwnProperty("locallyFree"))
            writer.uint32(74).bytes(message.locallyFree);
        if (message.connective_used != null && message.hasOwnProperty("connective_used"))
            writer.uint32(80).bool(message.connective_used);
        if (message.bundles != null && message.bundles.length)
            for (var i = 0; i < message.bundles.length; ++i)
                $root.Bundle.encode(message.bundles[i], writer.uint32(90).fork()).ldelim();
        return writer;
    };

    Par.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    Par.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Par();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.sends && message.sends.length))
                    message.sends = [];
                message.sends.push($root.Send.decode(reader, reader.uint32()));
                break;
            case 2:
                if (!(message.receives && message.receives.length))
                    message.receives = [];
                message.receives.push($root.Receive.decode(reader, reader.uint32()));
                break;
            case 4:
                if (!(message.news && message.news.length))
                    message.news = [];
                message.news.push($root.New.decode(reader, reader.uint32()));
                break;
            case 5:
                if (!(message.exprs && message.exprs.length))
                    message.exprs = [];
                message.exprs.push($root.Expr.decode(reader, reader.uint32()));
                break;
            case 6:
                if (!(message.matches && message.matches.length))
                    message.matches = [];
                message.matches.push($root.Match.decode(reader, reader.uint32()));
                break;
            case 7:
                if (!(message.unforgeables && message.unforgeables.length))
                    message.unforgeables = [];
                message.unforgeables.push($root.GUnforgeable.decode(reader, reader.uint32()));
                break;
            case 11:
                if (!(message.bundles && message.bundles.length))
                    message.bundles = [];
                message.bundles.push($root.Bundle.decode(reader, reader.uint32()));
                break;
            case 8:
                if (!(message.connectives && message.connectives.length))
                    message.connectives = [];
                message.connectives.push($root.Connective.decode(reader, reader.uint32()));
                break;
            case 9:
                message.locallyFree = reader.bytes();
                break;
            case 10:
                message.connective_used = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    Par.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    Par.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.sends != null && message.hasOwnProperty("sends")) {
            if (!Array.isArray(message.sends))
                return "sends: array expected";
            for (var i = 0; i < message.sends.length; ++i) {
                var error = $root.Send.verify(message.sends[i]);
                if (error)
                    return "sends." + error;
            }
        }
        if (message.receives != null && message.hasOwnProperty("receives")) {
            if (!Array.isArray(message.receives))
                return "receives: array expected";
            for (var i = 0; i < message.receives.length; ++i) {
                var error = $root.Receive.verify(message.receives[i]);
                if (error)
                    return "receives." + error;
            }
        }
        if (message.news != null && message.hasOwnProperty("news")) {
            if (!Array.isArray(message.news))
                return "news: array expected";
            for (var i = 0; i < message.news.length; ++i) {
                var error = $root.New.verify(message.news[i]);
                if (error)
                    return "news." + error;
            }
        }
        if (message.exprs != null && message.hasOwnProperty("exprs")) {
            if (!Array.isArray(message.exprs))
                return "exprs: array expected";
            for (var i = 0; i < message.exprs.length; ++i) {
                var error = $root.Expr.verify(message.exprs[i]);
                if (error)
                    return "exprs." + error;
            }
        }
        if (message.matches != null && message.hasOwnProperty("matches")) {
            if (!Array.isArray(message.matches))
                return "matches: array expected";
            for (var i = 0; i < message.matches.length; ++i) {
                var error = $root.Match.verify(message.matches[i]);
                if (error)
                    return "matches." + error;
            }
        }
        if (message.unforgeables != null && message.hasOwnProperty("unforgeables")) {
            if (!Array.isArray(message.unforgeables))
                return "unforgeables: array expected";
            for (var i = 0; i < message.unforgeables.length; ++i) {
                var error = $root.GUnforgeable.verify(message.unforgeables[i]);
                if (error)
                    return "unforgeables." + error;
            }
        }
        if (message.bundles != null && message.hasOwnProperty("bundles")) {
            if (!Array.isArray(message.bundles))
                return "bundles: array expected";
            for (var i = 0; i < message.bundles.length; ++i) {
                var error = $root.Bundle.verify(message.bundles[i]);
                if (error)
                    return "bundles." + error;
            }
        }
        if (message.connectives != null && message.hasOwnProperty("connectives")) {
            if (!Array.isArray(message.connectives))
                return "connectives: array expected";
            for (var i = 0; i < message.connectives.length; ++i) {
                var error = $root.Connective.verify(message.connectives[i]);
                if (error)
                    return "connectives." + error;
            }
        }
        if (message.locallyFree != null && message.hasOwnProperty("locallyFree"))
            if (!(message.locallyFree && typeof message.locallyFree.length === "number" || $util.isString(message.locallyFree)))
                return "locallyFree: buffer expected";
        if (message.connective_used != null && message.hasOwnProperty("connective_used"))
            if (typeof message.connective_used !== "boolean")
                return "connective_used: boolean expected";
        return null;
    };

    Par.fromObject = function fromObject(object) {
        if (object instanceof $root.Par)
            return object;
        var message = new $root.Par();
        if (object.sends) {
            if (!Array.isArray(object.sends))
                throw TypeError(".Par.sends: array expected");
            message.sends = [];
            for (var i = 0; i < object.sends.length; ++i) {
                if (typeof object.sends[i] !== "object")
                    throw TypeError(".Par.sends: object expected");
                message.sends[i] = $root.Send.fromObject(object.sends[i]);
            }
        }
        if (object.receives) {
            if (!Array.isArray(object.receives))
                throw TypeError(".Par.receives: array expected");
            message.receives = [];
            for (var i = 0; i < object.receives.length; ++i) {
                if (typeof object.receives[i] !== "object")
                    throw TypeError(".Par.receives: object expected");
                message.receives[i] = $root.Receive.fromObject(object.receives[i]);
            }
        }
        if (object.news) {
            if (!Array.isArray(object.news))
                throw TypeError(".Par.news: array expected");
            message.news = [];
            for (var i = 0; i < object.news.length; ++i) {
                if (typeof object.news[i] !== "object")
                    throw TypeError(".Par.news: object expected");
                message.news[i] = $root.New.fromObject(object.news[i]);
            }
        }
        if (object.exprs) {
            if (!Array.isArray(object.exprs))
                throw TypeError(".Par.exprs: array expected");
            message.exprs = [];
            for (var i = 0; i < object.exprs.length; ++i) {
                if (typeof object.exprs[i] !== "object")
                    throw TypeError(".Par.exprs: object expected");
                message.exprs[i] = $root.Expr.fromObject(object.exprs[i]);
            }
        }
        if (object.matches) {
            if (!Array.isArray(object.matches))
                throw TypeError(".Par.matches: array expected");
            message.matches = [];
            for (var i = 0; i < object.matches.length; ++i) {
                if (typeof object.matches[i] !== "object")
                    throw TypeError(".Par.matches: object expected");
                message.matches[i] = $root.Match.fromObject(object.matches[i]);
            }
        }
        if (object.unforgeables) {
            if (!Array.isArray(object.unforgeables))
                throw TypeError(".Par.unforgeables: array expected");
            message.unforgeables = [];
            for (var i = 0; i < object.unforgeables.length; ++i) {
                if (typeof object.unforgeables[i] !== "object")
                    throw TypeError(".Par.unforgeables: object expected");
                message.unforgeables[i] = $root.GUnforgeable.fromObject(object.unforgeables[i]);
            }
        }
        if (object.bundles) {
            if (!Array.isArray(object.bundles))
                throw TypeError(".Par.bundles: array expected");
            message.bundles = [];
            for (var i = 0; i < object.bundles.length; ++i) {
                if (typeof object.bundles[i] !== "object")
                    throw TypeError(".Par.bundles: object expected");
                message.bundles[i] = $root.Bundle.fromObject(object.bundles[i]);
            }
        }
        if (object.connectives) {
            if (!Array.isArray(object.connectives))
                throw TypeError(".Par.connectives: array expected");
            message.connectives = [];
            for (var i = 0; i < object.connectives.length; ++i) {
                if (typeof object.connectives[i] !== "object")
                    throw TypeError(".Par.connectives: object expected");
                message.connectives[i] = $root.Connective.fromObject(object.connectives[i]);
            }
        }
        if (object.locallyFree != null)
            if (typeof object.locallyFree === "string")
                $util.base64.decode(object.locallyFree, message.locallyFree = $util.newBuffer($util.base64.length(object.locallyFree)), 0);
            else if (object.locallyFree.length)
                message.locallyFree = object.locallyFree;
        if (object.connective_used != null)
            message.connective_used = Boolean(object.connective_used);
        return message;
    };

    Par.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.sends = [];
            object.receives = [];
            object.news = [];
            object.exprs = [];
            object.matches = [];
            object.unforgeables = [];
            object.connectives = [];
            object.bundles = [];
        }
        if (options.defaults) {
            if (options.bytes === String)
                object.locallyFree = "";
            else {
                object.locallyFree = [];
                if (options.bytes !== Array)
                    object.locallyFree = $util.newBuffer(object.locallyFree);
            }
            object.connective_used = false;
        }
        if (message.sends && message.sends.length) {
            object.sends = [];
            for (var j = 0; j < message.sends.length; ++j)
                object.sends[j] = $root.Send.toObject(message.sends[j], options);
        }
        if (message.receives && message.receives.length) {
            object.receives = [];
            for (var j = 0; j < message.receives.length; ++j)
                object.receives[j] = $root.Receive.toObject(message.receives[j], options);
        }
        if (message.news && message.news.length) {
            object.news = [];
            for (var j = 0; j < message.news.length; ++j)
                object.news[j] = $root.New.toObject(message.news[j], options);
        }
        if (message.exprs && message.exprs.length) {
            object.exprs = [];
            for (var j = 0; j < message.exprs.length; ++j)
                object.exprs[j] = $root.Expr.toObject(message.exprs[j], options);
        }
        if (message.matches && message.matches.length) {
            object.matches = [];
            for (var j = 0; j < message.matches.length; ++j)
                object.matches[j] = $root.Match.toObject(message.matches[j], options);
        }
        if (message.unforgeables && message.unforgeables.length) {
            object.unforgeables = [];
            for (var j = 0; j < message.unforgeables.length; ++j)
                object.unforgeables[j] = $root.GUnforgeable.toObject(message.unforgeables[j], options);
        }
        if (message.connectives && message.connectives.length) {
            object.connectives = [];
            for (var j = 0; j < message.connectives.length; ++j)
                object.connectives[j] = $root.Connective.toObject(message.connectives[j], options);
        }
        if (message.locallyFree != null && message.hasOwnProperty("locallyFree"))
            object.locallyFree = options.bytes === String ? $util.base64.encode(message.locallyFree, 0, message.locallyFree.length) : options.bytes === Array ? Array.prototype.slice.call(message.locallyFree) : message.locallyFree;
        if (message.connective_used != null && message.hasOwnProperty("connective_used"))
            object.connective_used = message.connective_used;
        if (message.bundles && message.bundles.length) {
            object.bundles = [];
            for (var j = 0; j < message.bundles.length; ++j)
                object.bundles[j] = $root.Bundle.toObject(message.bundles[j], options);
        }
        return object;
    };

    Par.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Par;
})();

$root.TaggedContinuation = (function() {

    function TaggedContinuation(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    TaggedContinuation.prototype.par_body = null;
    TaggedContinuation.prototype.scala_body_ref = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    var $oneOfFields;

    Object.defineProperty(TaggedContinuation.prototype, "tagged_cont", {
        get: $util.oneOfGetter($oneOfFields = ["par_body", "scala_body_ref"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    TaggedContinuation.create = function create(properties) {
        return new TaggedContinuation(properties);
    };

    TaggedContinuation.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.par_body != null && message.hasOwnProperty("par_body"))
            $root.ParWithRandom.encode(message.par_body, writer.uint32(10).fork()).ldelim();
        if (message.scala_body_ref != null && message.hasOwnProperty("scala_body_ref"))
            writer.uint32(16).int64(message.scala_body_ref);
        return writer;
    };

    TaggedContinuation.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    TaggedContinuation.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TaggedContinuation();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.par_body = $root.ParWithRandom.decode(reader, reader.uint32());
                break;
            case 2:
                message.scala_body_ref = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    TaggedContinuation.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    TaggedContinuation.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        var properties = {};
        if (message.par_body != null && message.hasOwnProperty("par_body")) {
            properties.tagged_cont = 1;
            {
                var error = $root.ParWithRandom.verify(message.par_body);
                if (error)
                    return "par_body." + error;
            }
        }
        if (message.scala_body_ref != null && message.hasOwnProperty("scala_body_ref")) {
            if (properties.tagged_cont === 1)
                return "tagged_cont: multiple values";
            properties.tagged_cont = 1;
            if (!$util.isInteger(message.scala_body_ref) && !(message.scala_body_ref && $util.isInteger(message.scala_body_ref.low) && $util.isInteger(message.scala_body_ref.high)))
                return "scala_body_ref: integer|Long expected";
        }
        return null;
    };

    TaggedContinuation.fromObject = function fromObject(object) {
        if (object instanceof $root.TaggedContinuation)
            return object;
        var message = new $root.TaggedContinuation();
        if (object.par_body != null) {
            if (typeof object.par_body !== "object")
                throw TypeError(".TaggedContinuation.par_body: object expected");
            message.par_body = $root.ParWithRandom.fromObject(object.par_body);
        }
        if (object.scala_body_ref != null)
            if ($util.Long)
                (message.scala_body_ref = $util.Long.fromValue(object.scala_body_ref)).unsigned = false;
            else if (typeof object.scala_body_ref === "string")
                message.scala_body_ref = parseInt(object.scala_body_ref, 10);
            else if (typeof object.scala_body_ref === "number")
                message.scala_body_ref = object.scala_body_ref;
            else if (typeof object.scala_body_ref === "object")
                message.scala_body_ref = new $util.LongBits(object.scala_body_ref.low >>> 0, object.scala_body_ref.high >>> 0).toNumber();
        return message;
    };

    TaggedContinuation.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (message.par_body != null && message.hasOwnProperty("par_body")) {
            object.par_body = $root.ParWithRandom.toObject(message.par_body, options);
            if (options.oneofs)
                object.tagged_cont = "par_body";
        }
        if (message.scala_body_ref != null && message.hasOwnProperty("scala_body_ref")) {
            if (typeof message.scala_body_ref === "number")
                object.scala_body_ref = options.longs === String ? String(message.scala_body_ref) : message.scala_body_ref;
            else
                object.scala_body_ref = options.longs === String ? $util.Long.prototype.toString.call(message.scala_body_ref) : options.longs === Number ? new $util.LongBits(message.scala_body_ref.low >>> 0, message.scala_body_ref.high >>> 0).toNumber() : message.scala_body_ref;
            if (options.oneofs)
                object.tagged_cont = "scala_body_ref";
        }
        return object;
    };

    TaggedContinuation.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return TaggedContinuation;
})();

$root.ParWithRandom = (function() {

    function ParWithRandom(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    ParWithRandom.prototype.body = null;
    ParWithRandom.prototype.randomState = $util.newBuffer([]);

    ParWithRandom.create = function create(properties) {
        return new ParWithRandom(properties);
    };

    ParWithRandom.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.body != null && message.hasOwnProperty("body"))
            $root.Par.encode(message.body, writer.uint32(10).fork()).ldelim();
        if (message.randomState != null && message.hasOwnProperty("randomState"))
            writer.uint32(18).bytes(message.randomState);
        return writer;
    };

    ParWithRandom.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    ParWithRandom.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ParWithRandom();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.body = $root.Par.decode(reader, reader.uint32());
                break;
            case 2:
                message.randomState = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    ParWithRandom.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    ParWithRandom.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.body != null && message.hasOwnProperty("body")) {
            var error = $root.Par.verify(message.body);
            if (error)
                return "body." + error;
        }
        if (message.randomState != null && message.hasOwnProperty("randomState"))
            if (!(message.randomState && typeof message.randomState.length === "number" || $util.isString(message.randomState)))
                return "randomState: buffer expected";
        return null;
    };

    ParWithRandom.fromObject = function fromObject(object) {
        if (object instanceof $root.ParWithRandom)
            return object;
        var message = new $root.ParWithRandom();
        if (object.body != null) {
            if (typeof object.body !== "object")
                throw TypeError(".ParWithRandom.body: object expected");
            message.body = $root.Par.fromObject(object.body);
        }
        if (object.randomState != null)
            if (typeof object.randomState === "string")
                $util.base64.decode(object.randomState, message.randomState = $util.newBuffer($util.base64.length(object.randomState)), 0);
            else if (object.randomState.length)
                message.randomState = object.randomState;
        return message;
    };

    ParWithRandom.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.body = null;
            if (options.bytes === String)
                object.randomState = "";
            else {
                object.randomState = [];
                if (options.bytes !== Array)
                    object.randomState = $util.newBuffer(object.randomState);
            }
        }
        if (message.body != null && message.hasOwnProperty("body"))
            object.body = $root.Par.toObject(message.body, options);
        if (message.randomState != null && message.hasOwnProperty("randomState"))
            object.randomState = options.bytes === String ? $util.base64.encode(message.randomState, 0, message.randomState.length) : options.bytes === Array ? Array.prototype.slice.call(message.randomState) : message.randomState;
        return object;
    };

    ParWithRandom.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ParWithRandom;
})();

$root.PCost = (function() {

    function PCost(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    PCost.prototype.cost = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    PCost.create = function create(properties) {
        return new PCost(properties);
    };

    PCost.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.cost != null && message.hasOwnProperty("cost"))
            writer.uint32(8).uint64(message.cost);
        return writer;
    };

    PCost.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    PCost.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PCost();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.cost = reader.uint64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    PCost.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    PCost.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.cost != null && message.hasOwnProperty("cost"))
            if (!$util.isInteger(message.cost) && !(message.cost && $util.isInteger(message.cost.low) && $util.isInteger(message.cost.high)))
                return "cost: integer|Long expected";
        return null;
    };

    PCost.fromObject = function fromObject(object) {
        if (object instanceof $root.PCost)
            return object;
        var message = new $root.PCost();
        if (object.cost != null)
            if ($util.Long)
                (message.cost = $util.Long.fromValue(object.cost)).unsigned = true;
            else if (typeof object.cost === "string")
                message.cost = parseInt(object.cost, 10);
            else if (typeof object.cost === "number")
                message.cost = object.cost;
            else if (typeof object.cost === "object")
                message.cost = new $util.LongBits(object.cost.low >>> 0, object.cost.high >>> 0).toNumber(true);
        return message;
    };

    PCost.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.cost = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.cost = options.longs === String ? "0" : 0;
        if (message.cost != null && message.hasOwnProperty("cost"))
            if (typeof message.cost === "number")
                object.cost = options.longs === String ? String(message.cost) : message.cost;
            else
                object.cost = options.longs === String ? $util.Long.prototype.toString.call(message.cost) : options.longs === Number ? new $util.LongBits(message.cost.low >>> 0, message.cost.high >>> 0).toNumber(true) : message.cost;
        return object;
    };

    PCost.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return PCost;
})();

$root.ListParWithRandom = (function() {

    function ListParWithRandom(properties) {
        this.pars = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    ListParWithRandom.prototype.pars = $util.emptyArray;
    ListParWithRandom.prototype.randomState = $util.newBuffer([]);

    ListParWithRandom.create = function create(properties) {
        return new ListParWithRandom(properties);
    };

    ListParWithRandom.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.pars != null && message.pars.length)
            for (var i = 0; i < message.pars.length; ++i)
                $root.Par.encode(message.pars[i], writer.uint32(10).fork()).ldelim();
        if (message.randomState != null && message.hasOwnProperty("randomState"))
            writer.uint32(18).bytes(message.randomState);
        return writer;
    };

    ListParWithRandom.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    ListParWithRandom.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ListParWithRandom();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.pars && message.pars.length))
                    message.pars = [];
                message.pars.push($root.Par.decode(reader, reader.uint32()));
                break;
            case 2:
                message.randomState = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    ListParWithRandom.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    ListParWithRandom.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.pars != null && message.hasOwnProperty("pars")) {
            if (!Array.isArray(message.pars))
                return "pars: array expected";
            for (var i = 0; i < message.pars.length; ++i) {
                var error = $root.Par.verify(message.pars[i]);
                if (error)
                    return "pars." + error;
            }
        }
        if (message.randomState != null && message.hasOwnProperty("randomState"))
            if (!(message.randomState && typeof message.randomState.length === "number" || $util.isString(message.randomState)))
                return "randomState: buffer expected";
        return null;
    };

    ListParWithRandom.fromObject = function fromObject(object) {
        if (object instanceof $root.ListParWithRandom)
            return object;
        var message = new $root.ListParWithRandom();
        if (object.pars) {
            if (!Array.isArray(object.pars))
                throw TypeError(".ListParWithRandom.pars: array expected");
            message.pars = [];
            for (var i = 0; i < object.pars.length; ++i) {
                if (typeof object.pars[i] !== "object")
                    throw TypeError(".ListParWithRandom.pars: object expected");
                message.pars[i] = $root.Par.fromObject(object.pars[i]);
            }
        }
        if (object.randomState != null)
            if (typeof object.randomState === "string")
                $util.base64.decode(object.randomState, message.randomState = $util.newBuffer($util.base64.length(object.randomState)), 0);
            else if (object.randomState.length)
                message.randomState = object.randomState;
        return message;
    };

    ListParWithRandom.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.pars = [];
        if (options.defaults)
            if (options.bytes === String)
                object.randomState = "";
            else {
                object.randomState = [];
                if (options.bytes !== Array)
                    object.randomState = $util.newBuffer(object.randomState);
            }
        if (message.pars && message.pars.length) {
            object.pars = [];
            for (var j = 0; j < message.pars.length; ++j)
                object.pars[j] = $root.Par.toObject(message.pars[j], options);
        }
        if (message.randomState != null && message.hasOwnProperty("randomState"))
            object.randomState = options.bytes === String ? $util.base64.encode(message.randomState, 0, message.randomState.length) : options.bytes === Array ? Array.prototype.slice.call(message.randomState) : message.randomState;
        return object;
    };

    ListParWithRandom.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ListParWithRandom;
})();

$root.Var = (function() {

    function Var(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    Var.prototype.bound_var = 0;
    Var.prototype.free_var = 0;
    Var.prototype.wildcard = null;

    var $oneOfFields;

    Object.defineProperty(Var.prototype, "var_instance", {
        get: $util.oneOfGetter($oneOfFields = ["bound_var", "free_var", "wildcard"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    Var.create = function create(properties) {
        return new Var(properties);
    };

    Var.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.bound_var != null && message.hasOwnProperty("bound_var"))
            writer.uint32(8).sint32(message.bound_var);
        if (message.free_var != null && message.hasOwnProperty("free_var"))
            writer.uint32(16).sint32(message.free_var);
        if (message.wildcard != null && message.hasOwnProperty("wildcard"))
            $root.Var.WildcardMsg.encode(message.wildcard, writer.uint32(26).fork()).ldelim();
        return writer;
    };

    Var.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    Var.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Var();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.bound_var = reader.sint32();
                break;
            case 2:
                message.free_var = reader.sint32();
                break;
            case 3:
                message.wildcard = $root.Var.WildcardMsg.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    Var.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    Var.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        var properties = {};
        if (message.bound_var != null && message.hasOwnProperty("bound_var")) {
            properties.var_instance = 1;
            if (!$util.isInteger(message.bound_var))
                return "bound_var: integer expected";
        }
        if (message.free_var != null && message.hasOwnProperty("free_var")) {
            if (properties.var_instance === 1)
                return "var_instance: multiple values";
            properties.var_instance = 1;
            if (!$util.isInteger(message.free_var))
                return "free_var: integer expected";
        }
        if (message.wildcard != null && message.hasOwnProperty("wildcard")) {
            if (properties.var_instance === 1)
                return "var_instance: multiple values";
            properties.var_instance = 1;
            {
                var error = $root.Var.WildcardMsg.verify(message.wildcard);
                if (error)
                    return "wildcard." + error;
            }
        }
        return null;
    };

    Var.fromObject = function fromObject(object) {
        if (object instanceof $root.Var)
            return object;
        var message = new $root.Var();
        if (object.bound_var != null)
            message.bound_var = object.bound_var | 0;
        if (object.free_var != null)
            message.free_var = object.free_var | 0;
        if (object.wildcard != null) {
            if (typeof object.wildcard !== "object")
                throw TypeError(".Var.wildcard: object expected");
            message.wildcard = $root.Var.WildcardMsg.fromObject(object.wildcard);
        }
        return message;
    };

    Var.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (message.bound_var != null && message.hasOwnProperty("bound_var")) {
            object.bound_var = message.bound_var;
            if (options.oneofs)
                object.var_instance = "bound_var";
        }
        if (message.free_var != null && message.hasOwnProperty("free_var")) {
            object.free_var = message.free_var;
            if (options.oneofs)
                object.var_instance = "free_var";
        }
        if (message.wildcard != null && message.hasOwnProperty("wildcard")) {
            object.wildcard = $root.Var.WildcardMsg.toObject(message.wildcard, options);
            if (options.oneofs)
                object.var_instance = "wildcard";
        }
        return object;
    };

    Var.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    Var.WildcardMsg = (function() {

        function WildcardMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        WildcardMsg.create = function create(properties) {
            return new WildcardMsg(properties);
        };

        WildcardMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        WildcardMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        WildcardMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Var.WildcardMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        WildcardMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        WildcardMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        WildcardMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.Var.WildcardMsg)
                return object;
            return new $root.Var.WildcardMsg();
        };

        WildcardMsg.toObject = function toObject() {
            return {};
        };

        WildcardMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return WildcardMsg;
    })();

    return Var;
})();

$root.Bundle = (function() {

    function Bundle(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    Bundle.prototype.body = null;
    Bundle.prototype.writeFlag = false;
    Bundle.prototype.readFlag = false;

    Bundle.create = function create(properties) {
        return new Bundle(properties);
    };

    Bundle.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.body != null && message.hasOwnProperty("body"))
            $root.Par.encode(message.body, writer.uint32(10).fork()).ldelim();
        if (message.writeFlag != null && message.hasOwnProperty("writeFlag"))
            writer.uint32(16).bool(message.writeFlag);
        if (message.readFlag != null && message.hasOwnProperty("readFlag"))
            writer.uint32(24).bool(message.readFlag);
        return writer;
    };

    Bundle.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    Bundle.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Bundle();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.body = $root.Par.decode(reader, reader.uint32());
                break;
            case 2:
                message.writeFlag = reader.bool();
                break;
            case 3:
                message.readFlag = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    Bundle.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    Bundle.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.body != null && message.hasOwnProperty("body")) {
            var error = $root.Par.verify(message.body);
            if (error)
                return "body." + error;
        }
        if (message.writeFlag != null && message.hasOwnProperty("writeFlag"))
            if (typeof message.writeFlag !== "boolean")
                return "writeFlag: boolean expected";
        if (message.readFlag != null && message.hasOwnProperty("readFlag"))
            if (typeof message.readFlag !== "boolean")
                return "readFlag: boolean expected";
        return null;
    };

    Bundle.fromObject = function fromObject(object) {
        if (object instanceof $root.Bundle)
            return object;
        var message = new $root.Bundle();
        if (object.body != null) {
            if (typeof object.body !== "object")
                throw TypeError(".Bundle.body: object expected");
            message.body = $root.Par.fromObject(object.body);
        }
        if (object.writeFlag != null)
            message.writeFlag = Boolean(object.writeFlag);
        if (object.readFlag != null)
            message.readFlag = Boolean(object.readFlag);
        return message;
    };

    Bundle.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.body = null;
            object.writeFlag = false;
            object.readFlag = false;
        }
        if (message.body != null && message.hasOwnProperty("body"))
            object.body = $root.Par.toObject(message.body, options);
        if (message.writeFlag != null && message.hasOwnProperty("writeFlag"))
            object.writeFlag = message.writeFlag;
        if (message.readFlag != null && message.hasOwnProperty("readFlag"))
            object.readFlag = message.readFlag;
        return object;
    };

    Bundle.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Bundle;
})();

$root.Send = (function() {

    function Send(properties) {
        this.data = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    Send.prototype.chan = null;
    Send.prototype.data = $util.emptyArray;
    Send.prototype.persistent = false;
    Send.prototype.locallyFree = $util.newBuffer([]);
    Send.prototype.connective_used = false;

    Send.create = function create(properties) {
        return new Send(properties);
    };

    Send.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.chan != null && message.hasOwnProperty("chan"))
            $root.Par.encode(message.chan, writer.uint32(10).fork()).ldelim();
        if (message.data != null && message.data.length)
            for (var i = 0; i < message.data.length; ++i)
                $root.Par.encode(message.data[i], writer.uint32(18).fork()).ldelim();
        if (message.persistent != null && message.hasOwnProperty("persistent"))
            writer.uint32(24).bool(message.persistent);
        if (message.locallyFree != null && message.hasOwnProperty("locallyFree"))
            writer.uint32(42).bytes(message.locallyFree);
        if (message.connective_used != null && message.hasOwnProperty("connective_used"))
            writer.uint32(48).bool(message.connective_used);
        return writer;
    };

    Send.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    Send.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Send();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.chan = $root.Par.decode(reader, reader.uint32());
                break;
            case 2:
                if (!(message.data && message.data.length))
                    message.data = [];
                message.data.push($root.Par.decode(reader, reader.uint32()));
                break;
            case 3:
                message.persistent = reader.bool();
                break;
            case 5:
                message.locallyFree = reader.bytes();
                break;
            case 6:
                message.connective_used = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    Send.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    Send.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.chan != null && message.hasOwnProperty("chan")) {
            var error = $root.Par.verify(message.chan);
            if (error)
                return "chan." + error;
        }
        if (message.data != null && message.hasOwnProperty("data")) {
            if (!Array.isArray(message.data))
                return "data: array expected";
            for (var i = 0; i < message.data.length; ++i) {
                var error = $root.Par.verify(message.data[i]);
                if (error)
                    return "data." + error;
            }
        }
        if (message.persistent != null && message.hasOwnProperty("persistent"))
            if (typeof message.persistent !== "boolean")
                return "persistent: boolean expected";
        if (message.locallyFree != null && message.hasOwnProperty("locallyFree"))
            if (!(message.locallyFree && typeof message.locallyFree.length === "number" || $util.isString(message.locallyFree)))
                return "locallyFree: buffer expected";
        if (message.connective_used != null && message.hasOwnProperty("connective_used"))
            if (typeof message.connective_used !== "boolean")
                return "connective_used: boolean expected";
        return null;
    };

    Send.fromObject = function fromObject(object) {
        if (object instanceof $root.Send)
            return object;
        var message = new $root.Send();
        if (object.chan != null) {
            if (typeof object.chan !== "object")
                throw TypeError(".Send.chan: object expected");
            message.chan = $root.Par.fromObject(object.chan);
        }
        if (object.data) {
            if (!Array.isArray(object.data))
                throw TypeError(".Send.data: array expected");
            message.data = [];
            for (var i = 0; i < object.data.length; ++i) {
                if (typeof object.data[i] !== "object")
                    throw TypeError(".Send.data: object expected");
                message.data[i] = $root.Par.fromObject(object.data[i]);
            }
        }
        if (object.persistent != null)
            message.persistent = Boolean(object.persistent);
        if (object.locallyFree != null)
            if (typeof object.locallyFree === "string")
                $util.base64.decode(object.locallyFree, message.locallyFree = $util.newBuffer($util.base64.length(object.locallyFree)), 0);
            else if (object.locallyFree.length)
                message.locallyFree = object.locallyFree;
        if (object.connective_used != null)
            message.connective_used = Boolean(object.connective_used);
        return message;
    };

    Send.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.data = [];
        if (options.defaults) {
            object.chan = null;
            object.persistent = false;
            if (options.bytes === String)
                object.locallyFree = "";
            else {
                object.locallyFree = [];
                if (options.bytes !== Array)
                    object.locallyFree = $util.newBuffer(object.locallyFree);
            }
            object.connective_used = false;
        }
        if (message.chan != null && message.hasOwnProperty("chan"))
            object.chan = $root.Par.toObject(message.chan, options);
        if (message.data && message.data.length) {
            object.data = [];
            for (var j = 0; j < message.data.length; ++j)
                object.data[j] = $root.Par.toObject(message.data[j], options);
        }
        if (message.persistent != null && message.hasOwnProperty("persistent"))
            object.persistent = message.persistent;
        if (message.locallyFree != null && message.hasOwnProperty("locallyFree"))
            object.locallyFree = options.bytes === String ? $util.base64.encode(message.locallyFree, 0, message.locallyFree.length) : options.bytes === Array ? Array.prototype.slice.call(message.locallyFree) : message.locallyFree;
        if (message.connective_used != null && message.hasOwnProperty("connective_used"))
            object.connective_used = message.connective_used;
        return object;
    };

    Send.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Send;
})();

$root.ReceiveBind = (function() {

    function ReceiveBind(properties) {
        this.patterns = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    ReceiveBind.prototype.patterns = $util.emptyArray;
    ReceiveBind.prototype.source = null;
    ReceiveBind.prototype.remainder = null;
    ReceiveBind.prototype.freeCount = 0;

    ReceiveBind.create = function create(properties) {
        return new ReceiveBind(properties);
    };

    ReceiveBind.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.patterns != null && message.patterns.length)
            for (var i = 0; i < message.patterns.length; ++i)
                $root.Par.encode(message.patterns[i], writer.uint32(10).fork()).ldelim();
        if (message.source != null && message.hasOwnProperty("source"))
            $root.Par.encode(message.source, writer.uint32(18).fork()).ldelim();
        if (message.remainder != null && message.hasOwnProperty("remainder"))
            $root.Var.encode(message.remainder, writer.uint32(26).fork()).ldelim();
        if (message.freeCount != null && message.hasOwnProperty("freeCount"))
            writer.uint32(32).int32(message.freeCount);
        return writer;
    };

    ReceiveBind.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    ReceiveBind.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReceiveBind();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.patterns && message.patterns.length))
                    message.patterns = [];
                message.patterns.push($root.Par.decode(reader, reader.uint32()));
                break;
            case 2:
                message.source = $root.Par.decode(reader, reader.uint32());
                break;
            case 3:
                message.remainder = $root.Var.decode(reader, reader.uint32());
                break;
            case 4:
                message.freeCount = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    ReceiveBind.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    ReceiveBind.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.patterns != null && message.hasOwnProperty("patterns")) {
            if (!Array.isArray(message.patterns))
                return "patterns: array expected";
            for (var i = 0; i < message.patterns.length; ++i) {
                var error = $root.Par.verify(message.patterns[i]);
                if (error)
                    return "patterns." + error;
            }
        }
        if (message.source != null && message.hasOwnProperty("source")) {
            var error = $root.Par.verify(message.source);
            if (error)
                return "source." + error;
        }
        if (message.remainder != null && message.hasOwnProperty("remainder")) {
            var error = $root.Var.verify(message.remainder);
            if (error)
                return "remainder." + error;
        }
        if (message.freeCount != null && message.hasOwnProperty("freeCount"))
            if (!$util.isInteger(message.freeCount))
                return "freeCount: integer expected";
        return null;
    };

    ReceiveBind.fromObject = function fromObject(object) {
        if (object instanceof $root.ReceiveBind)
            return object;
        var message = new $root.ReceiveBind();
        if (object.patterns) {
            if (!Array.isArray(object.patterns))
                throw TypeError(".ReceiveBind.patterns: array expected");
            message.patterns = [];
            for (var i = 0; i < object.patterns.length; ++i) {
                if (typeof object.patterns[i] !== "object")
                    throw TypeError(".ReceiveBind.patterns: object expected");
                message.patterns[i] = $root.Par.fromObject(object.patterns[i]);
            }
        }
        if (object.source != null) {
            if (typeof object.source !== "object")
                throw TypeError(".ReceiveBind.source: object expected");
            message.source = $root.Par.fromObject(object.source);
        }
        if (object.remainder != null) {
            if (typeof object.remainder !== "object")
                throw TypeError(".ReceiveBind.remainder: object expected");
            message.remainder = $root.Var.fromObject(object.remainder);
        }
        if (object.freeCount != null)
            message.freeCount = object.freeCount | 0;
        return message;
    };

    ReceiveBind.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.patterns = [];
        if (options.defaults) {
            object.source = null;
            object.remainder = null;
            object.freeCount = 0;
        }
        if (message.patterns && message.patterns.length) {
            object.patterns = [];
            for (var j = 0; j < message.patterns.length; ++j)
                object.patterns[j] = $root.Par.toObject(message.patterns[j], options);
        }
        if (message.source != null && message.hasOwnProperty("source"))
            object.source = $root.Par.toObject(message.source, options);
        if (message.remainder != null && message.hasOwnProperty("remainder"))
            object.remainder = $root.Var.toObject(message.remainder, options);
        if (message.freeCount != null && message.hasOwnProperty("freeCount"))
            object.freeCount = message.freeCount;
        return object;
    };

    ReceiveBind.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ReceiveBind;
})();

$root.BindPattern = (function() {

    function BindPattern(properties) {
        this.patterns = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    BindPattern.prototype.patterns = $util.emptyArray;
    BindPattern.prototype.remainder = null;
    BindPattern.prototype.freeCount = 0;

    BindPattern.create = function create(properties) {
        return new BindPattern(properties);
    };

    BindPattern.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.patterns != null && message.patterns.length)
            for (var i = 0; i < message.patterns.length; ++i)
                $root.Par.encode(message.patterns[i], writer.uint32(10).fork()).ldelim();
        if (message.remainder != null && message.hasOwnProperty("remainder"))
            $root.Var.encode(message.remainder, writer.uint32(18).fork()).ldelim();
        if (message.freeCount != null && message.hasOwnProperty("freeCount"))
            writer.uint32(24).int32(message.freeCount);
        return writer;
    };

    BindPattern.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    BindPattern.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.BindPattern();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.patterns && message.patterns.length))
                    message.patterns = [];
                message.patterns.push($root.Par.decode(reader, reader.uint32()));
                break;
            case 2:
                message.remainder = $root.Var.decode(reader, reader.uint32());
                break;
            case 3:
                message.freeCount = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    BindPattern.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    BindPattern.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.patterns != null && message.hasOwnProperty("patterns")) {
            if (!Array.isArray(message.patterns))
                return "patterns: array expected";
            for (var i = 0; i < message.patterns.length; ++i) {
                var error = $root.Par.verify(message.patterns[i]);
                if (error)
                    return "patterns." + error;
            }
        }
        if (message.remainder != null && message.hasOwnProperty("remainder")) {
            var error = $root.Var.verify(message.remainder);
            if (error)
                return "remainder." + error;
        }
        if (message.freeCount != null && message.hasOwnProperty("freeCount"))
            if (!$util.isInteger(message.freeCount))
                return "freeCount: integer expected";
        return null;
    };

    BindPattern.fromObject = function fromObject(object) {
        if (object instanceof $root.BindPattern)
            return object;
        var message = new $root.BindPattern();
        if (object.patterns) {
            if (!Array.isArray(object.patterns))
                throw TypeError(".BindPattern.patterns: array expected");
            message.patterns = [];
            for (var i = 0; i < object.patterns.length; ++i) {
                if (typeof object.patterns[i] !== "object")
                    throw TypeError(".BindPattern.patterns: object expected");
                message.patterns[i] = $root.Par.fromObject(object.patterns[i]);
            }
        }
        if (object.remainder != null) {
            if (typeof object.remainder !== "object")
                throw TypeError(".BindPattern.remainder: object expected");
            message.remainder = $root.Var.fromObject(object.remainder);
        }
        if (object.freeCount != null)
            message.freeCount = object.freeCount | 0;
        return message;
    };

    BindPattern.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.patterns = [];
        if (options.defaults) {
            object.remainder = null;
            object.freeCount = 0;
        }
        if (message.patterns && message.patterns.length) {
            object.patterns = [];
            for (var j = 0; j < message.patterns.length; ++j)
                object.patterns[j] = $root.Par.toObject(message.patterns[j], options);
        }
        if (message.remainder != null && message.hasOwnProperty("remainder"))
            object.remainder = $root.Var.toObject(message.remainder, options);
        if (message.freeCount != null && message.hasOwnProperty("freeCount"))
            object.freeCount = message.freeCount;
        return object;
    };

    BindPattern.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return BindPattern;
})();

$root.ListBindPatterns = (function() {

    function ListBindPatterns(properties) {
        this.patterns = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    ListBindPatterns.prototype.patterns = $util.emptyArray;

    ListBindPatterns.create = function create(properties) {
        return new ListBindPatterns(properties);
    };

    ListBindPatterns.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.patterns != null && message.patterns.length)
            for (var i = 0; i < message.patterns.length; ++i)
                $root.BindPattern.encode(message.patterns[i], writer.uint32(10).fork()).ldelim();
        return writer;
    };

    ListBindPatterns.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    ListBindPatterns.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ListBindPatterns();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.patterns && message.patterns.length))
                    message.patterns = [];
                message.patterns.push($root.BindPattern.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    ListBindPatterns.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    ListBindPatterns.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.patterns != null && message.hasOwnProperty("patterns")) {
            if (!Array.isArray(message.patterns))
                return "patterns: array expected";
            for (var i = 0; i < message.patterns.length; ++i) {
                var error = $root.BindPattern.verify(message.patterns[i]);
                if (error)
                    return "patterns." + error;
            }
        }
        return null;
    };

    ListBindPatterns.fromObject = function fromObject(object) {
        if (object instanceof $root.ListBindPatterns)
            return object;
        var message = new $root.ListBindPatterns();
        if (object.patterns) {
            if (!Array.isArray(object.patterns))
                throw TypeError(".ListBindPatterns.patterns: array expected");
            message.patterns = [];
            for (var i = 0; i < object.patterns.length; ++i) {
                if (typeof object.patterns[i] !== "object")
                    throw TypeError(".ListBindPatterns.patterns: object expected");
                message.patterns[i] = $root.BindPattern.fromObject(object.patterns[i]);
            }
        }
        return message;
    };

    ListBindPatterns.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.patterns = [];
        if (message.patterns && message.patterns.length) {
            object.patterns = [];
            for (var j = 0; j < message.patterns.length; ++j)
                object.patterns[j] = $root.BindPattern.toObject(message.patterns[j], options);
        }
        return object;
    };

    ListBindPatterns.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ListBindPatterns;
})();

$root.Receive = (function() {

    function Receive(properties) {
        this.binds = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    Receive.prototype.binds = $util.emptyArray;
    Receive.prototype.body = null;
    Receive.prototype.persistent = false;
    Receive.prototype.peek = false;
    Receive.prototype.bindCount = 0;
    Receive.prototype.locallyFree = $util.newBuffer([]);
    Receive.prototype.connective_used = false;

    Receive.create = function create(properties) {
        return new Receive(properties);
    };

    Receive.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.binds != null && message.binds.length)
            for (var i = 0; i < message.binds.length; ++i)
                $root.ReceiveBind.encode(message.binds[i], writer.uint32(10).fork()).ldelim();
        if (message.body != null && message.hasOwnProperty("body"))
            $root.Par.encode(message.body, writer.uint32(18).fork()).ldelim();
        if (message.persistent != null && message.hasOwnProperty("persistent"))
            writer.uint32(24).bool(message.persistent);
        if (message.peek != null && message.hasOwnProperty("peek"))
            writer.uint32(32).bool(message.peek);
        if (message.bindCount != null && message.hasOwnProperty("bindCount"))
            writer.uint32(40).int32(message.bindCount);
        if (message.locallyFree != null && message.hasOwnProperty("locallyFree"))
            writer.uint32(50).bytes(message.locallyFree);
        if (message.connective_used != null && message.hasOwnProperty("connective_used"))
            writer.uint32(56).bool(message.connective_used);
        return writer;
    };

    Receive.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    Receive.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Receive();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.binds && message.binds.length))
                    message.binds = [];
                message.binds.push($root.ReceiveBind.decode(reader, reader.uint32()));
                break;
            case 2:
                message.body = $root.Par.decode(reader, reader.uint32());
                break;
            case 3:
                message.persistent = reader.bool();
                break;
            case 4:
                message.peek = reader.bool();
                break;
            case 5:
                message.bindCount = reader.int32();
                break;
            case 6:
                message.locallyFree = reader.bytes();
                break;
            case 7:
                message.connective_used = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    Receive.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    Receive.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.binds != null && message.hasOwnProperty("binds")) {
            if (!Array.isArray(message.binds))
                return "binds: array expected";
            for (var i = 0; i < message.binds.length; ++i) {
                var error = $root.ReceiveBind.verify(message.binds[i]);
                if (error)
                    return "binds." + error;
            }
        }
        if (message.body != null && message.hasOwnProperty("body")) {
            var error = $root.Par.verify(message.body);
            if (error)
                return "body." + error;
        }
        if (message.persistent != null && message.hasOwnProperty("persistent"))
            if (typeof message.persistent !== "boolean")
                return "persistent: boolean expected";
        if (message.peek != null && message.hasOwnProperty("peek"))
            if (typeof message.peek !== "boolean")
                return "peek: boolean expected";
        if (message.bindCount != null && message.hasOwnProperty("bindCount"))
            if (!$util.isInteger(message.bindCount))
                return "bindCount: integer expected";
        if (message.locallyFree != null && message.hasOwnProperty("locallyFree"))
            if (!(message.locallyFree && typeof message.locallyFree.length === "number" || $util.isString(message.locallyFree)))
                return "locallyFree: buffer expected";
        if (message.connective_used != null && message.hasOwnProperty("connective_used"))
            if (typeof message.connective_used !== "boolean")
                return "connective_used: boolean expected";
        return null;
    };

    Receive.fromObject = function fromObject(object) {
        if (object instanceof $root.Receive)
            return object;
        var message = new $root.Receive();
        if (object.binds) {
            if (!Array.isArray(object.binds))
                throw TypeError(".Receive.binds: array expected");
            message.binds = [];
            for (var i = 0; i < object.binds.length; ++i) {
                if (typeof object.binds[i] !== "object")
                    throw TypeError(".Receive.binds: object expected");
                message.binds[i] = $root.ReceiveBind.fromObject(object.binds[i]);
            }
        }
        if (object.body != null) {
            if (typeof object.body !== "object")
                throw TypeError(".Receive.body: object expected");
            message.body = $root.Par.fromObject(object.body);
        }
        if (object.persistent != null)
            message.persistent = Boolean(object.persistent);
        if (object.peek != null)
            message.peek = Boolean(object.peek);
        if (object.bindCount != null)
            message.bindCount = object.bindCount | 0;
        if (object.locallyFree != null)
            if (typeof object.locallyFree === "string")
                $util.base64.decode(object.locallyFree, message.locallyFree = $util.newBuffer($util.base64.length(object.locallyFree)), 0);
            else if (object.locallyFree.length)
                message.locallyFree = object.locallyFree;
        if (object.connective_used != null)
            message.connective_used = Boolean(object.connective_used);
        return message;
    };

    Receive.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.binds = [];
        if (options.defaults) {
            object.body = null;
            object.persistent = false;
            object.peek = false;
            object.bindCount = 0;
            if (options.bytes === String)
                object.locallyFree = "";
            else {
                object.locallyFree = [];
                if (options.bytes !== Array)
                    object.locallyFree = $util.newBuffer(object.locallyFree);
            }
            object.connective_used = false;
        }
        if (message.binds && message.binds.length) {
            object.binds = [];
            for (var j = 0; j < message.binds.length; ++j)
                object.binds[j] = $root.ReceiveBind.toObject(message.binds[j], options);
        }
        if (message.body != null && message.hasOwnProperty("body"))
            object.body = $root.Par.toObject(message.body, options);
        if (message.persistent != null && message.hasOwnProperty("persistent"))
            object.persistent = message.persistent;
        if (message.peek != null && message.hasOwnProperty("peek"))
            object.peek = message.peek;
        if (message.bindCount != null && message.hasOwnProperty("bindCount"))
            object.bindCount = message.bindCount;
        if (message.locallyFree != null && message.hasOwnProperty("locallyFree"))
            object.locallyFree = options.bytes === String ? $util.base64.encode(message.locallyFree, 0, message.locallyFree.length) : options.bytes === Array ? Array.prototype.slice.call(message.locallyFree) : message.locallyFree;
        if (message.connective_used != null && message.hasOwnProperty("connective_used"))
            object.connective_used = message.connective_used;
        return object;
    };

    Receive.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Receive;
})();

$root.New = (function() {

    function New(properties) {
        this.uri = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    New.prototype.bindCount = 0;
    New.prototype.p = null;
    New.prototype.uri = $util.emptyArray;
    New.prototype.deployId = null;
    New.prototype.deployerId = null;
    New.prototype.locallyFree = $util.newBuffer([]);

    New.create = function create(properties) {
        return new New(properties);
    };

    New.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.bindCount != null && message.hasOwnProperty("bindCount"))
            writer.uint32(8).sint32(message.bindCount);
        if (message.p != null && message.hasOwnProperty("p"))
            $root.Par.encode(message.p, writer.uint32(18).fork()).ldelim();
        if (message.uri != null && message.uri.length)
            for (var i = 0; i < message.uri.length; ++i)
                writer.uint32(26).string(message.uri[i]);
        if (message.deployId != null && message.hasOwnProperty("deployId"))
            $root.DeployId.encode(message.deployId, writer.uint32(34).fork()).ldelim();
        if (message.deployerId != null && message.hasOwnProperty("deployerId"))
            $root.DeployerId.encode(message.deployerId, writer.uint32(42).fork()).ldelim();
        if (message.locallyFree != null && message.hasOwnProperty("locallyFree"))
            writer.uint32(50).bytes(message.locallyFree);
        return writer;
    };

    New.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    New.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.New();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.bindCount = reader.sint32();
                break;
            case 2:
                message.p = $root.Par.decode(reader, reader.uint32());
                break;
            case 3:
                if (!(message.uri && message.uri.length))
                    message.uri = [];
                message.uri.push(reader.string());
                break;
            case 4:
                message.deployId = $root.DeployId.decode(reader, reader.uint32());
                break;
            case 5:
                message.deployerId = $root.DeployerId.decode(reader, reader.uint32());
                break;
            case 6:
                message.locallyFree = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    New.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    New.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.bindCount != null && message.hasOwnProperty("bindCount"))
            if (!$util.isInteger(message.bindCount))
                return "bindCount: integer expected";
        if (message.p != null && message.hasOwnProperty("p")) {
            var error = $root.Par.verify(message.p);
            if (error)
                return "p." + error;
        }
        if (message.uri != null && message.hasOwnProperty("uri")) {
            if (!Array.isArray(message.uri))
                return "uri: array expected";
            for (var i = 0; i < message.uri.length; ++i)
                if (!$util.isString(message.uri[i]))
                    return "uri: string[] expected";
        }
        if (message.deployId != null && message.hasOwnProperty("deployId")) {
            var error = $root.DeployId.verify(message.deployId);
            if (error)
                return "deployId." + error;
        }
        if (message.deployerId != null && message.hasOwnProperty("deployerId")) {
            var error = $root.DeployerId.verify(message.deployerId);
            if (error)
                return "deployerId." + error;
        }
        if (message.locallyFree != null && message.hasOwnProperty("locallyFree"))
            if (!(message.locallyFree && typeof message.locallyFree.length === "number" || $util.isString(message.locallyFree)))
                return "locallyFree: buffer expected";
        return null;
    };

    New.fromObject = function fromObject(object) {
        if (object instanceof $root.New)
            return object;
        var message = new $root.New();
        if (object.bindCount != null)
            message.bindCount = object.bindCount | 0;
        if (object.p != null) {
            if (typeof object.p !== "object")
                throw TypeError(".New.p: object expected");
            message.p = $root.Par.fromObject(object.p);
        }
        if (object.uri) {
            if (!Array.isArray(object.uri))
                throw TypeError(".New.uri: array expected");
            message.uri = [];
            for (var i = 0; i < object.uri.length; ++i)
                message.uri[i] = String(object.uri[i]);
        }
        if (object.deployId != null) {
            if (typeof object.deployId !== "object")
                throw TypeError(".New.deployId: object expected");
            message.deployId = $root.DeployId.fromObject(object.deployId);
        }
        if (object.deployerId != null) {
            if (typeof object.deployerId !== "object")
                throw TypeError(".New.deployerId: object expected");
            message.deployerId = $root.DeployerId.fromObject(object.deployerId);
        }
        if (object.locallyFree != null)
            if (typeof object.locallyFree === "string")
                $util.base64.decode(object.locallyFree, message.locallyFree = $util.newBuffer($util.base64.length(object.locallyFree)), 0);
            else if (object.locallyFree.length)
                message.locallyFree = object.locallyFree;
        return message;
    };

    New.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.uri = [];
        if (options.defaults) {
            object.bindCount = 0;
            object.p = null;
            object.deployId = null;
            object.deployerId = null;
            if (options.bytes === String)
                object.locallyFree = "";
            else {
                object.locallyFree = [];
                if (options.bytes !== Array)
                    object.locallyFree = $util.newBuffer(object.locallyFree);
            }
        }
        if (message.bindCount != null && message.hasOwnProperty("bindCount"))
            object.bindCount = message.bindCount;
        if (message.p != null && message.hasOwnProperty("p"))
            object.p = $root.Par.toObject(message.p, options);
        if (message.uri && message.uri.length) {
            object.uri = [];
            for (var j = 0; j < message.uri.length; ++j)
                object.uri[j] = message.uri[j];
        }
        if (message.deployId != null && message.hasOwnProperty("deployId"))
            object.deployId = $root.DeployId.toObject(message.deployId, options);
        if (message.deployerId != null && message.hasOwnProperty("deployerId"))
            object.deployerId = $root.DeployerId.toObject(message.deployerId, options);
        if (message.locallyFree != null && message.hasOwnProperty("locallyFree"))
            object.locallyFree = options.bytes === String ? $util.base64.encode(message.locallyFree, 0, message.locallyFree.length) : options.bytes === Array ? Array.prototype.slice.call(message.locallyFree) : message.locallyFree;
        return object;
    };

    New.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return New;
})();

$root.MatchCase = (function() {

    function MatchCase(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    MatchCase.prototype.pattern = null;
    MatchCase.prototype.source = null;
    MatchCase.prototype.freeCount = 0;

    MatchCase.create = function create(properties) {
        return new MatchCase(properties);
    };

    MatchCase.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.pattern != null && message.hasOwnProperty("pattern"))
            $root.Par.encode(message.pattern, writer.uint32(10).fork()).ldelim();
        if (message.source != null && message.hasOwnProperty("source"))
            $root.Par.encode(message.source, writer.uint32(18).fork()).ldelim();
        if (message.freeCount != null && message.hasOwnProperty("freeCount"))
            writer.uint32(24).int32(message.freeCount);
        return writer;
    };

    MatchCase.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    MatchCase.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.MatchCase();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.pattern = $root.Par.decode(reader, reader.uint32());
                break;
            case 2:
                message.source = $root.Par.decode(reader, reader.uint32());
                break;
            case 3:
                message.freeCount = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    MatchCase.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    MatchCase.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.pattern != null && message.hasOwnProperty("pattern")) {
            var error = $root.Par.verify(message.pattern);
            if (error)
                return "pattern." + error;
        }
        if (message.source != null && message.hasOwnProperty("source")) {
            var error = $root.Par.verify(message.source);
            if (error)
                return "source." + error;
        }
        if (message.freeCount != null && message.hasOwnProperty("freeCount"))
            if (!$util.isInteger(message.freeCount))
                return "freeCount: integer expected";
        return null;
    };

    MatchCase.fromObject = function fromObject(object) {
        if (object instanceof $root.MatchCase)
            return object;
        var message = new $root.MatchCase();
        if (object.pattern != null) {
            if (typeof object.pattern !== "object")
                throw TypeError(".MatchCase.pattern: object expected");
            message.pattern = $root.Par.fromObject(object.pattern);
        }
        if (object.source != null) {
            if (typeof object.source !== "object")
                throw TypeError(".MatchCase.source: object expected");
            message.source = $root.Par.fromObject(object.source);
        }
        if (object.freeCount != null)
            message.freeCount = object.freeCount | 0;
        return message;
    };

    MatchCase.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.pattern = null;
            object.source = null;
            object.freeCount = 0;
        }
        if (message.pattern != null && message.hasOwnProperty("pattern"))
            object.pattern = $root.Par.toObject(message.pattern, options);
        if (message.source != null && message.hasOwnProperty("source"))
            object.source = $root.Par.toObject(message.source, options);
        if (message.freeCount != null && message.hasOwnProperty("freeCount"))
            object.freeCount = message.freeCount;
        return object;
    };

    MatchCase.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return MatchCase;
})();

$root.Match = (function() {

    function Match(properties) {
        this.cases = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    Match.prototype.target = null;
    Match.prototype.cases = $util.emptyArray;
    Match.prototype.locallyFree = $util.newBuffer([]);
    Match.prototype.connective_used = false;

    Match.create = function create(properties) {
        return new Match(properties);
    };

    Match.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.target != null && message.hasOwnProperty("target"))
            $root.Par.encode(message.target, writer.uint32(10).fork()).ldelim();
        if (message.cases != null && message.cases.length)
            for (var i = 0; i < message.cases.length; ++i)
                $root.MatchCase.encode(message.cases[i], writer.uint32(18).fork()).ldelim();
        if (message.locallyFree != null && message.hasOwnProperty("locallyFree"))
            writer.uint32(34).bytes(message.locallyFree);
        if (message.connective_used != null && message.hasOwnProperty("connective_used"))
            writer.uint32(40).bool(message.connective_used);
        return writer;
    };

    Match.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    Match.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Match();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.target = $root.Par.decode(reader, reader.uint32());
                break;
            case 2:
                if (!(message.cases && message.cases.length))
                    message.cases = [];
                message.cases.push($root.MatchCase.decode(reader, reader.uint32()));
                break;
            case 4:
                message.locallyFree = reader.bytes();
                break;
            case 5:
                message.connective_used = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    Match.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    Match.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.target != null && message.hasOwnProperty("target")) {
            var error = $root.Par.verify(message.target);
            if (error)
                return "target." + error;
        }
        if (message.cases != null && message.hasOwnProperty("cases")) {
            if (!Array.isArray(message.cases))
                return "cases: array expected";
            for (var i = 0; i < message.cases.length; ++i) {
                var error = $root.MatchCase.verify(message.cases[i]);
                if (error)
                    return "cases." + error;
            }
        }
        if (message.locallyFree != null && message.hasOwnProperty("locallyFree"))
            if (!(message.locallyFree && typeof message.locallyFree.length === "number" || $util.isString(message.locallyFree)))
                return "locallyFree: buffer expected";
        if (message.connective_used != null && message.hasOwnProperty("connective_used"))
            if (typeof message.connective_used !== "boolean")
                return "connective_used: boolean expected";
        return null;
    };

    Match.fromObject = function fromObject(object) {
        if (object instanceof $root.Match)
            return object;
        var message = new $root.Match();
        if (object.target != null) {
            if (typeof object.target !== "object")
                throw TypeError(".Match.target: object expected");
            message.target = $root.Par.fromObject(object.target);
        }
        if (object.cases) {
            if (!Array.isArray(object.cases))
                throw TypeError(".Match.cases: array expected");
            message.cases = [];
            for (var i = 0; i < object.cases.length; ++i) {
                if (typeof object.cases[i] !== "object")
                    throw TypeError(".Match.cases: object expected");
                message.cases[i] = $root.MatchCase.fromObject(object.cases[i]);
            }
        }
        if (object.locallyFree != null)
            if (typeof object.locallyFree === "string")
                $util.base64.decode(object.locallyFree, message.locallyFree = $util.newBuffer($util.base64.length(object.locallyFree)), 0);
            else if (object.locallyFree.length)
                message.locallyFree = object.locallyFree;
        if (object.connective_used != null)
            message.connective_used = Boolean(object.connective_used);
        return message;
    };

    Match.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.cases = [];
        if (options.defaults) {
            object.target = null;
            if (options.bytes === String)
                object.locallyFree = "";
            else {
                object.locallyFree = [];
                if (options.bytes !== Array)
                    object.locallyFree = $util.newBuffer(object.locallyFree);
            }
            object.connective_used = false;
        }
        if (message.target != null && message.hasOwnProperty("target"))
            object.target = $root.Par.toObject(message.target, options);
        if (message.cases && message.cases.length) {
            object.cases = [];
            for (var j = 0; j < message.cases.length; ++j)
                object.cases[j] = $root.MatchCase.toObject(message.cases[j], options);
        }
        if (message.locallyFree != null && message.hasOwnProperty("locallyFree"))
            object.locallyFree = options.bytes === String ? $util.base64.encode(message.locallyFree, 0, message.locallyFree.length) : options.bytes === Array ? Array.prototype.slice.call(message.locallyFree) : message.locallyFree;
        if (message.connective_used != null && message.hasOwnProperty("connective_used"))
            object.connective_used = message.connective_used;
        return object;
    };

    Match.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Match;
})();

$root.Expr = (function() {

    function Expr(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    Expr.prototype.g_bool = false;
    Expr.prototype.g_int = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    Expr.prototype.g_string = "";
    Expr.prototype.g_uri = "";
    Expr.prototype.g_byte_array = $util.newBuffer([]);
    Expr.prototype.e_not_body = null;
    Expr.prototype.e_neg_body = null;
    Expr.prototype.e_mult_body = null;
    Expr.prototype.e_div_body = null;
    Expr.prototype.e_plus_body = null;
    Expr.prototype.e_minus_body = null;
    Expr.prototype.e_lt_body = null;
    Expr.prototype.e_lte_body = null;
    Expr.prototype.e_gt_body = null;
    Expr.prototype.e_gte_body = null;
    Expr.prototype.e_eq_body = null;
    Expr.prototype.e_neq_body = null;
    Expr.prototype.e_and_body = null;
    Expr.prototype.e_or_body = null;
    Expr.prototype.e_var_body = null;
    Expr.prototype.e_list_body = null;
    Expr.prototype.e_tuple_body = null;
    Expr.prototype.e_set_body = null;
    Expr.prototype.e_map_body = null;
    Expr.prototype.e_method_body = null;
    Expr.prototype.e_matches_body = null;
    Expr.prototype.e_percent_percent_body = null;
    Expr.prototype.e_plus_plus_body = null;
    Expr.prototype.e_minus_minus_body = null;
    Expr.prototype.e_mod_body = null;

    var $oneOfFields;

    Object.defineProperty(Expr.prototype, "expr_instance", {
        get: $util.oneOfGetter($oneOfFields = ["g_bool", "g_int", "g_string", "g_uri", "g_byte_array", "e_not_body", "e_neg_body", "e_mult_body", "e_div_body", "e_plus_body", "e_minus_body", "e_lt_body", "e_lte_body", "e_gt_body", "e_gte_body", "e_eq_body", "e_neq_body", "e_and_body", "e_or_body", "e_var_body", "e_list_body", "e_tuple_body", "e_set_body", "e_map_body", "e_method_body", "e_matches_body", "e_percent_percent_body", "e_plus_plus_body", "e_minus_minus_body", "e_mod_body"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    Expr.create = function create(properties) {
        return new Expr(properties);
    };

    Expr.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.g_bool != null && message.hasOwnProperty("g_bool"))
            writer.uint32(8).bool(message.g_bool);
        if (message.g_int != null && message.hasOwnProperty("g_int"))
            writer.uint32(16).sint64(message.g_int);
        if (message.g_string != null && message.hasOwnProperty("g_string"))
            writer.uint32(26).string(message.g_string);
        if (message.g_uri != null && message.hasOwnProperty("g_uri"))
            writer.uint32(34).string(message.g_uri);
        if (message.e_not_body != null && message.hasOwnProperty("e_not_body"))
            $root.ENot.encode(message.e_not_body, writer.uint32(42).fork()).ldelim();
        if (message.e_neg_body != null && message.hasOwnProperty("e_neg_body"))
            $root.ENeg.encode(message.e_neg_body, writer.uint32(50).fork()).ldelim();
        if (message.e_mult_body != null && message.hasOwnProperty("e_mult_body"))
            $root.EMult.encode(message.e_mult_body, writer.uint32(58).fork()).ldelim();
        if (message.e_div_body != null && message.hasOwnProperty("e_div_body"))
            $root.EDiv.encode(message.e_div_body, writer.uint32(66).fork()).ldelim();
        if (message.e_plus_body != null && message.hasOwnProperty("e_plus_body"))
            $root.EPlus.encode(message.e_plus_body, writer.uint32(74).fork()).ldelim();
        if (message.e_minus_body != null && message.hasOwnProperty("e_minus_body"))
            $root.EMinus.encode(message.e_minus_body, writer.uint32(82).fork()).ldelim();
        if (message.e_lt_body != null && message.hasOwnProperty("e_lt_body"))
            $root.ELt.encode(message.e_lt_body, writer.uint32(90).fork()).ldelim();
        if (message.e_lte_body != null && message.hasOwnProperty("e_lte_body"))
            $root.ELte.encode(message.e_lte_body, writer.uint32(98).fork()).ldelim();
        if (message.e_gt_body != null && message.hasOwnProperty("e_gt_body"))
            $root.EGt.encode(message.e_gt_body, writer.uint32(106).fork()).ldelim();
        if (message.e_gte_body != null && message.hasOwnProperty("e_gte_body"))
            $root.EGte.encode(message.e_gte_body, writer.uint32(114).fork()).ldelim();
        if (message.e_eq_body != null && message.hasOwnProperty("e_eq_body"))
            $root.EEq.encode(message.e_eq_body, writer.uint32(122).fork()).ldelim();
        if (message.e_neq_body != null && message.hasOwnProperty("e_neq_body"))
            $root.ENeq.encode(message.e_neq_body, writer.uint32(130).fork()).ldelim();
        if (message.e_and_body != null && message.hasOwnProperty("e_and_body"))
            $root.EAnd.encode(message.e_and_body, writer.uint32(138).fork()).ldelim();
        if (message.e_or_body != null && message.hasOwnProperty("e_or_body"))
            $root.EOr.encode(message.e_or_body, writer.uint32(146).fork()).ldelim();
        if (message.e_var_body != null && message.hasOwnProperty("e_var_body"))
            $root.EVar.encode(message.e_var_body, writer.uint32(154).fork()).ldelim();
        if (message.e_list_body != null && message.hasOwnProperty("e_list_body"))
            $root.EList.encode(message.e_list_body, writer.uint32(162).fork()).ldelim();
        if (message.e_tuple_body != null && message.hasOwnProperty("e_tuple_body"))
            $root.ETuple.encode(message.e_tuple_body, writer.uint32(170).fork()).ldelim();
        if (message.e_set_body != null && message.hasOwnProperty("e_set_body"))
            $root.ESet.encode(message.e_set_body, writer.uint32(178).fork()).ldelim();
        if (message.e_map_body != null && message.hasOwnProperty("e_map_body"))
            $root.EMap.encode(message.e_map_body, writer.uint32(186).fork()).ldelim();
        if (message.e_method_body != null && message.hasOwnProperty("e_method_body"))
            $root.EMethod.encode(message.e_method_body, writer.uint32(194).fork()).ldelim();
        if (message.g_byte_array != null && message.hasOwnProperty("g_byte_array"))
            writer.uint32(202).bytes(message.g_byte_array);
        if (message.e_matches_body != null && message.hasOwnProperty("e_matches_body"))
            $root.EMatches.encode(message.e_matches_body, writer.uint32(218).fork()).ldelim();
        if (message.e_percent_percent_body != null && message.hasOwnProperty("e_percent_percent_body"))
            $root.EPercentPercent.encode(message.e_percent_percent_body, writer.uint32(226).fork()).ldelim();
        if (message.e_plus_plus_body != null && message.hasOwnProperty("e_plus_plus_body"))
            $root.EPlusPlus.encode(message.e_plus_plus_body, writer.uint32(234).fork()).ldelim();
        if (message.e_minus_minus_body != null && message.hasOwnProperty("e_minus_minus_body"))
            $root.EMinusMinus.encode(message.e_minus_minus_body, writer.uint32(242).fork()).ldelim();
        if (message.e_mod_body != null && message.hasOwnProperty("e_mod_body"))
            $root.EMod.encode(message.e_mod_body, writer.uint32(250).fork()).ldelim();
        return writer;
    };

    Expr.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    Expr.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Expr();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.g_bool = reader.bool();
                break;
            case 2:
                message.g_int = reader.sint64();
                break;
            case 3:
                message.g_string = reader.string();
                break;
            case 4:
                message.g_uri = reader.string();
                break;
            case 25:
                message.g_byte_array = reader.bytes();
                break;
            case 5:
                message.e_not_body = $root.ENot.decode(reader, reader.uint32());
                break;
            case 6:
                message.e_neg_body = $root.ENeg.decode(reader, reader.uint32());
                break;
            case 7:
                message.e_mult_body = $root.EMult.decode(reader, reader.uint32());
                break;
            case 8:
                message.e_div_body = $root.EDiv.decode(reader, reader.uint32());
                break;
            case 9:
                message.e_plus_body = $root.EPlus.decode(reader, reader.uint32());
                break;
            case 10:
                message.e_minus_body = $root.EMinus.decode(reader, reader.uint32());
                break;
            case 11:
                message.e_lt_body = $root.ELt.decode(reader, reader.uint32());
                break;
            case 12:
                message.e_lte_body = $root.ELte.decode(reader, reader.uint32());
                break;
            case 13:
                message.e_gt_body = $root.EGt.decode(reader, reader.uint32());
                break;
            case 14:
                message.e_gte_body = $root.EGte.decode(reader, reader.uint32());
                break;
            case 15:
                message.e_eq_body = $root.EEq.decode(reader, reader.uint32());
                break;
            case 16:
                message.e_neq_body = $root.ENeq.decode(reader, reader.uint32());
                break;
            case 17:
                message.e_and_body = $root.EAnd.decode(reader, reader.uint32());
                break;
            case 18:
                message.e_or_body = $root.EOr.decode(reader, reader.uint32());
                break;
            case 19:
                message.e_var_body = $root.EVar.decode(reader, reader.uint32());
                break;
            case 20:
                message.e_list_body = $root.EList.decode(reader, reader.uint32());
                break;
            case 21:
                message.e_tuple_body = $root.ETuple.decode(reader, reader.uint32());
                break;
            case 22:
                message.e_set_body = $root.ESet.decode(reader, reader.uint32());
                break;
            case 23:
                message.e_map_body = $root.EMap.decode(reader, reader.uint32());
                break;
            case 24:
                message.e_method_body = $root.EMethod.decode(reader, reader.uint32());
                break;
            case 27:
                message.e_matches_body = $root.EMatches.decode(reader, reader.uint32());
                break;
            case 28:
                message.e_percent_percent_body = $root.EPercentPercent.decode(reader, reader.uint32());
                break;
            case 29:
                message.e_plus_plus_body = $root.EPlusPlus.decode(reader, reader.uint32());
                break;
            case 30:
                message.e_minus_minus_body = $root.EMinusMinus.decode(reader, reader.uint32());
                break;
            case 31:
                message.e_mod_body = $root.EMod.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    Expr.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    Expr.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        var properties = {};
        if (message.g_bool != null && message.hasOwnProperty("g_bool")) {
            properties.expr_instance = 1;
            if (typeof message.g_bool !== "boolean")
                return "g_bool: boolean expected";
        }
        if (message.g_int != null && message.hasOwnProperty("g_int")) {
            if (properties.expr_instance === 1)
                return "expr_instance: multiple values";
            properties.expr_instance = 1;
            if (!$util.isInteger(message.g_int) && !(message.g_int && $util.isInteger(message.g_int.low) && $util.isInteger(message.g_int.high)))
                return "g_int: integer|Long expected";
        }
        if (message.g_string != null && message.hasOwnProperty("g_string")) {
            if (properties.expr_instance === 1)
                return "expr_instance: multiple values";
            properties.expr_instance = 1;
            if (!$util.isString(message.g_string))
                return "g_string: string expected";
        }
        if (message.g_uri != null && message.hasOwnProperty("g_uri")) {
            if (properties.expr_instance === 1)
                return "expr_instance: multiple values";
            properties.expr_instance = 1;
            if (!$util.isString(message.g_uri))
                return "g_uri: string expected";
        }
        if (message.g_byte_array != null && message.hasOwnProperty("g_byte_array")) {
            if (properties.expr_instance === 1)
                return "expr_instance: multiple values";
            properties.expr_instance = 1;
            if (!(message.g_byte_array && typeof message.g_byte_array.length === "number" || $util.isString(message.g_byte_array)))
                return "g_byte_array: buffer expected";
        }
        if (message.e_not_body != null && message.hasOwnProperty("e_not_body")) {
            if (properties.expr_instance === 1)
                return "expr_instance: multiple values";
            properties.expr_instance = 1;
            {
                var error = $root.ENot.verify(message.e_not_body);
                if (error)
                    return "e_not_body." + error;
            }
        }
        if (message.e_neg_body != null && message.hasOwnProperty("e_neg_body")) {
            if (properties.expr_instance === 1)
                return "expr_instance: multiple values";
            properties.expr_instance = 1;
            {
                var error = $root.ENeg.verify(message.e_neg_body);
                if (error)
                    return "e_neg_body." + error;
            }
        }
        if (message.e_mult_body != null && message.hasOwnProperty("e_mult_body")) {
            if (properties.expr_instance === 1)
                return "expr_instance: multiple values";
            properties.expr_instance = 1;
            {
                var error = $root.EMult.verify(message.e_mult_body);
                if (error)
                    return "e_mult_body." + error;
            }
        }
        if (message.e_div_body != null && message.hasOwnProperty("e_div_body")) {
            if (properties.expr_instance === 1)
                return "expr_instance: multiple values";
            properties.expr_instance = 1;
            {
                var error = $root.EDiv.verify(message.e_div_body);
                if (error)
                    return "e_div_body." + error;
            }
        }
        if (message.e_plus_body != null && message.hasOwnProperty("e_plus_body")) {
            if (properties.expr_instance === 1)
                return "expr_instance: multiple values";
            properties.expr_instance = 1;
            {
                var error = $root.EPlus.verify(message.e_plus_body);
                if (error)
                    return "e_plus_body." + error;
            }
        }
        if (message.e_minus_body != null && message.hasOwnProperty("e_minus_body")) {
            if (properties.expr_instance === 1)
                return "expr_instance: multiple values";
            properties.expr_instance = 1;
            {
                var error = $root.EMinus.verify(message.e_minus_body);
                if (error)
                    return "e_minus_body." + error;
            }
        }
        if (message.e_lt_body != null && message.hasOwnProperty("e_lt_body")) {
            if (properties.expr_instance === 1)
                return "expr_instance: multiple values";
            properties.expr_instance = 1;
            {
                var error = $root.ELt.verify(message.e_lt_body);
                if (error)
                    return "e_lt_body." + error;
            }
        }
        if (message.e_lte_body != null && message.hasOwnProperty("e_lte_body")) {
            if (properties.expr_instance === 1)
                return "expr_instance: multiple values";
            properties.expr_instance = 1;
            {
                var error = $root.ELte.verify(message.e_lte_body);
                if (error)
                    return "e_lte_body." + error;
            }
        }
        if (message.e_gt_body != null && message.hasOwnProperty("e_gt_body")) {
            if (properties.expr_instance === 1)
                return "expr_instance: multiple values";
            properties.expr_instance = 1;
            {
                var error = $root.EGt.verify(message.e_gt_body);
                if (error)
                    return "e_gt_body." + error;
            }
        }
        if (message.e_gte_body != null && message.hasOwnProperty("e_gte_body")) {
            if (properties.expr_instance === 1)
                return "expr_instance: multiple values";
            properties.expr_instance = 1;
            {
                var error = $root.EGte.verify(message.e_gte_body);
                if (error)
                    return "e_gte_body." + error;
            }
        }
        if (message.e_eq_body != null && message.hasOwnProperty("e_eq_body")) {
            if (properties.expr_instance === 1)
                return "expr_instance: multiple values";
            properties.expr_instance = 1;
            {
                var error = $root.EEq.verify(message.e_eq_body);
                if (error)
                    return "e_eq_body." + error;
            }
        }
        if (message.e_neq_body != null && message.hasOwnProperty("e_neq_body")) {
            if (properties.expr_instance === 1)
                return "expr_instance: multiple values";
            properties.expr_instance = 1;
            {
                var error = $root.ENeq.verify(message.e_neq_body);
                if (error)
                    return "e_neq_body." + error;
            }
        }
        if (message.e_and_body != null && message.hasOwnProperty("e_and_body")) {
            if (properties.expr_instance === 1)
                return "expr_instance: multiple values";
            properties.expr_instance = 1;
            {
                var error = $root.EAnd.verify(message.e_and_body);
                if (error)
                    return "e_and_body." + error;
            }
        }
        if (message.e_or_body != null && message.hasOwnProperty("e_or_body")) {
            if (properties.expr_instance === 1)
                return "expr_instance: multiple values";
            properties.expr_instance = 1;
            {
                var error = $root.EOr.verify(message.e_or_body);
                if (error)
                    return "e_or_body." + error;
            }
        }
        if (message.e_var_body != null && message.hasOwnProperty("e_var_body")) {
            if (properties.expr_instance === 1)
                return "expr_instance: multiple values";
            properties.expr_instance = 1;
            {
                var error = $root.EVar.verify(message.e_var_body);
                if (error)
                    return "e_var_body." + error;
            }
        }
        if (message.e_list_body != null && message.hasOwnProperty("e_list_body")) {
            if (properties.expr_instance === 1)
                return "expr_instance: multiple values";
            properties.expr_instance = 1;
            {
                var error = $root.EList.verify(message.e_list_body);
                if (error)
                    return "e_list_body." + error;
            }
        }
        if (message.e_tuple_body != null && message.hasOwnProperty("e_tuple_body")) {
            if (properties.expr_instance === 1)
                return "expr_instance: multiple values";
            properties.expr_instance = 1;
            {
                var error = $root.ETuple.verify(message.e_tuple_body);
                if (error)
                    return "e_tuple_body." + error;
            }
        }
        if (message.e_set_body != null && message.hasOwnProperty("e_set_body")) {
            if (properties.expr_instance === 1)
                return "expr_instance: multiple values";
            properties.expr_instance = 1;
            {
                var error = $root.ESet.verify(message.e_set_body);
                if (error)
                    return "e_set_body." + error;
            }
        }
        if (message.e_map_body != null && message.hasOwnProperty("e_map_body")) {
            if (properties.expr_instance === 1)
                return "expr_instance: multiple values";
            properties.expr_instance = 1;
            {
                var error = $root.EMap.verify(message.e_map_body);
                if (error)
                    return "e_map_body." + error;
            }
        }
        if (message.e_method_body != null && message.hasOwnProperty("e_method_body")) {
            if (properties.expr_instance === 1)
                return "expr_instance: multiple values";
            properties.expr_instance = 1;
            {
                var error = $root.EMethod.verify(message.e_method_body);
                if (error)
                    return "e_method_body." + error;
            }
        }
        if (message.e_matches_body != null && message.hasOwnProperty("e_matches_body")) {
            if (properties.expr_instance === 1)
                return "expr_instance: multiple values";
            properties.expr_instance = 1;
            {
                var error = $root.EMatches.verify(message.e_matches_body);
                if (error)
                    return "e_matches_body." + error;
            }
        }
        if (message.e_percent_percent_body != null && message.hasOwnProperty("e_percent_percent_body")) {
            if (properties.expr_instance === 1)
                return "expr_instance: multiple values";
            properties.expr_instance = 1;
            {
                var error = $root.EPercentPercent.verify(message.e_percent_percent_body);
                if (error)
                    return "e_percent_percent_body." + error;
            }
        }
        if (message.e_plus_plus_body != null && message.hasOwnProperty("e_plus_plus_body")) {
            if (properties.expr_instance === 1)
                return "expr_instance: multiple values";
            properties.expr_instance = 1;
            {
                var error = $root.EPlusPlus.verify(message.e_plus_plus_body);
                if (error)
                    return "e_plus_plus_body." + error;
            }
        }
        if (message.e_minus_minus_body != null && message.hasOwnProperty("e_minus_minus_body")) {
            if (properties.expr_instance === 1)
                return "expr_instance: multiple values";
            properties.expr_instance = 1;
            {
                var error = $root.EMinusMinus.verify(message.e_minus_minus_body);
                if (error)
                    return "e_minus_minus_body." + error;
            }
        }
        if (message.e_mod_body != null && message.hasOwnProperty("e_mod_body")) {
            if (properties.expr_instance === 1)
                return "expr_instance: multiple values";
            properties.expr_instance = 1;
            {
                var error = $root.EMod.verify(message.e_mod_body);
                if (error)
                    return "e_mod_body." + error;
            }
        }
        return null;
    };

    Expr.fromObject = function fromObject(object) {
        if (object instanceof $root.Expr)
            return object;
        var message = new $root.Expr();
        if (object.g_bool != null)
            message.g_bool = Boolean(object.g_bool);
        if (object.g_int != null)
            if ($util.Long)
                (message.g_int = $util.Long.fromValue(object.g_int)).unsigned = false;
            else if (typeof object.g_int === "string")
                message.g_int = parseInt(object.g_int, 10);
            else if (typeof object.g_int === "number")
                message.g_int = object.g_int;
            else if (typeof object.g_int === "object")
                message.g_int = new $util.LongBits(object.g_int.low >>> 0, object.g_int.high >>> 0).toNumber();
        if (object.g_string != null)
            message.g_string = String(object.g_string);
        if (object.g_uri != null)
            message.g_uri = String(object.g_uri);
        if (object.g_byte_array != null)
            if (typeof object.g_byte_array === "string")
                $util.base64.decode(object.g_byte_array, message.g_byte_array = $util.newBuffer($util.base64.length(object.g_byte_array)), 0);
            else if (object.g_byte_array.length)
                message.g_byte_array = object.g_byte_array;
        if (object.e_not_body != null) {
            if (typeof object.e_not_body !== "object")
                throw TypeError(".Expr.e_not_body: object expected");
            message.e_not_body = $root.ENot.fromObject(object.e_not_body);
        }
        if (object.e_neg_body != null) {
            if (typeof object.e_neg_body !== "object")
                throw TypeError(".Expr.e_neg_body: object expected");
            message.e_neg_body = $root.ENeg.fromObject(object.e_neg_body);
        }
        if (object.e_mult_body != null) {
            if (typeof object.e_mult_body !== "object")
                throw TypeError(".Expr.e_mult_body: object expected");
            message.e_mult_body = $root.EMult.fromObject(object.e_mult_body);
        }
        if (object.e_div_body != null) {
            if (typeof object.e_div_body !== "object")
                throw TypeError(".Expr.e_div_body: object expected");
            message.e_div_body = $root.EDiv.fromObject(object.e_div_body);
        }
        if (object.e_plus_body != null) {
            if (typeof object.e_plus_body !== "object")
                throw TypeError(".Expr.e_plus_body: object expected");
            message.e_plus_body = $root.EPlus.fromObject(object.e_plus_body);
        }
        if (object.e_minus_body != null) {
            if (typeof object.e_minus_body !== "object")
                throw TypeError(".Expr.e_minus_body: object expected");
            message.e_minus_body = $root.EMinus.fromObject(object.e_minus_body);
        }
        if (object.e_lt_body != null) {
            if (typeof object.e_lt_body !== "object")
                throw TypeError(".Expr.e_lt_body: object expected");
            message.e_lt_body = $root.ELt.fromObject(object.e_lt_body);
        }
        if (object.e_lte_body != null) {
            if (typeof object.e_lte_body !== "object")
                throw TypeError(".Expr.e_lte_body: object expected");
            message.e_lte_body = $root.ELte.fromObject(object.e_lte_body);
        }
        if (object.e_gt_body != null) {
            if (typeof object.e_gt_body !== "object")
                throw TypeError(".Expr.e_gt_body: object expected");
            message.e_gt_body = $root.EGt.fromObject(object.e_gt_body);
        }
        if (object.e_gte_body != null) {
            if (typeof object.e_gte_body !== "object")
                throw TypeError(".Expr.e_gte_body: object expected");
            message.e_gte_body = $root.EGte.fromObject(object.e_gte_body);
        }
        if (object.e_eq_body != null) {
            if (typeof object.e_eq_body !== "object")
                throw TypeError(".Expr.e_eq_body: object expected");
            message.e_eq_body = $root.EEq.fromObject(object.e_eq_body);
        }
        if (object.e_neq_body != null) {
            if (typeof object.e_neq_body !== "object")
                throw TypeError(".Expr.e_neq_body: object expected");
            message.e_neq_body = $root.ENeq.fromObject(object.e_neq_body);
        }
        if (object.e_and_body != null) {
            if (typeof object.e_and_body !== "object")
                throw TypeError(".Expr.e_and_body: object expected");
            message.e_and_body = $root.EAnd.fromObject(object.e_and_body);
        }
        if (object.e_or_body != null) {
            if (typeof object.e_or_body !== "object")
                throw TypeError(".Expr.e_or_body: object expected");
            message.e_or_body = $root.EOr.fromObject(object.e_or_body);
        }
        if (object.e_var_body != null) {
            if (typeof object.e_var_body !== "object")
                throw TypeError(".Expr.e_var_body: object expected");
            message.e_var_body = $root.EVar.fromObject(object.e_var_body);
        }
        if (object.e_list_body != null) {
            if (typeof object.e_list_body !== "object")
                throw TypeError(".Expr.e_list_body: object expected");
            message.e_list_body = $root.EList.fromObject(object.e_list_body);
        }
        if (object.e_tuple_body != null) {
            if (typeof object.e_tuple_body !== "object")
                throw TypeError(".Expr.e_tuple_body: object expected");
            message.e_tuple_body = $root.ETuple.fromObject(object.e_tuple_body);
        }
        if (object.e_set_body != null) {
            if (typeof object.e_set_body !== "object")
                throw TypeError(".Expr.e_set_body: object expected");
            message.e_set_body = $root.ESet.fromObject(object.e_set_body);
        }
        if (object.e_map_body != null) {
            if (typeof object.e_map_body !== "object")
                throw TypeError(".Expr.e_map_body: object expected");
            message.e_map_body = $root.EMap.fromObject(object.e_map_body);
        }
        if (object.e_method_body != null) {
            if (typeof object.e_method_body !== "object")
                throw TypeError(".Expr.e_method_body: object expected");
            message.e_method_body = $root.EMethod.fromObject(object.e_method_body);
        }
        if (object.e_matches_body != null) {
            if (typeof object.e_matches_body !== "object")
                throw TypeError(".Expr.e_matches_body: object expected");
            message.e_matches_body = $root.EMatches.fromObject(object.e_matches_body);
        }
        if (object.e_percent_percent_body != null) {
            if (typeof object.e_percent_percent_body !== "object")
                throw TypeError(".Expr.e_percent_percent_body: object expected");
            message.e_percent_percent_body = $root.EPercentPercent.fromObject(object.e_percent_percent_body);
        }
        if (object.e_plus_plus_body != null) {
            if (typeof object.e_plus_plus_body !== "object")
                throw TypeError(".Expr.e_plus_plus_body: object expected");
            message.e_plus_plus_body = $root.EPlusPlus.fromObject(object.e_plus_plus_body);
        }
        if (object.e_minus_minus_body != null) {
            if (typeof object.e_minus_minus_body !== "object")
                throw TypeError(".Expr.e_minus_minus_body: object expected");
            message.e_minus_minus_body = $root.EMinusMinus.fromObject(object.e_minus_minus_body);
        }
        if (object.e_mod_body != null) {
            if (typeof object.e_mod_body !== "object")
                throw TypeError(".Expr.e_mod_body: object expected");
            message.e_mod_body = $root.EMod.fromObject(object.e_mod_body);
        }
        return message;
    };

    Expr.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (message.g_bool != null && message.hasOwnProperty("g_bool")) {
            object.g_bool = message.g_bool;
            if (options.oneofs)
                object.expr_instance = "g_bool";
        }
        if (message.g_int != null && message.hasOwnProperty("g_int")) {
            if (typeof message.g_int === "number")
                object.g_int = options.longs === String ? String(message.g_int) : message.g_int;
            else
                object.g_int = options.longs === String ? $util.Long.prototype.toString.call(message.g_int) : options.longs === Number ? new $util.LongBits(message.g_int.low >>> 0, message.g_int.high >>> 0).toNumber() : message.g_int;
            if (options.oneofs)
                object.expr_instance = "g_int";
        }
        if (message.g_string != null && message.hasOwnProperty("g_string")) {
            object.g_string = message.g_string;
            if (options.oneofs)
                object.expr_instance = "g_string";
        }
        if (message.g_uri != null && message.hasOwnProperty("g_uri")) {
            object.g_uri = message.g_uri;
            if (options.oneofs)
                object.expr_instance = "g_uri";
        }
        if (message.e_not_body != null && message.hasOwnProperty("e_not_body")) {
            object.e_not_body = $root.ENot.toObject(message.e_not_body, options);
            if (options.oneofs)
                object.expr_instance = "e_not_body";
        }
        if (message.e_neg_body != null && message.hasOwnProperty("e_neg_body")) {
            object.e_neg_body = $root.ENeg.toObject(message.e_neg_body, options);
            if (options.oneofs)
                object.expr_instance = "e_neg_body";
        }
        if (message.e_mult_body != null && message.hasOwnProperty("e_mult_body")) {
            object.e_mult_body = $root.EMult.toObject(message.e_mult_body, options);
            if (options.oneofs)
                object.expr_instance = "e_mult_body";
        }
        if (message.e_div_body != null && message.hasOwnProperty("e_div_body")) {
            object.e_div_body = $root.EDiv.toObject(message.e_div_body, options);
            if (options.oneofs)
                object.expr_instance = "e_div_body";
        }
        if (message.e_plus_body != null && message.hasOwnProperty("e_plus_body")) {
            object.e_plus_body = $root.EPlus.toObject(message.e_plus_body, options);
            if (options.oneofs)
                object.expr_instance = "e_plus_body";
        }
        if (message.e_minus_body != null && message.hasOwnProperty("e_minus_body")) {
            object.e_minus_body = $root.EMinus.toObject(message.e_minus_body, options);
            if (options.oneofs)
                object.expr_instance = "e_minus_body";
        }
        if (message.e_lt_body != null && message.hasOwnProperty("e_lt_body")) {
            object.e_lt_body = $root.ELt.toObject(message.e_lt_body, options);
            if (options.oneofs)
                object.expr_instance = "e_lt_body";
        }
        if (message.e_lte_body != null && message.hasOwnProperty("e_lte_body")) {
            object.e_lte_body = $root.ELte.toObject(message.e_lte_body, options);
            if (options.oneofs)
                object.expr_instance = "e_lte_body";
        }
        if (message.e_gt_body != null && message.hasOwnProperty("e_gt_body")) {
            object.e_gt_body = $root.EGt.toObject(message.e_gt_body, options);
            if (options.oneofs)
                object.expr_instance = "e_gt_body";
        }
        if (message.e_gte_body != null && message.hasOwnProperty("e_gte_body")) {
            object.e_gte_body = $root.EGte.toObject(message.e_gte_body, options);
            if (options.oneofs)
                object.expr_instance = "e_gte_body";
        }
        if (message.e_eq_body != null && message.hasOwnProperty("e_eq_body")) {
            object.e_eq_body = $root.EEq.toObject(message.e_eq_body, options);
            if (options.oneofs)
                object.expr_instance = "e_eq_body";
        }
        if (message.e_neq_body != null && message.hasOwnProperty("e_neq_body")) {
            object.e_neq_body = $root.ENeq.toObject(message.e_neq_body, options);
            if (options.oneofs)
                object.expr_instance = "e_neq_body";
        }
        if (message.e_and_body != null && message.hasOwnProperty("e_and_body")) {
            object.e_and_body = $root.EAnd.toObject(message.e_and_body, options);
            if (options.oneofs)
                object.expr_instance = "e_and_body";
        }
        if (message.e_or_body != null && message.hasOwnProperty("e_or_body")) {
            object.e_or_body = $root.EOr.toObject(message.e_or_body, options);
            if (options.oneofs)
                object.expr_instance = "e_or_body";
        }
        if (message.e_var_body != null && message.hasOwnProperty("e_var_body")) {
            object.e_var_body = $root.EVar.toObject(message.e_var_body, options);
            if (options.oneofs)
                object.expr_instance = "e_var_body";
        }
        if (message.e_list_body != null && message.hasOwnProperty("e_list_body")) {
            object.e_list_body = $root.EList.toObject(message.e_list_body, options);
            if (options.oneofs)
                object.expr_instance = "e_list_body";
        }
        if (message.e_tuple_body != null && message.hasOwnProperty("e_tuple_body")) {
            object.e_tuple_body = $root.ETuple.toObject(message.e_tuple_body, options);
            if (options.oneofs)
                object.expr_instance = "e_tuple_body";
        }
        if (message.e_set_body != null && message.hasOwnProperty("e_set_body")) {
            object.e_set_body = $root.ESet.toObject(message.e_set_body, options);
            if (options.oneofs)
                object.expr_instance = "e_set_body";
        }
        if (message.e_map_body != null && message.hasOwnProperty("e_map_body")) {
            object.e_map_body = $root.EMap.toObject(message.e_map_body, options);
            if (options.oneofs)
                object.expr_instance = "e_map_body";
        }
        if (message.e_method_body != null && message.hasOwnProperty("e_method_body")) {
            object.e_method_body = $root.EMethod.toObject(message.e_method_body, options);
            if (options.oneofs)
                object.expr_instance = "e_method_body";
        }
        if (message.g_byte_array != null && message.hasOwnProperty("g_byte_array")) {
            object.g_byte_array = options.bytes === String ? $util.base64.encode(message.g_byte_array, 0, message.g_byte_array.length) : options.bytes === Array ? Array.prototype.slice.call(message.g_byte_array) : message.g_byte_array;
            if (options.oneofs)
                object.expr_instance = "g_byte_array";
        }
        if (message.e_matches_body != null && message.hasOwnProperty("e_matches_body")) {
            object.e_matches_body = $root.EMatches.toObject(message.e_matches_body, options);
            if (options.oneofs)
                object.expr_instance = "e_matches_body";
        }
        if (message.e_percent_percent_body != null && message.hasOwnProperty("e_percent_percent_body")) {
            object.e_percent_percent_body = $root.EPercentPercent.toObject(message.e_percent_percent_body, options);
            if (options.oneofs)
                object.expr_instance = "e_percent_percent_body";
        }
        if (message.e_plus_plus_body != null && message.hasOwnProperty("e_plus_plus_body")) {
            object.e_plus_plus_body = $root.EPlusPlus.toObject(message.e_plus_plus_body, options);
            if (options.oneofs)
                object.expr_instance = "e_plus_plus_body";
        }
        if (message.e_minus_minus_body != null && message.hasOwnProperty("e_minus_minus_body")) {
            object.e_minus_minus_body = $root.EMinusMinus.toObject(message.e_minus_minus_body, options);
            if (options.oneofs)
                object.expr_instance = "e_minus_minus_body";
        }
        if (message.e_mod_body != null && message.hasOwnProperty("e_mod_body")) {
            object.e_mod_body = $root.EMod.toObject(message.e_mod_body, options);
            if (options.oneofs)
                object.expr_instance = "e_mod_body";
        }
        return object;
    };

    Expr.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Expr;
})();

$root.EList = (function() {

    function EList(properties) {
        this.ps = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    EList.prototype.ps = $util.emptyArray;
    EList.prototype.locallyFree = $util.newBuffer([]);
    EList.prototype.connective_used = false;
    EList.prototype.remainder = null;

    EList.create = function create(properties) {
        return new EList(properties);
    };

    EList.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.ps != null && message.ps.length)
            for (var i = 0; i < message.ps.length; ++i)
                $root.Par.encode(message.ps[i], writer.uint32(10).fork()).ldelim();
        if (message.locallyFree != null && message.hasOwnProperty("locallyFree"))
            writer.uint32(26).bytes(message.locallyFree);
        if (message.connective_used != null && message.hasOwnProperty("connective_used"))
            writer.uint32(32).bool(message.connective_used);
        if (message.remainder != null && message.hasOwnProperty("remainder"))
            $root.Var.encode(message.remainder, writer.uint32(42).fork()).ldelim();
        return writer;
    };

    EList.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    EList.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EList();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.ps && message.ps.length))
                    message.ps = [];
                message.ps.push($root.Par.decode(reader, reader.uint32()));
                break;
            case 3:
                message.locallyFree = reader.bytes();
                break;
            case 4:
                message.connective_used = reader.bool();
                break;
            case 5:
                message.remainder = $root.Var.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    EList.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    EList.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.ps != null && message.hasOwnProperty("ps")) {
            if (!Array.isArray(message.ps))
                return "ps: array expected";
            for (var i = 0; i < message.ps.length; ++i) {
                var error = $root.Par.verify(message.ps[i]);
                if (error)
                    return "ps." + error;
            }
        }
        if (message.locallyFree != null && message.hasOwnProperty("locallyFree"))
            if (!(message.locallyFree && typeof message.locallyFree.length === "number" || $util.isString(message.locallyFree)))
                return "locallyFree: buffer expected";
        if (message.connective_used != null && message.hasOwnProperty("connective_used"))
            if (typeof message.connective_used !== "boolean")
                return "connective_used: boolean expected";
        if (message.remainder != null && message.hasOwnProperty("remainder")) {
            var error = $root.Var.verify(message.remainder);
            if (error)
                return "remainder." + error;
        }
        return null;
    };

    EList.fromObject = function fromObject(object) {
        if (object instanceof $root.EList)
            return object;
        var message = new $root.EList();
        if (object.ps) {
            if (!Array.isArray(object.ps))
                throw TypeError(".EList.ps: array expected");
            message.ps = [];
            for (var i = 0; i < object.ps.length; ++i) {
                if (typeof object.ps[i] !== "object")
                    throw TypeError(".EList.ps: object expected");
                message.ps[i] = $root.Par.fromObject(object.ps[i]);
            }
        }
        if (object.locallyFree != null)
            if (typeof object.locallyFree === "string")
                $util.base64.decode(object.locallyFree, message.locallyFree = $util.newBuffer($util.base64.length(object.locallyFree)), 0);
            else if (object.locallyFree.length)
                message.locallyFree = object.locallyFree;
        if (object.connective_used != null)
            message.connective_used = Boolean(object.connective_used);
        if (object.remainder != null) {
            if (typeof object.remainder !== "object")
                throw TypeError(".EList.remainder: object expected");
            message.remainder = $root.Var.fromObject(object.remainder);
        }
        return message;
    };

    EList.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.ps = [];
        if (options.defaults) {
            if (options.bytes === String)
                object.locallyFree = "";
            else {
                object.locallyFree = [];
                if (options.bytes !== Array)
                    object.locallyFree = $util.newBuffer(object.locallyFree);
            }
            object.connective_used = false;
            object.remainder = null;
        }
        if (message.ps && message.ps.length) {
            object.ps = [];
            for (var j = 0; j < message.ps.length; ++j)
                object.ps[j] = $root.Par.toObject(message.ps[j], options);
        }
        if (message.locallyFree != null && message.hasOwnProperty("locallyFree"))
            object.locallyFree = options.bytes === String ? $util.base64.encode(message.locallyFree, 0, message.locallyFree.length) : options.bytes === Array ? Array.prototype.slice.call(message.locallyFree) : message.locallyFree;
        if (message.connective_used != null && message.hasOwnProperty("connective_used"))
            object.connective_used = message.connective_used;
        if (message.remainder != null && message.hasOwnProperty("remainder"))
            object.remainder = $root.Var.toObject(message.remainder, options);
        return object;
    };

    EList.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EList;
})();

$root.ETuple = (function() {

    function ETuple(properties) {
        this.ps = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    ETuple.prototype.ps = $util.emptyArray;
    ETuple.prototype.locallyFree = $util.newBuffer([]);
    ETuple.prototype.connective_used = false;

    ETuple.create = function create(properties) {
        return new ETuple(properties);
    };

    ETuple.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.ps != null && message.ps.length)
            for (var i = 0; i < message.ps.length; ++i)
                $root.Par.encode(message.ps[i], writer.uint32(10).fork()).ldelim();
        if (message.locallyFree != null && message.hasOwnProperty("locallyFree"))
            writer.uint32(26).bytes(message.locallyFree);
        if (message.connective_used != null && message.hasOwnProperty("connective_used"))
            writer.uint32(32).bool(message.connective_used);
        return writer;
    };

    ETuple.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    ETuple.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ETuple();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.ps && message.ps.length))
                    message.ps = [];
                message.ps.push($root.Par.decode(reader, reader.uint32()));
                break;
            case 3:
                message.locallyFree = reader.bytes();
                break;
            case 4:
                message.connective_used = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    ETuple.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    ETuple.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.ps != null && message.hasOwnProperty("ps")) {
            if (!Array.isArray(message.ps))
                return "ps: array expected";
            for (var i = 0; i < message.ps.length; ++i) {
                var error = $root.Par.verify(message.ps[i]);
                if (error)
                    return "ps." + error;
            }
        }
        if (message.locallyFree != null && message.hasOwnProperty("locallyFree"))
            if (!(message.locallyFree && typeof message.locallyFree.length === "number" || $util.isString(message.locallyFree)))
                return "locallyFree: buffer expected";
        if (message.connective_used != null && message.hasOwnProperty("connective_used"))
            if (typeof message.connective_used !== "boolean")
                return "connective_used: boolean expected";
        return null;
    };

    ETuple.fromObject = function fromObject(object) {
        if (object instanceof $root.ETuple)
            return object;
        var message = new $root.ETuple();
        if (object.ps) {
            if (!Array.isArray(object.ps))
                throw TypeError(".ETuple.ps: array expected");
            message.ps = [];
            for (var i = 0; i < object.ps.length; ++i) {
                if (typeof object.ps[i] !== "object")
                    throw TypeError(".ETuple.ps: object expected");
                message.ps[i] = $root.Par.fromObject(object.ps[i]);
            }
        }
        if (object.locallyFree != null)
            if (typeof object.locallyFree === "string")
                $util.base64.decode(object.locallyFree, message.locallyFree = $util.newBuffer($util.base64.length(object.locallyFree)), 0);
            else if (object.locallyFree.length)
                message.locallyFree = object.locallyFree;
        if (object.connective_used != null)
            message.connective_used = Boolean(object.connective_used);
        return message;
    };

    ETuple.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.ps = [];
        if (options.defaults) {
            if (options.bytes === String)
                object.locallyFree = "";
            else {
                object.locallyFree = [];
                if (options.bytes !== Array)
                    object.locallyFree = $util.newBuffer(object.locallyFree);
            }
            object.connective_used = false;
        }
        if (message.ps && message.ps.length) {
            object.ps = [];
            for (var j = 0; j < message.ps.length; ++j)
                object.ps[j] = $root.Par.toObject(message.ps[j], options);
        }
        if (message.locallyFree != null && message.hasOwnProperty("locallyFree"))
            object.locallyFree = options.bytes === String ? $util.base64.encode(message.locallyFree, 0, message.locallyFree.length) : options.bytes === Array ? Array.prototype.slice.call(message.locallyFree) : message.locallyFree;
        if (message.connective_used != null && message.hasOwnProperty("connective_used"))
            object.connective_used = message.connective_used;
        return object;
    };

    ETuple.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ETuple;
})();

$root.ESet = (function() {

    function ESet(properties) {
        this.ps = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    ESet.prototype.ps = $util.emptyArray;
    ESet.prototype.locallyFree = $util.newBuffer([]);
    ESet.prototype.connective_used = false;
    ESet.prototype.remainder = null;

    ESet.create = function create(properties) {
        return new ESet(properties);
    };

    ESet.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.ps != null && message.ps.length)
            for (var i = 0; i < message.ps.length; ++i)
                $root.Par.encode(message.ps[i], writer.uint32(10).fork()).ldelim();
        if (message.locallyFree != null && message.hasOwnProperty("locallyFree"))
            writer.uint32(26).bytes(message.locallyFree);
        if (message.connective_used != null && message.hasOwnProperty("connective_used"))
            writer.uint32(32).bool(message.connective_used);
        if (message.remainder != null && message.hasOwnProperty("remainder"))
            $root.Var.encode(message.remainder, writer.uint32(42).fork()).ldelim();
        return writer;
    };

    ESet.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    ESet.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ESet();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.ps && message.ps.length))
                    message.ps = [];
                message.ps.push($root.Par.decode(reader, reader.uint32()));
                break;
            case 3:
                message.locallyFree = reader.bytes();
                break;
            case 4:
                message.connective_used = reader.bool();
                break;
            case 5:
                message.remainder = $root.Var.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    ESet.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    ESet.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.ps != null && message.hasOwnProperty("ps")) {
            if (!Array.isArray(message.ps))
                return "ps: array expected";
            for (var i = 0; i < message.ps.length; ++i) {
                var error = $root.Par.verify(message.ps[i]);
                if (error)
                    return "ps." + error;
            }
        }
        if (message.locallyFree != null && message.hasOwnProperty("locallyFree"))
            if (!(message.locallyFree && typeof message.locallyFree.length === "number" || $util.isString(message.locallyFree)))
                return "locallyFree: buffer expected";
        if (message.connective_used != null && message.hasOwnProperty("connective_used"))
            if (typeof message.connective_used !== "boolean")
                return "connective_used: boolean expected";
        if (message.remainder != null && message.hasOwnProperty("remainder")) {
            var error = $root.Var.verify(message.remainder);
            if (error)
                return "remainder." + error;
        }
        return null;
    };

    ESet.fromObject = function fromObject(object) {
        if (object instanceof $root.ESet)
            return object;
        var message = new $root.ESet();
        if (object.ps) {
            if (!Array.isArray(object.ps))
                throw TypeError(".ESet.ps: array expected");
            message.ps = [];
            for (var i = 0; i < object.ps.length; ++i) {
                if (typeof object.ps[i] !== "object")
                    throw TypeError(".ESet.ps: object expected");
                message.ps[i] = $root.Par.fromObject(object.ps[i]);
            }
        }
        if (object.locallyFree != null)
            if (typeof object.locallyFree === "string")
                $util.base64.decode(object.locallyFree, message.locallyFree = $util.newBuffer($util.base64.length(object.locallyFree)), 0);
            else if (object.locallyFree.length)
                message.locallyFree = object.locallyFree;
        if (object.connective_used != null)
            message.connective_used = Boolean(object.connective_used);
        if (object.remainder != null) {
            if (typeof object.remainder !== "object")
                throw TypeError(".ESet.remainder: object expected");
            message.remainder = $root.Var.fromObject(object.remainder);
        }
        return message;
    };

    ESet.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.ps = [];
        if (options.defaults) {
            if (options.bytes === String)
                object.locallyFree = "";
            else {
                object.locallyFree = [];
                if (options.bytes !== Array)
                    object.locallyFree = $util.newBuffer(object.locallyFree);
            }
            object.connective_used = false;
            object.remainder = null;
        }
        if (message.ps && message.ps.length) {
            object.ps = [];
            for (var j = 0; j < message.ps.length; ++j)
                object.ps[j] = $root.Par.toObject(message.ps[j], options);
        }
        if (message.locallyFree != null && message.hasOwnProperty("locallyFree"))
            object.locallyFree = options.bytes === String ? $util.base64.encode(message.locallyFree, 0, message.locallyFree.length) : options.bytes === Array ? Array.prototype.slice.call(message.locallyFree) : message.locallyFree;
        if (message.connective_used != null && message.hasOwnProperty("connective_used"))
            object.connective_used = message.connective_used;
        if (message.remainder != null && message.hasOwnProperty("remainder"))
            object.remainder = $root.Var.toObject(message.remainder, options);
        return object;
    };

    ESet.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ESet;
})();

$root.EMap = (function() {

    function EMap(properties) {
        this.kvs = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    EMap.prototype.kvs = $util.emptyArray;
    EMap.prototype.locallyFree = $util.newBuffer([]);
    EMap.prototype.connective_used = false;
    EMap.prototype.remainder = null;

    EMap.create = function create(properties) {
        return new EMap(properties);
    };

    EMap.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.kvs != null && message.kvs.length)
            for (var i = 0; i < message.kvs.length; ++i)
                $root.KeyValuePair.encode(message.kvs[i], writer.uint32(10).fork()).ldelim();
        if (message.locallyFree != null && message.hasOwnProperty("locallyFree"))
            writer.uint32(26).bytes(message.locallyFree);
        if (message.connective_used != null && message.hasOwnProperty("connective_used"))
            writer.uint32(32).bool(message.connective_used);
        if (message.remainder != null && message.hasOwnProperty("remainder"))
            $root.Var.encode(message.remainder, writer.uint32(42).fork()).ldelim();
        return writer;
    };

    EMap.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    EMap.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EMap();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.kvs && message.kvs.length))
                    message.kvs = [];
                message.kvs.push($root.KeyValuePair.decode(reader, reader.uint32()));
                break;
            case 3:
                message.locallyFree = reader.bytes();
                break;
            case 4:
                message.connective_used = reader.bool();
                break;
            case 5:
                message.remainder = $root.Var.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    EMap.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    EMap.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.kvs != null && message.hasOwnProperty("kvs")) {
            if (!Array.isArray(message.kvs))
                return "kvs: array expected";
            for (var i = 0; i < message.kvs.length; ++i) {
                var error = $root.KeyValuePair.verify(message.kvs[i]);
                if (error)
                    return "kvs." + error;
            }
        }
        if (message.locallyFree != null && message.hasOwnProperty("locallyFree"))
            if (!(message.locallyFree && typeof message.locallyFree.length === "number" || $util.isString(message.locallyFree)))
                return "locallyFree: buffer expected";
        if (message.connective_used != null && message.hasOwnProperty("connective_used"))
            if (typeof message.connective_used !== "boolean")
                return "connective_used: boolean expected";
        if (message.remainder != null && message.hasOwnProperty("remainder")) {
            var error = $root.Var.verify(message.remainder);
            if (error)
                return "remainder." + error;
        }
        return null;
    };

    EMap.fromObject = function fromObject(object) {
        if (object instanceof $root.EMap)
            return object;
        var message = new $root.EMap();
        if (object.kvs) {
            if (!Array.isArray(object.kvs))
                throw TypeError(".EMap.kvs: array expected");
            message.kvs = [];
            for (var i = 0; i < object.kvs.length; ++i) {
                if (typeof object.kvs[i] !== "object")
                    throw TypeError(".EMap.kvs: object expected");
                message.kvs[i] = $root.KeyValuePair.fromObject(object.kvs[i]);
            }
        }
        if (object.locallyFree != null)
            if (typeof object.locallyFree === "string")
                $util.base64.decode(object.locallyFree, message.locallyFree = $util.newBuffer($util.base64.length(object.locallyFree)), 0);
            else if (object.locallyFree.length)
                message.locallyFree = object.locallyFree;
        if (object.connective_used != null)
            message.connective_used = Boolean(object.connective_used);
        if (object.remainder != null) {
            if (typeof object.remainder !== "object")
                throw TypeError(".EMap.remainder: object expected");
            message.remainder = $root.Var.fromObject(object.remainder);
        }
        return message;
    };

    EMap.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.kvs = [];
        if (options.defaults) {
            if (options.bytes === String)
                object.locallyFree = "";
            else {
                object.locallyFree = [];
                if (options.bytes !== Array)
                    object.locallyFree = $util.newBuffer(object.locallyFree);
            }
            object.connective_used = false;
            object.remainder = null;
        }
        if (message.kvs && message.kvs.length) {
            object.kvs = [];
            for (var j = 0; j < message.kvs.length; ++j)
                object.kvs[j] = $root.KeyValuePair.toObject(message.kvs[j], options);
        }
        if (message.locallyFree != null && message.hasOwnProperty("locallyFree"))
            object.locallyFree = options.bytes === String ? $util.base64.encode(message.locallyFree, 0, message.locallyFree.length) : options.bytes === Array ? Array.prototype.slice.call(message.locallyFree) : message.locallyFree;
        if (message.connective_used != null && message.hasOwnProperty("connective_used"))
            object.connective_used = message.connective_used;
        if (message.remainder != null && message.hasOwnProperty("remainder"))
            object.remainder = $root.Var.toObject(message.remainder, options);
        return object;
    };

    EMap.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EMap;
})();

$root.EMethod = (function() {

    function EMethod(properties) {
        this["arguments"] = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    EMethod.prototype.methodName = "";
    EMethod.prototype.target = null;
    EMethod.prototype["arguments"] = $util.emptyArray;
    EMethod.prototype.locallyFree = $util.newBuffer([]);
    EMethod.prototype.connective_used = false;

    EMethod.create = function create(properties) {
        return new EMethod(properties);
    };

    EMethod.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.methodName != null && message.hasOwnProperty("methodName"))
            writer.uint32(10).string(message.methodName);
        if (message.target != null && message.hasOwnProperty("target"))
            $root.Par.encode(message.target, writer.uint32(18).fork()).ldelim();
        if (message["arguments"] != null && message["arguments"].length)
            for (var i = 0; i < message["arguments"].length; ++i)
                $root.Par.encode(message["arguments"][i], writer.uint32(26).fork()).ldelim();
        if (message.locallyFree != null && message.hasOwnProperty("locallyFree"))
            writer.uint32(42).bytes(message.locallyFree);
        if (message.connective_used != null && message.hasOwnProperty("connective_used"))
            writer.uint32(48).bool(message.connective_used);
        return writer;
    };

    EMethod.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    EMethod.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EMethod();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.methodName = reader.string();
                break;
            case 2:
                message.target = $root.Par.decode(reader, reader.uint32());
                break;
            case 3:
                if (!(message["arguments"] && message["arguments"].length))
                    message["arguments"] = [];
                message["arguments"].push($root.Par.decode(reader, reader.uint32()));
                break;
            case 5:
                message.locallyFree = reader.bytes();
                break;
            case 6:
                message.connective_used = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    EMethod.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    EMethod.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.methodName != null && message.hasOwnProperty("methodName"))
            if (!$util.isString(message.methodName))
                return "methodName: string expected";
        if (message.target != null && message.hasOwnProperty("target")) {
            var error = $root.Par.verify(message.target);
            if (error)
                return "target." + error;
        }
        if (message["arguments"] != null && message.hasOwnProperty("arguments")) {
            if (!Array.isArray(message["arguments"]))
                return "arguments: array expected";
            for (var i = 0; i < message["arguments"].length; ++i) {
                var error = $root.Par.verify(message["arguments"][i]);
                if (error)
                    return "arguments." + error;
            }
        }
        if (message.locallyFree != null && message.hasOwnProperty("locallyFree"))
            if (!(message.locallyFree && typeof message.locallyFree.length === "number" || $util.isString(message.locallyFree)))
                return "locallyFree: buffer expected";
        if (message.connective_used != null && message.hasOwnProperty("connective_used"))
            if (typeof message.connective_used !== "boolean")
                return "connective_used: boolean expected";
        return null;
    };

    EMethod.fromObject = function fromObject(object) {
        if (object instanceof $root.EMethod)
            return object;
        var message = new $root.EMethod();
        if (object.methodName != null)
            message.methodName = String(object.methodName);
        if (object.target != null) {
            if (typeof object.target !== "object")
                throw TypeError(".EMethod.target: object expected");
            message.target = $root.Par.fromObject(object.target);
        }
        if (object["arguments"]) {
            if (!Array.isArray(object["arguments"]))
                throw TypeError(".EMethod.arguments: array expected");
            message["arguments"] = [];
            for (var i = 0; i < object["arguments"].length; ++i) {
                if (typeof object["arguments"][i] !== "object")
                    throw TypeError(".EMethod.arguments: object expected");
                message["arguments"][i] = $root.Par.fromObject(object["arguments"][i]);
            }
        }
        if (object.locallyFree != null)
            if (typeof object.locallyFree === "string")
                $util.base64.decode(object.locallyFree, message.locallyFree = $util.newBuffer($util.base64.length(object.locallyFree)), 0);
            else if (object.locallyFree.length)
                message.locallyFree = object.locallyFree;
        if (object.connective_used != null)
            message.connective_used = Boolean(object.connective_used);
        return message;
    };

    EMethod.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object["arguments"] = [];
        if (options.defaults) {
            object.methodName = "";
            object.target = null;
            if (options.bytes === String)
                object.locallyFree = "";
            else {
                object.locallyFree = [];
                if (options.bytes !== Array)
                    object.locallyFree = $util.newBuffer(object.locallyFree);
            }
            object.connective_used = false;
        }
        if (message.methodName != null && message.hasOwnProperty("methodName"))
            object.methodName = message.methodName;
        if (message.target != null && message.hasOwnProperty("target"))
            object.target = $root.Par.toObject(message.target, options);
        if (message["arguments"] && message["arguments"].length) {
            object["arguments"] = [];
            for (var j = 0; j < message["arguments"].length; ++j)
                object["arguments"][j] = $root.Par.toObject(message["arguments"][j], options);
        }
        if (message.locallyFree != null && message.hasOwnProperty("locallyFree"))
            object.locallyFree = options.bytes === String ? $util.base64.encode(message.locallyFree, 0, message.locallyFree.length) : options.bytes === Array ? Array.prototype.slice.call(message.locallyFree) : message.locallyFree;
        if (message.connective_used != null && message.hasOwnProperty("connective_used"))
            object.connective_used = message.connective_used;
        return object;
    };

    EMethod.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EMethod;
})();

$root.KeyValuePair = (function() {

    function KeyValuePair(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    KeyValuePair.prototype.key = null;
    KeyValuePair.prototype.value = null;

    KeyValuePair.create = function create(properties) {
        return new KeyValuePair(properties);
    };

    KeyValuePair.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.key != null && message.hasOwnProperty("key"))
            $root.Par.encode(message.key, writer.uint32(10).fork()).ldelim();
        if (message.value != null && message.hasOwnProperty("value"))
            $root.Par.encode(message.value, writer.uint32(18).fork()).ldelim();
        return writer;
    };

    KeyValuePair.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    KeyValuePair.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.KeyValuePair();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.key = $root.Par.decode(reader, reader.uint32());
                break;
            case 2:
                message.value = $root.Par.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    KeyValuePair.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    KeyValuePair.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.key != null && message.hasOwnProperty("key")) {
            var error = $root.Par.verify(message.key);
            if (error)
                return "key." + error;
        }
        if (message.value != null && message.hasOwnProperty("value")) {
            var error = $root.Par.verify(message.value);
            if (error)
                return "value." + error;
        }
        return null;
    };

    KeyValuePair.fromObject = function fromObject(object) {
        if (object instanceof $root.KeyValuePair)
            return object;
        var message = new $root.KeyValuePair();
        if (object.key != null) {
            if (typeof object.key !== "object")
                throw TypeError(".KeyValuePair.key: object expected");
            message.key = $root.Par.fromObject(object.key);
        }
        if (object.value != null) {
            if (typeof object.value !== "object")
                throw TypeError(".KeyValuePair.value: object expected");
            message.value = $root.Par.fromObject(object.value);
        }
        return message;
    };

    KeyValuePair.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.key = null;
            object.value = null;
        }
        if (message.key != null && message.hasOwnProperty("key"))
            object.key = $root.Par.toObject(message.key, options);
        if (message.value != null && message.hasOwnProperty("value"))
            object.value = $root.Par.toObject(message.value, options);
        return object;
    };

    KeyValuePair.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return KeyValuePair;
})();

$root.EVar = (function() {

    function EVar(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    EVar.prototype.v = null;

    EVar.create = function create(properties) {
        return new EVar(properties);
    };

    EVar.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.v != null && message.hasOwnProperty("v"))
            $root.Var.encode(message.v, writer.uint32(10).fork()).ldelim();
        return writer;
    };

    EVar.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    EVar.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EVar();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.v = $root.Var.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    EVar.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    EVar.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.v != null && message.hasOwnProperty("v")) {
            var error = $root.Var.verify(message.v);
            if (error)
                return "v." + error;
        }
        return null;
    };

    EVar.fromObject = function fromObject(object) {
        if (object instanceof $root.EVar)
            return object;
        var message = new $root.EVar();
        if (object.v != null) {
            if (typeof object.v !== "object")
                throw TypeError(".EVar.v: object expected");
            message.v = $root.Var.fromObject(object.v);
        }
        return message;
    };

    EVar.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.v = null;
        if (message.v != null && message.hasOwnProperty("v"))
            object.v = $root.Var.toObject(message.v, options);
        return object;
    };

    EVar.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EVar;
})();

$root.ENot = (function() {

    function ENot(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    ENot.prototype.p = null;

    ENot.create = function create(properties) {
        return new ENot(properties);
    };

    ENot.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.p != null && message.hasOwnProperty("p"))
            $root.Par.encode(message.p, writer.uint32(10).fork()).ldelim();
        return writer;
    };

    ENot.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    ENot.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ENot();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.p = $root.Par.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    ENot.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    ENot.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.p != null && message.hasOwnProperty("p")) {
            var error = $root.Par.verify(message.p);
            if (error)
                return "p." + error;
        }
        return null;
    };

    ENot.fromObject = function fromObject(object) {
        if (object instanceof $root.ENot)
            return object;
        var message = new $root.ENot();
        if (object.p != null) {
            if (typeof object.p !== "object")
                throw TypeError(".ENot.p: object expected");
            message.p = $root.Par.fromObject(object.p);
        }
        return message;
    };

    ENot.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.p = null;
        if (message.p != null && message.hasOwnProperty("p"))
            object.p = $root.Par.toObject(message.p, options);
        return object;
    };

    ENot.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ENot;
})();

$root.ENeg = (function() {

    function ENeg(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    ENeg.prototype.p = null;

    ENeg.create = function create(properties) {
        return new ENeg(properties);
    };

    ENeg.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.p != null && message.hasOwnProperty("p"))
            $root.Par.encode(message.p, writer.uint32(10).fork()).ldelim();
        return writer;
    };

    ENeg.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    ENeg.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ENeg();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.p = $root.Par.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    ENeg.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    ENeg.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.p != null && message.hasOwnProperty("p")) {
            var error = $root.Par.verify(message.p);
            if (error)
                return "p." + error;
        }
        return null;
    };

    ENeg.fromObject = function fromObject(object) {
        if (object instanceof $root.ENeg)
            return object;
        var message = new $root.ENeg();
        if (object.p != null) {
            if (typeof object.p !== "object")
                throw TypeError(".ENeg.p: object expected");
            message.p = $root.Par.fromObject(object.p);
        }
        return message;
    };

    ENeg.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.p = null;
        if (message.p != null && message.hasOwnProperty("p"))
            object.p = $root.Par.toObject(message.p, options);
        return object;
    };

    ENeg.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ENeg;
})();

$root.EMult = (function() {

    function EMult(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    EMult.prototype.p1 = null;
    EMult.prototype.p2 = null;

    EMult.create = function create(properties) {
        return new EMult(properties);
    };

    EMult.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.p1 != null && message.hasOwnProperty("p1"))
            $root.Par.encode(message.p1, writer.uint32(10).fork()).ldelim();
        if (message.p2 != null && message.hasOwnProperty("p2"))
            $root.Par.encode(message.p2, writer.uint32(18).fork()).ldelim();
        return writer;
    };

    EMult.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    EMult.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EMult();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.p1 = $root.Par.decode(reader, reader.uint32());
                break;
            case 2:
                message.p2 = $root.Par.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    EMult.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    EMult.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.p1 != null && message.hasOwnProperty("p1")) {
            var error = $root.Par.verify(message.p1);
            if (error)
                return "p1." + error;
        }
        if (message.p2 != null && message.hasOwnProperty("p2")) {
            var error = $root.Par.verify(message.p2);
            if (error)
                return "p2." + error;
        }
        return null;
    };

    EMult.fromObject = function fromObject(object) {
        if (object instanceof $root.EMult)
            return object;
        var message = new $root.EMult();
        if (object.p1 != null) {
            if (typeof object.p1 !== "object")
                throw TypeError(".EMult.p1: object expected");
            message.p1 = $root.Par.fromObject(object.p1);
        }
        if (object.p2 != null) {
            if (typeof object.p2 !== "object")
                throw TypeError(".EMult.p2: object expected");
            message.p2 = $root.Par.fromObject(object.p2);
        }
        return message;
    };

    EMult.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.p1 = null;
            object.p2 = null;
        }
        if (message.p1 != null && message.hasOwnProperty("p1"))
            object.p1 = $root.Par.toObject(message.p1, options);
        if (message.p2 != null && message.hasOwnProperty("p2"))
            object.p2 = $root.Par.toObject(message.p2, options);
        return object;
    };

    EMult.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EMult;
})();

$root.EDiv = (function() {

    function EDiv(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    EDiv.prototype.p1 = null;
    EDiv.prototype.p2 = null;

    EDiv.create = function create(properties) {
        return new EDiv(properties);
    };

    EDiv.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.p1 != null && message.hasOwnProperty("p1"))
            $root.Par.encode(message.p1, writer.uint32(10).fork()).ldelim();
        if (message.p2 != null && message.hasOwnProperty("p2"))
            $root.Par.encode(message.p2, writer.uint32(18).fork()).ldelim();
        return writer;
    };

    EDiv.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    EDiv.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EDiv();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.p1 = $root.Par.decode(reader, reader.uint32());
                break;
            case 2:
                message.p2 = $root.Par.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    EDiv.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    EDiv.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.p1 != null && message.hasOwnProperty("p1")) {
            var error = $root.Par.verify(message.p1);
            if (error)
                return "p1." + error;
        }
        if (message.p2 != null && message.hasOwnProperty("p2")) {
            var error = $root.Par.verify(message.p2);
            if (error)
                return "p2." + error;
        }
        return null;
    };

    EDiv.fromObject = function fromObject(object) {
        if (object instanceof $root.EDiv)
            return object;
        var message = new $root.EDiv();
        if (object.p1 != null) {
            if (typeof object.p1 !== "object")
                throw TypeError(".EDiv.p1: object expected");
            message.p1 = $root.Par.fromObject(object.p1);
        }
        if (object.p2 != null) {
            if (typeof object.p2 !== "object")
                throw TypeError(".EDiv.p2: object expected");
            message.p2 = $root.Par.fromObject(object.p2);
        }
        return message;
    };

    EDiv.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.p1 = null;
            object.p2 = null;
        }
        if (message.p1 != null && message.hasOwnProperty("p1"))
            object.p1 = $root.Par.toObject(message.p1, options);
        if (message.p2 != null && message.hasOwnProperty("p2"))
            object.p2 = $root.Par.toObject(message.p2, options);
        return object;
    };

    EDiv.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EDiv;
})();

$root.EMod = (function() {

    function EMod(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    EMod.prototype.p1 = null;
    EMod.prototype.p2 = null;

    EMod.create = function create(properties) {
        return new EMod(properties);
    };

    EMod.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.p1 != null && message.hasOwnProperty("p1"))
            $root.Par.encode(message.p1, writer.uint32(10).fork()).ldelim();
        if (message.p2 != null && message.hasOwnProperty("p2"))
            $root.Par.encode(message.p2, writer.uint32(18).fork()).ldelim();
        return writer;
    };

    EMod.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    EMod.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EMod();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.p1 = $root.Par.decode(reader, reader.uint32());
                break;
            case 2:
                message.p2 = $root.Par.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    EMod.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    EMod.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.p1 != null && message.hasOwnProperty("p1")) {
            var error = $root.Par.verify(message.p1);
            if (error)
                return "p1." + error;
        }
        if (message.p2 != null && message.hasOwnProperty("p2")) {
            var error = $root.Par.verify(message.p2);
            if (error)
                return "p2." + error;
        }
        return null;
    };

    EMod.fromObject = function fromObject(object) {
        if (object instanceof $root.EMod)
            return object;
        var message = new $root.EMod();
        if (object.p1 != null) {
            if (typeof object.p1 !== "object")
                throw TypeError(".EMod.p1: object expected");
            message.p1 = $root.Par.fromObject(object.p1);
        }
        if (object.p2 != null) {
            if (typeof object.p2 !== "object")
                throw TypeError(".EMod.p2: object expected");
            message.p2 = $root.Par.fromObject(object.p2);
        }
        return message;
    };

    EMod.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.p1 = null;
            object.p2 = null;
        }
        if (message.p1 != null && message.hasOwnProperty("p1"))
            object.p1 = $root.Par.toObject(message.p1, options);
        if (message.p2 != null && message.hasOwnProperty("p2"))
            object.p2 = $root.Par.toObject(message.p2, options);
        return object;
    };

    EMod.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EMod;
})();

$root.EPlus = (function() {

    function EPlus(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    EPlus.prototype.p1 = null;
    EPlus.prototype.p2 = null;

    EPlus.create = function create(properties) {
        return new EPlus(properties);
    };

    EPlus.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.p1 != null && message.hasOwnProperty("p1"))
            $root.Par.encode(message.p1, writer.uint32(10).fork()).ldelim();
        if (message.p2 != null && message.hasOwnProperty("p2"))
            $root.Par.encode(message.p2, writer.uint32(18).fork()).ldelim();
        return writer;
    };

    EPlus.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    EPlus.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EPlus();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.p1 = $root.Par.decode(reader, reader.uint32());
                break;
            case 2:
                message.p2 = $root.Par.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    EPlus.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    EPlus.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.p1 != null && message.hasOwnProperty("p1")) {
            var error = $root.Par.verify(message.p1);
            if (error)
                return "p1." + error;
        }
        if (message.p2 != null && message.hasOwnProperty("p2")) {
            var error = $root.Par.verify(message.p2);
            if (error)
                return "p2." + error;
        }
        return null;
    };

    EPlus.fromObject = function fromObject(object) {
        if (object instanceof $root.EPlus)
            return object;
        var message = new $root.EPlus();
        if (object.p1 != null) {
            if (typeof object.p1 !== "object")
                throw TypeError(".EPlus.p1: object expected");
            message.p1 = $root.Par.fromObject(object.p1);
        }
        if (object.p2 != null) {
            if (typeof object.p2 !== "object")
                throw TypeError(".EPlus.p2: object expected");
            message.p2 = $root.Par.fromObject(object.p2);
        }
        return message;
    };

    EPlus.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.p1 = null;
            object.p2 = null;
        }
        if (message.p1 != null && message.hasOwnProperty("p1"))
            object.p1 = $root.Par.toObject(message.p1, options);
        if (message.p2 != null && message.hasOwnProperty("p2"))
            object.p2 = $root.Par.toObject(message.p2, options);
        return object;
    };

    EPlus.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EPlus;
})();

$root.EMinus = (function() {

    function EMinus(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    EMinus.prototype.p1 = null;
    EMinus.prototype.p2 = null;

    EMinus.create = function create(properties) {
        return new EMinus(properties);
    };

    EMinus.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.p1 != null && message.hasOwnProperty("p1"))
            $root.Par.encode(message.p1, writer.uint32(10).fork()).ldelim();
        if (message.p2 != null && message.hasOwnProperty("p2"))
            $root.Par.encode(message.p2, writer.uint32(18).fork()).ldelim();
        return writer;
    };

    EMinus.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    EMinus.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EMinus();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.p1 = $root.Par.decode(reader, reader.uint32());
                break;
            case 2:
                message.p2 = $root.Par.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    EMinus.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    EMinus.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.p1 != null && message.hasOwnProperty("p1")) {
            var error = $root.Par.verify(message.p1);
            if (error)
                return "p1." + error;
        }
        if (message.p2 != null && message.hasOwnProperty("p2")) {
            var error = $root.Par.verify(message.p2);
            if (error)
                return "p2." + error;
        }
        return null;
    };

    EMinus.fromObject = function fromObject(object) {
        if (object instanceof $root.EMinus)
            return object;
        var message = new $root.EMinus();
        if (object.p1 != null) {
            if (typeof object.p1 !== "object")
                throw TypeError(".EMinus.p1: object expected");
            message.p1 = $root.Par.fromObject(object.p1);
        }
        if (object.p2 != null) {
            if (typeof object.p2 !== "object")
                throw TypeError(".EMinus.p2: object expected");
            message.p2 = $root.Par.fromObject(object.p2);
        }
        return message;
    };

    EMinus.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.p1 = null;
            object.p2 = null;
        }
        if (message.p1 != null && message.hasOwnProperty("p1"))
            object.p1 = $root.Par.toObject(message.p1, options);
        if (message.p2 != null && message.hasOwnProperty("p2"))
            object.p2 = $root.Par.toObject(message.p2, options);
        return object;
    };

    EMinus.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EMinus;
})();

$root.ELt = (function() {

    function ELt(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    ELt.prototype.p1 = null;
    ELt.prototype.p2 = null;

    ELt.create = function create(properties) {
        return new ELt(properties);
    };

    ELt.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.p1 != null && message.hasOwnProperty("p1"))
            $root.Par.encode(message.p1, writer.uint32(10).fork()).ldelim();
        if (message.p2 != null && message.hasOwnProperty("p2"))
            $root.Par.encode(message.p2, writer.uint32(18).fork()).ldelim();
        return writer;
    };

    ELt.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    ELt.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ELt();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.p1 = $root.Par.decode(reader, reader.uint32());
                break;
            case 2:
                message.p2 = $root.Par.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    ELt.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    ELt.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.p1 != null && message.hasOwnProperty("p1")) {
            var error = $root.Par.verify(message.p1);
            if (error)
                return "p1." + error;
        }
        if (message.p2 != null && message.hasOwnProperty("p2")) {
            var error = $root.Par.verify(message.p2);
            if (error)
                return "p2." + error;
        }
        return null;
    };

    ELt.fromObject = function fromObject(object) {
        if (object instanceof $root.ELt)
            return object;
        var message = new $root.ELt();
        if (object.p1 != null) {
            if (typeof object.p1 !== "object")
                throw TypeError(".ELt.p1: object expected");
            message.p1 = $root.Par.fromObject(object.p1);
        }
        if (object.p2 != null) {
            if (typeof object.p2 !== "object")
                throw TypeError(".ELt.p2: object expected");
            message.p2 = $root.Par.fromObject(object.p2);
        }
        return message;
    };

    ELt.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.p1 = null;
            object.p2 = null;
        }
        if (message.p1 != null && message.hasOwnProperty("p1"))
            object.p1 = $root.Par.toObject(message.p1, options);
        if (message.p2 != null && message.hasOwnProperty("p2"))
            object.p2 = $root.Par.toObject(message.p2, options);
        return object;
    };

    ELt.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ELt;
})();

$root.ELte = (function() {

    function ELte(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    ELte.prototype.p1 = null;
    ELte.prototype.p2 = null;

    ELte.create = function create(properties) {
        return new ELte(properties);
    };

    ELte.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.p1 != null && message.hasOwnProperty("p1"))
            $root.Par.encode(message.p1, writer.uint32(10).fork()).ldelim();
        if (message.p2 != null && message.hasOwnProperty("p2"))
            $root.Par.encode(message.p2, writer.uint32(18).fork()).ldelim();
        return writer;
    };

    ELte.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    ELte.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ELte();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.p1 = $root.Par.decode(reader, reader.uint32());
                break;
            case 2:
                message.p2 = $root.Par.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    ELte.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    ELte.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.p1 != null && message.hasOwnProperty("p1")) {
            var error = $root.Par.verify(message.p1);
            if (error)
                return "p1." + error;
        }
        if (message.p2 != null && message.hasOwnProperty("p2")) {
            var error = $root.Par.verify(message.p2);
            if (error)
                return "p2." + error;
        }
        return null;
    };

    ELte.fromObject = function fromObject(object) {
        if (object instanceof $root.ELte)
            return object;
        var message = new $root.ELte();
        if (object.p1 != null) {
            if (typeof object.p1 !== "object")
                throw TypeError(".ELte.p1: object expected");
            message.p1 = $root.Par.fromObject(object.p1);
        }
        if (object.p2 != null) {
            if (typeof object.p2 !== "object")
                throw TypeError(".ELte.p2: object expected");
            message.p2 = $root.Par.fromObject(object.p2);
        }
        return message;
    };

    ELte.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.p1 = null;
            object.p2 = null;
        }
        if (message.p1 != null && message.hasOwnProperty("p1"))
            object.p1 = $root.Par.toObject(message.p1, options);
        if (message.p2 != null && message.hasOwnProperty("p2"))
            object.p2 = $root.Par.toObject(message.p2, options);
        return object;
    };

    ELte.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ELte;
})();

$root.EGt = (function() {

    function EGt(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    EGt.prototype.p1 = null;
    EGt.prototype.p2 = null;

    EGt.create = function create(properties) {
        return new EGt(properties);
    };

    EGt.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.p1 != null && message.hasOwnProperty("p1"))
            $root.Par.encode(message.p1, writer.uint32(10).fork()).ldelim();
        if (message.p2 != null && message.hasOwnProperty("p2"))
            $root.Par.encode(message.p2, writer.uint32(18).fork()).ldelim();
        return writer;
    };

    EGt.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    EGt.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EGt();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.p1 = $root.Par.decode(reader, reader.uint32());
                break;
            case 2:
                message.p2 = $root.Par.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    EGt.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    EGt.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.p1 != null && message.hasOwnProperty("p1")) {
            var error = $root.Par.verify(message.p1);
            if (error)
                return "p1." + error;
        }
        if (message.p2 != null && message.hasOwnProperty("p2")) {
            var error = $root.Par.verify(message.p2);
            if (error)
                return "p2." + error;
        }
        return null;
    };

    EGt.fromObject = function fromObject(object) {
        if (object instanceof $root.EGt)
            return object;
        var message = new $root.EGt();
        if (object.p1 != null) {
            if (typeof object.p1 !== "object")
                throw TypeError(".EGt.p1: object expected");
            message.p1 = $root.Par.fromObject(object.p1);
        }
        if (object.p2 != null) {
            if (typeof object.p2 !== "object")
                throw TypeError(".EGt.p2: object expected");
            message.p2 = $root.Par.fromObject(object.p2);
        }
        return message;
    };

    EGt.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.p1 = null;
            object.p2 = null;
        }
        if (message.p1 != null && message.hasOwnProperty("p1"))
            object.p1 = $root.Par.toObject(message.p1, options);
        if (message.p2 != null && message.hasOwnProperty("p2"))
            object.p2 = $root.Par.toObject(message.p2, options);
        return object;
    };

    EGt.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EGt;
})();

$root.EGte = (function() {

    function EGte(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    EGte.prototype.p1 = null;
    EGte.prototype.p2 = null;

    EGte.create = function create(properties) {
        return new EGte(properties);
    };

    EGte.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.p1 != null && message.hasOwnProperty("p1"))
            $root.Par.encode(message.p1, writer.uint32(10).fork()).ldelim();
        if (message.p2 != null && message.hasOwnProperty("p2"))
            $root.Par.encode(message.p2, writer.uint32(18).fork()).ldelim();
        return writer;
    };

    EGte.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    EGte.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EGte();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.p1 = $root.Par.decode(reader, reader.uint32());
                break;
            case 2:
                message.p2 = $root.Par.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    EGte.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    EGte.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.p1 != null && message.hasOwnProperty("p1")) {
            var error = $root.Par.verify(message.p1);
            if (error)
                return "p1." + error;
        }
        if (message.p2 != null && message.hasOwnProperty("p2")) {
            var error = $root.Par.verify(message.p2);
            if (error)
                return "p2." + error;
        }
        return null;
    };

    EGte.fromObject = function fromObject(object) {
        if (object instanceof $root.EGte)
            return object;
        var message = new $root.EGte();
        if (object.p1 != null) {
            if (typeof object.p1 !== "object")
                throw TypeError(".EGte.p1: object expected");
            message.p1 = $root.Par.fromObject(object.p1);
        }
        if (object.p2 != null) {
            if (typeof object.p2 !== "object")
                throw TypeError(".EGte.p2: object expected");
            message.p2 = $root.Par.fromObject(object.p2);
        }
        return message;
    };

    EGte.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.p1 = null;
            object.p2 = null;
        }
        if (message.p1 != null && message.hasOwnProperty("p1"))
            object.p1 = $root.Par.toObject(message.p1, options);
        if (message.p2 != null && message.hasOwnProperty("p2"))
            object.p2 = $root.Par.toObject(message.p2, options);
        return object;
    };

    EGte.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EGte;
})();

$root.EEq = (function() {

    function EEq(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    EEq.prototype.p1 = null;
    EEq.prototype.p2 = null;

    EEq.create = function create(properties) {
        return new EEq(properties);
    };

    EEq.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.p1 != null && message.hasOwnProperty("p1"))
            $root.Par.encode(message.p1, writer.uint32(10).fork()).ldelim();
        if (message.p2 != null && message.hasOwnProperty("p2"))
            $root.Par.encode(message.p2, writer.uint32(18).fork()).ldelim();
        return writer;
    };

    EEq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    EEq.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EEq();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.p1 = $root.Par.decode(reader, reader.uint32());
                break;
            case 2:
                message.p2 = $root.Par.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    EEq.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    EEq.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.p1 != null && message.hasOwnProperty("p1")) {
            var error = $root.Par.verify(message.p1);
            if (error)
                return "p1." + error;
        }
        if (message.p2 != null && message.hasOwnProperty("p2")) {
            var error = $root.Par.verify(message.p2);
            if (error)
                return "p2." + error;
        }
        return null;
    };

    EEq.fromObject = function fromObject(object) {
        if (object instanceof $root.EEq)
            return object;
        var message = new $root.EEq();
        if (object.p1 != null) {
            if (typeof object.p1 !== "object")
                throw TypeError(".EEq.p1: object expected");
            message.p1 = $root.Par.fromObject(object.p1);
        }
        if (object.p2 != null) {
            if (typeof object.p2 !== "object")
                throw TypeError(".EEq.p2: object expected");
            message.p2 = $root.Par.fromObject(object.p2);
        }
        return message;
    };

    EEq.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.p1 = null;
            object.p2 = null;
        }
        if (message.p1 != null && message.hasOwnProperty("p1"))
            object.p1 = $root.Par.toObject(message.p1, options);
        if (message.p2 != null && message.hasOwnProperty("p2"))
            object.p2 = $root.Par.toObject(message.p2, options);
        return object;
    };

    EEq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EEq;
})();

$root.ENeq = (function() {

    function ENeq(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    ENeq.prototype.p1 = null;
    ENeq.prototype.p2 = null;

    ENeq.create = function create(properties) {
        return new ENeq(properties);
    };

    ENeq.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.p1 != null && message.hasOwnProperty("p1"))
            $root.Par.encode(message.p1, writer.uint32(10).fork()).ldelim();
        if (message.p2 != null && message.hasOwnProperty("p2"))
            $root.Par.encode(message.p2, writer.uint32(18).fork()).ldelim();
        return writer;
    };

    ENeq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    ENeq.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ENeq();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.p1 = $root.Par.decode(reader, reader.uint32());
                break;
            case 2:
                message.p2 = $root.Par.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    ENeq.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    ENeq.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.p1 != null && message.hasOwnProperty("p1")) {
            var error = $root.Par.verify(message.p1);
            if (error)
                return "p1." + error;
        }
        if (message.p2 != null && message.hasOwnProperty("p2")) {
            var error = $root.Par.verify(message.p2);
            if (error)
                return "p2." + error;
        }
        return null;
    };

    ENeq.fromObject = function fromObject(object) {
        if (object instanceof $root.ENeq)
            return object;
        var message = new $root.ENeq();
        if (object.p1 != null) {
            if (typeof object.p1 !== "object")
                throw TypeError(".ENeq.p1: object expected");
            message.p1 = $root.Par.fromObject(object.p1);
        }
        if (object.p2 != null) {
            if (typeof object.p2 !== "object")
                throw TypeError(".ENeq.p2: object expected");
            message.p2 = $root.Par.fromObject(object.p2);
        }
        return message;
    };

    ENeq.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.p1 = null;
            object.p2 = null;
        }
        if (message.p1 != null && message.hasOwnProperty("p1"))
            object.p1 = $root.Par.toObject(message.p1, options);
        if (message.p2 != null && message.hasOwnProperty("p2"))
            object.p2 = $root.Par.toObject(message.p2, options);
        return object;
    };

    ENeq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ENeq;
})();

$root.EAnd = (function() {

    function EAnd(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    EAnd.prototype.p1 = null;
    EAnd.prototype.p2 = null;

    EAnd.create = function create(properties) {
        return new EAnd(properties);
    };

    EAnd.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.p1 != null && message.hasOwnProperty("p1"))
            $root.Par.encode(message.p1, writer.uint32(10).fork()).ldelim();
        if (message.p2 != null && message.hasOwnProperty("p2"))
            $root.Par.encode(message.p2, writer.uint32(18).fork()).ldelim();
        return writer;
    };

    EAnd.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    EAnd.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EAnd();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.p1 = $root.Par.decode(reader, reader.uint32());
                break;
            case 2:
                message.p2 = $root.Par.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    EAnd.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    EAnd.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.p1 != null && message.hasOwnProperty("p1")) {
            var error = $root.Par.verify(message.p1);
            if (error)
                return "p1." + error;
        }
        if (message.p2 != null && message.hasOwnProperty("p2")) {
            var error = $root.Par.verify(message.p2);
            if (error)
                return "p2." + error;
        }
        return null;
    };

    EAnd.fromObject = function fromObject(object) {
        if (object instanceof $root.EAnd)
            return object;
        var message = new $root.EAnd();
        if (object.p1 != null) {
            if (typeof object.p1 !== "object")
                throw TypeError(".EAnd.p1: object expected");
            message.p1 = $root.Par.fromObject(object.p1);
        }
        if (object.p2 != null) {
            if (typeof object.p2 !== "object")
                throw TypeError(".EAnd.p2: object expected");
            message.p2 = $root.Par.fromObject(object.p2);
        }
        return message;
    };

    EAnd.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.p1 = null;
            object.p2 = null;
        }
        if (message.p1 != null && message.hasOwnProperty("p1"))
            object.p1 = $root.Par.toObject(message.p1, options);
        if (message.p2 != null && message.hasOwnProperty("p2"))
            object.p2 = $root.Par.toObject(message.p2, options);
        return object;
    };

    EAnd.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EAnd;
})();

$root.EOr = (function() {

    function EOr(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    EOr.prototype.p1 = null;
    EOr.prototype.p2 = null;

    EOr.create = function create(properties) {
        return new EOr(properties);
    };

    EOr.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.p1 != null && message.hasOwnProperty("p1"))
            $root.Par.encode(message.p1, writer.uint32(10).fork()).ldelim();
        if (message.p2 != null && message.hasOwnProperty("p2"))
            $root.Par.encode(message.p2, writer.uint32(18).fork()).ldelim();
        return writer;
    };

    EOr.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    EOr.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EOr();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.p1 = $root.Par.decode(reader, reader.uint32());
                break;
            case 2:
                message.p2 = $root.Par.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    EOr.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    EOr.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.p1 != null && message.hasOwnProperty("p1")) {
            var error = $root.Par.verify(message.p1);
            if (error)
                return "p1." + error;
        }
        if (message.p2 != null && message.hasOwnProperty("p2")) {
            var error = $root.Par.verify(message.p2);
            if (error)
                return "p2." + error;
        }
        return null;
    };

    EOr.fromObject = function fromObject(object) {
        if (object instanceof $root.EOr)
            return object;
        var message = new $root.EOr();
        if (object.p1 != null) {
            if (typeof object.p1 !== "object")
                throw TypeError(".EOr.p1: object expected");
            message.p1 = $root.Par.fromObject(object.p1);
        }
        if (object.p2 != null) {
            if (typeof object.p2 !== "object")
                throw TypeError(".EOr.p2: object expected");
            message.p2 = $root.Par.fromObject(object.p2);
        }
        return message;
    };

    EOr.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.p1 = null;
            object.p2 = null;
        }
        if (message.p1 != null && message.hasOwnProperty("p1"))
            object.p1 = $root.Par.toObject(message.p1, options);
        if (message.p2 != null && message.hasOwnProperty("p2"))
            object.p2 = $root.Par.toObject(message.p2, options);
        return object;
    };

    EOr.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EOr;
})();

$root.EMatches = (function() {

    function EMatches(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    EMatches.prototype.target = null;
    EMatches.prototype.pattern = null;

    EMatches.create = function create(properties) {
        return new EMatches(properties);
    };

    EMatches.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.target != null && message.hasOwnProperty("target"))
            $root.Par.encode(message.target, writer.uint32(10).fork()).ldelim();
        if (message.pattern != null && message.hasOwnProperty("pattern"))
            $root.Par.encode(message.pattern, writer.uint32(18).fork()).ldelim();
        return writer;
    };

    EMatches.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    EMatches.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EMatches();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.target = $root.Par.decode(reader, reader.uint32());
                break;
            case 2:
                message.pattern = $root.Par.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    EMatches.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    EMatches.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.target != null && message.hasOwnProperty("target")) {
            var error = $root.Par.verify(message.target);
            if (error)
                return "target." + error;
        }
        if (message.pattern != null && message.hasOwnProperty("pattern")) {
            var error = $root.Par.verify(message.pattern);
            if (error)
                return "pattern." + error;
        }
        return null;
    };

    EMatches.fromObject = function fromObject(object) {
        if (object instanceof $root.EMatches)
            return object;
        var message = new $root.EMatches();
        if (object.target != null) {
            if (typeof object.target !== "object")
                throw TypeError(".EMatches.target: object expected");
            message.target = $root.Par.fromObject(object.target);
        }
        if (object.pattern != null) {
            if (typeof object.pattern !== "object")
                throw TypeError(".EMatches.pattern: object expected");
            message.pattern = $root.Par.fromObject(object.pattern);
        }
        return message;
    };

    EMatches.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.target = null;
            object.pattern = null;
        }
        if (message.target != null && message.hasOwnProperty("target"))
            object.target = $root.Par.toObject(message.target, options);
        if (message.pattern != null && message.hasOwnProperty("pattern"))
            object.pattern = $root.Par.toObject(message.pattern, options);
        return object;
    };

    EMatches.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EMatches;
})();

$root.EPercentPercent = (function() {

    function EPercentPercent(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    EPercentPercent.prototype.p1 = null;
    EPercentPercent.prototype.p2 = null;

    EPercentPercent.create = function create(properties) {
        return new EPercentPercent(properties);
    };

    EPercentPercent.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.p1 != null && message.hasOwnProperty("p1"))
            $root.Par.encode(message.p1, writer.uint32(10).fork()).ldelim();
        if (message.p2 != null && message.hasOwnProperty("p2"))
            $root.Par.encode(message.p2, writer.uint32(18).fork()).ldelim();
        return writer;
    };

    EPercentPercent.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    EPercentPercent.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EPercentPercent();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.p1 = $root.Par.decode(reader, reader.uint32());
                break;
            case 2:
                message.p2 = $root.Par.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    EPercentPercent.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    EPercentPercent.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.p1 != null && message.hasOwnProperty("p1")) {
            var error = $root.Par.verify(message.p1);
            if (error)
                return "p1." + error;
        }
        if (message.p2 != null && message.hasOwnProperty("p2")) {
            var error = $root.Par.verify(message.p2);
            if (error)
                return "p2." + error;
        }
        return null;
    };

    EPercentPercent.fromObject = function fromObject(object) {
        if (object instanceof $root.EPercentPercent)
            return object;
        var message = new $root.EPercentPercent();
        if (object.p1 != null) {
            if (typeof object.p1 !== "object")
                throw TypeError(".EPercentPercent.p1: object expected");
            message.p1 = $root.Par.fromObject(object.p1);
        }
        if (object.p2 != null) {
            if (typeof object.p2 !== "object")
                throw TypeError(".EPercentPercent.p2: object expected");
            message.p2 = $root.Par.fromObject(object.p2);
        }
        return message;
    };

    EPercentPercent.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.p1 = null;
            object.p2 = null;
        }
        if (message.p1 != null && message.hasOwnProperty("p1"))
            object.p1 = $root.Par.toObject(message.p1, options);
        if (message.p2 != null && message.hasOwnProperty("p2"))
            object.p2 = $root.Par.toObject(message.p2, options);
        return object;
    };

    EPercentPercent.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EPercentPercent;
})();

$root.EPlusPlus = (function() {

    function EPlusPlus(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    EPlusPlus.prototype.p1 = null;
    EPlusPlus.prototype.p2 = null;

    EPlusPlus.create = function create(properties) {
        return new EPlusPlus(properties);
    };

    EPlusPlus.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.p1 != null && message.hasOwnProperty("p1"))
            $root.Par.encode(message.p1, writer.uint32(10).fork()).ldelim();
        if (message.p2 != null && message.hasOwnProperty("p2"))
            $root.Par.encode(message.p2, writer.uint32(18).fork()).ldelim();
        return writer;
    };

    EPlusPlus.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    EPlusPlus.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EPlusPlus();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.p1 = $root.Par.decode(reader, reader.uint32());
                break;
            case 2:
                message.p2 = $root.Par.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    EPlusPlus.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    EPlusPlus.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.p1 != null && message.hasOwnProperty("p1")) {
            var error = $root.Par.verify(message.p1);
            if (error)
                return "p1." + error;
        }
        if (message.p2 != null && message.hasOwnProperty("p2")) {
            var error = $root.Par.verify(message.p2);
            if (error)
                return "p2." + error;
        }
        return null;
    };

    EPlusPlus.fromObject = function fromObject(object) {
        if (object instanceof $root.EPlusPlus)
            return object;
        var message = new $root.EPlusPlus();
        if (object.p1 != null) {
            if (typeof object.p1 !== "object")
                throw TypeError(".EPlusPlus.p1: object expected");
            message.p1 = $root.Par.fromObject(object.p1);
        }
        if (object.p2 != null) {
            if (typeof object.p2 !== "object")
                throw TypeError(".EPlusPlus.p2: object expected");
            message.p2 = $root.Par.fromObject(object.p2);
        }
        return message;
    };

    EPlusPlus.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.p1 = null;
            object.p2 = null;
        }
        if (message.p1 != null && message.hasOwnProperty("p1"))
            object.p1 = $root.Par.toObject(message.p1, options);
        if (message.p2 != null && message.hasOwnProperty("p2"))
            object.p2 = $root.Par.toObject(message.p2, options);
        return object;
    };

    EPlusPlus.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EPlusPlus;
})();

$root.EMinusMinus = (function() {

    function EMinusMinus(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    EMinusMinus.prototype.p1 = null;
    EMinusMinus.prototype.p2 = null;

    EMinusMinus.create = function create(properties) {
        return new EMinusMinus(properties);
    };

    EMinusMinus.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.p1 != null && message.hasOwnProperty("p1"))
            $root.Par.encode(message.p1, writer.uint32(10).fork()).ldelim();
        if (message.p2 != null && message.hasOwnProperty("p2"))
            $root.Par.encode(message.p2, writer.uint32(18).fork()).ldelim();
        return writer;
    };

    EMinusMinus.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    EMinusMinus.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EMinusMinus();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.p1 = $root.Par.decode(reader, reader.uint32());
                break;
            case 2:
                message.p2 = $root.Par.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    EMinusMinus.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    EMinusMinus.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.p1 != null && message.hasOwnProperty("p1")) {
            var error = $root.Par.verify(message.p1);
            if (error)
                return "p1." + error;
        }
        if (message.p2 != null && message.hasOwnProperty("p2")) {
            var error = $root.Par.verify(message.p2);
            if (error)
                return "p2." + error;
        }
        return null;
    };

    EMinusMinus.fromObject = function fromObject(object) {
        if (object instanceof $root.EMinusMinus)
            return object;
        var message = new $root.EMinusMinus();
        if (object.p1 != null) {
            if (typeof object.p1 !== "object")
                throw TypeError(".EMinusMinus.p1: object expected");
            message.p1 = $root.Par.fromObject(object.p1);
        }
        if (object.p2 != null) {
            if (typeof object.p2 !== "object")
                throw TypeError(".EMinusMinus.p2: object expected");
            message.p2 = $root.Par.fromObject(object.p2);
        }
        return message;
    };

    EMinusMinus.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.p1 = null;
            object.p2 = null;
        }
        if (message.p1 != null && message.hasOwnProperty("p1"))
            object.p1 = $root.Par.toObject(message.p1, options);
        if (message.p2 != null && message.hasOwnProperty("p2"))
            object.p2 = $root.Par.toObject(message.p2, options);
        return object;
    };

    EMinusMinus.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EMinusMinus;
})();

$root.Connective = (function() {

    function Connective(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    Connective.prototype.conn_and_body = null;
    Connective.prototype.conn_or_body = null;
    Connective.prototype.conn_not_body = null;
    Connective.prototype.var_ref_body = null;
    Connective.prototype.conn_bool = false;
    Connective.prototype.conn_int = false;
    Connective.prototype.conn_string = false;
    Connective.prototype.conn_uri = false;
    Connective.prototype.conn_byte_array = false;

    var $oneOfFields;

    Object.defineProperty(Connective.prototype, "connective_instance", {
        get: $util.oneOfGetter($oneOfFields = ["conn_and_body", "conn_or_body", "conn_not_body", "var_ref_body", "conn_bool", "conn_int", "conn_string", "conn_uri", "conn_byte_array"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    Connective.create = function create(properties) {
        return new Connective(properties);
    };

    Connective.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.conn_and_body != null && message.hasOwnProperty("conn_and_body"))
            $root.ConnectiveBody.encode(message.conn_and_body, writer.uint32(10).fork()).ldelim();
        if (message.conn_or_body != null && message.hasOwnProperty("conn_or_body"))
            $root.ConnectiveBody.encode(message.conn_or_body, writer.uint32(18).fork()).ldelim();
        if (message.conn_not_body != null && message.hasOwnProperty("conn_not_body"))
            $root.Par.encode(message.conn_not_body, writer.uint32(26).fork()).ldelim();
        if (message.var_ref_body != null && message.hasOwnProperty("var_ref_body"))
            $root.VarRef.encode(message.var_ref_body, writer.uint32(34).fork()).ldelim();
        if (message.conn_bool != null && message.hasOwnProperty("conn_bool"))
            writer.uint32(40).bool(message.conn_bool);
        if (message.conn_int != null && message.hasOwnProperty("conn_int"))
            writer.uint32(48).bool(message.conn_int);
        if (message.conn_string != null && message.hasOwnProperty("conn_string"))
            writer.uint32(56).bool(message.conn_string);
        if (message.conn_uri != null && message.hasOwnProperty("conn_uri"))
            writer.uint32(64).bool(message.conn_uri);
        if (message.conn_byte_array != null && message.hasOwnProperty("conn_byte_array"))
            writer.uint32(72).bool(message.conn_byte_array);
        return writer;
    };

    Connective.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    Connective.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Connective();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.conn_and_body = $root.ConnectiveBody.decode(reader, reader.uint32());
                break;
            case 2:
                message.conn_or_body = $root.ConnectiveBody.decode(reader, reader.uint32());
                break;
            case 3:
                message.conn_not_body = $root.Par.decode(reader, reader.uint32());
                break;
            case 4:
                message.var_ref_body = $root.VarRef.decode(reader, reader.uint32());
                break;
            case 5:
                message.conn_bool = reader.bool();
                break;
            case 6:
                message.conn_int = reader.bool();
                break;
            case 7:
                message.conn_string = reader.bool();
                break;
            case 8:
                message.conn_uri = reader.bool();
                break;
            case 9:
                message.conn_byte_array = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    Connective.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    Connective.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        var properties = {};
        if (message.conn_and_body != null && message.hasOwnProperty("conn_and_body")) {
            properties.connective_instance = 1;
            {
                var error = $root.ConnectiveBody.verify(message.conn_and_body);
                if (error)
                    return "conn_and_body." + error;
            }
        }
        if (message.conn_or_body != null && message.hasOwnProperty("conn_or_body")) {
            if (properties.connective_instance === 1)
                return "connective_instance: multiple values";
            properties.connective_instance = 1;
            {
                var error = $root.ConnectiveBody.verify(message.conn_or_body);
                if (error)
                    return "conn_or_body." + error;
            }
        }
        if (message.conn_not_body != null && message.hasOwnProperty("conn_not_body")) {
            if (properties.connective_instance === 1)
                return "connective_instance: multiple values";
            properties.connective_instance = 1;
            {
                var error = $root.Par.verify(message.conn_not_body);
                if (error)
                    return "conn_not_body." + error;
            }
        }
        if (message.var_ref_body != null && message.hasOwnProperty("var_ref_body")) {
            if (properties.connective_instance === 1)
                return "connective_instance: multiple values";
            properties.connective_instance = 1;
            {
                var error = $root.VarRef.verify(message.var_ref_body);
                if (error)
                    return "var_ref_body." + error;
            }
        }
        if (message.conn_bool != null && message.hasOwnProperty("conn_bool")) {
            if (properties.connective_instance === 1)
                return "connective_instance: multiple values";
            properties.connective_instance = 1;
            if (typeof message.conn_bool !== "boolean")
                return "conn_bool: boolean expected";
        }
        if (message.conn_int != null && message.hasOwnProperty("conn_int")) {
            if (properties.connective_instance === 1)
                return "connective_instance: multiple values";
            properties.connective_instance = 1;
            if (typeof message.conn_int !== "boolean")
                return "conn_int: boolean expected";
        }
        if (message.conn_string != null && message.hasOwnProperty("conn_string")) {
            if (properties.connective_instance === 1)
                return "connective_instance: multiple values";
            properties.connective_instance = 1;
            if (typeof message.conn_string !== "boolean")
                return "conn_string: boolean expected";
        }
        if (message.conn_uri != null && message.hasOwnProperty("conn_uri")) {
            if (properties.connective_instance === 1)
                return "connective_instance: multiple values";
            properties.connective_instance = 1;
            if (typeof message.conn_uri !== "boolean")
                return "conn_uri: boolean expected";
        }
        if (message.conn_byte_array != null && message.hasOwnProperty("conn_byte_array")) {
            if (properties.connective_instance === 1)
                return "connective_instance: multiple values";
            properties.connective_instance = 1;
            if (typeof message.conn_byte_array !== "boolean")
                return "conn_byte_array: boolean expected";
        }
        return null;
    };

    Connective.fromObject = function fromObject(object) {
        if (object instanceof $root.Connective)
            return object;
        var message = new $root.Connective();
        if (object.conn_and_body != null) {
            if (typeof object.conn_and_body !== "object")
                throw TypeError(".Connective.conn_and_body: object expected");
            message.conn_and_body = $root.ConnectiveBody.fromObject(object.conn_and_body);
        }
        if (object.conn_or_body != null) {
            if (typeof object.conn_or_body !== "object")
                throw TypeError(".Connective.conn_or_body: object expected");
            message.conn_or_body = $root.ConnectiveBody.fromObject(object.conn_or_body);
        }
        if (object.conn_not_body != null) {
            if (typeof object.conn_not_body !== "object")
                throw TypeError(".Connective.conn_not_body: object expected");
            message.conn_not_body = $root.Par.fromObject(object.conn_not_body);
        }
        if (object.var_ref_body != null) {
            if (typeof object.var_ref_body !== "object")
                throw TypeError(".Connective.var_ref_body: object expected");
            message.var_ref_body = $root.VarRef.fromObject(object.var_ref_body);
        }
        if (object.conn_bool != null)
            message.conn_bool = Boolean(object.conn_bool);
        if (object.conn_int != null)
            message.conn_int = Boolean(object.conn_int);
        if (object.conn_string != null)
            message.conn_string = Boolean(object.conn_string);
        if (object.conn_uri != null)
            message.conn_uri = Boolean(object.conn_uri);
        if (object.conn_byte_array != null)
            message.conn_byte_array = Boolean(object.conn_byte_array);
        return message;
    };

    Connective.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (message.conn_and_body != null && message.hasOwnProperty("conn_and_body")) {
            object.conn_and_body = $root.ConnectiveBody.toObject(message.conn_and_body, options);
            if (options.oneofs)
                object.connective_instance = "conn_and_body";
        }
        if (message.conn_or_body != null && message.hasOwnProperty("conn_or_body")) {
            object.conn_or_body = $root.ConnectiveBody.toObject(message.conn_or_body, options);
            if (options.oneofs)
                object.connective_instance = "conn_or_body";
        }
        if (message.conn_not_body != null && message.hasOwnProperty("conn_not_body")) {
            object.conn_not_body = $root.Par.toObject(message.conn_not_body, options);
            if (options.oneofs)
                object.connective_instance = "conn_not_body";
        }
        if (message.var_ref_body != null && message.hasOwnProperty("var_ref_body")) {
            object.var_ref_body = $root.VarRef.toObject(message.var_ref_body, options);
            if (options.oneofs)
                object.connective_instance = "var_ref_body";
        }
        if (message.conn_bool != null && message.hasOwnProperty("conn_bool")) {
            object.conn_bool = message.conn_bool;
            if (options.oneofs)
                object.connective_instance = "conn_bool";
        }
        if (message.conn_int != null && message.hasOwnProperty("conn_int")) {
            object.conn_int = message.conn_int;
            if (options.oneofs)
                object.connective_instance = "conn_int";
        }
        if (message.conn_string != null && message.hasOwnProperty("conn_string")) {
            object.conn_string = message.conn_string;
            if (options.oneofs)
                object.connective_instance = "conn_string";
        }
        if (message.conn_uri != null && message.hasOwnProperty("conn_uri")) {
            object.conn_uri = message.conn_uri;
            if (options.oneofs)
                object.connective_instance = "conn_uri";
        }
        if (message.conn_byte_array != null && message.hasOwnProperty("conn_byte_array")) {
            object.conn_byte_array = message.conn_byte_array;
            if (options.oneofs)
                object.connective_instance = "conn_byte_array";
        }
        return object;
    };

    Connective.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Connective;
})();

$root.VarRef = (function() {

    function VarRef(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    VarRef.prototype.index = 0;
    VarRef.prototype.depth = 0;

    VarRef.create = function create(properties) {
        return new VarRef(properties);
    };

    VarRef.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.index != null && message.hasOwnProperty("index"))
            writer.uint32(8).sint32(message.index);
        if (message.depth != null && message.hasOwnProperty("depth"))
            writer.uint32(16).sint32(message.depth);
        return writer;
    };

    VarRef.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    VarRef.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.VarRef();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.index = reader.sint32();
                break;
            case 2:
                message.depth = reader.sint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    VarRef.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    VarRef.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.index != null && message.hasOwnProperty("index"))
            if (!$util.isInteger(message.index))
                return "index: integer expected";
        if (message.depth != null && message.hasOwnProperty("depth"))
            if (!$util.isInteger(message.depth))
                return "depth: integer expected";
        return null;
    };

    VarRef.fromObject = function fromObject(object) {
        if (object instanceof $root.VarRef)
            return object;
        var message = new $root.VarRef();
        if (object.index != null)
            message.index = object.index | 0;
        if (object.depth != null)
            message.depth = object.depth | 0;
        return message;
    };

    VarRef.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.index = 0;
            object.depth = 0;
        }
        if (message.index != null && message.hasOwnProperty("index"))
            object.index = message.index;
        if (message.depth != null && message.hasOwnProperty("depth"))
            object.depth = message.depth;
        return object;
    };

    VarRef.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return VarRef;
})();

$root.ConnectiveBody = (function() {

    function ConnectiveBody(properties) {
        this.ps = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    ConnectiveBody.prototype.ps = $util.emptyArray;

    ConnectiveBody.create = function create(properties) {
        return new ConnectiveBody(properties);
    };

    ConnectiveBody.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.ps != null && message.ps.length)
            for (var i = 0; i < message.ps.length; ++i)
                $root.Par.encode(message.ps[i], writer.uint32(10).fork()).ldelim();
        return writer;
    };

    ConnectiveBody.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    ConnectiveBody.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ConnectiveBody();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.ps && message.ps.length))
                    message.ps = [];
                message.ps.push($root.Par.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    ConnectiveBody.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    ConnectiveBody.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.ps != null && message.hasOwnProperty("ps")) {
            if (!Array.isArray(message.ps))
                return "ps: array expected";
            for (var i = 0; i < message.ps.length; ++i) {
                var error = $root.Par.verify(message.ps[i]);
                if (error)
                    return "ps." + error;
            }
        }
        return null;
    };

    ConnectiveBody.fromObject = function fromObject(object) {
        if (object instanceof $root.ConnectiveBody)
            return object;
        var message = new $root.ConnectiveBody();
        if (object.ps) {
            if (!Array.isArray(object.ps))
                throw TypeError(".ConnectiveBody.ps: array expected");
            message.ps = [];
            for (var i = 0; i < object.ps.length; ++i) {
                if (typeof object.ps[i] !== "object")
                    throw TypeError(".ConnectiveBody.ps: object expected");
                message.ps[i] = $root.Par.fromObject(object.ps[i]);
            }
        }
        return message;
    };

    ConnectiveBody.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.ps = [];
        if (message.ps && message.ps.length) {
            object.ps = [];
            for (var j = 0; j < message.ps.length; ++j)
                object.ps[j] = $root.Par.toObject(message.ps[j], options);
        }
        return object;
    };

    ConnectiveBody.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ConnectiveBody;
})();

$root.DeployId = (function() {

    function DeployId(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    DeployId.prototype.sig = $util.newBuffer([]);

    DeployId.create = function create(properties) {
        return new DeployId(properties);
    };

    DeployId.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.sig != null && message.hasOwnProperty("sig"))
            writer.uint32(10).bytes(message.sig);
        return writer;
    };

    DeployId.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    DeployId.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DeployId();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.sig = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    DeployId.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    DeployId.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.sig != null && message.hasOwnProperty("sig"))
            if (!(message.sig && typeof message.sig.length === "number" || $util.isString(message.sig)))
                return "sig: buffer expected";
        return null;
    };

    DeployId.fromObject = function fromObject(object) {
        if (object instanceof $root.DeployId)
            return object;
        var message = new $root.DeployId();
        if (object.sig != null)
            if (typeof object.sig === "string")
                $util.base64.decode(object.sig, message.sig = $util.newBuffer($util.base64.length(object.sig)), 0);
            else if (object.sig.length)
                message.sig = object.sig;
        return message;
    };

    DeployId.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            if (options.bytes === String)
                object.sig = "";
            else {
                object.sig = [];
                if (options.bytes !== Array)
                    object.sig = $util.newBuffer(object.sig);
            }
        if (message.sig != null && message.hasOwnProperty("sig"))
            object.sig = options.bytes === String ? $util.base64.encode(message.sig, 0, message.sig.length) : options.bytes === Array ? Array.prototype.slice.call(message.sig) : message.sig;
        return object;
    };

    DeployId.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return DeployId;
})();

$root.DeployerId = (function() {

    function DeployerId(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    DeployerId.prototype.publicKey = $util.newBuffer([]);

    DeployerId.create = function create(properties) {
        return new DeployerId(properties);
    };

    DeployerId.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.publicKey != null && message.hasOwnProperty("publicKey"))
            writer.uint32(10).bytes(message.publicKey);
        return writer;
    };

    DeployerId.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    DeployerId.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DeployerId();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.publicKey = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    DeployerId.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    DeployerId.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.publicKey != null && message.hasOwnProperty("publicKey"))
            if (!(message.publicKey && typeof message.publicKey.length === "number" || $util.isString(message.publicKey)))
                return "publicKey: buffer expected";
        return null;
    };

    DeployerId.fromObject = function fromObject(object) {
        if (object instanceof $root.DeployerId)
            return object;
        var message = new $root.DeployerId();
        if (object.publicKey != null)
            if (typeof object.publicKey === "string")
                $util.base64.decode(object.publicKey, message.publicKey = $util.newBuffer($util.base64.length(object.publicKey)), 0);
            else if (object.publicKey.length)
                message.publicKey = object.publicKey;
        return message;
    };

    DeployerId.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            if (options.bytes === String)
                object.publicKey = "";
            else {
                object.publicKey = [];
                if (options.bytes !== Array)
                    object.publicKey = $util.newBuffer(object.publicKey);
            }
        if (message.publicKey != null && message.hasOwnProperty("publicKey"))
            object.publicKey = options.bytes === String ? $util.base64.encode(message.publicKey, 0, message.publicKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.publicKey) : message.publicKey;
        return object;
    };

    DeployerId.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return DeployerId;
})();

$root.GUnforgeable = (function() {

    function GUnforgeable(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    GUnforgeable.prototype.g_private_body = null;
    GUnforgeable.prototype.g_deploy_id_body = null;
    GUnforgeable.prototype.g_deployer_id_body = null;

    var $oneOfFields;

    Object.defineProperty(GUnforgeable.prototype, "unf_instance", {
        get: $util.oneOfGetter($oneOfFields = ["g_private_body", "g_deploy_id_body", "g_deployer_id_body"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    GUnforgeable.create = function create(properties) {
        return new GUnforgeable(properties);
    };

    GUnforgeable.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.g_private_body != null && message.hasOwnProperty("g_private_body"))
            $root.GPrivate.encode(message.g_private_body, writer.uint32(10).fork()).ldelim();
        if (message.g_deploy_id_body != null && message.hasOwnProperty("g_deploy_id_body"))
            $root.GDeployId.encode(message.g_deploy_id_body, writer.uint32(18).fork()).ldelim();
        if (message.g_deployer_id_body != null && message.hasOwnProperty("g_deployer_id_body"))
            $root.GDeployerId.encode(message.g_deployer_id_body, writer.uint32(26).fork()).ldelim();
        return writer;
    };

    GUnforgeable.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    GUnforgeable.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GUnforgeable();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.g_private_body = $root.GPrivate.decode(reader, reader.uint32());
                break;
            case 2:
                message.g_deploy_id_body = $root.GDeployId.decode(reader, reader.uint32());
                break;
            case 3:
                message.g_deployer_id_body = $root.GDeployerId.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    GUnforgeable.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    GUnforgeable.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        var properties = {};
        if (message.g_private_body != null && message.hasOwnProperty("g_private_body")) {
            properties.unf_instance = 1;
            {
                var error = $root.GPrivate.verify(message.g_private_body);
                if (error)
                    return "g_private_body." + error;
            }
        }
        if (message.g_deploy_id_body != null && message.hasOwnProperty("g_deploy_id_body")) {
            if (properties.unf_instance === 1)
                return "unf_instance: multiple values";
            properties.unf_instance = 1;
            {
                var error = $root.GDeployId.verify(message.g_deploy_id_body);
                if (error)
                    return "g_deploy_id_body." + error;
            }
        }
        if (message.g_deployer_id_body != null && message.hasOwnProperty("g_deployer_id_body")) {
            if (properties.unf_instance === 1)
                return "unf_instance: multiple values";
            properties.unf_instance = 1;
            {
                var error = $root.GDeployerId.verify(message.g_deployer_id_body);
                if (error)
                    return "g_deployer_id_body." + error;
            }
        }
        return null;
    };

    GUnforgeable.fromObject = function fromObject(object) {
        if (object instanceof $root.GUnforgeable)
            return object;
        var message = new $root.GUnforgeable();
        if (object.g_private_body != null) {
            if (typeof object.g_private_body !== "object")
                throw TypeError(".GUnforgeable.g_private_body: object expected");
            message.g_private_body = $root.GPrivate.fromObject(object.g_private_body);
        }
        if (object.g_deploy_id_body != null) {
            if (typeof object.g_deploy_id_body !== "object")
                throw TypeError(".GUnforgeable.g_deploy_id_body: object expected");
            message.g_deploy_id_body = $root.GDeployId.fromObject(object.g_deploy_id_body);
        }
        if (object.g_deployer_id_body != null) {
            if (typeof object.g_deployer_id_body !== "object")
                throw TypeError(".GUnforgeable.g_deployer_id_body: object expected");
            message.g_deployer_id_body = $root.GDeployerId.fromObject(object.g_deployer_id_body);
        }
        return message;
    };

    GUnforgeable.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (message.g_private_body != null && message.hasOwnProperty("g_private_body")) {
            object.g_private_body = $root.GPrivate.toObject(message.g_private_body, options);
            if (options.oneofs)
                object.unf_instance = "g_private_body";
        }
        if (message.g_deploy_id_body != null && message.hasOwnProperty("g_deploy_id_body")) {
            object.g_deploy_id_body = $root.GDeployId.toObject(message.g_deploy_id_body, options);
            if (options.oneofs)
                object.unf_instance = "g_deploy_id_body";
        }
        if (message.g_deployer_id_body != null && message.hasOwnProperty("g_deployer_id_body")) {
            object.g_deployer_id_body = $root.GDeployerId.toObject(message.g_deployer_id_body, options);
            if (options.oneofs)
                object.unf_instance = "g_deployer_id_body";
        }
        return object;
    };

    GUnforgeable.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GUnforgeable;
})();

$root.GPrivate = (function() {

    function GPrivate(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    GPrivate.prototype.id = $util.newBuffer([]);

    GPrivate.create = function create(properties) {
        return new GPrivate(properties);
    };

    GPrivate.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(10).bytes(message.id);
        return writer;
    };

    GPrivate.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    GPrivate.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GPrivate();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    GPrivate.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    GPrivate.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!(message.id && typeof message.id.length === "number" || $util.isString(message.id)))
                return "id: buffer expected";
        return null;
    };

    GPrivate.fromObject = function fromObject(object) {
        if (object instanceof $root.GPrivate)
            return object;
        var message = new $root.GPrivate();
        if (object.id != null)
            if (typeof object.id === "string")
                $util.base64.decode(object.id, message.id = $util.newBuffer($util.base64.length(object.id)), 0);
            else if (object.id.length)
                message.id = object.id;
        return message;
    };

    GPrivate.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            if (options.bytes === String)
                object.id = "";
            else {
                object.id = [];
                if (options.bytes !== Array)
                    object.id = $util.newBuffer(object.id);
            }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = options.bytes === String ? $util.base64.encode(message.id, 0, message.id.length) : options.bytes === Array ? Array.prototype.slice.call(message.id) : message.id;
        return object;
    };

    GPrivate.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GPrivate;
})();

$root.GDeployId = (function() {

    function GDeployId(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    GDeployId.prototype.sig = $util.newBuffer([]);

    GDeployId.create = function create(properties) {
        return new GDeployId(properties);
    };

    GDeployId.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.sig != null && message.hasOwnProperty("sig"))
            writer.uint32(10).bytes(message.sig);
        return writer;
    };

    GDeployId.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    GDeployId.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GDeployId();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.sig = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    GDeployId.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    GDeployId.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.sig != null && message.hasOwnProperty("sig"))
            if (!(message.sig && typeof message.sig.length === "number" || $util.isString(message.sig)))
                return "sig: buffer expected";
        return null;
    };

    GDeployId.fromObject = function fromObject(object) {
        if (object instanceof $root.GDeployId)
            return object;
        var message = new $root.GDeployId();
        if (object.sig != null)
            if (typeof object.sig === "string")
                $util.base64.decode(object.sig, message.sig = $util.newBuffer($util.base64.length(object.sig)), 0);
            else if (object.sig.length)
                message.sig = object.sig;
        return message;
    };

    GDeployId.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            if (options.bytes === String)
                object.sig = "";
            else {
                object.sig = [];
                if (options.bytes !== Array)
                    object.sig = $util.newBuffer(object.sig);
            }
        if (message.sig != null && message.hasOwnProperty("sig"))
            object.sig = options.bytes === String ? $util.base64.encode(message.sig, 0, message.sig.length) : options.bytes === Array ? Array.prototype.slice.call(message.sig) : message.sig;
        return object;
    };

    GDeployId.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GDeployId;
})();

$root.GDeployerId = (function() {

    function GDeployerId(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    GDeployerId.prototype.publicKey = $util.newBuffer([]);

    GDeployerId.create = function create(properties) {
        return new GDeployerId(properties);
    };

    GDeployerId.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.publicKey != null && message.hasOwnProperty("publicKey"))
            writer.uint32(10).bytes(message.publicKey);
        return writer;
    };

    GDeployerId.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    GDeployerId.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GDeployerId();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.publicKey = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    GDeployerId.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    GDeployerId.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.publicKey != null && message.hasOwnProperty("publicKey"))
            if (!(message.publicKey && typeof message.publicKey.length === "number" || $util.isString(message.publicKey)))
                return "publicKey: buffer expected";
        return null;
    };

    GDeployerId.fromObject = function fromObject(object) {
        if (object instanceof $root.GDeployerId)
            return object;
        var message = new $root.GDeployerId();
        if (object.publicKey != null)
            if (typeof object.publicKey === "string")
                $util.base64.decode(object.publicKey, message.publicKey = $util.newBuffer($util.base64.length(object.publicKey)), 0);
            else if (object.publicKey.length)
                message.publicKey = object.publicKey;
        return message;
    };

    GDeployerId.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            if (options.bytes === String)
                object.publicKey = "";
            else {
                object.publicKey = [];
                if (options.bytes !== Array)
                    object.publicKey = $util.newBuffer(object.publicKey);
            }
        if (message.publicKey != null && message.hasOwnProperty("publicKey"))
            object.publicKey = options.bytes === String ? $util.base64.encode(message.publicKey, 0, message.publicKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.publicKey) : message.publicKey;
        return object;
    };

    GDeployerId.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GDeployerId;
})();

$root.EitherAny = (function() {

    function EitherAny(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    EitherAny.prototype.type_url = "";
    EitherAny.prototype.value = $util.newBuffer([]);

    EitherAny.create = function create(properties) {
        return new EitherAny(properties);
    };

    EitherAny.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.type_url != null && message.hasOwnProperty("type_url"))
            writer.uint32(10).string(message.type_url);
        if (message.value != null && message.hasOwnProperty("value"))
            writer.uint32(18).bytes(message.value);
        return writer;
    };

    EitherAny.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    EitherAny.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EitherAny();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.type_url = reader.string();
                break;
            case 2:
                message.value = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    EitherAny.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    EitherAny.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.type_url != null && message.hasOwnProperty("type_url"))
            if (!$util.isString(message.type_url))
                return "type_url: string expected";
        if (message.value != null && message.hasOwnProperty("value"))
            if (!(message.value && typeof message.value.length === "number" || $util.isString(message.value)))
                return "value: buffer expected";
        return null;
    };

    EitherAny.fromObject = function fromObject(object) {
        if (object instanceof $root.EitherAny)
            return object;
        var message = new $root.EitherAny();
        if (object.type_url != null)
            message.type_url = String(object.type_url);
        if (object.value != null)
            if (typeof object.value === "string")
                $util.base64.decode(object.value, message.value = $util.newBuffer($util.base64.length(object.value)), 0);
            else if (object.value.length)
                message.value = object.value;
        return message;
    };

    EitherAny.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.type_url = "";
            if (options.bytes === String)
                object.value = "";
            else {
                object.value = [];
                if (options.bytes !== Array)
                    object.value = $util.newBuffer(object.value);
            }
        }
        if (message.type_url != null && message.hasOwnProperty("type_url"))
            object.type_url = message.type_url;
        if (message.value != null && message.hasOwnProperty("value"))
            object.value = options.bytes === String ? $util.base64.encode(message.value, 0, message.value.length) : options.bytes === Array ? Array.prototype.slice.call(message.value) : message.value;
        return object;
    };

    EitherAny.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EitherAny;
})();

$root.EitherError = (function() {

    function EitherError(properties) {
        this.messages = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    EitherError.prototype.messages = $util.emptyArray;

    EitherError.create = function create(properties) {
        return new EitherError(properties);
    };

    EitherError.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.messages != null && message.messages.length)
            for (var i = 0; i < message.messages.length; ++i)
                writer.uint32(10).string(message.messages[i]);
        return writer;
    };

    EitherError.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    EitherError.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EitherError();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.messages && message.messages.length))
                    message.messages = [];
                message.messages.push(reader.string());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    EitherError.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    EitherError.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.messages != null && message.hasOwnProperty("messages")) {
            if (!Array.isArray(message.messages))
                return "messages: array expected";
            for (var i = 0; i < message.messages.length; ++i)
                if (!$util.isString(message.messages[i]))
                    return "messages: string[] expected";
        }
        return null;
    };

    EitherError.fromObject = function fromObject(object) {
        if (object instanceof $root.EitherError)
            return object;
        var message = new $root.EitherError();
        if (object.messages) {
            if (!Array.isArray(object.messages))
                throw TypeError(".EitherError.messages: array expected");
            message.messages = [];
            for (var i = 0; i < object.messages.length; ++i)
                message.messages[i] = String(object.messages[i]);
        }
        return message;
    };

    EitherError.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.messages = [];
        if (message.messages && message.messages.length) {
            object.messages = [];
            for (var j = 0; j < message.messages.length; ++j)
                object.messages[j] = message.messages[j];
        }
        return object;
    };

    EitherError.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EitherError;
})();

$root.EitherSuccess = (function() {

    function EitherSuccess(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    EitherSuccess.prototype.response = null;

    EitherSuccess.create = function create(properties) {
        return new EitherSuccess(properties);
    };

    EitherSuccess.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.response != null && message.hasOwnProperty("response"))
            $root.EitherAny.encode(message.response, writer.uint32(10).fork()).ldelim();
        return writer;
    };

    EitherSuccess.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    EitherSuccess.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EitherSuccess();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.response = $root.EitherAny.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    EitherSuccess.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    EitherSuccess.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.response != null && message.hasOwnProperty("response")) {
            var error = $root.EitherAny.verify(message.response);
            if (error)
                return "response." + error;
        }
        return null;
    };

    EitherSuccess.fromObject = function fromObject(object) {
        if (object instanceof $root.EitherSuccess)
            return object;
        var message = new $root.EitherSuccess();
        if (object.response != null) {
            if (typeof object.response !== "object")
                throw TypeError(".EitherSuccess.response: object expected");
            message.response = $root.EitherAny.fromObject(object.response);
        }
        return message;
    };

    EitherSuccess.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.response = null;
        if (message.response != null && message.hasOwnProperty("response"))
            object.response = $root.EitherAny.toObject(message.response, options);
        return object;
    };

    EitherSuccess.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EitherSuccess;
})();

$root.Either = (function() {

    function Either(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    Either.prototype.error = null;
    Either.prototype.success = null;

    var $oneOfFields;

    Object.defineProperty(Either.prototype, "content", {
        get: $util.oneOfGetter($oneOfFields = ["error", "success"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    Either.create = function create(properties) {
        return new Either(properties);
    };

    Either.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.error != null && message.hasOwnProperty("error"))
            $root.EitherError.encode(message.error, writer.uint32(10).fork()).ldelim();
        if (message.success != null && message.hasOwnProperty("success"))
            $root.EitherSuccess.encode(message.success, writer.uint32(18).fork()).ldelim();
        return writer;
    };

    Either.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    Either.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Either();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.error = $root.EitherError.decode(reader, reader.uint32());
                break;
            case 2:
                message.success = $root.EitherSuccess.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    Either.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    Either.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        var properties = {};
        if (message.error != null && message.hasOwnProperty("error")) {
            properties.content = 1;
            {
                var error = $root.EitherError.verify(message.error);
                if (error)
                    return "error." + error;
            }
        }
        if (message.success != null && message.hasOwnProperty("success")) {
            if (properties.content === 1)
                return "content: multiple values";
            properties.content = 1;
            {
                var error = $root.EitherSuccess.verify(message.success);
                if (error)
                    return "success." + error;
            }
        }
        return null;
    };

    Either.fromObject = function fromObject(object) {
        if (object instanceof $root.Either)
            return object;
        var message = new $root.Either();
        if (object.error != null) {
            if (typeof object.error !== "object")
                throw TypeError(".Either.error: object expected");
            message.error = $root.EitherError.fromObject(object.error);
        }
        if (object.success != null) {
            if (typeof object.success !== "object")
                throw TypeError(".Either.success: object expected");
            message.success = $root.EitherSuccess.fromObject(object.success);
        }
        return message;
    };

    Either.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (message.error != null && message.hasOwnProperty("error")) {
            object.error = $root.EitherError.toObject(message.error, options);
            if (options.oneofs)
                object.content = "error";
        }
        if (message.success != null && message.hasOwnProperty("success")) {
            object.success = $root.EitherSuccess.toObject(message.success, options);
            if (options.oneofs)
                object.content = "success";
        }
        return object;
    };

    Either.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Either;
})();

$root.google = (function() {

    var google = {};

    google.protobuf = (function() {

        var protobuf = {};

        protobuf.Empty = (function() {

            function Empty(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            Empty.create = function create(properties) {
                return new Empty(properties);
            };

            Empty.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            Empty.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            Empty.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Empty();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            Empty.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            Empty.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            Empty.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Empty)
                    return object;
                return new $root.google.protobuf.Empty();
            };

            Empty.toObject = function toObject() {
                return {};
            };

            Empty.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Empty;
        })();

        protobuf.Any = (function() {

            function Any(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            Any.prototype.type_url = "";
            Any.prototype.value = $util.newBuffer([]);

            Any.create = function create(properties) {
                return new Any(properties);
            };

            Any.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.type_url != null && message.hasOwnProperty("type_url"))
                    writer.uint32(10).string(message.type_url);
                if (message.value != null && message.hasOwnProperty("value"))
                    writer.uint32(18).bytes(message.value);
                return writer;
            };

            Any.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            Any.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Any();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.type_url = reader.string();
                        break;
                    case 2:
                        message.value = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            Any.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            Any.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.type_url != null && message.hasOwnProperty("type_url"))
                    if (!$util.isString(message.type_url))
                        return "type_url: string expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!(message.value && typeof message.value.length === "number" || $util.isString(message.value)))
                        return "value: buffer expected";
                return null;
            };

            Any.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Any)
                    return object;
                var message = new $root.google.protobuf.Any();
                if (object.type_url != null)
                    message.type_url = String(object.type_url);
                if (object.value != null)
                    if (typeof object.value === "string")
                        $util.base64.decode(object.value, message.value = $util.newBuffer($util.base64.length(object.value)), 0);
                    else if (object.value.length)
                        message.value = object.value;
                return message;
            };

            Any.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.type_url = "";
                    if (options.bytes === String)
                        object.value = "";
                    else {
                        object.value = [];
                        if (options.bytes !== Array)
                            object.value = $util.newBuffer(object.value);
                    }
                }
                if (message.type_url != null && message.hasOwnProperty("type_url"))
                    object.type_url = message.type_url;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = options.bytes === String ? $util.base64.encode(message.value, 0, message.value.length) : options.bytes === Array ? Array.prototype.slice.call(message.value) : message.value;
                return object;
            };

            Any.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Any;
        })();

        return protobuf;
    })();

    return google;
})();

module.exports = $root;
