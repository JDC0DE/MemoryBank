import React from 'react';
import { Text, Button, TouchableOpacity, StyleSheet, View} from 'react-native';
//import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'


import AppColors from '../config/AppColors';
import AppFonts from '../config/AppFonts';

//Custom button component which has been desgined as according to wireframes/mockups
function AppButton({children, color = "otherColor_2", onPress}) {
    return (
        <TouchableOpacity onPress = {onPress} activeOpacity={0.8}>
            <View style = {[styles.button, {backgroundColor:AppColors[color]}, styles.shadow]}>
                <Text style = {styles.text}>
                    {children}
                </Text>
            </View>

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        //borderColor: AppColors.otherColor_3,
        //borderStyle: 'solid',
        //borderWidth: 2,
        backgroundColor: AppColors.otherColor_2,
        borderRadius: 10,
        width: '100%',
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },

    shadow: {
        elevation: 20,
        shadowColor: AppColors.black,
        
    },

    text: {
        color: AppColors.primaryColor,
        fontFamily: AppFonts.targetOs,
        fontSize: 16,
    },
    
})

export default AppButton;