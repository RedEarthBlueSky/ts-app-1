import { StyleSheet, Text, View } from 'react-native';
import { 
  ShoppingCartScreen, 
  ModulesScreen,
  TypesScreen,
} from './src/screens';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open App.tsx to work on your app!</Text>
      <ShoppingCartScreen />
      <ModulesScreen />
      <TypesScreen />
    </View>
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
});
