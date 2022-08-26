import "react-native-gesture-handler"
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Onboarding from './pages/onboard'
import Home from './pages/homescreen'
const Stack = createStackNavigator();

 const App = () => {
  const color = '#282534'
  return (
   <NavigationContainer>
   <Stack.Navigator screenOptions={{headerShown: false}}>
   <Stack.Screen name="Onboarding" component={Onboarding} />
   <Stack.Screen name="Home" component={Home} />
   </Stack.Navigator>
   </NavigationContainer>
  );
 };

export default App;