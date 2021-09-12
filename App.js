import React, { useEffect, useState } from 'react'
import { View, ActivityIndicator } from 'react-native'

//LogBox
import { LogBox } from 'react-native'
LogBox.ignoreLogs(['Setting a timer', 'VirtualizedLists should never be nested'])

//Firebase
import { firebase } from './firebase'

//React-Navigation
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
const Stack = createStackNavigator()

//React-redux
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './src/reducers'
import thunk from 'redux-thunk'
const store = createStore(rootReducer, applyMiddleware(thunk))

//Components
import AuthContainer from './src/components/auth/AuthContainer'
import RegisterContainer from './src/components/auth/RegisterContainer'
import Main from './src/components/Main'
import Header from './src/components/Header'
import OrderConfirmContainer from './src/components/orderConfirm/OrderConfirmContainer'
import OrderConfirmAccepted from './src/components/orderConfirm/OrderConfirmAccepted'

//Styles
import { BLACK_COLOR, PRIMARY_COLOR } from './assets/styles/common.style'

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        setIsLoggedIn(false)
        setIsLoaded(true)
      } else {
        setIsLoggedIn(true)
        setIsLoaded(true)
      }
    })
  })

  if (!isLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  if (!isLoggedIn) {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="AuthContainer"
          screenOptions={{
            headerStyle: {
              backgroundColor: PRIMARY_COLOR
            },
            headerTintColor: BLACK_COLOR
          }}
        >
          <Stack.Screen
            name="AuthContainer"
            component={AuthContainer}
            options={{
              headerTitle: () => <Header />
            }}
          />
          <Stack.Screen
            name="RegisterContainer"
            component={RegisterContainer}
            options={{
              title: 'Регистрация'
            }}
          />
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
                backgroundColor: PRIMARY_COLOR
              },
              headerTintColor: BLACK_COLOR
            }}
          >
            <Stack.Screen
              name="Main"
              component={Main}
              options={{
                headerTitle: () => <Header />
              }}
            />
            <Stack.Screen
              name="OrderConfirmContainer"
              options={{
                title: 'Оформление заказа'
              }}
              component={OrderConfirmContainer}
            />
            <Stack.Screen
              name="OrderConfirmAccepted"
              options={{
                headerLeft: null,
                headerTitle: () => <Header />
              }}
              component={OrderConfirmAccepted}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    )
  }
}

export default App
