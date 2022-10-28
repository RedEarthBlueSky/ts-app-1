///////////////////////
// MERGING DECLARATIONS
///////////////////////

interface Cart {
  calculateTotal(): number
}
//////

interface Cart {
  x: number
}

interface Cart {
  calculateTotal(options: { discountCode: number } ): number
}

let myCart: Cart = {
  x: 1,
  //  ? makes options 'optional' hehe
  calculateTotal(options?: {discountCode: number}) {
    if (options && options.discountCode) {
      //  apply discount
    }
    return 1
  }
}

//////////////////////
//  MERGING NAMESPACES
//  EXAMPLE ONE
namespace MyNamespace {
  export const x: number = 10
  export interface SomeInterface {
    x: number
  }
}
//  This merging does not work as per tutorial
//  x must be declare in the same namespace for 
//  get X to work
namespace MyNamespace {
  export const getX = () => x;
  export interface SomeInterface {
    x: number
  }
}

//  EXAMPLE TWO
//  This works as it should
enum Vegetables {
  Tomato='tomato',
  Onion='Onion',
}

namespace Vegetables {
  export const makeSalad = () => {
    return Vegetables.Onion + ' ' + Vegetables.Tomato
  }
}





export { myCart, MyNamespace, Vegetables }