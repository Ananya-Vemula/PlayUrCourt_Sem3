import {View, Text, StyleSheet, Alert} from "react-native";
import React, {useState} from "react";
import { TextInput, Touchable, TouchableOpacity } from "react-native";
import { Checkbox } from 'expo-checkbox';



const SignUpScreen = ({navigation}) =>{
    const [CLGID, setCLGID] = useState("");
    const [OutlookMail, setOutlookMail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setconfirmPassword] = useState("");
    const [resident, setResident] = React.useState(false);
    const [dayScholar, setDayScholar] = React.useState(false);
    const [showInputBox, setShowInputBox] = useState(false);
    const [showInputBox1, setShowInputBox1] = useState(false);
    const [ResidentAddress, setResidentAddress] = useState("");

    //const[dayScholarAddress, setdayScholarAddress] = usestate("");
    const [agree, setAgree] = useState(false);
    

    const handleResidentChange = (newValue) => {
      setResident(newValue);
      setDayScholar(false); 
      if (newValue) {
        setShowInputBox(true);
        setShowInputBox1(false);

      } else {
        setShowInputBox(false);

      }
    };
  
    const handleDayScholarChange = (newValue) => {
      setDayScholar(newValue);
  
      // If the "Day Scholar" checkbox is checked, hide the input box
      if (newValue) {
        setShowInputBox(false);
        setShowInputBox1(true);

      }else{
        setShowInputBox1(false);
      }
    }

    const handleResidentAddressChange = (text) =>{
      setResidentAddress(text);
    };
  

    const submit = () =>{

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    console.log(CLGID)
    console.log(OutlookMail)
    console.log(password)
    console.log(confirmpassword)
    console.log(resident)
    console.log(dayScholar)
    console.log(showInputBox)
    console.log(showInputBox1)
    console.log(ResidentAddress)
    var raw = JSON.stringify({
      "stud_id" : CLGID,
      "stud_outlookmail" : OutlookMail ,
      "stud_password": password,
      "stud_confirm_password":confirmpassword ,
      "stud_residence": ResidentAddress,

    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://127.0.0.1:8000/addStudent/", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
        navigation.navigate('Home');
        
      }
    
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
 <View style = {styles.input}>
      <TextInput style = {styles.inputStyle}
      placeholder="Confirm Password "
      autoCaptalize = 'none'
      autoCorrect = {false}
      secureTextEntry = {true}
      value = {confirmpassword}
      onChangeText = {(actualData) => setconfirmPassword(actualData)}/>
 </View>

    <View style = {styles.wrapper}>
    <Text style={styles.wrapperText}>
      Where do you reside?
      </Text>
                    <Text style={styles.wrapperText}>
                    <Checkbox
                    checked={resident}
                    onChange={handleResidentChange}
                    onValueChange={() => setResident(!resident)}
                    color={resident ? '#4630EB' : undefined} // Set the color prop based on 'resident' state
                  />
                  <Text style={{marginLeft: 10}}>
                   GHS
                   </Text>
                </Text>
                {showInputBox && (
                  <TextInput
                    style={styles.inputStyle}
                    placeholder="Enter Your room number"
                    onChangeText={handleResidentAddressChange}
                  
                  />
                )}

                <Text style={styles.wrapperText}>
                  <Checkbox
                    checked={dayScholar}
                    onChange={handleDayScholarChange}
                    onValueChange={() => setDayScholar(!dayScholar)}
                    color={dayScholar ? '#4630EB' : undefined} // Set the color prop based on 'dayScholar' state
                  />
                  <Text style={{marginLeft: 10}}>
                   Day Scholar
                   </Text>
                </Text>
                {showInputBox1 && (
                  <TextInput
                    style={styles.inputStyle}
                    placeholder="Enter name of PG"
                  />
                )}
                    

          <Text style = {styles.wrapperText}>
            <Checkbox
            value = {!agree}
            onValueChange={() => setAgree(!agree)}
            color = {agree ? '#4630EB': undefined}/>                  
            
              <Text style={{marginLeft: 10}}>
              I have read the Terms & Conditions
                    </Text>
          </Text>
        </View>

    <TouchableOpacity style = {[styles.buttonStyle, {backgroundColor : agree ? '#4630EB': 'grey' }]}
      diabled = {agree}
      onPress = {submit}>
      <Text style = {styles.buttonText}>Login</Text>
    </TouchableOpacity>
    


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
  buttonText:{
    color: 'white',
    fontSize: 20,
    fontWeight: 600
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
export default SignUpScreen