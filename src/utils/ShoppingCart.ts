import { OrderProps } from "./CalculateOrderAmount"

export class ShoppingCart implements OrderProps {
  calculateTotal() {
    return 100
  }
}