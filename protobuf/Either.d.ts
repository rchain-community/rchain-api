import * as $protobuf from "protobufjs";
export interface IEitherAny {
    type_url?: (string|null);
    value?: (Uint8Array|null);
}

export class EitherAny implements IEitherAny {
    constructor(properties?: IEitherAny);
    public type_url: string;
    public value: Uint8Array;
    public static create(properties?: IEitherAny): EitherAny;
    public static encode(message: IEitherAny, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IEitherAny, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EitherAny;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EitherAny;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): EitherAny;
    public static toObject(message: EitherAny, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IEitherError {
    messages?: (string[]|null);
}

export class EitherError implements IEitherError {
    constructor(properties?: IEitherError);
    public messages: string[];
    public static create(properties?: IEitherError): EitherError;
    public static encode(message: IEitherError, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IEitherError, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EitherError;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EitherError;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): EitherError;
    public static toObject(message: EitherError, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IEitherSuccess {
    response?: (IEitherAny|null);
}

export class EitherSuccess implements IEitherSuccess {
    constructor(properties?: IEitherSuccess);
    public response?: (IEitherAny|null);
    public static create(properties?: IEitherSuccess): EitherSuccess;
    public static encode(message: IEitherSuccess, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IEitherSuccess, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EitherSuccess;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EitherSuccess;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): EitherSuccess;
    public static toObject(message: EitherSuccess, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IEither {
    error?: (IEitherError|null);
    success?: (IEitherSuccess|null);
}

export class Either implements IEither {
    constructor(properties?: IEither);
    public error?: (IEitherError|null);
    public success?: (IEitherSuccess|null);
    public content?: ("error"|"success");
    public static create(properties?: IEither): Either;
    public static encode(message: IEither, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IEither, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Either;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Either;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): Either;
    public static toObject(message: Either, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export namespace google {

    namespace protobuf {

        interface IAny {
            type_url?: (string|null);
            value?: (Uint8Array|null);
        }

        class Any implements IAny {
            constructor(properties?: google.protobuf.IAny);
            public type_url: string;
            public value: Uint8Array;
            public static create(properties?: google.protobuf.IAny): google.protobuf.Any;
            public static encode(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Any;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Any;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): google.protobuf.Any;
            public static toObject(message: google.protobuf.Any, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }
    }
}
