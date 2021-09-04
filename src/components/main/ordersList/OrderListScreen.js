import React, { useState } from 'react'
import { StyleSheet, ScrollView, FlatList, View, Text, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux';
import EmptyFlatList from '../../reusable/EmptyFlatList';
import OrderList from './OrderList';

import firebase from 'firebase';



const OrderListScreen = ({ navigation }) => {
    const [toggleOrderStatus, setToggleOrderStatus] = useState('actual')
    const DATA = useSelector(state => state.order.orderList);

    const exit = () => {
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }


    return (
        <ScrollView>
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => setToggleOrderStatus('actual')}>
                    <Text
                        style={toggleOrderStatus === 'actual' ? styles.menuActive : styles.menu
                        }>
                        Текущие заказы
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setToggleOrderStatus('history')}>
                    <Text style={toggleOrderStatus === 'history' ? styles.menuActive : styles.menu
                    }>
                        История заказов
                    </Text>
                </TouchableOpacity>
            </View>
            {
                toggleOrderStatus === 'actual' ?
                    <FlatList
                        data={DATA.filter(elem => { return (elem.status == 'Оформляется' || elem.status == 'Готовим' || elem.status == 'Везем') })}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (< OrderList item={item} />)}
                        ListEmptyComponent={<EmptyFlatList />}
                    />
                    :
                    <FlatList
                        data={DATA.filter(elem => { return elem.status == 'Доставлен' })}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (< OrderList item={item} />)}
                        ListEmptyComponent={<EmptyFlatList />}
                    />
            }
            <TouchableOpacity
                style={styles.button}
                onPress={() => exit()}>
                <Text style={styles.textButton}>Выйти из профиля</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20
    },
    menu: {
        fontSize: 20,
        padding: 10,
        opacity: 0.3
    },
    menuActive: {
        fontSize: 20,
        borderBottomColor: '#ffc000',
        padding: 10,
        borderBottomWidth: 1,
    },
    button: {
        backgroundColor: "#FFC000",
        padding: 20,
        borderRadius: 10,
        marginVertical: 10,
    },
    textButton: {
        textAlign: 'center',
        fontSize: 16
    },
})
export default OrderListScreen