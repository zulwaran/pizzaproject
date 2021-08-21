import React from 'react';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'


import ProfileScreen from './main/ProfileScreen';
import MenuScreen from './main/MenuScreen'
import CartScreen from './main/CartScreen';

const Tab = createBottomTabNavigator();

const Main = () => {
    let itemsInCart = useSelector(state => state.cart.itemsInCart);
    if (itemsInCart === 0) {
        itemsInCart = null
    }
    return (
        <Tab.Navigator initialRouteName="MenuScreen">
            <Tab.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={{
                    tabBarLabel: "Профиль",
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