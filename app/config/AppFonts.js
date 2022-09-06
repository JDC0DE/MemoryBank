import { Platform } from 'react-native';
//config file for text used in app
export default{
    android: 'serif',
    ios: 'Arial',
    fontSize: 20,
    targetOs: Platform.OS === 'android'? 'Roboto' : 'Arial',
}