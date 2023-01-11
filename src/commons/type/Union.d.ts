// these just a helper for makin union decision in TS :)

type UnionKeys<T> = T extends T ? keyof T : never

type StrictUnionHelper<T, TAll> = T extends unknown
  ? T & Partial<Record<Exclude<UnionKeys<TAll>, keyof T>, never>>
  : never

declare namespace Union {
  export type StrictUnion<T> = StrictUnionHelper<T, T>
}

export default Union
