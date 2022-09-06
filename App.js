// import 'react-native-gesture-handler';
// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text, Platform } from 'react-native';
//import {MaterialCommunityIcons} from '@expo/vector-icons';

//import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './app/navigation/AuthNavigator';
import TabNavigator from './app/navigation/TabNavigator';
import DrawNavigator from './app/navigation/DrawNavigator';

import WelcomeScreen from './app/screens/WelcomeScreen';
import AccountScreen from './app/screens/AccountScreen';
import MemoriesScreen from './app/screens/MemoriesScreen';






export default function App() {
  return (
    <NavigationContainer>
      <AuthNavigator/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
});
