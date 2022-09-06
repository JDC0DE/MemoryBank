import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
//import {MaterialCommunityIcons} from '@expo/vector-icons';

import AppColors from '../config/AppColors';
import AppFonts from '../config/AppFonts';

//custom component for text inputs intended for register/login as the design choice was to have only a line to indicate where to type
function AppTextInput({icon, ...otherProps}) {
    return (
       <View style = {styles.container}>
           {/* {icon && <MaterialCommunityIcons name = {icon} size ={22}/>} */}
           <TextInput style ={styles.textInput} {...otherProps}/>
       </View>
    );
}
const styles = StyleSheet.create({
    container: {
        borderBottomColor: AppColors.black,
        borderStyle: 'dotted',
        borderBottomWidth: 1,
        borderRadius: 1,
        flexDirection: 'row',
        padding: 10,
        marginVertical: 20,
        width: '80%',
        justifyContent: 'center',
        alignItems : 'center',
    },

    textInput: {
        fontSize: AppFonts.fontSize,
        fontFamily: AppFonts.targetOs,
        color: AppColors.black,
        marginLeft: 10,
        flex: 1,
    },
    
})

export default AppTextInput;