//  Generic Functions

//  T generic type parameters
export const genericArrowFunction = <T,>(x: T): T => x

//  Multiple type parameters
export const genArrFuncMultiples = <T, X, SomeOtherType>(x: T): T => x

// Generic Interfaces
interface GenericInterface<T> {
  (a: T): T
  someProp: T
}

interface GenericInterface2<T> {
  //  describe types separately 
  <U>(a: U): U
  someProp: T
}

//  Generic Classes  
class GenericClass<P> {
  constructor(public props: P) {}

  getProps(): P {
    return this.props
  }
}

//  Example
interface Expirable {
  expireyDate: Date
}
interface ChocolateCake extends Expirable {}
interface VanillaCake extends Expirable {}

const ChocolateCakes: ChocolateCake[] = [
  {expireyDate: new Date()}
]

const VanillaCakes: VanillaCake[] = [
  {expireyDate: new Date()}
]

const getExpiredItems = 






