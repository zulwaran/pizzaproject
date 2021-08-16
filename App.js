import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ProductList from './components/ProductList';
import Header from './components/Header';
import SliderMenu from './components/SliderMenu';

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <SliderMenu />
      <ProductList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App
