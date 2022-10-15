import React, {useState} from "react";
import { View, Text, Image, useWindowDimensions, ScrollView,TextInput, StyleSheet} from "react-native";
import Logo from '../../../assets/img/BeS.png';
import CustomButton from "../../component/CustomButton";
import CustomInput from "../../component/CustomInput/CustomInput";
import SocialAccountsButtons from "../../component/SocialAccountsButtons/SocialAccountsButtons";
import { useNavigation } from "@react-navigation/native";
import {useForm, Controller} from 'react-hook-form';
import { Universalstyles } from "../../styles";


const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const PASS_REGEX = /^(?=.*[0-9])(?=.*[!_@#$%^&*])[a-zA-Z0-9!_@#$%^&*]{8,12}$/;
const SigninScreen =  () => {
    const  {control, handleSubmit, formState: {errors}} = useForm();

    const {height} = useWindowDimensions();
    const navigation = useNavigation();

    const onSigninPressed = data => {
        console.warn(data);
       console.log(data);
        navigation.navigate('Home');
    }
    const onForgotPressed = data => {
        console.warn(data);
        navigation.navigate('ForgotPassword');
        console.warn("Enter your email address");
    }
    const onSignUp = () => {
        navigation.navigate('SignUp');
    }
    return(
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={ Universalstyles.root }>
            <Image source={Logo} style={[Universalstyles.logo, {height: height * 0.3}]} />
        <View style={Universalstyles.input}>
        <CustomInput 
        placeholder='Email' 
        control={control} 
        name='Email' 
        rules={{
            required: 'Email is required',
            pattern: {value: EMAIL_REGEX, message: 'Invalid email address'},
            }}/>

        <CustomInput 
         placeholder='Password' 
         control={control} 
         name='Password' 
         rules={{
             required: 'Password is required',
             pattern: {value: PASS_REGEX, message: 'Password must contain the ff. \n-at least 1 Special Charaters\n-at least 1 Number'},
             minLength: {
                value: 8,
                message: 'Password must be at least 8 characters'
             },
             maxLength: {
                value: 12,
                message: 'The password must be only 12 characters long'

             },
            
         }} 
         secureTextEntry/>
        
        <CustomButton text="Sign in" onPress={handleSubmit(onSigninPressed)} type="PRIMARY"/>
        <CustomButton text="Forgot password" onPress={handleSubmit(onForgotPressed)} type="TERTIARY" fgColor='#4169e1'/>


        <SocialAccountsButtons/>

<CustomButton text="Don't have an account? Sign up" onPress={onSignUp} type="TERTIARY" fgColor='#4169e1'/>
</View>
        </View>
        </ScrollView>
    );
};


export default SigninScreen;