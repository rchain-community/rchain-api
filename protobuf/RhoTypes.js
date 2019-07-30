/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.Par = (function() {

    /**
     * Properties of a Par.
     * @exports IPar
     * @interface IPar
     * @property {Array.<ISend>|null} [sends] Par sends
     * @property {Array.<IReceive>|null} [receives] Par receives
     * @property {Array.<INew>|null} [news] Par news
     * @property {Array.<IExpr>|null} [exprs] Par exprs
     * @property {Array.<IMatch>|null} [matches] Par matches
     * @property {Array.<IGUnforgeable>|null} [unforgeables] Par unforgeables
     * @property {Array.<IBundle>|null} [bundles] Par bundles
     * @property {Array.<IConnective>|null} [connectives] Par connectives
     * @property {Uint8Array|null} [locallyFree] Par locallyFree
     * @property {boolean|null} [connective_used] Par connective_used
     */

    /**
     * Constructs a new Par.
     * @exports Par
     * @classdesc Rholang process
     * 
     * For example, `@0!(1) | @2!(3) | for(x <- @0) { Nil }` has two sends
     * and one receive.
     * 
     * The Nil process is a `Par` with no sends, receives, etc.
     * @implements IPar
     * @constructor
     * @param {IPar=} [properties] Properties to set
     */
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

    /**
     * Par sends.
     * @member {Array.<ISend>} sends
     * @memberof Par
     * @instance
     */
    Par.prototype.sends = $util.emptyArray;

    /**
     * Par receives.
     * @member {Array.<IReceive>} receives
     * @memberof Par
     * @instance
     */
    Par.prototype.receives = $util.emptyArray;

    /**
     * Par news.
     * @member {Array.<INew>} news
     * @memberof Par
     * @instance
     */
    Par.prototype.news = $util.emptyArray;

    /**
     * Par exprs.
     * @member {Array.<IExpr>} exprs
     * @memberof Par
     * @instance
     */
    Par.prototype.exprs = $util.emptyArray;

    /**
     * Par matches.
     * @member {Array.<IMatch>} matches
     * @memberof Par
     * @instance
     */
    Par.prototype.matches = $util.emptyArray;

    /**
     * Par unforgeables.
     * @member {Array.<IGUnforgeable>} unforgeables
     * @memberof Par
     * @instance
     */
    Par.prototype.unforgeables = $util.emptyArray;

    /**
     * Par bundles.
     * @member {Array.<IBundle>} bundles
     * @memberof Par
     * @instance
     */
    Par.prototype.bundles = $util.emptyArray;

    /**
     * Par connectives.
     * @member {Array.<IConnective>} connectives
     * @memberof Par
     * @instance
     */
    Par.prototype.connectives = $util.emptyArray;

    /**
     * Par locallyFree.
     * @member {Uint8Array} locallyFree
     * @memberof Par
     * @instance
     */
    Par.prototype.locallyFree = $util.newBuffer([]);

    /**
     * Par connective_used.
     * @member {boolean} connective_used
     * @memberof Par
     * @instance
     */
    Par.prototype.connective_used = false;

    /**
     * Creates a new Par instance using the specified properties.
     * @function create
     * @memberof Par
     * @static
     * @param {IPar=} [properties] Properties to set
     * @returns {Par} Par instance
     */
    Par.create = function create(properties) {
        return new Par(properties);
    };

    /**
     * Encodes the specified Par message. Does not implicitly {@link Par.verify|verify} messages.
     * @function encode
     * @memberof Par
     * @static
     * @param {IPar} message Par message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Par.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.sends != null && message.sends.length)
            for (var i = 0; i < message.sends.length; ++i)
                $root.Send.encode(message.sends[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.receives != null && message.receives.length)
            for (var i = 0; i < message.receives.length; ++i)
                $root.Receive.encode(message.receives[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.news != null && message.news.length)
            for (var i = 0; i < message.news.length; ++i)
                $root.New.encode(message.news[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.exprs != null && message.exprs.length)
            for (var i = 0; i < message.exprs.length; ++i)
                $root.Expr.encode(message.exprs[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.matches != null && message.matches.length)
            for (var i = 0; i < message.matches.length; ++i)
                $root.Match.encode(message.matches[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        if (message.unforgeables != null && message.unforgeables.length)
            for (var i = 0; i < message.unforgeables.length; ++i)
                $root.GUnforgeable.encode(message.unforgeables[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
        if (message.connectives != null && message.connectives.length)
            for (var i = 0; i < message.connectives.length; ++i)
                $root.Connective.encode(message.connectives[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
        if (message.locallyFree != null && message.hasOwnProperty("locallyFree"))
            writer.uint32(/* id 9, wireType 2 =*/74).bytes(message.locallyFree);
        if (message.connective_used != null && message.hasOwnProperty("connective_used"))
            writer.uint32(/* id 10, wireType 0 =*/80).bool(message.connective_used);
        if (message.bundles != null && message.bundles.length)
            for (var i = 0; i < message.bundles.length; ++i)
                $root.Bundle.encode(message.bundles[i], writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Par message, length delimited. Does not implicitly {@link Par.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Par
     * @static
     * @param {IPar} message Par message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Par.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Par message from the specified reader or buffer.
     * @function decode
     * @memberof Par
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Par} Par
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
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

    /**
     * Decodes a Par message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Par
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Par} Par
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Par.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Par message.
     * @function verify
     * @memberof Par
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
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

    /**
     * Creates a Par message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Par
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Par} Par
     */
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

    /**
     * Creates a plain object from a Par message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Par
     * @static
     * @param {Par} message Par
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
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

    /**
     * Converts this Par to JSON.
     * @function toJSON
     * @memberof Par
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Par.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Par;
})();

$root.TaggedContinuation = (function() {

    /**
     * Properties of a TaggedContinuation.
     * @exports ITaggedContinuation
     * @interface ITaggedContinuation
     * @property {IParWithRandom|null} [par_body] TaggedContinuation par_body
     * @property {number|Long|null} [scala_body_ref] TaggedContinuation scala_body_ref
     */

    /**
     * Constructs a new TaggedContinuation.
     * @exports TaggedContinuation
     * @classdesc Either rholang code or code built in to the interpreter.
     * @implements ITaggedContinuation
     * @constructor
     * @param {ITaggedContinuation=} [properties] Properties to set
     */
    function TaggedContinuation(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * TaggedContinuation par_body.
     * @member {IParWithRandom|null|undefined} par_body
     * @memberof TaggedContinuation
     * @instance
     */
    TaggedContinuation.prototype.par_body = null;

    /**
     * TaggedContinuation scala_body_ref.
     * @member {number|Long} scala_body_ref
     * @memberof TaggedContinuation
     * @instance
     */
    TaggedContinuation.prototype.scala_body_ref = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * TaggedContinuation tagged_cont.
     * @member {"par_body"|"scala_body_ref"|undefined} tagged_cont
     * @memberof TaggedContinuation
     * @instance
     */
    Object.defineProperty(TaggedContinuation.prototype, "tagged_cont", {
        get: $util.oneOfGetter($oneOfFields = ["par_body", "scala_body_ref"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new TaggedContinuation instance using the specified properties.
     * @function create
     * @memberof TaggedContinuation
     * @static
     * @param {ITaggedContinuation=} [properties] Properties to set
     * @returns {TaggedContinuation} TaggedContinuation instance
     */
    TaggedContinuation.create = function create(properties) {
        return new TaggedContinuation(properties);
    };

    /**
     * Encodes the specified TaggedContinuation message. Does not implicitly {@link TaggedContinuation.verify|verify} messages.
     * @function encode
     * @memberof TaggedContinuation
     * @static
     * @param {ITaggedContinuation} message TaggedContinuation message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TaggedContinuation.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.par_body != null && message.hasOwnProperty("par_body"))
            $root.ParWithRandom.encode(message.par_body, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.scala_body_ref != null && message.hasOwnProperty("scala_body_ref"))
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.scala_body_ref);
        return writer;
    };

    /**
     * Encodes the specified TaggedContinuation message, length delimited. Does not implicitly {@link TaggedContinuation.verify|verify} messages.
     * @function encodeDelimited
     * @memberof TaggedContinuation
     * @static
     * @param {ITaggedContinuation} message TaggedContinuation message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TaggedContinuation.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a TaggedContinuation message from the specified reader or buffer.
     * @function decode
     * @memberof TaggedContinuation
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {TaggedContinuation} TaggedContinuation
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
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

    /**
     * Decodes a TaggedContinuation message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof TaggedContinuation
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {TaggedContinuation} TaggedContinuation
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TaggedContinuation.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a TaggedContinuation message.
     * @function verify
     * @memberof TaggedContinuation
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
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

    /**
     * Creates a TaggedContinuation message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof TaggedContinuation
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {TaggedContinuation} TaggedContinuation
     */
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

    /**
     * Creates a plain object from a TaggedContinuation message. Also converts values to other types if specified.
     * @function toObject
     * @memberof TaggedContinuation
     * @static
     * @param {TaggedContinuation} message TaggedContinuation
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
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

    /**
     * Converts this TaggedContinuation to JSON.
     * @function toJSON
     * @memberof TaggedContinuation
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    TaggedContinuation.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return TaggedContinuation;
})();

$root.ParWithRandom = (function() {

    /**
     * Properties of a ParWithRandom.
     * @exports IParWithRandom
     * @interface IParWithRandom
     * @property {IPar|null} [body] ParWithRandom body
     * @property {Uint8Array|null} [randomState] ParWithRandom randomState
     */

    /**
     * Constructs a new ParWithRandom.
     * @exports ParWithRandom
     * @classdesc Rholang code along with the state of a split random number
     * generator for generating new unforgeable names.
     * @implements IParWithRandom
     * @constructor
     * @param {IParWithRandom=} [properties] Properties to set
     */
    function ParWithRandom(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ParWithRandom body.
     * @member {IPar|null|undefined} body
     * @memberof ParWithRandom
     * @instance
     */
    ParWithRandom.prototype.body = null;

    /**
     * ParWithRandom randomState.
     * @member {Uint8Array} randomState
     * @memberof ParWithRandom
     * @instance
     */
    ParWithRandom.prototype.randomState = $util.newBuffer([]);

    /**
     * Creates a new ParWithRandom instance using the specified properties.
     * @function create
     * @memberof ParWithRandom
     * @static
     * @param {IParWithRandom=} [properties] Properties to set
     * @returns {ParWithRandom} ParWithRandom instance
     */
    ParWithRandom.create = function create(properties) {
        return new ParWithRandom(properties);
    };

    /**
     * Encodes the specified ParWithRandom message. Does not implicitly {@link ParWithRandom.verify|verify} messages.
     * @function encode
     * @memberof ParWithRandom
     * @static
     * @param {IParWithRandom} message ParWithRandom message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ParWithRandom.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.body != null && message.hasOwnProperty("body"))
            $root.Par.encode(message.body, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.randomState != null && message.hasOwnProperty("randomState"))
            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.randomState);
        return writer;
    };

    /**
     * Encodes the specified ParWithRandom message, length delimited. Does not implicitly {@link ParWithRandom.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ParWithRandom
     * @static
     * @param {IParWithRandom} message ParWithRandom message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ParWithRandom.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ParWithRandom message from the specified reader or buffer.
     * @function decode
     * @memberof ParWithRandom
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ParWithRandom} ParWithRandom
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
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

    /**
     * Decodes a ParWithRandom message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ParWithRandom
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ParWithRandom} ParWithRandom
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ParWithRandom.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ParWithRandom message.
     * @function verify
     * @memberof ParWithRandom
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
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

    /**
     * Creates a ParWithRandom message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ParWithRandom
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ParWithRandom} ParWithRandom
     */
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

    /**
     * Creates a plain object from a ParWithRandom message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ParWithRandom
     * @static
     * @param {ParWithRandom} message ParWithRandom
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
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

    /**
     * Converts this ParWithRandom to JSON.
     * @function toJSON
     * @memberof ParWithRandom
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ParWithRandom.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ParWithRandom;
})();

$root.PCost = (function() {

    /**
     * Properties of a PCost.
     * @exports IPCost
     * @interface IPCost
     * @property {number|Long|null} [cost] PCost cost
     */

    /**
     * Constructs a new PCost.
     * @exports PCost
     * @classdesc Cost of the performed operations.
     * @implements IPCost
     * @constructor
     * @param {IPCost=} [properties] Properties to set
     */
    function PCost(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PCost cost.
     * @member {number|Long} cost
     * @memberof PCost
     * @instance
     */
    PCost.prototype.cost = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Creates a new PCost instance using the specified properties.
     * @function create
     * @memberof PCost
     * @static
     * @param {IPCost=} [properties] Properties to set
     * @returns {PCost} PCost instance
     */
    PCost.create = function create(properties) {
        return new PCost(properties);
    };

    /**
     * Encodes the specified PCost message. Does not implicitly {@link PCost.verify|verify} messages.
     * @function encode
     * @memberof PCost
     * @static
     * @param {IPCost} message PCost message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PCost.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.cost != null && message.hasOwnProperty("cost"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.cost);
        return writer;
    };

    /**
     * Encodes the specified PCost message, length delimited. Does not implicitly {@link PCost.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PCost
     * @static
     * @param {IPCost} message PCost message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PCost.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PCost message from the specified reader or buffer.
     * @function decode
     * @memberof PCost
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PCost} PCost
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
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

    /**
     * Decodes a PCost message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PCost
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PCost} PCost
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PCost.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PCost message.
     * @function verify
     * @memberof PCost
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PCost.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.cost != null && message.hasOwnProperty("cost"))
            if (!$util.isInteger(message.cost) && !(message.cost && $util.isInteger(message.cost.low) && $util.isInteger(message.cost.high)))
                return "cost: integer|Long expected";
        return null;
    };

    /**
     * Creates a PCost message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PCost
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PCost} PCost
     */
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

    /**
     * Creates a plain object from a PCost message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PCost
     * @static
     * @param {PCost} message PCost
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
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

    /**
     * Converts this PCost to JSON.
     * @function toJSON
     * @memberof PCost
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PCost.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return PCost;
})();

$root.ListParWithRandom = (function() {

    /**
     * Properties of a ListParWithRandom.
     * @exports IListParWithRandom
     * @interface IListParWithRandom
     * @property {Array.<IPar>|null} [pars] ListParWithRandom pars
     * @property {Uint8Array|null} [randomState] ListParWithRandom randomState
     */

    /**
     * Constructs a new ListParWithRandom.
     * @exports ListParWithRandom
     * @classdesc Represents a ListParWithRandom.
     * @implements IListParWithRandom
     * @constructor
     * @param {IListParWithRandom=} [properties] Properties to set
     */
    function ListParWithRandom(properties) {
        this.pars = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ListParWithRandom pars.
     * @member {Array.<IPar>} pars
     * @memberof ListParWithRandom
     * @instance
     */
    ListParWithRandom.prototype.pars = $util.emptyArray;

    /**
     * ListParWithRandom randomState.
     * @member {Uint8Array} randomState
     * @memberof ListParWithRandom
     * @instance
     */
    ListParWithRandom.prototype.randomState = $util.newBuffer([]);

    /**
     * Creates a new ListParWithRandom instance using the specified properties.
     * @function create
     * @memberof ListParWithRandom
     * @static
     * @param {IListParWithRandom=} [properties] Properties to set
     * @returns {ListParWithRandom} ListParWithRandom instance
     */
    ListParWithRandom.create = function create(properties) {
        return new ListParWithRandom(properties);
    };

    /**
     * Encodes the specified ListParWithRandom message. Does not implicitly {@link ListParWithRandom.verify|verify} messages.
     * @function encode
     * @memberof ListParWithRandom
     * @static
     * @param {IListParWithRandom} message ListParWithRandom message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ListParWithRandom.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.pars != null && message.pars.length)
            for (var i = 0; i < message.pars.length; ++i)
                $root.Par.encode(message.pars[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.randomState != null && message.hasOwnProperty("randomState"))
            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.randomState);
        return writer;
    };

    /**
     * Encodes the specified ListParWithRandom message, length delimited. Does not implicitly {@link ListParWithRandom.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ListParWithRandom
     * @static
     * @param {IListParWithRandom} message ListParWithRandom message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ListParWithRandom.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ListParWithRandom message from the specified reader or buffer.
     * @function decode
     * @memberof ListParWithRandom
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ListParWithRandom} ListParWithRandom
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
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

    /**
     * Decodes a ListParWithRandom message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ListParWithRandom
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ListParWithRandom} ListParWithRandom
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ListParWithRandom.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ListParWithRandom message.
     * @function verify
     * @memberof ListParWithRandom
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
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

    /**
     * Creates a ListParWithRandom message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ListParWithRandom
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ListParWithRandom} ListParWithRandom
     */
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

    /**
     * Creates a plain object from a ListParWithRandom message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ListParWithRandom
     * @static
     * @param {ListParWithRandom} message ListParWithRandom
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
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

    /**
     * Converts this ListParWithRandom to JSON.
     * @function toJSON
     * @memberof ListParWithRandom
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ListParWithRandom.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ListParWithRandom;
})();

$root.Var = (function() {

    /**
     * Properties of a Var.
     * @exports IVar
     * @interface IVar
     * @property {number|null} [bound_var] Var bound_var
     * @property {number|null} [free_var] Var free_var
     * @property {Var.IWildcardMsg|null} [wildcard] Var wildcard
     */

    /**
     * Constructs a new Var.
     * @exports Var
     * @classdesc Represents a Var.
     * @implements IVar
     * @constructor
     * @param {IVar=} [properties] Properties to set
     */
    function Var(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Var bound_var.
     * @member {number} bound_var
     * @memberof Var
     * @instance
     */
    Var.prototype.bound_var = 0;

    /**
     * Var free_var.
     * @member {number} free_var
     * @memberof Var
     * @instance
     */
    Var.prototype.free_var = 0;

    /**
     * Var wildcard.
     * @member {Var.IWildcardMsg|null|undefined} wildcard
     * @memberof Var
     * @instance
     */
    Var.prototype.wildcard = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * Var var_instance.
     * @member {"bound_var"|"free_var"|"wildcard"|undefined} var_instance
     * @memberof Var
     * @instance
     */
    Object.defineProperty(Var.prototype, "var_instance", {
        get: $util.oneOfGetter($oneOfFields = ["bound_var", "free_var", "wildcard"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new Var instance using the specified properties.
     * @function create
     * @memberof Var
     * @static
     * @param {IVar=} [properties] Properties to set
     * @returns {Var} Var instance
     */
    Var.create = function create(properties) {
        return new Var(properties);
    };

    /**
     * Encodes the specified Var message. Does not implicitly {@link Var.verify|verify} messages.
     * @function encode
     * @memberof Var
     * @static
     * @param {IVar} message Var message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Var.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.bound_var != null && message.hasOwnProperty("bound_var"))
            writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.bound_var);
        if (message.free_var != null && message.hasOwnProperty("free_var"))
            writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.free_var);
        if (message.wildcard != null && message.hasOwnProperty("wildcard"))
            $root.Var.WildcardMsg.encode(message.wildcard, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Var message, length delimited. Does not implicitly {@link Var.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Var
     * @static
     * @param {IVar} message Var message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Var.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Var message from the specified reader or buffer.
     * @function decode
     * @memberof Var
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Var} Var
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
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

    /**
     * Decodes a Var message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Var
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Var} Var
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Var.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Var message.
     * @function verify
     * @memberof Var
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
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

    /**
     * Creates a Var message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Var
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Var} Var
     */
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

    /**
     * Creates a plain object from a Var message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Var
     * @static
     * @param {Var} message Var
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
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

    /**
     * Converts this Var to JSON.
     * @function toJSON
     * @memberof Var
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Var.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    Var.WildcardMsg = (function() {

        /**
         * Properties of a WildcardMsg.
         * @memberof Var
         * @interface IWildcardMsg
         */

        /**
         * Constructs a new WildcardMsg.
         * @memberof Var
         * @classdesc Represents a WildcardMsg.
         * @implements IWildcardMsg
         * @constructor
         * @param {Var.IWildcardMsg=} [properties] Properties to set
         */
        function WildcardMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new WildcardMsg instance using the specified properties.
         * @function create
         * @memberof Var.WildcardMsg
         * @static
         * @param {Var.IWildcardMsg=} [properties] Properties to set
         * @returns {Var.WildcardMsg} WildcardMsg instance
         */
        WildcardMsg.create = function create(properties) {
            return new WildcardMsg(properties);
        };

        /**
         * Encodes the specified WildcardMsg message. Does not implicitly {@link Var.WildcardMsg.verify|verify} messages.
         * @function encode
         * @memberof Var.WildcardMsg
         * @static
         * @param {Var.IWildcardMsg} message WildcardMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WildcardMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified WildcardMsg message, length delimited. Does not implicitly {@link Var.WildcardMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Var.WildcardMsg
         * @static
         * @param {Var.IWildcardMsg} message WildcardMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WildcardMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WildcardMsg message from the specified reader or buffer.
         * @function decode
         * @memberof Var.WildcardMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Var.WildcardMsg} WildcardMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
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

        /**
         * Decodes a WildcardMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Var.WildcardMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Var.WildcardMsg} WildcardMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WildcardMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WildcardMsg message.
         * @function verify
         * @memberof Var.WildcardMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WildcardMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a WildcardMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Var.WildcardMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Var.WildcardMsg} WildcardMsg
         */
        WildcardMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.Var.WildcardMsg)
                return object;
            return new $root.Var.WildcardMsg();
        };

        /**
         * Creates a plain object from a WildcardMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Var.WildcardMsg
         * @static
         * @param {Var.WildcardMsg} message WildcardMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WildcardMsg.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this WildcardMsg to JSON.
         * @function toJSON
         * @memberof Var.WildcardMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WildcardMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return WildcardMsg;
    })();

    return Var;
})();

$root.Bundle = (function() {

    /**
     * Properties of a Bundle.
     * @exports IBundle
     * @interface IBundle
     * @property {IPar|null} [body] Bundle body
     * @property {boolean|null} [writeFlag] Bundle writeFlag
     * @property {boolean|null} [readFlag] Bundle readFlag
     */

    /**
     * Constructs a new Bundle.
     * @exports Bundle
     * @classdesc Nothing can be received from a (quoted) bundle with `readFlag = false`.
     * Likeise nothing can be sent to a (quoted) bundle with `writeFlag = false`.
     * 
     * If both flags are set to false, bundle allows only for equivalance check.
     * @implements IBundle
     * @constructor
     * @param {IBundle=} [properties] Properties to set
     */
    function Bundle(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Bundle body.
     * @member {IPar|null|undefined} body
     * @memberof Bundle
     * @instance
     */
    Bundle.prototype.body = null;

    /**
     * Bundle writeFlag.
     * @member {boolean} writeFlag
     * @memberof Bundle
     * @instance
     */
    Bundle.prototype.writeFlag = false;

    /**
     * Bundle readFlag.
     * @member {boolean} readFlag
     * @memberof Bundle
     * @instance
     */
    Bundle.prototype.readFlag = false;

    /**
     * Creates a new Bundle instance using the specified properties.
     * @function create
     * @memberof Bundle
     * @static
     * @param {IBundle=} [properties] Properties to set
     * @returns {Bundle} Bundle instance
     */
    Bundle.create = function create(properties) {
        return new Bundle(properties);
    };

    /**
     * Encodes the specified Bundle message. Does not implicitly {@link Bundle.verify|verify} messages.
     * @function encode
     * @memberof Bundle
     * @static
     * @param {IBundle} message Bundle message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Bundle.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.body != null && message.hasOwnProperty("body"))
            $root.Par.encode(message.body, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.writeFlag != null && message.hasOwnProperty("writeFlag"))
            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.writeFlag);
        if (message.readFlag != null && message.hasOwnProperty("readFlag"))
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.readFlag);
        return writer;
    };

    /**
     * Encodes the specified Bundle message, length delimited. Does not implicitly {@link Bundle.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Bundle
     * @static
     * @param {IBundle} message Bundle message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Bundle.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Bundle message from the specified reader or buffer.
     * @function decode
     * @memberof Bundle
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Bundle} Bundle
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
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

    /**
     * Decodes a Bundle message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Bundle
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Bundle} Bundle
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Bundle.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Bundle message.
     * @function verify
     * @memberof Bundle
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
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

    /**
     * Creates a Bundle message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Bundle
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Bundle} Bundle
     */
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

    /**
     * Creates a plain object from a Bundle message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Bundle
     * @static
     * @param {Bundle} message Bundle
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
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

    /**
     * Converts this Bundle to JSON.
     * @function toJSON
     * @memberof Bundle
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Bundle.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Bundle;
})();

$root.Send = (function() {

    /**
     * Properties of a Send.
     * @exports ISend
     * @interface ISend
     * @property {IPar|null} [chan] Send chan
     * @property {Array.<IPar>|null} [data] Send data
     * @property {boolean|null} [persistent] Send persistent
     * @property {Uint8Array|null} [locallyFree] Send locallyFree
     * @property {boolean|null} [connective_used] Send connective_used
     */

    /**
     * Constructs a new Send.
     * @exports Send
     * @classdesc A send is written `chan!(data)` or `chan!!(data)` for a persistent send.
     * 
     * Upon send, all free variables in data are substituted with their values.
     * @implements ISend
     * @constructor
     * @param {ISend=} [properties] Properties to set
     */
    function Send(properties) {
        this.data = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Send chan.
     * @member {IPar|null|undefined} chan
     * @memberof Send
     * @instance
     */
    Send.prototype.chan = null;

    /**
     * Send data.
     * @member {Array.<IPar>} data
     * @memberof Send
     * @instance
     */
    Send.prototype.data = $util.emptyArray;

    /**
     * Send persistent.
     * @member {boolean} persistent
     * @memberof Send
     * @instance
     */
    Send.prototype.persistent = false;

    /**
     * Send locallyFree.
     * @member {Uint8Array} locallyFree
     * @memberof Send
     * @instance
     */
    Send.prototype.locallyFree = $util.newBuffer([]);

    /**
     * Send connective_used.
     * @member {boolean} connective_used
     * @memberof Send
     * @instance
     */
    Send.prototype.connective_used = false;

    /**
     * Creates a new Send instance using the specified properties.
     * @function create
     * @memberof Send
     * @static
     * @param {ISend=} [properties] Properties to set
     * @returns {Send} Send instance
     */
    Send.create = function create(properties) {
        return new Send(properties);
    };

    /**
     * Encodes the specified Send message. Does not implicitly {@link Send.verify|verify} messages.
     * @function encode
     * @memberof Send
     * @static
     * @param {ISend} message Send message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Send.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.chan != null && message.hasOwnProperty("chan"))
            $root.Par.encode(message.chan, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.data != null && message.data.length)
            for (var i = 0; i < message.data.length; ++i)
                $root.Par.encode(message.data[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.persistent != null && message.hasOwnProperty("persistent"))
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.persistent);
        if (message.locallyFree != null && message.hasOwnProperty("locallyFree"))
            writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.locallyFree);
        if (message.connective_used != null && message.hasOwnProperty("connective_used"))
            writer.uint32(/* id 6, wireType 0 =*/48).bool(message.connective_used);
        return writer;
    };

    /**
     * Encodes the specified Send message, length delimited. Does not implicitly {@link Send.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Send
     * @static
     * @param {ISend} message Send message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Send.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Send message from the specified reader or buffer.
     * @function decode
     * @memberof Send
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Send} Send
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
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

    /**
     * Decodes a Send message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Send
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Send} Send
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Send.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Send message.
     * @function verify
     * @memberof Send
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
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

    /**
     * Creates a Send message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Send
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Send} Send
     */
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

    /**
     * Creates a plain object from a Send message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Send
     * @static
     * @param {Send} message Send
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
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

    /**
     * Converts this Send to JSON.
     * @function toJSON
     * @memberof Send
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Send.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Send;
})();

$root.ReceiveBind = (function() {

    /**
     * Properties of a ReceiveBind.
     * @exports IReceiveBind
     * @interface IReceiveBind
     * @property {Array.<IPar>|null} [patterns] ReceiveBind patterns
     * @property {IPar|null} [source] ReceiveBind source
     * @property {IVar|null} [remainder] ReceiveBind remainder
     * @property {number|null} [freeCount] ReceiveBind freeCount
     */

    /**
     * Constructs a new ReceiveBind.
     * @exports ReceiveBind
     * @classdesc Represents a ReceiveBind.
     * @implements IReceiveBind
     * @constructor
     * @param {IReceiveBind=} [properties] Properties to set
     */
    function ReceiveBind(properties) {
        this.patterns = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ReceiveBind patterns.
     * @member {Array.<IPar>} patterns
     * @memberof ReceiveBind
     * @instance
     */
    ReceiveBind.prototype.patterns = $util.emptyArray;

    /**
     * ReceiveBind source.
     * @member {IPar|null|undefined} source
     * @memberof ReceiveBind
     * @instance
     */
    ReceiveBind.prototype.source = null;

    /**
     * ReceiveBind remainder.
     * @member {IVar|null|undefined} remainder
     * @memberof ReceiveBind
     * @instance
     */
    ReceiveBind.prototype.remainder = null;

    /**
     * ReceiveBind freeCount.
     * @member {number} freeCount
     * @memberof ReceiveBind
     * @instance
     */
    ReceiveBind.prototype.freeCount = 0;

    /**
     * Creates a new ReceiveBind instance using the specified properties.
     * @function create
     * @memberof ReceiveBind
     * @static
     * @param {IReceiveBind=} [properties] Properties to set
     * @returns {ReceiveBind} ReceiveBind instance
     */
    ReceiveBind.create = function create(properties) {
        return new ReceiveBind(properties);
    };

    /**
     * Encodes the specified ReceiveBind message. Does not implicitly {@link ReceiveBind.verify|verify} messages.
     * @function encode
     * @memberof ReceiveBind
     * @static
     * @param {IReceiveBind} message ReceiveBind message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReceiveBind.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.patterns != null && message.patterns.length)
            for (var i = 0; i < message.patterns.length; ++i)
                $root.Par.encode(message.patterns[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.source != null && message.hasOwnProperty("source"))
            $root.Par.encode(message.source, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.remainder != null && message.hasOwnProperty("remainder"))
            $root.Var.encode(message.remainder, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.freeCount != null && message.hasOwnProperty("freeCount"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.freeCount);
        return writer;
    };

    /**
     * Encodes the specified ReceiveBind message, length delimited. Does not implicitly {@link ReceiveBind.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReceiveBind
     * @static
     * @param {IReceiveBind} message ReceiveBind message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReceiveBind.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ReceiveBind message from the specified reader or buffer.
     * @function decode
     * @memberof ReceiveBind
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReceiveBind} ReceiveBind
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
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

    /**
     * Decodes a ReceiveBind message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReceiveBind
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReceiveBind} ReceiveBind
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReceiveBind.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ReceiveBind message.
     * @function verify
     * @memberof ReceiveBind
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
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

    /**
     * Creates a ReceiveBind message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReceiveBind
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReceiveBind} ReceiveBind
     */
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

    /**
     * Creates a plain object from a ReceiveBind message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReceiveBind
     * @static
     * @param {ReceiveBind} message ReceiveBind
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
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

    /**
     * Converts this ReceiveBind to JSON.
     * @function toJSON
     * @memberof ReceiveBind
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReceiveBind.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ReceiveBind;
})();

$root.BindPattern = (function() {

    /**
     * Properties of a BindPattern.
     * @exports IBindPattern
     * @interface IBindPattern
     * @property {Array.<IPar>|null} [patterns] BindPattern patterns
     * @property {IVar|null} [remainder] BindPattern remainder
     * @property {number|null} [freeCount] BindPattern freeCount
     */

    /**
     * Constructs a new BindPattern.
     * @exports BindPattern
     * @classdesc Represents a BindPattern.
     * @implements IBindPattern
     * @constructor
     * @param {IBindPattern=} [properties] Properties to set
     */
    function BindPattern(properties) {
        this.patterns = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * BindPattern patterns.
     * @member {Array.<IPar>} patterns
     * @memberof BindPattern
     * @instance
     */
    BindPattern.prototype.patterns = $util.emptyArray;

    /**
     * BindPattern remainder.
     * @member {IVar|null|undefined} remainder
     * @memberof BindPattern
     * @instance
     */
    BindPattern.prototype.remainder = null;

    /**
     * BindPattern freeCount.
     * @member {number} freeCount
     * @memberof BindPattern
     * @instance
     */
    BindPattern.prototype.freeCount = 0;

    /**
     * Creates a new BindPattern instance using the specified properties.
     * @function create
     * @memberof BindPattern
     * @static
     * @param {IBindPattern=} [properties] Properties to set
     * @returns {BindPattern} BindPattern instance
     */
    BindPattern.create = function create(properties) {
        return new BindPattern(properties);
    };

    /**
     * Encodes the specified BindPattern message. Does not implicitly {@link BindPattern.verify|verify} messages.
     * @function encode
     * @memberof BindPattern
     * @static
     * @param {IBindPattern} message BindPattern message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BindPattern.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.patterns != null && message.patterns.length)
            for (var i = 0; i < message.patterns.length; ++i)
                $root.Par.encode(message.patterns[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.remainder != null && message.hasOwnProperty("remainder"))
            $root.Var.encode(message.remainder, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.freeCount != null && message.hasOwnProperty("freeCount"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.freeCount);
        return writer;
    };

    /**
     * Encodes the specified BindPattern message, length delimited. Does not implicitly {@link BindPattern.verify|verify} messages.
     * @function encodeDelimited
     * @memberof BindPattern
     * @static
     * @param {IBindPattern} message BindPattern message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BindPattern.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a BindPattern message from the specified reader or buffer.
     * @function decode
     * @memberof BindPattern
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {BindPattern} BindPattern
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
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

    /**
     * Decodes a BindPattern message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof BindPattern
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {BindPattern} BindPattern
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BindPattern.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a BindPattern message.
     * @function verify
     * @memberof BindPattern
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
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

    /**
     * Creates a BindPattern message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof BindPattern
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {BindPattern} BindPattern
     */
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

    /**
     * Creates a plain object from a BindPattern message. Also converts values to other types if specified.
     * @function toObject
     * @memberof BindPattern
     * @static
     * @param {BindPattern} message BindPattern
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
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

    /**
     * Converts this BindPattern to JSON.
     * @function toJSON
     * @memberof BindPattern
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    BindPattern.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return BindPattern;
})();

$root.ListBindPatterns = (function() {

    /**
     * Properties of a ListBindPatterns.
     * @exports IListBindPatterns
     * @interface IListBindPatterns
     * @property {Array.<IBindPattern>|null} [patterns] ListBindPatterns patterns
     */

    /**
     * Constructs a new ListBindPatterns.
     * @exports ListBindPatterns
     * @classdesc Represents a ListBindPatterns.
     * @implements IListBindPatterns
     * @constructor
     * @param {IListBindPatterns=} [properties] Properties to set
     */
    function ListBindPatterns(properties) {
        this.patterns = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ListBindPatterns patterns.
     * @member {Array.<IBindPattern>} patterns
     * @memberof ListBindPatterns
     * @instance
     */
    ListBindPatterns.prototype.patterns = $util.emptyArray;

    /**
     * Creates a new ListBindPatterns instance using the specified properties.
     * @function create
     * @memberof ListBindPatterns
     * @static
     * @param {IListBindPatterns=} [properties] Properties to set
     * @returns {ListBindPatterns} ListBindPatterns instance
     */
    ListBindPatterns.create = function create(properties) {
        return new ListBindPatterns(properties);
    };

    /**
     * Encodes the specified ListBindPatterns message. Does not implicitly {@link ListBindPatterns.verify|verify} messages.
     * @function encode
     * @memberof ListBindPatterns
     * @static
     * @param {IListBindPatterns} message ListBindPatterns message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ListBindPatterns.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.patterns != null && message.patterns.length)
            for (var i = 0; i < message.patterns.length; ++i)
                $root.BindPattern.encode(message.patterns[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ListBindPatterns message, length delimited. Does not implicitly {@link ListBindPatterns.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ListBindPatterns
     * @static
     * @param {IListBindPatterns} message ListBindPatterns message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ListBindPatterns.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ListBindPatterns message from the specified reader or buffer.
     * @function decode
     * @memberof ListBindPatterns
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ListBindPatterns} ListBindPatterns
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
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

    /**
     * Decodes a ListBindPatterns message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ListBindPatterns
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ListBindPatterns} ListBindPatterns
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ListBindPatterns.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ListBindPatterns message.
     * @function verify
     * @memberof ListBindPatterns
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
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

    /**
     * Creates a ListBindPatterns message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ListBindPatterns
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ListBindPatterns} ListBindPatterns
     */
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

    /**
     * Creates a plain object from a ListBindPatterns message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ListBindPatterns
     * @static
     * @param {ListBindPatterns} message ListBindPatterns
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
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

    /**
     * Converts this ListBindPatterns to JSON.
     * @function toJSON
     * @memberof ListBindPatterns
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ListBindPatterns.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ListBindPatterns;
})();

$root.Receive = (function() {

    /**
     * Properties of a Receive.
     * @exports IReceive
     * @interface IReceive
     * @property {Array.<IReceiveBind>|null} [binds] Receive binds
     * @property {IPar|null} [body] Receive body
     * @property {boolean|null} [persistent] Receive persistent
     * @property {boolean|null} [peek] Receive peek
     * @property {number|null} [bindCount] Receive bindCount
     * @property {Uint8Array|null} [locallyFree] Receive locallyFree
     * @property {boolean|null} [connective_used] Receive connective_used
     */

    /**
     * Constructs a new Receive.
     * @exports Receive
     * @classdesc A receive is written `for(binds) { body }`
     * i.e. `for(patterns <- source) { body }`
     * or for a persistent recieve: `for(patterns <= source) { body }`.
     * 
     * It's an error for free Variable to occur more than once in a pattern.
     * @implements IReceive
     * @constructor
     * @param {IReceive=} [properties] Properties to set
     */
    function Receive(properties) {
        this.binds = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Receive binds.
     * @member {Array.<IReceiveBind>} binds
     * @memberof Receive
     * @instance
     */
    Receive.prototype.binds = $util.emptyArray;

    /**
     * Receive body.
     * @member {IPar|null|undefined} body
     * @memberof Receive
     * @instance
     */
    Receive.prototype.body = null;

    /**
     * Receive persistent.
     * @member {boolean} persistent
     * @memberof Receive
     * @instance
     */
    Receive.prototype.persistent = false;

    /**
     * Receive peek.
     * @member {boolean} peek
     * @memberof Receive
     * @instance
     */
    Receive.prototype.peek = false;

    /**
     * Receive bindCount.
     * @member {number} bindCount
     * @memberof Receive
     * @instance
     */
    Receive.prototype.bindCount = 0;

    /**
     * Receive locallyFree.
     * @member {Uint8Array} locallyFree
     * @memberof Receive
     * @instance
     */
    Receive.prototype.locallyFree = $util.newBuffer([]);

    /**
     * Receive connective_used.
     * @member {boolean} connective_used
     * @memberof Receive
     * @instance
     */
    Receive.prototype.connective_used = false;

    /**
     * Creates a new Receive instance using the specified properties.
     * @function create
     * @memberof Receive
     * @static
     * @param {IReceive=} [properties] Properties to set
     * @returns {Receive} Receive instance
     */
    Receive.create = function create(properties) {
        return new Receive(properties);
    };

    /**
     * Encodes the specified Receive message. Does not implicitly {@link Receive.verify|verify} messages.
     * @function encode
     * @memberof Receive
     * @static
     * @param {IReceive} message Receive message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Receive.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.binds != null && message.binds.length)
            for (var i = 0; i < message.binds.length; ++i)
                $root.ReceiveBind.encode(message.binds[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.body != null && message.hasOwnProperty("body"))
            $root.Par.encode(message.body, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.persistent != null && message.hasOwnProperty("persistent"))
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.persistent);
        if (message.peek != null && message.hasOwnProperty("peek"))
            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.peek);
        if (message.bindCount != null && message.hasOwnProperty("bindCount"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.bindCount);
        if (message.locallyFree != null && message.hasOwnProperty("locallyFree"))
            writer.uint32(/* id 6, wireType 2 =*/50).bytes(message.locallyFree);
        if (message.connective_used != null && message.hasOwnProperty("connective_used"))
            writer.uint32(/* id 7, wireType 0 =*/56).bool(message.connective_used);
        return writer;
    };

    /**
     * Encodes the specified Receive message, length delimited. Does not implicitly {@link Receive.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Receive
     * @static
     * @param {IReceive} message Receive message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Receive.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Receive message from the specified reader or buffer.
     * @function decode
     * @memberof Receive
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Receive} Receive
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
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

    /**
     * Decodes a Receive message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Receive
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Receive} Receive
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Receive.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Receive message.
     * @function verify
     * @memberof Receive
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
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

    /**
     * Creates a Receive message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Receive
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Receive} Receive
     */
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

    /**
     * Creates a plain object from a Receive message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Receive
     * @static
     * @param {Receive} message Receive
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
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

    /**
     * Converts this Receive to JSON.
     * @function toJSON
     * @memberof Receive
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Receive.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Receive;
})();

$root.New = (function() {

    /**
     * Properties of a New.
     * @exports INew
     * @interface INew
     * @property {number|null} [bindCount] New bindCount
     * @property {IPar|null} [p] New p
     * @property {Array.<string>|null} [uri] New uri
     * @property {IDeployId|null} [deployId] New deployId
     * @property {IDeployerId|null} [deployerId] New deployerId
     * @property {Uint8Array|null} [locallyFree] New locallyFree
     */

    /**
     * Constructs a new New.
     * @exports New
     * @classdesc Represents a New.
     * @implements INew
     * @constructor
     * @param {INew=} [properties] Properties to set
     */
    function New(properties) {
        this.uri = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * New bindCount.
     * @member {number} bindCount
     * @memberof New
     * @instance
     */
    New.prototype.bindCount = 0;

    /**
     * New p.
     * @member {IPar|null|undefined} p
     * @memberof New
     * @instance
     */
    New.prototype.p = null;

    /**
     * New uri.
     * @member {Array.<string>} uri
     * @memberof New
     * @instance
     */
    New.prototype.uri = $util.emptyArray;

    /**
     * New deployId.
     * @member {IDeployId|null|undefined} deployId
     * @memberof New
     * @instance
     */
    New.prototype.deployId = null;

    /**
     * New deployerId.
     * @member {IDeployerId|null|undefined} deployerId
     * @memberof New
     * @instance
     */
    New.prototype.deployerId = null;

    /**
     * New locallyFree.
     * @member {Uint8Array} locallyFree
     * @memberof New
     * @instance
     */
    New.prototype.locallyFree = $util.newBuffer([]);

    /**
     * Creates a new New instance using the specified properties.
     * @function create
     * @memberof New
     * @static
     * @param {INew=} [properties] Properties to set
     * @returns {New} New instance
     */
    New.create = function create(properties) {
        return new New(properties);
    };

    /**
     * Encodes the specified New message. Does not implicitly {@link New.verify|verify} messages.
     * @function encode
     * @memberof New
     * @static
     * @param {INew} message New message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    New.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.bindCount != null && message.hasOwnProperty("bindCount"))
            writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.bindCount);
        if (message.p != null && message.hasOwnProperty("p"))
            $root.Par.encode(message.p, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.uri != null && message.uri.length)
            for (var i = 0; i < message.uri.length; ++i)
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.uri[i]);
        if (message.deployId != null && message.hasOwnProperty("deployId"))
            $root.DeployId.encode(message.deployId, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.deployerId != null && message.hasOwnProperty("deployerId"))
            $root.DeployerId.encode(message.deployerId, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.locallyFree != null && message.hasOwnProperty("locallyFree"))
            writer.uint32(/* id 6, wireType 2 =*/50).bytes(message.locallyFree);
        return writer;
    };

    /**
     * Encodes the specified New message, length delimited. Does not implicitly {@link New.verify|verify} messages.
     * @function encodeDelimited
     * @memberof New
     * @static
     * @param {INew} message New message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    New.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a New message from the specified reader or buffer.
     * @function decode
     * @memberof New
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {New} New
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
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

    /**
     * Decodes a New message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof New
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {New} New
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    New.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a New message.
     * @function verify
     * @memberof New
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
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

    /**
     * Creates a New message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof New
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {New} New
     */
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

    /**
     * Creates a plain object from a New message. Also converts values to other types if specified.
     * @function toObject
     * @memberof New
     * @static
     * @param {New} message New
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
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

    /**
     * Converts this New to JSON.
     * @function toJSON
     * @memberof New
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    New.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return New;
})();

$root.MatchCase = (function() {

    /**
     * Properties of a MatchCase.
     * @exports IMatchCase
     * @interface IMatchCase
     * @property {IPar|null} [pattern] MatchCase pattern
     * @property {IPar|null} [source] MatchCase source
     * @property {number|null} [freeCount] MatchCase freeCount
     */

    /**
     * Constructs a new MatchCase.
     * @exports MatchCase
     * @classdesc Represents a MatchCase.
     * @implements IMatchCase
     * @constructor
     * @param {IMatchCase=} [properties] Properties to set
     */
    function MatchCase(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * MatchCase pattern.
     * @member {IPar|null|undefined} pattern
     * @memberof MatchCase
     * @instance
     */
    MatchCase.prototype.pattern = null;

    /**
     * MatchCase source.
     * @member {IPar|null|undefined} source
     * @memberof MatchCase
     * @instance
     */
    MatchCase.prototype.source = null;

    /**
     * MatchCase freeCount.
     * @member {number} freeCount
     * @memberof MatchCase
     * @instance
     */
    MatchCase.prototype.freeCount = 0;

    /**
     * Creates a new MatchCase instance using the specified properties.
     * @function create
     * @memberof MatchCase
     * @static
     * @param {IMatchCase=} [properties] Properties to set
     * @returns {MatchCase} MatchCase instance
     */
    MatchCase.create = function create(properties) {
        return new MatchCase(properties);
    };

    /**
     * Encodes the specified MatchCase message. Does not implicitly {@link MatchCase.verify|verify} messages.
     * @function encode
     * @memberof MatchCase
     * @static
     * @param {IMatchCase} message MatchCase message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MatchCase.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.pattern != null && message.hasOwnProperty("pattern"))
            $root.Par.encode(message.pattern, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.source != null && message.hasOwnProperty("source"))
            $root.Par.encode(message.source, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.freeCount != null && message.hasOwnProperty("freeCount"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.freeCount);
        return writer;
    };

    /**
     * Encodes the specified MatchCase message, length delimited. Does not implicitly {@link MatchCase.verify|verify} messages.
     * @function encodeDelimited
     * @memberof MatchCase
     * @static
     * @param {IMatchCase} message MatchCase message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MatchCase.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a MatchCase message from the specified reader or buffer.
     * @function decode
     * @memberof MatchCase
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {MatchCase} MatchCase
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
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

    /**
     * Decodes a MatchCase message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof MatchCase
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {MatchCase} MatchCase
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MatchCase.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a MatchCase message.
     * @function verify
     * @memberof MatchCase
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
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

    /**
     * Creates a MatchCase message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof MatchCase
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {MatchCase} MatchCase
     */
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

    /**
     * Creates a plain object from a MatchCase message. Also converts values to other types if specified.
     * @function toObject
     * @memberof MatchCase
     * @static
     * @param {MatchCase} message MatchCase
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
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

    /**
     * Converts this MatchCase to JSON.
     * @function toJSON
     * @memberof MatchCase
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    MatchCase.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return MatchCase;
})();

$root.Match = (function() {

    /**
     * Properties of a Match.
     * @exports IMatch
     * @interface IMatch
     * @property {IPar|null} [target] Match target
     * @property {Array.<IMatchCase>|null} [cases] Match cases
     * @property {Uint8Array|null} [locallyFree] Match locallyFree
     * @property {boolean|null} [connective_used] Match connective_used
     */

    /**
     * Constructs a new Match.
     * @exports Match
     * @classdesc Represents a Match.
     * @implements IMatch
     * @constructor
     * @param {IMatch=} [properties] Properties to set
     */
    function Match(properties) {
        this.cases = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Match target.
     * @member {IPar|null|undefined} target
     * @memberof Match
     * @instance
     */
    Match.prototype.target = null;

    /**
     * Match cases.
     * @member {Array.<IMatchCase>} cases
     * @memberof Match
     * @instance
     */
    Match.prototype.cases = $util.emptyArray;

    /**
     * Match locallyFree.
     * @member {Uint8Array} locallyFree
     * @memberof Match
     * @instance
     */
    Match.prototype.locallyFree = $util.newBuffer([]);

    /**
     * Match connective_used.
     * @member {boolean} connective_used
     * @memberof Match
     * @instance
     */
    Match.prototype.connective_used = false;

    /**
     * Creates a new Match instance using the specified properties.
     * @function create
     * @memberof Match
     * @static
     * @param {IMatch=} [properties] Properties to set
     * @returns {Match} Match instance
     */
    Match.create = function create(properties) {
        return new Match(properties);
    };

    /**
     * Encodes the specified Match message. Does not implicitly {@link Match.verify|verify} messages.
     * @function encode
     * @memberof Match
     * @static
     * @param {IMatch} message Match message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Match.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.target != null && message.hasOwnProperty("target"))
            $root.Par.encode(message.target, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.cases != null && message.cases.length)
            for (var i = 0; i < message.cases.length; ++i)
                $root.MatchCase.encode(message.cases[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.locallyFree != null && message.hasOwnProperty("locallyFree"))
            writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.locallyFree);
        if (message.connective_used != null && message.hasOwnProperty("connective_used"))
            writer.uint32(/* id 5, wireType 0 =*/40).bool(message.connective_used);
        return writer;
    };

    /**
     * Encodes the specified Match message, length delimited. Does not implicitly {@link Match.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Match
     * @static
     * @param {IMatch} message Match message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Match.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Match message from the specified reader or buffer.
     * @function decode
     * @memberof Match
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Match} Match
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
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

    /**
     * Decodes a Match message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Match
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Match} Match
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Match.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Match message.
     * @function verify
     * @memberof Match
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
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

    /**
     * Creates a Match message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Match
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Match} Match
     */
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

    /**
     * Creates a plain object from a Match message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Match
     * @static
     * @param {Match} message Match
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
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

    /**
     * Converts this Match to JSON.
     * @function toJSON
     * @memberof Match
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Match.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Match;
})();

$root.Expr = (function() {

    /**
     * Properties of an Expr.
     * @exports IExpr
     * @interface IExpr
     * @property {boolean|null} [g_bool] Expr g_bool
     * @property {number|Long|null} [g_int] Expr g_int
     * @property {string|null} [g_string] Expr g_string
     * @property {string|null} [g_uri] Expr g_uri
     * @property {Uint8Array|null} [g_byte_array] Expr g_byte_array
     * @property {IENot|null} [e_not_body] Expr e_not_body
     * @property {IENeg|null} [e_neg_body] Expr e_neg_body
     * @property {IEMult|null} [e_mult_body] Expr e_mult_body
     * @property {IEDiv|null} [e_div_body] Expr e_div_body
     * @property {IEPlus|null} [e_plus_body] Expr e_plus_body
     * @property {IEMinus|null} [e_minus_body] Expr e_minus_body
     * @property {IELt|null} [e_lt_body] Expr e_lt_body
     * @property {IELte|null} [e_lte_body] Expr e_lte_body
     * @property {IEGt|null} [e_gt_body] Expr e_gt_body
     * @property {IEGte|null} [e_gte_body] Expr e_gte_body
     * @property {IEEq|null} [e_eq_body] Expr e_eq_body
     * @property {IENeq|null} [e_neq_body] Expr e_neq_body
     * @property {IEAnd|null} [e_and_body] Expr e_and_body
     * @property {IEOr|null} [e_or_body] Expr e_or_body
     * @property {IEVar|null} [e_var_body] Expr e_var_body
     * @property {IEList|null} [e_list_body] Expr e_list_body
     * @property {IETuple|null} [e_tuple_body] Expr e_tuple_body
     * @property {IESet|null} [e_set_body] Expr e_set_body
     * @property {IEMap|null} [e_map_body] Expr e_map_body
     * @property {IEMethod|null} [e_method_body] Expr e_method_body
     * @property {IEMatches|null} [e_matches_body] Expr e_matches_body
     * @property {IEPercentPercent|null} [e_percent_percent_body] Expr e_percent_percent_body
     * @property {IEPlusPlus|null} [e_plus_plus_body] Expr e_plus_plus_body
     * @property {IEMinusMinus|null} [e_minus_minus_body] Expr e_minus_minus_body
     * @property {IEMod|null} [e_mod_body] Expr e_mod_body
     */

    /**
     * Constructs a new Expr.
     * @exports Expr
     * @classdesc Represents an Expr.
     * @implements IExpr
     * @constructor
     * @param {IExpr=} [properties] Properties to set
     */
    function Expr(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Expr g_bool.
     * @member {boolean} g_bool
     * @memberof Expr
     * @instance
     */
    Expr.prototype.g_bool = false;

    /**
     * Expr g_int.
     * @member {number|Long} g_int
     * @memberof Expr
     * @instance
     */
    Expr.prototype.g_int = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Expr g_string.
     * @member {string} g_string
     * @memberof Expr
     * @instance
     */
    Expr.prototype.g_string = "";

    /**
     * Expr g_uri.
     * @member {string} g_uri
     * @memberof Expr
     * @instance
     */
    Expr.prototype.g_uri = "";

    /**
     * Expr g_byte_array.
     * @member {Uint8Array} g_byte_array
     * @memberof Expr
     * @instance
     */
    Expr.prototype.g_byte_array = $util.newBuffer([]);

    /**
     * Expr e_not_body.
     * @member {IENot|null|undefined} e_not_body
     * @memberof Expr
     * @instance
     */
    Expr.prototype.e_not_body = null;

    /**
     * Expr e_neg_body.
     * @member {IENeg|null|undefined} e_neg_body
     * @memberof Expr
     * @instance
     */
    Expr.prototype.e_neg_body = null;

    /**
     * Expr e_mult_body.
     * @member {IEMult|null|undefined} e_mult_body
     * @memberof Expr
     * @instance
     */
    Expr.prototype.e_mult_body = null;

    /**
     * Expr e_div_body.
     * @member {IEDiv|null|undefined} e_div_body
     * @memberof Expr
     * @instance
     */
    Expr.prototype.e_div_body = null;

    /**
     * Expr e_plus_body.
     * @member {IEPlus|null|undefined} e_plus_body
     * @memberof Expr
     * @instance
     */
    Expr.prototype.e_plus_body = null;

    /**
     * Expr e_minus_body.
     * @member {IEMinus|null|undefined} e_minus_body
     * @memberof Expr
     * @instance
     */
    Expr.prototype.e_minus_body = null;

    /**
     * Expr e_lt_body.
     * @member {IELt|null|undefined} e_lt_body
     * @memberof Expr
     * @instance
     */
    Expr.prototype.e_lt_body = null;

    /**
     * Expr e_lte_body.
     * @member {IELte|null|undefined} e_lte_body
     * @memberof Expr
     * @instance
     */
    Expr.prototype.e_lte_body = null;

    /**
     * Expr e_gt_body.
     * @member {IEGt|null|undefined} e_gt_body
     * @memberof Expr
     * @instance
     */
    Expr.prototype.e_gt_body = null;

    /**
     * Expr e_gte_body.
     * @member {IEGte|null|undefined} e_gte_body
     * @memberof Expr
     * @instance
     */
    Expr.prototype.e_gte_body = null;

    /**
     * Expr e_eq_body.
     * @member {IEEq|null|undefined} e_eq_body
     * @memberof Expr
     * @instance
     */
    Expr.prototype.e_eq_body = null;

    /**
     * Expr e_neq_body.
     * @member {IENeq|null|undefined} e_neq_body
     * @memberof Expr
     * @instance
     */
    Expr.prototype.e_neq_body = null;

    /**
     * Expr e_and_body.
     * @member {IEAnd|null|undefined} e_and_body
     * @memberof Expr
     * @instance
     */
    Expr.prototype.e_and_body = null;

    /**
     * Expr e_or_body.
     * @member {IEOr|null|undefined} e_or_body
     * @memberof Expr
     * @instance
     */
    Expr.prototype.e_or_body = null;

    /**
     * Expr e_var_body.
     * @member {IEVar|null|undefined} e_var_body
     * @memberof Expr
     * @instance
     */
    Expr.prototype.e_var_body = null;

    /**
     * Expr e_list_body.
     * @member {IEList|null|undefined} e_list_body
     * @memberof Expr
     * @instance
     */
    Expr.prototype.e_list_body = null;

    /**
     * Expr e_tuple_body.
     * @member {IETuple|null|undefined} e_tuple_body
     * @memberof Expr
     * @instance
     */
    Expr.prototype.e_tuple_body = null;

    /**
     * Expr e_set_body.
     * @member {IESet|null|undefined} e_set_body
     * @memberof Expr
     * @instance
     */
    Expr.prototype.e_set_body = null;

    /**
     * Expr e_map_body.
     * @member {IEMap|null|undefined} e_map_body
     * @memberof Expr
     * @instance
     */
    Expr.prototype.e_map_body = null;

    /**
     * Expr e_method_body.
     * @member {IEMethod|null|undefined} e_method_body
     * @memberof Expr
     * @instance
     */
    Expr.prototype.e_method_body = null;

    /**
     * Expr e_matches_body.
     * @member {IEMatches|null|undefined} e_matches_body
     * @memberof Expr
     * @instance
     */
    Expr.prototype.e_matches_body = null;

    /**
     * Expr e_percent_percent_body.
     * @member {IEPercentPercent|null|undefined} e_percent_percent_body
     * @memberof Expr
     * @instance
     */
    Expr.prototype.e_percent_percent_body = null;

    /**
     * Expr e_plus_plus_body.
     * @member {IEPlusPlus|null|undefined} e_plus_plus_body
     * @memberof Expr
     * @instance
     */
    Expr.prototype.e_plus_plus_body = null;

    /**
     * Expr e_minus_minus_body.
     * @member {IEMinusMinus|null|undefined} e_minus_minus_body
     * @memberof Expr
     * @instance
     */
    Expr.prototype.e_minus_minus_body = null;

    /**
     * Expr e_mod_body.
     * @member {IEMod|null|undefined} e_mod_body
     * @memberof Expr
     * @instance
     */
    Expr.prototype.e_mod_body = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * Expr expr_instance.
     * @member {"g_bool"|"g_int"|"g_string"|"g_uri"|"g_byte_array"|"e_not_body"|"e_neg_body"|"e_mult_body"|"e_div_body"|"e_plus_body"|"e_minus_body"|"e_lt_body"|"e_lte_body"|"e_gt_body"|"e_gte_body"|"e_eq_body"|"e_neq_body"|"e_and_body"|"e_or_body"|"e_var_body"|"e_list_body"|"e_tuple_body"|"e_set_body"|"e_map_body"|"e_method_body"|"e_matches_body"|"e_percent_percent_body"|"e_plus_plus_body"|"e_minus_minus_body"|"e_mod_body"|undefined} expr_instance
     * @memberof Expr
     * @instance
     */
    Object.defineProperty(Expr.prototype, "expr_instance", {
        get: $util.oneOfGetter($oneOfFields = ["g_bool", "g_int", "g_string", "g_uri", "g_byte_array", "e_not_body", "e_neg_body", "e_mult_body", "e_div_body", "e_plus_body", "e_minus_body", "e_lt_body", "e_lte_body", "e_gt_body", "e_gte_body", "e_eq_body", "e_neq_body", "e_and_body", "e_or_body", "e_var_body", "e_list_body", "e_tuple_body", "e_set_body", "e_map_body", "e_method_body", "e_matches_body", "e_percent_percent_body", "e_plus_plus_body", "e_minus_minus_body", "e_mod_body"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new Expr instance using the specified properties.
     * @function create
     * @memberof Expr
     * @static
     * @param {IExpr=} [properties] Properties to set
     * @returns {Expr} Expr instance
     */
    Expr.create = function create(properties) {
        return new Expr(properties);
    };

    /**
     * Encodes the specified Expr message. Does not implicitly {@link Expr.verify|verify} messages.
     * @function encode
     * @memberof Expr
     * @static
     * @param {IExpr} message Expr message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Expr.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.g_bool != null && message.hasOwnProperty("g_bool"))
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.g_bool);
        if (message.g_int != null && message.hasOwnProperty("g_int"))
            writer.uint32(/* id 2, wireType 0 =*/16).sint64(message.g_int);
        if (message.g_string != null && message.hasOwnProperty("g_string"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.g_string);
        if (message.g_uri != null && message.hasOwnProperty("g_uri"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.g_uri);
        if (message.e_not_body != null && message.hasOwnProperty("e_not_body"))
            $root.ENot.encode(message.e_not_body, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.e_neg_body != null && message.hasOwnProperty("e_neg_body"))
            $root.ENeg.encode(message.e_neg_body, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        if (message.e_mult_body != null && message.hasOwnProperty("e_mult_body"))
            $root.EMult.encode(message.e_mult_body, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
        if (message.e_div_body != null && message.hasOwnProperty("e_div_body"))
            $root.EDiv.encode(message.e_div_body, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
        if (message.e_plus_body != null && message.hasOwnProperty("e_plus_body"))
            $root.EPlus.encode(message.e_plus_body, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
        if (message.e_minus_body != null && message.hasOwnProperty("e_minus_body"))
            $root.EMinus.encode(message.e_minus_body, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
        if (message.e_lt_body != null && message.hasOwnProperty("e_lt_body"))
            $root.ELt.encode(message.e_lt_body, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
        if (message.e_lte_body != null && message.hasOwnProperty("e_lte_body"))
            $root.ELte.encode(message.e_lte_body, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
        if (message.e_gt_body != null && message.hasOwnProperty("e_gt_body"))
            $root.EGt.encode(message.e_gt_body, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
        if (message.e_gte_body != null && message.hasOwnProperty("e_gte_body"))
            $root.EGte.encode(message.e_gte_body, writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
        if (message.e_eq_body != null && message.hasOwnProperty("e_eq_body"))
            $root.EEq.encode(message.e_eq_body, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
        if (message.e_neq_body != null && message.hasOwnProperty("e_neq_body"))
            $root.ENeq.encode(message.e_neq_body, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
        if (message.e_and_body != null && message.hasOwnProperty("e_and_body"))
            $root.EAnd.encode(message.e_and_body, writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
        if (message.e_or_body != null && message.hasOwnProperty("e_or_body"))
            $root.EOr.encode(message.e_or_body, writer.uint32(/* id 18, wireType 2 =*/146).fork()).ldelim();
        if (message.e_var_body != null && message.hasOwnProperty("e_var_body"))
            $root.EVar.encode(message.e_var_body, writer.uint32(/* id 19, wireType 2 =*/154).fork()).ldelim();
        if (message.e_list_body != null && message.hasOwnProperty("e_list_body"))
            $root.EList.encode(message.e_list_body, writer.uint32(/* id 20, wireType 2 =*/162).fork()).ldelim();
        if (message.e_tuple_body != null && message.hasOwnProperty("e_tuple_body"))
            $root.ETuple.encode(message.e_tuple_body, writer.uint32(/* id 21, wireType 2 =*/170).fork()).ldelim();
        if (message.e_set_body != null && message.hasOwnProperty("e_set_body"))
            $root.ESet.encode(message.e_set_body, writer.uint32(/* id 22, wireType 2 =*/178).fork()).ldelim();
        if (message.e_map_body != null && message.hasOwnProperty("e_map_body"))
            $root.EMap.encode(message.e_map_body, writer.uint32(/* id 23, wireType 2 =*/186).fork()).ldelim();
        if (message.e_method_body != null && message.hasOwnProperty("e_method_body"))
            $root.EMethod.encode(message.e_method_body, writer.uint32(/* id 24, wireType 2 =*/194).fork()).ldelim();
        if (message.g_byte_array != null && message.hasOwnProperty("g_byte_array"))
            writer.uint32(/* id 25, wireType 2 =*/202).bytes(message.g_byte_array);
        if (message.e_matches_body != null && message.hasOwnProperty("e_matches_body"))
            $root.EMatches.encode(message.e_matches_body, writer.uint32(/* id 27, wireType 2 =*/218).fork()).ldelim();
        if (message.e_percent_percent_body != null && message.hasOwnProperty("e_percent_percent_body"))
            $root.EPercentPercent.encode(message.e_percent_percent_body, writer.uint32(/* id 28, wireType 2 =*/226).fork()).ldelim();
        if (message.e_plus_plus_body != null && message.hasOwnProperty("e_plus_plus_body"))
            $root.EPlusPlus.encode(message.e_plus_plus_body, writer.uint32(/* id 29, wireType 2 =*/234).fork()).ldelim();
        if (message.e_minus_minus_body != null && message.hasOwnProperty("e_minus_minus_body"))
            $root.EMinusMinus.encode(message.e_minus_minus_body, writer.uint32(/* id 30, wireType 2 =*/242).fork()).ldelim();
        if (message.e_mod_body != null && message.hasOwnProperty("e_mod_body"))
            $root.EMod.encode(message.e_mod_body, writer.uint32(/* id 31, wireType 2 =*/250).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Expr message, length delimited. Does not implicitly {@link Expr.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Expr
     * @static
     * @param {IExpr} message Expr message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Expr.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an Expr message from the specified reader or buffer.
     * @function decode
     * @memberof Expr
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Expr} Expr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
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

    /**
     * Decodes an Expr message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Expr
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Expr} Expr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Expr.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an Expr message.
     * @function verify
     * @memberof Expr
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
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

    /**
     * Creates an Expr message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Expr
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Expr} Expr
     */
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

    /**
     * Creates a plain object from an Expr message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Expr
     * @static
     * @param {Expr} message Expr
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
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

    /**
     * Converts this Expr to JSON.
     * @function toJSON
     * @memberof Expr
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Expr.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Expr;
})();

$root.EList = (function() {

    /**
     * Properties of a EList.
     * @exports IEList
     * @interface IEList
     * @property {Array.<IPar>|null} [ps] EList ps
     * @property {Uint8Array|null} [locallyFree] EList locallyFree
     * @property {boolean|null} [connective_used] EList connective_used
     * @property {IVar|null} [remainder] EList remainder
     */

    /**
     * Constructs a new EList.
     * @exports EList
     * @classdesc Represents a EList.
     * @implements IEList
     * @constructor
     * @param {IEList=} [properties] Properties to set
     */
    function EList(properties) {
        this.ps = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * EList ps.
     * @member {Array.<IPar>} ps
     * @memberof EList
     * @instance
     */
    EList.prototype.ps = $util.emptyArray;

    /**
     * EList locallyFree.
     * @member {Uint8Array} locallyFree
     * @memberof EList
     * @instance
     */
    EList.prototype.locallyFree = $util.newBuffer([]);

    /**
     * EList connective_used.
     * @member {boolean} connective_used
     * @memberof EList
     * @instance
     */
    EList.prototype.connective_used = false;

    /**
     * EList remainder.
     * @member {IVar|null|undefined} remainder
     * @memberof EList
     * @instance
     */
    EList.prototype.remainder = null;

    /**
     * Creates a new EList instance using the specified properties.
     * @function create
     * @memberof EList
     * @static
     * @param {IEList=} [properties] Properties to set
     * @returns {EList} EList instance
     */
    EList.create = function create(properties) {
        return new EList(properties);
    };

    /**
     * Encodes the specified EList message. Does not implicitly {@link EList.verify|verify} messages.
     * @function encode
     * @memberof EList
     * @static
     * @param {IEList} message EList message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EList.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.ps != null && message.ps.length)
            for (var i = 0; i < message.ps.length; ++i)
                $root.Par.encode(message.ps[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.locallyFree != null && message.hasOwnProperty("locallyFree"))
            writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.locallyFree);
        if (message.connective_used != null && message.hasOwnProperty("connective_used"))
            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.connective_used);
        if (message.remainder != null && message.hasOwnProperty("remainder"))
            $root.Var.encode(message.remainder, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified EList message, length delimited. Does not implicitly {@link EList.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EList
     * @static
     * @param {IEList} message EList message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EList.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a EList message from the specified reader or buffer.
     * @function decode
     * @memberof EList
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EList} EList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
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

    /**
     * Decodes a EList message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EList
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EList} EList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EList.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a EList message.
     * @function verify
     * @memberof EList
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
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

    /**
     * Creates a EList message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EList
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EList} EList
     */
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

    /**
     * Creates a plain object from a EList message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EList
     * @static
     * @param {EList} message EList
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
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

    /**
     * Converts this EList to JSON.
     * @function toJSON
     * @memberof EList
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EList.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EList;
})();

$root.ETuple = (function() {

    /**
     * Properties of a ETuple.
     * @exports IETuple
     * @interface IETuple
     * @property {Array.<IPar>|null} [ps] ETuple ps
     * @property {Uint8Array|null} [locallyFree] ETuple locallyFree
     * @property {boolean|null} [connective_used] ETuple connective_used
     */

    /**
     * Constructs a new ETuple.
     * @exports ETuple
     * @classdesc Represents a ETuple.
     * @implements IETuple
     * @constructor
     * @param {IETuple=} [properties] Properties to set
     */
    function ETuple(properties) {
        this.ps = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ETuple ps.
     * @member {Array.<IPar>} ps
     * @memberof ETuple
     * @instance
     */
    ETuple.prototype.ps = $util.emptyArray;

    /**
     * ETuple locallyFree.
     * @member {Uint8Array} locallyFree
     * @memberof ETuple
     * @instance
     */
    ETuple.prototype.locallyFree = $util.newBuffer([]);

    /**
     * ETuple connective_used.
     * @member {boolean} connective_used
     * @memberof ETuple
     * @instance
     */
    ETuple.prototype.connective_used = false;

    /**
     * Creates a new ETuple instance using the specified properties.
     * @function create
     * @memberof ETuple
     * @static
     * @param {IETuple=} [properties] Properties to set
     * @returns {ETuple} ETuple instance
     */
    ETuple.create = function create(properties) {
        return new ETuple(properties);
    };

    /**
     * Encodes the specified ETuple message. Does not implicitly {@link ETuple.verify|verify} messages.
     * @function encode
     * @memberof ETuple
     * @static
     * @param {IETuple} message ETuple message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ETuple.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.ps != null && message.ps.length)
            for (var i = 0; i < message.ps.length; ++i)
                $root.Par.encode(message.ps[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.locallyFree != null && message.hasOwnProperty("locallyFree"))
            writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.locallyFree);
        if (message.connective_used != null && message.hasOwnProperty("connective_used"))
            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.connective_used);
        return writer;
    };

    /**
     * Encodes the specified ETuple message, length delimited. Does not implicitly {@link ETuple.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ETuple
     * @static
     * @param {IETuple} message ETuple message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ETuple.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ETuple message from the specified reader or buffer.
     * @function decode
     * @memberof ETuple
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ETuple} ETuple
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
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

    /**
     * Decodes a ETuple message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ETuple
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ETuple} ETuple
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ETuple.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ETuple message.
     * @function verify
     * @memberof ETuple
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
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

    /**
     * Creates a ETuple message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ETuple
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ETuple} ETuple
     */
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

    /**
     * Creates a plain object from a ETuple message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ETuple
     * @static
     * @param {ETuple} message ETuple
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
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

    /**
     * Converts this ETuple to JSON.
     * @function toJSON
     * @memberof ETuple
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ETuple.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ETuple;
})();

$root.ESet = (function() {

    /**
     * Properties of a ESet.
     * @exports IESet
     * @interface IESet
     * @property {Array.<IPar>|null} [ps] ESet ps
     * @property {Uint8Array|null} [locallyFree] ESet locallyFree
     * @property {boolean|null} [connective_used] ESet connective_used
     * @property {IVar|null} [remainder] ESet remainder
     */

    /**
     * Constructs a new ESet.
     * @exports ESet
     * @classdesc Represents a ESet.
     * @implements IESet
     * @constructor
     * @param {IESet=} [properties] Properties to set
     */
    function ESet(properties) {
        this.ps = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ESet ps.
     * @member {Array.<IPar>} ps
     * @memberof ESet
     * @instance
     */
    ESet.prototype.ps = $util.emptyArray;

    /**
     * ESet locallyFree.
     * @member {Uint8Array} locallyFree
     * @memberof ESet
     * @instance
     */
    ESet.prototype.locallyFree = $util.newBuffer([]);

    /**
     * ESet connective_used.
     * @member {boolean} connective_used
     * @memberof ESet
     * @instance
     */
    ESet.prototype.connective_used = false;

    /**
     * ESet remainder.
     * @member {IVar|null|undefined} remainder
     * @memberof ESet
     * @instance
     */
    ESet.prototype.remainder = null;

    /**
     * Creates a new ESet instance using the specified properties.
     * @function create
     * @memberof ESet
     * @static
     * @param {IESet=} [properties] Properties to set
     * @returns {ESet} ESet instance
     */
    ESet.create = function create(properties) {
        return new ESet(properties);
    };

    /**
     * Encodes the specified ESet message. Does not implicitly {@link ESet.verify|verify} messages.
     * @function encode
     * @memberof ESet
     * @static
     * @param {IESet} message ESet message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ESet.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.ps != null && message.ps.length)
            for (var i = 0; i < message.ps.length; ++i)
                $root.Par.encode(message.ps[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.locallyFree != null && message.hasOwnProperty("locallyFree"))
            writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.locallyFree);
        if (message.connective_used != null && message.hasOwnProperty("connective_used"))
            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.connective_used);
        if (message.remainder != null && message.hasOwnProperty("remainder"))
            $root.Var.encode(message.remainder, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ESet message, length delimited. Does not implicitly {@link ESet.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ESet
     * @static
     * @param {IESet} message ESet message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ESet.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ESet message from the specified reader or buffer.
     * @function decode
     * @memberof ESet
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ESet} ESet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
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

    /**
     * Decodes a ESet message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ESet
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ESet} ESet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ESet.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ESet message.
     * @function verify
     * @memberof ESet
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
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

    /**
     * Creates a ESet message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ESet
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ESet} ESet
     */
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

    /**
     * Creates a plain object from a ESet message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ESet
     * @static
     * @param {ESet} message ESet
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
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

    /**
     * Converts this ESet to JSON.
     * @function toJSON
     * @memberof ESet
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ESet.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ESet;
})();

$root.EMap = (function() {

    /**
     * Properties of a EMap.
     * @exports IEMap
     * @interface IEMap
     * @property {Array.<IKeyValuePair>|null} [kvs] EMap kvs
     * @property {Uint8Array|null} [locallyFree] EMap locallyFree
     * @property {boolean|null} [connective_used] EMap connective_used
     * @property {IVar|null} [remainder] EMap remainder
     */

    /**
     * Constructs a new EMap.
     * @exports EMap
     * @classdesc Represents a EMap.
     * @implements IEMap
     * @constructor
     * @param {IEMap=} [properties] Properties to set
     */
    function EMap(properties) {
        this.kvs = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * EMap kvs.
     * @member {Array.<IKeyValuePair>} kvs
     * @memberof EMap
     * @instance
     */
    EMap.prototype.kvs = $util.emptyArray;

    /**
     * EMap locallyFree.
     * @member {Uint8Array} locallyFree
     * @memberof EMap
     * @instance
     */
    EMap.prototype.locallyFree = $util.newBuffer([]);

    /**
     * EMap connective_used.
     * @member {boolean} connective_used
     * @memberof EMap
     * @instance
     */
    EMap.prototype.connective_used = false;

    /**
     * EMap remainder.
     * @member {IVar|null|undefined} remainder
     * @memberof EMap
     * @instance
     */
    EMap.prototype.remainder = null;

    /**
     * Creates a new EMap instance using the specified properties.
     * @function create
     * @memberof EMap
     * @static
     * @param {IEMap=} [properties] Properties to set
     * @returns {EMap} EMap instance
     */
    EMap.create = function create(properties) {
        return new EMap(properties);
    };

    /**
     * Encodes the specified EMap message. Does not implicitly {@link EMap.verify|verify} messages.
     * @function encode
     * @memberof EMap
     * @static
     * @param {IEMap} message EMap message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EMap.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.kvs != null && message.kvs.length)
            for (var i = 0; i < message.kvs.length; ++i)
                $root.KeyValuePair.encode(message.kvs[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.locallyFree != null && message.hasOwnProperty("locallyFree"))
            writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.locallyFree);
        if (message.connective_used != null && message.hasOwnProperty("connective_used"))
            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.connective_used);
        if (message.remainder != null && message.hasOwnProperty("remainder"))
            $root.Var.encode(message.remainder, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified EMap message, length delimited. Does not implicitly {@link EMap.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EMap
     * @static
     * @param {IEMap} message EMap message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EMap.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a EMap message from the specified reader or buffer.
     * @function decode
     * @memberof EMap
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EMap} EMap
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
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

    /**
     * Decodes a EMap message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EMap
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EMap} EMap
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EMap.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a EMap message.
     * @function verify
     * @memberof EMap
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
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

    /**
     * Creates a EMap message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EMap
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EMap} EMap
     */
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

    /**
     * Creates a plain object from a EMap message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EMap
     * @static
     * @param {EMap} message EMap
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
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

    /**
     * Converts this EMap to JSON.
     * @function toJSON
     * @memberof EMap
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EMap.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EMap;
})();

$root.EMethod = (function() {

    /**
     * Properties of a EMethod.
     * @exports IEMethod
     * @interface IEMethod
     * @property {string|null} [methodName] EMethod methodName
     * @property {IPar|null} [target] EMethod target
     * @property {Array.<IPar>|null} ["arguments"] EMethod arguments
     * @property {Uint8Array|null} [locallyFree] EMethod locallyFree
     * @property {boolean|null} [connective_used] EMethod connective_used
     */

    /**
     * Constructs a new EMethod.
     * @exports EMethod
     * @classdesc `target.method(arguments)`
     * @implements IEMethod
     * @constructor
     * @param {IEMethod=} [properties] Properties to set
     */
    function EMethod(properties) {
        this["arguments"] = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * EMethod methodName.
     * @member {string} methodName
     * @memberof EMethod
     * @instance
     */
    EMethod.prototype.methodName = "";

    /**
     * EMethod target.
     * @member {IPar|null|undefined} target
     * @memberof EMethod
     * @instance
     */
    EMethod.prototype.target = null;

    /**
     * EMethod arguments.
     * @member {Array.<IPar>} arguments
     * @memberof EMethod
     * @instance
     */
    EMethod.prototype["arguments"] = $util.emptyArray;

    /**
     * EMethod locallyFree.
     * @member {Uint8Array} locallyFree
     * @memberof EMethod
     * @instance
     */
    EMethod.prototype.locallyFree = $util.newBuffer([]);

    /**
     * EMethod connective_used.
     * @member {boolean} connective_used
     * @memberof EMethod
     * @instance
     */
    EMethod.prototype.connective_used = false;

    /**
     * Creates a new EMethod instance using the specified properties.
     * @function create
     * @memberof EMethod
     * @static
     * @param {IEMethod=} [properties] Properties to set
     * @returns {EMethod} EMethod instance
     */
    EMethod.create = function create(properties) {
        return new EMethod(properties);
    };

    /**
     * Encodes the specified EMethod message. Does not implicitly {@link EMethod.verify|verify} messages.
     * @function encode
     * @memberof EMethod
     * @static
     * @param {IEMethod} message EMethod message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EMethod.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.methodName != null && message.hasOwnProperty("methodName"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.methodName);
        if (message.target != null && message.hasOwnProperty("target"))
            $root.Par.encode(message.target, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message["arguments"] != null && message["arguments"].length)
            for (var i = 0; i < message["arguments"].length; ++i)
                $root.Par.encode(message["arguments"][i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.locallyFree != null && message.hasOwnProperty("locallyFree"))
            writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.locallyFree);
        if (message.connective_used != null && message.hasOwnProperty("connective_used"))
            writer.uint32(/* id 6, wireType 0 =*/48).bool(message.connective_used);
        return writer;
    };

    /**
     * Encodes the specified EMethod message, length delimited. Does not implicitly {@link EMethod.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EMethod
     * @static
     * @param {IEMethod} message EMethod message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EMethod.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a EMethod message from the specified reader or buffer.
     * @function decode
     * @memberof EMethod
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EMethod} EMethod
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
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

    /**
     * Decodes a EMethod message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EMethod
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EMethod} EMethod
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EMethod.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a EMethod message.
     * @function verify
     * @memberof EMethod
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
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

    /**
     * Creates a EMethod message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EMethod
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EMethod} EMethod
     */
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

    /**
     * Creates a plain object from a EMethod message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EMethod
     * @static
     * @param {EMethod} message EMethod
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
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

    /**
     * Converts this EMethod to JSON.
     * @function toJSON
     * @memberof EMethod
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EMethod.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EMethod;
})();

$root.KeyValuePair = (function() {

    /**
     * Properties of a KeyValuePair.
     * @exports IKeyValuePair
     * @interface IKeyValuePair
     * @property {IPar|null} [key] KeyValuePair key
     * @property {IPar|null} [value] KeyValuePair value
     */

    /**
     * Constructs a new KeyValuePair.
     * @exports KeyValuePair
     * @classdesc Represents a KeyValuePair.
     * @implements IKeyValuePair
     * @constructor
     * @param {IKeyValuePair=} [properties] Properties to set
     */
    function KeyValuePair(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * KeyValuePair key.
     * @member {IPar|null|undefined} key
     * @memberof KeyValuePair
     * @instance
     */
    KeyValuePair.prototype.key = null;

    /**
     * KeyValuePair value.
     * @member {IPar|null|undefined} value
     * @memberof KeyValuePair
     * @instance
     */
    KeyValuePair.prototype.value = null;

    /**
     * Creates a new KeyValuePair instance using the specified properties.
     * @function create
     * @memberof KeyValuePair
     * @static
     * @param {IKeyValuePair=} [properties] Properties to set
     * @returns {KeyValuePair} KeyValuePair instance
     */
    KeyValuePair.create = function create(properties) {
        return new KeyValuePair(properties);
    };

    /**
     * Encodes the specified KeyValuePair message. Does not implicitly {@link KeyValuePair.verify|verify} messages.
     * @function encode
     * @memberof KeyValuePair
     * @static
     * @param {IKeyValuePair} message KeyValuePair message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    KeyValuePair.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.key != null && message.hasOwnProperty("key"))
            $root.Par.encode(message.key, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.value != null && message.hasOwnProperty("value"))
            $root.Par.encode(message.value, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified KeyValuePair message, length delimited. Does not implicitly {@link KeyValuePair.verify|verify} messages.
     * @function encodeDelimited
     * @memberof KeyValuePair
     * @static
     * @param {IKeyValuePair} message KeyValuePair message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    KeyValuePair.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a KeyValuePair message from the specified reader or buffer.
     * @function decode
     * @memberof KeyValuePair
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {KeyValuePair} KeyValuePair
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
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

    /**
     * Decodes a KeyValuePair message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof KeyValuePair
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {KeyValuePair} KeyValuePair
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    KeyValuePair.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a KeyValuePair message.
     * @function verify
     * @memberof KeyValuePair
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
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

    /**
     * Creates a KeyValuePair message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof KeyValuePair
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {KeyValuePair} KeyValuePair
     */
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

    /**
     * Creates a plain object from a KeyValuePair message. Also converts values to other types if specified.
     * @function toObject
     * @memberof KeyValuePair
     * @static
     * @param {KeyValuePair} message KeyValuePair
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
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

    /**
     * Converts this KeyValuePair to JSON.
     * @function toJSON
     * @memberof KeyValuePair
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    KeyValuePair.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return KeyValuePair;
})();

$root.EVar = (function() {

    /**
     * Properties of a EVar.
     * @exports IEVar
     * @interface IEVar
     * @property {IVar|null} [v] EVar v
     */

    /**
     * Constructs a new EVar.
     * @exports EVar
     * @classdesc Represents a EVar.
     * @implements IEVar
     * @constructor
     * @param {IEVar=} [properties] Properties to set
     */
    function EVar(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * EVar v.
     * @member {IVar|null|undefined} v
     * @memberof EVar
     * @instance
     */
    EVar.prototype.v = null;

    /**
     * Creates a new EVar instance using the specified properties.
     * @function create
     * @memberof EVar
     * @static
     * @param {IEVar=} [properties] Properties to set
     * @returns {EVar} EVar instance
     */
    EVar.create = function create(properties) {
        return new EVar(properties);
    };

    /**
     * Encodes the specified EVar message. Does not implicitly {@link EVar.verify|verify} messages.
     * @function encode
     * @memberof EVar
     * @static
     * @param {IEVar} message EVar message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EVar.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.v != null && message.hasOwnProperty("v"))
            $root.Var.encode(message.v, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified EVar message, length delimited. Does not implicitly {@link EVar.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EVar
     * @static
     * @param {IEVar} message EVar message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EVar.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a EVar message from the specified reader or buffer.
     * @function decode
     * @memberof EVar
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EVar} EVar
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
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

    /**
     * Decodes a EVar message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EVar
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EVar} EVar
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EVar.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a EVar message.
     * @function verify
     * @memberof EVar
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
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

    /**
     * Creates a EVar message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EVar
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EVar} EVar
     */
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

    /**
     * Creates a plain object from a EVar message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EVar
     * @static
     * @param {EVar} message EVar
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
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

    /**
     * Converts this EVar to JSON.
     * @function toJSON
     * @memberof EVar
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EVar.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EVar;
})();

$root.ENot = (function() {

    /**
     * Properties of a ENot.
     * @exports IENot
     * @interface IENot
     * @property {IPar|null} [p] ENot p
     */

    /**
     * Constructs a new ENot.
     * @exports ENot
     * @classdesc Represents a ENot.
     * @implements IENot
     * @constructor
     * @param {IENot=} [properties] Properties to set
     */
    function ENot(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ENot p.
     * @member {IPar|null|undefined} p
     * @memberof ENot
     * @instance
     */
    ENot.prototype.p = null;

    /**
     * Creates a new ENot instance using the specified properties.
     * @function create
     * @memberof ENot
     * @static
     * @param {IENot=} [properties] Properties to set
     * @returns {ENot} ENot instance
     */
    ENot.create = function create(properties) {
        return new ENot(properties);
    };

    /**
     * Encodes the specified ENot message. Does not implicitly {@link ENot.verify|verify} messages.
     * @function encode
     * @memberof ENot
     * @static
     * @param {IENot} message ENot message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ENot.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.p != null && message.hasOwnProperty("p"))
            $root.Par.encode(message.p, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ENot message, length delimited. Does not implicitly {@link ENot.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ENot
     * @static
     * @param {IENot} message ENot message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ENot.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ENot message from the specified reader or buffer.
     * @function decode
     * @memberof ENot
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ENot} ENot
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
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

    /**
     * Decodes a ENot message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ENot
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ENot} ENot
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ENot.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ENot message.
     * @function verify
     * @memberof ENot
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
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

    /**
     * Creates a ENot message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ENot
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ENot} ENot
     */
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

    /**
     * Creates a plain object from a ENot message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ENot
     * @static
     * @param {ENot} message ENot
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
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

    /**
     * Converts this ENot to JSON.
     * @function toJSON
     * @memberof ENot
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ENot.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ENot;
})();

$root.ENeg = (function() {

    /**
     * Properties of a ENeg.
     * @exports IENeg
     * @interface IENeg
     * @property {IPar|null} [p] ENeg p
     */

    /**
     * Constructs a new ENeg.
     * @exports ENeg
     * @classdesc Represents a ENeg.
     * @implements IENeg
     * @constructor
     * @param {IENeg=} [properties] Properties to set
     */
    function ENeg(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ENeg p.
     * @member {IPar|null|undefined} p
     * @memberof ENeg
     * @instance
     */
    ENeg.prototype.p = null;

    /**
     * Creates a new ENeg instance using the specified properties.
     * @function create
     * @memberof ENeg
     * @static
     * @param {IENeg=} [properties] Properties to set
     * @returns {ENeg} ENeg instance
     */
    ENeg.create = function create(properties) {
        return new ENeg(properties);
    };

    /**
     * Encodes the specified ENeg message. Does not implicitly {@link ENeg.verify|verify} messages.
     * @function encode
     * @memberof ENeg
     * @static
     * @param {IENeg} message ENeg message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ENeg.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.p != null && message.hasOwnProperty("p"))
            $root.Par.encode(message.p, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ENeg message, length delimited. Does not implicitly {@link ENeg.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ENeg
     * @static
     * @param {IENeg} message ENeg message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ENeg.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ENeg message from the specified reader or buffer.
     * @function decode
     * @memberof ENeg
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ENeg} ENeg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
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

    /**
     * Decodes a ENeg message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ENeg
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ENeg} ENeg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ENeg.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ENeg message.
     * @function verify
     * @memberof ENeg
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
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

    /**
     * Creates a ENeg message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ENeg
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ENeg} ENeg
     */
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

    /**
     * Creates a plain object from a ENeg message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ENeg
     * @static
     * @param {ENeg} message ENeg
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
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

    /**
     * Converts this ENeg to JSON.
     * @function toJSON
     * @memberof ENeg
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ENeg.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ENeg;
})();

$root.EMult = (function() {

    /**
     * Properties of a EMult.
     * @exports IEMult
     * @interface IEMult
     * @property {IPar|null} [p1] EMult p1
     * @property {IPar|null} [p2] EMult p2
     */

    /**
     * Constructs a new EMult.
     * @exports EMult
     * @classdesc Represents a EMult.
     * @implements IEMult
     * @constructor
     * @param {IEMult=} [properties] Properties to set
     */
    function EMult(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * EMult p1.
     * @member {IPar|null|undefined} p1
     * @memberof EMult
     * @instance
     */
    EMult.prototype.p1 = null;

    /**
     * EMult p2.
     * @member {IPar|null|undefined} p2
     * @memberof EMult
     * @instance
     */
    EMult.prototype.p2 = null;

    /**
     * Creates a new EMult instance using the specified properties.
     * @function create
     * @memberof EMult
     * @static
     * @param {IEMult=} [properties] Properties to set
     * @returns {EMult} EMult instance
     */
    EMult.create = function create(properties) {
        return new EMult(properties);
    };

    /**
     * Encodes the specified EMult message. Does not implicitly {@link EMult.verify|verify} messages.
     * @function encode
     * @memberof EMult
     * @static
     * @param {IEMult} message EMult message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EMult.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.p1 != null && message.hasOwnProperty("p1"))
            $root.Par.encode(message.p1, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.p2 != null && message.hasOwnProperty("p2"))
            $root.Par.encode(message.p2, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified EMult message, length delimited. Does not implicitly {@link EMult.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EMult
     * @static
     * @param {IEMult} message EMult message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EMult.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a EMult message from the specified reader or buffer.
     * @function decode
     * @memberof EMult
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EMult} EMult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
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

    /**
     * Decodes a EMult message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EMult
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EMult} EMult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EMult.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a EMult message.
     * @function verify
     * @memberof EMult
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
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

    /**
     * Creates a EMult message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EMult
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EMult} EMult
     */
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

    /**
     * Creates a plain object from a EMult message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EMult
     * @static
     * @param {EMult} message EMult
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
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

    /**
     * Converts this EMult to JSON.
     * @function toJSON
     * @memberof EMult
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EMult.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EMult;
})();

$root.EDiv = (function() {

    /**
     * Properties of a EDiv.
     * @exports IEDiv
     * @interface IEDiv
     * @property {IPar|null} [p1] EDiv p1
     * @property {IPar|null} [p2] EDiv p2
     */

    /**
     * Constructs a new EDiv.
     * @exports EDiv
     * @classdesc Represents a EDiv.
     * @implements IEDiv
     * @constructor
     * @param {IEDiv=} [properties] Properties to set
     */
    function EDiv(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * EDiv p1.
     * @member {IPar|null|undefined} p1
     * @memberof EDiv
     * @instance
     */
    EDiv.prototype.p1 = null;

    /**
     * EDiv p2.
     * @member {IPar|null|undefined} p2
     * @memberof EDiv
     * @instance
     */
    EDiv.prototype.p2 = null;

    /**
     * Creates a new EDiv instance using the specified properties.
     * @function create
     * @memberof EDiv
     * @static
     * @param {IEDiv=} [properties] Properties to set
     * @returns {EDiv} EDiv instance
     */
    EDiv.create = function create(properties) {
        return new EDiv(properties);
    };

    /**
     * Encodes the specified EDiv message. Does not implicitly {@link EDiv.verify|verify} messages.
     * @function encode
     * @memberof EDiv
     * @static
     * @param {IEDiv} message EDiv message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EDiv.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.p1 != null && message.hasOwnProperty("p1"))
            $root.Par.encode(message.p1, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.p2 != null && message.hasOwnProperty("p2"))
            $root.Par.encode(message.p2, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified EDiv message, length delimited. Does not implicitly {@link EDiv.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EDiv
     * @static
     * @param {IEDiv} message EDiv message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EDiv.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a EDiv message from the specified reader or buffer.
     * @function decode
     * @memberof EDiv
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EDiv} EDiv
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
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

    /**
     * Decodes a EDiv message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EDiv
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EDiv} EDiv
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EDiv.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a EDiv message.
     * @function verify
     * @memberof EDiv
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
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

    /**
     * Creates a EDiv message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EDiv
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EDiv} EDiv
     */
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

    /**
     * Creates a plain object from a EDiv message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EDiv
     * @static
     * @param {EDiv} message EDiv
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
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

    /**
     * Converts this EDiv to JSON.
     * @function toJSON
     * @memberof EDiv
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EDiv.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EDiv;
})();

$root.EMod = (function() {

    /**
     * Properties of a EMod.
     * @exports IEMod
     * @interface IEMod
     * @property {IPar|null} [p1] EMod p1
     * @property {IPar|null} [p2] EMod p2
     */

    /**
     * Constructs a new EMod.
     * @exports EMod
     * @classdesc Represents a EMod.
     * @implements IEMod
     * @constructor
     * @param {IEMod=} [properties] Properties to set
     */
    function EMod(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * EMod p1.
     * @member {IPar|null|undefined} p1
     * @memberof EMod
     * @instance
     */
    EMod.prototype.p1 = null;

    /**
     * EMod p2.
     * @member {IPar|null|undefined} p2
     * @memberof EMod
     * @instance
     */
    EMod.prototype.p2 = null;

    /**
     * Creates a new EMod instance using the specified properties.
     * @function create
     * @memberof EMod
     * @static
     * @param {IEMod=} [properties] Properties to set
     * @returns {EMod} EMod instance
     */
    EMod.create = function create(properties) {
        return new EMod(properties);
    };

    /**
     * Encodes the specified EMod message. Does not implicitly {@link EMod.verify|verify} messages.
     * @function encode
     * @memberof EMod
     * @static
     * @param {IEMod} message EMod message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EMod.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.p1 != null && message.hasOwnProperty("p1"))
            $root.Par.encode(message.p1, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.p2 != null && message.hasOwnProperty("p2"))
            $root.Par.encode(message.p2, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified EMod message, length delimited. Does not implicitly {@link EMod.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EMod
     * @static
     * @param {IEMod} message EMod message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EMod.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a EMod message from the specified reader or buffer.
     * @function decode
     * @memberof EMod
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EMod} EMod
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
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

    /**
     * Decodes a EMod message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EMod
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EMod} EMod
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EMod.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a EMod message.
     * @function verify
     * @memberof EMod
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
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

    /**
     * Creates a EMod message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EMod
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EMod} EMod
     */
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

    /**
     * Creates a plain object from a EMod message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EMod
     * @static
     * @param {EMod} message EMod
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
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

    /**
     * Converts this EMod to JSON.
     * @function toJSON
     * @memberof EMod
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EMod.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EMod;
})();

$root.EPlus = (function() {

    /**
     * Properties of a EPlus.
     * @exports IEPlus
     * @interface IEPlus
     * @property {IPar|null} [p1] EPlus p1
     * @property {IPar|null} [p2] EPlus p2
     */

    /**
     * Constructs a new EPlus.
     * @exports EPlus
     * @classdesc Represents a EPlus.
     * @implements IEPlus
     * @constructor
     * @param {IEPlus=} [properties] Properties to set
     */
    function EPlus(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * EPlus p1.
     * @member {IPar|null|undefined} p1
     * @memberof EPlus
     * @instance
     */
    EPlus.prototype.p1 = null;

    /**
     * EPlus p2.
     * @member {IPar|null|undefined} p2
     * @memberof EPlus
     * @instance
     */
    EPlus.prototype.p2 = null;

    /**
     * Creates a new EPlus instance using the specified properties.
     * @function create
     * @memberof EPlus
     * @static
     * @param {IEPlus=} [properties] Properties to set
     * @returns {EPlus} EPlus instance
     */
    EPlus.create = function create(properties) {
        return new EPlus(properties);
    };

    /**
     * Encodes the specified EPlus message. Does not implicitly {@link EPlus.verify|verify} messages.
     * @function encode
     * @memberof EPlus
     * @static
     * @param {IEPlus} message EPlus message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EPlus.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.p1 != null && message.hasOwnProperty("p1"))
            $root.Par.encode(message.p1, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.p2 != null && message.hasOwnProperty("p2"))
            $root.Par.encode(message.p2, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified EPlus message, length delimited. Does not implicitly {@link EPlus.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EPlus
     * @static
     * @param {IEPlus} message EPlus message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EPlus.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a EPlus message from the specified reader or buffer.
     * @function decode
     * @memberof EPlus
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EPlus} EPlus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
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

    /**
     * Decodes a EPlus message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EPlus
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EPlus} EPlus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EPlus.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a EPlus message.
     * @function verify
     * @memberof EPlus
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
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

    /**
     * Creates a EPlus message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EPlus
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EPlus} EPlus
     */
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

    /**
     * Creates a plain object from a EPlus message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EPlus
     * @static
     * @param {EPlus} message EPlus
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
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

    /**
     * Converts this EPlus to JSON.
     * @function toJSON
     * @memberof EPlus
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EPlus.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EPlus;
})();

$root.EMinus = (function() {

    /**
     * Properties of a EMinus.
     * @exports IEMinus
     * @interface IEMinus
     * @property {IPar|null} [p1] EMinus p1
     * @property {IPar|null} [p2] EMinus p2
     */

    /**
     * Constructs a new EMinus.
     * @exports EMinus
     * @classdesc Represents a EMinus.
     * @implements IEMinus
     * @constructor
     * @param {IEMinus=} [properties] Properties to set
     */
    function EMinus(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * EMinus p1.
     * @member {IPar|null|undefined} p1
     * @memberof EMinus
     * @instance
     */
    EMinus.prototype.p1 = null;

    /**
     * EMinus p2.
     * @member {IPar|null|undefined} p2
     * @memberof EMinus
     * @instance
     */
    EMinus.prototype.p2 = null;

    /**
     * Creates a new EMinus instance using the specified properties.
     * @function create
     * @memberof EMinus
     * @static
     * @param {IEMinus=} [properties] Properties to set
     * @returns {EMinus} EMinus instance
     */
    EMinus.create = function create(properties) {
        return new EMinus(properties);
    };

    /**
     * Encodes the specified EMinus message. Does not implicitly {@link EMinus.verify|verify} messages.
     * @function encode
     * @memberof EMinus
     * @static
     * @param {IEMinus} message EMinus message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EMinus.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.p1 != null && message.hasOwnProperty("p1"))
            $root.Par.encode(message.p1, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.p2 != null && message.hasOwnProperty("p2"))
            $root.Par.encode(message.p2, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified EMinus message, length delimited. Does not implicitly {@link EMinus.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EMinus
     * @static
     * @param {IEMinus} message EMinus message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EMinus.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a EMinus message from the specified reader or buffer.
     * @function decode
     * @memberof EMinus
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EMinus} EMinus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
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

    /**
     * Decodes a EMinus message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EMinus
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EMinus} EMinus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EMinus.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a EMinus message.
     * @function verify
     * @memberof EMinus
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
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

    /**
     * Creates a EMinus message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EMinus
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EMinus} EMinus
     */
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

    /**
     * Creates a plain object from a EMinus message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EMinus
     * @static
     * @param {EMinus} message EMinus
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
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

    /**
     * Converts this EMinus to JSON.
     * @function toJSON
     * @memberof EMinus
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EMinus.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EMinus;
})();

$root.ELt = (function() {

    /**
     * Properties of a ELt.
     * @exports IELt
     * @interface IELt
     * @property {IPar|null} [p1] ELt p1
     * @property {IPar|null} [p2] ELt p2
     */

    /**
     * Constructs a new ELt.
     * @exports ELt
     * @classdesc Represents a ELt.
     * @implements IELt
     * @constructor
     * @param {IELt=} [properties] Properties to set
     */
    function ELt(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ELt p1.
     * @member {IPar|null|undefined} p1
     * @memberof ELt
     * @instance
     */
    ELt.prototype.p1 = null;

    /**
     * ELt p2.
     * @member {IPar|null|undefined} p2
     * @memberof ELt
     * @instance
     */
    ELt.prototype.p2 = null;

    /**
     * Creates a new ELt instance using the specified properties.
     * @function create
     * @memberof ELt
     * @static
     * @param {IELt=} [properties] Properties to set
     * @returns {ELt} ELt instance
     */
    ELt.create = function create(properties) {
        return new ELt(properties);
    };

    /**
     * Encodes the specified ELt message. Does not implicitly {@link ELt.verify|verify} messages.
     * @function encode
     * @memberof ELt
     * @static
     * @param {IELt} message ELt message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ELt.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.p1 != null && message.hasOwnProperty("p1"))
            $root.Par.encode(message.p1, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.p2 != null && message.hasOwnProperty("p2"))
            $root.Par.encode(message.p2, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ELt message, length delimited. Does not implicitly {@link ELt.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ELt
     * @static
     * @param {IELt} message ELt message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ELt.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ELt message from the specified reader or buffer.
     * @function decode
     * @memberof ELt
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ELt} ELt
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
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

    /**
     * Decodes a ELt message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ELt
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ELt} ELt
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ELt.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ELt message.
     * @function verify
     * @memberof ELt
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
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

    /**
     * Creates a ELt message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ELt
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ELt} ELt
     */
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

    /**
     * Creates a plain object from a ELt message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ELt
     * @static
     * @param {ELt} message ELt
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
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

    /**
     * Converts this ELt to JSON.
     * @function toJSON
     * @memberof ELt
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ELt.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ELt;
})();

$root.ELte = (function() {

    /**
     * Properties of a ELte.
     * @exports IELte
     * @interface IELte
     * @property {IPar|null} [p1] ELte p1
     * @property {IPar|null} [p2] ELte p2
     */

    /**
     * Constructs a new ELte.
     * @exports ELte
     * @classdesc Represents a ELte.
     * @implements IELte
     * @constructor
     * @param {IELte=} [properties] Properties to set
     */
    function ELte(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ELte p1.
     * @member {IPar|null|undefined} p1
     * @memberof ELte
     * @instance
     */
    ELte.prototype.p1 = null;

    /**
     * ELte p2.
     * @member {IPar|null|undefined} p2
     * @memberof ELte
     * @instance
     */
    ELte.prototype.p2 = null;

    /**
     * Creates a new ELte instance using the specified properties.
     * @function create
     * @memberof ELte
     * @static
     * @param {IELte=} [properties] Properties to set
     * @returns {ELte} ELte instance
     */
    ELte.create = function create(properties) {
        return new ELte(properties);
    };

    /**
     * Encodes the specified ELte message. Does not implicitly {@link ELte.verify|verify} messages.
     * @function encode
     * @memberof ELte
     * @static
     * @param {IELte} message ELte message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ELte.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.p1 != null && message.hasOwnProperty("p1"))
            $root.Par.encode(message.p1, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.p2 != null && message.hasOwnProperty("p2"))
            $root.Par.encode(message.p2, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ELte message, length delimited. Does not implicitly {@link ELte.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ELte
     * @static
     * @param {IELte} message ELte message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ELte.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ELte message from the specified reader or buffer.
     * @function decode
     * @memberof ELte
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ELte} ELte
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
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

    /**
     * Decodes a ELte message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ELte
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ELte} ELte
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ELte.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ELte message.
     * @function verify
     * @memberof ELte
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
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

    /**
     * Creates a ELte message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ELte
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ELte} ELte
     */
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

    /**
     * Creates a plain object from a ELte message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ELte
     * @static
     * @param {ELte} message ELte
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
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

    /**
     * Converts this ELte to JSON.
     * @function toJSON
     * @memberof ELte
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ELte.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ELte;
})();

$root.EGt = (function() {

    /**
     * Properties of a EGt.
     * @exports IEGt
     * @interface IEGt
     * @property {IPar|null} [p1] EGt p1
     * @property {IPar|null} [p2] EGt p2
     */

    /**
     * Constructs a new EGt.
     * @exports EGt
     * @classdesc Represents a EGt.
     * @implements IEGt
     * @constructor
     * @param {IEGt=} [properties] Properties to set
     */
    function EGt(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * EGt p1.
     * @member {IPar|null|undefined} p1
     * @memberof EGt
     * @instance
     */
    EGt.prototype.p1 = null;

    /**
     * EGt p2.
     * @member {IPar|null|undefined} p2
     * @memberof EGt
     * @instance
     */
    EGt.prototype.p2 = null;

    /**
     * Creates a new EGt instance using the specified properties.
     * @function create
     * @memberof EGt
     * @static
     * @param {IEGt=} [properties] Properties to set
     * @returns {EGt} EGt instance
     */
    EGt.create = function create(properties) {
        return new EGt(properties);
    };

    /**
     * Encodes the specified EGt message. Does not implicitly {@link EGt.verify|verify} messages.
     * @function encode
     * @memberof EGt
     * @static
     * @param {IEGt} message EGt message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EGt.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.p1 != null && message.hasOwnProperty("p1"))
            $root.Par.encode(message.p1, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.p2 != null && message.hasOwnProperty("p2"))
            $root.Par.encode(message.p2, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified EGt message, length delimited. Does not implicitly {@link EGt.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EGt
     * @static
     * @param {IEGt} message EGt message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EGt.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a EGt message from the specified reader or buffer.
     * @function decode
     * @memberof EGt
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EGt} EGt
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
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

    /**
     * Decodes a EGt message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EGt
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EGt} EGt
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EGt.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a EGt message.
     * @function verify
     * @memberof EGt
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
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

    /**
     * Creates a EGt message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EGt
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EGt} EGt
     */
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

    /**
     * Creates a plain object from a EGt message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EGt
     * @static
     * @param {EGt} message EGt
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
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

    /**
     * Converts this EGt to JSON.
     * @function toJSON
     * @memberof EGt
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EGt.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EGt;
})();

$root.EGte = (function() {

    /**
     * Properties of a EGte.
     * @exports IEGte
     * @interface IEGte
     * @property {IPar|null} [p1] EGte p1
     * @property {IPar|null} [p2] EGte p2
     */

    /**
     * Constructs a new EGte.
     * @exports EGte
     * @classdesc Represents a EGte.
     * @implements IEGte
     * @constructor
     * @param {IEGte=} [properties] Properties to set
     */
    function EGte(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * EGte p1.
     * @member {IPar|null|undefined} p1
     * @memberof EGte
     * @instance
     */
    EGte.prototype.p1 = null;

    /**
     * EGte p2.
     * @member {IPar|null|undefined} p2
     * @memberof EGte
     * @instance
     */
    EGte.prototype.p2 = null;

    /**
     * Creates a new EGte instance using the specified properties.
     * @function create
     * @memberof EGte
     * @static
     * @param {IEGte=} [properties] Properties to set
     * @returns {EGte} EGte instance
     */
    EGte.create = function create(properties) {
        return new EGte(properties);
    };

    /**
     * Encodes the specified EGte message. Does not implicitly {@link EGte.verify|verify} messages.
     * @function encode
     * @memberof EGte
     * @static
     * @param {IEGte} message EGte message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EGte.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.p1 != null && message.hasOwnProperty("p1"))
            $root.Par.encode(message.p1, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.p2 != null && message.hasOwnProperty("p2"))
            $root.Par.encode(message.p2, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified EGte message, length delimited. Does not implicitly {@link EGte.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EGte
     * @static
     * @param {IEGte} message EGte message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EGte.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a EGte message from the specified reader or buffer.
     * @function decode
     * @memberof EGte
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EGte} EGte
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
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

    /**
     * Decodes a EGte message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EGte
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EGte} EGte
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EGte.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a EGte message.
     * @function verify
     * @memberof EGte
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
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

    /**
     * Creates a EGte message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EGte
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EGte} EGte
     */
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

    /**
     * Creates a plain object from a EGte message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EGte
     * @static
     * @param {EGte} message EGte
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
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

    /**
     * Converts this EGte to JSON.
     * @function toJSON
     * @memberof EGte
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EGte.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EGte;
})();

$root.EEq = (function() {

    /**
     * Properties of a EEq.
     * @exports IEEq
     * @interface IEEq
     * @property {IPar|null} [p1] EEq p1
     * @property {IPar|null} [p2] EEq p2
     */

    /**
     * Constructs a new EEq.
     * @exports EEq
     * @classdesc Represents a EEq.
     * @implements IEEq
     * @constructor
     * @param {IEEq=} [properties] Properties to set
     */
    function EEq(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * EEq p1.
     * @member {IPar|null|undefined} p1
     * @memberof EEq
     * @instance
     */
    EEq.prototype.p1 = null;

    /**
     * EEq p2.
     * @member {IPar|null|undefined} p2
     * @memberof EEq
     * @instance
     */
    EEq.prototype.p2 = null;

    /**
     * Creates a new EEq instance using the specified properties.
     * @function create
     * @memberof EEq
     * @static
     * @param {IEEq=} [properties] Properties to set
     * @returns {EEq} EEq instance
     */
    EEq.create = function create(properties) {
        return new EEq(properties);
    };

    /**
     * Encodes the specified EEq message. Does not implicitly {@link EEq.verify|verify} messages.
     * @function encode
     * @memberof EEq
     * @static
     * @param {IEEq} message EEq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EEq.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.p1 != null && message.hasOwnProperty("p1"))
            $root.Par.encode(message.p1, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.p2 != null && message.hasOwnProperty("p2"))
            $root.Par.encode(message.p2, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified EEq message, length delimited. Does not implicitly {@link EEq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EEq
     * @static
     * @param {IEEq} message EEq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EEq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a EEq message from the specified reader or buffer.
     * @function decode
     * @memberof EEq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EEq} EEq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
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

    /**
     * Decodes a EEq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EEq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EEq} EEq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EEq.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a EEq message.
     * @function verify
     * @memberof EEq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
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

    /**
     * Creates a EEq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EEq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EEq} EEq
     */
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

    /**
     * Creates a plain object from a EEq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EEq
     * @static
     * @param {EEq} message EEq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
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

    /**
     * Converts this EEq to JSON.
     * @function toJSON
     * @memberof EEq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EEq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EEq;
})();

$root.ENeq = (function() {

    /**
     * Properties of a ENeq.
     * @exports IENeq
     * @interface IENeq
     * @property {IPar|null} [p1] ENeq p1
     * @property {IPar|null} [p2] ENeq p2
     */

    /**
     * Constructs a new ENeq.
     * @exports ENeq
     * @classdesc Represents a ENeq.
     * @implements IENeq
     * @constructor
     * @param {IENeq=} [properties] Properties to set
     */
    function ENeq(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ENeq p1.
     * @member {IPar|null|undefined} p1
     * @memberof ENeq
     * @instance
     */
    ENeq.prototype.p1 = null;

    /**
     * ENeq p2.
     * @member {IPar|null|undefined} p2
     * @memberof ENeq
     * @instance
     */
    ENeq.prototype.p2 = null;

    /**
     * Creates a new ENeq instance using the specified properties.
     * @function create
     * @memberof ENeq
     * @static
     * @param {IENeq=} [properties] Properties to set
     * @returns {ENeq} ENeq instance
     */
    ENeq.create = function create(properties) {
        return new ENeq(properties);
    };

    /**
     * Encodes the specified ENeq message. Does not implicitly {@link ENeq.verify|verify} messages.
     * @function encode
     * @memberof ENeq
     * @static
     * @param {IENeq} message ENeq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ENeq.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.p1 != null && message.hasOwnProperty("p1"))
            $root.Par.encode(message.p1, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.p2 != null && message.hasOwnProperty("p2"))
            $root.Par.encode(message.p2, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ENeq message, length delimited. Does not implicitly {@link ENeq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ENeq
     * @static
     * @param {IENeq} message ENeq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ENeq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ENeq message from the specified reader or buffer.
     * @function decode
     * @memberof ENeq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ENeq} ENeq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
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

    /**
     * Decodes a ENeq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ENeq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ENeq} ENeq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ENeq.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ENeq message.
     * @function verify
     * @memberof ENeq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
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

    /**
     * Creates a ENeq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ENeq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ENeq} ENeq
     */
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

    /**
     * Creates a plain object from a ENeq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ENeq
     * @static
     * @param {ENeq} message ENeq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
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

    /**
     * Converts this ENeq to JSON.
     * @function toJSON
     * @memberof ENeq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ENeq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ENeq;
})();

$root.EAnd = (function() {

    /**
     * Properties of a EAnd.
     * @exports IEAnd
     * @interface IEAnd
     * @property {IPar|null} [p1] EAnd p1
     * @property {IPar|null} [p2] EAnd p2
     */

    /**
     * Constructs a new EAnd.
     * @exports EAnd
     * @classdesc Represents a EAnd.
     * @implements IEAnd
     * @constructor
     * @param {IEAnd=} [properties] Properties to set
     */
    function EAnd(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * EAnd p1.
     * @member {IPar|null|undefined} p1
     * @memberof EAnd
     * @instance
     */
    EAnd.prototype.p1 = null;

    /**
     * EAnd p2.
     * @member {IPar|null|undefined} p2
     * @memberof EAnd
     * @instance
     */
    EAnd.prototype.p2 = null;

    /**
     * Creates a new EAnd instance using the specified properties.
     * @function create
     * @memberof EAnd
     * @static
     * @param {IEAnd=} [properties] Properties to set
     * @returns {EAnd} EAnd instance
     */
    EAnd.create = function create(properties) {
        return new EAnd(properties);
    };

    /**
     * Encodes the specified EAnd message. Does not implicitly {@link EAnd.verify|verify} messages.
     * @function encode
     * @memberof EAnd
     * @static
     * @param {IEAnd} message EAnd message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EAnd.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.p1 != null && message.hasOwnProperty("p1"))
            $root.Par.encode(message.p1, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.p2 != null && message.hasOwnProperty("p2"))
            $root.Par.encode(message.p2, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified EAnd message, length delimited. Does not implicitly {@link EAnd.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EAnd
     * @static
     * @param {IEAnd} message EAnd message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EAnd.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a EAnd message from the specified reader or buffer.
     * @function decode
     * @memberof EAnd
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EAnd} EAnd
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
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

    /**
     * Decodes a EAnd message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EAnd
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EAnd} EAnd
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EAnd.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a EAnd message.
     * @function verify
     * @memberof EAnd
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
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

    /**
     * Creates a EAnd message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EAnd
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EAnd} EAnd
     */
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

    /**
     * Creates a plain object from a EAnd message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EAnd
     * @static
     * @param {EAnd} message EAnd
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
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

    /**
     * Converts this EAnd to JSON.
     * @function toJSON
     * @memberof EAnd
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EAnd.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EAnd;
})();

$root.EOr = (function() {

    /**
     * Properties of a EOr.
     * @exports IEOr
     * @interface IEOr
     * @property {IPar|null} [p1] EOr p1
     * @property {IPar|null} [p2] EOr p2
     */

    /**
     * Constructs a new EOr.
     * @exports EOr
     * @classdesc Represents a EOr.
     * @implements IEOr
     * @constructor
     * @param {IEOr=} [properties] Properties to set
     */
    function EOr(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * EOr p1.
     * @member {IPar|null|undefined} p1
     * @memberof EOr
     * @instance
     */
    EOr.prototype.p1 = null;

    /**
     * EOr p2.
     * @member {IPar|null|undefined} p2
     * @memberof EOr
     * @instance
     */
    EOr.prototype.p2 = null;

    /**
     * Creates a new EOr instance using the specified properties.
     * @function create
     * @memberof EOr
     * @static
     * @param {IEOr=} [properties] Properties to set
     * @returns {EOr} EOr instance
     */
    EOr.create = function create(properties) {
        return new EOr(properties);
    };

    /**
     * Encodes the specified EOr message. Does not implicitly {@link EOr.verify|verify} messages.
     * @function encode
     * @memberof EOr
     * @static
     * @param {IEOr} message EOr message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EOr.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.p1 != null && message.hasOwnProperty("p1"))
            $root.Par.encode(message.p1, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.p2 != null && message.hasOwnProperty("p2"))
            $root.Par.encode(message.p2, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified EOr message, length delimited. Does not implicitly {@link EOr.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EOr
     * @static
     * @param {IEOr} message EOr message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EOr.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a EOr message from the specified reader or buffer.
     * @function decode
     * @memberof EOr
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EOr} EOr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
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

    /**
     * Decodes a EOr message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EOr
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EOr} EOr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EOr.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a EOr message.
     * @function verify
     * @memberof EOr
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
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

    /**
     * Creates a EOr message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EOr
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EOr} EOr
     */
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

    /**
     * Creates a plain object from a EOr message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EOr
     * @static
     * @param {EOr} message EOr
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
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

    /**
     * Converts this EOr to JSON.
     * @function toJSON
     * @memberof EOr
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EOr.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EOr;
})();

$root.EMatches = (function() {

    /**
     * Properties of a EMatches.
     * @exports IEMatches
     * @interface IEMatches
     * @property {IPar|null} [target] EMatches target
     * @property {IPar|null} [pattern] EMatches pattern
     */

    /**
     * Constructs a new EMatches.
     * @exports EMatches
     * @classdesc Represents a EMatches.
     * @implements IEMatches
     * @constructor
     * @param {IEMatches=} [properties] Properties to set
     */
    function EMatches(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * EMatches target.
     * @member {IPar|null|undefined} target
     * @memberof EMatches
     * @instance
     */
    EMatches.prototype.target = null;

    /**
     * EMatches pattern.
     * @member {IPar|null|undefined} pattern
     * @memberof EMatches
     * @instance
     */
    EMatches.prototype.pattern = null;

    /**
     * Creates a new EMatches instance using the specified properties.
     * @function create
     * @memberof EMatches
     * @static
     * @param {IEMatches=} [properties] Properties to set
     * @returns {EMatches} EMatches instance
     */
    EMatches.create = function create(properties) {
        return new EMatches(properties);
    };

    /**
     * Encodes the specified EMatches message. Does not implicitly {@link EMatches.verify|verify} messages.
     * @function encode
     * @memberof EMatches
     * @static
     * @param {IEMatches} message EMatches message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EMatches.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.target != null && message.hasOwnProperty("target"))
            $root.Par.encode(message.target, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.pattern != null && message.hasOwnProperty("pattern"))
            $root.Par.encode(message.pattern, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified EMatches message, length delimited. Does not implicitly {@link EMatches.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EMatches
     * @static
     * @param {IEMatches} message EMatches message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EMatches.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a EMatches message from the specified reader or buffer.
     * @function decode
     * @memberof EMatches
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EMatches} EMatches
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
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

    /**
     * Decodes a EMatches message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EMatches
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EMatches} EMatches
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EMatches.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a EMatches message.
     * @function verify
     * @memberof EMatches
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
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

    /**
     * Creates a EMatches message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EMatches
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EMatches} EMatches
     */
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

    /**
     * Creates a plain object from a EMatches message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EMatches
     * @static
     * @param {EMatches} message EMatches
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
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

    /**
     * Converts this EMatches to JSON.
     * @function toJSON
     * @memberof EMatches
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EMatches.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EMatches;
})();

$root.EPercentPercent = (function() {

    /**
     * Properties of a EPercentPercent.
     * @exports IEPercentPercent
     * @interface IEPercentPercent
     * @property {IPar|null} [p1] EPercentPercent p1
     * @property {IPar|null} [p2] EPercentPercent p2
     */

    /**
     * Constructs a new EPercentPercent.
     * @exports EPercentPercent
     * @classdesc String interpolation
     * 
     * `"Hello, {name}" %% {"name": "Bob"}` denotes `"Hello, Bob"`
     * @implements IEPercentPercent
     * @constructor
     * @param {IEPercentPercent=} [properties] Properties to set
     */
    function EPercentPercent(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * EPercentPercent p1.
     * @member {IPar|null|undefined} p1
     * @memberof EPercentPercent
     * @instance
     */
    EPercentPercent.prototype.p1 = null;

    /**
     * EPercentPercent p2.
     * @member {IPar|null|undefined} p2
     * @memberof EPercentPercent
     * @instance
     */
    EPercentPercent.prototype.p2 = null;

    /**
     * Creates a new EPercentPercent instance using the specified properties.
     * @function create
     * @memberof EPercentPercent
     * @static
     * @param {IEPercentPercent=} [properties] Properties to set
     * @returns {EPercentPercent} EPercentPercent instance
     */
    EPercentPercent.create = function create(properties) {
        return new EPercentPercent(properties);
    };

    /**
     * Encodes the specified EPercentPercent message. Does not implicitly {@link EPercentPercent.verify|verify} messages.
     * @function encode
     * @memberof EPercentPercent
     * @static
     * @param {IEPercentPercent} message EPercentPercent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EPercentPercent.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.p1 != null && message.hasOwnProperty("p1"))
            $root.Par.encode(message.p1, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.p2 != null && message.hasOwnProperty("p2"))
            $root.Par.encode(message.p2, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified EPercentPercent message, length delimited. Does not implicitly {@link EPercentPercent.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EPercentPercent
     * @static
     * @param {IEPercentPercent} message EPercentPercent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EPercentPercent.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a EPercentPercent message from the specified reader or buffer.
     * @function decode
     * @memberof EPercentPercent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EPercentPercent} EPercentPercent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
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

    /**
     * Decodes a EPercentPercent message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EPercentPercent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EPercentPercent} EPercentPercent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EPercentPercent.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a EPercentPercent message.
     * @function verify
     * @memberof EPercentPercent
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
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

    /**
     * Creates a EPercentPercent message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EPercentPercent
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EPercentPercent} EPercentPercent
     */
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

    /**
     * Creates a plain object from a EPercentPercent message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EPercentPercent
     * @static
     * @param {EPercentPercent} message EPercentPercent
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
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

    /**
     * Converts this EPercentPercent to JSON.
     * @function toJSON
     * @memberof EPercentPercent
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EPercentPercent.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EPercentPercent;
})();

$root.EPlusPlus = (function() {

    /**
     * Properties of a EPlusPlus.
     * @exports IEPlusPlus
     * @interface IEPlusPlus
     * @property {IPar|null} [p1] EPlusPlus p1
     * @property {IPar|null} [p2] EPlusPlus p2
     */

    /**
     * Constructs a new EPlusPlus.
     * @exports EPlusPlus
     * @classdesc Represents a EPlusPlus.
     * @implements IEPlusPlus
     * @constructor
     * @param {IEPlusPlus=} [properties] Properties to set
     */
    function EPlusPlus(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * EPlusPlus p1.
     * @member {IPar|null|undefined} p1
     * @memberof EPlusPlus
     * @instance
     */
    EPlusPlus.prototype.p1 = null;

    /**
     * EPlusPlus p2.
     * @member {IPar|null|undefined} p2
     * @memberof EPlusPlus
     * @instance
     */
    EPlusPlus.prototype.p2 = null;

    /**
     * Creates a new EPlusPlus instance using the specified properties.
     * @function create
     * @memberof EPlusPlus
     * @static
     * @param {IEPlusPlus=} [properties] Properties to set
     * @returns {EPlusPlus} EPlusPlus instance
     */
    EPlusPlus.create = function create(properties) {
        return new EPlusPlus(properties);
    };

    /**
     * Encodes the specified EPlusPlus message. Does not implicitly {@link EPlusPlus.verify|verify} messages.
     * @function encode
     * @memberof EPlusPlus
     * @static
     * @param {IEPlusPlus} message EPlusPlus message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EPlusPlus.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.p1 != null && message.hasOwnProperty("p1"))
            $root.Par.encode(message.p1, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.p2 != null && message.hasOwnProperty("p2"))
            $root.Par.encode(message.p2, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified EPlusPlus message, length delimited. Does not implicitly {@link EPlusPlus.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EPlusPlus
     * @static
     * @param {IEPlusPlus} message EPlusPlus message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EPlusPlus.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a EPlusPlus message from the specified reader or buffer.
     * @function decode
     * @memberof EPlusPlus
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EPlusPlus} EPlusPlus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
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

    /**
     * Decodes a EPlusPlus message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EPlusPlus
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EPlusPlus} EPlusPlus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EPlusPlus.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a EPlusPlus message.
     * @function verify
     * @memberof EPlusPlus
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
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

    /**
     * Creates a EPlusPlus message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EPlusPlus
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EPlusPlus} EPlusPlus
     */
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

    /**
     * Creates a plain object from a EPlusPlus message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EPlusPlus
     * @static
     * @param {EPlusPlus} message EPlusPlus
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
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

    /**
     * Converts this EPlusPlus to JSON.
     * @function toJSON
     * @memberof EPlusPlus
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EPlusPlus.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EPlusPlus;
})();

$root.EMinusMinus = (function() {

    /**
     * Properties of a EMinusMinus.
     * @exports IEMinusMinus
     * @interface IEMinusMinus
     * @property {IPar|null} [p1] EMinusMinus p1
     * @property {IPar|null} [p2] EMinusMinus p2
     */

    /**
     * Constructs a new EMinusMinus.
     * @exports EMinusMinus
     * @classdesc Represents a EMinusMinus.
     * @implements IEMinusMinus
     * @constructor
     * @param {IEMinusMinus=} [properties] Properties to set
     */
    function EMinusMinus(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * EMinusMinus p1.
     * @member {IPar|null|undefined} p1
     * @memberof EMinusMinus
     * @instance
     */
    EMinusMinus.prototype.p1 = null;

    /**
     * EMinusMinus p2.
     * @member {IPar|null|undefined} p2
     * @memberof EMinusMinus
     * @instance
     */
    EMinusMinus.prototype.p2 = null;

    /**
     * Creates a new EMinusMinus instance using the specified properties.
     * @function create
     * @memberof EMinusMinus
     * @static
     * @param {IEMinusMinus=} [properties] Properties to set
     * @returns {EMinusMinus} EMinusMinus instance
     */
    EMinusMinus.create = function create(properties) {
        return new EMinusMinus(properties);
    };

    /**
     * Encodes the specified EMinusMinus message. Does not implicitly {@link EMinusMinus.verify|verify} messages.
     * @function encode
     * @memberof EMinusMinus
     * @static
     * @param {IEMinusMinus} message EMinusMinus message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EMinusMinus.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.p1 != null && message.hasOwnProperty("p1"))
            $root.Par.encode(message.p1, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.p2 != null && message.hasOwnProperty("p2"))
            $root.Par.encode(message.p2, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified EMinusMinus message, length delimited. Does not implicitly {@link EMinusMinus.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EMinusMinus
     * @static
     * @param {IEMinusMinus} message EMinusMinus message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EMinusMinus.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a EMinusMinus message from the specified reader or buffer.
     * @function decode
     * @memberof EMinusMinus
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EMinusMinus} EMinusMinus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
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

    /**
     * Decodes a EMinusMinus message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EMinusMinus
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EMinusMinus} EMinusMinus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EMinusMinus.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a EMinusMinus message.
     * @function verify
     * @memberof EMinusMinus
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
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

    /**
     * Creates a EMinusMinus message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EMinusMinus
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EMinusMinus} EMinusMinus
     */
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

    /**
     * Creates a plain object from a EMinusMinus message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EMinusMinus
     * @static
     * @param {EMinusMinus} message EMinusMinus
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
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

    /**
     * Converts this EMinusMinus to JSON.
     * @function toJSON
     * @memberof EMinusMinus
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EMinusMinus.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EMinusMinus;
})();

$root.Connective = (function() {

    /**
     * Properties of a Connective.
     * @exports IConnective
     * @interface IConnective
     * @property {IConnectiveBody|null} [conn_and_body] Connective conn_and_body
     * @property {IConnectiveBody|null} [conn_or_body] Connective conn_or_body
     * @property {IPar|null} [conn_not_body] Connective conn_not_body
     * @property {IVarRef|null} [var_ref_body] Connective var_ref_body
     * @property {boolean|null} [conn_bool] Connective conn_bool
     * @property {boolean|null} [conn_int] Connective conn_int
     * @property {boolean|null} [conn_string] Connective conn_string
     * @property {boolean|null} [conn_uri] Connective conn_uri
     * @property {boolean|null} [conn_byte_array] Connective conn_byte_array
     */

    /**
     * Constructs a new Connective.
     * @exports Connective
     * @classdesc Represents a Connective.
     * @implements IConnective
     * @constructor
     * @param {IConnective=} [properties] Properties to set
     */
    function Connective(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Connective conn_and_body.
     * @member {IConnectiveBody|null|undefined} conn_and_body
     * @memberof Connective
     * @instance
     */
    Connective.prototype.conn_and_body = null;

    /**
     * Connective conn_or_body.
     * @member {IConnectiveBody|null|undefined} conn_or_body
     * @memberof Connective
     * @instance
     */
    Connective.prototype.conn_or_body = null;

    /**
     * Connective conn_not_body.
     * @member {IPar|null|undefined} conn_not_body
     * @memberof Connective
     * @instance
     */
    Connective.prototype.conn_not_body = null;

    /**
     * Connective var_ref_body.
     * @member {IVarRef|null|undefined} var_ref_body
     * @memberof Connective
     * @instance
     */
    Connective.prototype.var_ref_body = null;

    /**
     * Connective conn_bool.
     * @member {boolean} conn_bool
     * @memberof Connective
     * @instance
     */
    Connective.prototype.conn_bool = false;

    /**
     * Connective conn_int.
     * @member {boolean} conn_int
     * @memberof Connective
     * @instance
     */
    Connective.prototype.conn_int = false;

    /**
     * Connective conn_string.
     * @member {boolean} conn_string
     * @memberof Connective
     * @instance
     */
    Connective.prototype.conn_string = false;

    /**
     * Connective conn_uri.
     * @member {boolean} conn_uri
     * @memberof Connective
     * @instance
     */
    Connective.prototype.conn_uri = false;

    /**
     * Connective conn_byte_array.
     * @member {boolean} conn_byte_array
     * @memberof Connective
     * @instance
     */
    Connective.prototype.conn_byte_array = false;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * Connective connective_instance.
     * @member {"conn_and_body"|"conn_or_body"|"conn_not_body"|"var_ref_body"|"conn_bool"|"conn_int"|"conn_string"|"conn_uri"|"conn_byte_array"|undefined} connective_instance
     * @memberof Connective
     * @instance
     */
    Object.defineProperty(Connective.prototype, "connective_instance", {
        get: $util.oneOfGetter($oneOfFields = ["conn_and_body", "conn_or_body", "conn_not_body", "var_ref_body", "conn_bool", "conn_int", "conn_string", "conn_uri", "conn_byte_array"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new Connective instance using the specified properties.
     * @function create
     * @memberof Connective
     * @static
     * @param {IConnective=} [properties] Properties to set
     * @returns {Connective} Connective instance
     */
    Connective.create = function create(properties) {
        return new Connective(properties);
    };

    /**
     * Encodes the specified Connective message. Does not implicitly {@link Connective.verify|verify} messages.
     * @function encode
     * @memberof Connective
     * @static
     * @param {IConnective} message Connective message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Connective.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.conn_and_body != null && message.hasOwnProperty("conn_and_body"))
            $root.ConnectiveBody.encode(message.conn_and_body, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.conn_or_body != null && message.hasOwnProperty("conn_or_body"))
            $root.ConnectiveBody.encode(message.conn_or_body, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.conn_not_body != null && message.hasOwnProperty("conn_not_body"))
            $root.Par.encode(message.conn_not_body, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.var_ref_body != null && message.hasOwnProperty("var_ref_body"))
            $root.VarRef.encode(message.var_ref_body, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.conn_bool != null && message.hasOwnProperty("conn_bool"))
            writer.uint32(/* id 5, wireType 0 =*/40).bool(message.conn_bool);
        if (message.conn_int != null && message.hasOwnProperty("conn_int"))
            writer.uint32(/* id 6, wireType 0 =*/48).bool(message.conn_int);
        if (message.conn_string != null && message.hasOwnProperty("conn_string"))
            writer.uint32(/* id 7, wireType 0 =*/56).bool(message.conn_string);
        if (message.conn_uri != null && message.hasOwnProperty("conn_uri"))
            writer.uint32(/* id 8, wireType 0 =*/64).bool(message.conn_uri);
        if (message.conn_byte_array != null && message.hasOwnProperty("conn_byte_array"))
            writer.uint32(/* id 9, wireType 0 =*/72).bool(message.conn_byte_array);
        return writer;
    };

    /**
     * Encodes the specified Connective message, length delimited. Does not implicitly {@link Connective.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Connective
     * @static
     * @param {IConnective} message Connective message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Connective.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Connective message from the specified reader or buffer.
     * @function decode
     * @memberof Connective
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Connective} Connective
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
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

    /**
     * Decodes a Connective message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Connective
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Connective} Connective
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Connective.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Connective message.
     * @function verify
     * @memberof Connective
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
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

    /**
     * Creates a Connective message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Connective
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Connective} Connective
     */
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

    /**
     * Creates a plain object from a Connective message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Connective
     * @static
     * @param {Connective} message Connective
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
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

    /**
     * Converts this Connective to JSON.
     * @function toJSON
     * @memberof Connective
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Connective.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Connective;
})();

$root.VarRef = (function() {

    /**
     * Properties of a VarRef.
     * @exports IVarRef
     * @interface IVarRef
     * @property {number|null} [index] VarRef index
     * @property {number|null} [depth] VarRef depth
     */

    /**
     * Constructs a new VarRef.
     * @exports VarRef
     * @classdesc Represents a VarRef.
     * @implements IVarRef
     * @constructor
     * @param {IVarRef=} [properties] Properties to set
     */
    function VarRef(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * VarRef index.
     * @member {number} index
     * @memberof VarRef
     * @instance
     */
    VarRef.prototype.index = 0;

    /**
     * VarRef depth.
     * @member {number} depth
     * @memberof VarRef
     * @instance
     */
    VarRef.prototype.depth = 0;

    /**
     * Creates a new VarRef instance using the specified properties.
     * @function create
     * @memberof VarRef
     * @static
     * @param {IVarRef=} [properties] Properties to set
     * @returns {VarRef} VarRef instance
     */
    VarRef.create = function create(properties) {
        return new VarRef(properties);
    };

    /**
     * Encodes the specified VarRef message. Does not implicitly {@link VarRef.verify|verify} messages.
     * @function encode
     * @memberof VarRef
     * @static
     * @param {IVarRef} message VarRef message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    VarRef.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.index != null && message.hasOwnProperty("index"))
            writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.index);
        if (message.depth != null && message.hasOwnProperty("depth"))
            writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.depth);
        return writer;
    };

    /**
     * Encodes the specified VarRef message, length delimited. Does not implicitly {@link VarRef.verify|verify} messages.
     * @function encodeDelimited
     * @memberof VarRef
     * @static
     * @param {IVarRef} message VarRef message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    VarRef.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a VarRef message from the specified reader or buffer.
     * @function decode
     * @memberof VarRef
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {VarRef} VarRef
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
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

    /**
     * Decodes a VarRef message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof VarRef
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {VarRef} VarRef
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    VarRef.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a VarRef message.
     * @function verify
     * @memberof VarRef
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
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

    /**
     * Creates a VarRef message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof VarRef
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {VarRef} VarRef
     */
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

    /**
     * Creates a plain object from a VarRef message. Also converts values to other types if specified.
     * @function toObject
     * @memberof VarRef
     * @static
     * @param {VarRef} message VarRef
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
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

    /**
     * Converts this VarRef to JSON.
     * @function toJSON
     * @memberof VarRef
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    VarRef.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return VarRef;
})();

$root.ConnectiveBody = (function() {

    /**
     * Properties of a ConnectiveBody.
     * @exports IConnectiveBody
     * @interface IConnectiveBody
     * @property {Array.<IPar>|null} [ps] ConnectiveBody ps
     */

    /**
     * Constructs a new ConnectiveBody.
     * @exports ConnectiveBody
     * @classdesc Represents a ConnectiveBody.
     * @implements IConnectiveBody
     * @constructor
     * @param {IConnectiveBody=} [properties] Properties to set
     */
    function ConnectiveBody(properties) {
        this.ps = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ConnectiveBody ps.
     * @member {Array.<IPar>} ps
     * @memberof ConnectiveBody
     * @instance
     */
    ConnectiveBody.prototype.ps = $util.emptyArray;

    /**
     * Creates a new ConnectiveBody instance using the specified properties.
     * @function create
     * @memberof ConnectiveBody
     * @static
     * @param {IConnectiveBody=} [properties] Properties to set
     * @returns {ConnectiveBody} ConnectiveBody instance
     */
    ConnectiveBody.create = function create(properties) {
        return new ConnectiveBody(properties);
    };

    /**
     * Encodes the specified ConnectiveBody message. Does not implicitly {@link ConnectiveBody.verify|verify} messages.
     * @function encode
     * @memberof ConnectiveBody
     * @static
     * @param {IConnectiveBody} message ConnectiveBody message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ConnectiveBody.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.ps != null && message.ps.length)
            for (var i = 0; i < message.ps.length; ++i)
                $root.Par.encode(message.ps[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ConnectiveBody message, length delimited. Does not implicitly {@link ConnectiveBody.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ConnectiveBody
     * @static
     * @param {IConnectiveBody} message ConnectiveBody message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ConnectiveBody.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ConnectiveBody message from the specified reader or buffer.
     * @function decode
     * @memberof ConnectiveBody
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ConnectiveBody} ConnectiveBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
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

    /**
     * Decodes a ConnectiveBody message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ConnectiveBody
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ConnectiveBody} ConnectiveBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ConnectiveBody.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ConnectiveBody message.
     * @function verify
     * @memberof ConnectiveBody
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
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

    /**
     * Creates a ConnectiveBody message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ConnectiveBody
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ConnectiveBody} ConnectiveBody
     */
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

    /**
     * Creates a plain object from a ConnectiveBody message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ConnectiveBody
     * @static
     * @param {ConnectiveBody} message ConnectiveBody
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
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

    /**
     * Converts this ConnectiveBody to JSON.
     * @function toJSON
     * @memberof ConnectiveBody
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ConnectiveBody.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ConnectiveBody;
})();

$root.DeployId = (function() {

    /**
     * Properties of a DeployId.
     * @exports IDeployId
     * @interface IDeployId
     * @property {Uint8Array|null} [sig] DeployId sig
     */

    /**
     * Constructs a new DeployId.
     * @exports DeployId
     * @classdesc Represents a DeployId.
     * @implements IDeployId
     * @constructor
     * @param {IDeployId=} [properties] Properties to set
     */
    function DeployId(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * DeployId sig.
     * @member {Uint8Array} sig
     * @memberof DeployId
     * @instance
     */
    DeployId.prototype.sig = $util.newBuffer([]);

    /**
     * Creates a new DeployId instance using the specified properties.
     * @function create
     * @memberof DeployId
     * @static
     * @param {IDeployId=} [properties] Properties to set
     * @returns {DeployId} DeployId instance
     */
    DeployId.create = function create(properties) {
        return new DeployId(properties);
    };

    /**
     * Encodes the specified DeployId message. Does not implicitly {@link DeployId.verify|verify} messages.
     * @function encode
     * @memberof DeployId
     * @static
     * @param {IDeployId} message DeployId message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DeployId.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.sig != null && message.hasOwnProperty("sig"))
            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.sig);
        return writer;
    };

    /**
     * Encodes the specified DeployId message, length delimited. Does not implicitly {@link DeployId.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DeployId
     * @static
     * @param {IDeployId} message DeployId message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DeployId.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DeployId message from the specified reader or buffer.
     * @function decode
     * @memberof DeployId
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DeployId} DeployId
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
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

    /**
     * Decodes a DeployId message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DeployId
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DeployId} DeployId
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DeployId.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DeployId message.
     * @function verify
     * @memberof DeployId
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DeployId.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.sig != null && message.hasOwnProperty("sig"))
            if (!(message.sig && typeof message.sig.length === "number" || $util.isString(message.sig)))
                return "sig: buffer expected";
        return null;
    };

    /**
     * Creates a DeployId message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DeployId
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DeployId} DeployId
     */
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

    /**
     * Creates a plain object from a DeployId message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DeployId
     * @static
     * @param {DeployId} message DeployId
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
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

    /**
     * Converts this DeployId to JSON.
     * @function toJSON
     * @memberof DeployId
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DeployId.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return DeployId;
})();

$root.DeployerId = (function() {

    /**
     * Properties of a DeployerId.
     * @exports IDeployerId
     * @interface IDeployerId
     * @property {Uint8Array|null} [publicKey] DeployerId publicKey
     */

    /**
     * Constructs a new DeployerId.
     * @exports DeployerId
     * @classdesc Represents a DeployerId.
     * @implements IDeployerId
     * @constructor
     * @param {IDeployerId=} [properties] Properties to set
     */
    function DeployerId(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * DeployerId publicKey.
     * @member {Uint8Array} publicKey
     * @memberof DeployerId
     * @instance
     */
    DeployerId.prototype.publicKey = $util.newBuffer([]);

    /**
     * Creates a new DeployerId instance using the specified properties.
     * @function create
     * @memberof DeployerId
     * @static
     * @param {IDeployerId=} [properties] Properties to set
     * @returns {DeployerId} DeployerId instance
     */
    DeployerId.create = function create(properties) {
        return new DeployerId(properties);
    };

    /**
     * Encodes the specified DeployerId message. Does not implicitly {@link DeployerId.verify|verify} messages.
     * @function encode
     * @memberof DeployerId
     * @static
     * @param {IDeployerId} message DeployerId message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DeployerId.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.publicKey != null && message.hasOwnProperty("publicKey"))
            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.publicKey);
        return writer;
    };

    /**
     * Encodes the specified DeployerId message, length delimited. Does not implicitly {@link DeployerId.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DeployerId
     * @static
     * @param {IDeployerId} message DeployerId message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DeployerId.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DeployerId message from the specified reader or buffer.
     * @function decode
     * @memberof DeployerId
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DeployerId} DeployerId
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
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

    /**
     * Decodes a DeployerId message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DeployerId
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DeployerId} DeployerId
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DeployerId.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DeployerId message.
     * @function verify
     * @memberof DeployerId
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DeployerId.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.publicKey != null && message.hasOwnProperty("publicKey"))
            if (!(message.publicKey && typeof message.publicKey.length === "number" || $util.isString(message.publicKey)))
                return "publicKey: buffer expected";
        return null;
    };

    /**
     * Creates a DeployerId message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DeployerId
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DeployerId} DeployerId
     */
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

    /**
     * Creates a plain object from a DeployerId message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DeployerId
     * @static
     * @param {DeployerId} message DeployerId
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
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

    /**
     * Converts this DeployerId to JSON.
     * @function toJSON
     * @memberof DeployerId
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DeployerId.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return DeployerId;
})();

$root.GUnforgeable = (function() {

    /**
     * Properties of a GUnforgeable.
     * @exports IGUnforgeable
     * @interface IGUnforgeable
     * @property {IGPrivate|null} [g_private_body] GUnforgeable g_private_body
     * @property {IGDeployId|null} [g_deploy_id_body] GUnforgeable g_deploy_id_body
     * @property {IGDeployerId|null} [g_deployer_id_body] GUnforgeable g_deployer_id_body
     */

    /**
     * Constructs a new GUnforgeable.
     * @exports GUnforgeable
     * @classdesc Represents a GUnforgeable.
     * @implements IGUnforgeable
     * @constructor
     * @param {IGUnforgeable=} [properties] Properties to set
     */
    function GUnforgeable(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GUnforgeable g_private_body.
     * @member {IGPrivate|null|undefined} g_private_body
     * @memberof GUnforgeable
     * @instance
     */
    GUnforgeable.prototype.g_private_body = null;

    /**
     * GUnforgeable g_deploy_id_body.
     * @member {IGDeployId|null|undefined} g_deploy_id_body
     * @memberof GUnforgeable
     * @instance
     */
    GUnforgeable.prototype.g_deploy_id_body = null;

    /**
     * GUnforgeable g_deployer_id_body.
     * @member {IGDeployerId|null|undefined} g_deployer_id_body
     * @memberof GUnforgeable
     * @instance
     */
    GUnforgeable.prototype.g_deployer_id_body = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * GUnforgeable unf_instance.
     * @member {"g_private_body"|"g_deploy_id_body"|"g_deployer_id_body"|undefined} unf_instance
     * @memberof GUnforgeable
     * @instance
     */
    Object.defineProperty(GUnforgeable.prototype, "unf_instance", {
        get: $util.oneOfGetter($oneOfFields = ["g_private_body", "g_deploy_id_body", "g_deployer_id_body"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new GUnforgeable instance using the specified properties.
     * @function create
     * @memberof GUnforgeable
     * @static
     * @param {IGUnforgeable=} [properties] Properties to set
     * @returns {GUnforgeable} GUnforgeable instance
     */
    GUnforgeable.create = function create(properties) {
        return new GUnforgeable(properties);
    };

    /**
     * Encodes the specified GUnforgeable message. Does not implicitly {@link GUnforgeable.verify|verify} messages.
     * @function encode
     * @memberof GUnforgeable
     * @static
     * @param {IGUnforgeable} message GUnforgeable message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GUnforgeable.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.g_private_body != null && message.hasOwnProperty("g_private_body"))
            $root.GPrivate.encode(message.g_private_body, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.g_deploy_id_body != null && message.hasOwnProperty("g_deploy_id_body"))
            $root.GDeployId.encode(message.g_deploy_id_body, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.g_deployer_id_body != null && message.hasOwnProperty("g_deployer_id_body"))
            $root.GDeployerId.encode(message.g_deployer_id_body, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified GUnforgeable message, length delimited. Does not implicitly {@link GUnforgeable.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GUnforgeable
     * @static
     * @param {IGUnforgeable} message GUnforgeable message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GUnforgeable.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GUnforgeable message from the specified reader or buffer.
     * @function decode
     * @memberof GUnforgeable
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GUnforgeable} GUnforgeable
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
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

    /**
     * Decodes a GUnforgeable message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GUnforgeable
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GUnforgeable} GUnforgeable
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GUnforgeable.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GUnforgeable message.
     * @function verify
     * @memberof GUnforgeable
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
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

    /**
     * Creates a GUnforgeable message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GUnforgeable
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GUnforgeable} GUnforgeable
     */
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

    /**
     * Creates a plain object from a GUnforgeable message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GUnforgeable
     * @static
     * @param {GUnforgeable} message GUnforgeable
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
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

    /**
     * Converts this GUnforgeable to JSON.
     * @function toJSON
     * @memberof GUnforgeable
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GUnforgeable.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GUnforgeable;
})();

$root.GPrivate = (function() {

    /**
     * Properties of a GPrivate.
     * @exports IGPrivate
     * @interface IGPrivate
     * @property {Uint8Array|null} [id] GPrivate id
     */

    /**
     * Constructs a new GPrivate.
     * @exports GPrivate
     * @classdesc Represents a GPrivate.
     * @implements IGPrivate
     * @constructor
     * @param {IGPrivate=} [properties] Properties to set
     */
    function GPrivate(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GPrivate id.
     * @member {Uint8Array} id
     * @memberof GPrivate
     * @instance
     */
    GPrivate.prototype.id = $util.newBuffer([]);

    /**
     * Creates a new GPrivate instance using the specified properties.
     * @function create
     * @memberof GPrivate
     * @static
     * @param {IGPrivate=} [properties] Properties to set
     * @returns {GPrivate} GPrivate instance
     */
    GPrivate.create = function create(properties) {
        return new GPrivate(properties);
    };

    /**
     * Encodes the specified GPrivate message. Does not implicitly {@link GPrivate.verify|verify} messages.
     * @function encode
     * @memberof GPrivate
     * @static
     * @param {IGPrivate} message GPrivate message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GPrivate.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.id);
        return writer;
    };

    /**
     * Encodes the specified GPrivate message, length delimited. Does not implicitly {@link GPrivate.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GPrivate
     * @static
     * @param {IGPrivate} message GPrivate message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GPrivate.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GPrivate message from the specified reader or buffer.
     * @function decode
     * @memberof GPrivate
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GPrivate} GPrivate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
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

    /**
     * Decodes a GPrivate message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GPrivate
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GPrivate} GPrivate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GPrivate.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GPrivate message.
     * @function verify
     * @memberof GPrivate
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GPrivate.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!(message.id && typeof message.id.length === "number" || $util.isString(message.id)))
                return "id: buffer expected";
        return null;
    };

    /**
     * Creates a GPrivate message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GPrivate
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GPrivate} GPrivate
     */
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

    /**
     * Creates a plain object from a GPrivate message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GPrivate
     * @static
     * @param {GPrivate} message GPrivate
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
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

    /**
     * Converts this GPrivate to JSON.
     * @function toJSON
     * @memberof GPrivate
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GPrivate.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GPrivate;
})();

$root.GDeployId = (function() {

    /**
     * Properties of a GDeployId.
     * @exports IGDeployId
     * @interface IGDeployId
     * @property {Uint8Array|null} [sig] GDeployId sig
     */

    /**
     * Constructs a new GDeployId.
     * @exports GDeployId
     * @classdesc Represents a GDeployId.
     * @implements IGDeployId
     * @constructor
     * @param {IGDeployId=} [properties] Properties to set
     */
    function GDeployId(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GDeployId sig.
     * @member {Uint8Array} sig
     * @memberof GDeployId
     * @instance
     */
    GDeployId.prototype.sig = $util.newBuffer([]);

    /**
     * Creates a new GDeployId instance using the specified properties.
     * @function create
     * @memberof GDeployId
     * @static
     * @param {IGDeployId=} [properties] Properties to set
     * @returns {GDeployId} GDeployId instance
     */
    GDeployId.create = function create(properties) {
        return new GDeployId(properties);
    };

    /**
     * Encodes the specified GDeployId message. Does not implicitly {@link GDeployId.verify|verify} messages.
     * @function encode
     * @memberof GDeployId
     * @static
     * @param {IGDeployId} message GDeployId message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GDeployId.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.sig != null && message.hasOwnProperty("sig"))
            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.sig);
        return writer;
    };

    /**
     * Encodes the specified GDeployId message, length delimited. Does not implicitly {@link GDeployId.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GDeployId
     * @static
     * @param {IGDeployId} message GDeployId message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GDeployId.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GDeployId message from the specified reader or buffer.
     * @function decode
     * @memberof GDeployId
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GDeployId} GDeployId
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
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

    /**
     * Decodes a GDeployId message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GDeployId
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GDeployId} GDeployId
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GDeployId.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GDeployId message.
     * @function verify
     * @memberof GDeployId
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GDeployId.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.sig != null && message.hasOwnProperty("sig"))
            if (!(message.sig && typeof message.sig.length === "number" || $util.isString(message.sig)))
                return "sig: buffer expected";
        return null;
    };

    /**
     * Creates a GDeployId message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GDeployId
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GDeployId} GDeployId
     */
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

    /**
     * Creates a plain object from a GDeployId message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GDeployId
     * @static
     * @param {GDeployId} message GDeployId
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
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

    /**
     * Converts this GDeployId to JSON.
     * @function toJSON
     * @memberof GDeployId
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GDeployId.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GDeployId;
})();

$root.GDeployerId = (function() {

    /**
     * Properties of a GDeployerId.
     * @exports IGDeployerId
     * @interface IGDeployerId
     * @property {Uint8Array|null} [publicKey] GDeployerId publicKey
     */

    /**
     * Constructs a new GDeployerId.
     * @exports GDeployerId
     * @classdesc Represents a GDeployerId.
     * @implements IGDeployerId
     * @constructor
     * @param {IGDeployerId=} [properties] Properties to set
     */
    function GDeployerId(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GDeployerId publicKey.
     * @member {Uint8Array} publicKey
     * @memberof GDeployerId
     * @instance
     */
    GDeployerId.prototype.publicKey = $util.newBuffer([]);

    /**
     * Creates a new GDeployerId instance using the specified properties.
     * @function create
     * @memberof GDeployerId
     * @static
     * @param {IGDeployerId=} [properties] Properties to set
     * @returns {GDeployerId} GDeployerId instance
     */
    GDeployerId.create = function create(properties) {
        return new GDeployerId(properties);
    };

    /**
     * Encodes the specified GDeployerId message. Does not implicitly {@link GDeployerId.verify|verify} messages.
     * @function encode
     * @memberof GDeployerId
     * @static
     * @param {IGDeployerId} message GDeployerId message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GDeployerId.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.publicKey != null && message.hasOwnProperty("publicKey"))
            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.publicKey);
        return writer;
    };

    /**
     * Encodes the specified GDeployerId message, length delimited. Does not implicitly {@link GDeployerId.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GDeployerId
     * @static
     * @param {IGDeployerId} message GDeployerId message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GDeployerId.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GDeployerId message from the specified reader or buffer.
     * @function decode
     * @memberof GDeployerId
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GDeployerId} GDeployerId
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
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

    /**
     * Decodes a GDeployerId message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GDeployerId
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GDeployerId} GDeployerId
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GDeployerId.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GDeployerId message.
     * @function verify
     * @memberof GDeployerId
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GDeployerId.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.publicKey != null && message.hasOwnProperty("publicKey"))
            if (!(message.publicKey && typeof message.publicKey.length === "number" || $util.isString(message.publicKey)))
                return "publicKey: buffer expected";
        return null;
    };

    /**
     * Creates a GDeployerId message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GDeployerId
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GDeployerId} GDeployerId
     */
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

    /**
     * Creates a plain object from a GDeployerId message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GDeployerId
     * @static
     * @param {GDeployerId} message GDeployerId
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
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

    /**
     * Converts this GDeployerId to JSON.
     * @function toJSON
     * @memberof GDeployerId
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GDeployerId.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GDeployerId;
})();

module.exports = $root;
