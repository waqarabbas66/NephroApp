import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import {TabNavigator} from 'react-navigation';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

import DietScreen from 'Screens/DietScreen'
import Recplan from '.Screens/Recplan'
import Dailyplan from 'Screens/Dailyplan'


const DietTab = TabNavigator({
    DietScreen :
         {
            screen: DietScreen
          },
          Recplan :
          {
             screen: Recplan
           },
        Dailyplan : 
        {
            screen: Dailyplan
          }
    },
    
    {
        animationEnabled: true
    });

export default DietTab;