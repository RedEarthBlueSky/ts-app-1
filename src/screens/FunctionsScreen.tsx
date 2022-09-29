import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { functionHelpers } from './helpers'

const FunctionsScreen = () => {
  const { sum, sum2, sum3, sumEverything, sumEverything2, sumEverything3 } = functionHelpers
  const args: number[] = [0,1,2,3,4,5,6,7,8]
  const everything = sumEverything(...args)
  return (
    <View>
      <Text style={styles.H1Bold}>Functions Screen</Text>
      <Text>Functions (optional and default parameters)</Text>
      <Text>Sums</Text>
      <Text>{sum(3, 3)} {sum2(7,8)} {sum3(6,7)}</Text>
      <Text>Unknown number of arguments ...n</Text>
      <Text>{sumEverything(...args)} {sumEverything2(...args)} {sumEverything3(...args)}</Text>

    </View>
  )
}

export { FunctionsScreen }

const styles = StyleSheet.create({
  H1Bold: {
    fontSize: 32,
    fontWeight: 'bold',
  }
})