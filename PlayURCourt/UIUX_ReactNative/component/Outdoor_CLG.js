import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, Pressable, ScrollView } from 'react-native';
import FooterScreen from './FooterScreen';

const Outdoor_CLG = ({ route, navigation }) => {
    //const [rowGap, setRowGap] = useState(10);
    //const [colGap, setColGap] = useState(10);

    return (
        <ScrollView style={styles.container}>
            <View style={styles.navbuttoncontainer}>
                <Text style={{ color: 'white', fontSize: 50 }}>Which Sport?</Text>
            </View>
            <View style={styles.orangebutton}>
                <Text style={{ color: 'black', fontSize: 40 }}>College: Indoor</Text>
            </View>
            <View style={styles.imageContainer}>
                <Pressable onPress={() => console.log('Basketball pressed')}>
                    <Image
                        style={styles.appdim}
                        resizeMode='contain'
                        source={require('/assets/basketBallGame.png')}
                    />
                </Pressable>
                <Pressable onPress={() => console.log('Cricket pressed')}>
                    <Image
                        style={styles.appdim}
                        resizeMode='contain'
                        source={require('/assets/CricketGame.png')}
                    />
                </Pressable>
                <Pressable onPress={() => console.log('Tennis pressed')}>
                    <Image
                        style={styles.appdim}
                        resizeMode='contain'
                        source={require('/assets/TennisGame.png')}
                    />
                </Pressable>
                <Pressable onPress={() => console.log('Football pressed')}>
                    <Image
                        style={styles.appdim}
                        resizeMode='contain'
                        source={require('/assets/FootballGame.png')}
                    />
                </Pressable>
                <Pressable onPress={() => console.log('Badminton pressed')}>
                    <Image
                        style={styles.appdim}
                        resizeMode='contain'
                        source={require('/assets/BadmintionGame.png')}
                    />
                </Pressable>
                <Pressable onPress={() => console.log('Volleyball pressed')}>
                    <Image
                        style={styles.appdim}
                        resizeMode='contain'
                        source={require('/assets/VolleyBallGame.png')}
                    />
                </Pressable>
                <Pressable onPress={() => console.log('Archery pressed')}>
                    <Image
                        style={styles.appdim}
                        resizeMode='contain'
                        source={require('/assets/ArcheryGame.png')}
                    />
                </Pressable>
            </View>
            
            <FooterScreen navigation={navigation}/>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    navbuttoncontainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
    },
    orangebutton: {
        backgroundImage: 'linear-gradient(to right, #ffde59, #ff914d)',
        justifyContent: 'center',
        alignItems: 'center',
        width: 400, // Adjust the width as needed
        height: 150,
        borderRadius: 50,
        borderWidth: 20,
        marginVertical: 20, // Adjust the vertical margin as needed
        marginLeft: 'auto',
        marginRight: 'auto',
        overflow: 'hidden', // To clip the border radius in case of overflow
    },    
    imageContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    appdim: {
        height: 400,
        width: 300,
        margin: 50,
    },
});

export default Outdoor_CLG;
