// ack: https://github.com/facebook/flow/issues/4825#issuecomment-414605109
export type Json =
    | JsonPrimitive
    | JsonArray
    | JsonObject
    ;

export type JsonPrimitive =
    | void
    | null
    | string
    | number
    | boolean
    ;

export type JsonArray = Array<Json>;

export type JsonObject = { [string]: Json };
