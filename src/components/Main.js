import React, { useEffect } from 'react';
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

    const fetchUserInfo = async () => {
        const currentUser = firebase.auth().currentUser
        const userRef = db.collection('users').doc(currentUser.uid);
        const doc = await userRef.get();
        dispatch({ type: "GET_USER_INFO", payload: doc.data() })
    }

    useEffect(() => {
        fetchUserInfo()
    })


    let itemsInCart = useSelector(state => state.cart.itemsInCart);
    return (
        <Tab.Navigator initialRouteName="MenuScreen">
            <Tab.Screen
                name="OrderListScreen"
                component={OrderListScreen}
                options={{
                    tabBarLabel: "Список заказов",
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (<FontAwesome5 name="user-circle"
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