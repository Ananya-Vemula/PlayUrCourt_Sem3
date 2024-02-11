import React from 'react'
import {View,Image,StyleSheet,Text, Pressable, Button} from 'react-native'
import HelpButton from './HelpButton';
import { TouchableOpacity } from 'react-native';
import OptionsButton from './OptionsButton';

const FooterScreen = ({navigation}) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <Pressable
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Image
            style={styles.appdim}
            source={require('/assets/backarrow.png')}
          />
        </Pressable>
      </TouchableOpacity>
      <View
      style = {styles.appdim}>
      <HelpButton/>
      </View>
   <Pressable
    onPress={() => navigation.navigate("Home")}
    disabled ={false}>
      <Image
        style={styles.appdim}
        source={require('/assets/homebutton.png')}
      />
   </Pressable>
   <View
      style = {styles.appdim}>
      <OptionsButton/>
      </View>
   <Image
     style={styles.appdim}
     source={require('/assets/settingsbutton.png')}
   />
   
 </View>

    );
  };


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black'
    },
    header: {
      flex: .2,
      backgroundImage: 'linear-gradient(to right, #3437eb, #eb34d9)',
      margin: 0,
      height: 100,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      borderWidth: 1,
    },
    appheadingtext: {
      fontSize: 50,
      color: 'white',
      marginLeft: 20
    },
    appdim:{
      height: 70,
      width: 70,
      marginLeft: 20,
      marginRight: 20,
    },
    button: {
      flex: 1,
      verticalAlign: 'middle'
    },
    heading: {
      flex: .2,
      alignItems: 'center',
      justifyContent: 'center'
    },
    headingtext: {
      fontSize: 25,
      color: 'white'
    },
    signcontainer: {
      flex: .5,
      backgroundColor: 'grey',   
      alignItems: 'center',
      flexDirection: 'row',
      margin: 50,
      borderRadius: 20,
      flexDirection: 'column'
    },
    input: {
      height: 60,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      backgroundColor: 'white',
      borderRadius: 10
    },
    loginbutton:{
      width: 100,
      height: 50,
      backgroundColor: 'green',
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 80
    }
  });
export default FooterScreen