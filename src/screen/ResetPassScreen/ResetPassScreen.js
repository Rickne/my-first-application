import React, {useState} from "react";
import { View, Text, StyleSheet, ScrollView} from "react-native";
import CustomButton from "../../component/CustomButton";
import CustomInput from "../../component/CustomInput/CustomInput";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";


const PASS_REGEX = /^(?=.*[0-9])(?=.*[!_@#$%^&*])[a-zA-Z0-9!_@#$%^&*]{8,12}$/;
const ForgotPassScreen =  () => {

    const navigation = useNavigation();
    const {control, handleSubmit} = useForm();

    const onConfirmPressed= data => {

        navigation.navigate('SignIn');
        console.warn("Password Updated");
    }
    const onSignIn = () => {
        navigation.navigate('SignIn');
    }

    return(
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>
        
        <CustomInput 
        name='code'
        control={control}
        placeholder='Confirmation Code'
        rules={{
            required: 'Confirmation code is required'
        }} 
        />

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
        <CustomButton text="Submit" onPress={handleSubmit(onConfirmPressed)} type="PRIMARY"/>
    

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