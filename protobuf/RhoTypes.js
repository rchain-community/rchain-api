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
     * @property {Array.<IGPrivate>|null} [ids] Par ids
     * @property {Array.<IBundle>|null} [bundles] Par bundles
     * @property {Array.<IConnective>|null} [connectives] Par connectives
     * @property {Uint8Array|null} [locallyFree] Par locallyFree
     * @property {boolean|null} [connective_used] Par connective_used
     */

    /**
     * Constructs a new Par.
     * @exports Par
     * @classdesc Represents a Par.
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
        this.ids = [];
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
     * Par ids.
     * @member {Array.<IGPrivate>} ids
     * @memberof Par
     * @instance
     */
    Par.prototype.ids = $util.emptyArray;

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
        if (message.ids != null && message.ids.length)
            for (var i = 0; i < message.ids.length; ++i)
                $root.GPrivate.encode(message.ids[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
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
                if (!(message.ids && message.ids.length))
                    message.ids = [];
                message.ids.push($root.GPrivate.decode(reader, reader.uint32()));
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
        if (message.ids != null && message.hasOwnProperty("ids")) {
            if (!Array.isArray(message.ids))
                return "ids: array expected";
            for (var i = 0; i < message.ids.length; ++i) {
                var error = $root.GPrivate.verify(message.ids[i]);
                if (error)
                    return "ids." + error;
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
        if (object.ids) {
            if (!Array.isArray(object.ids))
                throw TypeError(".Par.ids: array expected");
            message.ids = [];
            for (var i = 0; i < object.ids.length; ++i) {
                if (typeof object.ids[i] !== "object")
                    throw TypeError(".Par.ids: object expected");
                message.ids[i] = $root.GPrivate.fromObject(object.ids[i]);
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
            object.ids = [];
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
        if (message.ids && message.ids.length) {
            object.ids = [];
            for (var j = 0; j < message.ids.length; ++j)
                object.ids[j] = $root.GPrivate.toObject(message.ids[j], options);
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
     * @classdesc Represents a TaggedContinuation.
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
     * @classdesc Represents a ParWithRandom.
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

$root.Channel = (function() {

    /**
     * Properties of a Channel.
     * @exports IChannel
     * @interface IChannel
     * @property {IPar|null} [quote] Channel quote
     * @property {IVar|null} [chanVar] Channel chanVar
     */

    /**
     * Constructs a new Channel.
     * @exports Channel
     * @classdesc Represents a Channel.
     * @implements IChannel
     * @constructor
     * @param {IChannel=} [properties] Properties to set
     */
    function Channel(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Channel quote.
     * @member {IPar|null|undefined} quote
     * @memberof Channel
     * @instance
     */
    Channel.prototype.quote = null;

    /**
     * Channel chanVar.
     * @member {IVar|null|undefined} chanVar
     * @memberof Channel
     * @instance
     */
    Channel.prototype.chanVar = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * Channel channel_instance.
     * @member {"quote"|"chanVar"|undefined} channel_instance
     * @memberof Channel
     * @instance
     */
    Object.defineProperty(Channel.prototype, "channel_instance", {
        get: $util.oneOfGetter($oneOfFields = ["quote", "chanVar"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new Channel instance using the specified properties.
     * @function create
     * @memberof Channel
     * @static
     * @param {IChannel=} [properties] Properties to set
     * @returns {Channel} Channel instance
     */
    Channel.create = function create(properties) {
        return new Channel(properties);
    };

    /**
     * Encodes the specified Channel message. Does not implicitly {@link Channel.verify|verify} messages.
     * @function encode
     * @memberof Channel
     * @static
     * @param {IChannel} message Channel message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Channel.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.quote != null && message.hasOwnProperty("quote"))
            $root.Par.encode(message.quote, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.chanVar != null && message.hasOwnProperty("chanVar"))
            $root.Var.encode(message.chanVar, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Channel message, length delimited. Does not implicitly {@link Channel.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Channel
     * @static
     * @param {IChannel} message Channel message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Channel.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Channel message from the specified reader or buffer.
     * @function decode
     * @memberof Channel
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Channel} Channel
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Channel.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Channel();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.quote = $root.Par.decode(reader, reader.uint32());
                break;
            case 2:
                message.chanVar = $root.Var.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Channel message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Channel
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Channel} Channel
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Channel.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Channel message.
     * @function verify
     * @memberof Channel
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Channel.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        var properties = {};
        if (message.quote != null && message.hasOwnProperty("quote")) {
            properties.channel_instance = 1;
            {
                var error = $root.Par.verify(message.quote);
                if (error)
                    return "quote." + error;
            }
        }
        if (message.chanVar != null && message.hasOwnProperty("chanVar")) {
            if (properties.channel_instance === 1)
                return "channel_instance: multiple values";
            properties.channel_instance = 1;
            {
                var error = $root.Var.verify(message.chanVar);
                if (error)
                    return "chanVar." + error;
            }
        }
        return null;
    };

    /**
     * Creates a Channel message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Channel
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Channel} Channel
     */
    Channel.fromObject = function fromObject(object) {
        if (object instanceof $root.Channel)
            return object;
        var message = new $root.Channel();
        if (object.quote != null) {
            if (typeof object.quote !== "object")
                throw TypeError(".Channel.quote: object expected");
            message.quote = $root.Par.fromObject(object.quote);
        }
        if (object.chanVar != null) {
            if (typeof object.chanVar !== "object")
                throw TypeError(".Channel.chanVar: object expected");
            message.chanVar = $root.Var.fromObject(object.chanVar);
        }
        return message;
    };

    /**
     * Creates a plain object from a Channel message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Channel
     * @static
     * @param {Channel} message Channel
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Channel.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (message.quote != null && message.hasOwnProperty("quote")) {
            object.quote = $root.Par.toObject(message.quote, options);
            if (options.oneofs)
                object.channel_instance = "quote";
        }
        if (message.chanVar != null && message.hasOwnProperty("chanVar")) {
            object.chanVar = $root.Var.toObject(message.chanVar, options);
            if (options.oneofs)
                object.channel_instance = "chanVar";
        }
        return object;
    };

    /**
     * Converts this Channel to JSON.
     * @function toJSON
     * @memberof Channel
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Channel.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Channel;
})();

$root.PCost = (function() {

    /**
     * Properties of a PCost.
     * @exports IPCost
     * @interface IPCost
     * @property {number|Long|null} [cost] PCost cost
     * @property {number|null} [iterations] PCost iterations
     */

    /**
     * Constructs a new PCost.
     * @exports PCost
     * @classdesc Represents a PCost.
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
     * PCost iterations.
     * @member {number} iterations
     * @memberof PCost
     * @instance
     */
    PCost.prototype.iterations = 0;

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
        if (message.iterations != null && message.hasOwnProperty("iterations"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.iterations);
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
            case 2:
                message.iterations = reader.int32();
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
        if (message.iterations != null && message.hasOwnProperty("iterations"))
            if (!$util.isInteger(message.iterations))
                return "iterations: integer expected";
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
        if (object.iterations != null)
            message.iterations = object.iterations | 0;
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
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.cost = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.cost = options.longs === String ? "0" : 0;
            object.iterations = 0;
        }
        if (message.cost != null && message.hasOwnProperty("cost"))
            if (typeof message.cost === "number")
                object.cost = options.longs === String ? String(message.cost) : message.cost;
            else
                object.cost = options.longs === String ? $util.Long.prototype.toString.call(message.cost) : options.longs === Number ? new $util.LongBits(message.cost.low >>> 0, message.cost.high >>> 0).toNumber(true) : message.cost;
        if (message.iterations != null && message.hasOwnProperty("iterations"))
            object.iterations = message.iterations;
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

$root.ListChannelWithRandom = (function() {

    /**
     * Properties of a ListChannelWithRandom.
     * @exports IListChannelWithRandom
     * @interface IListChannelWithRandom
     * @property {Array.<IChannel>|null} [channels] ListChannelWithRandom channels
     * @property {Uint8Array|null} [randomState] ListChannelWithRandom randomState
     * @property {IPCost|null} [cost] ListChannelWithRandom cost
     */

    /**
     * Constructs a new ListChannelWithRandom.
     * @exports ListChannelWithRandom
     * @classdesc Represents a ListChannelWithRandom.
     * @implements IListChannelWithRandom
     * @constructor
     * @param {IListChannelWithRandom=} [properties] Properties to set
     */
    function ListChannelWithRandom(properties) {
        this.channels = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ListChannelWithRandom channels.
     * @member {Array.<IChannel>} channels
     * @memberof ListChannelWithRandom
     * @instance
     */
    ListChannelWithRandom.prototype.channels = $util.emptyArray;

    /**
     * ListChannelWithRandom randomState.
     * @member {Uint8Array} randomState
     * @memberof ListChannelWithRandom
     * @instance
     */
    ListChannelWithRandom.prototype.randomState = $util.newBuffer([]);

    /**
     * ListChannelWithRandom cost.
     * @member {IPCost|null|undefined} cost
     * @memberof ListChannelWithRandom
     * @instance
     */
    ListChannelWithRandom.prototype.cost = null;

    /**
     * Creates a new ListChannelWithRandom instance using the specified properties.
     * @function create
     * @memberof ListChannelWithRandom
     * @static
     * @param {IListChannelWithRandom=} [properties] Properties to set
     * @returns {ListChannelWithRandom} ListChannelWithRandom instance
     */
    ListChannelWithRandom.create = function create(properties) {
        return new ListChannelWithRandom(properties);
    };

    /**
     * Encodes the specified ListChannelWithRandom message. Does not implicitly {@link ListChannelWithRandom.verify|verify} messages.
     * @function encode
     * @memberof ListChannelWithRandom
     * @static
     * @param {IListChannelWithRandom} message ListChannelWithRandom message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ListChannelWithRandom.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.channels != null && message.channels.length)
            for (var i = 0; i < message.channels.length; ++i)
                $root.Channel.encode(message.channels[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.randomState != null && message.hasOwnProperty("randomState"))
            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.randomState);
        if (message.cost != null && message.hasOwnProperty("cost"))
            $root.PCost.encode(message.cost, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ListChannelWithRandom message, length delimited. Does not implicitly {@link ListChannelWithRandom.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ListChannelWithRandom
     * @static
     * @param {IListChannelWithRandom} message ListChannelWithRandom message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ListChannelWithRandom.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ListChannelWithRandom message from the specified reader or buffer.
     * @function decode
     * @memberof ListChannelWithRandom
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ListChannelWithRandom} ListChannelWithRandom
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ListChannelWithRandom.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ListChannelWithRandom();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.channels && message.channels.length))
                    message.channels = [];
                message.channels.push($root.Channel.decode(reader, reader.uint32()));
                break;
            case 2:
                message.randomState = reader.bytes();
                break;
            case 3:
                message.cost = $root.PCost.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ListChannelWithRandom message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ListChannelWithRandom
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ListChannelWithRandom} ListChannelWithRandom
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ListChannelWithRandom.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ListChannelWithRandom message.
     * @function verify
     * @memberof ListChannelWithRandom
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ListChannelWithRandom.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.channels != null && message.hasOwnProperty("channels")) {
            if (!Array.isArray(message.channels))
                return "channels: array expected";
            for (var i = 0; i < message.channels.length; ++i) {
                var error = $root.Channel.verify(message.channels[i]);
                if (error)
                    return "channels." + error;
            }
        }
        if (message.randomState != null && message.hasOwnProperty("randomState"))
            if (!(message.randomState && typeof message.randomState.length === "number" || $util.isString(message.randomState)))
                return "randomState: buffer expected";
        if (message.cost != null && message.hasOwnProperty("cost")) {
            var error = $root.PCost.verify(message.cost);
            if (error)
                return "cost." + error;
        }
        return null;
    };

    /**
     * Creates a ListChannelWithRandom message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ListChannelWithRandom
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ListChannelWithRandom} ListChannelWithRandom
     */
    ListChannelWithRandom.fromObject = function fromObject(object) {
        if (object instanceof $root.ListChannelWithRandom)
            return object;
        var message = new $root.ListChannelWithRandom();
        if (object.channels) {
            if (!Array.isArray(object.channels))
                throw TypeError(".ListChannelWithRandom.channels: array expected");
            message.channels = [];
            for (var i = 0; i < object.channels.length; ++i) {
                if (typeof object.channels[i] !== "object")
                    throw TypeError(".ListChannelWithRandom.channels: object expected");
                message.channels[i] = $root.Channel.fromObject(object.channels[i]);
            }
        }
        if (object.randomState != null)
            if (typeof object.randomState === "string")
                $util.base64.decode(object.randomState, message.randomState = $util.newBuffer($util.base64.length(object.randomState)), 0);
            else if (object.randomState.length)
                message.randomState = object.randomState;
        if (object.cost != null) {
            if (typeof object.cost !== "object")
                throw TypeError(".ListChannelWithRandom.cost: object expected");
            message.cost = $root.PCost.fromObject(object.cost);
        }
        return message;
    };

    /**
     * Creates a plain object from a ListChannelWithRandom message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ListChannelWithRandom
     * @static
     * @param {ListChannelWithRandom} message ListChannelWithRandom
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ListChannelWithRandom.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.channels = [];
        if (options.defaults) {
            if (options.bytes === String)
                object.randomState = "";
            else {
                object.randomState = [];
                if (options.bytes !== Array)
                    object.randomState = $util.newBuffer(object.randomState);
            }
            object.cost = null;
        }
        if (message.channels && message.channels.length) {
            object.channels = [];
            for (var j = 0; j < message.channels.length; ++j)
                object.channels[j] = $root.Channel.toObject(message.channels[j], options);
        }
        if (message.randomState != null && message.hasOwnProperty("randomState"))
            object.randomState = options.bytes === String ? $util.base64.encode(message.randomState, 0, message.randomState.length) : options.bytes === Array ? Array.prototype.slice.call(message.randomState) : message.randomState;
        if (message.cost != null && message.hasOwnProperty("cost"))
            object.cost = $root.PCost.toObject(message.cost, options);
        return object;
    };

    /**
     * Converts this ListChannelWithRandom to JSON.
     * @function toJSON
     * @memberof ListChannelWithRandom
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ListChannelWithRandom.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ListChannelWithRandom;
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
     * @classdesc Represents a Bundle.
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
     * @property {IChannel|null} [chan] Send chan
     * @property {Array.<IPar>|null} [data] Send data
     * @property {boolean|null} [persistent] Send persistent
     * @property {Uint8Array|null} [locallyFree] Send locallyFree
     * @property {boolean|null} [connective_used] Send connective_used
     */

    /**
     * Constructs a new Send.
     * @exports Send
     * @classdesc Represents a Send.
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
     * @member {IChannel|null|undefined} chan
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
            $root.Channel.encode(message.chan, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
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
                message.chan = $root.Channel.decode(reader, reader.uint32());
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
            var error = $root.Channel.verify(message.chan);
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
            message.chan = $root.Channel.fromObject(object.chan);
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
            object.chan = $root.Channel.toObject(message.chan, options);
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
     * @property {Array.<IChannel>|null} [patterns] ReceiveBind patterns
     * @property {IChannel|null} [source] ReceiveBind source
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
     * @member {Array.<IChannel>} patterns
     * @memberof ReceiveBind
     * @instance
     */
    ReceiveBind.prototype.patterns = $util.emptyArray;

    /**
     * ReceiveBind source.
     * @member {IChannel|null|undefined} source
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
                $root.Channel.encode(message.patterns[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.source != null && message.hasOwnProperty("source"))
            $root.Channel.encode(message.source, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
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
                message.patterns.push($root.Channel.decode(reader, reader.uint32()));
                break;
            case 2:
                message.source = $root.Channel.decode(reader, reader.uint32());
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
                var error = $root.Channel.verify(message.patterns[i]);
                if (error)
                    return "patterns." + error;
            }
        }
        if (message.source != null && message.hasOwnProperty("source")) {
            var error = $root.Channel.verify(message.source);
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
                message.patterns[i] = $root.Channel.fromObject(object.patterns[i]);
            }
        }
        if (object.source != null) {
            if (typeof object.source !== "object")
                throw TypeError(".ReceiveBind.source: object expected");
            message.source = $root.Channel.fromObject(object.source);
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
                object.patterns[j] = $root.Channel.toObject(message.patterns[j], options);
        }
        if (message.source != null && message.hasOwnProperty("source"))
            object.source = $root.Channel.toObject(message.source, options);
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
     * @property {Array.<IChannel>|null} [patterns] BindPattern patterns
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
     * @member {Array.<IChannel>} patterns
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
                $root.Channel.encode(message.patterns[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
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
                message.patterns.push($root.Channel.decode(reader, reader.uint32()));
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
                var error = $root.Channel.verify(message.patterns[i]);
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
                message.patterns[i] = $root.Channel.fromObject(object.patterns[i]);
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
                object.patterns[j] = $root.Channel.toObject(message.patterns[j], options);
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
     * @property {number|null} [bindCount] Receive bindCount
     * @property {Uint8Array|null} [locallyFree] Receive locallyFree
     * @property {boolean|null} [connective_used] Receive connective_used
     */

    /**
     * Constructs a new Receive.
     * @exports Receive
     * @classdesc Represents a Receive.
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
        if (message.bindCount != null && message.hasOwnProperty("bindCount"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.bindCount);
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
        if (message.locallyFree != null && message.hasOwnProperty("locallyFree"))
            writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.locallyFree);
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
     * @property {IChannel|null} [e_eval_body] Expr e_eval_body
     * @property {IEMatches|null} [e_matches_body] Expr e_matches_body
     * @property {IEPercentPercent|null} [e_percent_percent_body] Expr e_percent_percent_body
     * @property {IEPlusPlus|null} [e_plus_plus_body] Expr e_plus_plus_body
     * @property {IEMinusMinus|null} [e_minus_minus_body] Expr e_minus_minus_body
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
     * Expr e_eval_body.
     * @member {IChannel|null|undefined} e_eval_body
     * @memberof Expr
     * @instance
     */
    Expr.prototype.e_eval_body = null;

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

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * Expr expr_instance.
     * @member {"g_bool"|"g_int"|"g_string"|"g_uri"|"g_byte_array"|"e_not_body"|"e_neg_body"|"e_mult_body"|"e_div_body"|"e_plus_body"|"e_minus_body"|"e_lt_body"|"e_lte_body"|"e_gt_body"|"e_gte_body"|"e_eq_body"|"e_neq_body"|"e_and_body"|"e_or_body"|"e_var_body"|"e_list_body"|"e_tuple_body"|"e_set_body"|"e_map_body"|"e_method_body"|"e_eval_body"|"e_matches_body"|"e_percent_percent_body"|"e_plus_plus_body"|"e_minus_minus_body"|undefined} expr_instance
     * @memberof Expr
     * @instance
     */
    Object.defineProperty(Expr.prototype, "expr_instance", {
        get: $util.oneOfGetter($oneOfFields = ["g_bool", "g_int", "g_string", "g_uri", "g_byte_array", "e_not_body", "e_neg_body", "e_mult_body", "e_div_body", "e_plus_body", "e_minus_body", "e_lt_body", "e_lte_body", "e_gt_body", "e_gte_body", "e_eq_body", "e_neq_body", "e_and_body", "e_or_body", "e_var_body", "e_list_body", "e_tuple_body", "e_set_body", "e_map_body", "e_method_body", "e_eval_body", "e_matches_body", "e_percent_percent_body", "e_plus_plus_body", "e_minus_minus_body"]),
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
        if (message.e_eval_body != null && message.hasOwnProperty("e_eval_body"))
            $root.Channel.encode(message.e_eval_body, writer.uint32(/* id 26, wireType 2 =*/210).fork()).ldelim();
        if (message.e_matches_body != null && message.hasOwnProperty("e_matches_body"))
            $root.EMatches.encode(message.e_matches_body, writer.uint32(/* id 27, wireType 2 =*/218).fork()).ldelim();
        if (message.e_percent_percent_body != null && message.hasOwnProperty("e_percent_percent_body"))
            $root.EPercentPercent.encode(message.e_percent_percent_body, writer.uint32(/* id 28, wireType 2 =*/226).fork()).ldelim();
        if (message.e_plus_plus_body != null && message.hasOwnProperty("e_plus_plus_body"))
            $root.EPlusPlus.encode(message.e_plus_plus_body, writer.uint32(/* id 29, wireType 2 =*/234).fork()).ldelim();
        if (message.e_minus_minus_body != null && message.hasOwnProperty("e_minus_minus_body"))
            $root.EMinusMinus.encode(message.e_minus_minus_body, writer.uint32(/* id 30, wireType 2 =*/242).fork()).ldelim();
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
            case 26:
                message.e_eval_body = $root.Channel.decode(reader, reader.uint32());
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
        if (message.e_eval_body != null && message.hasOwnProperty("e_eval_body")) {
            if (properties.expr_instance === 1)
                return "expr_instance: multiple values";
            properties.expr_instance = 1;
            {
                var error = $root.Channel.verify(message.e_eval_body);
                if (error)
                    return "e_eval_body." + error;
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
        if (object.e_eval_body != null) {
            if (typeof object.e_eval_body !== "object")
                throw TypeError(".Expr.e_eval_body: object expected");
            message.e_eval_body = $root.Channel.fromObject(object.e_eval_body);
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
        if (message.e_eval_body != null && message.hasOwnProperty("e_eval_body")) {
            object.e_eval_body = $root.Channel.toObject(message.e_eval_body, options);
            if (options.oneofs)
                object.expr_instance = "e_eval_body";
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
     * @classdesc Represents a EMethod.
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
     * @classdesc Represents a EPercentPercent.
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

$root.scalapb = (function() {

    /**
     * Namespace scalapb.
     * @exports scalapb
     * @namespace
     */
    var scalapb = {};

    scalapb.ScalaPbOptions = (function() {

        /**
         * Properties of a ScalaPbOptions.
         * @memberof scalapb
         * @interface IScalaPbOptions
         * @property {string|null} [package_name] ScalaPbOptions package_name
         * @property {boolean|null} [flat_package] ScalaPbOptions flat_package
         * @property {Array.<string>|null} ["import"] ScalaPbOptions import
         * @property {Array.<string>|null} [preamble] ScalaPbOptions preamble
         * @property {boolean|null} [single_file] ScalaPbOptions single_file
         * @property {boolean|null} [no_primitive_wrappers] ScalaPbOptions no_primitive_wrappers
         * @property {boolean|null} [primitive_wrappers] ScalaPbOptions primitive_wrappers
         * @property {string|null} [collection_type] ScalaPbOptions collection_type
         * @property {boolean|null} [test_only_no_java_conversions] ScalaPbOptions test_only_no_java_conversions
         */

        /**
         * Constructs a new ScalaPbOptions.
         * @memberof scalapb
         * @classdesc Represents a ScalaPbOptions.
         * @implements IScalaPbOptions
         * @constructor
         * @param {scalapb.IScalaPbOptions=} [properties] Properties to set
         */
        function ScalaPbOptions(properties) {
            this["import"] = [];
            this.preamble = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ScalaPbOptions package_name.
         * @member {string} package_name
         * @memberof scalapb.ScalaPbOptions
         * @instance
         */
        ScalaPbOptions.prototype.package_name = "";

        /**
         * ScalaPbOptions flat_package.
         * @member {boolean} flat_package
         * @memberof scalapb.ScalaPbOptions
         * @instance
         */
        ScalaPbOptions.prototype.flat_package = false;

        /**
         * ScalaPbOptions import.
         * @member {Array.<string>} import
         * @memberof scalapb.ScalaPbOptions
         * @instance
         */
        ScalaPbOptions.prototype["import"] = $util.emptyArray;

        /**
         * ScalaPbOptions preamble.
         * @member {Array.<string>} preamble
         * @memberof scalapb.ScalaPbOptions
         * @instance
         */
        ScalaPbOptions.prototype.preamble = $util.emptyArray;

        /**
         * ScalaPbOptions single_file.
         * @member {boolean} single_file
         * @memberof scalapb.ScalaPbOptions
         * @instance
         */
        ScalaPbOptions.prototype.single_file = false;

        /**
         * ScalaPbOptions no_primitive_wrappers.
         * @member {boolean} no_primitive_wrappers
         * @memberof scalapb.ScalaPbOptions
         * @instance
         */
        ScalaPbOptions.prototype.no_primitive_wrappers = false;

        /**
         * ScalaPbOptions primitive_wrappers.
         * @member {boolean} primitive_wrappers
         * @memberof scalapb.ScalaPbOptions
         * @instance
         */
        ScalaPbOptions.prototype.primitive_wrappers = false;

        /**
         * ScalaPbOptions collection_type.
         * @member {string} collection_type
         * @memberof scalapb.ScalaPbOptions
         * @instance
         */
        ScalaPbOptions.prototype.collection_type = "";

        /**
         * ScalaPbOptions test_only_no_java_conversions.
         * @member {boolean} test_only_no_java_conversions
         * @memberof scalapb.ScalaPbOptions
         * @instance
         */
        ScalaPbOptions.prototype.test_only_no_java_conversions = false;

        /**
         * Creates a new ScalaPbOptions instance using the specified properties.
         * @function create
         * @memberof scalapb.ScalaPbOptions
         * @static
         * @param {scalapb.IScalaPbOptions=} [properties] Properties to set
         * @returns {scalapb.ScalaPbOptions} ScalaPbOptions instance
         */
        ScalaPbOptions.create = function create(properties) {
            return new ScalaPbOptions(properties);
        };

        /**
         * Encodes the specified ScalaPbOptions message. Does not implicitly {@link scalapb.ScalaPbOptions.verify|verify} messages.
         * @function encode
         * @memberof scalapb.ScalaPbOptions
         * @static
         * @param {scalapb.IScalaPbOptions} message ScalaPbOptions message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ScalaPbOptions.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.package_name != null && message.hasOwnProperty("package_name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.package_name);
            if (message.flat_package != null && message.hasOwnProperty("flat_package"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.flat_package);
            if (message["import"] != null && message["import"].length)
                for (var i = 0; i < message["import"].length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message["import"][i]);
            if (message.preamble != null && message.preamble.length)
                for (var i = 0; i < message.preamble.length; ++i)
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.preamble[i]);
            if (message.single_file != null && message.hasOwnProperty("single_file"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.single_file);
            if (message.primitive_wrappers != null && message.hasOwnProperty("primitive_wrappers"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.primitive_wrappers);
            if (message.no_primitive_wrappers != null && message.hasOwnProperty("no_primitive_wrappers"))
                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.no_primitive_wrappers);
            if (message.collection_type != null && message.hasOwnProperty("collection_type"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.collection_type);
            if (message.test_only_no_java_conversions != null && message.hasOwnProperty("test_only_no_java_conversions"))
                writer.uint32(/* id 100001, wireType 0 =*/800008).bool(message.test_only_no_java_conversions);
            return writer;
        };

        /**
         * Encodes the specified ScalaPbOptions message, length delimited. Does not implicitly {@link scalapb.ScalaPbOptions.verify|verify} messages.
         * @function encodeDelimited
         * @memberof scalapb.ScalaPbOptions
         * @static
         * @param {scalapb.IScalaPbOptions} message ScalaPbOptions message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ScalaPbOptions.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ScalaPbOptions message from the specified reader or buffer.
         * @function decode
         * @memberof scalapb.ScalaPbOptions
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {scalapb.ScalaPbOptions} ScalaPbOptions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ScalaPbOptions.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.scalapb.ScalaPbOptions();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.package_name = reader.string();
                    break;
                case 2:
                    message.flat_package = reader.bool();
                    break;
                case 3:
                    if (!(message["import"] && message["import"].length))
                        message["import"] = [];
                    message["import"].push(reader.string());
                    break;
                case 4:
                    if (!(message.preamble && message.preamble.length))
                        message.preamble = [];
                    message.preamble.push(reader.string());
                    break;
                case 5:
                    message.single_file = reader.bool();
                    break;
                case 7:
                    message.no_primitive_wrappers = reader.bool();
                    break;
                case 6:
                    message.primitive_wrappers = reader.bool();
                    break;
                case 8:
                    message.collection_type = reader.string();
                    break;
                case 100001:
                    message.test_only_no_java_conversions = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ScalaPbOptions message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof scalapb.ScalaPbOptions
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {scalapb.ScalaPbOptions} ScalaPbOptions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ScalaPbOptions.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ScalaPbOptions message.
         * @function verify
         * @memberof scalapb.ScalaPbOptions
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ScalaPbOptions.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.package_name != null && message.hasOwnProperty("package_name"))
                if (!$util.isString(message.package_name))
                    return "package_name: string expected";
            if (message.flat_package != null && message.hasOwnProperty("flat_package"))
                if (typeof message.flat_package !== "boolean")
                    return "flat_package: boolean expected";
            if (message["import"] != null && message.hasOwnProperty("import")) {
                if (!Array.isArray(message["import"]))
                    return "import: array expected";
                for (var i = 0; i < message["import"].length; ++i)
                    if (!$util.isString(message["import"][i]))
                        return "import: string[] expected";
            }
            if (message.preamble != null && message.hasOwnProperty("preamble")) {
                if (!Array.isArray(message.preamble))
                    return "preamble: array expected";
                for (var i = 0; i < message.preamble.length; ++i)
                    if (!$util.isString(message.preamble[i]))
                        return "preamble: string[] expected";
            }
            if (message.single_file != null && message.hasOwnProperty("single_file"))
                if (typeof message.single_file !== "boolean")
                    return "single_file: boolean expected";
            if (message.no_primitive_wrappers != null && message.hasOwnProperty("no_primitive_wrappers"))
                if (typeof message.no_primitive_wrappers !== "boolean")
                    return "no_primitive_wrappers: boolean expected";
            if (message.primitive_wrappers != null && message.hasOwnProperty("primitive_wrappers"))
                if (typeof message.primitive_wrappers !== "boolean")
                    return "primitive_wrappers: boolean expected";
            if (message.collection_type != null && message.hasOwnProperty("collection_type"))
                if (!$util.isString(message.collection_type))
                    return "collection_type: string expected";
            if (message.test_only_no_java_conversions != null && message.hasOwnProperty("test_only_no_java_conversions"))
                if (typeof message.test_only_no_java_conversions !== "boolean")
                    return "test_only_no_java_conversions: boolean expected";
            return null;
        };

        /**
         * Creates a ScalaPbOptions message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof scalapb.ScalaPbOptions
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {scalapb.ScalaPbOptions} ScalaPbOptions
         */
        ScalaPbOptions.fromObject = function fromObject(object) {
            if (object instanceof $root.scalapb.ScalaPbOptions)
                return object;
            var message = new $root.scalapb.ScalaPbOptions();
            if (object.package_name != null)
                message.package_name = String(object.package_name);
            if (object.flat_package != null)
                message.flat_package = Boolean(object.flat_package);
            if (object["import"]) {
                if (!Array.isArray(object["import"]))
                    throw TypeError(".scalapb.ScalaPbOptions.import: array expected");
                message["import"] = [];
                for (var i = 0; i < object["import"].length; ++i)
                    message["import"][i] = String(object["import"][i]);
            }
            if (object.preamble) {
                if (!Array.isArray(object.preamble))
                    throw TypeError(".scalapb.ScalaPbOptions.preamble: array expected");
                message.preamble = [];
                for (var i = 0; i < object.preamble.length; ++i)
                    message.preamble[i] = String(object.preamble[i]);
            }
            if (object.single_file != null)
                message.single_file = Boolean(object.single_file);
            if (object.no_primitive_wrappers != null)
                message.no_primitive_wrappers = Boolean(object.no_primitive_wrappers);
            if (object.primitive_wrappers != null)
                message.primitive_wrappers = Boolean(object.primitive_wrappers);
            if (object.collection_type != null)
                message.collection_type = String(object.collection_type);
            if (object.test_only_no_java_conversions != null)
                message.test_only_no_java_conversions = Boolean(object.test_only_no_java_conversions);
            return message;
        };

        /**
         * Creates a plain object from a ScalaPbOptions message. Also converts values to other types if specified.
         * @function toObject
         * @memberof scalapb.ScalaPbOptions
         * @static
         * @param {scalapb.ScalaPbOptions} message ScalaPbOptions
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ScalaPbOptions.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object["import"] = [];
                object.preamble = [];
            }
            if (options.defaults) {
                object.package_name = "";
                object.flat_package = false;
                object.single_file = false;
                object.primitive_wrappers = false;
                object.no_primitive_wrappers = false;
                object.collection_type = "";
                object.test_only_no_java_conversions = false;
            }
            if (message.package_name != null && message.hasOwnProperty("package_name"))
                object.package_name = message.package_name;
            if (message.flat_package != null && message.hasOwnProperty("flat_package"))
                object.flat_package = message.flat_package;
            if (message["import"] && message["import"].length) {
                object["import"] = [];
                for (var j = 0; j < message["import"].length; ++j)
                    object["import"][j] = message["import"][j];
            }
            if (message.preamble && message.preamble.length) {
                object.preamble = [];
                for (var j = 0; j < message.preamble.length; ++j)
                    object.preamble[j] = message.preamble[j];
            }
            if (message.single_file != null && message.hasOwnProperty("single_file"))
                object.single_file = message.single_file;
            if (message.primitive_wrappers != null && message.hasOwnProperty("primitive_wrappers"))
                object.primitive_wrappers = message.primitive_wrappers;
            if (message.no_primitive_wrappers != null && message.hasOwnProperty("no_primitive_wrappers"))
                object.no_primitive_wrappers = message.no_primitive_wrappers;
            if (message.collection_type != null && message.hasOwnProperty("collection_type"))
                object.collection_type = message.collection_type;
            if (message.test_only_no_java_conversions != null && message.hasOwnProperty("test_only_no_java_conversions"))
                object.test_only_no_java_conversions = message.test_only_no_java_conversions;
            return object;
        };

        /**
         * Converts this ScalaPbOptions to JSON.
         * @function toJSON
         * @memberof scalapb.ScalaPbOptions
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ScalaPbOptions.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ScalaPbOptions;
    })();

    scalapb.MessageOptions = (function() {

        /**
         * Properties of a MessageOptions.
         * @memberof scalapb
         * @interface IMessageOptions
         * @property {Array.<string>|null} ["extends"] MessageOptions extends
         * @property {Array.<string>|null} [companion_extends] MessageOptions companion_extends
         */

        /**
         * Constructs a new MessageOptions.
         * @memberof scalapb
         * @classdesc Represents a MessageOptions.
         * @implements IMessageOptions
         * @constructor
         * @param {scalapb.IMessageOptions=} [properties] Properties to set
         */
        function MessageOptions(properties) {
            this["extends"] = [];
            this.companion_extends = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MessageOptions extends.
         * @member {Array.<string>} extends
         * @memberof scalapb.MessageOptions
         * @instance
         */
        MessageOptions.prototype["extends"] = $util.emptyArray;

        /**
         * MessageOptions companion_extends.
         * @member {Array.<string>} companion_extends
         * @memberof scalapb.MessageOptions
         * @instance
         */
        MessageOptions.prototype.companion_extends = $util.emptyArray;

        /**
         * Creates a new MessageOptions instance using the specified properties.
         * @function create
         * @memberof scalapb.MessageOptions
         * @static
         * @param {scalapb.IMessageOptions=} [properties] Properties to set
         * @returns {scalapb.MessageOptions} MessageOptions instance
         */
        MessageOptions.create = function create(properties) {
            return new MessageOptions(properties);
        };

        /**
         * Encodes the specified MessageOptions message. Does not implicitly {@link scalapb.MessageOptions.verify|verify} messages.
         * @function encode
         * @memberof scalapb.MessageOptions
         * @static
         * @param {scalapb.IMessageOptions} message MessageOptions message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MessageOptions.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message["extends"] != null && message["extends"].length)
                for (var i = 0; i < message["extends"].length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message["extends"][i]);
            if (message.companion_extends != null && message.companion_extends.length)
                for (var i = 0; i < message.companion_extends.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.companion_extends[i]);
            return writer;
        };

        /**
         * Encodes the specified MessageOptions message, length delimited. Does not implicitly {@link scalapb.MessageOptions.verify|verify} messages.
         * @function encodeDelimited
         * @memberof scalapb.MessageOptions
         * @static
         * @param {scalapb.IMessageOptions} message MessageOptions message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MessageOptions.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MessageOptions message from the specified reader or buffer.
         * @function decode
         * @memberof scalapb.MessageOptions
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {scalapb.MessageOptions} MessageOptions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MessageOptions.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.scalapb.MessageOptions();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message["extends"] && message["extends"].length))
                        message["extends"] = [];
                    message["extends"].push(reader.string());
                    break;
                case 2:
                    if (!(message.companion_extends && message.companion_extends.length))
                        message.companion_extends = [];
                    message.companion_extends.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MessageOptions message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof scalapb.MessageOptions
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {scalapb.MessageOptions} MessageOptions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MessageOptions.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MessageOptions message.
         * @function verify
         * @memberof scalapb.MessageOptions
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MessageOptions.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message["extends"] != null && message.hasOwnProperty("extends")) {
                if (!Array.isArray(message["extends"]))
                    return "extends: array expected";
                for (var i = 0; i < message["extends"].length; ++i)
                    if (!$util.isString(message["extends"][i]))
                        return "extends: string[] expected";
            }
            if (message.companion_extends != null && message.hasOwnProperty("companion_extends")) {
                if (!Array.isArray(message.companion_extends))
                    return "companion_extends: array expected";
                for (var i = 0; i < message.companion_extends.length; ++i)
                    if (!$util.isString(message.companion_extends[i]))
                        return "companion_extends: string[] expected";
            }
            return null;
        };

        /**
         * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof scalapb.MessageOptions
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {scalapb.MessageOptions} MessageOptions
         */
        MessageOptions.fromObject = function fromObject(object) {
            if (object instanceof $root.scalapb.MessageOptions)
                return object;
            var message = new $root.scalapb.MessageOptions();
            if (object["extends"]) {
                if (!Array.isArray(object["extends"]))
                    throw TypeError(".scalapb.MessageOptions.extends: array expected");
                message["extends"] = [];
                for (var i = 0; i < object["extends"].length; ++i)
                    message["extends"][i] = String(object["extends"][i]);
            }
            if (object.companion_extends) {
                if (!Array.isArray(object.companion_extends))
                    throw TypeError(".scalapb.MessageOptions.companion_extends: array expected");
                message.companion_extends = [];
                for (var i = 0; i < object.companion_extends.length; ++i)
                    message.companion_extends[i] = String(object.companion_extends[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
         * @function toObject
         * @memberof scalapb.MessageOptions
         * @static
         * @param {scalapb.MessageOptions} message MessageOptions
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MessageOptions.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object["extends"] = [];
                object.companion_extends = [];
            }
            if (message["extends"] && message["extends"].length) {
                object["extends"] = [];
                for (var j = 0; j < message["extends"].length; ++j)
                    object["extends"][j] = message["extends"][j];
            }
            if (message.companion_extends && message.companion_extends.length) {
                object.companion_extends = [];
                for (var j = 0; j < message.companion_extends.length; ++j)
                    object.companion_extends[j] = message.companion_extends[j];
            }
            return object;
        };

        /**
         * Converts this MessageOptions to JSON.
         * @function toJSON
         * @memberof scalapb.MessageOptions
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MessageOptions.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MessageOptions;
    })();

    scalapb.FieldOptions = (function() {

        /**
         * Properties of a FieldOptions.
         * @memberof scalapb
         * @interface IFieldOptions
         * @property {string|null} [type] FieldOptions type
         * @property {string|null} [scala_name] FieldOptions scala_name
         * @property {string|null} [collection_type] FieldOptions collection_type
         * @property {string|null} [key_type] FieldOptions key_type
         * @property {string|null} [value_type] FieldOptions value_type
         */

        /**
         * Constructs a new FieldOptions.
         * @memberof scalapb
         * @classdesc Represents a FieldOptions.
         * @implements IFieldOptions
         * @constructor
         * @param {scalapb.IFieldOptions=} [properties] Properties to set
         */
        function FieldOptions(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FieldOptions type.
         * @member {string} type
         * @memberof scalapb.FieldOptions
         * @instance
         */
        FieldOptions.prototype.type = "";

        /**
         * FieldOptions scala_name.
         * @member {string} scala_name
         * @memberof scalapb.FieldOptions
         * @instance
         */
        FieldOptions.prototype.scala_name = "";

        /**
         * FieldOptions collection_type.
         * @member {string} collection_type
         * @memberof scalapb.FieldOptions
         * @instance
         */
        FieldOptions.prototype.collection_type = "";

        /**
         * FieldOptions key_type.
         * @member {string} key_type
         * @memberof scalapb.FieldOptions
         * @instance
         */
        FieldOptions.prototype.key_type = "";

        /**
         * FieldOptions value_type.
         * @member {string} value_type
         * @memberof scalapb.FieldOptions
         * @instance
         */
        FieldOptions.prototype.value_type = "";

        /**
         * Creates a new FieldOptions instance using the specified properties.
         * @function create
         * @memberof scalapb.FieldOptions
         * @static
         * @param {scalapb.IFieldOptions=} [properties] Properties to set
         * @returns {scalapb.FieldOptions} FieldOptions instance
         */
        FieldOptions.create = function create(properties) {
            return new FieldOptions(properties);
        };

        /**
         * Encodes the specified FieldOptions message. Does not implicitly {@link scalapb.FieldOptions.verify|verify} messages.
         * @function encode
         * @memberof scalapb.FieldOptions
         * @static
         * @param {scalapb.IFieldOptions} message FieldOptions message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FieldOptions.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.type);
            if (message.scala_name != null && message.hasOwnProperty("scala_name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.scala_name);
            if (message.collection_type != null && message.hasOwnProperty("collection_type"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.collection_type);
            if (message.key_type != null && message.hasOwnProperty("key_type"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.key_type);
            if (message.value_type != null && message.hasOwnProperty("value_type"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.value_type);
            return writer;
        };

        /**
         * Encodes the specified FieldOptions message, length delimited. Does not implicitly {@link scalapb.FieldOptions.verify|verify} messages.
         * @function encodeDelimited
         * @memberof scalapb.FieldOptions
         * @static
         * @param {scalapb.IFieldOptions} message FieldOptions message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FieldOptions.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FieldOptions message from the specified reader or buffer.
         * @function decode
         * @memberof scalapb.FieldOptions
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {scalapb.FieldOptions} FieldOptions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FieldOptions.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.scalapb.FieldOptions();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.string();
                    break;
                case 2:
                    message.scala_name = reader.string();
                    break;
                case 3:
                    message.collection_type = reader.string();
                    break;
                case 4:
                    message.key_type = reader.string();
                    break;
                case 5:
                    message.value_type = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FieldOptions message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof scalapb.FieldOptions
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {scalapb.FieldOptions} FieldOptions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FieldOptions.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FieldOptions message.
         * @function verify
         * @memberof scalapb.FieldOptions
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FieldOptions.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isString(message.type))
                    return "type: string expected";
            if (message.scala_name != null && message.hasOwnProperty("scala_name"))
                if (!$util.isString(message.scala_name))
                    return "scala_name: string expected";
            if (message.collection_type != null && message.hasOwnProperty("collection_type"))
                if (!$util.isString(message.collection_type))
                    return "collection_type: string expected";
            if (message.key_type != null && message.hasOwnProperty("key_type"))
                if (!$util.isString(message.key_type))
                    return "key_type: string expected";
            if (message.value_type != null && message.hasOwnProperty("value_type"))
                if (!$util.isString(message.value_type))
                    return "value_type: string expected";
            return null;
        };

        /**
         * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof scalapb.FieldOptions
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {scalapb.FieldOptions} FieldOptions
         */
        FieldOptions.fromObject = function fromObject(object) {
            if (object instanceof $root.scalapb.FieldOptions)
                return object;
            var message = new $root.scalapb.FieldOptions();
            if (object.type != null)
                message.type = String(object.type);
            if (object.scala_name != null)
                message.scala_name = String(object.scala_name);
            if (object.collection_type != null)
                message.collection_type = String(object.collection_type);
            if (object.key_type != null)
                message.key_type = String(object.key_type);
            if (object.value_type != null)
                message.value_type = String(object.value_type);
            return message;
        };

        /**
         * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
         * @function toObject
         * @memberof scalapb.FieldOptions
         * @static
         * @param {scalapb.FieldOptions} message FieldOptions
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FieldOptions.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.type = "";
                object.scala_name = "";
                object.collection_type = "";
                object.key_type = "";
                object.value_type = "";
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.scala_name != null && message.hasOwnProperty("scala_name"))
                object.scala_name = message.scala_name;
            if (message.collection_type != null && message.hasOwnProperty("collection_type"))
                object.collection_type = message.collection_type;
            if (message.key_type != null && message.hasOwnProperty("key_type"))
                object.key_type = message.key_type;
            if (message.value_type != null && message.hasOwnProperty("value_type"))
                object.value_type = message.value_type;
            return object;
        };

        /**
         * Converts this FieldOptions to JSON.
         * @function toJSON
         * @memberof scalapb.FieldOptions
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FieldOptions.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FieldOptions;
    })();

    scalapb.EnumOptions = (function() {

        /**
         * Properties of an EnumOptions.
         * @memberof scalapb
         * @interface IEnumOptions
         * @property {Array.<string>|null} ["extends"] EnumOptions extends
         * @property {Array.<string>|null} [companion_extends] EnumOptions companion_extends
         */

        /**
         * Constructs a new EnumOptions.
         * @memberof scalapb
         * @classdesc Represents an EnumOptions.
         * @implements IEnumOptions
         * @constructor
         * @param {scalapb.IEnumOptions=} [properties] Properties to set
         */
        function EnumOptions(properties) {
            this["extends"] = [];
            this.companion_extends = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EnumOptions extends.
         * @member {Array.<string>} extends
         * @memberof scalapb.EnumOptions
         * @instance
         */
        EnumOptions.prototype["extends"] = $util.emptyArray;

        /**
         * EnumOptions companion_extends.
         * @member {Array.<string>} companion_extends
         * @memberof scalapb.EnumOptions
         * @instance
         */
        EnumOptions.prototype.companion_extends = $util.emptyArray;

        /**
         * Creates a new EnumOptions instance using the specified properties.
         * @function create
         * @memberof scalapb.EnumOptions
         * @static
         * @param {scalapb.IEnumOptions=} [properties] Properties to set
         * @returns {scalapb.EnumOptions} EnumOptions instance
         */
        EnumOptions.create = function create(properties) {
            return new EnumOptions(properties);
        };

        /**
         * Encodes the specified EnumOptions message. Does not implicitly {@link scalapb.EnumOptions.verify|verify} messages.
         * @function encode
         * @memberof scalapb.EnumOptions
         * @static
         * @param {scalapb.IEnumOptions} message EnumOptions message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnumOptions.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message["extends"] != null && message["extends"].length)
                for (var i = 0; i < message["extends"].length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message["extends"][i]);
            if (message.companion_extends != null && message.companion_extends.length)
                for (var i = 0; i < message.companion_extends.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.companion_extends[i]);
            return writer;
        };

        /**
         * Encodes the specified EnumOptions message, length delimited. Does not implicitly {@link scalapb.EnumOptions.verify|verify} messages.
         * @function encodeDelimited
         * @memberof scalapb.EnumOptions
         * @static
         * @param {scalapb.IEnumOptions} message EnumOptions message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnumOptions.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EnumOptions message from the specified reader or buffer.
         * @function decode
         * @memberof scalapb.EnumOptions
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {scalapb.EnumOptions} EnumOptions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnumOptions.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.scalapb.EnumOptions();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message["extends"] && message["extends"].length))
                        message["extends"] = [];
                    message["extends"].push(reader.string());
                    break;
                case 2:
                    if (!(message.companion_extends && message.companion_extends.length))
                        message.companion_extends = [];
                    message.companion_extends.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EnumOptions message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof scalapb.EnumOptions
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {scalapb.EnumOptions} EnumOptions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnumOptions.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EnumOptions message.
         * @function verify
         * @memberof scalapb.EnumOptions
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EnumOptions.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message["extends"] != null && message.hasOwnProperty("extends")) {
                if (!Array.isArray(message["extends"]))
                    return "extends: array expected";
                for (var i = 0; i < message["extends"].length; ++i)
                    if (!$util.isString(message["extends"][i]))
                        return "extends: string[] expected";
            }
            if (message.companion_extends != null && message.hasOwnProperty("companion_extends")) {
                if (!Array.isArray(message.companion_extends))
                    return "companion_extends: array expected";
                for (var i = 0; i < message.companion_extends.length; ++i)
                    if (!$util.isString(message.companion_extends[i]))
                        return "companion_extends: string[] expected";
            }
            return null;
        };

        /**
         * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof scalapb.EnumOptions
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {scalapb.EnumOptions} EnumOptions
         */
        EnumOptions.fromObject = function fromObject(object) {
            if (object instanceof $root.scalapb.EnumOptions)
                return object;
            var message = new $root.scalapb.EnumOptions();
            if (object["extends"]) {
                if (!Array.isArray(object["extends"]))
                    throw TypeError(".scalapb.EnumOptions.extends: array expected");
                message["extends"] = [];
                for (var i = 0; i < object["extends"].length; ++i)
                    message["extends"][i] = String(object["extends"][i]);
            }
            if (object.companion_extends) {
                if (!Array.isArray(object.companion_extends))
                    throw TypeError(".scalapb.EnumOptions.companion_extends: array expected");
                message.companion_extends = [];
                for (var i = 0; i < object.companion_extends.length; ++i)
                    message.companion_extends[i] = String(object.companion_extends[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
         * @function toObject
         * @memberof scalapb.EnumOptions
         * @static
         * @param {scalapb.EnumOptions} message EnumOptions
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EnumOptions.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object["extends"] = [];
                object.companion_extends = [];
            }
            if (message["extends"] && message["extends"].length) {
                object["extends"] = [];
                for (var j = 0; j < message["extends"].length; ++j)
                    object["extends"][j] = message["extends"][j];
            }
            if (message.companion_extends && message.companion_extends.length) {
                object.companion_extends = [];
                for (var j = 0; j < message.companion_extends.length; ++j)
                    object.companion_extends[j] = message.companion_extends[j];
            }
            return object;
        };

        /**
         * Converts this EnumOptions to JSON.
         * @function toJSON
         * @memberof scalapb.EnumOptions
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EnumOptions.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EnumOptions;
    })();

    scalapb.EnumValueOptions = (function() {

        /**
         * Properties of an EnumValueOptions.
         * @memberof scalapb
         * @interface IEnumValueOptions
         * @property {Array.<string>|null} ["extends"] EnumValueOptions extends
         */

        /**
         * Constructs a new EnumValueOptions.
         * @memberof scalapb
         * @classdesc Represents an EnumValueOptions.
         * @implements IEnumValueOptions
         * @constructor
         * @param {scalapb.IEnumValueOptions=} [properties] Properties to set
         */
        function EnumValueOptions(properties) {
            this["extends"] = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EnumValueOptions extends.
         * @member {Array.<string>} extends
         * @memberof scalapb.EnumValueOptions
         * @instance
         */
        EnumValueOptions.prototype["extends"] = $util.emptyArray;

        /**
         * Creates a new EnumValueOptions instance using the specified properties.
         * @function create
         * @memberof scalapb.EnumValueOptions
         * @static
         * @param {scalapb.IEnumValueOptions=} [properties] Properties to set
         * @returns {scalapb.EnumValueOptions} EnumValueOptions instance
         */
        EnumValueOptions.create = function create(properties) {
            return new EnumValueOptions(properties);
        };

        /**
         * Encodes the specified EnumValueOptions message. Does not implicitly {@link scalapb.EnumValueOptions.verify|verify} messages.
         * @function encode
         * @memberof scalapb.EnumValueOptions
         * @static
         * @param {scalapb.IEnumValueOptions} message EnumValueOptions message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnumValueOptions.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message["extends"] != null && message["extends"].length)
                for (var i = 0; i < message["extends"].length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message["extends"][i]);
            return writer;
        };

        /**
         * Encodes the specified EnumValueOptions message, length delimited. Does not implicitly {@link scalapb.EnumValueOptions.verify|verify} messages.
         * @function encodeDelimited
         * @memberof scalapb.EnumValueOptions
         * @static
         * @param {scalapb.IEnumValueOptions} message EnumValueOptions message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnumValueOptions.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EnumValueOptions message from the specified reader or buffer.
         * @function decode
         * @memberof scalapb.EnumValueOptions
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {scalapb.EnumValueOptions} EnumValueOptions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnumValueOptions.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.scalapb.EnumValueOptions();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message["extends"] && message["extends"].length))
                        message["extends"] = [];
                    message["extends"].push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EnumValueOptions message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof scalapb.EnumValueOptions
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {scalapb.EnumValueOptions} EnumValueOptions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnumValueOptions.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EnumValueOptions message.
         * @function verify
         * @memberof scalapb.EnumValueOptions
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EnumValueOptions.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message["extends"] != null && message.hasOwnProperty("extends")) {
                if (!Array.isArray(message["extends"]))
                    return "extends: array expected";
                for (var i = 0; i < message["extends"].length; ++i)
                    if (!$util.isString(message["extends"][i]))
                        return "extends: string[] expected";
            }
            return null;
        };

        /**
         * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof scalapb.EnumValueOptions
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {scalapb.EnumValueOptions} EnumValueOptions
         */
        EnumValueOptions.fromObject = function fromObject(object) {
            if (object instanceof $root.scalapb.EnumValueOptions)
                return object;
            var message = new $root.scalapb.EnumValueOptions();
            if (object["extends"]) {
                if (!Array.isArray(object["extends"]))
                    throw TypeError(".scalapb.EnumValueOptions.extends: array expected");
                message["extends"] = [];
                for (var i = 0; i < object["extends"].length; ++i)
                    message["extends"][i] = String(object["extends"][i]);
            }
            return message;
        };

        /**
         * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
         * @function toObject
         * @memberof scalapb.EnumValueOptions
         * @static
         * @param {scalapb.EnumValueOptions} message EnumValueOptions
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EnumValueOptions.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object["extends"] = [];
            if (message["extends"] && message["extends"].length) {
                object["extends"] = [];
                for (var j = 0; j < message["extends"].length; ++j)
                    object["extends"][j] = message["extends"][j];
            }
            return object;
        };

        /**
         * Converts this EnumValueOptions to JSON.
         * @function toJSON
         * @memberof scalapb.EnumValueOptions
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EnumValueOptions.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EnumValueOptions;
    })();

    return scalapb;
})();

$root.google = (function() {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    var google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        var protobuf = {};

        protobuf.FileDescriptorSet = (function() {

            /**
             * Properties of a FileDescriptorSet.
             * @memberof google.protobuf
             * @interface IFileDescriptorSet
             * @property {Array.<google.protobuf.IFileDescriptorProto>|null} [file] FileDescriptorSet file
             */

            /**
             * Constructs a new FileDescriptorSet.
             * @memberof google.protobuf
             * @classdesc Represents a FileDescriptorSet.
             * @implements IFileDescriptorSet
             * @constructor
             * @param {google.protobuf.IFileDescriptorSet=} [properties] Properties to set
             */
            function FileDescriptorSet(properties) {
                this.file = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FileDescriptorSet file.
             * @member {Array.<google.protobuf.IFileDescriptorProto>} file
             * @memberof google.protobuf.FileDescriptorSet
             * @instance
             */
            FileDescriptorSet.prototype.file = $util.emptyArray;

            /**
             * Creates a new FileDescriptorSet instance using the specified properties.
             * @function create
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {google.protobuf.IFileDescriptorSet=} [properties] Properties to set
             * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet instance
             */
            FileDescriptorSet.create = function create(properties) {
                return new FileDescriptorSet(properties);
            };

            /**
             * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {google.protobuf.IFileDescriptorSet} message FileDescriptorSet message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileDescriptorSet.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.file != null && message.file.length)
                    for (var i = 0; i < message.file.length; ++i)
                        $root.google.protobuf.FileDescriptorProto.encode(message.file[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified FileDescriptorSet message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {google.protobuf.IFileDescriptorSet} message FileDescriptorSet message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileDescriptorSet.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileDescriptorSet.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FileDescriptorSet();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.file && message.file.length))
                            message.file = [];
                        message.file.push($root.google.protobuf.FileDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileDescriptorSet.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FileDescriptorSet message.
             * @function verify
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FileDescriptorSet.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.file != null && message.hasOwnProperty("file")) {
                    if (!Array.isArray(message.file))
                        return "file: array expected";
                    for (var i = 0; i < message.file.length; ++i) {
                        var error = $root.google.protobuf.FileDescriptorProto.verify(message.file[i]);
                        if (error)
                            return "file." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet
             */
            FileDescriptorSet.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.FileDescriptorSet)
                    return object;
                var message = new $root.google.protobuf.FileDescriptorSet();
                if (object.file) {
                    if (!Array.isArray(object.file))
                        throw TypeError(".google.protobuf.FileDescriptorSet.file: array expected");
                    message.file = [];
                    for (var i = 0; i < object.file.length; ++i) {
                        if (typeof object.file[i] !== "object")
                            throw TypeError(".google.protobuf.FileDescriptorSet.file: object expected");
                        message.file[i] = $root.google.protobuf.FileDescriptorProto.fromObject(object.file[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a FileDescriptorSet message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {google.protobuf.FileDescriptorSet} message FileDescriptorSet
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FileDescriptorSet.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.file = [];
                if (message.file && message.file.length) {
                    object.file = [];
                    for (var j = 0; j < message.file.length; ++j)
                        object.file[j] = $root.google.protobuf.FileDescriptorProto.toObject(message.file[j], options);
                }
                return object;
            };

            /**
             * Converts this FileDescriptorSet to JSON.
             * @function toJSON
             * @memberof google.protobuf.FileDescriptorSet
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FileDescriptorSet.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return FileDescriptorSet;
        })();

        protobuf.FileDescriptorProto = (function() {

            /**
             * Properties of a FileDescriptorProto.
             * @memberof google.protobuf
             * @interface IFileDescriptorProto
             * @property {string|null} [name] FileDescriptorProto name
             * @property {string|null} ["package"] FileDescriptorProto package
             * @property {Array.<string>|null} [dependency] FileDescriptorProto dependency
             * @property {Array.<number>|null} [public_dependency] FileDescriptorProto public_dependency
             * @property {Array.<number>|null} [weak_dependency] FileDescriptorProto weak_dependency
             * @property {Array.<google.protobuf.IDescriptorProto>|null} [message_type] FileDescriptorProto message_type
             * @property {Array.<google.protobuf.IEnumDescriptorProto>|null} [enum_type] FileDescriptorProto enum_type
             * @property {Array.<google.protobuf.IServiceDescriptorProto>|null} [service] FileDescriptorProto service
             * @property {Array.<google.protobuf.IFieldDescriptorProto>|null} [extension] FileDescriptorProto extension
             * @property {google.protobuf.IFileOptions|null} [options] FileDescriptorProto options
             * @property {google.protobuf.ISourceCodeInfo|null} [source_code_info] FileDescriptorProto source_code_info
             * @property {string|null} [syntax] FileDescriptorProto syntax
             */

            /**
             * Constructs a new FileDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents a FileDescriptorProto.
             * @implements IFileDescriptorProto
             * @constructor
             * @param {google.protobuf.IFileDescriptorProto=} [properties] Properties to set
             */
            function FileDescriptorProto(properties) {
                this.dependency = [];
                this.public_dependency = [];
                this.weak_dependency = [];
                this.message_type = [];
                this.enum_type = [];
                this.service = [];
                this.extension = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FileDescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.name = "";

            /**
             * FileDescriptorProto package.
             * @member {string} package
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype["package"] = "";

            /**
             * FileDescriptorProto dependency.
             * @member {Array.<string>} dependency
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.dependency = $util.emptyArray;

            /**
             * FileDescriptorProto public_dependency.
             * @member {Array.<number>} public_dependency
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.public_dependency = $util.emptyArray;

            /**
             * FileDescriptorProto weak_dependency.
             * @member {Array.<number>} weak_dependency
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.weak_dependency = $util.emptyArray;

            /**
             * FileDescriptorProto message_type.
             * @member {Array.<google.protobuf.IDescriptorProto>} message_type
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.message_type = $util.emptyArray;

            /**
             * FileDescriptorProto enum_type.
             * @member {Array.<google.protobuf.IEnumDescriptorProto>} enum_type
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.enum_type = $util.emptyArray;

            /**
             * FileDescriptorProto service.
             * @member {Array.<google.protobuf.IServiceDescriptorProto>} service
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.service = $util.emptyArray;

            /**
             * FileDescriptorProto extension.
             * @member {Array.<google.protobuf.IFieldDescriptorProto>} extension
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.extension = $util.emptyArray;

            /**
             * FileDescriptorProto options.
             * @member {google.protobuf.IFileOptions|null|undefined} options
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.options = null;

            /**
             * FileDescriptorProto source_code_info.
             * @member {google.protobuf.ISourceCodeInfo|null|undefined} source_code_info
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.source_code_info = null;

            /**
             * FileDescriptorProto syntax.
             * @member {string} syntax
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.syntax = "";

            /**
             * Creates a new FileDescriptorProto instance using the specified properties.
             * @function create
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {google.protobuf.IFileDescriptorProto=} [properties] Properties to set
             * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto instance
             */
            FileDescriptorProto.create = function create(properties) {
                return new FileDescriptorProto(properties);
            };

            /**
             * Encodes the specified FileDescriptorProto message. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {google.protobuf.IFileDescriptorProto} message FileDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message["package"] != null && message.hasOwnProperty("package"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message["package"]);
                if (message.dependency != null && message.dependency.length)
                    for (var i = 0; i < message.dependency.length; ++i)
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.dependency[i]);
                if (message.message_type != null && message.message_type.length)
                    for (var i = 0; i < message.message_type.length; ++i)
                        $root.google.protobuf.DescriptorProto.encode(message.message_type[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.enum_type != null && message.enum_type.length)
                    for (var i = 0; i < message.enum_type.length; ++i)
                        $root.google.protobuf.EnumDescriptorProto.encode(message.enum_type[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.service != null && message.service.length)
                    for (var i = 0; i < message.service.length; ++i)
                        $root.google.protobuf.ServiceDescriptorProto.encode(message.service[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                if (message.extension != null && message.extension.length)
                    for (var i = 0; i < message.extension.length; ++i)
                        $root.google.protobuf.FieldDescriptorProto.encode(message.extension[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                if (message.options != null && message.hasOwnProperty("options"))
                    $root.google.protobuf.FileOptions.encode(message.options, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                if (message.source_code_info != null && message.hasOwnProperty("source_code_info"))
                    $root.google.protobuf.SourceCodeInfo.encode(message.source_code_info, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                if (message.public_dependency != null && message.public_dependency.length)
                    for (var i = 0; i < message.public_dependency.length; ++i)
                        writer.uint32(/* id 10, wireType 0 =*/80).int32(message.public_dependency[i]);
                if (message.weak_dependency != null && message.weak_dependency.length)
                    for (var i = 0; i < message.weak_dependency.length; ++i)
                        writer.uint32(/* id 11, wireType 0 =*/88).int32(message.weak_dependency[i]);
                if (message.syntax != null && message.hasOwnProperty("syntax"))
                    writer.uint32(/* id 12, wireType 2 =*/98).string(message.syntax);
                return writer;
            };

            /**
             * Encodes the specified FileDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {google.protobuf.IFileDescriptorProto} message FileDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FileDescriptorProto();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        message["package"] = reader.string();
                        break;
                    case 3:
                        if (!(message.dependency && message.dependency.length))
                            message.dependency = [];
                        message.dependency.push(reader.string());
                        break;
                    case 10:
                        if (!(message.public_dependency && message.public_dependency.length))
                            message.public_dependency = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.public_dependency.push(reader.int32());
                        } else
                            message.public_dependency.push(reader.int32());
                        break;
                    case 11:
                        if (!(message.weak_dependency && message.weak_dependency.length))
                            message.weak_dependency = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.weak_dependency.push(reader.int32());
                        } else
                            message.weak_dependency.push(reader.int32());
                        break;
                    case 4:
                        if (!(message.message_type && message.message_type.length))
                            message.message_type = [];
                        message.message_type.push($root.google.protobuf.DescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 5:
                        if (!(message.enum_type && message.enum_type.length))
                            message.enum_type = [];
                        message.enum_type.push($root.google.protobuf.EnumDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 6:
                        if (!(message.service && message.service.length))
                            message.service = [];
                        message.service.push($root.google.protobuf.ServiceDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 7:
                        if (!(message.extension && message.extension.length))
                            message.extension = [];
                        message.extension.push($root.google.protobuf.FieldDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 8:
                        message.options = $root.google.protobuf.FileOptions.decode(reader, reader.uint32());
                        break;
                    case 9:
                        message.source_code_info = $root.google.protobuf.SourceCodeInfo.decode(reader, reader.uint32());
                        break;
                    case 12:
                        message.syntax = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FileDescriptorProto message.
             * @function verify
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FileDescriptorProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message["package"] != null && message.hasOwnProperty("package"))
                    if (!$util.isString(message["package"]))
                        return "package: string expected";
                if (message.dependency != null && message.hasOwnProperty("dependency")) {
                    if (!Array.isArray(message.dependency))
                        return "dependency: array expected";
                    for (var i = 0; i < message.dependency.length; ++i)
                        if (!$util.isString(message.dependency[i]))
                            return "dependency: string[] expected";
                }
                if (message.public_dependency != null && message.hasOwnProperty("public_dependency")) {
                    if (!Array.isArray(message.public_dependency))
                        return "public_dependency: array expected";
                    for (var i = 0; i < message.public_dependency.length; ++i)
                        if (!$util.isInteger(message.public_dependency[i]))
                            return "public_dependency: integer[] expected";
                }
                if (message.weak_dependency != null && message.hasOwnProperty("weak_dependency")) {
                    if (!Array.isArray(message.weak_dependency))
                        return "weak_dependency: array expected";
                    for (var i = 0; i < message.weak_dependency.length; ++i)
                        if (!$util.isInteger(message.weak_dependency[i]))
                            return "weak_dependency: integer[] expected";
                }
                if (message.message_type != null && message.hasOwnProperty("message_type")) {
                    if (!Array.isArray(message.message_type))
                        return "message_type: array expected";
                    for (var i = 0; i < message.message_type.length; ++i) {
                        var error = $root.google.protobuf.DescriptorProto.verify(message.message_type[i]);
                        if (error)
                            return "message_type." + error;
                    }
                }
                if (message.enum_type != null && message.hasOwnProperty("enum_type")) {
                    if (!Array.isArray(message.enum_type))
                        return "enum_type: array expected";
                    for (var i = 0; i < message.enum_type.length; ++i) {
                        var error = $root.google.protobuf.EnumDescriptorProto.verify(message.enum_type[i]);
                        if (error)
                            return "enum_type." + error;
                    }
                }
                if (message.service != null && message.hasOwnProperty("service")) {
                    if (!Array.isArray(message.service))
                        return "service: array expected";
                    for (var i = 0; i < message.service.length; ++i) {
                        var error = $root.google.protobuf.ServiceDescriptorProto.verify(message.service[i]);
                        if (error)
                            return "service." + error;
                    }
                }
                if (message.extension != null && message.hasOwnProperty("extension")) {
                    if (!Array.isArray(message.extension))
                        return "extension: array expected";
                    for (var i = 0; i < message.extension.length; ++i) {
                        var error = $root.google.protobuf.FieldDescriptorProto.verify(message.extension[i]);
                        if (error)
                            return "extension." + error;
                    }
                }
                if (message.options != null && message.hasOwnProperty("options")) {
                    var error = $root.google.protobuf.FileOptions.verify(message.options);
                    if (error)
                        return "options." + error;
                }
                if (message.source_code_info != null && message.hasOwnProperty("source_code_info")) {
                    var error = $root.google.protobuf.SourceCodeInfo.verify(message.source_code_info);
                    if (error)
                        return "source_code_info." + error;
                }
                if (message.syntax != null && message.hasOwnProperty("syntax"))
                    if (!$util.isString(message.syntax))
                        return "syntax: string expected";
                return null;
            };

            /**
             * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto
             */
            FileDescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.FileDescriptorProto)
                    return object;
                var message = new $root.google.protobuf.FileDescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object["package"] != null)
                    message["package"] = String(object["package"]);
                if (object.dependency) {
                    if (!Array.isArray(object.dependency))
                        throw TypeError(".google.protobuf.FileDescriptorProto.dependency: array expected");
                    message.dependency = [];
                    for (var i = 0; i < object.dependency.length; ++i)
                        message.dependency[i] = String(object.dependency[i]);
                }
                if (object.public_dependency) {
                    if (!Array.isArray(object.public_dependency))
                        throw TypeError(".google.protobuf.FileDescriptorProto.public_dependency: array expected");
                    message.public_dependency = [];
                    for (var i = 0; i < object.public_dependency.length; ++i)
                        message.public_dependency[i] = object.public_dependency[i] | 0;
                }
                if (object.weak_dependency) {
                    if (!Array.isArray(object.weak_dependency))
                        throw TypeError(".google.protobuf.FileDescriptorProto.weak_dependency: array expected");
                    message.weak_dependency = [];
                    for (var i = 0; i < object.weak_dependency.length; ++i)
                        message.weak_dependency[i] = object.weak_dependency[i] | 0;
                }
                if (object.message_type) {
                    if (!Array.isArray(object.message_type))
                        throw TypeError(".google.protobuf.FileDescriptorProto.message_type: array expected");
                    message.message_type = [];
                    for (var i = 0; i < object.message_type.length; ++i) {
                        if (typeof object.message_type[i] !== "object")
                            throw TypeError(".google.protobuf.FileDescriptorProto.message_type: object expected");
                        message.message_type[i] = $root.google.protobuf.DescriptorProto.fromObject(object.message_type[i]);
                    }
                }
                if (object.enum_type) {
                    if (!Array.isArray(object.enum_type))
                        throw TypeError(".google.protobuf.FileDescriptorProto.enum_type: array expected");
                    message.enum_type = [];
                    for (var i = 0; i < object.enum_type.length; ++i) {
                        if (typeof object.enum_type[i] !== "object")
                            throw TypeError(".google.protobuf.FileDescriptorProto.enum_type: object expected");
                        message.enum_type[i] = $root.google.protobuf.EnumDescriptorProto.fromObject(object.enum_type[i]);
                    }
                }
                if (object.service) {
                    if (!Array.isArray(object.service))
                        throw TypeError(".google.protobuf.FileDescriptorProto.service: array expected");
                    message.service = [];
                    for (var i = 0; i < object.service.length; ++i) {
                        if (typeof object.service[i] !== "object")
                            throw TypeError(".google.protobuf.FileDescriptorProto.service: object expected");
                        message.service[i] = $root.google.protobuf.ServiceDescriptorProto.fromObject(object.service[i]);
                    }
                }
                if (object.extension) {
                    if (!Array.isArray(object.extension))
                        throw TypeError(".google.protobuf.FileDescriptorProto.extension: array expected");
                    message.extension = [];
                    for (var i = 0; i < object.extension.length; ++i) {
                        if (typeof object.extension[i] !== "object")
                            throw TypeError(".google.protobuf.FileDescriptorProto.extension: object expected");
                        message.extension[i] = $root.google.protobuf.FieldDescriptorProto.fromObject(object.extension[i]);
                    }
                }
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.FileDescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.FileOptions.fromObject(object.options);
                }
                if (object.source_code_info != null) {
                    if (typeof object.source_code_info !== "object")
                        throw TypeError(".google.protobuf.FileDescriptorProto.source_code_info: object expected");
                    message.source_code_info = $root.google.protobuf.SourceCodeInfo.fromObject(object.source_code_info);
                }
                if (object.syntax != null)
                    message.syntax = String(object.syntax);
                return message;
            };

            /**
             * Creates a plain object from a FileDescriptorProto message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {google.protobuf.FileDescriptorProto} message FileDescriptorProto
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FileDescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.dependency = [];
                    object.message_type = [];
                    object.enum_type = [];
                    object.service = [];
                    object.extension = [];
                    object.public_dependency = [];
                    object.weak_dependency = [];
                }
                if (options.defaults) {
                    object.name = "";
                    object["package"] = "";
                    object.options = null;
                    object.source_code_info = null;
                    object.syntax = "";
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message["package"] != null && message.hasOwnProperty("package"))
                    object["package"] = message["package"];
                if (message.dependency && message.dependency.length) {
                    object.dependency = [];
                    for (var j = 0; j < message.dependency.length; ++j)
                        object.dependency[j] = message.dependency[j];
                }
                if (message.message_type && message.message_type.length) {
                    object.message_type = [];
                    for (var j = 0; j < message.message_type.length; ++j)
                        object.message_type[j] = $root.google.protobuf.DescriptorProto.toObject(message.message_type[j], options);
                }
                if (message.enum_type && message.enum_type.length) {
                    object.enum_type = [];
                    for (var j = 0; j < message.enum_type.length; ++j)
                        object.enum_type[j] = $root.google.protobuf.EnumDescriptorProto.toObject(message.enum_type[j], options);
                }
                if (message.service && message.service.length) {
                    object.service = [];
                    for (var j = 0; j < message.service.length; ++j)
                        object.service[j] = $root.google.protobuf.ServiceDescriptorProto.toObject(message.service[j], options);
                }
                if (message.extension && message.extension.length) {
                    object.extension = [];
                    for (var j = 0; j < message.extension.length; ++j)
                        object.extension[j] = $root.google.protobuf.FieldDescriptorProto.toObject(message.extension[j], options);
                }
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.FileOptions.toObject(message.options, options);
                if (message.source_code_info != null && message.hasOwnProperty("source_code_info"))
                    object.source_code_info = $root.google.protobuf.SourceCodeInfo.toObject(message.source_code_info, options);
                if (message.public_dependency && message.public_dependency.length) {
                    object.public_dependency = [];
                    for (var j = 0; j < message.public_dependency.length; ++j)
                        object.public_dependency[j] = message.public_dependency[j];
                }
                if (message.weak_dependency && message.weak_dependency.length) {
                    object.weak_dependency = [];
                    for (var j = 0; j < message.weak_dependency.length; ++j)
                        object.weak_dependency[j] = message.weak_dependency[j];
                }
                if (message.syntax != null && message.hasOwnProperty("syntax"))
                    object.syntax = message.syntax;
                return object;
            };

            /**
             * Converts this FileDescriptorProto to JSON.
             * @function toJSON
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FileDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return FileDescriptorProto;
        })();

        protobuf.DescriptorProto = (function() {

            /**
             * Properties of a DescriptorProto.
             * @memberof google.protobuf
             * @interface IDescriptorProto
             * @property {string|null} [name] DescriptorProto name
             * @property {Array.<google.protobuf.IFieldDescriptorProto>|null} [field] DescriptorProto field
             * @property {Array.<google.protobuf.IFieldDescriptorProto>|null} [extension] DescriptorProto extension
             * @property {Array.<google.protobuf.IDescriptorProto>|null} [nested_type] DescriptorProto nested_type
             * @property {Array.<google.protobuf.IEnumDescriptorProto>|null} [enum_type] DescriptorProto enum_type
             * @property {Array.<google.protobuf.DescriptorProto.IExtensionRange>|null} [extension_range] DescriptorProto extension_range
             * @property {Array.<google.protobuf.IOneofDescriptorProto>|null} [oneof_decl] DescriptorProto oneof_decl
             * @property {google.protobuf.IMessageOptions|null} [options] DescriptorProto options
             * @property {Array.<google.protobuf.DescriptorProto.IReservedRange>|null} [reserved_range] DescriptorProto reserved_range
             * @property {Array.<string>|null} [reserved_name] DescriptorProto reserved_name
             */

            /**
             * Constructs a new DescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents a DescriptorProto.
             * @implements IDescriptorProto
             * @constructor
             * @param {google.protobuf.IDescriptorProto=} [properties] Properties to set
             */
            function DescriptorProto(properties) {
                this.field = [];
                this.extension = [];
                this.nested_type = [];
                this.enum_type = [];
                this.extension_range = [];
                this.oneof_decl = [];
                this.reserved_range = [];
                this.reserved_name = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.name = "";

            /**
             * DescriptorProto field.
             * @member {Array.<google.protobuf.IFieldDescriptorProto>} field
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.field = $util.emptyArray;

            /**
             * DescriptorProto extension.
             * @member {Array.<google.protobuf.IFieldDescriptorProto>} extension
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.extension = $util.emptyArray;

            /**
             * DescriptorProto nested_type.
             * @member {Array.<google.protobuf.IDescriptorProto>} nested_type
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.nested_type = $util.emptyArray;

            /**
             * DescriptorProto enum_type.
             * @member {Array.<google.protobuf.IEnumDescriptorProto>} enum_type
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.enum_type = $util.emptyArray;

            /**
             * DescriptorProto extension_range.
             * @member {Array.<google.protobuf.DescriptorProto.IExtensionRange>} extension_range
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.extension_range = $util.emptyArray;

            /**
             * DescriptorProto oneof_decl.
             * @member {Array.<google.protobuf.IOneofDescriptorProto>} oneof_decl
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.oneof_decl = $util.emptyArray;

            /**
             * DescriptorProto options.
             * @member {google.protobuf.IMessageOptions|null|undefined} options
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.options = null;

            /**
             * DescriptorProto reserved_range.
             * @member {Array.<google.protobuf.DescriptorProto.IReservedRange>} reserved_range
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.reserved_range = $util.emptyArray;

            /**
             * DescriptorProto reserved_name.
             * @member {Array.<string>} reserved_name
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.reserved_name = $util.emptyArray;

            /**
             * Creates a new DescriptorProto instance using the specified properties.
             * @function create
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {google.protobuf.IDescriptorProto=} [properties] Properties to set
             * @returns {google.protobuf.DescriptorProto} DescriptorProto instance
             */
            DescriptorProto.create = function create(properties) {
                return new DescriptorProto(properties);
            };

            /**
             * Encodes the specified DescriptorProto message. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {google.protobuf.IDescriptorProto} message DescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.field != null && message.field.length)
                    for (var i = 0; i < message.field.length; ++i)
                        $root.google.protobuf.FieldDescriptorProto.encode(message.field[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.nested_type != null && message.nested_type.length)
                    for (var i = 0; i < message.nested_type.length; ++i)
                        $root.google.protobuf.DescriptorProto.encode(message.nested_type[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.enum_type != null && message.enum_type.length)
                    for (var i = 0; i < message.enum_type.length; ++i)
                        $root.google.protobuf.EnumDescriptorProto.encode(message.enum_type[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.extension_range != null && message.extension_range.length)
                    for (var i = 0; i < message.extension_range.length; ++i)
                        $root.google.protobuf.DescriptorProto.ExtensionRange.encode(message.extension_range[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.extension != null && message.extension.length)
                    for (var i = 0; i < message.extension.length; ++i)
                        $root.google.protobuf.FieldDescriptorProto.encode(message.extension[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                if (message.options != null && message.hasOwnProperty("options"))
                    $root.google.protobuf.MessageOptions.encode(message.options, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                if (message.oneof_decl != null && message.oneof_decl.length)
                    for (var i = 0; i < message.oneof_decl.length; ++i)
                        $root.google.protobuf.OneofDescriptorProto.encode(message.oneof_decl[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                if (message.reserved_range != null && message.reserved_range.length)
                    for (var i = 0; i < message.reserved_range.length; ++i)
                        $root.google.protobuf.DescriptorProto.ReservedRange.encode(message.reserved_range[i], writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                if (message.reserved_name != null && message.reserved_name.length)
                    for (var i = 0; i < message.reserved_name.length; ++i)
                        writer.uint32(/* id 10, wireType 2 =*/82).string(message.reserved_name[i]);
                return writer;
            };

            /**
             * Encodes the specified DescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {google.protobuf.IDescriptorProto} message DescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.DescriptorProto} DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DescriptorProto();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        if (!(message.field && message.field.length))
                            message.field = [];
                        message.field.push($root.google.protobuf.FieldDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 6:
                        if (!(message.extension && message.extension.length))
                            message.extension = [];
                        message.extension.push($root.google.protobuf.FieldDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 3:
                        if (!(message.nested_type && message.nested_type.length))
                            message.nested_type = [];
                        message.nested_type.push($root.google.protobuf.DescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 4:
                        if (!(message.enum_type && message.enum_type.length))
                            message.enum_type = [];
                        message.enum_type.push($root.google.protobuf.EnumDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 5:
                        if (!(message.extension_range && message.extension_range.length))
                            message.extension_range = [];
                        message.extension_range.push($root.google.protobuf.DescriptorProto.ExtensionRange.decode(reader, reader.uint32()));
                        break;
                    case 8:
                        if (!(message.oneof_decl && message.oneof_decl.length))
                            message.oneof_decl = [];
                        message.oneof_decl.push($root.google.protobuf.OneofDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 7:
                        message.options = $root.google.protobuf.MessageOptions.decode(reader, reader.uint32());
                        break;
                    case 9:
                        if (!(message.reserved_range && message.reserved_range.length))
                            message.reserved_range = [];
                        message.reserved_range.push($root.google.protobuf.DescriptorProto.ReservedRange.decode(reader, reader.uint32()));
                        break;
                    case 10:
                        if (!(message.reserved_name && message.reserved_name.length))
                            message.reserved_name = [];
                        message.reserved_name.push(reader.string());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.DescriptorProto} DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DescriptorProto message.
             * @function verify
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DescriptorProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.field != null && message.hasOwnProperty("field")) {
                    if (!Array.isArray(message.field))
                        return "field: array expected";
                    for (var i = 0; i < message.field.length; ++i) {
                        var error = $root.google.protobuf.FieldDescriptorProto.verify(message.field[i]);
                        if (error)
                            return "field." + error;
                    }
                }
                if (message.extension != null && message.hasOwnProperty("extension")) {
                    if (!Array.isArray(message.extension))
                        return "extension: array expected";
                    for (var i = 0; i < message.extension.length; ++i) {
                        var error = $root.google.protobuf.FieldDescriptorProto.verify(message.extension[i]);
                        if (error)
                            return "extension." + error;
                    }
                }
                if (message.nested_type != null && message.hasOwnProperty("nested_type")) {
                    if (!Array.isArray(message.nested_type))
                        return "nested_type: array expected";
                    for (var i = 0; i < message.nested_type.length; ++i) {
                        var error = $root.google.protobuf.DescriptorProto.verify(message.nested_type[i]);
                        if (error)
                            return "nested_type." + error;
                    }
                }
                if (message.enum_type != null && message.hasOwnProperty("enum_type")) {
                    if (!Array.isArray(message.enum_type))
                        return "enum_type: array expected";
                    for (var i = 0; i < message.enum_type.length; ++i) {
                        var error = $root.google.protobuf.EnumDescriptorProto.verify(message.enum_type[i]);
                        if (error)
                            return "enum_type." + error;
                    }
                }
                if (message.extension_range != null && message.hasOwnProperty("extension_range")) {
                    if (!Array.isArray(message.extension_range))
                        return "extension_range: array expected";
                    for (var i = 0; i < message.extension_range.length; ++i) {
                        var error = $root.google.protobuf.DescriptorProto.ExtensionRange.verify(message.extension_range[i]);
                        if (error)
                            return "extension_range." + error;
                    }
                }
                if (message.oneof_decl != null && message.hasOwnProperty("oneof_decl")) {
                    if (!Array.isArray(message.oneof_decl))
                        return "oneof_decl: array expected";
                    for (var i = 0; i < message.oneof_decl.length; ++i) {
                        var error = $root.google.protobuf.OneofDescriptorProto.verify(message.oneof_decl[i]);
                        if (error)
                            return "oneof_decl." + error;
                    }
                }
                if (message.options != null && message.hasOwnProperty("options")) {
                    var error = $root.google.protobuf.MessageOptions.verify(message.options);
                    if (error)
                        return "options." + error;
                }
                if (message.reserved_range != null && message.hasOwnProperty("reserved_range")) {
                    if (!Array.isArray(message.reserved_range))
                        return "reserved_range: array expected";
                    for (var i = 0; i < message.reserved_range.length; ++i) {
                        var error = $root.google.protobuf.DescriptorProto.ReservedRange.verify(message.reserved_range[i]);
                        if (error)
                            return "reserved_range." + error;
                    }
                }
                if (message.reserved_name != null && message.hasOwnProperty("reserved_name")) {
                    if (!Array.isArray(message.reserved_name))
                        return "reserved_name: array expected";
                    for (var i = 0; i < message.reserved_name.length; ++i)
                        if (!$util.isString(message.reserved_name[i]))
                            return "reserved_name: string[] expected";
                }
                return null;
            };

            /**
             * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.DescriptorProto} DescriptorProto
             */
            DescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.DescriptorProto)
                    return object;
                var message = new $root.google.protobuf.DescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.field) {
                    if (!Array.isArray(object.field))
                        throw TypeError(".google.protobuf.DescriptorProto.field: array expected");
                    message.field = [];
                    for (var i = 0; i < object.field.length; ++i) {
                        if (typeof object.field[i] !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.field: object expected");
                        message.field[i] = $root.google.protobuf.FieldDescriptorProto.fromObject(object.field[i]);
                    }
                }
                if (object.extension) {
                    if (!Array.isArray(object.extension))
                        throw TypeError(".google.protobuf.DescriptorProto.extension: array expected");
                    message.extension = [];
                    for (var i = 0; i < object.extension.length; ++i) {
                        if (typeof object.extension[i] !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.extension: object expected");
                        message.extension[i] = $root.google.protobuf.FieldDescriptorProto.fromObject(object.extension[i]);
                    }
                }
                if (object.nested_type) {
                    if (!Array.isArray(object.nested_type))
                        throw TypeError(".google.protobuf.DescriptorProto.nested_type: array expected");
                    message.nested_type = [];
                    for (var i = 0; i < object.nested_type.length; ++i) {
                        if (typeof object.nested_type[i] !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.nested_type: object expected");
                        message.nested_type[i] = $root.google.protobuf.DescriptorProto.fromObject(object.nested_type[i]);
                    }
                }
                if (object.enum_type) {
                    if (!Array.isArray(object.enum_type))
                        throw TypeError(".google.protobuf.DescriptorProto.enum_type: array expected");
                    message.enum_type = [];
                    for (var i = 0; i < object.enum_type.length; ++i) {
                        if (typeof object.enum_type[i] !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.enum_type: object expected");
                        message.enum_type[i] = $root.google.protobuf.EnumDescriptorProto.fromObject(object.enum_type[i]);
                    }
                }
                if (object.extension_range) {
                    if (!Array.isArray(object.extension_range))
                        throw TypeError(".google.protobuf.DescriptorProto.extension_range: array expected");
                    message.extension_range = [];
                    for (var i = 0; i < object.extension_range.length; ++i) {
                        if (typeof object.extension_range[i] !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.extension_range: object expected");
                        message.extension_range[i] = $root.google.protobuf.DescriptorProto.ExtensionRange.fromObject(object.extension_range[i]);
                    }
                }
                if (object.oneof_decl) {
                    if (!Array.isArray(object.oneof_decl))
                        throw TypeError(".google.protobuf.DescriptorProto.oneof_decl: array expected");
                    message.oneof_decl = [];
                    for (var i = 0; i < object.oneof_decl.length; ++i) {
                        if (typeof object.oneof_decl[i] !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.oneof_decl: object expected");
                        message.oneof_decl[i] = $root.google.protobuf.OneofDescriptorProto.fromObject(object.oneof_decl[i]);
                    }
                }
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.DescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.MessageOptions.fromObject(object.options);
                }
                if (object.reserved_range) {
                    if (!Array.isArray(object.reserved_range))
                        throw TypeError(".google.protobuf.DescriptorProto.reserved_range: array expected");
                    message.reserved_range = [];
                    for (var i = 0; i < object.reserved_range.length; ++i) {
                        if (typeof object.reserved_range[i] !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.reserved_range: object expected");
                        message.reserved_range[i] = $root.google.protobuf.DescriptorProto.ReservedRange.fromObject(object.reserved_range[i]);
                    }
                }
                if (object.reserved_name) {
                    if (!Array.isArray(object.reserved_name))
                        throw TypeError(".google.protobuf.DescriptorProto.reserved_name: array expected");
                    message.reserved_name = [];
                    for (var i = 0; i < object.reserved_name.length; ++i)
                        message.reserved_name[i] = String(object.reserved_name[i]);
                }
                return message;
            };

            /**
             * Creates a plain object from a DescriptorProto message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {google.protobuf.DescriptorProto} message DescriptorProto
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.field = [];
                    object.nested_type = [];
                    object.enum_type = [];
                    object.extension_range = [];
                    object.extension = [];
                    object.oneof_decl = [];
                    object.reserved_range = [];
                    object.reserved_name = [];
                }
                if (options.defaults) {
                    object.name = "";
                    object.options = null;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.field && message.field.length) {
                    object.field = [];
                    for (var j = 0; j < message.field.length; ++j)
                        object.field[j] = $root.google.protobuf.FieldDescriptorProto.toObject(message.field[j], options);
                }
                if (message.nested_type && message.nested_type.length) {
                    object.nested_type = [];
                    for (var j = 0; j < message.nested_type.length; ++j)
                        object.nested_type[j] = $root.google.protobuf.DescriptorProto.toObject(message.nested_type[j], options);
                }
                if (message.enum_type && message.enum_type.length) {
                    object.enum_type = [];
                    for (var j = 0; j < message.enum_type.length; ++j)
                        object.enum_type[j] = $root.google.protobuf.EnumDescriptorProto.toObject(message.enum_type[j], options);
                }
                if (message.extension_range && message.extension_range.length) {
                    object.extension_range = [];
                    for (var j = 0; j < message.extension_range.length; ++j)
                        object.extension_range[j] = $root.google.protobuf.DescriptorProto.ExtensionRange.toObject(message.extension_range[j], options);
                }
                if (message.extension && message.extension.length) {
                    object.extension = [];
                    for (var j = 0; j < message.extension.length; ++j)
                        object.extension[j] = $root.google.protobuf.FieldDescriptorProto.toObject(message.extension[j], options);
                }
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.MessageOptions.toObject(message.options, options);
                if (message.oneof_decl && message.oneof_decl.length) {
                    object.oneof_decl = [];
                    for (var j = 0; j < message.oneof_decl.length; ++j)
                        object.oneof_decl[j] = $root.google.protobuf.OneofDescriptorProto.toObject(message.oneof_decl[j], options);
                }
                if (message.reserved_range && message.reserved_range.length) {
                    object.reserved_range = [];
                    for (var j = 0; j < message.reserved_range.length; ++j)
                        object.reserved_range[j] = $root.google.protobuf.DescriptorProto.ReservedRange.toObject(message.reserved_range[j], options);
                }
                if (message.reserved_name && message.reserved_name.length) {
                    object.reserved_name = [];
                    for (var j = 0; j < message.reserved_name.length; ++j)
                        object.reserved_name[j] = message.reserved_name[j];
                }
                return object;
            };

            /**
             * Converts this DescriptorProto to JSON.
             * @function toJSON
             * @memberof google.protobuf.DescriptorProto
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            DescriptorProto.ExtensionRange = (function() {

                /**
                 * Properties of an ExtensionRange.
                 * @memberof google.protobuf.DescriptorProto
                 * @interface IExtensionRange
                 * @property {number|null} [start] ExtensionRange start
                 * @property {number|null} [end] ExtensionRange end
                 */

                /**
                 * Constructs a new ExtensionRange.
                 * @memberof google.protobuf.DescriptorProto
                 * @classdesc Represents an ExtensionRange.
                 * @implements IExtensionRange
                 * @constructor
                 * @param {google.protobuf.DescriptorProto.IExtensionRange=} [properties] Properties to set
                 */
                function ExtensionRange(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ExtensionRange start.
                 * @member {number} start
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @instance
                 */
                ExtensionRange.prototype.start = 0;

                /**
                 * ExtensionRange end.
                 * @member {number} end
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @instance
                 */
                ExtensionRange.prototype.end = 0;

                /**
                 * Creates a new ExtensionRange instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {google.protobuf.DescriptorProto.IExtensionRange=} [properties] Properties to set
                 * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange instance
                 */
                ExtensionRange.create = function create(properties) {
                    return new ExtensionRange(properties);
                };

                /**
                 * Encodes the specified ExtensionRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {google.protobuf.DescriptorProto.IExtensionRange} message ExtensionRange message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ExtensionRange.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.start != null && message.hasOwnProperty("start"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.start);
                    if (message.end != null && message.hasOwnProperty("end"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.end);
                    return writer;
                };

                /**
                 * Encodes the specified ExtensionRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {google.protobuf.DescriptorProto.IExtensionRange} message ExtensionRange message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ExtensionRange.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ExtensionRange.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DescriptorProto.ExtensionRange();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.start = reader.int32();
                            break;
                        case 2:
                            message.end = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ExtensionRange.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an ExtensionRange message.
                 * @function verify
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ExtensionRange.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.start != null && message.hasOwnProperty("start"))
                        if (!$util.isInteger(message.start))
                            return "start: integer expected";
                    if (message.end != null && message.hasOwnProperty("end"))
                        if (!$util.isInteger(message.end))
                            return "end: integer expected";
                    return null;
                };

                /**
                 * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange
                 */
                ExtensionRange.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.DescriptorProto.ExtensionRange)
                        return object;
                    var message = new $root.google.protobuf.DescriptorProto.ExtensionRange();
                    if (object.start != null)
                        message.start = object.start | 0;
                    if (object.end != null)
                        message.end = object.end | 0;
                    return message;
                };

                /**
                 * Creates a plain object from an ExtensionRange message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {google.protobuf.DescriptorProto.ExtensionRange} message ExtensionRange
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ExtensionRange.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.start = 0;
                        object.end = 0;
                    }
                    if (message.start != null && message.hasOwnProperty("start"))
                        object.start = message.start;
                    if (message.end != null && message.hasOwnProperty("end"))
                        object.end = message.end;
                    return object;
                };

                /**
                 * Converts this ExtensionRange to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ExtensionRange.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return ExtensionRange;
            })();

            DescriptorProto.ReservedRange = (function() {

                /**
                 * Properties of a ReservedRange.
                 * @memberof google.protobuf.DescriptorProto
                 * @interface IReservedRange
                 * @property {number|null} [start] ReservedRange start
                 * @property {number|null} [end] ReservedRange end
                 */

                /**
                 * Constructs a new ReservedRange.
                 * @memberof google.protobuf.DescriptorProto
                 * @classdesc Represents a ReservedRange.
                 * @implements IReservedRange
                 * @constructor
                 * @param {google.protobuf.DescriptorProto.IReservedRange=} [properties] Properties to set
                 */
                function ReservedRange(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ReservedRange start.
                 * @member {number} start
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @instance
                 */
                ReservedRange.prototype.start = 0;

                /**
                 * ReservedRange end.
                 * @member {number} end
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @instance
                 */
                ReservedRange.prototype.end = 0;

                /**
                 * Creates a new ReservedRange instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @static
                 * @param {google.protobuf.DescriptorProto.IReservedRange=} [properties] Properties to set
                 * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange instance
                 */
                ReservedRange.create = function create(properties) {
                    return new ReservedRange(properties);
                };

                /**
                 * Encodes the specified ReservedRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @static
                 * @param {google.protobuf.DescriptorProto.IReservedRange} message ReservedRange message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ReservedRange.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.start != null && message.hasOwnProperty("start"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.start);
                    if (message.end != null && message.hasOwnProperty("end"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.end);
                    return writer;
                };

                /**
                 * Encodes the specified ReservedRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @static
                 * @param {google.protobuf.DescriptorProto.IReservedRange} message ReservedRange message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ReservedRange.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ReservedRange.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DescriptorProto.ReservedRange();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.start = reader.int32();
                            break;
                        case 2:
                            message.end = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ReservedRange.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ReservedRange message.
                 * @function verify
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ReservedRange.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.start != null && message.hasOwnProperty("start"))
                        if (!$util.isInteger(message.start))
                            return "start: integer expected";
                    if (message.end != null && message.hasOwnProperty("end"))
                        if (!$util.isInteger(message.end))
                            return "end: integer expected";
                    return null;
                };

                /**
                 * Creates a ReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange
                 */
                ReservedRange.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.DescriptorProto.ReservedRange)
                        return object;
                    var message = new $root.google.protobuf.DescriptorProto.ReservedRange();
                    if (object.start != null)
                        message.start = object.start | 0;
                    if (object.end != null)
                        message.end = object.end | 0;
                    return message;
                };

                /**
                 * Creates a plain object from a ReservedRange message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @static
                 * @param {google.protobuf.DescriptorProto.ReservedRange} message ReservedRange
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ReservedRange.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.start = 0;
                        object.end = 0;
                    }
                    if (message.start != null && message.hasOwnProperty("start"))
                        object.start = message.start;
                    if (message.end != null && message.hasOwnProperty("end"))
                        object.end = message.end;
                    return object;
                };

                /**
                 * Converts this ReservedRange to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ReservedRange.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return ReservedRange;
            })();

            return DescriptorProto;
        })();

        protobuf.FieldDescriptorProto = (function() {

            /**
             * Properties of a FieldDescriptorProto.
             * @memberof google.protobuf
             * @interface IFieldDescriptorProto
             * @property {string|null} [name] FieldDescriptorProto name
             * @property {number|null} [number] FieldDescriptorProto number
             * @property {google.protobuf.FieldDescriptorProto.Label|null} [label] FieldDescriptorProto label
             * @property {google.protobuf.FieldDescriptorProto.Type|null} [type] FieldDescriptorProto type
             * @property {string|null} [type_name] FieldDescriptorProto type_name
             * @property {string|null} [extendee] FieldDescriptorProto extendee
             * @property {string|null} [default_value] FieldDescriptorProto default_value
             * @property {number|null} [oneof_index] FieldDescriptorProto oneof_index
             * @property {string|null} [json_name] FieldDescriptorProto json_name
             * @property {google.protobuf.IFieldOptions|null} [options] FieldDescriptorProto options
             */

            /**
             * Constructs a new FieldDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents a FieldDescriptorProto.
             * @implements IFieldDescriptorProto
             * @constructor
             * @param {google.protobuf.IFieldDescriptorProto=} [properties] Properties to set
             */
            function FieldDescriptorProto(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FieldDescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.name = "";

            /**
             * FieldDescriptorProto number.
             * @member {number} number
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.number = 0;

            /**
             * FieldDescriptorProto label.
             * @member {google.protobuf.FieldDescriptorProto.Label} label
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.label = 1;

            /**
             * FieldDescriptorProto type.
             * @member {google.protobuf.FieldDescriptorProto.Type} type
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.type = 1;

            /**
             * FieldDescriptorProto type_name.
             * @member {string} type_name
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.type_name = "";

            /**
             * FieldDescriptorProto extendee.
             * @member {string} extendee
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.extendee = "";

            /**
             * FieldDescriptorProto default_value.
             * @member {string} default_value
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.default_value = "";

            /**
             * FieldDescriptorProto oneof_index.
             * @member {number} oneof_index
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.oneof_index = 0;

            /**
             * FieldDescriptorProto json_name.
             * @member {string} json_name
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.json_name = "";

            /**
             * FieldDescriptorProto options.
             * @member {google.protobuf.IFieldOptions|null|undefined} options
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.options = null;

            /**
             * Creates a new FieldDescriptorProto instance using the specified properties.
             * @function create
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {google.protobuf.IFieldDescriptorProto=} [properties] Properties to set
             * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto instance
             */
            FieldDescriptorProto.create = function create(properties) {
                return new FieldDescriptorProto(properties);
            };

            /**
             * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {google.protobuf.IFieldDescriptorProto} message FieldDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FieldDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.extendee != null && message.hasOwnProperty("extendee"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.extendee);
                if (message.number != null && message.hasOwnProperty("number"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.number);
                if (message.label != null && message.hasOwnProperty("label"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.label);
                if (message.type != null && message.hasOwnProperty("type"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.type);
                if (message.type_name != null && message.hasOwnProperty("type_name"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.type_name);
                if (message.default_value != null && message.hasOwnProperty("default_value"))
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.default_value);
                if (message.options != null && message.hasOwnProperty("options"))
                    $root.google.protobuf.FieldOptions.encode(message.options, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                if (message.oneof_index != null && message.hasOwnProperty("oneof_index"))
                    writer.uint32(/* id 9, wireType 0 =*/72).int32(message.oneof_index);
                if (message.json_name != null && message.hasOwnProperty("json_name"))
                    writer.uint32(/* id 10, wireType 2 =*/82).string(message.json_name);
                return writer;
            };

            /**
             * Encodes the specified FieldDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {google.protobuf.IFieldDescriptorProto} message FieldDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FieldDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FieldDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FieldDescriptorProto();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 3:
                        message.number = reader.int32();
                        break;
                    case 4:
                        message.label = reader.int32();
                        break;
                    case 5:
                        message.type = reader.int32();
                        break;
                    case 6:
                        message.type_name = reader.string();
                        break;
                    case 2:
                        message.extendee = reader.string();
                        break;
                    case 7:
                        message.default_value = reader.string();
                        break;
                    case 9:
                        message.oneof_index = reader.int32();
                        break;
                    case 10:
                        message.json_name = reader.string();
                        break;
                    case 8:
                        message.options = $root.google.protobuf.FieldOptions.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FieldDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FieldDescriptorProto message.
             * @function verify
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FieldDescriptorProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.number != null && message.hasOwnProperty("number"))
                    if (!$util.isInteger(message.number))
                        return "number: integer expected";
                if (message.label != null && message.hasOwnProperty("label"))
                    switch (message.label) {
                    default:
                        return "label: enum value expected";
                    case 1:
                    case 2:
                    case 3:
                        break;
                    }
                if (message.type != null && message.hasOwnProperty("type"))
                    switch (message.type) {
                    default:
                        return "type: enum value expected";
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                    case 10:
                    case 11:
                    case 12:
                    case 13:
                    case 14:
                    case 15:
                    case 16:
                    case 17:
                    case 18:
                        break;
                    }
                if (message.type_name != null && message.hasOwnProperty("type_name"))
                    if (!$util.isString(message.type_name))
                        return "type_name: string expected";
                if (message.extendee != null && message.hasOwnProperty("extendee"))
                    if (!$util.isString(message.extendee))
                        return "extendee: string expected";
                if (message.default_value != null && message.hasOwnProperty("default_value"))
                    if (!$util.isString(message.default_value))
                        return "default_value: string expected";
                if (message.oneof_index != null && message.hasOwnProperty("oneof_index"))
                    if (!$util.isInteger(message.oneof_index))
                        return "oneof_index: integer expected";
                if (message.json_name != null && message.hasOwnProperty("json_name"))
                    if (!$util.isString(message.json_name))
                        return "json_name: string expected";
                if (message.options != null && message.hasOwnProperty("options")) {
                    var error = $root.google.protobuf.FieldOptions.verify(message.options);
                    if (error)
                        return "options." + error;
                }
                return null;
            };

            /**
             * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto
             */
            FieldDescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.FieldDescriptorProto)
                    return object;
                var message = new $root.google.protobuf.FieldDescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.number != null)
                    message.number = object.number | 0;
                switch (object.label) {
                case "LABEL_OPTIONAL":
                case 1:
                    message.label = 1;
                    break;
                case "LABEL_REQUIRED":
                case 2:
                    message.label = 2;
                    break;
                case "LABEL_REPEATED":
                case 3:
                    message.label = 3;
                    break;
                }
                switch (object.type) {
                case "TYPE_DOUBLE":
                case 1:
                    message.type = 1;
                    break;
                case "TYPE_FLOAT":
                case 2:
                    message.type = 2;
                    break;
                case "TYPE_INT64":
                case 3:
                    message.type = 3;
                    break;
                case "TYPE_UINT64":
                case 4:
                    message.type = 4;
                    break;
                case "TYPE_INT32":
                case 5:
                    message.type = 5;
                    break;
                case "TYPE_FIXED64":
                case 6:
                    message.type = 6;
                    break;
                case "TYPE_FIXED32":
                case 7:
                    message.type = 7;
                    break;
                case "TYPE_BOOL":
                case 8:
                    message.type = 8;
                    break;
                case "TYPE_STRING":
                case 9:
                    message.type = 9;
                    break;
                case "TYPE_GROUP":
                case 10:
                    message.type = 10;
                    break;
                case "TYPE_MESSAGE":
                case 11:
                    message.type = 11;
                    break;
                case "TYPE_BYTES":
                case 12:
                    message.type = 12;
                    break;
                case "TYPE_UINT32":
                case 13:
                    message.type = 13;
                    break;
                case "TYPE_ENUM":
                case 14:
                    message.type = 14;
                    break;
                case "TYPE_SFIXED32":
                case 15:
                    message.type = 15;
                    break;
                case "TYPE_SFIXED64":
                case 16:
                    message.type = 16;
                    break;
                case "TYPE_SINT32":
                case 17:
                    message.type = 17;
                    break;
                case "TYPE_SINT64":
                case 18:
                    message.type = 18;
                    break;
                }
                if (object.type_name != null)
                    message.type_name = String(object.type_name);
                if (object.extendee != null)
                    message.extendee = String(object.extendee);
                if (object.default_value != null)
                    message.default_value = String(object.default_value);
                if (object.oneof_index != null)
                    message.oneof_index = object.oneof_index | 0;
                if (object.json_name != null)
                    message.json_name = String(object.json_name);
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.FieldDescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.FieldOptions.fromObject(object.options);
                }
                return message;
            };

            /**
             * Creates a plain object from a FieldDescriptorProto message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {google.protobuf.FieldDescriptorProto} message FieldDescriptorProto
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FieldDescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.name = "";
                    object.extendee = "";
                    object.number = 0;
                    object.label = options.enums === String ? "LABEL_OPTIONAL" : 1;
                    object.type = options.enums === String ? "TYPE_DOUBLE" : 1;
                    object.type_name = "";
                    object.default_value = "";
                    object.options = null;
                    object.oneof_index = 0;
                    object.json_name = "";
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.extendee != null && message.hasOwnProperty("extendee"))
                    object.extendee = message.extendee;
                if (message.number != null && message.hasOwnProperty("number"))
                    object.number = message.number;
                if (message.label != null && message.hasOwnProperty("label"))
                    object.label = options.enums === String ? $root.google.protobuf.FieldDescriptorProto.Label[message.label] : message.label;
                if (message.type != null && message.hasOwnProperty("type"))
                    object.type = options.enums === String ? $root.google.protobuf.FieldDescriptorProto.Type[message.type] : message.type;
                if (message.type_name != null && message.hasOwnProperty("type_name"))
                    object.type_name = message.type_name;
                if (message.default_value != null && message.hasOwnProperty("default_value"))
                    object.default_value = message.default_value;
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.FieldOptions.toObject(message.options, options);
                if (message.oneof_index != null && message.hasOwnProperty("oneof_index"))
                    object.oneof_index = message.oneof_index;
                if (message.json_name != null && message.hasOwnProperty("json_name"))
                    object.json_name = message.json_name;
                return object;
            };

            /**
             * Converts this FieldDescriptorProto to JSON.
             * @function toJSON
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FieldDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Type enum.
             * @name google.protobuf.FieldDescriptorProto.Type
             * @enum {string}
             * @property {number} TYPE_DOUBLE=1 TYPE_DOUBLE value
             * @property {number} TYPE_FLOAT=2 TYPE_FLOAT value
             * @property {number} TYPE_INT64=3 TYPE_INT64 value
             * @property {number} TYPE_UINT64=4 TYPE_UINT64 value
             * @property {number} TYPE_INT32=5 TYPE_INT32 value
             * @property {number} TYPE_FIXED64=6 TYPE_FIXED64 value
             * @property {number} TYPE_FIXED32=7 TYPE_FIXED32 value
             * @property {number} TYPE_BOOL=8 TYPE_BOOL value
             * @property {number} TYPE_STRING=9 TYPE_STRING value
             * @property {number} TYPE_GROUP=10 TYPE_GROUP value
             * @property {number} TYPE_MESSAGE=11 TYPE_MESSAGE value
             * @property {number} TYPE_BYTES=12 TYPE_BYTES value
             * @property {number} TYPE_UINT32=13 TYPE_UINT32 value
             * @property {number} TYPE_ENUM=14 TYPE_ENUM value
             * @property {number} TYPE_SFIXED32=15 TYPE_SFIXED32 value
             * @property {number} TYPE_SFIXED64=16 TYPE_SFIXED64 value
             * @property {number} TYPE_SINT32=17 TYPE_SINT32 value
             * @property {number} TYPE_SINT64=18 TYPE_SINT64 value
             */
            FieldDescriptorProto.Type = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[1] = "TYPE_DOUBLE"] = 1;
                values[valuesById[2] = "TYPE_FLOAT"] = 2;
                values[valuesById[3] = "TYPE_INT64"] = 3;
                values[valuesById[4] = "TYPE_UINT64"] = 4;
                values[valuesById[5] = "TYPE_INT32"] = 5;
                values[valuesById[6] = "TYPE_FIXED64"] = 6;
                values[valuesById[7] = "TYPE_FIXED32"] = 7;
                values[valuesById[8] = "TYPE_BOOL"] = 8;
                values[valuesById[9] = "TYPE_STRING"] = 9;
                values[valuesById[10] = "TYPE_GROUP"] = 10;
                values[valuesById[11] = "TYPE_MESSAGE"] = 11;
                values[valuesById[12] = "TYPE_BYTES"] = 12;
                values[valuesById[13] = "TYPE_UINT32"] = 13;
                values[valuesById[14] = "TYPE_ENUM"] = 14;
                values[valuesById[15] = "TYPE_SFIXED32"] = 15;
                values[valuesById[16] = "TYPE_SFIXED64"] = 16;
                values[valuesById[17] = "TYPE_SINT32"] = 17;
                values[valuesById[18] = "TYPE_SINT64"] = 18;
                return values;
            })();

            /**
             * Label enum.
             * @name google.protobuf.FieldDescriptorProto.Label
             * @enum {string}
             * @property {number} LABEL_OPTIONAL=1 LABEL_OPTIONAL value
             * @property {number} LABEL_REQUIRED=2 LABEL_REQUIRED value
             * @property {number} LABEL_REPEATED=3 LABEL_REPEATED value
             */
            FieldDescriptorProto.Label = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[1] = "LABEL_OPTIONAL"] = 1;
                values[valuesById[2] = "LABEL_REQUIRED"] = 2;
                values[valuesById[3] = "LABEL_REPEATED"] = 3;
                return values;
            })();

            return FieldDescriptorProto;
        })();

        protobuf.OneofDescriptorProto = (function() {

            /**
             * Properties of an OneofDescriptorProto.
             * @memberof google.protobuf
             * @interface IOneofDescriptorProto
             * @property {string|null} [name] OneofDescriptorProto name
             * @property {google.protobuf.IOneofOptions|null} [options] OneofDescriptorProto options
             */

            /**
             * Constructs a new OneofDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents an OneofDescriptorProto.
             * @implements IOneofDescriptorProto
             * @constructor
             * @param {google.protobuf.IOneofDescriptorProto=} [properties] Properties to set
             */
            function OneofDescriptorProto(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * OneofDescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.OneofDescriptorProto
             * @instance
             */
            OneofDescriptorProto.prototype.name = "";

            /**
             * OneofDescriptorProto options.
             * @member {google.protobuf.IOneofOptions|null|undefined} options
             * @memberof google.protobuf.OneofDescriptorProto
             * @instance
             */
            OneofDescriptorProto.prototype.options = null;

            /**
             * Creates a new OneofDescriptorProto instance using the specified properties.
             * @function create
             * @memberof google.protobuf.OneofDescriptorProto
             * @static
             * @param {google.protobuf.IOneofDescriptorProto=} [properties] Properties to set
             * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto instance
             */
            OneofDescriptorProto.create = function create(properties) {
                return new OneofDescriptorProto(properties);
            };

            /**
             * Encodes the specified OneofDescriptorProto message. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.OneofDescriptorProto
             * @static
             * @param {google.protobuf.IOneofDescriptorProto} message OneofDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OneofDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.options != null && message.hasOwnProperty("options"))
                    $root.google.protobuf.OneofOptions.encode(message.options, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified OneofDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.OneofDescriptorProto
             * @static
             * @param {google.protobuf.IOneofDescriptorProto} message OneofDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OneofDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.OneofDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OneofDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.OneofDescriptorProto();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        message.options = $root.google.protobuf.OneofOptions.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.OneofDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OneofDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an OneofDescriptorProto message.
             * @function verify
             * @memberof google.protobuf.OneofDescriptorProto
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            OneofDescriptorProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.options != null && message.hasOwnProperty("options")) {
                    var error = $root.google.protobuf.OneofOptions.verify(message.options);
                    if (error)
                        return "options." + error;
                }
                return null;
            };

            /**
             * Creates an OneofDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.OneofDescriptorProto
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto
             */
            OneofDescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.OneofDescriptorProto)
                    return object;
                var message = new $root.google.protobuf.OneofDescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.OneofDescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.OneofOptions.fromObject(object.options);
                }
                return message;
            };

            /**
             * Creates a plain object from an OneofDescriptorProto message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.OneofDescriptorProto
             * @static
             * @param {google.protobuf.OneofDescriptorProto} message OneofDescriptorProto
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OneofDescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.name = "";
                    object.options = null;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.OneofOptions.toObject(message.options, options);
                return object;
            };

            /**
             * Converts this OneofDescriptorProto to JSON.
             * @function toJSON
             * @memberof google.protobuf.OneofDescriptorProto
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            OneofDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return OneofDescriptorProto;
        })();

        protobuf.EnumDescriptorProto = (function() {

            /**
             * Properties of an EnumDescriptorProto.
             * @memberof google.protobuf
             * @interface IEnumDescriptorProto
             * @property {string|null} [name] EnumDescriptorProto name
             * @property {Array.<google.protobuf.IEnumValueDescriptorProto>|null} [value] EnumDescriptorProto value
             * @property {google.protobuf.IEnumOptions|null} [options] EnumDescriptorProto options
             */

            /**
             * Constructs a new EnumDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents an EnumDescriptorProto.
             * @implements IEnumDescriptorProto
             * @constructor
             * @param {google.protobuf.IEnumDescriptorProto=} [properties] Properties to set
             */
            function EnumDescriptorProto(properties) {
                this.value = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * EnumDescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.EnumDescriptorProto
             * @instance
             */
            EnumDescriptorProto.prototype.name = "";

            /**
             * EnumDescriptorProto value.
             * @member {Array.<google.protobuf.IEnumValueDescriptorProto>} value
             * @memberof google.protobuf.EnumDescriptorProto
             * @instance
             */
            EnumDescriptorProto.prototype.value = $util.emptyArray;

            /**
             * EnumDescriptorProto options.
             * @member {google.protobuf.IEnumOptions|null|undefined} options
             * @memberof google.protobuf.EnumDescriptorProto
             * @instance
             */
            EnumDescriptorProto.prototype.options = null;

            /**
             * Creates a new EnumDescriptorProto instance using the specified properties.
             * @function create
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {google.protobuf.IEnumDescriptorProto=} [properties] Properties to set
             * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto instance
             */
            EnumDescriptorProto.create = function create(properties) {
                return new EnumDescriptorProto(properties);
            };

            /**
             * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {google.protobuf.IEnumDescriptorProto} message EnumDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.value != null && message.value.length)
                    for (var i = 0; i < message.value.length; ++i)
                        $root.google.protobuf.EnumValueDescriptorProto.encode(message.value[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.options != null && message.hasOwnProperty("options"))
                    $root.google.protobuf.EnumOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified EnumDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {google.protobuf.IEnumDescriptorProto} message EnumDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumDescriptorProto();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        if (!(message.value && message.value.length))
                            message.value = [];
                        message.value.push($root.google.protobuf.EnumValueDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 3:
                        message.options = $root.google.protobuf.EnumOptions.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an EnumDescriptorProto message.
             * @function verify
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            EnumDescriptorProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.value != null && message.hasOwnProperty("value")) {
                    if (!Array.isArray(message.value))
                        return "value: array expected";
                    for (var i = 0; i < message.value.length; ++i) {
                        var error = $root.google.protobuf.EnumValueDescriptorProto.verify(message.value[i]);
                        if (error)
                            return "value." + error;
                    }
                }
                if (message.options != null && message.hasOwnProperty("options")) {
                    var error = $root.google.protobuf.EnumOptions.verify(message.options);
                    if (error)
                        return "options." + error;
                }
                return null;
            };

            /**
             * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto
             */
            EnumDescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.EnumDescriptorProto)
                    return object;
                var message = new $root.google.protobuf.EnumDescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.value) {
                    if (!Array.isArray(object.value))
                        throw TypeError(".google.protobuf.EnumDescriptorProto.value: array expected");
                    message.value = [];
                    for (var i = 0; i < object.value.length; ++i) {
                        if (typeof object.value[i] !== "object")
                            throw TypeError(".google.protobuf.EnumDescriptorProto.value: object expected");
                        message.value[i] = $root.google.protobuf.EnumValueDescriptorProto.fromObject(object.value[i]);
                    }
                }
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.EnumDescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.EnumOptions.fromObject(object.options);
                }
                return message;
            };

            /**
             * Creates a plain object from an EnumDescriptorProto message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {google.protobuf.EnumDescriptorProto} message EnumDescriptorProto
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EnumDescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.value = [];
                if (options.defaults) {
                    object.name = "";
                    object.options = null;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.value && message.value.length) {
                    object.value = [];
                    for (var j = 0; j < message.value.length; ++j)
                        object.value[j] = $root.google.protobuf.EnumValueDescriptorProto.toObject(message.value[j], options);
                }
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.EnumOptions.toObject(message.options, options);
                return object;
            };

            /**
             * Converts this EnumDescriptorProto to JSON.
             * @function toJSON
             * @memberof google.protobuf.EnumDescriptorProto
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            EnumDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return EnumDescriptorProto;
        })();

        protobuf.EnumValueDescriptorProto = (function() {

            /**
             * Properties of an EnumValueDescriptorProto.
             * @memberof google.protobuf
             * @interface IEnumValueDescriptorProto
             * @property {string|null} [name] EnumValueDescriptorProto name
             * @property {number|null} [number] EnumValueDescriptorProto number
             * @property {google.protobuf.IEnumValueOptions|null} [options] EnumValueDescriptorProto options
             */

            /**
             * Constructs a new EnumValueDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents an EnumValueDescriptorProto.
             * @implements IEnumValueDescriptorProto
             * @constructor
             * @param {google.protobuf.IEnumValueDescriptorProto=} [properties] Properties to set
             */
            function EnumValueDescriptorProto(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * EnumValueDescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @instance
             */
            EnumValueDescriptorProto.prototype.name = "";

            /**
             * EnumValueDescriptorProto number.
             * @member {number} number
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @instance
             */
            EnumValueDescriptorProto.prototype.number = 0;

            /**
             * EnumValueDescriptorProto options.
             * @member {google.protobuf.IEnumValueOptions|null|undefined} options
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @instance
             */
            EnumValueDescriptorProto.prototype.options = null;

            /**
             * Creates a new EnumValueDescriptorProto instance using the specified properties.
             * @function create
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {google.protobuf.IEnumValueDescriptorProto=} [properties] Properties to set
             * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto instance
             */
            EnumValueDescriptorProto.create = function create(properties) {
                return new EnumValueDescriptorProto(properties);
            };

            /**
             * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {google.protobuf.IEnumValueDescriptorProto} message EnumValueDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumValueDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.number != null && message.hasOwnProperty("number"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.number);
                if (message.options != null && message.hasOwnProperty("options"))
                    $root.google.protobuf.EnumValueOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified EnumValueDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {google.protobuf.IEnumValueDescriptorProto} message EnumValueDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumValueDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumValueDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumValueDescriptorProto();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        message.number = reader.int32();
                        break;
                    case 3:
                        message.options = $root.google.protobuf.EnumValueOptions.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumValueDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an EnumValueDescriptorProto message.
             * @function verify
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            EnumValueDescriptorProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.number != null && message.hasOwnProperty("number"))
                    if (!$util.isInteger(message.number))
                        return "number: integer expected";
                if (message.options != null && message.hasOwnProperty("options")) {
                    var error = $root.google.protobuf.EnumValueOptions.verify(message.options);
                    if (error)
                        return "options." + error;
                }
                return null;
            };

            /**
             * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto
             */
            EnumValueDescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.EnumValueDescriptorProto)
                    return object;
                var message = new $root.google.protobuf.EnumValueDescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.number != null)
                    message.number = object.number | 0;
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.EnumValueDescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.EnumValueOptions.fromObject(object.options);
                }
                return message;
            };

            /**
             * Creates a plain object from an EnumValueDescriptorProto message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {google.protobuf.EnumValueDescriptorProto} message EnumValueDescriptorProto
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EnumValueDescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.name = "";
                    object.number = 0;
                    object.options = null;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.number != null && message.hasOwnProperty("number"))
                    object.number = message.number;
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.EnumValueOptions.toObject(message.options, options);
                return object;
            };

            /**
             * Converts this EnumValueDescriptorProto to JSON.
             * @function toJSON
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            EnumValueDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return EnumValueDescriptorProto;
        })();

        protobuf.ServiceDescriptorProto = (function() {

            /**
             * Properties of a ServiceDescriptorProto.
             * @memberof google.protobuf
             * @interface IServiceDescriptorProto
             * @property {string|null} [name] ServiceDescriptorProto name
             * @property {Array.<google.protobuf.IMethodDescriptorProto>|null} [method] ServiceDescriptorProto method
             * @property {google.protobuf.IServiceOptions|null} [options] ServiceDescriptorProto options
             */

            /**
             * Constructs a new ServiceDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents a ServiceDescriptorProto.
             * @implements IServiceDescriptorProto
             * @constructor
             * @param {google.protobuf.IServiceDescriptorProto=} [properties] Properties to set
             */
            function ServiceDescriptorProto(properties) {
                this.method = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ServiceDescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.ServiceDescriptorProto
             * @instance
             */
            ServiceDescriptorProto.prototype.name = "";

            /**
             * ServiceDescriptorProto method.
             * @member {Array.<google.protobuf.IMethodDescriptorProto>} method
             * @memberof google.protobuf.ServiceDescriptorProto
             * @instance
             */
            ServiceDescriptorProto.prototype.method = $util.emptyArray;

            /**
             * ServiceDescriptorProto options.
             * @member {google.protobuf.IServiceOptions|null|undefined} options
             * @memberof google.protobuf.ServiceDescriptorProto
             * @instance
             */
            ServiceDescriptorProto.prototype.options = null;

            /**
             * Creates a new ServiceDescriptorProto instance using the specified properties.
             * @function create
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {google.protobuf.IServiceDescriptorProto=} [properties] Properties to set
             * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto instance
             */
            ServiceDescriptorProto.create = function create(properties) {
                return new ServiceDescriptorProto(properties);
            };

            /**
             * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {google.protobuf.IServiceDescriptorProto} message ServiceDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ServiceDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.method != null && message.method.length)
                    for (var i = 0; i < message.method.length; ++i)
                        $root.google.protobuf.MethodDescriptorProto.encode(message.method[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.options != null && message.hasOwnProperty("options"))
                    $root.google.protobuf.ServiceOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ServiceDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {google.protobuf.IServiceDescriptorProto} message ServiceDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ServiceDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ServiceDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.ServiceDescriptorProto();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        if (!(message.method && message.method.length))
                            message.method = [];
                        message.method.push($root.google.protobuf.MethodDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 3:
                        message.options = $root.google.protobuf.ServiceOptions.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ServiceDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ServiceDescriptorProto message.
             * @function verify
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ServiceDescriptorProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.method != null && message.hasOwnProperty("method")) {
                    if (!Array.isArray(message.method))
                        return "method: array expected";
                    for (var i = 0; i < message.method.length; ++i) {
                        var error = $root.google.protobuf.MethodDescriptorProto.verify(message.method[i]);
                        if (error)
                            return "method." + error;
                    }
                }
                if (message.options != null && message.hasOwnProperty("options")) {
                    var error = $root.google.protobuf.ServiceOptions.verify(message.options);
                    if (error)
                        return "options." + error;
                }
                return null;
            };

            /**
             * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto
             */
            ServiceDescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.ServiceDescriptorProto)
                    return object;
                var message = new $root.google.protobuf.ServiceDescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.method) {
                    if (!Array.isArray(object.method))
                        throw TypeError(".google.protobuf.ServiceDescriptorProto.method: array expected");
                    message.method = [];
                    for (var i = 0; i < object.method.length; ++i) {
                        if (typeof object.method[i] !== "object")
                            throw TypeError(".google.protobuf.ServiceDescriptorProto.method: object expected");
                        message.method[i] = $root.google.protobuf.MethodDescriptorProto.fromObject(object.method[i]);
                    }
                }
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.ServiceDescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.ServiceOptions.fromObject(object.options);
                }
                return message;
            };

            /**
             * Creates a plain object from a ServiceDescriptorProto message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {google.protobuf.ServiceDescriptorProto} message ServiceDescriptorProto
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ServiceDescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.method = [];
                if (options.defaults) {
                    object.name = "";
                    object.options = null;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.method && message.method.length) {
                    object.method = [];
                    for (var j = 0; j < message.method.length; ++j)
                        object.method[j] = $root.google.protobuf.MethodDescriptorProto.toObject(message.method[j], options);
                }
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.ServiceOptions.toObject(message.options, options);
                return object;
            };

            /**
             * Converts this ServiceDescriptorProto to JSON.
             * @function toJSON
             * @memberof google.protobuf.ServiceDescriptorProto
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ServiceDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ServiceDescriptorProto;
        })();

        protobuf.MethodDescriptorProto = (function() {

            /**
             * Properties of a MethodDescriptorProto.
             * @memberof google.protobuf
             * @interface IMethodDescriptorProto
             * @property {string|null} [name] MethodDescriptorProto name
             * @property {string|null} [input_type] MethodDescriptorProto input_type
             * @property {string|null} [output_type] MethodDescriptorProto output_type
             * @property {google.protobuf.IMethodOptions|null} [options] MethodDescriptorProto options
             * @property {boolean|null} [client_streaming] MethodDescriptorProto client_streaming
             * @property {boolean|null} [server_streaming] MethodDescriptorProto server_streaming
             */

            /**
             * Constructs a new MethodDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents a MethodDescriptorProto.
             * @implements IMethodDescriptorProto
             * @constructor
             * @param {google.protobuf.IMethodDescriptorProto=} [properties] Properties to set
             */
            function MethodDescriptorProto(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MethodDescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.MethodDescriptorProto
             * @instance
             */
            MethodDescriptorProto.prototype.name = "";

            /**
             * MethodDescriptorProto input_type.
             * @member {string} input_type
             * @memberof google.protobuf.MethodDescriptorProto
             * @instance
             */
            MethodDescriptorProto.prototype.input_type = "";

            /**
             * MethodDescriptorProto output_type.
             * @member {string} output_type
             * @memberof google.protobuf.MethodDescriptorProto
             * @instance
             */
            MethodDescriptorProto.prototype.output_type = "";

            /**
             * MethodDescriptorProto options.
             * @member {google.protobuf.IMethodOptions|null|undefined} options
             * @memberof google.protobuf.MethodDescriptorProto
             * @instance
             */
            MethodDescriptorProto.prototype.options = null;

            /**
             * MethodDescriptorProto client_streaming.
             * @member {boolean} client_streaming
             * @memberof google.protobuf.MethodDescriptorProto
             * @instance
             */
            MethodDescriptorProto.prototype.client_streaming = false;

            /**
             * MethodDescriptorProto server_streaming.
             * @member {boolean} server_streaming
             * @memberof google.protobuf.MethodDescriptorProto
             * @instance
             */
            MethodDescriptorProto.prototype.server_streaming = false;

            /**
             * Creates a new MethodDescriptorProto instance using the specified properties.
             * @function create
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {google.protobuf.IMethodDescriptorProto=} [properties] Properties to set
             * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto instance
             */
            MethodDescriptorProto.create = function create(properties) {
                return new MethodDescriptorProto(properties);
            };

            /**
             * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {google.protobuf.IMethodDescriptorProto} message MethodDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MethodDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.input_type != null && message.hasOwnProperty("input_type"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.input_type);
                if (message.output_type != null && message.hasOwnProperty("output_type"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.output_type);
                if (message.options != null && message.hasOwnProperty("options"))
                    $root.google.protobuf.MethodOptions.encode(message.options, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.client_streaming != null && message.hasOwnProperty("client_streaming"))
                    writer.uint32(/* id 5, wireType 0 =*/40).bool(message.client_streaming);
                if (message.server_streaming != null && message.hasOwnProperty("server_streaming"))
                    writer.uint32(/* id 6, wireType 0 =*/48).bool(message.server_streaming);
                return writer;
            };

            /**
             * Encodes the specified MethodDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {google.protobuf.IMethodDescriptorProto} message MethodDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MethodDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MethodDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.MethodDescriptorProto();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        message.input_type = reader.string();
                        break;
                    case 3:
                        message.output_type = reader.string();
                        break;
                    case 4:
                        message.options = $root.google.protobuf.MethodOptions.decode(reader, reader.uint32());
                        break;
                    case 5:
                        message.client_streaming = reader.bool();
                        break;
                    case 6:
                        message.server_streaming = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MethodDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MethodDescriptorProto message.
             * @function verify
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MethodDescriptorProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.input_type != null && message.hasOwnProperty("input_type"))
                    if (!$util.isString(message.input_type))
                        return "input_type: string expected";
                if (message.output_type != null && message.hasOwnProperty("output_type"))
                    if (!$util.isString(message.output_type))
                        return "output_type: string expected";
                if (message.options != null && message.hasOwnProperty("options")) {
                    var error = $root.google.protobuf.MethodOptions.verify(message.options);
                    if (error)
                        return "options." + error;
                }
                if (message.client_streaming != null && message.hasOwnProperty("client_streaming"))
                    if (typeof message.client_streaming !== "boolean")
                        return "client_streaming: boolean expected";
                if (message.server_streaming != null && message.hasOwnProperty("server_streaming"))
                    if (typeof message.server_streaming !== "boolean")
                        return "server_streaming: boolean expected";
                return null;
            };

            /**
             * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto
             */
            MethodDescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.MethodDescriptorProto)
                    return object;
                var message = new $root.google.protobuf.MethodDescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.input_type != null)
                    message.input_type = String(object.input_type);
                if (object.output_type != null)
                    message.output_type = String(object.output_type);
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.MethodDescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.MethodOptions.fromObject(object.options);
                }
                if (object.client_streaming != null)
                    message.client_streaming = Boolean(object.client_streaming);
                if (object.server_streaming != null)
                    message.server_streaming = Boolean(object.server_streaming);
                return message;
            };

            /**
             * Creates a plain object from a MethodDescriptorProto message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {google.protobuf.MethodDescriptorProto} message MethodDescriptorProto
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MethodDescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.name = "";
                    object.input_type = "";
                    object.output_type = "";
                    object.options = null;
                    object.client_streaming = false;
                    object.server_streaming = false;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.input_type != null && message.hasOwnProperty("input_type"))
                    object.input_type = message.input_type;
                if (message.output_type != null && message.hasOwnProperty("output_type"))
                    object.output_type = message.output_type;
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.MethodOptions.toObject(message.options, options);
                if (message.client_streaming != null && message.hasOwnProperty("client_streaming"))
                    object.client_streaming = message.client_streaming;
                if (message.server_streaming != null && message.hasOwnProperty("server_streaming"))
                    object.server_streaming = message.server_streaming;
                return object;
            };

            /**
             * Converts this MethodDescriptorProto to JSON.
             * @function toJSON
             * @memberof google.protobuf.MethodDescriptorProto
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MethodDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MethodDescriptorProto;
        })();

        protobuf.FileOptions = (function() {

            /**
             * Properties of a FileOptions.
             * @memberof google.protobuf
             * @interface IFileOptions
             * @property {string|null} [java_package] FileOptions java_package
             * @property {string|null} [java_outer_classname] FileOptions java_outer_classname
             * @property {boolean|null} [java_multiple_files] FileOptions java_multiple_files
             * @property {boolean|null} [java_generate_equals_and_hash] FileOptions java_generate_equals_and_hash
             * @property {boolean|null} [java_string_check_utf8] FileOptions java_string_check_utf8
             * @property {google.protobuf.FileOptions.OptimizeMode|null} [optimize_for] FileOptions optimize_for
             * @property {string|null} [go_package] FileOptions go_package
             * @property {boolean|null} [cc_generic_services] FileOptions cc_generic_services
             * @property {boolean|null} [java_generic_services] FileOptions java_generic_services
             * @property {boolean|null} [py_generic_services] FileOptions py_generic_services
             * @property {boolean|null} [deprecated] FileOptions deprecated
             * @property {boolean|null} [cc_enable_arenas] FileOptions cc_enable_arenas
             * @property {string|null} [objc_class_prefix] FileOptions objc_class_prefix
             * @property {string|null} [csharp_namespace] FileOptions csharp_namespace
             * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpreted_option] FileOptions uninterpreted_option
             * @property {scalapb.IScalaPbOptions|null} [".scalapb.options"] FileOptions .scalapb.options
             */

            /**
             * Constructs a new FileOptions.
             * @memberof google.protobuf
             * @classdesc Represents a FileOptions.
             * @implements IFileOptions
             * @constructor
             * @param {google.protobuf.IFileOptions=} [properties] Properties to set
             */
            function FileOptions(properties) {
                this.uninterpreted_option = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FileOptions java_package.
             * @member {string} java_package
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.java_package = "";

            /**
             * FileOptions java_outer_classname.
             * @member {string} java_outer_classname
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.java_outer_classname = "";

            /**
             * FileOptions java_multiple_files.
             * @member {boolean} java_multiple_files
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.java_multiple_files = false;

            /**
             * FileOptions java_generate_equals_and_hash.
             * @member {boolean} java_generate_equals_and_hash
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.java_generate_equals_and_hash = false;

            /**
             * FileOptions java_string_check_utf8.
             * @member {boolean} java_string_check_utf8
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.java_string_check_utf8 = false;

            /**
             * FileOptions optimize_for.
             * @member {google.protobuf.FileOptions.OptimizeMode} optimize_for
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.optimize_for = 1;

            /**
             * FileOptions go_package.
             * @member {string} go_package
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.go_package = "";

            /**
             * FileOptions cc_generic_services.
             * @member {boolean} cc_generic_services
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.cc_generic_services = false;

            /**
             * FileOptions java_generic_services.
             * @member {boolean} java_generic_services
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.java_generic_services = false;

            /**
             * FileOptions py_generic_services.
             * @member {boolean} py_generic_services
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.py_generic_services = false;

            /**
             * FileOptions deprecated.
             * @member {boolean} deprecated
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.deprecated = false;

            /**
             * FileOptions cc_enable_arenas.
             * @member {boolean} cc_enable_arenas
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.cc_enable_arenas = false;

            /**
             * FileOptions objc_class_prefix.
             * @member {string} objc_class_prefix
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.objc_class_prefix = "";

            /**
             * FileOptions csharp_namespace.
             * @member {string} csharp_namespace
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.csharp_namespace = "";

            /**
             * FileOptions uninterpreted_option.
             * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpreted_option
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.uninterpreted_option = $util.emptyArray;

            /**
             * FileOptions .scalapb.options.
             * @member {scalapb.IScalaPbOptions|null|undefined} .scalapb.options
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype[".scalapb.options"] = null;

            /**
             * Creates a new FileOptions instance using the specified properties.
             * @function create
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {google.protobuf.IFileOptions=} [properties] Properties to set
             * @returns {google.protobuf.FileOptions} FileOptions instance
             */
            FileOptions.create = function create(properties) {
                return new FileOptions(properties);
            };

            /**
             * Encodes the specified FileOptions message. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {google.protobuf.IFileOptions} message FileOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.java_package != null && message.hasOwnProperty("java_package"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.java_package);
                if (message.java_outer_classname != null && message.hasOwnProperty("java_outer_classname"))
                    writer.uint32(/* id 8, wireType 2 =*/66).string(message.java_outer_classname);
                if (message.optimize_for != null && message.hasOwnProperty("optimize_for"))
                    writer.uint32(/* id 9, wireType 0 =*/72).int32(message.optimize_for);
                if (message.java_multiple_files != null && message.hasOwnProperty("java_multiple_files"))
                    writer.uint32(/* id 10, wireType 0 =*/80).bool(message.java_multiple_files);
                if (message.go_package != null && message.hasOwnProperty("go_package"))
                    writer.uint32(/* id 11, wireType 2 =*/90).string(message.go_package);
                if (message.cc_generic_services != null && message.hasOwnProperty("cc_generic_services"))
                    writer.uint32(/* id 16, wireType 0 =*/128).bool(message.cc_generic_services);
                if (message.java_generic_services != null && message.hasOwnProperty("java_generic_services"))
                    writer.uint32(/* id 17, wireType 0 =*/136).bool(message.java_generic_services);
                if (message.py_generic_services != null && message.hasOwnProperty("py_generic_services"))
                    writer.uint32(/* id 18, wireType 0 =*/144).bool(message.py_generic_services);
                if (message.java_generate_equals_and_hash != null && message.hasOwnProperty("java_generate_equals_and_hash"))
                    writer.uint32(/* id 20, wireType 0 =*/160).bool(message.java_generate_equals_and_hash);
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    writer.uint32(/* id 23, wireType 0 =*/184).bool(message.deprecated);
                if (message.java_string_check_utf8 != null && message.hasOwnProperty("java_string_check_utf8"))
                    writer.uint32(/* id 27, wireType 0 =*/216).bool(message.java_string_check_utf8);
                if (message.cc_enable_arenas != null && message.hasOwnProperty("cc_enable_arenas"))
                    writer.uint32(/* id 31, wireType 0 =*/248).bool(message.cc_enable_arenas);
                if (message.objc_class_prefix != null && message.hasOwnProperty("objc_class_prefix"))
                    writer.uint32(/* id 36, wireType 2 =*/290).string(message.objc_class_prefix);
                if (message.csharp_namespace != null && message.hasOwnProperty("csharp_namespace"))
                    writer.uint32(/* id 37, wireType 2 =*/298).string(message.csharp_namespace);
                if (message.uninterpreted_option != null && message.uninterpreted_option.length)
                    for (var i = 0; i < message.uninterpreted_option.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                if (message[".scalapb.options"] != null && message.hasOwnProperty(".scalapb.options"))
                    $root.scalapb.ScalaPbOptions.encode(message[".scalapb.options"], writer.uint32(/* id 1020, wireType 2 =*/8162).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified FileOptions message, length delimited. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {google.protobuf.IFileOptions} message FileOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FileOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FileOptions} FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FileOptions();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.java_package = reader.string();
                        break;
                    case 8:
                        message.java_outer_classname = reader.string();
                        break;
                    case 10:
                        message.java_multiple_files = reader.bool();
                        break;
                    case 20:
                        message.java_generate_equals_and_hash = reader.bool();
                        break;
                    case 27:
                        message.java_string_check_utf8 = reader.bool();
                        break;
                    case 9:
                        message.optimize_for = reader.int32();
                        break;
                    case 11:
                        message.go_package = reader.string();
                        break;
                    case 16:
                        message.cc_generic_services = reader.bool();
                        break;
                    case 17:
                        message.java_generic_services = reader.bool();
                        break;
                    case 18:
                        message.py_generic_services = reader.bool();
                        break;
                    case 23:
                        message.deprecated = reader.bool();
                        break;
                    case 31:
                        message.cc_enable_arenas = reader.bool();
                        break;
                    case 36:
                        message.objc_class_prefix = reader.string();
                        break;
                    case 37:
                        message.csharp_namespace = reader.string();
                        break;
                    case 999:
                        if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                            message.uninterpreted_option = [];
                        message.uninterpreted_option.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                        break;
                    case 1020:
                        message[".scalapb.options"] = $root.scalapb.ScalaPbOptions.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a FileOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.FileOptions} FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FileOptions message.
             * @function verify
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FileOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.java_package != null && message.hasOwnProperty("java_package"))
                    if (!$util.isString(message.java_package))
                        return "java_package: string expected";
                if (message.java_outer_classname != null && message.hasOwnProperty("java_outer_classname"))
                    if (!$util.isString(message.java_outer_classname))
                        return "java_outer_classname: string expected";
                if (message.java_multiple_files != null && message.hasOwnProperty("java_multiple_files"))
                    if (typeof message.java_multiple_files !== "boolean")
                        return "java_multiple_files: boolean expected";
                if (message.java_generate_equals_and_hash != null && message.hasOwnProperty("java_generate_equals_and_hash"))
                    if (typeof message.java_generate_equals_and_hash !== "boolean")
                        return "java_generate_equals_and_hash: boolean expected";
                if (message.java_string_check_utf8 != null && message.hasOwnProperty("java_string_check_utf8"))
                    if (typeof message.java_string_check_utf8 !== "boolean")
                        return "java_string_check_utf8: boolean expected";
                if (message.optimize_for != null && message.hasOwnProperty("optimize_for"))
                    switch (message.optimize_for) {
                    default:
                        return "optimize_for: enum value expected";
                    case 1:
                    case 2:
                    case 3:
                        break;
                    }
                if (message.go_package != null && message.hasOwnProperty("go_package"))
                    if (!$util.isString(message.go_package))
                        return "go_package: string expected";
                if (message.cc_generic_services != null && message.hasOwnProperty("cc_generic_services"))
                    if (typeof message.cc_generic_services !== "boolean")
                        return "cc_generic_services: boolean expected";
                if (message.java_generic_services != null && message.hasOwnProperty("java_generic_services"))
                    if (typeof message.java_generic_services !== "boolean")
                        return "java_generic_services: boolean expected";
                if (message.py_generic_services != null && message.hasOwnProperty("py_generic_services"))
                    if (typeof message.py_generic_services !== "boolean")
                        return "py_generic_services: boolean expected";
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    if (typeof message.deprecated !== "boolean")
                        return "deprecated: boolean expected";
                if (message.cc_enable_arenas != null && message.hasOwnProperty("cc_enable_arenas"))
                    if (typeof message.cc_enable_arenas !== "boolean")
                        return "cc_enable_arenas: boolean expected";
                if (message.objc_class_prefix != null && message.hasOwnProperty("objc_class_prefix"))
                    if (!$util.isString(message.objc_class_prefix))
                        return "objc_class_prefix: string expected";
                if (message.csharp_namespace != null && message.hasOwnProperty("csharp_namespace"))
                    if (!$util.isString(message.csharp_namespace))
                        return "csharp_namespace: string expected";
                if (message.uninterpreted_option != null && message.hasOwnProperty("uninterpreted_option")) {
                    if (!Array.isArray(message.uninterpreted_option))
                        return "uninterpreted_option: array expected";
                    for (var i = 0; i < message.uninterpreted_option.length; ++i) {
                        var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpreted_option[i]);
                        if (error)
                            return "uninterpreted_option." + error;
                    }
                }
                if (message[".scalapb.options"] != null && message.hasOwnProperty(".scalapb.options")) {
                    var error = $root.scalapb.ScalaPbOptions.verify(message[".scalapb.options"]);
                    if (error)
                        return ".scalapb.options." + error;
                }
                return null;
            };

            /**
             * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FileOptions} FileOptions
             */
            FileOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.FileOptions)
                    return object;
                var message = new $root.google.protobuf.FileOptions();
                if (object.java_package != null)
                    message.java_package = String(object.java_package);
                if (object.java_outer_classname != null)
                    message.java_outer_classname = String(object.java_outer_classname);
                if (object.java_multiple_files != null)
                    message.java_multiple_files = Boolean(object.java_multiple_files);
                if (object.java_generate_equals_and_hash != null)
                    message.java_generate_equals_and_hash = Boolean(object.java_generate_equals_and_hash);
                if (object.java_string_check_utf8 != null)
                    message.java_string_check_utf8 = Boolean(object.java_string_check_utf8);
                switch (object.optimize_for) {
                case "SPEED":
                case 1:
                    message.optimize_for = 1;
                    break;
                case "CODE_SIZE":
                case 2:
                    message.optimize_for = 2;
                    break;
                case "LITE_RUNTIME":
                case 3:
                    message.optimize_for = 3;
                    break;
                }
                if (object.go_package != null)
                    message.go_package = String(object.go_package);
                if (object.cc_generic_services != null)
                    message.cc_generic_services = Boolean(object.cc_generic_services);
                if (object.java_generic_services != null)
                    message.java_generic_services = Boolean(object.java_generic_services);
                if (object.py_generic_services != null)
                    message.py_generic_services = Boolean(object.py_generic_services);
                if (object.deprecated != null)
                    message.deprecated = Boolean(object.deprecated);
                if (object.cc_enable_arenas != null)
                    message.cc_enable_arenas = Boolean(object.cc_enable_arenas);
                if (object.objc_class_prefix != null)
                    message.objc_class_prefix = String(object.objc_class_prefix);
                if (object.csharp_namespace != null)
                    message.csharp_namespace = String(object.csharp_namespace);
                if (object.uninterpreted_option) {
                    if (!Array.isArray(object.uninterpreted_option))
                        throw TypeError(".google.protobuf.FileOptions.uninterpreted_option: array expected");
                    message.uninterpreted_option = [];
                    for (var i = 0; i < object.uninterpreted_option.length; ++i) {
                        if (typeof object.uninterpreted_option[i] !== "object")
                            throw TypeError(".google.protobuf.FileOptions.uninterpreted_option: object expected");
                        message.uninterpreted_option[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpreted_option[i]);
                    }
                }
                if (object[".scalapb.options"] != null) {
                    if (typeof object[".scalapb.options"] !== "object")
                        throw TypeError(".google.protobuf.FileOptions..scalapb.options: object expected");
                    message[".scalapb.options"] = $root.scalapb.ScalaPbOptions.fromObject(object[".scalapb.options"]);
                }
                return message;
            };

            /**
             * Creates a plain object from a FileOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {google.protobuf.FileOptions} message FileOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FileOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.uninterpreted_option = [];
                if (options.defaults) {
                    object.java_package = "";
                    object.java_outer_classname = "";
                    object.optimize_for = options.enums === String ? "SPEED" : 1;
                    object.java_multiple_files = false;
                    object.go_package = "";
                    object.cc_generic_services = false;
                    object.java_generic_services = false;
                    object.py_generic_services = false;
                    object.java_generate_equals_and_hash = false;
                    object.deprecated = false;
                    object.java_string_check_utf8 = false;
                    object.cc_enable_arenas = false;
                    object.objc_class_prefix = "";
                    object.csharp_namespace = "";
                    object[".scalapb.options"] = null;
                }
                if (message.java_package != null && message.hasOwnProperty("java_package"))
                    object.java_package = message.java_package;
                if (message.java_outer_classname != null && message.hasOwnProperty("java_outer_classname"))
                    object.java_outer_classname = message.java_outer_classname;
                if (message.optimize_for != null && message.hasOwnProperty("optimize_for"))
                    object.optimize_for = options.enums === String ? $root.google.protobuf.FileOptions.OptimizeMode[message.optimize_for] : message.optimize_for;
                if (message.java_multiple_files != null && message.hasOwnProperty("java_multiple_files"))
                    object.java_multiple_files = message.java_multiple_files;
                if (message.go_package != null && message.hasOwnProperty("go_package"))
                    object.go_package = message.go_package;
                if (message.cc_generic_services != null && message.hasOwnProperty("cc_generic_services"))
                    object.cc_generic_services = message.cc_generic_services;
                if (message.java_generic_services != null && message.hasOwnProperty("java_generic_services"))
                    object.java_generic_services = message.java_generic_services;
                if (message.py_generic_services != null && message.hasOwnProperty("py_generic_services"))
                    object.py_generic_services = message.py_generic_services;
                if (message.java_generate_equals_and_hash != null && message.hasOwnProperty("java_generate_equals_and_hash"))
                    object.java_generate_equals_and_hash = message.java_generate_equals_and_hash;
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    object.deprecated = message.deprecated;
                if (message.java_string_check_utf8 != null && message.hasOwnProperty("java_string_check_utf8"))
                    object.java_string_check_utf8 = message.java_string_check_utf8;
                if (message.cc_enable_arenas != null && message.hasOwnProperty("cc_enable_arenas"))
                    object.cc_enable_arenas = message.cc_enable_arenas;
                if (message.objc_class_prefix != null && message.hasOwnProperty("objc_class_prefix"))
                    object.objc_class_prefix = message.objc_class_prefix;
                if (message.csharp_namespace != null && message.hasOwnProperty("csharp_namespace"))
                    object.csharp_namespace = message.csharp_namespace;
                if (message.uninterpreted_option && message.uninterpreted_option.length) {
                    object.uninterpreted_option = [];
                    for (var j = 0; j < message.uninterpreted_option.length; ++j)
                        object.uninterpreted_option[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpreted_option[j], options);
                }
                if (message[".scalapb.options"] != null && message.hasOwnProperty(".scalapb.options"))
                    object[".scalapb.options"] = $root.scalapb.ScalaPbOptions.toObject(message[".scalapb.options"], options);
                return object;
            };

            /**
             * Converts this FileOptions to JSON.
             * @function toJSON
             * @memberof google.protobuf.FileOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FileOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * OptimizeMode enum.
             * @name google.protobuf.FileOptions.OptimizeMode
             * @enum {string}
             * @property {number} SPEED=1 SPEED value
             * @property {number} CODE_SIZE=2 CODE_SIZE value
             * @property {number} LITE_RUNTIME=3 LITE_RUNTIME value
             */
            FileOptions.OptimizeMode = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[1] = "SPEED"] = 1;
                values[valuesById[2] = "CODE_SIZE"] = 2;
                values[valuesById[3] = "LITE_RUNTIME"] = 3;
                return values;
            })();

            return FileOptions;
        })();

        protobuf.MessageOptions = (function() {

            /**
             * Properties of a MessageOptions.
             * @memberof google.protobuf
             * @interface IMessageOptions
             * @property {boolean|null} [message_set_wire_format] MessageOptions message_set_wire_format
             * @property {boolean|null} [no_standard_descriptor_accessor] MessageOptions no_standard_descriptor_accessor
             * @property {boolean|null} [deprecated] MessageOptions deprecated
             * @property {boolean|null} [map_entry] MessageOptions map_entry
             * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpreted_option] MessageOptions uninterpreted_option
             * @property {scalapb.IMessageOptions|null} [".scalapb.message"] MessageOptions .scalapb.message
             */

            /**
             * Constructs a new MessageOptions.
             * @memberof google.protobuf
             * @classdesc Represents a MessageOptions.
             * @implements IMessageOptions
             * @constructor
             * @param {google.protobuf.IMessageOptions=} [properties] Properties to set
             */
            function MessageOptions(properties) {
                this.uninterpreted_option = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MessageOptions message_set_wire_format.
             * @member {boolean} message_set_wire_format
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype.message_set_wire_format = false;

            /**
             * MessageOptions no_standard_descriptor_accessor.
             * @member {boolean} no_standard_descriptor_accessor
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype.no_standard_descriptor_accessor = false;

            /**
             * MessageOptions deprecated.
             * @member {boolean} deprecated
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype.deprecated = false;

            /**
             * MessageOptions map_entry.
             * @member {boolean} map_entry
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype.map_entry = false;

            /**
             * MessageOptions uninterpreted_option.
             * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpreted_option
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype.uninterpreted_option = $util.emptyArray;

            /**
             * MessageOptions .scalapb.message.
             * @member {scalapb.IMessageOptions|null|undefined} .scalapb.message
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype[".scalapb.message"] = null;

            /**
             * Creates a new MessageOptions instance using the specified properties.
             * @function create
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {google.protobuf.IMessageOptions=} [properties] Properties to set
             * @returns {google.protobuf.MessageOptions} MessageOptions instance
             */
            MessageOptions.create = function create(properties) {
                return new MessageOptions(properties);
            };

            /**
             * Encodes the specified MessageOptions message. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {google.protobuf.IMessageOptions} message MessageOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.message_set_wire_format != null && message.hasOwnProperty("message_set_wire_format"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.message_set_wire_format);
                if (message.no_standard_descriptor_accessor != null && message.hasOwnProperty("no_standard_descriptor_accessor"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.no_standard_descriptor_accessor);
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.deprecated);
                if (message.map_entry != null && message.hasOwnProperty("map_entry"))
                    writer.uint32(/* id 7, wireType 0 =*/56).bool(message.map_entry);
                if (message.uninterpreted_option != null && message.uninterpreted_option.length)
                    for (var i = 0; i < message.uninterpreted_option.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                if (message[".scalapb.message"] != null && message.hasOwnProperty(".scalapb.message"))
                    $root.scalapb.MessageOptions.encode(message[".scalapb.message"], writer.uint32(/* id 1020, wireType 2 =*/8162).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified MessageOptions message, length delimited. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {google.protobuf.IMessageOptions} message MessageOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MessageOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.MessageOptions} MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.MessageOptions();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.message_set_wire_format = reader.bool();
                        break;
                    case 2:
                        message.no_standard_descriptor_accessor = reader.bool();
                        break;
                    case 3:
                        message.deprecated = reader.bool();
                        break;
                    case 7:
                        message.map_entry = reader.bool();
                        break;
                    case 999:
                        if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                            message.uninterpreted_option = [];
                        message.uninterpreted_option.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                        break;
                    case 1020:
                        message[".scalapb.message"] = $root.scalapb.MessageOptions.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a MessageOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.MessageOptions} MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MessageOptions message.
             * @function verify
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MessageOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.message_set_wire_format != null && message.hasOwnProperty("message_set_wire_format"))
                    if (typeof message.message_set_wire_format !== "boolean")
                        return "message_set_wire_format: boolean expected";
                if (message.no_standard_descriptor_accessor != null && message.hasOwnProperty("no_standard_descriptor_accessor"))
                    if (typeof message.no_standard_descriptor_accessor !== "boolean")
                        return "no_standard_descriptor_accessor: boolean expected";
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    if (typeof message.deprecated !== "boolean")
                        return "deprecated: boolean expected";
                if (message.map_entry != null && message.hasOwnProperty("map_entry"))
                    if (typeof message.map_entry !== "boolean")
                        return "map_entry: boolean expected";
                if (message.uninterpreted_option != null && message.hasOwnProperty("uninterpreted_option")) {
                    if (!Array.isArray(message.uninterpreted_option))
                        return "uninterpreted_option: array expected";
                    for (var i = 0; i < message.uninterpreted_option.length; ++i) {
                        var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpreted_option[i]);
                        if (error)
                            return "uninterpreted_option." + error;
                    }
                }
                if (message[".scalapb.message"] != null && message.hasOwnProperty(".scalapb.message")) {
                    var error = $root.scalapb.MessageOptions.verify(message[".scalapb.message"]);
                    if (error)
                        return ".scalapb.message." + error;
                }
                return null;
            };

            /**
             * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.MessageOptions} MessageOptions
             */
            MessageOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.MessageOptions)
                    return object;
                var message = new $root.google.protobuf.MessageOptions();
                if (object.message_set_wire_format != null)
                    message.message_set_wire_format = Boolean(object.message_set_wire_format);
                if (object.no_standard_descriptor_accessor != null)
                    message.no_standard_descriptor_accessor = Boolean(object.no_standard_descriptor_accessor);
                if (object.deprecated != null)
                    message.deprecated = Boolean(object.deprecated);
                if (object.map_entry != null)
                    message.map_entry = Boolean(object.map_entry);
                if (object.uninterpreted_option) {
                    if (!Array.isArray(object.uninterpreted_option))
                        throw TypeError(".google.protobuf.MessageOptions.uninterpreted_option: array expected");
                    message.uninterpreted_option = [];
                    for (var i = 0; i < object.uninterpreted_option.length; ++i) {
                        if (typeof object.uninterpreted_option[i] !== "object")
                            throw TypeError(".google.protobuf.MessageOptions.uninterpreted_option: object expected");
                        message.uninterpreted_option[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpreted_option[i]);
                    }
                }
                if (object[".scalapb.message"] != null) {
                    if (typeof object[".scalapb.message"] !== "object")
                        throw TypeError(".google.protobuf.MessageOptions..scalapb.message: object expected");
                    message[".scalapb.message"] = $root.scalapb.MessageOptions.fromObject(object[".scalapb.message"]);
                }
                return message;
            };

            /**
             * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {google.protobuf.MessageOptions} message MessageOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessageOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.uninterpreted_option = [];
                if (options.defaults) {
                    object.message_set_wire_format = false;
                    object.no_standard_descriptor_accessor = false;
                    object.deprecated = false;
                    object.map_entry = false;
                    object[".scalapb.message"] = null;
                }
                if (message.message_set_wire_format != null && message.hasOwnProperty("message_set_wire_format"))
                    object.message_set_wire_format = message.message_set_wire_format;
                if (message.no_standard_descriptor_accessor != null && message.hasOwnProperty("no_standard_descriptor_accessor"))
                    object.no_standard_descriptor_accessor = message.no_standard_descriptor_accessor;
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    object.deprecated = message.deprecated;
                if (message.map_entry != null && message.hasOwnProperty("map_entry"))
                    object.map_entry = message.map_entry;
                if (message.uninterpreted_option && message.uninterpreted_option.length) {
                    object.uninterpreted_option = [];
                    for (var j = 0; j < message.uninterpreted_option.length; ++j)
                        object.uninterpreted_option[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpreted_option[j], options);
                }
                if (message[".scalapb.message"] != null && message.hasOwnProperty(".scalapb.message"))
                    object[".scalapb.message"] = $root.scalapb.MessageOptions.toObject(message[".scalapb.message"], options);
                return object;
            };

            /**
             * Converts this MessageOptions to JSON.
             * @function toJSON
             * @memberof google.protobuf.MessageOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MessageOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MessageOptions;
        })();

        protobuf.FieldOptions = (function() {

            /**
             * Properties of a FieldOptions.
             * @memberof google.protobuf
             * @interface IFieldOptions
             * @property {google.protobuf.FieldOptions.CType|null} [ctype] FieldOptions ctype
             * @property {boolean|null} [packed] FieldOptions packed
             * @property {google.protobuf.FieldOptions.JSType|null} [jstype] FieldOptions jstype
             * @property {boolean|null} [lazy] FieldOptions lazy
             * @property {boolean|null} [deprecated] FieldOptions deprecated
             * @property {boolean|null} [weak] FieldOptions weak
             * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpreted_option] FieldOptions uninterpreted_option
             * @property {scalapb.IFieldOptions|null} [".scalapb.field"] FieldOptions .scalapb.field
             */

            /**
             * Constructs a new FieldOptions.
             * @memberof google.protobuf
             * @classdesc Represents a FieldOptions.
             * @implements IFieldOptions
             * @constructor
             * @param {google.protobuf.IFieldOptions=} [properties] Properties to set
             */
            function FieldOptions(properties) {
                this.uninterpreted_option = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FieldOptions ctype.
             * @member {google.protobuf.FieldOptions.CType} ctype
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.ctype = 0;

            /**
             * FieldOptions packed.
             * @member {boolean} packed
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.packed = false;

            /**
             * FieldOptions jstype.
             * @member {google.protobuf.FieldOptions.JSType} jstype
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.jstype = 0;

            /**
             * FieldOptions lazy.
             * @member {boolean} lazy
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.lazy = false;

            /**
             * FieldOptions deprecated.
             * @member {boolean} deprecated
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.deprecated = false;

            /**
             * FieldOptions weak.
             * @member {boolean} weak
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.weak = false;

            /**
             * FieldOptions uninterpreted_option.
             * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpreted_option
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.uninterpreted_option = $util.emptyArray;

            /**
             * FieldOptions .scalapb.field.
             * @member {scalapb.IFieldOptions|null|undefined} .scalapb.field
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype[".scalapb.field"] = null;

            /**
             * Creates a new FieldOptions instance using the specified properties.
             * @function create
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {google.protobuf.IFieldOptions=} [properties] Properties to set
             * @returns {google.protobuf.FieldOptions} FieldOptions instance
             */
            FieldOptions.create = function create(properties) {
                return new FieldOptions(properties);
            };

            /**
             * Encodes the specified FieldOptions message. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {google.protobuf.IFieldOptions} message FieldOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FieldOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.ctype != null && message.hasOwnProperty("ctype"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ctype);
                if (message.packed != null && message.hasOwnProperty("packed"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.packed);
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.deprecated);
                if (message.lazy != null && message.hasOwnProperty("lazy"))
                    writer.uint32(/* id 5, wireType 0 =*/40).bool(message.lazy);
                if (message.jstype != null && message.hasOwnProperty("jstype"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int32(message.jstype);
                if (message.weak != null && message.hasOwnProperty("weak"))
                    writer.uint32(/* id 10, wireType 0 =*/80).bool(message.weak);
                if (message.uninterpreted_option != null && message.uninterpreted_option.length)
                    for (var i = 0; i < message.uninterpreted_option.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                if (message[".scalapb.field"] != null && message.hasOwnProperty(".scalapb.field"))
                    $root.scalapb.FieldOptions.encode(message[".scalapb.field"], writer.uint32(/* id 1020, wireType 2 =*/8162).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified FieldOptions message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {google.protobuf.IFieldOptions} message FieldOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FieldOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FieldOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FieldOptions} FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FieldOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FieldOptions();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.ctype = reader.int32();
                        break;
                    case 2:
                        message.packed = reader.bool();
                        break;
                    case 6:
                        message.jstype = reader.int32();
                        break;
                    case 5:
                        message.lazy = reader.bool();
                        break;
                    case 3:
                        message.deprecated = reader.bool();
                        break;
                    case 10:
                        message.weak = reader.bool();
                        break;
                    case 999:
                        if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                            message.uninterpreted_option = [];
                        message.uninterpreted_option.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                        break;
                    case 1020:
                        message[".scalapb.field"] = $root.scalapb.FieldOptions.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a FieldOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.FieldOptions} FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FieldOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FieldOptions message.
             * @function verify
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FieldOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.ctype != null && message.hasOwnProperty("ctype"))
                    switch (message.ctype) {
                    default:
                        return "ctype: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                if (message.packed != null && message.hasOwnProperty("packed"))
                    if (typeof message.packed !== "boolean")
                        return "packed: boolean expected";
                if (message.jstype != null && message.hasOwnProperty("jstype"))
                    switch (message.jstype) {
                    default:
                        return "jstype: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                if (message.lazy != null && message.hasOwnProperty("lazy"))
                    if (typeof message.lazy !== "boolean")
                        return "lazy: boolean expected";
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    if (typeof message.deprecated !== "boolean")
                        return "deprecated: boolean expected";
                if (message.weak != null && message.hasOwnProperty("weak"))
                    if (typeof message.weak !== "boolean")
                        return "weak: boolean expected";
                if (message.uninterpreted_option != null && message.hasOwnProperty("uninterpreted_option")) {
                    if (!Array.isArray(message.uninterpreted_option))
                        return "uninterpreted_option: array expected";
                    for (var i = 0; i < message.uninterpreted_option.length; ++i) {
                        var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpreted_option[i]);
                        if (error)
                            return "uninterpreted_option." + error;
                    }
                }
                if (message[".scalapb.field"] != null && message.hasOwnProperty(".scalapb.field")) {
                    var error = $root.scalapb.FieldOptions.verify(message[".scalapb.field"]);
                    if (error)
                        return ".scalapb.field." + error;
                }
                return null;
            };

            /**
             * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FieldOptions} FieldOptions
             */
            FieldOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.FieldOptions)
                    return object;
                var message = new $root.google.protobuf.FieldOptions();
                switch (object.ctype) {
                case "STRING":
                case 0:
                    message.ctype = 0;
                    break;
                case "CORD":
                case 1:
                    message.ctype = 1;
                    break;
                case "STRING_PIECE":
                case 2:
                    message.ctype = 2;
                    break;
                }
                if (object.packed != null)
                    message.packed = Boolean(object.packed);
                switch (object.jstype) {
                case "JS_NORMAL":
                case 0:
                    message.jstype = 0;
                    break;
                case "JS_STRING":
                case 1:
                    message.jstype = 1;
                    break;
                case "JS_NUMBER":
                case 2:
                    message.jstype = 2;
                    break;
                }
                if (object.lazy != null)
                    message.lazy = Boolean(object.lazy);
                if (object.deprecated != null)
                    message.deprecated = Boolean(object.deprecated);
                if (object.weak != null)
                    message.weak = Boolean(object.weak);
                if (object.uninterpreted_option) {
                    if (!Array.isArray(object.uninterpreted_option))
                        throw TypeError(".google.protobuf.FieldOptions.uninterpreted_option: array expected");
                    message.uninterpreted_option = [];
                    for (var i = 0; i < object.uninterpreted_option.length; ++i) {
                        if (typeof object.uninterpreted_option[i] !== "object")
                            throw TypeError(".google.protobuf.FieldOptions.uninterpreted_option: object expected");
                        message.uninterpreted_option[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpreted_option[i]);
                    }
                }
                if (object[".scalapb.field"] != null) {
                    if (typeof object[".scalapb.field"] !== "object")
                        throw TypeError(".google.protobuf.FieldOptions..scalapb.field: object expected");
                    message[".scalapb.field"] = $root.scalapb.FieldOptions.fromObject(object[".scalapb.field"]);
                }
                return message;
            };

            /**
             * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {google.protobuf.FieldOptions} message FieldOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FieldOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.uninterpreted_option = [];
                if (options.defaults) {
                    object.ctype = options.enums === String ? "STRING" : 0;
                    object.packed = false;
                    object.deprecated = false;
                    object.lazy = false;
                    object.jstype = options.enums === String ? "JS_NORMAL" : 0;
                    object.weak = false;
                    object[".scalapb.field"] = null;
                }
                if (message.ctype != null && message.hasOwnProperty("ctype"))
                    object.ctype = options.enums === String ? $root.google.protobuf.FieldOptions.CType[message.ctype] : message.ctype;
                if (message.packed != null && message.hasOwnProperty("packed"))
                    object.packed = message.packed;
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    object.deprecated = message.deprecated;
                if (message.lazy != null && message.hasOwnProperty("lazy"))
                    object.lazy = message.lazy;
                if (message.jstype != null && message.hasOwnProperty("jstype"))
                    object.jstype = options.enums === String ? $root.google.protobuf.FieldOptions.JSType[message.jstype] : message.jstype;
                if (message.weak != null && message.hasOwnProperty("weak"))
                    object.weak = message.weak;
                if (message.uninterpreted_option && message.uninterpreted_option.length) {
                    object.uninterpreted_option = [];
                    for (var j = 0; j < message.uninterpreted_option.length; ++j)
                        object.uninterpreted_option[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpreted_option[j], options);
                }
                if (message[".scalapb.field"] != null && message.hasOwnProperty(".scalapb.field"))
                    object[".scalapb.field"] = $root.scalapb.FieldOptions.toObject(message[".scalapb.field"], options);
                return object;
            };

            /**
             * Converts this FieldOptions to JSON.
             * @function toJSON
             * @memberof google.protobuf.FieldOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FieldOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * CType enum.
             * @name google.protobuf.FieldOptions.CType
             * @enum {string}
             * @property {number} STRING=0 STRING value
             * @property {number} CORD=1 CORD value
             * @property {number} STRING_PIECE=2 STRING_PIECE value
             */
            FieldOptions.CType = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "STRING"] = 0;
                values[valuesById[1] = "CORD"] = 1;
                values[valuesById[2] = "STRING_PIECE"] = 2;
                return values;
            })();

            /**
             * JSType enum.
             * @name google.protobuf.FieldOptions.JSType
             * @enum {string}
             * @property {number} JS_NORMAL=0 JS_NORMAL value
             * @property {number} JS_STRING=1 JS_STRING value
             * @property {number} JS_NUMBER=2 JS_NUMBER value
             */
            FieldOptions.JSType = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "JS_NORMAL"] = 0;
                values[valuesById[1] = "JS_STRING"] = 1;
                values[valuesById[2] = "JS_NUMBER"] = 2;
                return values;
            })();

            return FieldOptions;
        })();

        protobuf.OneofOptions = (function() {

            /**
             * Properties of an OneofOptions.
             * @memberof google.protobuf
             * @interface IOneofOptions
             * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpreted_option] OneofOptions uninterpreted_option
             */

            /**
             * Constructs a new OneofOptions.
             * @memberof google.protobuf
             * @classdesc Represents an OneofOptions.
             * @implements IOneofOptions
             * @constructor
             * @param {google.protobuf.IOneofOptions=} [properties] Properties to set
             */
            function OneofOptions(properties) {
                this.uninterpreted_option = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * OneofOptions uninterpreted_option.
             * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpreted_option
             * @memberof google.protobuf.OneofOptions
             * @instance
             */
            OneofOptions.prototype.uninterpreted_option = $util.emptyArray;

            /**
             * Creates a new OneofOptions instance using the specified properties.
             * @function create
             * @memberof google.protobuf.OneofOptions
             * @static
             * @param {google.protobuf.IOneofOptions=} [properties] Properties to set
             * @returns {google.protobuf.OneofOptions} OneofOptions instance
             */
            OneofOptions.create = function create(properties) {
                return new OneofOptions(properties);
            };

            /**
             * Encodes the specified OneofOptions message. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.OneofOptions
             * @static
             * @param {google.protobuf.IOneofOptions} message OneofOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OneofOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.uninterpreted_option != null && message.uninterpreted_option.length)
                    for (var i = 0; i < message.uninterpreted_option.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified OneofOptions message, length delimited. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.OneofOptions
             * @static
             * @param {google.protobuf.IOneofOptions} message OneofOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OneofOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an OneofOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.OneofOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.OneofOptions} OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OneofOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.OneofOptions();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 999:
                        if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                            message.uninterpreted_option = [];
                        message.uninterpreted_option.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an OneofOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.OneofOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.OneofOptions} OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OneofOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an OneofOptions message.
             * @function verify
             * @memberof google.protobuf.OneofOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            OneofOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.uninterpreted_option != null && message.hasOwnProperty("uninterpreted_option")) {
                    if (!Array.isArray(message.uninterpreted_option))
                        return "uninterpreted_option: array expected";
                    for (var i = 0; i < message.uninterpreted_option.length; ++i) {
                        var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpreted_option[i]);
                        if (error)
                            return "uninterpreted_option." + error;
                    }
                }
                return null;
            };

            /**
             * Creates an OneofOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.OneofOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.OneofOptions} OneofOptions
             */
            OneofOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.OneofOptions)
                    return object;
                var message = new $root.google.protobuf.OneofOptions();
                if (object.uninterpreted_option) {
                    if (!Array.isArray(object.uninterpreted_option))
                        throw TypeError(".google.protobuf.OneofOptions.uninterpreted_option: array expected");
                    message.uninterpreted_option = [];
                    for (var i = 0; i < object.uninterpreted_option.length; ++i) {
                        if (typeof object.uninterpreted_option[i] !== "object")
                            throw TypeError(".google.protobuf.OneofOptions.uninterpreted_option: object expected");
                        message.uninterpreted_option[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpreted_option[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from an OneofOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.OneofOptions
             * @static
             * @param {google.protobuf.OneofOptions} message OneofOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OneofOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.uninterpreted_option = [];
                if (message.uninterpreted_option && message.uninterpreted_option.length) {
                    object.uninterpreted_option = [];
                    for (var j = 0; j < message.uninterpreted_option.length; ++j)
                        object.uninterpreted_option[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpreted_option[j], options);
                }
                return object;
            };

            /**
             * Converts this OneofOptions to JSON.
             * @function toJSON
             * @memberof google.protobuf.OneofOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            OneofOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return OneofOptions;
        })();

        protobuf.EnumOptions = (function() {

            /**
             * Properties of an EnumOptions.
             * @memberof google.protobuf
             * @interface IEnumOptions
             * @property {boolean|null} [allow_alias] EnumOptions allow_alias
             * @property {boolean|null} [deprecated] EnumOptions deprecated
             * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpreted_option] EnumOptions uninterpreted_option
             * @property {scalapb.IEnumOptions|null} [".scalapb.enum_options"] EnumOptions .scalapb.enum_options
             */

            /**
             * Constructs a new EnumOptions.
             * @memberof google.protobuf
             * @classdesc Represents an EnumOptions.
             * @implements IEnumOptions
             * @constructor
             * @param {google.protobuf.IEnumOptions=} [properties] Properties to set
             */
            function EnumOptions(properties) {
                this.uninterpreted_option = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * EnumOptions allow_alias.
             * @member {boolean} allow_alias
             * @memberof google.protobuf.EnumOptions
             * @instance
             */
            EnumOptions.prototype.allow_alias = false;

            /**
             * EnumOptions deprecated.
             * @member {boolean} deprecated
             * @memberof google.protobuf.EnumOptions
             * @instance
             */
            EnumOptions.prototype.deprecated = false;

            /**
             * EnumOptions uninterpreted_option.
             * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpreted_option
             * @memberof google.protobuf.EnumOptions
             * @instance
             */
            EnumOptions.prototype.uninterpreted_option = $util.emptyArray;

            /**
             * EnumOptions .scalapb.enum_options.
             * @member {scalapb.IEnumOptions|null|undefined} .scalapb.enum_options
             * @memberof google.protobuf.EnumOptions
             * @instance
             */
            EnumOptions.prototype[".scalapb.enum_options"] = null;

            /**
             * Creates a new EnumOptions instance using the specified properties.
             * @function create
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {google.protobuf.IEnumOptions=} [properties] Properties to set
             * @returns {google.protobuf.EnumOptions} EnumOptions instance
             */
            EnumOptions.create = function create(properties) {
                return new EnumOptions(properties);
            };

            /**
             * Encodes the specified EnumOptions message. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {google.protobuf.IEnumOptions} message EnumOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.allow_alias != null && message.hasOwnProperty("allow_alias"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.allow_alias);
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.deprecated);
                if (message.uninterpreted_option != null && message.uninterpreted_option.length)
                    for (var i = 0; i < message.uninterpreted_option.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                if (message[".scalapb.enum_options"] != null && message.hasOwnProperty(".scalapb.enum_options"))
                    $root.scalapb.EnumOptions.encode(message[".scalapb.enum_options"], writer.uint32(/* id 1020, wireType 2 =*/8162).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified EnumOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {google.protobuf.IEnumOptions} message EnumOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an EnumOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.EnumOptions} EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumOptions();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 2:
                        message.allow_alias = reader.bool();
                        break;
                    case 3:
                        message.deprecated = reader.bool();
                        break;
                    case 999:
                        if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                            message.uninterpreted_option = [];
                        message.uninterpreted_option.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                        break;
                    case 1020:
                        message[".scalapb.enum_options"] = $root.scalapb.EnumOptions.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an EnumOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.EnumOptions} EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an EnumOptions message.
             * @function verify
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            EnumOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.allow_alias != null && message.hasOwnProperty("allow_alias"))
                    if (typeof message.allow_alias !== "boolean")
                        return "allow_alias: boolean expected";
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    if (typeof message.deprecated !== "boolean")
                        return "deprecated: boolean expected";
                if (message.uninterpreted_option != null && message.hasOwnProperty("uninterpreted_option")) {
                    if (!Array.isArray(message.uninterpreted_option))
                        return "uninterpreted_option: array expected";
                    for (var i = 0; i < message.uninterpreted_option.length; ++i) {
                        var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpreted_option[i]);
                        if (error)
                            return "uninterpreted_option." + error;
                    }
                }
                if (message[".scalapb.enum_options"] != null && message.hasOwnProperty(".scalapb.enum_options")) {
                    var error = $root.scalapb.EnumOptions.verify(message[".scalapb.enum_options"]);
                    if (error)
                        return ".scalapb.enum_options." + error;
                }
                return null;
            };

            /**
             * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.EnumOptions} EnumOptions
             */
            EnumOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.EnumOptions)
                    return object;
                var message = new $root.google.protobuf.EnumOptions();
                if (object.allow_alias != null)
                    message.allow_alias = Boolean(object.allow_alias);
                if (object.deprecated != null)
                    message.deprecated = Boolean(object.deprecated);
                if (object.uninterpreted_option) {
                    if (!Array.isArray(object.uninterpreted_option))
                        throw TypeError(".google.protobuf.EnumOptions.uninterpreted_option: array expected");
                    message.uninterpreted_option = [];
                    for (var i = 0; i < object.uninterpreted_option.length; ++i) {
                        if (typeof object.uninterpreted_option[i] !== "object")
                            throw TypeError(".google.protobuf.EnumOptions.uninterpreted_option: object expected");
                        message.uninterpreted_option[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpreted_option[i]);
                    }
                }
                if (object[".scalapb.enum_options"] != null) {
                    if (typeof object[".scalapb.enum_options"] !== "object")
                        throw TypeError(".google.protobuf.EnumOptions..scalapb.enum_options: object expected");
                    message[".scalapb.enum_options"] = $root.scalapb.EnumOptions.fromObject(object[".scalapb.enum_options"]);
                }
                return message;
            };

            /**
             * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {google.protobuf.EnumOptions} message EnumOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EnumOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.uninterpreted_option = [];
                if (options.defaults) {
                    object.allow_alias = false;
                    object.deprecated = false;
                    object[".scalapb.enum_options"] = null;
                }
                if (message.allow_alias != null && message.hasOwnProperty("allow_alias"))
                    object.allow_alias = message.allow_alias;
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    object.deprecated = message.deprecated;
                if (message.uninterpreted_option && message.uninterpreted_option.length) {
                    object.uninterpreted_option = [];
                    for (var j = 0; j < message.uninterpreted_option.length; ++j)
                        object.uninterpreted_option[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpreted_option[j], options);
                }
                if (message[".scalapb.enum_options"] != null && message.hasOwnProperty(".scalapb.enum_options"))
                    object[".scalapb.enum_options"] = $root.scalapb.EnumOptions.toObject(message[".scalapb.enum_options"], options);
                return object;
            };

            /**
             * Converts this EnumOptions to JSON.
             * @function toJSON
             * @memberof google.protobuf.EnumOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            EnumOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return EnumOptions;
        })();

        protobuf.EnumValueOptions = (function() {

            /**
             * Properties of an EnumValueOptions.
             * @memberof google.protobuf
             * @interface IEnumValueOptions
             * @property {boolean|null} [deprecated] EnumValueOptions deprecated
             * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpreted_option] EnumValueOptions uninterpreted_option
             * @property {scalapb.IEnumValueOptions|null} [".scalapb.enum_value"] EnumValueOptions .scalapb.enum_value
             */

            /**
             * Constructs a new EnumValueOptions.
             * @memberof google.protobuf
             * @classdesc Represents an EnumValueOptions.
             * @implements IEnumValueOptions
             * @constructor
             * @param {google.protobuf.IEnumValueOptions=} [properties] Properties to set
             */
            function EnumValueOptions(properties) {
                this.uninterpreted_option = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * EnumValueOptions deprecated.
             * @member {boolean} deprecated
             * @memberof google.protobuf.EnumValueOptions
             * @instance
             */
            EnumValueOptions.prototype.deprecated = false;

            /**
             * EnumValueOptions uninterpreted_option.
             * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpreted_option
             * @memberof google.protobuf.EnumValueOptions
             * @instance
             */
            EnumValueOptions.prototype.uninterpreted_option = $util.emptyArray;

            /**
             * EnumValueOptions .scalapb.enum_value.
             * @member {scalapb.IEnumValueOptions|null|undefined} .scalapb.enum_value
             * @memberof google.protobuf.EnumValueOptions
             * @instance
             */
            EnumValueOptions.prototype[".scalapb.enum_value"] = null;

            /**
             * Creates a new EnumValueOptions instance using the specified properties.
             * @function create
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {google.protobuf.IEnumValueOptions=} [properties] Properties to set
             * @returns {google.protobuf.EnumValueOptions} EnumValueOptions instance
             */
            EnumValueOptions.create = function create(properties) {
                return new EnumValueOptions(properties);
            };

            /**
             * Encodes the specified EnumValueOptions message. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {google.protobuf.IEnumValueOptions} message EnumValueOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumValueOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.deprecated);
                if (message.uninterpreted_option != null && message.uninterpreted_option.length)
                    for (var i = 0; i < message.uninterpreted_option.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                if (message[".scalapb.enum_value"] != null && message.hasOwnProperty(".scalapb.enum_value"))
                    $root.scalapb.EnumValueOptions.encode(message[".scalapb.enum_value"], writer.uint32(/* id 1020, wireType 2 =*/8162).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified EnumValueOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {google.protobuf.IEnumValueOptions} message EnumValueOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumValueOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.EnumValueOptions} EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumValueOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumValueOptions();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.deprecated = reader.bool();
                        break;
                    case 999:
                        if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                            message.uninterpreted_option = [];
                        message.uninterpreted_option.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                        break;
                    case 1020:
                        message[".scalapb.enum_value"] = $root.scalapb.EnumValueOptions.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.EnumValueOptions} EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumValueOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an EnumValueOptions message.
             * @function verify
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            EnumValueOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    if (typeof message.deprecated !== "boolean")
                        return "deprecated: boolean expected";
                if (message.uninterpreted_option != null && message.hasOwnProperty("uninterpreted_option")) {
                    if (!Array.isArray(message.uninterpreted_option))
                        return "uninterpreted_option: array expected";
                    for (var i = 0; i < message.uninterpreted_option.length; ++i) {
                        var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpreted_option[i]);
                        if (error)
                            return "uninterpreted_option." + error;
                    }
                }
                if (message[".scalapb.enum_value"] != null && message.hasOwnProperty(".scalapb.enum_value")) {
                    var error = $root.scalapb.EnumValueOptions.verify(message[".scalapb.enum_value"]);
                    if (error)
                        return ".scalapb.enum_value." + error;
                }
                return null;
            };

            /**
             * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.EnumValueOptions} EnumValueOptions
             */
            EnumValueOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.EnumValueOptions)
                    return object;
                var message = new $root.google.protobuf.EnumValueOptions();
                if (object.deprecated != null)
                    message.deprecated = Boolean(object.deprecated);
                if (object.uninterpreted_option) {
                    if (!Array.isArray(object.uninterpreted_option))
                        throw TypeError(".google.protobuf.EnumValueOptions.uninterpreted_option: array expected");
                    message.uninterpreted_option = [];
                    for (var i = 0; i < object.uninterpreted_option.length; ++i) {
                        if (typeof object.uninterpreted_option[i] !== "object")
                            throw TypeError(".google.protobuf.EnumValueOptions.uninterpreted_option: object expected");
                        message.uninterpreted_option[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpreted_option[i]);
                    }
                }
                if (object[".scalapb.enum_value"] != null) {
                    if (typeof object[".scalapb.enum_value"] !== "object")
                        throw TypeError(".google.protobuf.EnumValueOptions..scalapb.enum_value: object expected");
                    message[".scalapb.enum_value"] = $root.scalapb.EnumValueOptions.fromObject(object[".scalapb.enum_value"]);
                }
                return message;
            };

            /**
             * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {google.protobuf.EnumValueOptions} message EnumValueOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EnumValueOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.uninterpreted_option = [];
                if (options.defaults) {
                    object.deprecated = false;
                    object[".scalapb.enum_value"] = null;
                }
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    object.deprecated = message.deprecated;
                if (message.uninterpreted_option && message.uninterpreted_option.length) {
                    object.uninterpreted_option = [];
                    for (var j = 0; j < message.uninterpreted_option.length; ++j)
                        object.uninterpreted_option[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpreted_option[j], options);
                }
                if (message[".scalapb.enum_value"] != null && message.hasOwnProperty(".scalapb.enum_value"))
                    object[".scalapb.enum_value"] = $root.scalapb.EnumValueOptions.toObject(message[".scalapb.enum_value"], options);
                return object;
            };

            /**
             * Converts this EnumValueOptions to JSON.
             * @function toJSON
             * @memberof google.protobuf.EnumValueOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            EnumValueOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return EnumValueOptions;
        })();

        protobuf.ServiceOptions = (function() {

            /**
             * Properties of a ServiceOptions.
             * @memberof google.protobuf
             * @interface IServiceOptions
             * @property {boolean|null} [deprecated] ServiceOptions deprecated
             * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpreted_option] ServiceOptions uninterpreted_option
             */

            /**
             * Constructs a new ServiceOptions.
             * @memberof google.protobuf
             * @classdesc Represents a ServiceOptions.
             * @implements IServiceOptions
             * @constructor
             * @param {google.protobuf.IServiceOptions=} [properties] Properties to set
             */
            function ServiceOptions(properties) {
                this.uninterpreted_option = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ServiceOptions deprecated.
             * @member {boolean} deprecated
             * @memberof google.protobuf.ServiceOptions
             * @instance
             */
            ServiceOptions.prototype.deprecated = false;

            /**
             * ServiceOptions uninterpreted_option.
             * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpreted_option
             * @memberof google.protobuf.ServiceOptions
             * @instance
             */
            ServiceOptions.prototype.uninterpreted_option = $util.emptyArray;

            /**
             * Creates a new ServiceOptions instance using the specified properties.
             * @function create
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {google.protobuf.IServiceOptions=} [properties] Properties to set
             * @returns {google.protobuf.ServiceOptions} ServiceOptions instance
             */
            ServiceOptions.create = function create(properties) {
                return new ServiceOptions(properties);
            };

            /**
             * Encodes the specified ServiceOptions message. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {google.protobuf.IServiceOptions} message ServiceOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ServiceOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    writer.uint32(/* id 33, wireType 0 =*/264).bool(message.deprecated);
                if (message.uninterpreted_option != null && message.uninterpreted_option.length)
                    for (var i = 0; i < message.uninterpreted_option.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ServiceOptions message, length delimited. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {google.protobuf.IServiceOptions} message ServiceOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ServiceOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.ServiceOptions} ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ServiceOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.ServiceOptions();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 33:
                        message.deprecated = reader.bool();
                        break;
                    case 999:
                        if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                            message.uninterpreted_option = [];
                        message.uninterpreted_option.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.ServiceOptions} ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ServiceOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ServiceOptions message.
             * @function verify
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ServiceOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    if (typeof message.deprecated !== "boolean")
                        return "deprecated: boolean expected";
                if (message.uninterpreted_option != null && message.hasOwnProperty("uninterpreted_option")) {
                    if (!Array.isArray(message.uninterpreted_option))
                        return "uninterpreted_option: array expected";
                    for (var i = 0; i < message.uninterpreted_option.length; ++i) {
                        var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpreted_option[i]);
                        if (error)
                            return "uninterpreted_option." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.ServiceOptions} ServiceOptions
             */
            ServiceOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.ServiceOptions)
                    return object;
                var message = new $root.google.protobuf.ServiceOptions();
                if (object.deprecated != null)
                    message.deprecated = Boolean(object.deprecated);
                if (object.uninterpreted_option) {
                    if (!Array.isArray(object.uninterpreted_option))
                        throw TypeError(".google.protobuf.ServiceOptions.uninterpreted_option: array expected");
                    message.uninterpreted_option = [];
                    for (var i = 0; i < object.uninterpreted_option.length; ++i) {
                        if (typeof object.uninterpreted_option[i] !== "object")
                            throw TypeError(".google.protobuf.ServiceOptions.uninterpreted_option: object expected");
                        message.uninterpreted_option[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpreted_option[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a ServiceOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {google.protobuf.ServiceOptions} message ServiceOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ServiceOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.uninterpreted_option = [];
                if (options.defaults)
                    object.deprecated = false;
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    object.deprecated = message.deprecated;
                if (message.uninterpreted_option && message.uninterpreted_option.length) {
                    object.uninterpreted_option = [];
                    for (var j = 0; j < message.uninterpreted_option.length; ++j)
                        object.uninterpreted_option[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpreted_option[j], options);
                }
                return object;
            };

            /**
             * Converts this ServiceOptions to JSON.
             * @function toJSON
             * @memberof google.protobuf.ServiceOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ServiceOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ServiceOptions;
        })();

        protobuf.MethodOptions = (function() {

            /**
             * Properties of a MethodOptions.
             * @memberof google.protobuf
             * @interface IMethodOptions
             * @property {boolean|null} [deprecated] MethodOptions deprecated
             * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpreted_option] MethodOptions uninterpreted_option
             */

            /**
             * Constructs a new MethodOptions.
             * @memberof google.protobuf
             * @classdesc Represents a MethodOptions.
             * @implements IMethodOptions
             * @constructor
             * @param {google.protobuf.IMethodOptions=} [properties] Properties to set
             */
            function MethodOptions(properties) {
                this.uninterpreted_option = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MethodOptions deprecated.
             * @member {boolean} deprecated
             * @memberof google.protobuf.MethodOptions
             * @instance
             */
            MethodOptions.prototype.deprecated = false;

            /**
             * MethodOptions uninterpreted_option.
             * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpreted_option
             * @memberof google.protobuf.MethodOptions
             * @instance
             */
            MethodOptions.prototype.uninterpreted_option = $util.emptyArray;

            /**
             * Creates a new MethodOptions instance using the specified properties.
             * @function create
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {google.protobuf.IMethodOptions=} [properties] Properties to set
             * @returns {google.protobuf.MethodOptions} MethodOptions instance
             */
            MethodOptions.create = function create(properties) {
                return new MethodOptions(properties);
            };

            /**
             * Encodes the specified MethodOptions message. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {google.protobuf.IMethodOptions} message MethodOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MethodOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    writer.uint32(/* id 33, wireType 0 =*/264).bool(message.deprecated);
                if (message.uninterpreted_option != null && message.uninterpreted_option.length)
                    for (var i = 0; i < message.uninterpreted_option.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified MethodOptions message, length delimited. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {google.protobuf.IMethodOptions} message MethodOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MethodOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MethodOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.MethodOptions} MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MethodOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.MethodOptions();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 33:
                        message.deprecated = reader.bool();
                        break;
                    case 999:
                        if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                            message.uninterpreted_option = [];
                        message.uninterpreted_option.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a MethodOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.MethodOptions} MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MethodOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MethodOptions message.
             * @function verify
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MethodOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    if (typeof message.deprecated !== "boolean")
                        return "deprecated: boolean expected";
                if (message.uninterpreted_option != null && message.hasOwnProperty("uninterpreted_option")) {
                    if (!Array.isArray(message.uninterpreted_option))
                        return "uninterpreted_option: array expected";
                    for (var i = 0; i < message.uninterpreted_option.length; ++i) {
                        var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpreted_option[i]);
                        if (error)
                            return "uninterpreted_option." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.MethodOptions} MethodOptions
             */
            MethodOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.MethodOptions)
                    return object;
                var message = new $root.google.protobuf.MethodOptions();
                if (object.deprecated != null)
                    message.deprecated = Boolean(object.deprecated);
                if (object.uninterpreted_option) {
                    if (!Array.isArray(object.uninterpreted_option))
                        throw TypeError(".google.protobuf.MethodOptions.uninterpreted_option: array expected");
                    message.uninterpreted_option = [];
                    for (var i = 0; i < object.uninterpreted_option.length; ++i) {
                        if (typeof object.uninterpreted_option[i] !== "object")
                            throw TypeError(".google.protobuf.MethodOptions.uninterpreted_option: object expected");
                        message.uninterpreted_option[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpreted_option[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a MethodOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {google.protobuf.MethodOptions} message MethodOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MethodOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.uninterpreted_option = [];
                if (options.defaults)
                    object.deprecated = false;
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    object.deprecated = message.deprecated;
                if (message.uninterpreted_option && message.uninterpreted_option.length) {
                    object.uninterpreted_option = [];
                    for (var j = 0; j < message.uninterpreted_option.length; ++j)
                        object.uninterpreted_option[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpreted_option[j], options);
                }
                return object;
            };

            /**
             * Converts this MethodOptions to JSON.
             * @function toJSON
             * @memberof google.protobuf.MethodOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MethodOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MethodOptions;
        })();

        protobuf.UninterpretedOption = (function() {

            /**
             * Properties of an UninterpretedOption.
             * @memberof google.protobuf
             * @interface IUninterpretedOption
             * @property {Array.<google.protobuf.UninterpretedOption.INamePart>|null} [name] UninterpretedOption name
             * @property {string|null} [identifier_value] UninterpretedOption identifier_value
             * @property {number|Long|null} [positive_int_value] UninterpretedOption positive_int_value
             * @property {number|Long|null} [negative_int_value] UninterpretedOption negative_int_value
             * @property {number|null} [double_value] UninterpretedOption double_value
             * @property {Uint8Array|null} [string_value] UninterpretedOption string_value
             * @property {string|null} [aggregate_value] UninterpretedOption aggregate_value
             */

            /**
             * Constructs a new UninterpretedOption.
             * @memberof google.protobuf
             * @classdesc Represents an UninterpretedOption.
             * @implements IUninterpretedOption
             * @constructor
             * @param {google.protobuf.IUninterpretedOption=} [properties] Properties to set
             */
            function UninterpretedOption(properties) {
                this.name = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UninterpretedOption name.
             * @member {Array.<google.protobuf.UninterpretedOption.INamePart>} name
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.name = $util.emptyArray;

            /**
             * UninterpretedOption identifier_value.
             * @member {string} identifier_value
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.identifier_value = "";

            /**
             * UninterpretedOption positive_int_value.
             * @member {number|Long} positive_int_value
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.positive_int_value = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * UninterpretedOption negative_int_value.
             * @member {number|Long} negative_int_value
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.negative_int_value = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * UninterpretedOption double_value.
             * @member {number} double_value
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.double_value = 0;

            /**
             * UninterpretedOption string_value.
             * @member {Uint8Array} string_value
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.string_value = $util.newBuffer([]);

            /**
             * UninterpretedOption aggregate_value.
             * @member {string} aggregate_value
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.aggregate_value = "";

            /**
             * Creates a new UninterpretedOption instance using the specified properties.
             * @function create
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {google.protobuf.IUninterpretedOption=} [properties] Properties to set
             * @returns {google.protobuf.UninterpretedOption} UninterpretedOption instance
             */
            UninterpretedOption.create = function create(properties) {
                return new UninterpretedOption(properties);
            };

            /**
             * Encodes the specified UninterpretedOption message. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {google.protobuf.IUninterpretedOption} message UninterpretedOption message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UninterpretedOption.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && message.name.length)
                    for (var i = 0; i < message.name.length; ++i)
                        $root.google.protobuf.UninterpretedOption.NamePart.encode(message.name[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.identifier_value != null && message.hasOwnProperty("identifier_value"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.identifier_value);
                if (message.positive_int_value != null && message.hasOwnProperty("positive_int_value"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.positive_int_value);
                if (message.negative_int_value != null && message.hasOwnProperty("negative_int_value"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int64(message.negative_int_value);
                if (message.double_value != null && message.hasOwnProperty("double_value"))
                    writer.uint32(/* id 6, wireType 1 =*/49).double(message.double_value);
                if (message.string_value != null && message.hasOwnProperty("string_value"))
                    writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.string_value);
                if (message.aggregate_value != null && message.hasOwnProperty("aggregate_value"))
                    writer.uint32(/* id 8, wireType 2 =*/66).string(message.aggregate_value);
                return writer;
            };

            /**
             * Encodes the specified UninterpretedOption message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {google.protobuf.IUninterpretedOption} message UninterpretedOption message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UninterpretedOption.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.UninterpretedOption} UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UninterpretedOption.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.UninterpretedOption();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 2:
                        if (!(message.name && message.name.length))
                            message.name = [];
                        message.name.push($root.google.protobuf.UninterpretedOption.NamePart.decode(reader, reader.uint32()));
                        break;
                    case 3:
                        message.identifier_value = reader.string();
                        break;
                    case 4:
                        message.positive_int_value = reader.uint64();
                        break;
                    case 5:
                        message.negative_int_value = reader.int64();
                        break;
                    case 6:
                        message.double_value = reader.double();
                        break;
                    case 7:
                        message.string_value = reader.bytes();
                        break;
                    case 8:
                        message.aggregate_value = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.UninterpretedOption} UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UninterpretedOption.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an UninterpretedOption message.
             * @function verify
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UninterpretedOption.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name")) {
                    if (!Array.isArray(message.name))
                        return "name: array expected";
                    for (var i = 0; i < message.name.length; ++i) {
                        var error = $root.google.protobuf.UninterpretedOption.NamePart.verify(message.name[i]);
                        if (error)
                            return "name." + error;
                    }
                }
                if (message.identifier_value != null && message.hasOwnProperty("identifier_value"))
                    if (!$util.isString(message.identifier_value))
                        return "identifier_value: string expected";
                if (message.positive_int_value != null && message.hasOwnProperty("positive_int_value"))
                    if (!$util.isInteger(message.positive_int_value) && !(message.positive_int_value && $util.isInteger(message.positive_int_value.low) && $util.isInteger(message.positive_int_value.high)))
                        return "positive_int_value: integer|Long expected";
                if (message.negative_int_value != null && message.hasOwnProperty("negative_int_value"))
                    if (!$util.isInteger(message.negative_int_value) && !(message.negative_int_value && $util.isInteger(message.negative_int_value.low) && $util.isInteger(message.negative_int_value.high)))
                        return "negative_int_value: integer|Long expected";
                if (message.double_value != null && message.hasOwnProperty("double_value"))
                    if (typeof message.double_value !== "number")
                        return "double_value: number expected";
                if (message.string_value != null && message.hasOwnProperty("string_value"))
                    if (!(message.string_value && typeof message.string_value.length === "number" || $util.isString(message.string_value)))
                        return "string_value: buffer expected";
                if (message.aggregate_value != null && message.hasOwnProperty("aggregate_value"))
                    if (!$util.isString(message.aggregate_value))
                        return "aggregate_value: string expected";
                return null;
            };

            /**
             * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.UninterpretedOption} UninterpretedOption
             */
            UninterpretedOption.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.UninterpretedOption)
                    return object;
                var message = new $root.google.protobuf.UninterpretedOption();
                if (object.name) {
                    if (!Array.isArray(object.name))
                        throw TypeError(".google.protobuf.UninterpretedOption.name: array expected");
                    message.name = [];
                    for (var i = 0; i < object.name.length; ++i) {
                        if (typeof object.name[i] !== "object")
                            throw TypeError(".google.protobuf.UninterpretedOption.name: object expected");
                        message.name[i] = $root.google.protobuf.UninterpretedOption.NamePart.fromObject(object.name[i]);
                    }
                }
                if (object.identifier_value != null)
                    message.identifier_value = String(object.identifier_value);
                if (object.positive_int_value != null)
                    if ($util.Long)
                        (message.positive_int_value = $util.Long.fromValue(object.positive_int_value)).unsigned = true;
                    else if (typeof object.positive_int_value === "string")
                        message.positive_int_value = parseInt(object.positive_int_value, 10);
                    else if (typeof object.positive_int_value === "number")
                        message.positive_int_value = object.positive_int_value;
                    else if (typeof object.positive_int_value === "object")
                        message.positive_int_value = new $util.LongBits(object.positive_int_value.low >>> 0, object.positive_int_value.high >>> 0).toNumber(true);
                if (object.negative_int_value != null)
                    if ($util.Long)
                        (message.negative_int_value = $util.Long.fromValue(object.negative_int_value)).unsigned = false;
                    else if (typeof object.negative_int_value === "string")
                        message.negative_int_value = parseInt(object.negative_int_value, 10);
                    else if (typeof object.negative_int_value === "number")
                        message.negative_int_value = object.negative_int_value;
                    else if (typeof object.negative_int_value === "object")
                        message.negative_int_value = new $util.LongBits(object.negative_int_value.low >>> 0, object.negative_int_value.high >>> 0).toNumber();
                if (object.double_value != null)
                    message.double_value = Number(object.double_value);
                if (object.string_value != null)
                    if (typeof object.string_value === "string")
                        $util.base64.decode(object.string_value, message.string_value = $util.newBuffer($util.base64.length(object.string_value)), 0);
                    else if (object.string_value.length)
                        message.string_value = object.string_value;
                if (object.aggregate_value != null)
                    message.aggregate_value = String(object.aggregate_value);
                return message;
            };

            /**
             * Creates a plain object from an UninterpretedOption message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {google.protobuf.UninterpretedOption} message UninterpretedOption
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UninterpretedOption.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.name = [];
                if (options.defaults) {
                    object.identifier_value = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.positive_int_value = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.positive_int_value = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.negative_int_value = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.negative_int_value = options.longs === String ? "0" : 0;
                    object.double_value = 0;
                    if (options.bytes === String)
                        object.string_value = "";
                    else {
                        object.string_value = [];
                        if (options.bytes !== Array)
                            object.string_value = $util.newBuffer(object.string_value);
                    }
                    object.aggregate_value = "";
                }
                if (message.name && message.name.length) {
                    object.name = [];
                    for (var j = 0; j < message.name.length; ++j)
                        object.name[j] = $root.google.protobuf.UninterpretedOption.NamePart.toObject(message.name[j], options);
                }
                if (message.identifier_value != null && message.hasOwnProperty("identifier_value"))
                    object.identifier_value = message.identifier_value;
                if (message.positive_int_value != null && message.hasOwnProperty("positive_int_value"))
                    if (typeof message.positive_int_value === "number")
                        object.positive_int_value = options.longs === String ? String(message.positive_int_value) : message.positive_int_value;
                    else
                        object.positive_int_value = options.longs === String ? $util.Long.prototype.toString.call(message.positive_int_value) : options.longs === Number ? new $util.LongBits(message.positive_int_value.low >>> 0, message.positive_int_value.high >>> 0).toNumber(true) : message.positive_int_value;
                if (message.negative_int_value != null && message.hasOwnProperty("negative_int_value"))
                    if (typeof message.negative_int_value === "number")
                        object.negative_int_value = options.longs === String ? String(message.negative_int_value) : message.negative_int_value;
                    else
                        object.negative_int_value = options.longs === String ? $util.Long.prototype.toString.call(message.negative_int_value) : options.longs === Number ? new $util.LongBits(message.negative_int_value.low >>> 0, message.negative_int_value.high >>> 0).toNumber() : message.negative_int_value;
                if (message.double_value != null && message.hasOwnProperty("double_value"))
                    object.double_value = options.json && !isFinite(message.double_value) ? String(message.double_value) : message.double_value;
                if (message.string_value != null && message.hasOwnProperty("string_value"))
                    object.string_value = options.bytes === String ? $util.base64.encode(message.string_value, 0, message.string_value.length) : options.bytes === Array ? Array.prototype.slice.call(message.string_value) : message.string_value;
                if (message.aggregate_value != null && message.hasOwnProperty("aggregate_value"))
                    object.aggregate_value = message.aggregate_value;
                return object;
            };

            /**
             * Converts this UninterpretedOption to JSON.
             * @function toJSON
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UninterpretedOption.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            UninterpretedOption.NamePart = (function() {

                /**
                 * Properties of a NamePart.
                 * @memberof google.protobuf.UninterpretedOption
                 * @interface INamePart
                 * @property {string} name_part NamePart name_part
                 * @property {boolean} is_extension NamePart is_extension
                 */

                /**
                 * Constructs a new NamePart.
                 * @memberof google.protobuf.UninterpretedOption
                 * @classdesc Represents a NamePart.
                 * @implements INamePart
                 * @constructor
                 * @param {google.protobuf.UninterpretedOption.INamePart=} [properties] Properties to set
                 */
                function NamePart(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * NamePart name_part.
                 * @member {string} name_part
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @instance
                 */
                NamePart.prototype.name_part = "";

                /**
                 * NamePart is_extension.
                 * @member {boolean} is_extension
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @instance
                 */
                NamePart.prototype.is_extension = false;

                /**
                 * Creates a new NamePart instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {google.protobuf.UninterpretedOption.INamePart=} [properties] Properties to set
                 * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart instance
                 */
                NamePart.create = function create(properties) {
                    return new NamePart(properties);
                };

                /**
                 * Encodes the specified NamePart message. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {google.protobuf.UninterpretedOption.INamePart} message NamePart message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NamePart.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name_part);
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.is_extension);
                    return writer;
                };

                /**
                 * Encodes the specified NamePart message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {google.protobuf.UninterpretedOption.INamePart} message NamePart message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NamePart.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a NamePart message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NamePart.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.UninterpretedOption.NamePart();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name_part = reader.string();
                            break;
                        case 2:
                            message.is_extension = reader.bool();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    if (!message.hasOwnProperty("name_part"))
                        throw $util.ProtocolError("missing required 'name_part'", { instance: message });
                    if (!message.hasOwnProperty("is_extension"))
                        throw $util.ProtocolError("missing required 'is_extension'", { instance: message });
                    return message;
                };

                /**
                 * Decodes a NamePart message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NamePart.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a NamePart message.
                 * @function verify
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                NamePart.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (!$util.isString(message.name_part))
                        return "name_part: string expected";
                    if (typeof message.is_extension !== "boolean")
                        return "is_extension: boolean expected";
                    return null;
                };

                /**
                 * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart
                 */
                NamePart.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.UninterpretedOption.NamePart)
                        return object;
                    var message = new $root.google.protobuf.UninterpretedOption.NamePart();
                    if (object.name_part != null)
                        message.name_part = String(object.name_part);
                    if (object.is_extension != null)
                        message.is_extension = Boolean(object.is_extension);
                    return message;
                };

                /**
                 * Creates a plain object from a NamePart message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {google.protobuf.UninterpretedOption.NamePart} message NamePart
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                NamePart.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.name_part = "";
                        object.is_extension = false;
                    }
                    if (message.name_part != null && message.hasOwnProperty("name_part"))
                        object.name_part = message.name_part;
                    if (message.is_extension != null && message.hasOwnProperty("is_extension"))
                        object.is_extension = message.is_extension;
                    return object;
                };

                /**
                 * Converts this NamePart to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                NamePart.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return NamePart;
            })();

            return UninterpretedOption;
        })();

        protobuf.SourceCodeInfo = (function() {

            /**
             * Properties of a SourceCodeInfo.
             * @memberof google.protobuf
             * @interface ISourceCodeInfo
             * @property {Array.<google.protobuf.SourceCodeInfo.ILocation>|null} [location] SourceCodeInfo location
             */

            /**
             * Constructs a new SourceCodeInfo.
             * @memberof google.protobuf
             * @classdesc Represents a SourceCodeInfo.
             * @implements ISourceCodeInfo
             * @constructor
             * @param {google.protobuf.ISourceCodeInfo=} [properties] Properties to set
             */
            function SourceCodeInfo(properties) {
                this.location = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SourceCodeInfo location.
             * @member {Array.<google.protobuf.SourceCodeInfo.ILocation>} location
             * @memberof google.protobuf.SourceCodeInfo
             * @instance
             */
            SourceCodeInfo.prototype.location = $util.emptyArray;

            /**
             * Creates a new SourceCodeInfo instance using the specified properties.
             * @function create
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {google.protobuf.ISourceCodeInfo=} [properties] Properties to set
             * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo instance
             */
            SourceCodeInfo.create = function create(properties) {
                return new SourceCodeInfo(properties);
            };

            /**
             * Encodes the specified SourceCodeInfo message. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {google.protobuf.ISourceCodeInfo} message SourceCodeInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SourceCodeInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.location != null && message.location.length)
                    for (var i = 0; i < message.location.length; ++i)
                        $root.google.protobuf.SourceCodeInfo.Location.encode(message.location[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified SourceCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {google.protobuf.ISourceCodeInfo} message SourceCodeInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SourceCodeInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SourceCodeInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.SourceCodeInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.location && message.location.length))
                            message.location = [];
                        message.location.push($root.google.protobuf.SourceCodeInfo.Location.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SourceCodeInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SourceCodeInfo message.
             * @function verify
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SourceCodeInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.location != null && message.hasOwnProperty("location")) {
                    if (!Array.isArray(message.location))
                        return "location: array expected";
                    for (var i = 0; i < message.location.length; ++i) {
                        var error = $root.google.protobuf.SourceCodeInfo.Location.verify(message.location[i]);
                        if (error)
                            return "location." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo
             */
            SourceCodeInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.SourceCodeInfo)
                    return object;
                var message = new $root.google.protobuf.SourceCodeInfo();
                if (object.location) {
                    if (!Array.isArray(object.location))
                        throw TypeError(".google.protobuf.SourceCodeInfo.location: array expected");
                    message.location = [];
                    for (var i = 0; i < object.location.length; ++i) {
                        if (typeof object.location[i] !== "object")
                            throw TypeError(".google.protobuf.SourceCodeInfo.location: object expected");
                        message.location[i] = $root.google.protobuf.SourceCodeInfo.Location.fromObject(object.location[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a SourceCodeInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {google.protobuf.SourceCodeInfo} message SourceCodeInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SourceCodeInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.location = [];
                if (message.location && message.location.length) {
                    object.location = [];
                    for (var j = 0; j < message.location.length; ++j)
                        object.location[j] = $root.google.protobuf.SourceCodeInfo.Location.toObject(message.location[j], options);
                }
                return object;
            };

            /**
             * Converts this SourceCodeInfo to JSON.
             * @function toJSON
             * @memberof google.protobuf.SourceCodeInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SourceCodeInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            SourceCodeInfo.Location = (function() {

                /**
                 * Properties of a Location.
                 * @memberof google.protobuf.SourceCodeInfo
                 * @interface ILocation
                 * @property {Array.<number>|null} [path] Location path
                 * @property {Array.<number>|null} [span] Location span
                 * @property {string|null} [leading_comments] Location leading_comments
                 * @property {string|null} [trailing_comments] Location trailing_comments
                 * @property {Array.<string>|null} [leading_detached_comments] Location leading_detached_comments
                 */

                /**
                 * Constructs a new Location.
                 * @memberof google.protobuf.SourceCodeInfo
                 * @classdesc Represents a Location.
                 * @implements ILocation
                 * @constructor
                 * @param {google.protobuf.SourceCodeInfo.ILocation=} [properties] Properties to set
                 */
                function Location(properties) {
                    this.path = [];
                    this.span = [];
                    this.leading_detached_comments = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Location path.
                 * @member {Array.<number>} path
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @instance
                 */
                Location.prototype.path = $util.emptyArray;

                /**
                 * Location span.
                 * @member {Array.<number>} span
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @instance
                 */
                Location.prototype.span = $util.emptyArray;

                /**
                 * Location leading_comments.
                 * @member {string} leading_comments
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @instance
                 */
                Location.prototype.leading_comments = "";

                /**
                 * Location trailing_comments.
                 * @member {string} trailing_comments
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @instance
                 */
                Location.prototype.trailing_comments = "";

                /**
                 * Location leading_detached_comments.
                 * @member {Array.<string>} leading_detached_comments
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @instance
                 */
                Location.prototype.leading_detached_comments = $util.emptyArray;

                /**
                 * Creates a new Location instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {google.protobuf.SourceCodeInfo.ILocation=} [properties] Properties to set
                 * @returns {google.protobuf.SourceCodeInfo.Location} Location instance
                 */
                Location.create = function create(properties) {
                    return new Location(properties);
                };

                /**
                 * Encodes the specified Location message. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {google.protobuf.SourceCodeInfo.ILocation} message Location message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Location.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.path != null && message.path.length) {
                        writer.uint32(/* id 1, wireType 2 =*/10).fork();
                        for (var i = 0; i < message.path.length; ++i)
                            writer.int32(message.path[i]);
                        writer.ldelim();
                    }
                    if (message.span != null && message.span.length) {
                        writer.uint32(/* id 2, wireType 2 =*/18).fork();
                        for (var i = 0; i < message.span.length; ++i)
                            writer.int32(message.span[i]);
                        writer.ldelim();
                    }
                    if (message.leading_comments != null && message.hasOwnProperty("leading_comments"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.leading_comments);
                    if (message.trailing_comments != null && message.hasOwnProperty("trailing_comments"))
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.trailing_comments);
                    if (message.leading_detached_comments != null && message.leading_detached_comments.length)
                        for (var i = 0; i < message.leading_detached_comments.length; ++i)
                            writer.uint32(/* id 6, wireType 2 =*/50).string(message.leading_detached_comments[i]);
                    return writer;
                };

                /**
                 * Encodes the specified Location message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {google.protobuf.SourceCodeInfo.ILocation} message Location message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Location.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Location message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.SourceCodeInfo.Location} Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Location.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.SourceCodeInfo.Location();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.path && message.path.length))
                                message.path = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.path.push(reader.int32());
                            } else
                                message.path.push(reader.int32());
                            break;
                        case 2:
                            if (!(message.span && message.span.length))
                                message.span = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.span.push(reader.int32());
                            } else
                                message.span.push(reader.int32());
                            break;
                        case 3:
                            message.leading_comments = reader.string();
                            break;
                        case 4:
                            message.trailing_comments = reader.string();
                            break;
                        case 6:
                            if (!(message.leading_detached_comments && message.leading_detached_comments.length))
                                message.leading_detached_comments = [];
                            message.leading_detached_comments.push(reader.string());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Location message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.SourceCodeInfo.Location} Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Location.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Location message.
                 * @function verify
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Location.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.path != null && message.hasOwnProperty("path")) {
                        if (!Array.isArray(message.path))
                            return "path: array expected";
                        for (var i = 0; i < message.path.length; ++i)
                            if (!$util.isInteger(message.path[i]))
                                return "path: integer[] expected";
                    }
                    if (message.span != null && message.hasOwnProperty("span")) {
                        if (!Array.isArray(message.span))
                            return "span: array expected";
                        for (var i = 0; i < message.span.length; ++i)
                            if (!$util.isInteger(message.span[i]))
                                return "span: integer[] expected";
                    }
                    if (message.leading_comments != null && message.hasOwnProperty("leading_comments"))
                        if (!$util.isString(message.leading_comments))
                            return "leading_comments: string expected";
                    if (message.trailing_comments != null && message.hasOwnProperty("trailing_comments"))
                        if (!$util.isString(message.trailing_comments))
                            return "trailing_comments: string expected";
                    if (message.leading_detached_comments != null && message.hasOwnProperty("leading_detached_comments")) {
                        if (!Array.isArray(message.leading_detached_comments))
                            return "leading_detached_comments: array expected";
                        for (var i = 0; i < message.leading_detached_comments.length; ++i)
                            if (!$util.isString(message.leading_detached_comments[i]))
                                return "leading_detached_comments: string[] expected";
                    }
                    return null;
                };

                /**
                 * Creates a Location message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.SourceCodeInfo.Location} Location
                 */
                Location.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.SourceCodeInfo.Location)
                        return object;
                    var message = new $root.google.protobuf.SourceCodeInfo.Location();
                    if (object.path) {
                        if (!Array.isArray(object.path))
                            throw TypeError(".google.protobuf.SourceCodeInfo.Location.path: array expected");
                        message.path = [];
                        for (var i = 0; i < object.path.length; ++i)
                            message.path[i] = object.path[i] | 0;
                    }
                    if (object.span) {
                        if (!Array.isArray(object.span))
                            throw TypeError(".google.protobuf.SourceCodeInfo.Location.span: array expected");
                        message.span = [];
                        for (var i = 0; i < object.span.length; ++i)
                            message.span[i] = object.span[i] | 0;
                    }
                    if (object.leading_comments != null)
                        message.leading_comments = String(object.leading_comments);
                    if (object.trailing_comments != null)
                        message.trailing_comments = String(object.trailing_comments);
                    if (object.leading_detached_comments) {
                        if (!Array.isArray(object.leading_detached_comments))
                            throw TypeError(".google.protobuf.SourceCodeInfo.Location.leading_detached_comments: array expected");
                        message.leading_detached_comments = [];
                        for (var i = 0; i < object.leading_detached_comments.length; ++i)
                            message.leading_detached_comments[i] = String(object.leading_detached_comments[i]);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a Location message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {google.protobuf.SourceCodeInfo.Location} message Location
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Location.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.path = [];
                        object.span = [];
                        object.leading_detached_comments = [];
                    }
                    if (options.defaults) {
                        object.leading_comments = "";
                        object.trailing_comments = "";
                    }
                    if (message.path && message.path.length) {
                        object.path = [];
                        for (var j = 0; j < message.path.length; ++j)
                            object.path[j] = message.path[j];
                    }
                    if (message.span && message.span.length) {
                        object.span = [];
                        for (var j = 0; j < message.span.length; ++j)
                            object.span[j] = message.span[j];
                    }
                    if (message.leading_comments != null && message.hasOwnProperty("leading_comments"))
                        object.leading_comments = message.leading_comments;
                    if (message.trailing_comments != null && message.hasOwnProperty("trailing_comments"))
                        object.trailing_comments = message.trailing_comments;
                    if (message.leading_detached_comments && message.leading_detached_comments.length) {
                        object.leading_detached_comments = [];
                        for (var j = 0; j < message.leading_detached_comments.length; ++j)
                            object.leading_detached_comments[j] = message.leading_detached_comments[j];
                    }
                    return object;
                };

                /**
                 * Converts this Location to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Location.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Location;
            })();

            return SourceCodeInfo;
        })();

        protobuf.GeneratedCodeInfo = (function() {

            /**
             * Properties of a GeneratedCodeInfo.
             * @memberof google.protobuf
             * @interface IGeneratedCodeInfo
             * @property {Array.<google.protobuf.GeneratedCodeInfo.IAnnotation>|null} [annotation] GeneratedCodeInfo annotation
             */

            /**
             * Constructs a new GeneratedCodeInfo.
             * @memberof google.protobuf
             * @classdesc Represents a GeneratedCodeInfo.
             * @implements IGeneratedCodeInfo
             * @constructor
             * @param {google.protobuf.IGeneratedCodeInfo=} [properties] Properties to set
             */
            function GeneratedCodeInfo(properties) {
                this.annotation = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GeneratedCodeInfo annotation.
             * @member {Array.<google.protobuf.GeneratedCodeInfo.IAnnotation>} annotation
             * @memberof google.protobuf.GeneratedCodeInfo
             * @instance
             */
            GeneratedCodeInfo.prototype.annotation = $util.emptyArray;

            /**
             * Creates a new GeneratedCodeInfo instance using the specified properties.
             * @function create
             * @memberof google.protobuf.GeneratedCodeInfo
             * @static
             * @param {google.protobuf.IGeneratedCodeInfo=} [properties] Properties to set
             * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo instance
             */
            GeneratedCodeInfo.create = function create(properties) {
                return new GeneratedCodeInfo(properties);
            };

            /**
             * Encodes the specified GeneratedCodeInfo message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.GeneratedCodeInfo
             * @static
             * @param {google.protobuf.IGeneratedCodeInfo} message GeneratedCodeInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GeneratedCodeInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.annotation != null && message.annotation.length)
                    for (var i = 0; i < message.annotation.length; ++i)
                        $root.google.protobuf.GeneratedCodeInfo.Annotation.encode(message.annotation[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified GeneratedCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.GeneratedCodeInfo
             * @static
             * @param {google.protobuf.IGeneratedCodeInfo} message GeneratedCodeInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GeneratedCodeInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.GeneratedCodeInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GeneratedCodeInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.GeneratedCodeInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.annotation && message.annotation.length))
                            message.annotation = [];
                        message.annotation.push($root.google.protobuf.GeneratedCodeInfo.Annotation.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.GeneratedCodeInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GeneratedCodeInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GeneratedCodeInfo message.
             * @function verify
             * @memberof google.protobuf.GeneratedCodeInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GeneratedCodeInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.annotation != null && message.hasOwnProperty("annotation")) {
                    if (!Array.isArray(message.annotation))
                        return "annotation: array expected";
                    for (var i = 0; i < message.annotation.length; ++i) {
                        var error = $root.google.protobuf.GeneratedCodeInfo.Annotation.verify(message.annotation[i]);
                        if (error)
                            return "annotation." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a GeneratedCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.GeneratedCodeInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo
             */
            GeneratedCodeInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.GeneratedCodeInfo)
                    return object;
                var message = new $root.google.protobuf.GeneratedCodeInfo();
                if (object.annotation) {
                    if (!Array.isArray(object.annotation))
                        throw TypeError(".google.protobuf.GeneratedCodeInfo.annotation: array expected");
                    message.annotation = [];
                    for (var i = 0; i < object.annotation.length; ++i) {
                        if (typeof object.annotation[i] !== "object")
                            throw TypeError(".google.protobuf.GeneratedCodeInfo.annotation: object expected");
                        message.annotation[i] = $root.google.protobuf.GeneratedCodeInfo.Annotation.fromObject(object.annotation[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a GeneratedCodeInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.GeneratedCodeInfo
             * @static
             * @param {google.protobuf.GeneratedCodeInfo} message GeneratedCodeInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GeneratedCodeInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.annotation = [];
                if (message.annotation && message.annotation.length) {
                    object.annotation = [];
                    for (var j = 0; j < message.annotation.length; ++j)
                        object.annotation[j] = $root.google.protobuf.GeneratedCodeInfo.Annotation.toObject(message.annotation[j], options);
                }
                return object;
            };

            /**
             * Converts this GeneratedCodeInfo to JSON.
             * @function toJSON
             * @memberof google.protobuf.GeneratedCodeInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GeneratedCodeInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            GeneratedCodeInfo.Annotation = (function() {

                /**
                 * Properties of an Annotation.
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @interface IAnnotation
                 * @property {Array.<number>|null} [path] Annotation path
                 * @property {string|null} [source_file] Annotation source_file
                 * @property {number|null} [begin] Annotation begin
                 * @property {number|null} [end] Annotation end
                 */

                /**
                 * Constructs a new Annotation.
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @classdesc Represents an Annotation.
                 * @implements IAnnotation
                 * @constructor
                 * @param {google.protobuf.GeneratedCodeInfo.IAnnotation=} [properties] Properties to set
                 */
                function Annotation(properties) {
                    this.path = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Annotation path.
                 * @member {Array.<number>} path
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @instance
                 */
                Annotation.prototype.path = $util.emptyArray;

                /**
                 * Annotation source_file.
                 * @member {string} source_file
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @instance
                 */
                Annotation.prototype.source_file = "";

                /**
                 * Annotation begin.
                 * @member {number} begin
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @instance
                 */
                Annotation.prototype.begin = 0;

                /**
                 * Annotation end.
                 * @member {number} end
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @instance
                 */
                Annotation.prototype.end = 0;

                /**
                 * Creates a new Annotation instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @static
                 * @param {google.protobuf.GeneratedCodeInfo.IAnnotation=} [properties] Properties to set
                 * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation instance
                 */
                Annotation.create = function create(properties) {
                    return new Annotation(properties);
                };

                /**
                 * Encodes the specified Annotation message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @static
                 * @param {google.protobuf.GeneratedCodeInfo.IAnnotation} message Annotation message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Annotation.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.path != null && message.path.length) {
                        writer.uint32(/* id 1, wireType 2 =*/10).fork();
                        for (var i = 0; i < message.path.length; ++i)
                            writer.int32(message.path[i]);
                        writer.ldelim();
                    }
                    if (message.source_file != null && message.hasOwnProperty("source_file"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.source_file);
                    if (message.begin != null && message.hasOwnProperty("begin"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.begin);
                    if (message.end != null && message.hasOwnProperty("end"))
                        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.end);
                    return writer;
                };

                /**
                 * Encodes the specified Annotation message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @static
                 * @param {google.protobuf.GeneratedCodeInfo.IAnnotation} message Annotation message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Annotation.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an Annotation message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Annotation.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.GeneratedCodeInfo.Annotation();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.path && message.path.length))
                                message.path = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.path.push(reader.int32());
                            } else
                                message.path.push(reader.int32());
                            break;
                        case 2:
                            message.source_file = reader.string();
                            break;
                        case 3:
                            message.begin = reader.int32();
                            break;
                        case 4:
                            message.end = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an Annotation message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Annotation.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an Annotation message.
                 * @function verify
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Annotation.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.path != null && message.hasOwnProperty("path")) {
                        if (!Array.isArray(message.path))
                            return "path: array expected";
                        for (var i = 0; i < message.path.length; ++i)
                            if (!$util.isInteger(message.path[i]))
                                return "path: integer[] expected";
                    }
                    if (message.source_file != null && message.hasOwnProperty("source_file"))
                        if (!$util.isString(message.source_file))
                            return "source_file: string expected";
                    if (message.begin != null && message.hasOwnProperty("begin"))
                        if (!$util.isInteger(message.begin))
                            return "begin: integer expected";
                    if (message.end != null && message.hasOwnProperty("end"))
                        if (!$util.isInteger(message.end))
                            return "end: integer expected";
                    return null;
                };

                /**
                 * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation
                 */
                Annotation.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.GeneratedCodeInfo.Annotation)
                        return object;
                    var message = new $root.google.protobuf.GeneratedCodeInfo.Annotation();
                    if (object.path) {
                        if (!Array.isArray(object.path))
                            throw TypeError(".google.protobuf.GeneratedCodeInfo.Annotation.path: array expected");
                        message.path = [];
                        for (var i = 0; i < object.path.length; ++i)
                            message.path[i] = object.path[i] | 0;
                    }
                    if (object.source_file != null)
                        message.source_file = String(object.source_file);
                    if (object.begin != null)
                        message.begin = object.begin | 0;
                    if (object.end != null)
                        message.end = object.end | 0;
                    return message;
                };

                /**
                 * Creates a plain object from an Annotation message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @static
                 * @param {google.protobuf.GeneratedCodeInfo.Annotation} message Annotation
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Annotation.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.path = [];
                    if (options.defaults) {
                        object.source_file = "";
                        object.begin = 0;
                        object.end = 0;
                    }
                    if (message.path && message.path.length) {
                        object.path = [];
                        for (var j = 0; j < message.path.length; ++j)
                            object.path[j] = message.path[j];
                    }
                    if (message.source_file != null && message.hasOwnProperty("source_file"))
                        object.source_file = message.source_file;
                    if (message.begin != null && message.hasOwnProperty("begin"))
                        object.begin = message.begin;
                    if (message.end != null && message.hasOwnProperty("end"))
                        object.end = message.end;
                    return object;
                };

                /**
                 * Converts this Annotation to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Annotation.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Annotation;
            })();

            return GeneratedCodeInfo;
        })();

        return protobuf;
    })();

    return google;
})();

module.exports = $root;
