import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { genericUtils } from './helpers'
import { ChocolateCake, VanillaCake } from './helpers/generics'

const GenericsScreen = () => {
  const { 
    ChocolateCakes, 
    VanillaCakes, 
    getExpiredItems,
    // interfaces
    ChocolateCake,
    VanillaCake
  } = genericUtils
  const expiredChocolateCakes = getExpiredItems<ChocolateCake>(ChocolateCakes)
  const expiredVanillaCakes = getExpiredItems<VanillaCake>(VanillaCakes)

  useEffect(() => {
    console.log(expiredChocolateCakes)
    console.log(expiredVanillaCakes)
  }, [ChocolateCakes, VanillaCakes])

  return (
    <View>
      <Text style={styles.H1Bold}>Generics Screen</Text>
      <Text>Generics describe components that work with a variety of types</Text>
      <Text>T generic type parameter in angle brackets after function name</Text>
      <Text>This type parameter T can be used to describe the argument and return types</Text>
      <Text>Can also be used inside of the function body</Text>
      <Text></Text>
      <Text></Text>
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