import { OrderProps } from "../utils/CalculateOrderAmount"

export class ShoppingCart implements OrderProps {
  calculateTotal() {
    return 100
  }
}