/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-types */

type Primitive = string | number | boolean | bigint | symbol | undefined | null;
type Builtin = Primitive | Function | Date | Error | RegExp;
type IsTuple<T> = T extends [infer A]
    ? T
    : T extends [infer A, infer B]
    ? T
    : T extends [infer A, infer B, infer C]
    ? T
    : T extends [infer A, infer B, infer C, infer D]
    ? T
    : T extends [infer A, infer B, infer C, infer D, infer E]
    ? T
    : never;

export type DeepPartial<T> = T extends Builtin
    ? T
    : T extends Map<infer K, infer V>
    ? Map<DeepPartial<K>, DeepPartial<V>>
    : T extends ReadonlyMap<infer K, infer V>
    ? ReadonlyMap<DeepPartial<K>, DeepPartial<V>>
    : T extends WeakMap<infer K, infer V>
    ? WeakMap<DeepPartial<K>, DeepPartial<V>>
    : T extends Set<infer U>
    ? Set<DeepPartial<U>>
    : T extends ReadonlySet<infer U>
    ? ReadonlySet<DeepPartial<U>>
    : T extends WeakSet<infer U>
    ? WeakSet<DeepPartial<U>>
    : T extends (infer U)[]
    ? T extends IsTuple<T>
        ? { [K in keyof T]?: DeepPartial<T[K]> }
        : DeepPartial<U>[]
    : T extends Promise<infer U>
    ? Promise<DeepPartial<U>>
    : T extends {}
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : Partial<T>;
