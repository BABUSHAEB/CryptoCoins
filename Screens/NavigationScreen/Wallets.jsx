import React from 'react'
import { Text,View,StyleSheet} from 'react-native';
import CoinDetails from '../DetailPage/CoinDetails';

export default function Wallets() {
  return (
    <View style={styles.container}>
      <Text>Wallets</Text>
      <CoinDetails/>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
      paddingTop: 30
  },
});
