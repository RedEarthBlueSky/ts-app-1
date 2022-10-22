//  FunctionsScreen
import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { functionHelpers } from '../helpers'
import { PropsComponent } from './components'

const FunctionsScreen: React.FC = () => {
  const { sum, sum2, sum3, 
    sumEverything, sumEverything2, sumEverything3,
    calcArea, 
  } = functionHelpers



  const args: number[] = [0,1,2,3,4,5,6,7,8]
  const areaArgs2: number[] = [5,5]
  const everything = sumEverything(...args)
  return (
    <View style={styles.container}>
      <PropsComponent 
        age={48}
        name={'Mr Ian'}
        greeting={'Happy Birthday'}
      />
      <Text style={styles.H1Bold}>Functions Screen</Text>
      <Text>Functions (optional and default parameters)</Text>
      <Text>Sums</Text>
      <Text>{sum(3, 3)} {sum2(7,8)} {sum3(6,7)}</Text>
      <Text>Unknown number of arguments ...n</Text>
      <Text>{sumEverything(...args)} {sumEverything2(...args)} {sumEverything3(...args)}</Text>
      <Text>Overloads</Text>
      <Text>{calcArea(...areaArgs2)}</Text>
    </View>
  )
}

export { FunctionsScreen }

const styles = StyleSheet.create({
  H1Bold: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  container: {
    display: 'flex',
    height: '100%',
    padding: 10,
    justifyContent: 'space-around',
  }
})