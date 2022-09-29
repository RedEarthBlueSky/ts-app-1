//  Interfaces

import { Profiler } from "react"

export interface A {
  someProp: number
}

export interface B {
  someProp: number
  anotherProp: number
}

let a: A = { someProp: 1 }
let b: B = a //  now we get an error

interface Profile {
  //  property cannot be modified
  readonly name: string
  age: number
  address: string
  //  question mark makes the property optional
  dob?: number
}

let profile: Profile = {
  name: 'John',
  age: 32,
  address: 'The World'
}

// Profiler.name = 'Peter' // error as read only

//  Index Signature
interface C {
  //  tells typescript the properties must be strings and numbers
  [key: string]: number | string
  someProp: 12 // okay
  anotherProp: 'Hello World'
}

const c: C = { someProp: 12, anotherProp: 'Hello World'  }
c.x = 1
c.b = 'Hello World Again'

// Call Signature
interface Sum {
  (d: number, e: number): number
}

const sum: Sum = (d, e) => d + e

//  Extending Interfaces
interface Parent {
  x: string
  y: number
}

interface Parent2 {
  z: string
}

interface Parent3 {
  q: number
}

interface Child extends Parent, Parent2, Parent3 { }

let child: Child = {
  x: 'someprop', 
  y: 12,
  z: 'Hello World',
  q: 22,
}

