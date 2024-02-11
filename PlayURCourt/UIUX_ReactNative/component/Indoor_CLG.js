import React from 'react'
import {View,Image,StyleSheet,Text, Pressable} from 'react-native'

const Indoor_CLG = ({route},{navigation}) => {
    return(
    <View style = {styles.container}>
        <View style = {styles.navbuttoncontainer}>
        <Text style = {{color: 'white', fontsize: 50}}>
            Which Sport?
        </Text>
        </View>
        <View style = {styles.orangebutton}>
            <Text style = {{color: 'black', fontsize: 40}}>
                College: Indoor
            </Text>
        </View>
        <Image
            style={styles.appdim}
            source={require('/assets/basketBallGame.png')}
        />
    </View>
    );
    };

    const styles = StyleSheet.create({
        container:{
            flex: 1,
            backgroundColor: 'black'
        },
        navbuttoncontainer:{
            flex: 1,
            justifyContent: "top",
            alignItems:"center"
        },
        navbutton:{
            height: 100,
            width: 200,
            borderWidth: 20,
            backgroundImage: 'linear-gradient(to right, #3437eb, #eb34d9)',
            justifyContent: "center",
            alignItems:"center"
           
        },
        orangebutton:{
            
            justifyContent: "flex-start",
            alignItems: "center",
            width: 200,
            height: 100,
            borderRadius: 100,
            borderWidth: 20,
            backgroundImage: 'linear-gradient(to right, #ffde59, #ff914d)',
            

        },
        appdim:{
            height : 100,
            width: 100
        },

     });
    
     export default Indoor_CLG