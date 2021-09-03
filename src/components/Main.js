import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { firebase, db } from '../../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import OrderListScreen from './main/ordersList/OrderListScreen';
import MenuScreen from './main/menu/MenuScreen'
import CartScreen from './main/cart/CartScreen';

const Tab = createBottomTabNavigator();

const Main = () => {
    const dispatch = useDispatch();
    const currentUser = firebase.auth().currentUser

    const fetchUserInfo = async () => {
        const userRef = db.collection('users').doc(currentUser.uid);
        const doc = await userRef.get();
        dispatch({ type: "GET_USER_INFO", payload: doc.data() })
    }

    const fetchOrders = () => {
        db.collection('orders').where("uid", "==", currentUser.uid).get().then((querySnapshot) => {
            let orderList = []
            querySnapshot.forEach((doc) => {
                orderList = [...orderList, doc.data()]
            })
            dispatch({ type: "GET_ORDER_LIST", payload: orderList })
        })
    }
    const fetchSlider = () => {
        db.collection('slider').get().then((querySnapshot) => {
            let sliderList = []
            querySnapshot.forEach((doc) => {
                sliderList = [...sliderList, doc.data()]
            })
            dispatch({ type: "FETCH_SLIDER_ITEMS", payload: sliderList })
        })
    }

    const fetchProduct = () => {
        db.collection('products').get().then((querySnapshot) => {
            let productList = []
            querySnapshot.forEach((doc) => {
                productList = [...productList, doc.data()]
            })
            dispatch({ type: "FETCH_PRODUCT_LIST", payload: productList })
        })
    }

    const fetchCart = () => {
        db.collection('cart').where("uid", "==", currentUser.uid).get().then((querySnapshot) => {
            let cartList = []
            querySnapshot.forEach((doc) => {
                cartList = doc.data()
            })
            if (cartList.items) {
                dispatch({ type: "FETCH_CART", payload: cartList })
            }
        })
    }
    const [fetch, setFetch] = useState(false)
    useEffect(() => {
        if (!fetch) {
            fetchUserInfo()
            fetchOrders()
            fetchSlider()
            fetchProduct()
            fetchCart()
            setFetch(true)
        }
    })


    const itemsInCart = useSelector(state => state.cart.itemsInCart);
    return (
        <Tab.Navigator initialRouteName="MenuScreen">
            <Tab.Screen
                name="OrderListScreen"
                component={OrderListScreen}
                options={{
                    tabBarLabel: "Список заказов",
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (<FontAwesome5 name="list"
                        color={color}
                        size={26}
                    />)
                }}
            />
            <Tab.Screen
                name="MenuScreen"
                component={MenuScreen}
                options={{
                    tabBarLabel: "Меню",
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (<FontAwesome5 name="pizza-slice"
                        color={color}
                        size={26}
                    />)
                }}
            />
            <Tab.Screen
                name="CartScreen"
                component={CartScreen}
                options={{
                    tabBarLabel: "Корзина",
                    headerShown: false,
                    tabBarBadge: itemsInCart,
                    tabBarIcon: ({ color, size }) => (<FontAwesome5 name="shopping-cart"
                        color={color}
                        size={26}
                    />)
                }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({});

export default Main