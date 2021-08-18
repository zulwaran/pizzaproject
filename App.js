import React from 'react';
import { StyleSheet, View } from 'react-native';


import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './src/reducers'
import thunk from 'redux-thunk';
const store = createStore(rootReducer, applyMiddleware(thunk))


import ProductList from './src/components/ProductList';
import Header from './src/components/Header';
import SliderMenu from './src/components/SliderMenu';

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Header />
        <SliderMenu />
        <ProductList />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});

export default App
