import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ProductCard = ({item}) => {
  const {title, category, description} = item;
  return (
    <View>
      <Text>{title}</Text>
      <Text>{category}</Text>
      <Text>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ProductCard;
