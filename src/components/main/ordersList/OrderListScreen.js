import React, { useState } from 'react'
import { ScrollView, FlatList, View, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
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
            <View style={[{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20, }]}>
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
            {
                toggleOrderStatus === 'actual' ? <FlatList
                    data={DATA.filter(elem => { return (elem.status == 'Оформляется' || elem.status == 'Готовим' || elem.status == 'Доставляем') })}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (< OrderList item={item} />)}
                    ListEmptyComponent={<EmptyFlatList />}
                />
                    : <FlatList
                        data={DATA.filter(elem => { return elem.status == 'Доставлен' })}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (< OrderList item={item} />)}
                        ListEmptyComponent={<EmptyFlatList />}
                    />
            }
            <TouchableOpacity onPress={() => exit()}>
                <Text>EXIT</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

export default OrderListScreen