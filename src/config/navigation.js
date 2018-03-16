import { StackNavigator, DrawerNavigator, TabNavigator } from 'react-navigation';

import LoginScreen from '../../Screens/LoginScreen'
import HomeScreen from '../../Screens/HomeScreen'
import SignupScreen from '../../Screens/SignupScreen'
import DietScreen from '../../Screens/DietScreen'
import TipsScreen from '../../Screens/TipsScreen'
import RecordsScreen from '../../Screens/RecordsScreen'
import ScanScreen from '../../Screens/ScanScreen'
import ContactScreen from '../../Screens/ContactScreen'
import Dailyplan from '../../Screens/Dailyplan'
import Recplan from '../../Screens/Recplan'
import DietScreenToo from '../../Screens/DietScreenToo'


const DietScreenTab = TabNavigator({
    DietScreen: {
        screen: DietScreen,
    },
    DietScreenToo: {
        screen: DietScreenToo
    }
})


export default AppNavigator = StackNavigator({
      LoginScreen : {screen: LoginScreen},
      HomeScreen : {screen: HomeScreen},
      SignupScreen : {screen: SignupScreen},
      DietScreenTab: {
          screen: DietScreenTab
      },
      TipsScreen : {screen: TipsScreen},
      RecordsScreen : {screen: RecordsScreen},
      ScanScreen : {screen: ScanScreen},
      ContactScreen : {screen: ContactScreen},
      Dailyplan: {screen:Dailyplan},
      Recplan:{screen:Recplan}
})