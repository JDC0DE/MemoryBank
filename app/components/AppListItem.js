import React from 'react';
import { View, StyleSheet, Image, Text, TouchableHighlight } from 'react-native';

import AppColors from '../config/AppColors';
import AppText from './AppText';

//custom component for listing items  
function AppListItem({image, title, subtitle, IconComponent, onPress}) {
    return (
        <TouchableHighlight onPress={onPress} underlayColor={AppColors.otherColor_2} activeOpacity = {0.95}>
        <View style={styles.container}>
            {IconComponent}
            {image && <Image source={image} style={styles.image}/>}
            <View style={styles.textContainer}>
                <AppText style = {styles.title}>  {title} </AppText>
                {subtitle && <AppText style = {styles.subtitle}> {subtitle} </AppText>}
            </View>
            
        </View>
        </TouchableHighlight>
    );
}
const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        padding: 5,
        
    },

    image:{
        height: 75,
        width:75,
        borderRadius: 37,
        marginLeft: 10,
    },
    textContainer:{
        flexDirection: "column",
        marginLeft: 20,
        
    },
    title:{
        fontWeight: "bold",
        marginVertical:5,
    },
    subtitle:{
        fontSize:15,
    },
    
})
export default AppListItem;