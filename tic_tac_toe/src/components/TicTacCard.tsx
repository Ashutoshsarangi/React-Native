import React from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';

const TicTacCard = ({item, index, handleBtnClick}) => {
  const isDisabled = item !== 'empty';
  return (
    <Pressable
      style={[styles.btn, isDisabled && styles.disableBtn]}
      onPress={() => handleBtnClick(index)}
      disabled={isDisabled}
      key={index}>
      <Text style={[styles.btnText, isDisabled && styles.disableBtnText]}>
        {item !== 'empty' && (item === 'X' ? 'X' : 'O')}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btn: {
    padding: 5,
    margin: 5,
    height: 100,
    width: 100,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  disableBtn: {
    backgroundColor: '#7e827f',
  },
  btnText: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#1a1c1a',
  },
  disableBtnText: {
    color: '#ffffff',
  },
});

export default TicTacCard;
