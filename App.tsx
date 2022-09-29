import { StyleSheet, Text, View } from 'react-native';
import React from 'react'
//  can call what you want as a default export
import Navigator from './src/routes/HomeStack'

export default function App() {
  return (
    <Navigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
  },
  H1Bold: {
    fontSize: 32,
    fontWeight: 'bold',
  }
});
