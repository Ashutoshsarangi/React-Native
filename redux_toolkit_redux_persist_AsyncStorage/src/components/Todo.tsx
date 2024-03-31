import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {connect} from 'react-redux';
import {getTodoList} from '../features/toso.selector';

const Todo = ({myTodolists}) => {
  console.warn('my Todo List ---> ', myTodolists);
  return (
    <View>
      <Text>Todo</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default connect(state => ({
  myTodolists: getTodoList(state),
}))(Todo);
