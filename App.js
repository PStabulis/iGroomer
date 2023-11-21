import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Login } from './src/screens/Login';
import { SignUp } from './src/screens/SignUp';
import {Dashboard} from './src/screens/Dashboard'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }}/>
        <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>  
  );
}