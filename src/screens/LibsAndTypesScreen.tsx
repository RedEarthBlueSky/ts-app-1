import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { typeAliasUtils } from './helpers'
import ApolloClient from 'apollo-client'

const LibsAndTypesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.H2Bold}>Libs And TypesScreen</Text>
      <Text style={styles.PlainText} >Importing third party libraries can use the format</Text>
      <Text style={styles.PlainText} >npm i @types/npm-package-name</Text>
      <Text style={styles.PlainText} >If you import a package and it contains clients you can use</Text>
      <Text style={styles.PlainText} >Hover over the import and you will see the type.</Text>
      <Text style={styles.PlainText} >Hold CMND and click on the type variable to see the type definition.</Text>
      
    </View>
  )
}

export { LibsAndTypesScreen }

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