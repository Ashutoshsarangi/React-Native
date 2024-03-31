import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/store/store';
import Todo from './src/components/Todo';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <View>
          <Text>App</Text>
          <Todo />
        </View>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({});
