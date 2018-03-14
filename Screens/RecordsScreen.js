import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class RecordsScreen extends Component<{}> {
    render() {
      return (
        <View style={styles.container}>
        <Text style={styles.logoText}> This is Reports Record Screen </Text>
      </View>
        
      );
    }
  }
  const styles = StyleSheet.create({
    container: {
        flexGrow:1,
        alignItems:'center',
        justifyContent: 'center'
    },
    logoText:{
        fontSize: 20,
        color: 'black',
        marginVertical: 15, 
        fontWeight: "bold"
        
    }
});