import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

import AppColors from '../config/AppColors';
import AppFonts from '../config/AppFonts';

//Custom text component - was having issues not allowing me to style so had to resort to using Text API
function AppText({children}) {
    return (
        <Text style={styles.text}>{children}</Text>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize:AppFonts.fontSize,
        color: AppColors.otherColor_3,
        fontFamily: AppFonts.targetOs,
    },
})

export default AppText;