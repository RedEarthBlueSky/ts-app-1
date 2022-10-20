import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect} from 'react'
import { unionsUtils, intersectionUtils, genericUtils } from './helpers'

const UnionsScreen = () => {
  const { combineThreeObjects } = intersectionUtils
  const { makeFullName } = genericUtils
  let objA = { 1: 'one', 2: 'two' }
  let objB = { 3: 'three', 4: 'four' }
  let objC = { 5: 'thirty five', 6: 'forty four' }
  let join3 = combineThreeObjects(objA, objB, objC)
  let nameObj = makeFullName({ firstName: 'Hello', lastName: 'World!', age: 54 })
  const { firstName, fullName, lastName, age } = nameObj
  useEffect(() => {
    // console.log(join3)
    // sconsole.log(nameObj)
  }, [join3])

  return (
    <View>
      <Text style={styles.H1Bold}>Unions and Intersections Screen</Text>
      <Text>Describe a value that can be one of serveral types.</Text>
      <Text>Combine all the objects {JSON.stringify(join3)}</Text>
      <Text></Text>
      <Text style={styles.H1Bold}>Type Alias</Text>
      <Text>Assign a new name to the type do not create a new type</Text>
      <Text>{firstName} {lastName} is {age} years old </Text>
      <Text>{fullName} is {age} years old </Text>
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