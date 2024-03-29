import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/FontAwesome';

import Home from './src/screens/Home';
import Cart from './src/screens/Cart';
import Favorite from './src/screens/Favorite';
import Profile from './src/screens/Profile';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarHideOnKeyboard: true,
          tabBarStyle: {height: 80, position: 'absolute'},
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: () => <Icon name="home" size={30} color="#900" />,
          }}></Tab.Screen>
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            tabBarIcon: () => <Icon name="cart-plus" size={30} color="#900" />,
          }}></Tab.Screen>
        <Tab.Screen
          name="Favorite"
          component={Favorite}
          options={{
            tabBarIcon: () => <Icon name="heart" size={30} color="#900" />,
          }}></Tab.Screen>
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: () => <Icon name="user" size={30} color="#900" />,
          }}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
