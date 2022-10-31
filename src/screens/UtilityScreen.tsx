import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { untilityProviders } from './helpers'

const UtilityScreen = () => {
  return (
    <View>
      <View style={styles.container}>
      <Text style={styles.H2Bold}>Utility Types</Text>
      <Text style={styles.H3}>Facilitates common type transformations, available globally.</Text>
      <Text style={styles.H3Bold}></Text>
      <Text></Text>
      <Text></Text>
    </View>
    </View>
  )
}

export { UtilityScreen }

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
  H3: {
    fontSize: 18,
    marginBottom: 5,
  },
  PlainText: {
    fontSize: 18,
    marginTop: 10,
  }
})