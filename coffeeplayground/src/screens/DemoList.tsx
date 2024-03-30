import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, SafeAreaView, FlatList} from 'react-native';
import ProductCard from '../components/Product/ProductCard';
import ProductSeparator from '../components/Product/ProductSeparator';

export default function DemoList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch('https://dummyjson.com/products');
      const result = await res.json();
      console.warn('Result');
      setProducts(result.products);
    })();
  }, []);

  const pullRefreshHandler = () => {};
  const infiniteLoadHandler = () => {};

  return (
    <FlatList
      data={products}
      renderItem={({item}) => <ProductCard item={item} />}
      keyExtractor={item => item.id}
      ItemSeparatorComponent={ProductSeparator}
      onRefresh={pullRefreshHandler}
      refreshing={false}
      onEndReachedThreshold={0.2}
      onEndReached={infiniteLoadHandler}
    />
  );
}

const styles = StyleSheet.create({});
