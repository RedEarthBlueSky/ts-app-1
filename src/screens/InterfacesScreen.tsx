import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const InterfacesScreen = () => {
  return (
    <View>
      <Text style={styles.H1Bold}>Interfaces Screen</Text>
    </View>
  )
}

export { InterfacesScreen }

const styles = StyleSheet.create({
  H1Bold: {
    fontSize: 32,
    fontWeight: 'bold',
  }
})