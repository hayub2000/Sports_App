import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeTabs from './app/Screens/HomeTabs';
import Tab1 from './app/Screens/Tab1';
import Tab2 from './app/Screens/Tab2';
import Splashscreen from './app/Screens/Splashscreen';
import Detail1 from './app/Screens/Detail1';
import Detail2 from './app/Screens/Detail2';

const Stack=createNativeStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>

        <Stack.Screen name="Splash" component={Splashscreen}/>
        <Stack.Screen name="Home" component={HomeTabs}/>
        <Stack.Screen name="Tab1" component={Tab1}/>
        <Stack.Screen name="game1detail" component={Detail1} options={{headerShown:true, title:"Details"}}/>
        <Stack.Screen name="Tab2" component={Tab2}/>
        <Stack.Screen name="game2detail" component={Detail2} options={{headerShown:true, title:"Details"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
