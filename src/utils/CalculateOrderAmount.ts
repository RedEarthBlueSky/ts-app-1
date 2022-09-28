import { useState } from 'react'

export interface OrderProps {
  //  object to contain one method
  //  that returns a number
  calculateTotal(): number
}

export const CalculateOrderAmount = (order: OrderProps) => {
  let total = order.calculateTotal()
  const DISCOUNT = total * .1
  const TAX = total * .2;
  total -= DISCOUNT
  total += TAX
  return total
}