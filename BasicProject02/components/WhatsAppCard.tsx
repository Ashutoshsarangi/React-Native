import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';

export default function WhatsAppCard() {
  const contacts = [
    {
      id: 111,
      name: 'Ashutosh Sarangi',
      status: 'Eat-Sleep-Repeat',
      imageUrL:
        'https://images.pexels.com/photos/925786/pexels-photo-925786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 112,
      name: 'Anshuman Sarangi',
      status: 'Hello, I am using Whats app',
      imageUrL:
        'https://images.pexels.com/photos/12197337/pexels-photo-12197337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 113,
      name: 'Sonu Sarangi',
      status: 'Heyyy',
      imageUrL:
        'https://images.pexels.com/photos/20264871/pexels-photo-20264871/free-photo-of-young-woman-in-a-white-dress-sitting-on-a-brown-leather-couch-with-a-cup-of-coffee.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 114,
      name: 'Rupa Mishra',
      status: 'Eat Only',
      imageUrL:
        'https://images.pexels.com/photos/19281822/pexels-photo-19281822/free-photo-of-young-woman-with-a-cup-of-coffee-at-a-table-in-a-cafe.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 115,
      name: 'Ashutosh Sarangi',
      status: 'Eat-Sleep-Repeat',
      imageUrL:
        'https://images.pexels.com/photos/925786/pexels-photo-925786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 116,
      name: 'Anshuman Sarangi',
      status: 'Hello, I am using Whats app',
      imageUrL:
        'https://images.pexels.com/photos/12197337/pexels-photo-12197337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 117,
      name: 'Sonu Sarangi',
      status: 'Heyyy',
      imageUrL:
        'https://images.pexels.com/photos/20264871/pexels-photo-20264871/free-photo-of-young-woman-in-a-white-dress-sitting-on-a-brown-leather-couch-with-a-cup-of-coffee.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 118,
      name: 'Rupa Mishra',
      status: 'Eat Only',
      imageUrL:
        'https://images.pexels.com/photos/19281822/pexels-photo-19281822/free-photo-of-young-woman-with-a-cup-of-coffee-at-a-table-in-a-cafe.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>WhatsApp Card</Text>
      <ScrollView horizontal>
        {contacts.map(({id, name, status, imageUrL}) => {
          return (
            <View key={id} style={styles.content}>
              <Image source={{uri: imageUrL}} style={styles.contactImage} />
              <View>
                <Text style={styles.contactName}>{name}</Text>
                <Text>{status}</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
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
  contactContainer: {},
  contactImage: {
    height: 70,
    width: 70,
    borderRadius: 30,
    margin: 8,
    padding: 8,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#8fbdf2',
    shadowOffset: {
      height: 2,
      width: 2,
    },
    shadowColor: '#123456',
    elevation: 4,
    margin: 8,
    padding: 8,
    borderRadius: 5,
  },
  contactName: {
    fontSize: 18,
    fontWeight: '600',
  },
});
