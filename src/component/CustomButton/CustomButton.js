import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({onPress, text, type="PRIMARY", bgColor, fgColor}) => {
  return (
    <Pressable 
    onPress={onPress} 
    style={[style.container,
     style[`container_${type}`],
     bgColor ? {backgroundColor: bgColor} : {},
     ]}>
      <Text 
      style={[style.text,
        style[`text_${type}`],
        fgColor ? {color: fgColor} : {},
        ]}>{text}</Text>
    </Pressable>
  );
};

const style = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: '100%',
        padding: 10,
        borderRadius: 5,
        marginVertical: 5,
    },
    container_PRIMARY: {
        backgroundColor: '#1e90ff',
    },
    container_SECONDARY: {
        borderColor: '#1e90ff',
        borderWidth: 2,
    },
    container_TERTIARY: {},
    text: {
        fontWeight: 'bold',
        color: '#fffafa',
    },
    text_SECONDARY: {
        color: "#4169e1",
    },
    text_TERTIARY: {
        color: "#696969",
    },
});
export default CustomButton;