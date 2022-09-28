import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ShoppingCartScreen, ModulesScreen } from './src/screens';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open App.tsx to work on your app!</Text>
      <ShoppingCartScreen />
      <ModulesScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
