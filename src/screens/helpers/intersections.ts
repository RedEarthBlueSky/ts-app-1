export interface IIntersections { }

interface IA {
  a: number
}

interface IB {
  b: number
}

interface IC {
  c: number
}

const X = (obj: IA & IB & IC): number => {
  return obj.a + obj.b + obj.c
}

export const combineThreeObjects = 
  <ObjA extends object, ObjB extends object, ObjC extends object>(objA: ObjA, objB: ObjB, objC: ObjC)
  : ObjA & ObjB & ObjC => {
    return {...objA, ...objB, ...objC}
  }

  //  Type Alias

  type Alias = string | string[] | null
  type Alias2 = {a: number} & {b: number}
  type Alias3<T> = T[]
