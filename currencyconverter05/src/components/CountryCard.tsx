import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';

const CountryCard = ({item, showResult, currency}) => {
  return (
    <View>
      <Pressable
        onPress={() => showResult(item)}
        style={[
          styles.btn,
          currency === item.countryCurrency && styles.selectedBtn,
        ]}>
        <View>
          <Text style={styles.btnText}>
            {item.countryName} {item.countryFlag}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    margin: 5,
    padding: 5,
    height: 110,
    width: 112,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f59f58',
    borderRadius: 5,
    elevation: 5,
  },
  btnText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  selectedBtn: {
    backgroundColor: '#123456',
  },
});

export default CountryCard;
