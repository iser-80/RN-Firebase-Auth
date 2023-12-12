import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Welcome from '../screens/welcome'
import Register from '../screens/register'
import Login from '../screens/login'
import Home from '../screens/home'

const Stack = createNativeStackNavigator()

export default function AppNavigation() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Welcome' screenOptions={{headerShown: false}} >
            <Stack.Screen name='Welcome' component={Welcome} />
            <Stack.Screen name='Register' component={Register} />
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Home' component={Home}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}