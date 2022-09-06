import React from 'react';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AppIcon from '../components/AppIcon';

import AccountScreen from '../screens/AccountScreen';
import MemoriesScreen from '../screens/MemoriesScreen';
import AppColors from '../config/AppColors';
import DrawNavigator from './DrawNavigator';


const AppTab = createBottomTabNavigator();

const TabNavigator = () => (
    <AppTab.Navigator screenOptions={{tabBarActiveTintColor:AppColors.otherColor_3, tabBarActiveBackgroundColor: AppColors.otherColor_4, headerShown:false }}>
        <AppTab.Screen name = "Account" component={DrawNavigator} options ={{tabBarIcon: () => <AppIcon size ={30} name="account" backgroundColor={AppColors.otherColor_4}/> }}/>
        <AppTab.Screen name = "Gallery" component={MemoriesScreen} options ={{tabBarIcon: () => <AppIcon size ={30} name="apps" backgroundColor={AppColors.otherColor_4}/> }}/>
    </AppTab.Navigator>

)

export default TabNavigator;
