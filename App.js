import React, { useState } from 'react';
import { View } from 'react-native';
import AppPicker from './app/components/AppPicker';
import AppTextInput from './app/components/AppTextInput';
import Card from './app/components/Card';
import Icon from './app/components/Icon';
import ListItems from './app/components/ListItems';
import Screen from './app/components/Screen';
import AccountScreen from './app/Screens/AccountScreen';
import ListingDetailsScreen from './app/Screens/ListingDetailsScreen';
import ListingEditScreen from './app/Screens/ListingEditScreen';
import ListingsScreen from './app/Screens/ListingsScreen';
import LoginScreen from './app/Screens/LoginScreen';
import MessagesScreen from './app/Screens/MessagesScreen';
import ViewImage from './app/Screens/ViewImage';
import WelcomeScreen from './app/Screens/WelcomeScreen';
import { NativeRouter, Route, Switch } from "react-router-native";

export default function App() {
  return (
    // <NativeRouter>
    //   <View>
    //     <Switch>
          
    //       <Route exact path="/" component={WelcomeScreen} />
    //       <Route exact path="/login" component={LoginScreen} />

    //     </Switch>
    //   </View>
    // </NativeRouter>
    WelcomeScreen
  );
}

