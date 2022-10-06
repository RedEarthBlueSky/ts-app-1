//  Function takes two numbers and returns a number
const multiply = (a: number, b: number): number => a * b
//  Function takes two strings and returns a string
export const addStrings = (a: string, b: string): string => a + b

export interface HelloWorld {}

export default multiply

//  Array
const array1: string[] = ['x', 'y']
const array2: Array<string> = array1

//  Tuple 
const tuple: [string, number] = ['str', 1]

//  Enum
export enum Color {
  Red, 
  Green,
  Blue,
}

export enum MoreColors {
  Red = 55,
  Green = 44,
  Blue = 12,
  Purple = 'Purple'
}

// Any
let Any: any
Any = 'a string'
Any = 12
Any = true

//  Type assertions
//  set the type of a value and tell the TS compiler not to infer it
//  type assertion with an object
interface Employee {
  name: string,
  age: number,
  address: string
}
const employee = <Employee>{}

import * as interfaceHelpers from './interfaces'
import * as functionHelpers from './functions'
import * as classHelpers from './classes'
import * as implementHelpers from './implementInterfaces'
import * as genericUtils from './generics'
import * as unionsUtils from './unions'
export { 
  implementHelpers, 
  classHelpers, 
  interfaceHelpers, 
  functionHelpers,
  genericUtils,
  unionsUtils,
}

const myFavoriteColor: Color = Color.Blue