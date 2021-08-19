import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import fb from 'firebase/app'
const firebaseConfig = {
  apiKey: "AIzaSyAVmlCu8_082OlaGTmAJ4ofuLcEbb6byjo",
  authDomain: "pizza-10de4.firebaseapp.com",
  projectId: "pizza-10de4",
  storageBucket: "pizza-10de4.appspot.com",
  messagingSenderId: "361635639916",
  appId: "1:361635639916:web:a05b9e8dd08e5dab045e49"
};
if (fb.apps.length === 0) {
  fb.initializeApp(firebaseConfig)
}
import "firebase/auth";


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './src/reducers'
import thunk from 'redux-thunk';
const store = createStore(rootReducer, applyMiddleware(thunk))

import AuthScreen from './src/components/auth/AuthScreen';
import RegisterScreen from './src/components/auth/RegisterScreen';
import ProductList from './src/components/ProductList';
import Header from './src/components/Header';
import SliderMenu from './src/components/SliderMenu';

const Stack = createStackNavigator()
const App = () => {
  const [loaded, setLoaded] = useState(false)
  const [loggedIn, setloggedIn] = useState(false)

  useEffect(() => {
    fb.auth().onAuthStateChanged((user) => {
      if (!user) {
        console.log('NULL')
        setloggedIn(false)
        setLoaded(true)
      } else {
        console.log(user)
        setloggedIn(true)
        setLoaded(true)
      }
    })
  })
  if (!loaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text>Loading</Text>
      </View>
    )
  }

  if (!loggedIn) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="AuthScreen">
          <Stack.Screen
            name="AuthScreen"
            component={AuthScreen}
            options={{ headerShown: false }} />
          <Stack.Screen
            name="RegisterScreen"
            component={RegisterScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  } else {
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});

export default App
