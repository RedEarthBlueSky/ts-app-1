import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.H1Bold}>More about</Text>
      <TouchableOpacity 
        accessibilityLabel="Learn more about Modules"
        style={styles.button}
      >
        <Text>Modules</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        accessibilityLabel="Learn more about Types"
        style={styles.button}
      >
        <Text>Types</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        accessibilityLabel="Learn more about Interfaces"
        style={styles.button}
      >
        <Text>Interfaces</Text>
      </TouchableOpacity>
    </View>
  )
}

export { HomeScreen }

const styles = StyleSheet.create({
  H1Bold: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  button: {
    alignItems: "center",
    alignSelf: 'center',
    backgroundColor: "blue",
    marginTop: 15,
    padding: 15,
    width: '90%',
  },
})