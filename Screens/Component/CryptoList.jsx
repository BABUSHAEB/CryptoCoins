import React from 'react';
import { StyleSheet, Text, View, Image, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CoinDetails from '../DetailPage/CoinDetails';


export default function CryptoList({ MarketData }) {
    const { coinName, coinSymbol, symbol, coinImage, _24hrchange, usd_price } = MarketData;

    const navigation = useNavigation();

    // const PercentageColor = _24hrchange < 0 ? '#d13f26' : '#30bf56' ;
    let PercentageColor = _24hrchange >0 ? '#42dc9a' : '#fd6086';
    return (
        <Pressable onPress={() => 
            navigation.navigate(CoinDetails)
        }>

        <View style={styles.CryptoContainer}>
            <View style={styles.CryptoContainerlogo}>
                <View>
                    <Image source={{ uri: coinImage }} style={styles.ImageContainer} />
                </View>
                <View>
                    <Text style={styles.Title}>{coinName}</Text>
                    <Text style={styles.SubTitle}>{coinSymbol}</Text>
                </View>
            </View>
            <View>
                <Text style={styles.Title}>{symbol} {usd_price.toFixed(4)}</Text>
                <Text style={{color: PercentageColor , fontWeight:'bold', marginRight:0}} > {_24hrchange.toFixed(5)}%</Text>

            </View>
        </View >
        </Pressable>


    )
}

const styles = StyleSheet.create({
    CryptoContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "white",
        borderRadius: 10,
        padding: 10,
        width: 360,
        boxShadow: "2px 6px 6px black",
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: 20
    },
    CryptoContainerlogo: {
        flexDirection: "row"
    },
    ImageContainer: {
        height: 26,
        width: 26,
        borderRadius: 50,
        margin: 10

    },
    Title: {
        fontSize: 16,
        fontWeight: "bold",
        // padding: 5
    },
    // SubTitlePer: {
    //     fontWeight: "bold",
    //     fontSize: 12,
    //     marginLeft: 22,
    //     color: PercentageColor
    // },
    SubTitle: {
        fontWeight: "bold",
        fontSize: 12,
        marginLeft: 5


    }
})