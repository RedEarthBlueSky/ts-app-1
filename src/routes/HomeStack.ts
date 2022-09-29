import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import { 
  HomeScreen,
  InterfacesScreen,
  ModulesScreen,
  TypesScreen,
} from '../screens'

const screens = {
  Home: {
    screen: InterfacesScreen,
  },
  Modules: {
    screen: ModulesScreen,
  },
  Types: {
    screen: TypesScreen,
  },
  Interfaces: {
    screen: HomeScreen
  }
}

const HomeStack = createStackNavigator(screens)

export default createAppContainer(HomeStack)