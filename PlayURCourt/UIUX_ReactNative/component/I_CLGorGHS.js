import React, { useState } from 'react'
import {View,StyleSheet,Text, Pressable} from 'react-native'
import HeaderScreen from './HeaderScreen';
import FooterScreen from './FooterScreen';

const I_CLGorGHS = ({navigation}) => {

    const [CLG_or_GHS, setCLG_or_GHS] = useState("");

    const handleCLGClick = () => {
        setCLG_or_GHS("CLG");
    };
    const handleGHSClick = () => {
        setCLG_or_GHS("GHS");
    };  

    return(
        <View style = {styles.container}>
            <HeaderScreen/>
                <View style = {styles.navbuttoncontainer}>
                <Text style = {{color: 'white', fontSize: 30, fontStyle: 'comicsans'}}>
                    Where do you want to play?
                </Text> 
                    <Pressable style = {styles.navbutton}
                    onPress = {() => {

                        handleCLGClick();
                        console.log("College clicked")
                        navigation.navigate('Indoor_CLG')}}
                    >
                        <Text style = {{color: 'white', fontsize: 40}}>
                            College
                        </Text>
                    </Pressable>
                    <Pressable style = {styles.navbutton}
                    onPress = {() => {

                        handleGHSClick();
                        console.log("GHS CLicked")
                        navigation.navigate('Indoor_GHS')}}
                    >
                        <Text style = {{color: 'white', fontsize: 40}}>
                            GHS
                        </Text>
                    </Pressable>

                </View>
            <FooterScreen navigation={navigation}/>

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
        justifyContent: "center",
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
 });

 export default I_CLGorGHS



