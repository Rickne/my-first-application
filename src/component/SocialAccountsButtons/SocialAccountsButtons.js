import { View, Text, Image } from 'react-native'
import React from 'react'
import Logo from '../../../assets/img/Fb.png';
import CustomButton from '../CustomButton'

const SocialAccountsButtons = () => {
    const onFBSignin = () => {
        console.warn("Facebook sign in");
    }
    const onGGLSignin = () => {
        console.warn("Google sign in");
    }
    const onAPPLSignin = () => {
        console.warn("Apple sign in");
    }
    
  return (
    <>
        
        <CustomButton
        text="Sign in with Facebook" 
        onPress={onFBSignin}
        bgColor="#A8DEFF"
        fgColor="#4765a9"/>
        <CustomButton 
        text="Sign in with Google" 
        onPress={onGGLSignin}
        bgColor="#FFC7C7"
        fgColor="#dd4d44"/>
        <CustomButton 
        text="Sign in with Apple" 
        onPress={onAPPLSignin}
        bgColor="#B3B3B3"
        fgColor="#363636"/>
    </>
  )
}

export default SocialAccountsButtons
