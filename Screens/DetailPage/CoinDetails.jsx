import React from 'react'
import { Text, StyleSheet, Image, View } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { NavigationContainer } from '@react-navigation/native';

export default function CoinDetails() {
    const Tab = createBottomTabNavigator();
    return (
        <NavigationContainer>

        <Tab.Screen >
        <View>
            <View style={styles.HeaderContainer}>
                <MaterialIcons style={styles.Title} name="keyboard-backspace" />
                <Text style={styles.Title}>BitCoin</Text>
                <FontAwesome style={styles.Title} name="bell" />
            </View>
            <View style={styles.HeadingCenter}>
                <Image source={{ uri: "https://www.abhisheksingh.cf/static/media/Photo.f69b0ab64fda05daf515.png" }} style={styles.ImageContainer} />
                <Text style={styles.BalanceAmount}>$ 2.564.25</Text>
                <View style={{ flexDirection: "row" }}>
                    <Text >+ $ 525.50</Text>
                    <Text >  <Feather name="arrow-up-right" />$ 2.564.25</Text>
                </View>
            </View>
            <View></View>
        </View>
        </Tab.Screen>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    HeaderContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
    },
    Title: {
        fontSize: 20

    },
    HeadingCenter: {
        textAlign: 'center',
        padding: 35,
        marginRight: "auto",
        marginLeft: "auto"

    },
    BalanceAmount:{
        fontSize:20,
        fontWeight:"bold",
        textAlign:"center"
    }

})