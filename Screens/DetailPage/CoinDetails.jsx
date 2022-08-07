import React from 'react'
import { Text, StyleSheet, Image, View } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

export default function CoinDetails() {

    return (

        <View>
            <View style={styles.HeaderContainer}>
                <MaterialIcons style={styles.Title} name="keyboard-backspace" />
                <Text style={styles.Title}>BitCoin</Text>
                <FontAwesome style={styles.Title} name="bell" />
            </View>
            <View style={styles.HeadingCenter}>
                <Image source={{ uri: "https://apimachine-s3.s3.us-east-2.amazonaws.com/coinImages/bitcoin.png" }} style={styles.ImageContainer} />
                <Text style={styles.BalanceAmount}>$ 2.564.25</Text>
                <View style={{ flexDirection: "row" }}>
                    <Text >+ $ 525.50</Text>
                    <Text style={{ color: "green", fontWeight: "bold" }}>  <Feather name="arrow-up-right" />$ 2.564.25</Text>
                </View>
            </View>
            <View style={styles.BottonContainer}>
         
                    <Text style={styles.BuyBtn}><Feather name="arrow-up-right" /> Buy</Text>
                
                    <Text style={styles.SellBtn}><Feather name="arrow-down-left" /> Sell</Text>
    
            </View>
        </View>

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
    BalanceAmount: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center"
    },
    ImageContainer: {
        height: 30,
        width: 30,
        borderRadius: 50,
        margin: 10,
        marginRight: "auto",
        marginLeft: "auto"

    },
    BuyBtn: {
        fontSize: 17,
        fontWeight: "bold",
        backgroundColor: "#42dc9a",
        width: 70, padding: 5,
        borderRadius: 10,
        margin: 0,
        marginRight:5


    },
    SellBtn: {
        fontSize: 17,
        fontWeight: "bold",
        backgroundColor: "#fd6086",
        width: 70, 
        padding: 5,
        borderRadius: 10,
        margin: 0,



    },
    BottonContainer: {
  
        flexDirection: "row",
        justifyContent: 'center',
       

    }

})