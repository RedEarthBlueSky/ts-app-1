import { OrderProps } from "../utils/CalculateOrderAmount";

export class Order implements OrderProps {
  calculateTotal(): number {
    return 200
  }
}