import React from 'react';
import { TouchableOpacity, StyleSheet  } from 'react-native';

import AppColors from '../config/AppColors';
import AppIcon from './AppIcon';
import AppText from './AppText';

//custom component for the items in the category selection/ filter
function AppPickerItem({onPress, label, icon, backgroundColor, elevation}) {
    return (
        <TouchableOpacity onPress ={onPress} style={styles.container}>
            <AppIcon name = {icon} iconColor={AppColors.white} backgroundColor={backgroundColor} elevation={elevation}/>
            <AppText>{label}</AppText>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container:{
        paddingHorizontal:10,
        paddingVertical:30,
        paddingEnd:30,
        width:"35%",
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    
})

export default AppPickerItem;