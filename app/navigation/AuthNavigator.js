import React from 'react';
//import {createStackNavigator} from '@react-navigation/stack';

import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import AccountScreen from '../screens/AccountScreen';
import MemoriesScreen from '../screens/MemoriesScreen';
import TabNavigator from './TabNavigator';
import MoreInfoScreen from '../screens/MoreInfoScreen';






const AppStack = createStackNavigator();

const AuthNavigator = () => (
    <AppStack.Navigator>
        <AppStack.Screen name = "Welcome" component={WelcomeScreen} options ={{headerShown:false}}/>
        <AppStack.Screen name = "Login" component={LoginScreen} options ={{headerShown:false}}/>
        <AppStack.Screen name = "Register" component={RegisterScreen} options ={{headerShown:false}}/>
        <AppStack.Screen name = "Acc" component={TabNavigator} options ={{headerShown:false}}/>
        <AppStack.Screen name = "Pics" component={MemoriesScreen} options ={{headerShown:false}}/>
        <AppStack.Screen name = "Info" component={MoreInfoScreen} options ={{headerShown:false}}/>
    </AppStack.Navigator>
)

export default AuthNavigator;