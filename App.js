import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

//LogBox
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Setting a timer', 'VirtualizedLists should never be nested']);

//Firebase
import { firebase } from './firebase'

//React-Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator()

//React-redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './src/reducers'
import thunk from 'redux-thunk';
const store = createStore(rootReducer, applyMiddleware(thunk))

//Components
import AuthScreen from './src/components/auth/AuthScreen';
import RegisterScreen from './src/components/auth/RegisterScreen';
import Main from './src/components/Main';
import Header from './src/components/Header';
import OrderConfirm from './src/components/main/orderConfirm/OrderConfirm';
import OrderConfirmAccepted from './src/components/main/orderConfirm/OrderConfirmAccepted'


const App = () => {
  const [loaded, setLoaded] = useState(false)
  const [loggedIn, setloggedIn] = useState(false)
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        setloggedIn(false)
        setLoaded(true)
      } else {
        setloggedIn(true)
        setLoaded(true)
      }
    })
  })

  if (!loaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  if (!loggedIn) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="AuthScreen"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#ffc000',
            },
            headerTintColor: '#000',
          }}>
          <Stack.Screen
            name="AuthScreen"
            component={AuthScreen}
            options={{
              headerTitle: () => <Header />
            }} />
          <Stack.Screen
            name="RegisterScreen"
            component={RegisterScreen}
            options={{
              title: "Регистрация",
            }} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  } else {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Main"
            screenOptions={{
              headerStyle: {
                backgroundColor: '#ffc000',
              },
              headerTintColor: '#000',
            }}>
            <Stack.Screen
              name="Main"
              component={Main}
              options={{
                headerTitle: () => <Header />
              }} />
            <Stack.Screen
              name="OrderConfirm"
              options={{
                title: "Оформление заказа",
              }}
              component={OrderConfirm} />
            <Stack.Screen
              name="OrderConfirmAccepted"
              options={{
                headerLeft: null,
                headerTitle: () => <Header />
              }}
              component={OrderConfirmAccepted} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App
