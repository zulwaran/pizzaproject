import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

//Firebase
import { firebase } from '../../firebase'

//Navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

//Icons
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

//Fetch Functions
import { fetchUserInfo, fetchOrders, fetchSlider, fetchProduct, fetchCart } from '../functions/FetchData'

//Components
import OrderListContainer from './main/ordersList/OrderListContainer'
import MenuScreenContainer from './main/menu/MenuScreenContainer'
import CartScreenContainer from './main/cart/CartScreenContainer'

const Tab = createBottomTabNavigator()

const Main = () => {
  const dispatch = useDispatch()
  const currentUser = firebase.auth().currentUser

  useEffect(() => {
    fetchUserInfo(dispatch, currentUser)
    fetchOrders(dispatch, currentUser)
    fetchSlider(dispatch)
    fetchProduct(dispatch)
    fetchCart(dispatch, currentUser)
  }, [])

  const itemsInCart = useSelector(state => state.cart.itemsInCart)
  return (
    <Tab.Navigator initialRouteName="MenuScreenContainer">
      <Tab.Screen
        name="OrderListContainer"
        component={OrderListContainer}
        options={{
          tabBarLabel: 'Список заказов',
          headerShown: false,
          tabBarIcon: ({ color, size }) => <FontAwesome5 name="list" color={color} size={26} />
        }}
      />
      <Tab.Screen
        name="MenuScreenContainer"
        component={MenuScreenContainer}
        options={{
          tabBarLabel: 'Меню',
          headerShown: false,
          tabBarIcon: ({ color, size }) => <FontAwesome5 name="pizza-slice" color={color} size={26} />
        }}
      />
      <Tab.Screen
        name="CartScreenContainer"
        component={CartScreenContainer}
        options={{
          tabBarLabel: 'Корзина',
          headerShown: false,
          tabBarBadge: itemsInCart,
          tabBarIcon: ({ color, size }) => <FontAwesome5 name="shopping-cart" color={color} size={26} />
        }}
      />
    </Tab.Navigator>
  )
}

export default Main
