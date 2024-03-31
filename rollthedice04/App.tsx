import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Dice from './src/components/Dice';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <Dice />
    </SafeAreaView>
  );
}

export default App;
