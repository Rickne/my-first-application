import React, {useState} from "react";
import { View, Text, StyleSheet, ScrollView} from "react-native";
import CustomButton from "../../component/CustomButton";
import CustomInput from "../../component/CustomInput/CustomInput";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";

const ConfirmEmailScreen =  () => {
    const navigation = useNavigation();
    const {control, handleSubmit} = useForm();

    const onConfirmemailPressed= data => {
        navigation.navigate('SignIn');
        console.warn("Account successfully created, sign in now");
    }
    const onSignIn = () => {
        navigation.navigate('SignIn');
    }
    const onResendcode = () => {
        console.warn("Code resend");
    }

    return(
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
        <Text style={styles.title}>Confirm Email address</Text>
        
        <CustomInput 
        name='code'
        control={control}
        placeholder='Confirmation Code' 
        rules={{
            required: 'Confirmation code is required'
        }}
      />
        <CustomButton text="Confirm" onPress={handleSubmit(onConfirmemailPressed)} type="PRIMARY"/>
    

<CustomButton 
text="Resend Code" 
onPress={onResendcode} type="SECONDARY"/>
<CustomButton 
text="Already have an account? Sign in" 
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
export default ConfirmEmailScreen;