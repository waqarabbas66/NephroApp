import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity
} from 'react-native';

export default class SignupScreen extends Component<> {
    render() {
      return (
        <View style={styles.container}>
            {/* <Text>This is Login Screen </Text> */}
            <TextInput style= {styles.inputBox}
           underlineColorAndroid='rgba(0,0,0,0)' 
           placeholder='Username'
           placeholderTextColor="#000000"
           selectionColor="black"
           onSubmitEditing={() => this.password.focus()}/>

<TextInput style= {styles.inputBox}
 underlineColorAndroid='rgba(0,0,0,0)' 
placeholder='Password'
secureTextEntry={true}
placeholderTextColor="#000000"
ref={(input) => this.password = input}/>

            {/* <Button color='#990000' onPress = {()=> 
            this.props.navigation.navigate ('HomeScreen')}
            title="SignUp"/> */}
             <TouchableOpacity style={styles.loginBtn} onPress = {()=> 
            this.props.navigation.navigate ('HomeScreen')}>
            <Text style={styles.buttonText}>Signup</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginBtn} onPress = {()=> 
            this.props.navigation.navigate('LoginScreen')}>
            <Text style={styles.buttonText}>Already have account? Login</Text>
            </TouchableOpacity>

            
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
  inputBox:{
      width: 300,
      backgroundColor: '#cccccc',
      borderRadius: 20,
      paddingHorizontal: 16,
      fontSize: 15,
      color: "black", 
      marginVertical: 10
  },
  buttonText:{
      fontSize: 16,
      fontWeight: "800",
      color:"#000000",
      textAlign:"center"
  },
   loginBtn:{
      backgroundColor: '#990000',
      width: 300,
      marginVertical: 10,
      paddingVertical: 13,
  }
  
  });