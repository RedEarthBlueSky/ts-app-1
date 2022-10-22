import { 
  HomeScreen,
  InterfacesScreen,
  ModulesScreen,
  TypesScreen,
  FunctionsScreen,
  ClassScreen,
  GenericsScreen,
  UnionsScreen
} from '../screens'

export const screens = {
  Functions: {
    screen: FunctionsScreen,
  },
  Unions: {
    screen: UnionsScreen,
  },
  Generics: {
    screen: GenericsScreen,
  },
  Classes: {
    screen: ClassScreen,
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