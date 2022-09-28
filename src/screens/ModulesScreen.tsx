import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
// see file for default export and named export
import multiply, 
{ addStrings as Add2, 
  HelloWorld 
} from './helpers'


const ModulesScreen = ():JSX.Element => {
  const [result, setResult] = useState<number>(0)
  const [stringResult, setStringResult] = useState<string>('')

  useEffect(() => {
    setResult(multiply(8,3))
    setStringResult(Add2('Hello, ', 'World'))
  }, [])

  return (
    <View>
      <Text>Modules Screen</Text>
      <Text>A module is a file which contains at least one top level import or export</Text>
      <Text>Numbers result {result}</Text>
      <Text>String result {stringResult}</Text>
    </View>
  )
}

export { ModulesScreen }

const styles = StyleSheet.create({

})