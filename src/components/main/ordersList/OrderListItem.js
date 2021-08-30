import React from 'react'
import { View, Text, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import CartItem from '../cart/CartItem';

const OrderListItem = ({ route }) => {
    const DATA = route.params.item;
    return (
        <View>
            <Text>Заказ № {DATA.id}</Text>
            <Text>Адрес доставки: {DATA.address}</Text>
            <Text>Дата доставки: {DATA.deliveryDate}</Text>
            <Text>Тип оплаты:{DATA.paymentType}</Text>
            <Text>Комментарий: {DATA.comment}</Text>
            <Text>Статус заказа: {DATA.status}</Text>
            <FlatList
                data={DATA.items}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (<CartItem item={item} />)}
            />
            <Text>Общая сумма: {DATA.cost}</Text>
        </View>
    )
}

export default OrderListItem
