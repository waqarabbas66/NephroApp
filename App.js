/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {StackNavigator, DrawerNavigator, TabNavigator} from 'react-navigation';


import LoginScreen from './Screens/LoginScreen'
import HomeScreen from './Screens/HomeScreen'
import SignupScreen from './Screens/SignupScreen'
import DietScreen from './Screens/DietScreen'
import TipsScreen from './Screens/TipsScreen'
import RecordsScreen from './Screens/RecordsScreen'
import ScanScreen from './Screens/ScanScreen'
import ContactScreen from './Screens/ContactScreen'
import Dailyplan from './Screens/Dailyplan'
import Recplan from './Screens/Recplan'
//import DietTabScreen from '.Screens/DietTabScreen'

export default class App extends Component<> {
  render() {
    return (
      <AppNavigator/>
     // <AppNavigator/>
    );
  }
}
 const AppNavigator = StackNavigator(
   {
     LoginScreen : {screen: LoginScreen},
     HomeScreen : {screen: HomeScreen},
     SignupScreen : {screen: SignupScreen},
     DietScreen : {screen: DietScreen},
     TipsScreen : {screen: TipsScreen},
     RecordsScreen : {screen: RecordsScreen},
     ScanScreen : {screen: ScanScreen},
     ContactScreen : {screen: ContactScreen},
     //DietTabScreen :{screen:DietTabScreen},
     Dailyplan: {screen:Dailyplan},
     Recplan:{screen:Recplan}
   }
 )
// class Notifications extends Component{
//     render(){
//         return(
//        <View>
//            <Text>This is Notification Screen</Text>
//        </View>
//         )
//     }
// }

// const AppDrawerNav = DrawerNavigator(
//   {
//     LoginScreen : {screen: LoginScreen},
//      HomeScreen : {screen: HomeScreen},
//      SignupScreen : {screen: SignupScreen}
//   }
// )


const styles = StyleSheet.create({
container:{
  flex:1,
  backgroundColor: '#fff',
  alignItems : 'center',
  justifyContent : 'center'
},
});
