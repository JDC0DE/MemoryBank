import React, {useState} from 'react';
import { View, StyleSheet, TextInput, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
//import {MaterialCommunityIcons} from '@expo/vector-icons';
import { Formik } from 'formik';
import {useNavigation} from '@react-navigation/native';
import * as yup from 'yup';


import AppScreen from '../components/AppScreen';
import AppColors from '../config/AppColors';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import DataManager from '../config/DataManager';


const schema = yup.object().shape(
{
email: yup.string().required().email().label("email"),
password: yup.string().required().min(4).max(8).label("password"),

}
);

const users = [
    {
        id: "user1",
        name: "Joshua Devine",
        email: "jd@gmail.com",
        password: "1234"
    },

    {
        id: "user2",
        name: "Barry Barn",
        email: "bb@gmail.com",
        password: "2345"
    },

    {
        id: "user3",
        name: "Chiba",
        email: "cd@gmail.com",
        password: "9092"
    },

];

const validateUser = ({email, password}) => {
    return(
        users.filter((user) => user.email === email && user.password === password).length>0
    );
}

const getUser = ({email}) => {
    return users.find((user) => user.email === email );
}

const createUser = ({email}) => {
    let commonData = DataManager.getInstance();
    let userID = getUser({email}).id;
    commonData.setUserID(userID);

    console.log(commonData);
}

function LoginScreen({navigation, route}) {

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
                initialValues={{email:'', password:'',}}
                onSubmit = {(values, {resetForm}) => {
                if(validateUser(values)){
                resetForm();
                createUser(values); 
                navigation.navigate("Acc",{ 
                    screen: "Account",
                    params:{ 
                        screen: "Home",
                        params:{
                            paramEmail: values.email,
                            paramName: getUser(values).name,
                        },
                        
                    }
                }
                    );
            }
            else{
                resetForm();
                alert("Invalid Login Details")
            }
        }}
                validationSchema={schema}
                >
            {({values, handleChange, handleSubmit, errors, setFieldTouched, touched}) => (
                <>
                <KeyboardAvoidingView behavior={'height'} enabled ={false}>
                 <View style = {styles.textInputContainer}>
                <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                icon = "email"
                placeholder="Email Address"
                keyboardType="email-address"
                textContentType="emailAddress"
                value={values.email}
                onBlur = {() => setFieldTouched("email")}
                onChangeText = {handleChange("email")}
                />
                {touched.email && <AppText>{errors.email}</AppText>}
                <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                icon = "eye"
                placeholder="Password"
                secureTextEntry
                textContentType="password"
                value={values.password}
                onBlur = {() => setFieldTouched("password")}
                onChangeText = {handleChange("password")}
                />
                {touched.password && <AppText>{errors.password}</AppText>}
                <View style={styles.buttonContainer}>
                <AppButton children= "Login" onPress={handleSubmit}>

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
        padding: 25,
    },
    welcomeContainer: {
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
        

     },

     buttonContainer: {
        borderRadius: 10,
        width: '70%',
        marginTop: 160,
        marginStart: 0,
         marginVertical: 50,        
        
        
    },
    
})

export default LoginScreen;