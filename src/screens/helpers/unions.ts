
//  Functions example
export const someFn = (myArgument: number | string | boolean) => {
  let x  = (typeof myArgument === 'string') 
  ? myArgument.toUpperCase()
  : (typeof myArgument === 'number')
  ? myArgument.toFixed()
  : myArgument.valueOf()
  return myArgument
}

//  Interfaces example
interface Dog {
  bark(): void
  walk(): void
}

interface Cat {
  meow(): void
  walk(): void
}

//  more elegent to test for interface Props type externally
const isDog = (someObj:  Dog | Cat): someObj is Dog => {
  return (<Dog>someObj).bark !== undefined
}

export const callMyPet = (pet: Dog | Cat ): void => {
  pet.walk()
  isDog(pet) ? pet.bark() : pet.meow()
}

//  Example using instanceof 
class Foo {
  foo: number
  commonProp: string
  
  constructor(foo: number, commonProp: string) {
    this.foo = foo
    this.commonProp = commonProp
  }
}

class Bar {
  bar: number
  commonProp: string

  constructor(bar: number, commonProp: string) {
    this.bar = 100
    this.commonProp = 'commonProp from Bar'
  }
}

const fooBarFunction = (obj: Foo | Bar ) => {
  const fooOrBar = (obj instanceof Foo) ? obj.foo : obj.bar
  return fooOrBar
}