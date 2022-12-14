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
import * as intersectionUtils from './intersections'
import * as typeAliasUtils from './type-alias'
import * as merginUtils from './merging'
//  from now on helpers are providers as 
//  1.  Helpers sounds stupid and is unhelpful
//  2.  Helpers provide support to the component
import * as utilityProviders from './untilitys'
export { 
  implementHelpers, 
  merginUtils,
  classHelpers, 
  interfaceHelpers, 
  functionHelpers,
  genericUtils,
  unionsUtils,
  intersectionUtils,
  typeAliasUtils,
  utilityProviders
}

const myFavoriteColor: Color = Color.Blue