import { 
  HomeScreen,
  InterfacesScreen,
  ModulesScreen,
  TypesScreen,
  FunctionsScreen,
  ClassScreen,
  GenericsScreen,
  UnionsScreen,
  TypeAliasScreen,
  LibsAndTypesScreen,
  MergingScreen,
} from '../screens'

const titledm: string = 'Declaration Merging'

export const screens = {
  Merging: {
    screen: MergingScreen,
  },
  Libraries: {
    screen: LibsAndTypesScreen,
  },
  TypeAlias: {
    screen: TypeAliasScreen,
  },
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