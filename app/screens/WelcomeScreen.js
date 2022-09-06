import React from 'react';
import {View, StyleSheet, Text, ImageBackground, Platform} from 'react-native';
//import {MaterialCommunityIcons} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';

import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
import AppColors from '../config/AppColors';
import AppButton from '../components/AppButton';
import AppFonts from '../config/AppFonts';



const blurRadiusValue = Platform.OS === "android" ? 0.7 : 5.5;

function WelcomeScreen({navigation}) {
    return (
        <AppScreen style={styles.container}>
                <View style = {styles.welcomeContainer}>
                <Text style={styles.logoText}> MemoryBank </Text>
                    {/* <MaterialCommunityIcons
                    name = 'piggy-bank'
                    size = {60}
                    color = {AppColors.otherColor_3}/> */}
                   
                </View>
                <View style ={styles.buttonContainer}>
                        <Text style = {styles.welcomeText}> Welcome, your gallery has never been safer!</Text>
                        <AppButton children = "Login" onPress={() => navigation.navigate("Login")}/>
                        <AppButton children = "Register" onPress={() => navigation.navigate("Register")}/>
                </View>
            
                
                
           
        </AppScreen>
    );
}

export default WelcomeScreen;
const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:0,
    },

    welcomeContainer: {
       //backgroundColor: AppColors.primaryColor,
       flexDirection: 'column', 
       justifyContent: 'space-between',
        alignItems : 'center',
        height: 125,
        marginTop: 100,
       
    },

    logoText:{
        fontSize: AppFonts.fontSize,
        color: AppColors.otherColor_3,
        fontFamily: AppFonts.targetOs,
        fontWeight: 'bold',

    },

    welcomeText:{
        fontSize: 12,
        fontFamily: AppFonts.targetOs,
        textAlign: 'left',
    },
    
    buttonContainer: {
        flex: 0.5,
        //backgroundColor: 'red', // use this too how much space the component box has
        marginTop: 200,
        marginEnd: 65,
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: 150,
        alignSelf: 'flex-end',
        width: '70%',
        
    },
})