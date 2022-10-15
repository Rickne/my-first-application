import React, {useState} from "react";
import { View, Text, StyleSheet, ScrollView} from "react-native";
import CustomButton from "../../component/CustomButton";
import CustomInput from "../../component/CustomInput/CustomInput";
import SocialAccountsButtons from "../../component/SocialAccountsButtons/SocialAccountsButtons";
import { useNavigation } from "@react-navigation/native";
import {useForm} from 'react-hook-form';
import Universalstyles from "../../styles";

const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const PASS_REGEX = /^(?=.*[0-9])(?=.*[!_@#$%^&*])[a-zA-Z0-9!_@#$%^&*]{8,12}$/;
const SignupScreen =  () => {
    const  {control, handleSubmit, watch} = useForm();
    const cpass = watch('Password');
    const navigation = useNavigation();


    const onRegisterPressed= () => {
        navigation.navigate('ConfirmEmail');
        console.warn("Check your email for the confirmmation code");
    }
    
    const onSignIn = () => {
        navigation.navigate('SignIn');
    }
    const onTermsofUsePressed = () => {
        console.warn("Terms of Use")
    }
    const onPrivacyPolicyPressed = () => {
        console.warn("Privacy Policy")
    }
    return(
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={Universalstyles.root}>
        <Text style={styles.title}>Register account</Text>
        
        <CustomInput
        placeholder='Username' 
        control={control} 
        name='Username' 
        rules={{required: 'Username is required', minLength: 
        {value: 4, message: 'Username should at least 4 characters long'},
        maxLength: 
        {value: 8, message: 'Username should be only 8 characters long'} }}/>

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
<CustomInput 
        placeholder='Confirm Password' 
        control={control} 
        name='Confirm Password' 
        rules={{validate: value => 
        value == cpass || 'Password do not match'}} 
        secureTextEntry/>


        <CustomButton text="Confirm account" onPress={handleSubmit(onRegisterPressed)} type="PRIMARY"/>
       <Text style={styles.text}>
        By registering, you confirm that you accept 
        our 
        <Text style={styles.link} onPress={onTermsofUsePressed}> Terms of use</Text> and {' '}
        <Text style={styles.link} onPress={onPrivacyPolicyPressed}>Privacy Policy</Text>.</Text>

        

<CustomButton text="Already have an account? Sign in" onPress={onSignIn} type="TERTIARY"/>
        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    root:{
        alignItems: 'center',
        padding: 20,
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        color: '#daa520',
        margin: 10,
    },
    text:{
        color: "#696969",
        marginVertical: 10,
    },
    link:{
        color: '#4169e1',
    }
});
export default SignupScreen;