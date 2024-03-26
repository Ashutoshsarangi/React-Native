import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  useColorScheme,
} from 'react-native';

const AppPro = () => {
  const isDarkTheme = useColorScheme() === 'dark';
  console.log(isDarkTheme);
  return (
    <SafeAreaView style={styles.messageContainer}>
      <View>
        <Text style={isDarkTheme ? styles.blackText : styles.whiteText}>
          Hello Ashu + Sonu
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  messageContainer: {
    flex: 1,
    alignItems: 'center', // Left to right and justify content top to bottm in RN
    backgroundColor: '#f0f3f7',
    justifyContent: 'center',
  },
  whiteText: {
    color: '#FF0000',
    backgroundColor: '#0aFFd0',
  },
  blackText: {
    color: '#FFFFFF',
    backgroundColor: '#1d67de',
  },
});

export default AppPro;
