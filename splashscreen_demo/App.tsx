/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const App = () => {
  useEffect(() => {
    if (Platform.OS === 'android') {
      console.warn('I am Inside android OS');
      setTimeout(() => {
        SplashScreen.hide();
      }, 2000);
    }
  }, []);
  return (
    <SafeAreaView>
      <View>
        <Text>
          Hello Ashutosh Sarangi, This is a Splash Screen and Icon Component
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
