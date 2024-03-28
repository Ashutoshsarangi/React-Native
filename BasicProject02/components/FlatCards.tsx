import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FlatCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text style={styles.textWhite}>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>Green</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text style={styles.textWhite}>Blue</Text>
        </View>
        <View style={[styles.card, styles.card4]}>
          <Text>Yellow</Text>
        </View>
        <View style={[styles.card, styles.card4]}>
          <Text>Yellow</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    margin: 5,
    padding: 5,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    height: 100,
    width: 100,
    margin: 5,
    padding: 5,
    borderRadius: 5,
    alignItems: 'center',
  },
  cardOne: {
    backgroundColor: '#db0f61',
  },
  cardTwo: {
    backgroundColor: '#10eb43',
  },
  cardThree: {
    backgroundColor: '#243cf0',
  },
  card4: {
    backgroundColor: '#ebe410',
  },
  textWhite: {
    color: '#ffffff',
  },
});

export default FlatCards;
