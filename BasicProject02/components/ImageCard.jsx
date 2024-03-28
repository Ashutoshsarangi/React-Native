import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ImageCard() {
  return (
    <View>
      <Text style={styles.headingText}>Image Card</Text>
      <View style={styles.card}>
        <Image
          style={styles.imageContainer}
          source={{
            uri: 'https://images.pexels.com/photos/20365021/pexels-photo-20365021/free-photo-of-a-woman-holding-a-tote-bag-with-white-tulips.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          }}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Flower Title</Text>
          <Text style={styles.cardSubTitle}>Flower Sub Title</Text>
          <Text style={styles.cardDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            ut, odit doloremque officiis ea eveniet necessitatibus. Doloremque,
            maiores, asperiores temporibus repellat quibusdam quos sint a quasi
            accusamus eos eum ipsum?
          </Text>
        </View>
        <View style={styles.cartFooter}>
          <Text style={{fontWeight: 'bold'}}>12KM Away</Text>
        </View>
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
  card: {
    backgroundColor: '#ebe2e1',
    margin: 5,
    padding: 5,
    elevation: 4,
    borderRadius: 5,
    marginBottom: 30,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowColor: '#123456',
  },
  imageContainer: {
    height: 300,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  cardBody: {
    margin: 5,
    padding: 5,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  cardSubTitle: {},
  cardDescription: {
    fontWeight: 'bold',
  },
  cartFooter: {
    flex: 1,
    alignItems: 'flex-end',
  },
});
