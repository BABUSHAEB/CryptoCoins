import React from 'react'
import { StyleSheet, Text,View } from 'react-native';
import Settings from './Settings';
import Profile from '../Component/Profile';

export default function Home() {
    return (
        <View style={styles.container}>
        {/* // <View > */}
            {/* <Text >
                Home
            </Text> */}
            {/* <Settings/> */}
            <Profile/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        // grid: 3,

        // backgroundColor: '#fff',
        // // alignItems: 'center',
        // // justifyContent: 'center',
        paddingTop: 30
    },
});

