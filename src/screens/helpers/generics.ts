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


