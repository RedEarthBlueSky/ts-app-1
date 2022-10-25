type Alias1 = string | string[] | null
type Alias2 = { a: number } & { b: number }
type Alias3<T> = T[]

type Alias4 = {
  a: number
  b: number
}

export { Alias1, Alias2, Alias3, Alias4 }

//  further use here

