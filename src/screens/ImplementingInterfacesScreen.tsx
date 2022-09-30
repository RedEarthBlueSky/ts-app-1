import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ImplementingInterfacesScreen = () => {
  return (
    <View>
      <Text style={styles.H1Bold}>Implementing Interfaces Screen</Text>
    </View>
  )
}

export { ImplementingInterfacesScreen }

const styles = StyleSheet.create({
  H1Bold: {
    fontSize: 32,
    fontWeight: 'bold',
  }
})