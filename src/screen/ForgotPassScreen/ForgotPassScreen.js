import React, {useState} from "react";
import { View, Text, StyleSheet, ScrollView} from "react-native";
import CustomButton from "../../component/CustomButton";
import CustomInput from "../../component/CustomInput/CustomInput";
import { useNavigation } from "@react-navigation/native";
import {useForm} from 'react-hook-form';

const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const ForgotPassScreen =  () => {
    const navigation = useNavigation();
    const {control, handleSubmit} = useForm();

    const onSendPressed= data => {
        console.warn(data);
        navigation.navigate('Resetpassword');
        console.warn("Check your email for the confirmation code");
    }
    const onSignIn = () => {
        navigation.navigate('SignIn');
    }

    return(
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>
        
        <CustomInput 
      placeholder='Email' 
      control={control} 
      name='Email' 
      rules={{
          required: 'Email is required',
          pattern: {value: EMAIL_REGEX, message: 'Invalid email address'},
          }}
        />
        <CustomButton text="Send" onPress={handleSubmit(onSendPressed)} type="PRIMARY"/>
    

<CustomButton 
text="Back to sign in" 
onPress={onSignIn} type="TERTIARY"/>
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
export default ForgotPassScreen;