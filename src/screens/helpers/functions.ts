//  Functions(optional and default parameters)
//  Basic function
export const sum = (a: number, b: number): number => a + b

//interface
interface Sum {
  (a: number, b: number): number
}

//type
type MyFunc = (a: number, b: number) => number

export const sum2: MyFunc = (a, b) => a + b
export const sum3: Sum = (a, b) => a + b

//  Unknown number of arguments
//  using the spread operator
//  use basic function
export const sumEverything = (...x: number[]): number => {
  return x.reduce((result, num) => result + num, 0)
}

//type === best approach when using a function
type SumFunc = (...x: number[]) => number

// interface
interface SumEverything {
  (...x: number[]): number
}

// use type === the best approach when using a function
export const sumEverything3: SumFunc = (...x) => {
  return x.reduce((result, num) => result + num, 0)
}

// use interface === best approach when using objects and method objects
export const sumEverything2: SumEverything = (...x) => {
  return x.reduce((result, num) => result + num, 0)
}


