import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'

import { screens } from './screens'

const HomeStack = createStackNavigator(screens)

export default createAppContainer(HomeStack)