import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

export default class Dailyplan extends Component<{}> {
    render() {
      const tableHead = ['Food', 'Portion', 'Protien','Sodium','Potassium','Phosphorus'];
      const tableData = [
        [<Image source = {require('../src/bellpepper.png')} style={styles.image}/>, '1/2 Cup  1 Cup', '10.0mg  23.9mg', '12.6mg  23.6mg','88.0mg  194mg','1.3mg  3.7mg'],
        [<Image source = {require('../src/cabbage.png')} style={styles.image}/>, '1/2 Cup  1 Cup', '9.67mg  17.3mg', '9.0mg  18.2mg','60.0mg  119.2mg','6.0mg  12.6mg'],
        [<Image source = {require('../src/cauliflower.png')} style={styles.image}/>, '1/2 Cup  1 Cup', '19.0mg  37.7mg', '20.0mg  44.0mg','88.0mg  303mg','9.0mg  30.0mg'],
        [<Image source = {require('../src/garlic.png')} style={styles.image}/>, '1/2 Cup  1 Cup', '2.1mg  3.9mg', '4.0mg  13.8mg','12.0mg  36.1mg','1.0mg  1.5mg'],
        [<Image source = {require('../src/eggplant.png')} style={styles.image}/>, '1/2 Cup  1 Cup', '13.7.0mg  25.3mg', '20.5mg  14.8.6mg','189mg  122mg','1.6mg  3.7mg']

      ];
      return (
        <View>
          <Text> Daily Diet Plan (Recommended)</Text>
        {/* <Text style={styles.logoText}> This is Diet Screen </Text> */}
        <Table style={styles.border}>
          <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
          <Rows data={tableData} style={styles.row} textStyle={styles.text}/>
        </Table>
      </View>
        
      );
    }
  }

  const styles = StyleSheet.create({
    // container: {
    //     flexGrow:1,
    //     alignItems:'center',
    //     justifyContent: 'center'
    // },
    // logoText:{
    //     fontSize: 20,
    //     color: 'black',
    //     marginVertical: 15, 
    //     fontWeight: "bold"
        
    
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { marginLeft: 5, borderWidth: 0 },
    border:{borderWidth:0},
    row: { height: 70 },
    image:{
      width:60,
      height:60,
      justifyContent:'center',
      alignItems:'center'
      //marginTop: -100,
    }
});