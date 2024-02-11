import React from 'react'
import {View,Image,StyleSheet,Text} from 'react-native'

const HeaderScreen = ({}) => {
    return (
<View style={styles.header}>
   <Text style={styles.appheadingtext}>
     PlayUrCourt 
   </Text>
   <Image
     style={styles.appicon}
     source={require('/assets/bb.png')}
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
      flexDirection: 'row'
    },
    appheadingtext: {
      fontSize: 50,
      color: 'white',
      marginLeft: 20
    },
    appicon: {
      marginRight: 20,
      height: 85,
      width: 85,
      marginRight: 10
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
      backgroundColor: 'plum',   
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
export default HeaderScreen