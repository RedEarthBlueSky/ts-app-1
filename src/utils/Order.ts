import { OrderProps } from "./CalculateOrderAmount";

export class Order implements OrderProps {
  calculateTotal(): number {
    return 200
  }
}