import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import SigninScreen from '../screen/SigninScreen';
import SignupScreen from '../screen/SignupScreen';
import ConfirmEmailScreen from '../screen/ConfirmEmailScreen/ConfirmEmailScreen';
import ForgotPassScreen from '../screen/ForgotPassScreen';
import ResetPassScreen from '../screen/ResetPassScreen';
import HomeScreen from '../screen/HomeScreen';
const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="SignIn" component={SigninScreen} />
    <Stack.Screen name="SignUp" component={SignupScreen} />
    <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
    <Stack.Screen name="ForgotPassword" component={ForgotPassScreen} />
    <Stack.Screen name="Resetpassword" component={ResetPassScreen} />

    <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;