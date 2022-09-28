import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect} from 'react'
import { Color, MoreColors } from './helpers'

const TypesScreen = () => {

  useEffect(() => {
    console.log(Color.Red, Color.Green, Color.Blue)
    console.log(MoreColors.Red, 
      MoreColors.Green, 
      MoreColors.Blue,
      MoreColors[55],
      MoreColors[12],
      MoreColors.Purple,
    )  
  }, [])

  return (
    <View>
      <Text style={styles.H2Bold}>Types Screen</Text>
      <Text style={styles.H3Bold}>Primitive Types</Text>
      <Text>type primitiveTypes = boolean | number | string | symbol
      | null | undefined
      </Text>
      <Text style={styles.H3Bold}>Null and Undefined</Text>
      <Text>Avoid use</Text>
      <Text style={styles.H3Bold}>Object non primitive types</Text>
      <Text>Void: something that does not return a value.  ire; a function that carries out a console log</Text>
      <Text>Array:  List of elements of some type</Text>
      <Text>Tuple: An array of a fixed number of elements whose types are known</Text>
      <Text>Enum:  Referencable names set to values, organisable reusable code</Text>
      <Text>Enum assigns a number to each member.  Values can be set manualy</Text>
    </View>
  )
}

export { TypesScreen }

const styles = StyleSheet.create({
  H2Bold: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  H3Bold: {
    fontWeight: 'bold',
    fontSize: 18,
  }
})