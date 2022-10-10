import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { unionsUtils, interfaceHelpers } from './helpers'

const UnionsScreen = () => {
  const { someFn } = unionsUtils
  return (
    <View>
      <Text style={styles.H1Bold}>Unions and Intersections Screen</Text>
      <Text>Describe a value that can be one of serveral types.</Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
    </View>
  )
}

export { UnionsScreen }

const styles = StyleSheet.create({
  H1Bold: {
    fontSize: 32,
    fontWeight: 'bold',
  }
})