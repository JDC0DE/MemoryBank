import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar, View } from 'react-native';
import Constants from 'expo-constants';


import AppColors from '../config/AppColors';


//Custom component for creating the design of the app screen - used instead of view initially 
function AppScreen({children, style, backgroundColor, barStyle}) {
    return (
        
        <SafeAreaView style = {[styles.screen, style]}>
                {children}
                <StatusBar  backgroundColor= {backgroundColor?backgroundColor:AppColors.primaryColor} animated={true}  barStyle= {barStyle?barStyle:'dark-content'}/>
        </SafeAreaView>
        
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
        backgroundColor: AppColors.primaryColor,
        
    },
    paddingView:{
        //padding: 20,
    },
})

export default AppScreen;