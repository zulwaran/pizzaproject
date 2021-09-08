import React, { useState } from 'react'
import { ScrollView, FlatList, View, Text, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

//Firebase
import firebase from 'firebase';

//Components
import EmptyFlatList from '../../reusable/EmptyFlatList';
import OrderList from './OrderList';

//Styles
import { text } from '../../../../assets/styles/text';
import { buttons } from '../../../../assets/styles/buttons';
import { container } from '../../../../assets/styles/container';


const OrderListScreen = () => {
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
            <View style={container.OrderListContainer}>
                <TouchableOpacity
                    onPress={() => setToggleOrderStatus('actual')}>
                    <Text
                        style={toggleOrderStatus === 'actual' ? text.orderListMenuActive : text.orderListMenu
                        }>
                        Текущие заказы
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setToggleOrderStatus('history')}>
                    <Text style={toggleOrderStatus === 'history' ? text.orderListMenuActive : text.orderListMenu
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
                style={buttons.confirm__button}
                onPress={() => exit()}>
                <Text style={text.exitButtonText}>Выйти из профиля</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

export default OrderListScreen