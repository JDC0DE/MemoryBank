import React from 'react';
import { View, Text,StyleSheet, FlatList, TouchableOpacity, Dimensions} from 'react-native';
//import {MaterialCommunityIcons} from '@expo/vector-icons';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import PaginationDot from 'react-native-snap-carousel/src/pagination/PaginationDot';

import AppCard from '../components/AppCard';
import AppIcon from '../components/AppIcon';
import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
import AppColors from '../config/AppColors';
import AppFonts from '../config/AppFonts';
import DataManager from '../config/DataManager';



let deviceWidth = Dimensions.get('window').width;
//get image data from instance of DataManager
const getImages = () => {
    let commonData = DataManager.getInstance();
    let user = commonData.getUserID();
     return commonData.getImages(user);   
}




function MoreInfoScreen({navigation, route}) {
    const imageList = getImages();
    
    const hold= "";

    console.log(route.params.paramImage);
    return (
        <AppScreen style={styles.container} backgroundColor = {AppColors.otherColor_3} barStyle = {'light-content'}>
            <View style = {styles.welcomeContainer}>
                <TouchableOpacity onPress={() => navigation.navigate("Acc", {screen:"Gallery"})}>
                
                    <AppIcon
                    name = 'undo'
                    size = {50}
                    iconColor = {AppColors.primaryColor}>
            
                    </AppIcon>
                    
                    
                </TouchableOpacity>
                    
                </View>
            <Carousel //third party component which allows for different/desired layout of moreInfoScreen 
                layout='default'
                data={imageList}
                sliderWidth={deviceWidth}
                itemWidth={deviceWidth}
                keyExtractor={image => image.imageid.toString()}
                renderItem = {({item}) =>
                    
                    <AppCard
                    tag={item.tag}
                    location={item.location}
                    date={item.date}
                    category={item.category}
                    image={item.image}
                    />}
                />
        
            <View>
                <Pagination
                    activeDotIndex={0}
                    
                    dotsLength={imageList.length}
                    inactiveDotScale={1.5}
                />
                </View>
        </AppScreen>
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: AppColors.otherColor_3,
        flex: 1,
        marginTop: 0,
    },

    welcomeContainer: {
        // backgroundColor: 'red',
        justifyContent: 'center',
        alignItems : 'flex-start',
        marginTop: 10,
        marginBottom: 125,
     },

     backText:{
        fontSize:AppFonts.fontSize,
        color: AppColors.primaryColor,
        fontFamily: AppFonts.targetOs,
     },
    
})
export default MoreInfoScreen;