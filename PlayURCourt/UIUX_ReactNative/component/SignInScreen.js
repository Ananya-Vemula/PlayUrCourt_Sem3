import {View, Text, StyleSheet, Alert} from "react-native";
import React, {useState} from "react";
import { TextInput, Touchable, TouchableOpacity } from "react-native";



const SignInScreen = ({navigation}) =>{
    const [CLGID, setCLGID] = useState("");
    const [OutlookMail, setOutlookMail] = useState("");
    const [password, setPassword] = useState("");
    const [agree, setAgree] = useState(false);
    // const [resident, setResident] = React.useState(false);
    // const [dayScholar, setDayScholar] = React.useState(false);
    // const [showInputBox, setShowInputBox] = useState(false);
    // const [showInputBox1, setShowInputBox1] = useState(false);
  

    const submit = () =>{
      
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      console.log(CLGID)
      console.log(password)
      var raw = JSON.stringify({
        "stud_id":CLGID ,
        "stud_password": password
      });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch("http://127.0.0.1:8000/StudentLogin/", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .then(navigation.navigate('Home'))
        .catch(error => console.log('error', error));
            }

      const redirectToSignUpPage = () =>{
      navigation.navigate('SignUp');
      };
  return (
<View  style={styles.mainContainer}>
    <View style={styles.header}>
    <Text 
      style={styles.mainHeader}>
        WELCOME TO PlayUrCourt!
      </Text>
    </View>

    <View style = {styles.inputContainer}>


    <View style = {styles.input}>
        <TextInput style = {styles.inputStyle}
        placeholder="Enter College Registraion number"
        autoCaptalize = 'none'
        autoCorrect = {false}
        value = {CLGID}
        onChangeText = {(actualData) => setCLGID(actualData)}
        />
  </View>
  <View style = {styles.input}>
      <TextInput style = {styles.inputStyle}
      placeholder="Enter Outlook email (College) "
      autoCaptalize = 'none'
      autoCorrect = {false}
      value = {OutlookMail}
      onChangeText = {(actualData) => setOutlookMail(actualData)}/>
</View>
<View style = {styles.input}>
      <TextInput style = {styles.inputStyle}
      placeholder="Enter Password "
      autoCaptalize = 'none'
      autoCorrect = {false}
      secureTextEntry = {true}
      value = {password}
      onChangeText = {(actualData) => setPassword(actualData)}/>
 </View>
                    

    <TouchableOpacity style = {[styles.buttonStyle, {backgroundColor : agree ? '#4630EB': 'grey' }]}
      diabled = {!agree}
      onPress = {submit}>
      <Text style = {styles.buttonText}>Login</Text>
    </TouchableOpacity>
    <View>    
      <TouchableOpacity style = {[styles.buttonStyle1, {backgroundColor : agree ? '#4630EB': 'grey' }]} onPress = {redirectToSignUpPage}>
      <Text style = {styles.buttonText1}> Sign Up </Text>
      </TouchableOpacity>
    </View>

    </View>

 
</View>
  
  
  );
};

const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    backgroundColor: 'black' ,
        
  },
  mainHeader:{
   
    fontSize: 20,
    color: "white",
    fontWeight: 500,
    paddingTop: 20,
    //paddingBottom: 15,
  },
  // description:{
  //   borderWidth: 2,
  //   borderColor: 'light blue',
  //   fontSize: 20,
  //   color: '#7d7d7d',
  //   //paddingBottom: 20,
  //   lineHeight: 25,
  //   fontFamily: 'regular',


  // },
  labels:{
    fontSize: 20,
    color: 'white',
    //marginTop: 10,
    //marginBottom: 5,
    lineHeight: 25,
    fontFamily: 'regular',
  },
  newlink:{
    height: 40,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    TextDecorationColor : 'white',
    textDecorationStyle : 'underline',
  },
  inputContainer:{    
    justifyContent: 'center',
    alignItems: 'center',    
    marginTop: 20,
    marginBottom: 20,    
  },
  input:{
    borderRadius: 20,    
    width:'20%',
    overflow: 'hidden'
  },
  inputStyle:{
    
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    borderWidth: 1,
    borderColor: '#4630EB',
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 1,
    fontFamily: 'regular',
    fontSize: 15,

    marginTop: 5,
    marginBottom: 10,
  },
  wrapper:{
    // justifyContent: 'center',
    // alignItems: 'center',
    // marginTop: 30,
    // paddingLeft: 5,

    //justifyContent: 'space-between',
  },
  wrapperText:{    
    paddingHorizontal:10,
    //paddingLeft: 50,
    width: '100%',
    marginTop: 20,
    fontSize: 15,
    color: 'white',
  },
  buttonStyle:{
    backgroundImage: 'linear-gradient(to right, #3437eb, #eb34d9)',
    borderRadius: 20,
    height: 50, 
    width: 80,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center'    
  },
  buttonStyle1:{
    backgroundImage: 'linear-gradient(to right, #4D53FF, #4D53FF)',
    //borderRadius: 0,
    //height: 1, 
    width: 65,
    marginTop: 20,
    justifyContent: 'center',
    //alignItems: 'baseline',
    textDecorationColor: 'blue',
    textDecorationStyle: 'under'

  },
  buttonText:{
    color: 'white',
    fontSize: 20,
    fontWeight: 500,
  },
  buttonText1:{
    color: 'white',
    fontSize: 15,
    fontWeight: 600,
    justifyContent: 'center',
    alignItems:'center'
  },
  header: {      
      backgroundImage: 'linear-gradient(to right, #3437eb, #eb34d9)',
      margin: 0,
      height: '10%',
      alignItems: 'center',
      justifyContent: 'center',
      // flexDirection: 'row'
    },
    footer: {      
      backgroundImage: 'linear-gradient(to right, #3437eb, #eb34d9)',
      margin: 0,
      height: '10%',
     justifyContent: 'bottom'
      // flexDirection: 'row'
    },
})
export default SignInScreen