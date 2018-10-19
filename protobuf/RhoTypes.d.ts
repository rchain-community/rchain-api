import * as $protobuf from "protobufjs";
export interface IPar {
    sends?: (ISend[]|null);
    receives?: (IReceive[]|null);
    news?: (INew[]|null);
    exprs?: (IExpr[]|null);
    matches?: (IMatch[]|null);
    ids?: (IGPrivate[]|null);
    bundles?: (IBundle[]|null);
    connectives?: (IConnective[]|null);
    locallyFree?: (Uint8Array|null);
    connective_used?: (boolean|null);
}

export class Par implements IPar {
    constructor(properties?: IPar);
    public sends: ISend[];
    public receives: IReceive[];
    public news: INew[];
    public exprs: IExpr[];
    public matches: IMatch[];
    public ids: IGPrivate[];
    public bundles: IBundle[];
    public connectives: IConnective[];
    public locallyFree: Uint8Array;
    public connective_used: boolean;
    public static create(properties?: IPar): Par;
    public static encode(message: IPar, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IPar, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Par;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Par;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): Par;
    public static toObject(message: Par, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface ITaggedContinuation {
    par_body?: (IParWithRandom|null);
    scala_body_ref?: (number|Long|null);
}

export class TaggedContinuation implements ITaggedContinuation {
    constructor(properties?: ITaggedContinuation);
    public par_body?: (IParWithRandom|null);
    public scala_body_ref: (number|Long);
    public tagged_cont?: ("par_body"|"scala_body_ref");
    public static create(properties?: ITaggedContinuation): TaggedContinuation;
    public static encode(message: ITaggedContinuation, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: ITaggedContinuation, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TaggedContinuation;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TaggedContinuation;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): TaggedContinuation;
    public static toObject(message: TaggedContinuation, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IParWithRandom {
    body?: (IPar|null);
    randomState?: (Uint8Array|null);
}

export class ParWithRandom implements IParWithRandom {
    constructor(properties?: IParWithRandom);
    public body?: (IPar|null);
    public randomState: Uint8Array;
    public static create(properties?: IParWithRandom): ParWithRandom;
    public static encode(message: IParWithRandom, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IParWithRandom, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ParWithRandom;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ParWithRandom;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): ParWithRandom;
    public static toObject(message: ParWithRandom, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IPCost {
    iterations?: (number|null);
    cost?: (number|Long|null);
}

export class PCost implements IPCost {
    constructor(properties?: IPCost);
    public iterations: number;
    public cost: (number|Long);
    public static create(properties?: IPCost): PCost;
    public static encode(message: IPCost, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IPCost, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PCost;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PCost;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): PCost;
    public static toObject(message: PCost, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IListParWithRandom {
    pars?: (IPar[]|null);
    randomState?: (Uint8Array|null);
}

export class ListParWithRandom implements IListParWithRandom {
    constructor(properties?: IListParWithRandom);
    public pars: IPar[];
    public randomState: Uint8Array;
    public static create(properties?: IListParWithRandom): ListParWithRandom;
    public static encode(message: IListParWithRandom, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IListParWithRandom, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ListParWithRandom;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ListParWithRandom;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): ListParWithRandom;
    public static toObject(message: ListParWithRandom, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IListParWithRandomAndPhlos {
    pars?: (IPar[]|null);
    randomState?: (Uint8Array|null);
    cost?: (number|Long|null);
}

export class ListParWithRandomAndPhlos implements IListParWithRandomAndPhlos {
    constructor(properties?: IListParWithRandomAndPhlos);
    public pars: IPar[];
    public randomState: Uint8Array;
    public cost: (number|Long);
    public static create(properties?: IListParWithRandomAndPhlos): ListParWithRandomAndPhlos;
    public static encode(message: IListParWithRandomAndPhlos, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IListParWithRandomAndPhlos, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ListParWithRandomAndPhlos;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ListParWithRandomAndPhlos;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): ListParWithRandomAndPhlos;
    public static toObject(message: ListParWithRandomAndPhlos, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IVar {
    bound_var?: (number|null);
    free_var?: (number|null);
    wildcard?: (Var.IWildcardMsg|null);
}

export class Var implements IVar {
    constructor(properties?: IVar);
    public bound_var: number;
    public free_var: number;
    public wildcard?: (Var.IWildcardMsg|null);
    public var_instance?: ("bound_var"|"free_var"|"wildcard");
    public static create(properties?: IVar): Var;
    public static encode(message: IVar, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IVar, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Var;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Var;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): Var;
    public static toObject(message: Var, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export namespace Var {

    interface IWildcardMsg {
    }

    class WildcardMsg implements IWildcardMsg {
        constructor(properties?: Var.IWildcardMsg);
        public static create(properties?: Var.IWildcardMsg): Var.WildcardMsg;
        public static encode(message: Var.IWildcardMsg, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: Var.IWildcardMsg, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Var.WildcardMsg;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Var.WildcardMsg;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Var.WildcardMsg;
        public static toObject(message: Var.WildcardMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }
}

export interface IBundle {
    body?: (IPar|null);
    writeFlag?: (boolean|null);
    readFlag?: (boolean|null);
}

export class Bundle implements IBundle {
    constructor(properties?: IBundle);
    public body?: (IPar|null);
    public writeFlag: boolean;
    public readFlag: boolean;
    public static create(properties?: IBundle): Bundle;
    public static encode(message: IBundle, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IBundle, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Bundle;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Bundle;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): Bundle;
    public static toObject(message: Bundle, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface ISend {
    chan?: (IPar|null);
    data?: (IPar[]|null);
    persistent?: (boolean|null);
    locallyFree?: (Uint8Array|null);
    connective_used?: (boolean|null);
}

export class Send implements ISend {
    constructor(properties?: ISend);
    public chan?: (IPar|null);
    public data: IPar[];
    public persistent: boolean;
    public locallyFree: Uint8Array;
    public connective_used: boolean;
    public static create(properties?: ISend): Send;
    public static encode(message: ISend, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: ISend, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Send;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Send;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): Send;
    public static toObject(message: Send, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IReceiveBind {
    patterns?: (IPar[]|null);
    source?: (IPar|null);
    remainder?: (IVar|null);
    freeCount?: (number|null);
}

export class ReceiveBind implements IReceiveBind {
    constructor(properties?: IReceiveBind);
    public patterns: IPar[];
    public source?: (IPar|null);
    public remainder?: (IVar|null);
    public freeCount: number;
    public static create(properties?: IReceiveBind): ReceiveBind;
    public static encode(message: IReceiveBind, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IReceiveBind, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReceiveBind;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReceiveBind;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): ReceiveBind;
    public static toObject(message: ReceiveBind, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IBindPattern {
    patterns?: (IPar[]|null);
    remainder?: (IVar|null);
    freeCount?: (number|null);
}

export class BindPattern implements IBindPattern {
    constructor(properties?: IBindPattern);
    public patterns: IPar[];
    public remainder?: (IVar|null);
    public freeCount: number;
    public static create(properties?: IBindPattern): BindPattern;
    public static encode(message: IBindPattern, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IBindPattern, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BindPattern;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BindPattern;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): BindPattern;
    public static toObject(message: BindPattern, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IListBindPatterns {
    patterns?: (IBindPattern[]|null);
}

export class ListBindPatterns implements IListBindPatterns {
    constructor(properties?: IListBindPatterns);
    public patterns: IBindPattern[];
    public static create(properties?: IListBindPatterns): ListBindPatterns;
    public static encode(message: IListBindPatterns, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IListBindPatterns, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ListBindPatterns;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ListBindPatterns;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): ListBindPatterns;
    public static toObject(message: ListBindPatterns, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IReceive {
    binds?: (IReceiveBind[]|null);
    body?: (IPar|null);
    persistent?: (boolean|null);
    bindCount?: (number|null);
    locallyFree?: (Uint8Array|null);
    connective_used?: (boolean|null);
}

export class Receive implements IReceive {
    constructor(properties?: IReceive);
    public binds: IReceiveBind[];
    public body?: (IPar|null);
    public persistent: boolean;
    public bindCount: number;
    public locallyFree: Uint8Array;
    public connective_used: boolean;
    public static create(properties?: IReceive): Receive;
    public static encode(message: IReceive, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IReceive, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Receive;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Receive;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): Receive;
    public static toObject(message: Receive, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface INew {
    bindCount?: (number|null);
    p?: (IPar|null);
    uri?: (string[]|null);
    locallyFree?: (Uint8Array|null);
}

export class New implements INew {
    constructor(properties?: INew);
    public bindCount: number;
    public p?: (IPar|null);
    public uri: string[];
    public locallyFree: Uint8Array;
    public static create(properties?: INew): New;
    public static encode(message: INew, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: INew, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): New;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): New;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): New;
    public static toObject(message: New, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IMatchCase {
    pattern?: (IPar|null);
    source?: (IPar|null);
    freeCount?: (number|null);
}

export class MatchCase implements IMatchCase {
    constructor(properties?: IMatchCase);
    public pattern?: (IPar|null);
    public source?: (IPar|null);
    public freeCount: number;
    public static create(properties?: IMatchCase): MatchCase;
    public static encode(message: IMatchCase, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IMatchCase, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MatchCase;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MatchCase;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): MatchCase;
    public static toObject(message: MatchCase, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IMatch {
    target?: (IPar|null);
    cases?: (IMatchCase[]|null);
    locallyFree?: (Uint8Array|null);
    connective_used?: (boolean|null);
}

export class Match implements IMatch {
    constructor(properties?: IMatch);
    public target?: (IPar|null);
    public cases: IMatchCase[];
    public locallyFree: Uint8Array;
    public connective_used: boolean;
    public static create(properties?: IMatch): Match;
    public static encode(message: IMatch, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IMatch, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Match;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Match;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): Match;
    public static toObject(message: Match, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IExpr {
    g_bool?: (boolean|null);
    g_int?: (number|Long|null);
    g_string?: (string|null);
    g_uri?: (string|null);
    g_byte_array?: (Uint8Array|null);
    e_not_body?: (IENot|null);
    e_neg_body?: (IENeg|null);
    e_mult_body?: (IEMult|null);
    e_div_body?: (IEDiv|null);
    e_plus_body?: (IEPlus|null);
    e_minus_body?: (IEMinus|null);
    e_lt_body?: (IELt|null);
    e_lte_body?: (IELte|null);
    e_gt_body?: (IEGt|null);
    e_gte_body?: (IEGte|null);
    e_eq_body?: (IEEq|null);
    e_neq_body?: (IENeq|null);
    e_and_body?: (IEAnd|null);
    e_or_body?: (IEOr|null);
    e_var_body?: (IEVar|null);
    e_list_body?: (IEList|null);
    e_tuple_body?: (IETuple|null);
    e_set_body?: (IESet|null);
    e_map_body?: (IEMap|null);
    e_method_body?: (IEMethod|null);
    e_matches_body?: (IEMatches|null);
    e_percent_percent_body?: (IEPercentPercent|null);
    e_plus_plus_body?: (IEPlusPlus|null);
    e_minus_minus_body?: (IEMinusMinus|null);
}

export class Expr implements IExpr {
    constructor(properties?: IExpr);
    public g_bool: boolean;
    public g_int: (number|Long);
    public g_string: string;
    public g_uri: string;
    public g_byte_array: Uint8Array;
    public e_not_body?: (IENot|null);
    public e_neg_body?: (IENeg|null);
    public e_mult_body?: (IEMult|null);
    public e_div_body?: (IEDiv|null);
    public e_plus_body?: (IEPlus|null);
    public e_minus_body?: (IEMinus|null);
    public e_lt_body?: (IELt|null);
    public e_lte_body?: (IELte|null);
    public e_gt_body?: (IEGt|null);
    public e_gte_body?: (IEGte|null);
    public e_eq_body?: (IEEq|null);
    public e_neq_body?: (IENeq|null);
    public e_and_body?: (IEAnd|null);
    public e_or_body?: (IEOr|null);
    public e_var_body?: (IEVar|null);
    public e_list_body?: (IEList|null);
    public e_tuple_body?: (IETuple|null);
    public e_set_body?: (IESet|null);
    public e_map_body?: (IEMap|null);
    public e_method_body?: (IEMethod|null);
    public e_matches_body?: (IEMatches|null);
    public e_percent_percent_body?: (IEPercentPercent|null);
    public e_plus_plus_body?: (IEPlusPlus|null);
    public e_minus_minus_body?: (IEMinusMinus|null);
    public expr_instance?: ("g_bool"|"g_int"|"g_string"|"g_uri"|"g_byte_array"|"e_not_body"|"e_neg_body"|"e_mult_body"|"e_div_body"|"e_plus_body"|"e_minus_body"|"e_lt_body"|"e_lte_body"|"e_gt_body"|"e_gte_body"|"e_eq_body"|"e_neq_body"|"e_and_body"|"e_or_body"|"e_var_body"|"e_list_body"|"e_tuple_body"|"e_set_body"|"e_map_body"|"e_method_body"|"e_matches_body"|"e_percent_percent_body"|"e_plus_plus_body"|"e_minus_minus_body");
    public static create(properties?: IExpr): Expr;
    public static encode(message: IExpr, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IExpr, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Expr;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Expr;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): Expr;
    public static toObject(message: Expr, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IEList {
    ps?: (IPar[]|null);
    locallyFree?: (Uint8Array|null);
    connective_used?: (boolean|null);
    remainder?: (IVar|null);
}

export class EList implements IEList {
    constructor(properties?: IEList);
    public ps: IPar[];
    public locallyFree: Uint8Array;
    public connective_used: boolean;
    public remainder?: (IVar|null);
    public static create(properties?: IEList): EList;
    public static encode(message: IEList, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IEList, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EList;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EList;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): EList;
    public static toObject(message: EList, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IETuple {
    ps?: (IPar[]|null);
    locallyFree?: (Uint8Array|null);
    connective_used?: (boolean|null);
}

export class ETuple implements IETuple {
    constructor(properties?: IETuple);
    public ps: IPar[];
    public locallyFree: Uint8Array;
    public connective_used: boolean;
    public static create(properties?: IETuple): ETuple;
    public static encode(message: IETuple, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IETuple, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ETuple;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ETuple;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): ETuple;
    public static toObject(message: ETuple, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IESet {
    ps?: (IPar[]|null);
    locallyFree?: (Uint8Array|null);
    connective_used?: (boolean|null);
    remainder?: (IVar|null);
}

export class ESet implements IESet {
    constructor(properties?: IESet);
    public ps: IPar[];
    public locallyFree: Uint8Array;
    public connective_used: boolean;
    public remainder?: (IVar|null);
    public static create(properties?: IESet): ESet;
    public static encode(message: IESet, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IESet, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ESet;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ESet;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): ESet;
    public static toObject(message: ESet, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IEMap {
    kvs?: (IKeyValuePair[]|null);
    locallyFree?: (Uint8Array|null);
    connective_used?: (boolean|null);
    remainder?: (IVar|null);
}

export class EMap implements IEMap {
    constructor(properties?: IEMap);
    public kvs: IKeyValuePair[];
    public locallyFree: Uint8Array;
    public connective_used: boolean;
    public remainder?: (IVar|null);
    public static create(properties?: IEMap): EMap;
    public static encode(message: IEMap, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IEMap, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EMap;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EMap;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): EMap;
    public static toObject(message: EMap, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IEMethod {
    methodName?: (string|null);
    target?: (IPar|null);
    "arguments"?: (IPar[]|null);
    locallyFree?: (Uint8Array|null);
    connective_used?: (boolean|null);
}

export class EMethod implements IEMethod {
    constructor(properties?: IEMethod);
    public methodName: string;
    public target?: (IPar|null);
    public arguments: IPar[];
    public locallyFree: Uint8Array;
    public connective_used: boolean;
    public static create(properties?: IEMethod): EMethod;
    public static encode(message: IEMethod, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IEMethod, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EMethod;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EMethod;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): EMethod;
    public static toObject(message: EMethod, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IKeyValuePair {
    key?: (IPar|null);
    value?: (IPar|null);
}

export class KeyValuePair implements IKeyValuePair {
    constructor(properties?: IKeyValuePair);
    public key?: (IPar|null);
    public value?: (IPar|null);
    public static create(properties?: IKeyValuePair): KeyValuePair;
    public static encode(message: IKeyValuePair, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IKeyValuePair, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): KeyValuePair;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): KeyValuePair;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): KeyValuePair;
    public static toObject(message: KeyValuePair, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IEVar {
    v?: (IVar|null);
}

export class EVar implements IEVar {
    constructor(properties?: IEVar);
    public v?: (IVar|null);
    public static create(properties?: IEVar): EVar;
    public static encode(message: IEVar, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IEVar, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EVar;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EVar;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): EVar;
    public static toObject(message: EVar, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IENot {
    p?: (IPar|null);
}

export class ENot implements IENot {
    constructor(properties?: IENot);
    public p?: (IPar|null);
    public static create(properties?: IENot): ENot;
    public static encode(message: IENot, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IENot, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ENot;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ENot;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): ENot;
    public static toObject(message: ENot, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IENeg {
    p?: (IPar|null);
}

export class ENeg implements IENeg {
    constructor(properties?: IENeg);
    public p?: (IPar|null);
    public static create(properties?: IENeg): ENeg;
    public static encode(message: IENeg, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IENeg, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ENeg;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ENeg;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): ENeg;
    public static toObject(message: ENeg, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IEMult {
    p1?: (IPar|null);
    p2?: (IPar|null);
}

export class EMult implements IEMult {
    constructor(properties?: IEMult);
    public p1?: (IPar|null);
    public p2?: (IPar|null);
    public static create(properties?: IEMult): EMult;
    public static encode(message: IEMult, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IEMult, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EMult;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EMult;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): EMult;
    public static toObject(message: EMult, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IEDiv {
    p1?: (IPar|null);
    p2?: (IPar|null);
}

export class EDiv implements IEDiv {
    constructor(properties?: IEDiv);
    public p1?: (IPar|null);
    public p2?: (IPar|null);
    public static create(properties?: IEDiv): EDiv;
    public static encode(message: IEDiv, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IEDiv, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EDiv;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EDiv;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): EDiv;
    public static toObject(message: EDiv, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IEPlus {
    p1?: (IPar|null);
    p2?: (IPar|null);
}

export class EPlus implements IEPlus {
    constructor(properties?: IEPlus);
    public p1?: (IPar|null);
    public p2?: (IPar|null);
    public static create(properties?: IEPlus): EPlus;
    public static encode(message: IEPlus, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IEPlus, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EPlus;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EPlus;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): EPlus;
    public static toObject(message: EPlus, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IEMinus {
    p1?: (IPar|null);
    p2?: (IPar|null);
}

export class EMinus implements IEMinus {
    constructor(properties?: IEMinus);
    public p1?: (IPar|null);
    public p2?: (IPar|null);
    public static create(properties?: IEMinus): EMinus;
    public static encode(message: IEMinus, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IEMinus, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EMinus;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EMinus;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): EMinus;
    public static toObject(message: EMinus, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IELt {
    p1?: (IPar|null);
    p2?: (IPar|null);
}

export class ELt implements IELt {
    constructor(properties?: IELt);
    public p1?: (IPar|null);
    public p2?: (IPar|null);
    public static create(properties?: IELt): ELt;
    public static encode(message: IELt, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IELt, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ELt;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ELt;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): ELt;
    public static toObject(message: ELt, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IELte {
    p1?: (IPar|null);
    p2?: (IPar|null);
}

export class ELte implements IELte {
    constructor(properties?: IELte);
    public p1?: (IPar|null);
    public p2?: (IPar|null);
    public static create(properties?: IELte): ELte;
    public static encode(message: IELte, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IELte, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ELte;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ELte;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): ELte;
    public static toObject(message: ELte, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IEGt {
    p1?: (IPar|null);
    p2?: (IPar|null);
}

export class EGt implements IEGt {
    constructor(properties?: IEGt);
    public p1?: (IPar|null);
    public p2?: (IPar|null);
    public static create(properties?: IEGt): EGt;
    public static encode(message: IEGt, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IEGt, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EGt;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EGt;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): EGt;
    public static toObject(message: EGt, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IEGte {
    p1?: (IPar|null);
    p2?: (IPar|null);
}

export class EGte implements IEGte {
    constructor(properties?: IEGte);
    public p1?: (IPar|null);
    public p2?: (IPar|null);
    public static create(properties?: IEGte): EGte;
    public static encode(message: IEGte, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IEGte, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EGte;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EGte;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): EGte;
    public static toObject(message: EGte, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IEEq {
    p1?: (IPar|null);
    p2?: (IPar|null);
}

export class EEq implements IEEq {
    constructor(properties?: IEEq);
    public p1?: (IPar|null);
    public p2?: (IPar|null);
    public static create(properties?: IEEq): EEq;
    public static encode(message: IEEq, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IEEq, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EEq;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EEq;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): EEq;
    public static toObject(message: EEq, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IENeq {
    p1?: (IPar|null);
    p2?: (IPar|null);
}

export class ENeq implements IENeq {
    constructor(properties?: IENeq);
    public p1?: (IPar|null);
    public p2?: (IPar|null);
    public static create(properties?: IENeq): ENeq;
    public static encode(message: IENeq, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IENeq, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ENeq;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ENeq;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): ENeq;
    public static toObject(message: ENeq, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IEAnd {
    p1?: (IPar|null);
    p2?: (IPar|null);
}

export class EAnd implements IEAnd {
    constructor(properties?: IEAnd);
    public p1?: (IPar|null);
    public p2?: (IPar|null);
    public static create(properties?: IEAnd): EAnd;
    public static encode(message: IEAnd, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IEAnd, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EAnd;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EAnd;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): EAnd;
    public static toObject(message: EAnd, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IEOr {
    p1?: (IPar|null);
    p2?: (IPar|null);
}

export class EOr implements IEOr {
    constructor(properties?: IEOr);
    public p1?: (IPar|null);
    public p2?: (IPar|null);
    public static create(properties?: IEOr): EOr;
    public static encode(message: IEOr, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IEOr, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EOr;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EOr;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): EOr;
    public static toObject(message: EOr, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IEMatches {
    target?: (IPar|null);
    pattern?: (IPar|null);
}

export class EMatches implements IEMatches {
    constructor(properties?: IEMatches);
    public target?: (IPar|null);
    public pattern?: (IPar|null);
    public static create(properties?: IEMatches): EMatches;
    public static encode(message: IEMatches, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IEMatches, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EMatches;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EMatches;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): EMatches;
    public static toObject(message: EMatches, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IEPercentPercent {
    p1?: (IPar|null);
    p2?: (IPar|null);
}

export class EPercentPercent implements IEPercentPercent {
    constructor(properties?: IEPercentPercent);
    public p1?: (IPar|null);
    public p2?: (IPar|null);
    public static create(properties?: IEPercentPercent): EPercentPercent;
    public static encode(message: IEPercentPercent, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IEPercentPercent, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EPercentPercent;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EPercentPercent;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): EPercentPercent;
    public static toObject(message: EPercentPercent, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IEPlusPlus {
    p1?: (IPar|null);
    p2?: (IPar|null);
}

export class EPlusPlus implements IEPlusPlus {
    constructor(properties?: IEPlusPlus);
    public p1?: (IPar|null);
    public p2?: (IPar|null);
    public static create(properties?: IEPlusPlus): EPlusPlus;
    public static encode(message: IEPlusPlus, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IEPlusPlus, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EPlusPlus;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EPlusPlus;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): EPlusPlus;
    public static toObject(message: EPlusPlus, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IEMinusMinus {
    p1?: (IPar|null);
    p2?: (IPar|null);
}

export class EMinusMinus implements IEMinusMinus {
    constructor(properties?: IEMinusMinus);
    public p1?: (IPar|null);
    public p2?: (IPar|null);
    public static create(properties?: IEMinusMinus): EMinusMinus;
    public static encode(message: IEMinusMinus, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IEMinusMinus, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EMinusMinus;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EMinusMinus;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): EMinusMinus;
    public static toObject(message: EMinusMinus, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IConnective {
    conn_and_body?: (IConnectiveBody|null);
    conn_or_body?: (IConnectiveBody|null);
    conn_not_body?: (IPar|null);
    var_ref_body?: (IVarRef|null);
    conn_bool?: (boolean|null);
    conn_int?: (boolean|null);
    conn_string?: (boolean|null);
    conn_uri?: (boolean|null);
    conn_byte_array?: (boolean|null);
}

export class Connective implements IConnective {
    constructor(properties?: IConnective);
    public conn_and_body?: (IConnectiveBody|null);
    public conn_or_body?: (IConnectiveBody|null);
    public conn_not_body?: (IPar|null);
    public var_ref_body?: (IVarRef|null);
    public conn_bool: boolean;
    public conn_int: boolean;
    public conn_string: boolean;
    public conn_uri: boolean;
    public conn_byte_array: boolean;
    public connective_instance?: ("conn_and_body"|"conn_or_body"|"conn_not_body"|"var_ref_body"|"conn_bool"|"conn_int"|"conn_string"|"conn_uri"|"conn_byte_array");
    public static create(properties?: IConnective): Connective;
    public static encode(message: IConnective, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IConnective, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Connective;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Connective;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): Connective;
    public static toObject(message: Connective, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IVarRef {
    index?: (number|null);
    depth?: (number|null);
}

export class VarRef implements IVarRef {
    constructor(properties?: IVarRef);
    public index: number;
    public depth: number;
    public static create(properties?: IVarRef): VarRef;
    public static encode(message: IVarRef, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IVarRef, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): VarRef;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): VarRef;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): VarRef;
    public static toObject(message: VarRef, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IConnectiveBody {
    ps?: (IPar[]|null);
}

export class ConnectiveBody implements IConnectiveBody {
    constructor(properties?: IConnectiveBody);
    public ps: IPar[];
    public static create(properties?: IConnectiveBody): ConnectiveBody;
    public static encode(message: IConnectiveBody, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IConnectiveBody, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ConnectiveBody;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ConnectiveBody;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): ConnectiveBody;
    public static toObject(message: ConnectiveBody, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IGPrivate {
    id?: (Uint8Array|null);
}

export class GPrivate implements IGPrivate {
    constructor(properties?: IGPrivate);
    public id: Uint8Array;
    public static create(properties?: IGPrivate): GPrivate;
    public static encode(message: IGPrivate, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IGPrivate, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GPrivate;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GPrivate;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): GPrivate;
    public static toObject(message: GPrivate, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}
