import React from 'react';
import {
  StyleSheet,
  Image,
  View,
  TextInput,
  Text,
  Pressable,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './component/HomeScreen';
import ProfileScreen from './component/ProfileScreen';
import I_CLGorGHS from './component/I_CLGorGHS';
import O_CLGorGHS from './component/O_CLGorGHS';
import Indoor_CLG from './component/Indoor_CLG';
import FooterScreen from './component/FooterScreen';
import HelpButton from './component/HelpButton';
import OptionsButton from './component/OptionsButton';
import SignInScreen from './component/SignInScreen';
import SignUpScreen from './component/SignUpScreen';
import Outdoor_CLG from './component/Outdoor_CLG';
//import Outdoor_GHS from './component/Outdoor_GHS';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
  
    <NavigationContainer >
    <Stack.Navigator  initialRouteName="SignIn" screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen
        name = "SignIn"
        component = {SignInScreen}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}        
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen
        name = "I_CLGorGHS"
        component = {I_CLGorGHS}
      />
      <Stack.Screen
        name = "O_CLGorGHS"
        component = {O_CLGorGHS}
      />
      <Stack.Screen 
        name="Outdoor_CLG" 
        component={Outdoor_CLG} 
      />
      {/* <Stack.Screen 
        name="Outdoor_GHS" 
        component={Outdoor_GHS} 
      /> */}

      <Stack.Screen
        name = "Indoor_CLG"
        component= {Indoor_CLG}
      />
      
      <Stack.Screen name="Profile" 
      component={ProfileScreen} 
      />
      

      <Stack.Screen
        name = "Footer"
        component={FooterScreen}
        options = {{headerShown: true
        }}
      />

    </Stack.Navigator>
  </NavigationContainer>


    

  );
};




export default App;