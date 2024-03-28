import React from 'react';
import {View, Text, ScrollView, SafeAreaView} from 'react-native';
import BlogCard from './components/BlogCard';
import ElevatedCards from './components/ElevatedCards';
import FlatCards from './components/FlatCards';
import ImageCard from './components/ImageCard';
import WhatsAppCard from './components/WhatsAppCard';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />

        <ImageCard />
        <WhatsAppCard />
        <ElevatedCards />
        <BlogCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
