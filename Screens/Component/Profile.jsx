import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CryptoList from './CryptoList';
import Sample from "../Component/Sample.json"


export default function Profile() {


  const coins = Sample;
  

  return (

    <View>
      <View style={styles.TopProfile}>
        <View>

          <Image source={{ uri: "https://www.abhisheksingh.cf/static/media/Photo.f69b0ab64fda05daf515.png" }} style={styles.ImageContainer} />
        </View>
        <View>

          <Text style={styles.Title}>My balance</Text>
        </View>
        <View >
          <FontAwesome style={styles.TitleBell} name="bell" />

        </View>

      </View>

      <View style={styles.BalanceAmountContainer}>
        <Text style={styles.BalanceAmount}>$ 2.564.25</Text>
        <Text>Updated:20.03.2019|11:31</Text>
      </View>
      <View>
        <FlatList data={coins}
          renderItem={({ item }) =>

            <CryptoList MarketData={item} />
          } />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  ImageContainer: {
    height: 24,
    width: 24,
    borderRadius: 50,
    margin: 10
  },
  TopProfile: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 20
  },
  Title: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: "auto"
  },
  TitleBell: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: "auto",
    color: "grey"
  },
  BalanceAmountContainer: {
    textAlign: 'center',
    padding: 35,
    marginRight: "auto",
    marginLeft: "auto"

  },
  BalanceAmount: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: '900'

  }

});