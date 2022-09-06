import React, {useState} from 'react';
import { FlatList , ImageBackground, StyleSheet, Text, View, Modal, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import Swipeable from 'react-native-gesture-handler/Swipeable';


import AppCard from '../components/AppCard';
import AppIcon from '../components/AppIcon';
import AppImage from '../components/AppImage';
import AppPicker from '../components/AppPicker';
import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
import AppColors from '../config/AppColors';
import AppFonts from '../config/AppFonts';
import DataManager from '../config/DataManager';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import AppTextInputAlt from '../components/AppTextInputAlt';
import App from '../../App';



const categories = [
    {label: "All", value:1, icon: 'image-frame', backgroundColor: AppColors.otherColor_3, elevation: 0.5},
    {label: "Travel", value:3, icon: 'airplane-takeoff', backgroundColor: AppColors.secondaryColor, elevation: 0.5 },
    {label: "Romance", value:2, icon: 'heart-outline', backgroundColor: "red", elevation: 0.5 },
    {label: "Food", value:5, icon: 'food', backgroundColor: "orange", elevation: 0.5 },
    {label: "Add", value:4, icon: 'plus', backgroundColor: AppColors.otherColor_2, elevation: 0.5 },
];

const getImages = () => {
    let commonData = DataManager.getInstance();
    let user = commonData.getUserID();
     return commonData.getImages(user);   
}


    

function MemoriesScreen({navigation}) {
    const imageList = getImages();
    const [modalVisible, setModalVisible] = useState(false);
    const[tag, setTag] =useState("");
    const[date, setDate] =useState("");
    const[location, setLocation] =useState("");
    const[category, setCategory] = useState("");
    const[image, setImage] = useState(null);


    const[tagError, setTagError]=useState("");
    const[dateError, setDateError]=useState("");
    const[locationError, setLocationError]=useState("");
    const[categoryError, setCategoryError]=useState("");
    const[imageError, setImageError]=useState("");

     const[delImages, setDelImages] = useState(imageList);
     const onDelete = (delImage) => {
         const newImageList = delImages.filter(item => item.id !== delImage.id);
         setDelImages(newImageList);
     }
     console.log(delImages);

    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
        if (permissionResult.granted === false) {
          alert("Permission to access camera roll is required!");
          return;
        }
    
        let pickerResult = await ImagePicker.launchImageLibraryAsync();

        if (pickerResult.cancelled === true) {
            return;
          }

        setImage({path: pickerResult.uri});
        console.log(pickerResult);
      }
      
      //error check for entry fields for new image - checks for any input > 0 
    const doErrorCheck = () => { 
        setTagError(tag.length>0?" ": "Please set a valid tag");
        setDateError(date.length>0?" ": "Please set a valid date");
        setLocationError(location.length>0?" ": "Please set a valid location");
        setCategoryError(category.length>0?" ": "Please set a valid category");
        setImageError(image?"": "Please pick an image");
        return((tag.length>0) && (date.length>0) && (location.length>0) && (category.length>0) && (image)? true:false);
    }
    
    const addImage = () => {
        let commonData = DataManager.getInstance();
        let user = commonData.getUserID();

        const images = commonData.getImages(user);
        const imageID = images.length+ Math.floor(Math.random()* 999);
        const newImage = {
            tag: tag,
            date: date,
            location: location,
            category: category,
            imageid: imageID,
            userid: user,
            image: image.path,

        }

        console.log(newImage);
        commonData.addImage(newImage);
    }

    const[refreshing, setRefreshing] = useState(false);

    const numColumns = 3;
    
    return (
        <AppScreen style={{backgroundColor: AppColors.primaryColor, marginTop:0}}>
            <AppPicker selectedItem = {category} onSelectItem = {item => setCategory(item)} data={categories} icon="filter-variant" placeholder="Categories" numColumns={3}/>
            
            <FlatList
                data={delImages} //list of images that can be deleted
                keyExtractor={image => image.imageid.toString()}
                refreshing ={refreshing} //refreshing screen sets the flatlist with the imageList data
                onRefresh={() => setDelImages(imageList)}
                renderItem = {({item}) => <TouchableOpacity onPress={() => 
                    navigation.navigate("Info", { 
                    
                        params:{//tried sending image data retrieved to the moreInfoScreen through nested navigation, however regardless of what effort resulted in undefined objects being recieved
                            paramImage: item.image,
                            paramDate: item.date,
                            paramTag: item.tag,
                            paramLocation: item.location,
                            paramCategory: item.category,
                        },

                })}>
                    <Swipeable renderRightActions={() =><View style={styles.deleteView}>
                    <TouchableOpacity onPress={() => onDelete(item)}>
                    <AppIcon name = {"trash-can-outline"} size={60} iconColor = {AppColors.primaryColor}/>
                    </TouchableOpacity>
                    </View>}>
                    <AppImage image={item.image}/>
                    </Swipeable>
                </TouchableOpacity>}>
                
                </FlatList>
                
                <View style={styles.container}>
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                <AppIcon name = "plus" size={50} iconColor={AppColors.primaryColor} backgroundColor={AppColors.otherColor_2} elevation={20}/>
                </TouchableOpacity>
                
            </View>
            
                
           
            
        <Modal visible={modalVisible} animationType="slide">
            <AppScreen style = {{borderRadius:20, marginTop: 0, backgroundColor: AppColors.white}}>
                <Text style={{textAlign:'center' ,color: '#1ac6ff', fontWeight: 'bold', fontSize: 15, fontFamily: AppFonts.targetOs}} onPress={() => setModalVisible(false)}>Close</Text>
                <AppTextInputAlt 
                icon = "tag"
                placeholder="Image Tag"
                value={tag}
                onChangeText={(inputText) => setTag(inputText)}
                >
                </AppTextInputAlt>

                {tagError.length>0? <Text style={{margin: 5, color: 'red', fontSize: 16, fontFamily: AppFonts.targetOs}}> {tagError}</Text>: <></>}

                <AppTextInputAlt 
                icon = "calendar"
                placeholder="Image Date"
                value={date}
                onChangeText={(inputText) => setDate(inputText)}
                >
                </AppTextInputAlt>

                {dateError.length>0? <Text style={{margin: 5, color: 'red', fontSize: 16, fontFamily: AppFonts.targetOs}}> {dateError}</Text>: <></>}

                <AppTextInputAlt 
                icon = "map-marker"
                placeholder="Image Location"
                value={location}
                onChangeText={(inputText) => setLocation(inputText)}
                >
                </AppTextInputAlt>

                {locationError.length>0? <Text style={{margin: 5, color: 'red', fontSize: 16, fontFamily: AppFonts.targetOs}}> {locationError}</Text>: <></>}
                
                <AppTextInputAlt 
                icon = "filter-variant"
                placeholder="Image Category"
                value={category}
                onChangeText={(inputText) => setCategory(inputText)}
                > 
                </AppTextInputAlt>

                {categoryError.length>0? <Text style={{margin: 5, color: 'red', fontSize: 16, fontFamily: AppFonts.targetOs}}> {categoryError}</Text>: <></>}
                <View style={{justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                <TouchableOpacity style ={styles.imageButton} onPress={openImagePickerAsync}>
                    <AppIcon name = "image-multiple-outline" size = {80} iconColor={AppColors.otherColor_3} backgroundColor ={AppColors.otherColor_4}></AppIcon>
                    {image && <Image source={{uri: image.path}} style = {{height: 80, width: 80, borderRadius: 10, marginLeft: 20, marginBottom: 10}}/>}
                </TouchableOpacity>

                {imageError.length>0? <Text style={{margin: 5, color: 'red', fontSize: 16, fontFamily: AppFonts.targetOs}}> {imageError}</Text>: <></>}

                </View>
                <AppButton children={"Add Image"} onPress={() => {
                    if(doErrorCheck()){
                        addImage();
                        setModalVisible(false);

                    }
                }
                    }/>
                    
            </AppScreen>
        </Modal>
       
        </AppScreen>
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: 'transparent',
        flex: 1,
        flexDirection: 'column-reverse',
        paddingLeft: 40,
        height: 675,
        position: 'absolute',
    },

    image:{
        height: 200,
        width:'100%',
    },

    imageButton:{
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: 10,
    },

    deleteView:{
        backgroundColor: 'red',
        width: 100,
        height: 225,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        justifyContent: 'center',
        alignItems:'center',
        
    },
    
})

export default MemoriesScreen;