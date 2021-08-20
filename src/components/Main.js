import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'


import ProfileScreen from './main/ProfileScreen';
import MenuScreen from './main/MenuScreen'
import CartScreen from './main/CartScreen';
const Tab = createBottomTabNavigator();

const Main = () => {
    return (
        <Tab.Navigator initialRouteName="Меню">
            <Tab.Screen
                name="Профиль"
                component={ProfileScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (<FontAwesome5 name="user-circle"
                        color={color}
                        size={26}
                    />)
                }}
            />
            <Tab.Screen
                name="Меню"
                component={MenuScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (<FontAwesome5 name="pizza-slice"
                        color={color}
                        size={26}
                    />)
                }}
            />
            <Tab.Screen
                name="Корзина"
                component={CartScreen}
                options={{
                    headerShown: false,
                    tabBarBadge: 3,
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