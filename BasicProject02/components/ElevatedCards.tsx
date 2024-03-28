import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCards</Text>
      <View style={styles.container}>
        <ScrollView horizontal>
          <View style={[styles.card, styles.card1]}>
            <Text style={styles.boldWhite}> Card 1</Text>
          </View>
          <View style={[styles.card, styles.card2]}>
            <Text style={styles.boldWhite}> Card 2</Text>
          </View>
          <View style={[styles.card, styles.card3]}>
            <Text style={styles.boldWhite}> Card 3</Text>
          </View>
          <View style={[styles.card, styles.card4]}>
            <Text> Card 4</Text>
          </View>
          <View style={[styles.card, styles.card1]}>
            <Text style={styles.boldWhite}> Card 5</Text>
          </View>
          <View style={[styles.card, styles.card2]}>
            <Text style={styles.boldWhite}> Card 6</Text>
          </View>
          <View style={[styles.card, styles.card3]}>
            <Text style={styles.boldWhite}> Card 7</Text>
          </View>
          <View style={[styles.card, styles.card4]}>
            <Text> Card 8</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    margin: 5,
    padding: 5,
    fontWeight: 'bold',
  },
  container: {
    margin: 5,
    padding: 5,
  },
  card: {
    height: 100,
    width: 100,
    margin: 5,
    padding: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    elevation: 5,
    shadowOffset: {
      height: 1,
      width: 2,
    },
    shadowColor: '#123456',
  },
  card1: {
    backgroundColor: 'red',
  },
  card2: {
    backgroundColor: 'blue',
  },
  card3: {
    backgroundColor: 'green',
  },
  card4: {
    backgroundColor: 'yellow',
  },
  boldWhite: {
    fontSize: 18,
    color: '#ffffff',
  },
});
