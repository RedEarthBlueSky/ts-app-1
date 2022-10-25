import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { typeAliasUtils } from './helpers'

const TypeAliasScreen = () => {
  return (
    <View>
      <Text>Type Alias Screen</Text>
      <Text>Type Aliases use type to describe the shape of objects</Text>
      <Text>This is flawed because it does not create a new type</Text>
      <Text>It just describes and references the object</Text>
      <Text>So don't do it</Text>
      <Text>You can use type aliases to create alternative names for complex types</Text>
    </View>
  )
}

export { TypeAliasScreen }

const styles = StyleSheet.create({

})