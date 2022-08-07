import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Screens/NavigationScreen/Home';
import Wallets from './Screens/NavigationScreen/Wallets';
import Coins from './Screens/NavigationScreen/Coins';
import Settings from './Screens/NavigationScreen/Settings';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import CoinDetails from './Screens/DetailPage/CoinDetails';
import { createNativeStackNavigator } from '@react-navigation/native-stack';




export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  return (
<>

    <NavigationContainer>
      
      <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false 
      
      }}>
        <Tab.Screen name="Home" component={Home} options={{
          tabBarIcon: ({color,size}) =>(

            <Ionicons name="grid" size={size} color={color} />
          )
        }}
          />
        <Tab.Screen name="Wallets" component={Wallets} options={{
          tabBarIcon: ({color,size}) =>(

            <Ionicons name="wallet" size={size} color={color} />
          )
        }}/>
        <Tab.Screen name="Coins" component={Coins} options={{
          tabBarIcon: ({color,size}) =>(

            <Foundation name="bitcoin-circle" size={size} color={color} />
          )
        }}/>
        <Tab.Screen name="Settings" component={Settings} options={{
          tabBarIcon: ({color,size}) =>(

            <Fontisto name="player-settings" size={size} color={color} />
          )
        }}/>
        
         {/* options={{
          tabBarIcon: ({color,size}) =>(

            <Fontisto name="player-settings" size={size} color={color} />
          )
        }}/> */}
      </Tab.Navigator>
      
    </NavigationContainer>
    </>
  );
}


// const Home =  () => {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="CoinDetails" component={CoinDetails} />
//     </Tab.Navigator>
//   );
// }

// export default Home
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
