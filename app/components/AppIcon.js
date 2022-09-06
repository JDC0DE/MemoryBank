import React from 'react';
import { StyleSheet, View} from 'react-native';
//import {MaterialCommunityIcons} from '@expo/vector-icons';

import AppColors from '../config/AppColors';

//custom component for creating icons rather than having to import MaterialCommunityIcons and style a icon
function AppIcon({name, size=40, iconColor, backgroundColor, elevation}) {
    return (
    
        <View style = {{width: size, height: size, backgroundColor, borderRadius: size/2, alignItems: 'center', justifyContent: 'center', elevation, shadowColor: AppColors.black}}>
            {/* <MaterialCommunityIcons name ={name} size = {size*0.6} color ={iconColor}/> */}
        </View>
    );
}
const styles = StyleSheet.create({
    
})
export default AppIcon;