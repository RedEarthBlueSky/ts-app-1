import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import { 
  HomeScreen,
  InterfacesScreen,
  ModulesScreen,
  TypesScreen,
  FunctionsScreen,
} from '../screens'

const screens = {
  Functions: {
    screen: FunctionsScreen,
  },
  Interfaces: {
    screen: InterfacesScreen,
  },
  Modules: {
    screen: ModulesScreen,
  },
  Types: {
    screen: TypesScreen,
  },
  Home: {
    screen: HomeScreen
  }
}

const HomeStack = createStackNavigator(screens)

export default createAppContainer(HomeStack)