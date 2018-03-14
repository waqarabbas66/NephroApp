import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
    TouchableOpacity
} from 'react-native';
import {TabNavigator, StackNavigator} from 'react-navigation'

export default class HomeScreen extends Component<> {
    render() {
      return (
        <View style={styles.container}>
        <View style ={styles.box3}><Text style={styles.texthome}>Home</Text></View>
    <View style ={styles.box}>
      <Image source = {require('../src/diet_plan.png')} style={styles.image}/>

      <TouchableOpacity onPress = {()=> 
            this.props.navigation.navigate ('DietScreen')}>
             <Text style={styles.textdec}>Check Your Dietry Plan</Text>
             </TouchableOpacity>

      <Text style={styles.text1}>_________________</Text>
      <Text style={styles.text}>Diet Plan</Text>
    </View>
    <View style ={styles.box}>
      <Image source = {require('../src/medical_reports.png')} style={styles.image}/>
      <TouchableOpacity onPress = {()=> 
            this.props.navigation.navigate ('RecordsScreen')}> 
            <Text style={styles.textdec}>Check Your Medical Records</Text>
            </TouchableOpacity>
      <Text style={styles.text1}>_________________</Text>
      <Text style={styles.textm}>Medical Records</Text>

    </View>
    <View style ={styles.box2}>
      <Image source = {require('../src/ocr.png')} style={styles.image}/>
      <Text style={styles.text1}>_________________</Text>
      <Text style={styles.texts}>Scan Reports</Text>
    <TouchableOpacity onPress = {()=> 
            this.props.navigation.navigate ('ScanScreen')}>    
            <Text style={styles.textdec}>Scan Your Daily Report</Text>
            </TouchableOpacity>
            </View>
            
    <View style ={styles.box2}>
      <Image source = {require('../src/specialist.png')} style={styles.image}/>
      <TouchableOpacity onPress = {()=> 
            this.props.navigation.navigate ('TipsScreen')}>    
            <Text style={styles.textdec}>Check Out Health Tips</Text>
            </TouchableOpacity>
      <Text style={styles.text1}>_________________</Text>
      <Text style={styles.texth}>Health Tips</Text>
    </View>

   
    <View style ={styles.box1}>
      <Image source = {require('../src/contactus.png')} style={styles.image1}/>
      <TouchableOpacity onPress = {()=> 
            this.props.navigation.navigate ('ContactScreen')}>  
             <Text style={styles.textdec}>Get in Touch with Us</Text> 
             </TouchableOpacity>
      <Text style={styles.text2}>___________________________________________________</Text>
      <Text style={styles.texth}>Contact Us!</Text>
    </View>
    
  </View>
        // <View>
        //     <Text>This is Home Screem </Text>
        // </View>


      );
    }
  }

// class Notifications extends Component{
//     render(){
//         return(
//        <View>
//            <Text>This is Notification Screen</Text>
//        </View>
//         )
//     }
// }


//   const HomeTabNav = TabNavigator({
//       HomeScreen :
//        {
//           screen: HomeScreen
//         },
//       Notifications : 
//       {
//           screen: Notifications}
//   },{
//       animationEnabled: true
//   })

const styles = StyleSheet.create({
    
        container:{
    
        flex: 1,
        flexDirection:'row',
        flexWrap:'wrap',
        padding:2,
      },
      
        box:{
            margin:20,
            width: 150,
            //width: Dimensions.get('window').width/ 2 -6,
            height:180,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#e6e6e6',
    
            borderWidth: 2,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.8,
        shadowRadius: 4,
        elevation: 2,
        marginTop:5,
        },
        box3:{
          width: 400,
          height:45,
          backgroundColor:'#e6e6e6',
          borderBottomWidth:2
    
    
        },
        texthome:{
          color:'#000',
          fontWeight:'bold',
          textAlign:'left',
           fontSize:25,
           top:5,
           left:10,
           textAlignVertical:'center',
        },
        box2:{
          margin:20,
          width: 150,
          //width: Dimensions.get('window').width/ 2 -6,
          height:180,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#e6e6e6',
    
      borderWidth: 2,
      borderRadius: 2,
      borderColor: '#ddd',
      borderBottomWidth: 0,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.8,
      shadowRadius: 4,
      elevation: 2,
      marginTop:-10,
    
      },
        box1:{
          borderWidth: 2,
      borderRadius: 2,
      borderColor: '#ddd',
      borderBottomWidth: 1,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.8,
      shadowRadius: 4,
      elevation: 2,
      marginLeft: 20,
      marginRight: 5,
      marginTop: -10,
      backgroundColor: '#e6e6e6',
      margin:20,
      width: 345,
      //width: Dimensions.get('window').width/ 2 -6,
      height:120,
      justifyContent: 'center',
      alignItems: 'center'
        },
        
        text:{
          position: 'absolute', top: 65, justifyContent: 'center', alignItems: 'center',
          color:'#000',textAlign:'center'
        },
        textm:{
          position: 'absolute', top: 65, textAlign:'center', justifyContent: 'center', alignItems: 'center',color:'#000'
        },
        texts:{
          position: 'absolute', top: 65, textAlign:'center', justifyContent: 'center', alignItems: 'center',color:'#000',
        },
        texth:{
          position: 'absolute', top: 65, textAlign:'center', justifyContent: 'center', alignItems: 'center',color:'#000'
        },
        text1:{
          position: 'absolute', top: 72, textAlign:'center', justifyContent: 'center', alignItems: 'center',color:'#FFF'
        },
        text2:{
          position: 'absolute', top: 70,textAlign:'center', justifyContent: 'center', alignItems: 'center',
          color:'#FFF',
        },
        text3:{
          position: 'absolute', top: 63, textAlign:'center', justifyContent: 'center', alignItems: 'center',
          fontFamily:'Verdana',color:'#000'
        },
        textdec:{
          textAlign:'center',
         marginTop:90,
         bottom:55,
         color:'#990000'
        },
        textdeco:{
          textAlign:'center',
         marginTop:90,
         bottom:55,
         color:'#990000'
        },
        image:{
          width:60,
          height:60,
          //marginTop: -100,
        },
        image1:{
          width:60,
          height:60,
          marginBottom:-55 ,
        },
    });
    