import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


const MergingScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.H2Bold}>Declaraction Merging</Text>
      <Text style={styles.H2Bold}>Namespace Merging</Text>
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
  PlainText: {
    fontSize: 18,
    marginTop: 10,
  }
})