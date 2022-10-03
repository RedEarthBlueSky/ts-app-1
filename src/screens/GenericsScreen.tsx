import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { genericUtils } from './helpers'

const GenericsScreen = () => {
  return (
    <View>
      <Text style={styles.H1Bold}>Generics Screen</Text>
      <Text>Generics describe components that work with a variety of types</Text>
      <Text>T generic type parameter in angle brackets after function name</Text>
      <Text>This type parameter T can be used to describe the argument and return types</Text>
      <Text>Can also be used inside of the function body</Text>
    </View>
  )
}

export { GenericsScreen }

const styles = StyleSheet.create({
  H1Bold: {
    fontSize: 32,
    fontWeight: 'bold',
  }
})