import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//Firebase
import { firebase } from '../../firebase';

//Navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Icons
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

//Fetch Functions
import { fetchUserInfo, fetchOrders, fetchSlider, fetchProduct, fetchCart } from '../functions/FetchData';

//Components
import OrderListScreen from './main/ordersList/OrderListScreen';
import MenuScreen from './main/menu/MenuScreen'
import CartScreen from './main/cart/CartScreen';

const Tab = createBottomTabNavigator();

const Main = () => {
    const dispatch = useDispatch();
    const currentUser = firebase.auth().currentUser
    const [fetch, setFetch] = useState(false)

    useEffect(() => {
        if (!fetch) {
            fetchUserInfo(dispatch, currentUser)
            fetchOrders(dispatch, currentUser)
            fetchSlider(dispatch)
            fetchProduct(dispatch)
            fetchCart(dispatch, currentUser)
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

export default Main