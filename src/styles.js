import { Dimensions, StyleSheet } from 'react-native'

export const Universalstyles = StyleSheet.create({
    root:{
       
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'white',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
    },
    logo:{
        bottom: 70,
        flex: 1,
        right: 4.4,
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    input: {
        bottom: 90,
        width: '100%',
    },

    txt:{
        color: '#4169e1',
    }


})

export default Universalstyles;
