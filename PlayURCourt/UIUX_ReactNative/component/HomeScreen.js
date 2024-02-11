import React, {useState} from "react";
import {StyleSheet,View,Pressable,Text, props} from 'react-native'
import HeaderScreen from './HeaderScreen';
import FooterScreen from './FooterScreen';


const HomeScreen = ({navigation}) => {

    const [Indoor_or_Outdoor, setIndoor_or_Outdoor] = useState("");

    const handleIndoorClick = () => {
        setIndoor_or_Outdoor("I");
        console.log("I clicked");
    }
    const handleOutdoorClick = () => {
        setIndoor_or_Outdoor("O");
        console.log("O clicked");
    }

    return (
        <View style={styles.container}>
        <HeaderScreen navigation = {navigation}/>
        <View style={styles.navbuttoncontainer}>
            <Text style = {{color: 'white', fontSize: 30, fontStyle: 'comicsans'}}>
                Choose!
                </Text>     
            <Pressable style={styles.navbutton}
                onPress={() => {

                    handleIndoorClick();
                    navigation.navigate('I_CLGorGHS')}}
            >
            <Text style={{color: 'white',fontSize: 20}}>
                Indoor
                </Text>
            </Pressable>
            <Pressable style={styles.navbutton}
                onPress={() => {

                    handleOutdoorClick();
                    navigation.navigate('O_CLGorGHS')}}
            >
            <Text style={{color: 'white',fontSize: 20}}>
                Outdoor
                </Text>
            </Pressable>
        </View>
        <FooterScreen  navigation = {navigation}/>
    </View>
     
    );
  };

  const styles = StyleSheet.create({
    container: {
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
export default HomeScreen