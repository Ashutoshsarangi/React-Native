import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from '../screens/Home';
import Cart from '../screens/Cart';
import Favorite from '../screens/Favorite';
import OrderHistory from '../screens/OrderHistory';
import DemoList from '../screens/DemoList';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {height: 80},
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => <Icon name="home" size={30} color="#900" />,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: () => <Icon name="cart-plus" size={30} color="#900" />,
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarIcon: () => <Icon name="heart" size={30} color="#900" />,
        }}
      />
      <Tab.Screen
        name="Orderreact native vector "
        component={OrderHistory}
        options={{
          tabBarIcon: () => <Icon name="bell" size={30} color="#900" />,
        }}
      />
      <Tab.Screen
        name="Demo List, FlatList "
        component={DemoList}
        options={{
          tabBarIcon: () => <Icon name="list" size={30} color="#900" />,
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
