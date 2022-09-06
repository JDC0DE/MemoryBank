import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

import AppColors from '../config/AppColors';
import AppFonts from '../config/AppFonts';
import AppIcon from './AppIcon';

//Custom component for creating an image which has more information -(metadata) displayed below the image 
function AppCard({category, date, location, tag, image}) {
    return (
        <View style = {styles.container}>
            {isFinite(image)? <Image source ={image} style ={styles.image}/>: <Image source ={{uri: image}} style ={styles.image}/>}
            <View style={styles.textContainer}>
                <View style={styles.leftTextContainer}>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                    <AppIcon name={"tag"} iconColor={AppColors.primaryColor} />
                    <Text style ={styles.tag}>{tag}</Text>
                    </View>
                
                    <View style={{flexDirection:'row' , alignItems:'center'}}>
                    <AppIcon name={"filter-variant"} iconColor={AppColors.primaryColor}/>
                    <Text style ={styles.category}>{category}</Text>
                    </View>
                
                    <TouchableOpacity>
                    <View style={{flexDirection:'row' , alignItems:'center'}}>
                    <AppIcon name={"pencil"} iconColor={AppColors.primaryColor}/>
                    <Text style ={styles.edit}>Edit</Text>
                    </View>
                    </TouchableOpacity>
                    
                
                </View>
            
                <View style={styles.RightTextContainer}>
                    <View style={{flexDirection:'row' , alignItems:'center'}}>
                    <AppIcon name={"calendar"} iconColor={AppColors.primaryColor}/>
                    <Text style ={styles.date}>{date}</Text>
                    </View>

                    <View style={{flexDirection:'row' , alignItems:'center'}}>
                    <AppIcon name={"map-marker"} iconColor={AppColors.primaryColor}/>
                    <Text style ={styles.location}>{location}</Text>
                    </View>
                
                </View>
                
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: AppColors.otherColor_4,
        //height: 100,
        borderRadius: 20,
        overflow:"hidden",
        marginBottom: 25,
    },
    image:{
        height: 200,
        width:'100%',
    },
    textContainer:{
        flexDirection:'row',
        paddingLeft: 10,
        justifyContent: 'space-around',
        alignItems: 'flex-start',

    },
    tag: {
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: AppFonts.targetOs,
        color: AppColors.primaryColor,
    },

    date: {
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: AppFonts.targetOs,
        color: AppColors.primaryColor,
    },
    category: {
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: AppFonts.targetOs,
        color: AppColors.primaryColor,
    },
    location: {
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: AppFonts.targetOs,
        color: AppColors.primaryColor,
    },

    edit:{
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: AppFonts.targetOs,
        color: AppColors.primaryColor,
    },
    
})

export default AppCard;