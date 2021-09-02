import React, { useEffect, useState } from 'react'
import { ScrollView, FlatList, View, Text, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { firebase, db } from '../../../../firebase';
import EmptyFlatList from '../../reusable/EmptyFlatList';
import OrderList from './OrderList';


const OrderListScreen = ({ navigation }) => {
    const [toggleOrderStatus, setToggleOrderStatus] = useState('history')
    const user = firebase.auth().currentUser;
    const DATA = useSelector(state => state.order.orderList);
    const F = [];
    const dispatch = useDispatch();
    const fetchOrders = () => {
        db.collection('orders').where("uid", "==", user.uid).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                dispatch({ type: "GET_ORDER_LIST", payload: doc.data() })
            })
        })
    }
    useEffect(() => {
        if (DATA === null) {
            fetchOrders()
        }
    })

    return (
        <ScrollView>
            <View style={[{ flexDirection: 'row', justifyContent: 'space-around' }]}>
                <TouchableOpacity
                    onPress={() => setToggleOrderStatus('actual')}>
                    <Text
                        style={toggleOrderStatus === 'actual' ? [{ fontSize: 20, borderBottomColor: '#ffc000', padding: 10, borderBottomWidth: 1, }] : [{ fontSize: 20, padding: 10, opacity: 0.3 }]
                        }>
                        Текущие заказы
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setToggleOrderStatus('history')}>
                    <Text style={toggleOrderStatus === 'history' ? [{ fontSize: 20, borderBottomColor: '#ffc000', padding: 10, borderBottomWidth: 1, }] : [{ fontSize: 20, padding: 10, opacity: 0.3 }]
                    }>
                        История заказов
                    </Text>
                </TouchableOpacity>
            </View>
            <Text style={[{ textAlign: "center", fontSize: 32, fontWeight: "600", marginVertical: 20 }]}>История заказов</Text>
            {
                toggleOrderStatus === 'actual' ? <FlatList
                    data={DATA.filter(elem => { return (elem.status == 'Оформляется' || elem.status == 'Готовим') })}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (< OrderList item={item} />)}
                    ListEmptyComponent={<EmptyFlatList />}
                /> : toggleOrderStatus === 'history' ? <FlatList
                    data={DATA}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (< OrderList item={item} />)}
                    ListEmptyComponent={<EmptyFlatList />}
                /> : null
            }
        </ScrollView>
    )
}

export default OrderListScreen