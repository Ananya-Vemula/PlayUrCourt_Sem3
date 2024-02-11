import { View,Text,TouchableOpacity,Image, Pressable} from "react-native-web";
import Modal from "react-native-modal";
import React,{useState} from "react";

const HelpButton = () => {
    const [visible, setVisible] = useState(false);
    return(
        <View backDropOpaciity = {0.2} 
        style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
            onPress={() => {
                console.log("Clicked!")
            setVisible(true);
            }}>
                <Image
                source={require('/assets/questionmark.png')}
                style={{height: 70, width: 70, marginLeft: 20, marginRight: 20,}}
                />

            </TouchableOpacity>
            <Modal 
            onBackButtonPress={() => {
                setVisible(false);
            }}
            isVisible={visible}
            >
                <View
                    style={{
                        postion: 'absolute',
                        top: 120,
                        bottom: 0,
                        marginLeft: 300,
                        borderRadius: 10,
                        height: '30%',
                        width: '30%',
                        backgroundColor: '#fff',
            
                    }}>
                <TouchableOpacity
                style = {{width: '100%', height: 50, felxDirection: 'row'}}>
                    <Text
                    style = {{fontSize: 20, marginLeft: 40}}>
                        How to book a court/Table?
                    </Text>
                    <Text>
                        -------------------------------------------------------------
                    </Text>
                    
                </TouchableOpacity>
                <TouchableOpacity   
                style = {{width: '100%', height: 50, felxDirection: 'row'}}>
                    <Text
                    style = {{fontSize: 20, marginLeft: 40}}>
                        How to complain about court?    
                    </Text>
                    <Text>
                        -------------------------------------------------------------
                    </Text>
                </TouchableOpacity>
                <Pressable>
                <TouchableOpacity   
                style = {{width: '100%', height: 50, felxDirection: 'row'}}>
                    <Text
                    style = {{fontSize: 20, marginLeft: 40}}
                    onPress={() => {
                        setVisible(false)
                    }}>
                        Close  X
                    </Text>
                </TouchableOpacity>
                </Pressable>

                </View> 

            </Modal>

        </View>
    );
};
export default HelpButton

