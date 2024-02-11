import { View,Text,Touchable,TouchableOpacity,Image, Pressable} from "react-native-web";
import Modal from "react-native-modal";
import React,{useState} from "react";

const OptionsButton = () => {
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
                source={require('/assets/threedots.png')}
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
                        postion: 'relative',
                        top: 60,
                        bottom: 0,
                        left: 0,
                        borderRadius: 10,
                        marginLeft: 600,
                        height: '65%',
                        width: '30%',
                        backgroundColor: '#fff',
            
                    }}>
                <TouchableOpacity
                style = {{width: '100%', height: 50, felxDirection: 'row', alignItems: 'center'}}>
                    <Text
                    style = {{fontSize: 20, marginRight: 20}}>
                        Ask for Equipment!
                    </Text>
                    <Text>
                        -------------------------------------------------------------
                    </Text>
                    
                </TouchableOpacity>
                <TouchableOpacity   
                style = {{width: '100%', height: 50, felxDirection: 'row', alignItems: 'center'}}>
                    <Text
                    style = {{fontSize: 20, marginRight: 20}}>
                        Check For Weather! 
                    </Text>
                    <Text>
                        -------------------------------------------------------------
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity   
                style = {{width: '100%', height: 50, felxDirection: 'row', alignItems: 'center'}}>
                    <Text
                    style = {{fontSize: 20, marginRight: 20}}>
                        Chat for Practice!
                    </Text>
                    <Text>
                        -------------------------------------------------------------
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity   
                style = {{width: '100%', height: 50, felxDirection: 'row',alignItems: 'center'}}>
                    <Text
                    style = {{fontSize: 20, marginRight: 20}}>
                        Complain About Court! 
                    </Text>
                    <Text>
                        -------------------------------------------------------------
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity   
                style = {{width: '100%', height: 50, felxDirection: 'row',alignItems: 'center'}}>
                    <Text
                    style = {{fontSize: 20, marginRight: 20}}>
                        Complain About Table! 
                    </Text>
                    <Text>
                        -------------------------------------------------------------
                    </Text>
                </TouchableOpacity>
                <Pressable>
                <TouchableOpacity   
                style = {{width: '100%', height: 50, felxDirection: 'row',alignItems: 'center'}}>
                    <Text
                    style = {{fontSize: 20, marginRight: 20}}
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
export default OptionsButton

