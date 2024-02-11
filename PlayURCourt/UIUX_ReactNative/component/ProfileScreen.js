import React from 'react'
import {StyleSheet,View,Text} from 'react-native'
import HeaderScreen from './HeaderScreen';


const ProfileScreen = ({navigation, route}) => {
    return (
    <View style={styles.container}>
        <HeaderScreen/>
        <Text>This is {route.params.name}'s profile</Text>;
    </View>
    )
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black'
    },
});
export default ProfileScreen