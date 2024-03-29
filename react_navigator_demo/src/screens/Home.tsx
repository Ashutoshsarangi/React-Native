import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Home() {
  return (
    <View>
      <View>
        <Text>
          Hello World!!! Home
          <Icon name="rocket" size={30} color="#900" />
          <Icon name="home" size={30} color="#900" />
          <Icon name="bell" size={30} color="#900" />
          <Icon name="user" size={30} color="#900" />
          <Icon name="cog" size={30} color="#900" />
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
