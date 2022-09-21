import React, {useState} from 'react'
import { View, Text } from 'react-native'
import { ShoppingCart } from "./ShoppingCart";
import { CalculateOrderAmount } from "../utils/CalculateOrderAmount";
import { Order } from "./Order";

const cart = new ShoppingCart()
console.log(`The CART total is ${CalculateOrderAmount(cart)}`)
const order = new Order()
console.log(`The ORDER total is ${CalculateOrderAmount(order)}`)

