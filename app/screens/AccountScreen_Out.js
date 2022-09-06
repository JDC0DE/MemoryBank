import React from 'react';
import {View, StyleSheet } from 'react-native';

import AppIcon from '../components/AppIcon';
import AppListItem from '../components/AppListItem';
import AppScreen from '../components/AppScreen';
import AppColors from '../config/AppColors';
import AppFonts from '../config/AppFonts';

//DISREGARD - Outdated AccountScreen not used

const accountImg = <AppIcon name = "account-outline" size={60} iconColor={AppColors.primaryColor} backgroundColor={AppColors.otherColor_2}></AppIcon>;

function AccountScreen_Out(props) {
    return (
        <AppScreen style={styles.container}>
            <View style ={styles.welcomeContainer}>

            </View>
            <View style={styles.profileContainer}>
                <AppListItem IconComponent={accountImg} title= "Joshua Devine" subtitle="jd@gmail.com"  ></AppListItem>
            </View>
            
            <View style={styles.functionContainer}>
            <AppListItem IconComponent={<AppIcon name = "shuffle-variant" size={40} iconColor={AppColors.primaryColor} backgroundColor={AppColors.otherColor_2}></AppIcon>} title= "Random"/>
            <AppListItem IconComponent={<AppIcon name = "arrow-down-bold" size={40} iconColor={AppColors.primaryColor} backgroundColor={AppColors.otherColor_2}></AppIcon>}title= "Deposit"/>
            <AppListItem IconComponent={<AppIcon name = "apps" size={40} iconColor={AppColors.primaryColor} backgroundColor={AppColors.otherColor_2}></AppIcon>}title= "Access"/>
            </View>
        </AppScreen>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:0,
        //backgroundColor: AppColors.primaryColor,
        padding: 20,
    },
    welcomeContainer:{
        justifyContent: 'center',
        alignItems : 'flex-start',
        marginTop: 10,
        marginBottom: 90,
    },
    profileContainer:{
        justifyContent: 'center',
        alignItems : 'flex-start',
        marginTop:70,
        paddingLeft: 70,
       // backgroundColor: 'rgba(71, 91, 99, 0.6)',
        //marginVertical: 50,
        borderRadius: 10,
        

    },

    functionContainer:{
        marginVertical: 105,
        backgroundColor: 'rgba(71, 91, 99, 0.2)',
        height: 150,
        justifyContent: 'space-around',
        alignItems : 'flex-start',
        paddingLeft: 95,
        borderRadius: 10,
        //marginStart: 80,
    },
    
})
export default AccountScreen_Out;