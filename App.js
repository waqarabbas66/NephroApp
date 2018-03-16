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
import AppNavigator from './src/config/navigation'


export default class App extends Component {
  render() {
    return (
      <AppNavigator/>
    );
  }
}

const styles = StyleSheet.create({
container:{
  flex:1,
  backgroundColor: '#fff',
  alignItems : 'center',
  justifyContent : 'center'
},
});
