import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { merginUtils } from './helpers'


const MergingScreen = () => {
  const { MyNamespace, Vegetables } = merginUtils

  useEffect(() => {
  })

  return (
    <View style={styles.container}>
      <Text style={styles.H2Bold}>Merging</Text>
      <Text style={styles.H3Bold}>Declaraction Merging</Text>
      <Text style={styles.H3Bold}>Namespace Merging</Text>
      <Text>{MyNamespace.x} {Vegetables.makeSalad()}</Text>
      <Text></Text>
    </View>
  )
}

export { MergingScreen }

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    padding: 10,
  },
  H2Bold: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 15,
  },
  H3Bold: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  PlainText: {
    fontSize: 18,
    marginTop: 10,
  }
})