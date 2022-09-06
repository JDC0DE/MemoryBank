import React, {useState} from 'react';
import {StyleSheet, Text, View, Modal,TouchableOpacity } from 'react-native';

import AppColors from '../config/AppColors';
import AppFonts from '../config/AppFonts';
import AppIcon from './AppIcon';
import AppScreen from './AppScreen';



//Custom component for creating similarily designed modals- however failed to get it properly working
function AppModal({name, size, iconColor, backgroundColor, elevation }) {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <>
        <View style={styles.container}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
            <AppIcon name={name} size ={size} iconColor={iconColor} backgroundColor={backgroundColor} elevation={elevation}/>
        </TouchableOpacity>
        </View>
        <Modal visible={modalVisible} animationType="slide">
            <AppScreen style = {{borderRadius:20, marginTop: 0, backgroundColor: AppColors.white}}>
                <Text style={{textAlign:'center' ,color: '#1ac6ff', fontWeight: 'bold', fontSize: 15, fontFamily: AppFonts.targetOs}} onPress={() => setModalVisible(false)}>Close</Text>
            </AppScreen>
        </Modal>
        </>
    );
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column-reverse',
        paddingLeft: 40,
        padding: 70,
    },
    
})

export default AppModal;