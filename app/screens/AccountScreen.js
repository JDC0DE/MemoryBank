import React from 'react';
import {View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import AppIcon from '../components/AppIcon';
import AppListItem from '../components/AppListItem';
import AppScreen from '../components/AppScreen';
import AppColors from '../config/AppColors';
import AppText from '../components/AppText';
import AppFonts from '../config/AppFonts';
import AppDrawer from '../components/AppDrawer';


const accountImg = <AppIcon name = "account-outline" size={60} iconColor={AppColors.primaryColor} backgroundColor={AppColors.otherColor_2} elevation={20}></AppIcon>;

const appFunctions = [
    {
        id: 1,
        title: "Random",
        IconComponent: <AppIcon name = "shuffle-variant" size={40} iconColor={AppColors.primaryColor} backgroundColor={AppColors.otherColor_2} elevation={5}/>,
    },

    {
        id: 2,
        title: "Deposit",
        IconComponent: <AppIcon name = "arrow-down-bold" size={40} iconColor={AppColors.primaryColor} backgroundColor={AppColors.otherColor_2} elevation={5}/>,
    },

    {
        id: 3,
        title: "Access",
        IconComponent: <AppIcon name = "apps" size={40} iconColor={AppColors.primaryColor} backgroundColor={AppColors.otherColor_2} elevation={5}/>,
    },
    
]
function AccountScreen({navigation, route}) {
    
    window.email = route.params.paramEmail; //global variables to pass the email and name retrieved from the login screen to the drawer navigation 
    window.name = route.params.paramName;

    return (
        <AppScreen style={styles.container}>
            <View style ={styles.welcomeContainer}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <AppIcon name = "menu" size={50} iconColor={AppColors.otherColor_3}/>

                </TouchableOpacity>

            </View>
            <View style={styles.profileContainer}>
                <AppListItem IconComponent={accountImg} title= {route.params.paramName} subtitle={route.params.paramEmail}  ></AppListItem>
            </View>
            
            <View style={styles.functionContainer}>
                <FlatList 
                data={appFunctions}
                keyExtractor = {author => author.id.toString()}
                renderItem = {({item}) => <AppListItem title={item.title} IconComponent={item.IconComponent} onPress={()=> item.title=='Access'? navigation.navigate("Gallery"):console.log(item)} // the access tab is the only ListItem which can navigate to the gallery screen the other tabs have intended function which could not be completed 
                />}
               
                />
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
        marginTop:50,
        paddingLeft: 60,
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
export default AccountScreen;