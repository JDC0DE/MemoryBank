import React, {useState} from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
//import {MaterialCommunityIcons} from '@expo/vector-icons';
import { Formik } from 'formik';
import {useNavigation} from '@react-navigation/native';
import * as yup from 'yup';



import AppScreen from '../components/AppScreen';
import AppColors from '../config/AppColors';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';



const schema = yup.object().shape(
    {
    name: yup.string().required().label("name"),
    email: yup.string().required().email().label("email"),
    password: yup.string().required().min(4).max(8).label("password"),
    
    }
    );

function RegisterScreen({navigation}) {

    const [register, setRegister] = useState();
    const [email, setEmail] = useState(); //state variables - setEmail grabs the input from the user and stores it in the variable email
    const [password, setPassword] = useState();

    return (
        <AppScreen style ={styles.container}>
            
            <View style = {styles.welcomeContainer}>
                <TouchableOpacity onPress={() => navigation.navigate("Welcome")}>
                    {/* <MaterialCommunityIcons
                    name = 'undo'
                    size = {30}
                    color = {AppColors.otherColor_3}>
                    
                        <AppText>Back</AppText>
                    </MaterialCommunityIcons> */}
                    </TouchableOpacity>
                    
                </View>
            <Formik
             
             initialValues={{name:'', email:'', password:'',}}
             onSubmit = {values => console.log(values)}
             validationSchema={schema}>


            {({handleChange, handleSubmit, errors, setFieldTouched, touched}) => (
            <>

            <KeyboardAvoidingView behavior={'height'} enabled ={false}>
            <View style = {styles.textInputContainer}>
                <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                icon = "account"
                placeholder="Name"
                textContentType="name"
                onBlur = {() => setFieldTouched("name")}
                onChangeText = {userInputName => setRegister(userInputName)}
                />
                {touched.name && <AppText>{errors.name}</AppText>}
                <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                icon = "email"
                placeholder="Email Address"
                keyboardType="email-address"
                textContentType="emailAddress"
                onBlur = {() => setFieldTouched("email")}
                onChangeText = {userInputEmail => setEmail(userInputEmail)}
                />
                {touched.email && <AppText>{errors.email}</AppText>}
                <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                icon = "eye"
                placeholder="Password"
                secureTextEntry
                textContentType="password"
                onBlur = {() => setFieldTouched("password")}
                onChangeText = {userInputPassword => setPassword(userInputPassword)}
                />
                {touched.password && <AppText>{errors.password}</AppText>}
                <View style = {styles.buttonContainer}>
                <AppButton children= "Register" onPress={() => {console.log(register ,email, password);  navigation.navigate("Login") }}>

                </AppButton>
                </View>
                </View>
                </KeyboardAvoidingView>
                </>
                )}
                </Formik>
                
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:0,
        //backgroundColor: AppColors.primaryColor,
        padding: 20,
    },
    welcomeContainer: {
        //backgroundColor: 'red',
         justifyContent: 'center',
         alignItems : 'flex-start',
         marginTop: 10,
         marginBottom: 90,
     },

     textInputContainer: {
        backgroundColor: 'rgba(71, 91, 99, 0.2)',
        marginVertical: 50,
        borderRadius: 10,
        marginTop: 10,
        justifyContent: 'center',
        alignItems : 'center',
        
        //alignSelf: 'flex-end',

     },

    buttonContainer: {
        //flexDirection: 'column',
        //justifyContent: 'center',
        borderRadius: 10,
        width: '70%',
        marginStart: 0,
         marginVertical: 50,        
         //flex: 2,
        backgroundColor: AppColors.secondaryColor,
    },
    
})

export default RegisterScreen;