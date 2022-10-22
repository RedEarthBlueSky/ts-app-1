//  Generic Functions

//  the generic part is the parameter inside the angle brackets 
//  and this affects the type value
type numArray = Array<number>
type stringArray = Array<string>

//  lets look at a function
export const last = (arr: Array<number>): number => {
  return arr[arr.length - 1]
}

let l = last([1,2,3,4,])
let l2 = last(['a', 'b', null])

//  what if we want the array to work with any types
//  T is just a variable name, you can call it whatever you like
//  T represens the generic type to be passed into the function
const lastAnyTypeArray = <T>(arr: T[]): T => {
  return arr[arr.length - 1]
}
//  it is not needed to explicity state the array type 
//  but can be done
let m = lastAnyTypeArray<number>([1,2,3,4,])
m = lastAnyTypeArray([1,2,3,4,])
// can be any or ...  string | number | null | undefined
let m2 = lastAnyTypeArray<any>(['a', 'b', null, undefined, 7])
m2 = lastAnyTypeArray(['a', 'b', null, undefined, 7])
let m3 = lastAnyTypeArray<string>(['a', 'b', 'c'])
m3 = lastAnyTypeArray(['a', 'b', 'c'])

//  Let's look at another function
let makeArr = (x:number) => {
  return [x]
}

let v = makeArr(5)
let v2 = makeArr('Hello World')

//  Let's make makeArr generic
const makeArr2 = <T>(x: T): Array<T> => {
  return [x]
}

let u = makeArr2(5)
let u2 = makeArr2('Hello World')
let u3 = makeArr2(null)

//  Add more than one parameter type to make a toople
//  Will not accept Array<T, Y> as return type use as below
const makeArr3 = <T, Y>(x: T, y: Y): [T, Y] => {
  return [x, y]
}
u = makeArr3(5, 6)
u2 = makeArr3('Hello World', 'b')
u3 = makeArr3(null, null)
//  let's try an override
let u4 = makeArr3<string | null, string | number>('Hello World', 2)

//  Extending types
interface IName {
  firstName: string
  lastName: string
}
interface IReturn {
  object: object
  fullName: string
}
export const makeFullName = <T extends IName>(
  obj: T
  //  Note how I have extended T here to include fullName
  //  being added to the object
  ): T & {fullName: string} => {
  return {
    ...obj,
    fullName: obj.firstName + ' ' + obj.lastName
  }
}

//  INTERFACES WITH TYPES AND GENERICS DOUBLE THE

interface Tab<T> {
  id: string
  position: number
  data: T
}

type NumberTab = Tab<number>
type StringTab = Tab<string>
type ThreeTab = Tab<object | string | number>

interface Tab2<T, Y> {
  id: string
  position: number
  data: T
  moreData: Y
}

type NumberTab2 = Tab2<number, number>
type StringTab2 = Tab2<string, string>
type ThreeTab2 = Tab2<string, number>

//  so we can add a key value pair to any object
const returnData = <NumberTab2>(
  obj: NumberTab2
): NumberTab2 & {otherData: string} => {
  return {
    ...obj,
    otherData: 'This is my other data'
  }
}















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
export interface ChocolateCake extends Expirable {}
export interface VanillaCake extends Expirable {}

export const ChocolateCakes: ChocolateCake[] = [
  {expireyDate: new Date()}
]

export const VanillaCakes: VanillaCake[] = [
  {expireyDate: new Date()}
]

export const getExpiredItems: GetExpiredItemsFunction = (items) => {
    const currentDate = new Date().getTime()
    return items.filter(item => item.expireyDate.getDate() < currentDate)
}

interface GetExpiredItemsFunction {
  <Item extends Expirable>(items: Array<Item>): Array<Item>
}

//  Further use Generics with Interfaces
export interface ShoppingCart<ItemId, Item> {
  items: Array<Item>
  addItem(this: ShoppingCart<ItemId, Item>, item: Item): void
  getItemById(this: ShoppingCart<ItemId, Item>                                                                                                                                                                                                                                                                                                                                                                                , id: ItemId): Item
}

interface Item {
  id: number,
  price: number,
}

export const cart: ShoppingCart<number, Item> = {
  items: [],
  addItem(item) {
    this.items.push(item)
  },
  getItemById(id) {
    return this.items.find(item => item.id === id)
  }
}


