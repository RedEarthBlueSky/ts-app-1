import React, {useState, useEffect} from 'react'
import { View, Text } from 'react-native'
import { 
  ShoppingCart,
  CalculateOrderAmount,
  Order, 
} from "../utils"

const ShoppingCartScreen = ():JSX.Element => {
  const cart1 = new ShoppingCart()
  const order1 = new Order()
  const [order, setOrder] = useState<number>(0)
  const [cart, setCart] = useState<number>(0)

  useEffect(() => {
    console.log(`The CART total is ${CalculateOrderAmount(cart1)}`)
    console.log(`The ORDER total is ${CalculateOrderAmount(order1)}`)
    setOrder(CalculateOrderAmount(cart1))
    setCart(CalculateOrderAmount(order1))
  }, [])

  return (
    <View>
      <Text>Shopping Cart Screen</Text>
      <Text>{order}</Text>
      <Text>{cart}</Text>
    </View>
  )
}

export { ShoppingCartScreen }

