import React, {useState} from 'react';
import {StyleSheet, View, Text ,TouchableWithoutFeedback, Modal, Button,FlatList} from 'react-native';
//import {MaterialCommunityIcons} from '@expo/vector-icons';

import AppColors from '../config/AppColors';
import AppFonts from '../config/AppFonts';
import AppText from '../components/AppText';
import AppScreen from './AppScreen';
import AppButton from './AppButton';
import AppPickerItem from './AppPickerItem';



//custom component which creates a list of AppPickerItems meant to be categories using a modal component-is meant to be options to filter by
function AppPicker({data, icon, placeholder, numColumns, selectedItem, onSelectItem}) {
    const [modalVisible, setModalVisible] = useState(false);
    const selectedItemObjCheck = selectedItem? selectedItem.label:placeholder="Categories";
    const selectedItemStrCheck = selectedItemObjCheck!="Add"?selectedItemObjCheck: placeholder="Categories";
    return (
      
    <>
        <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
       <View style = {styles.container}>
           {/* {icon && <MaterialCommunityIcons name = {icon} size ={25}/>} */}
           <Text style={styles.text}> {selectedItemStrCheck} </Text>
            {/* <MaterialCommunityIcons name = "chevron-down" size ={25}/> */}
       </View>
       </TouchableWithoutFeedback>
        <Modal visible={modalVisible} animationType="slide">
            <AppScreen style = {{borderRadius:20, marginTop: 0, backgroundColor: AppColors.white}}>
            <Text style={{textAlign:'center' ,color: '#1ac6ff', fontWeight: 'bold', fontSize: 15, fontFamily: AppFonts.targetOs}} onPress={() => setModalVisible(false)}>Close</Text>
            <FlatList
                numColumns={numColumns}
                data={data}
                keyExtractor={item => item.value.toString()}
                renderItem = {({item}) => 
                <AppPickerItem 
                onPress={()=>{ 
                    setModalVisible(false);
                    onSelectItem(item);
                }}
                label={item.label}
                icon={item.icon}
                backgroundColor={item.backgroundColor}
                elevation={item.elevation}
                />}
            />
            </AppScreen>
        </Modal>
    </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: AppColors.otherColor_4,
        flexDirection: 'row',
        borderRadius: 25,
        padding: 10,
       marginVertical: 20,
       // paddingLeft: 20,
        width: '100%',
        
    },

    text: {
        flex:1,
        fontSize: AppFonts.fontSize,
        fontFamily: AppFonts.targetOs,
    },
    
})

export default AppPicker;