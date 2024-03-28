import {Image, Pressable, StyleSheet, Text, View, Linking} from 'react-native';
import React from 'react';

export default function BlogCard() {
  const handleReadMore = () => {
    Linking.openURL('https://www.google.com/');
  };

  const handleFollowMe = () => {
    Linking.openURL('https://www.youtube.com/');
  };

  return (
    <View>
      <Text style={styles.headingText}>BlogCard</Text>
      <View style={styles.blogCardContainer}>
        <View style={styles.cardHeader}>
          <Text style={styles.blogTitle}> This is a Header</Text>
        </View>
        <View style={styles.cardBody}>
          <Image
            style={styles.blogImage}
            source={{
              uri: 'https://images.pexels.com/photos/9130793/pexels-photo-9130793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            }}
          />
          <Text style={styles.blogContent} numberOfLines={3}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
            itaque minus iure sequi cupiditate eveniet. Illum, ipsum. Non,
            nostrum soluta laborum aperiam doloremque exercitationem et cumque
            blanditiis unde, laboriosam ad.
          </Text>
        </View>
        <View style={styles.cardFooter}>
          <Pressable style={styles.btnContainer} onPress={handleReadMore}>
            <Text style={styles.button}>Read More</Text>
          </Pressable>
          <Pressable style={styles.btnContainer} onPress={handleFollowMe}>
            <Text style={styles.button}>Follow Me</Text>
          </Pressable>
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
  blogCardContainer: {
    height: 380,
    backgroundColor: '#66cff2',
    margin: 8,
    padding: 8,
    borderRadius: 5,
    elevation: 4,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowColor: '#123456',
  },
  cardHeader: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blogTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#ffffff',
  },
  cardBody: {},
  cardFooter: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  blogImage: {
    height: 200,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  blogContent: {
    paddingVertical: 5,
  },
  btnContainer: {
    backgroundColor: '#b6f2ea',
    padding: 5,
    margin: 5,
    borderRadius: 5,
    elevation: 4,
  },
  button: {
    fontSize: 20,
    color: '#ffffff',
  },
});
