import React from 'react'
import { View, Text, FlatList } from 'react-native';
import OrderListItem from './OrderListItem';

const OrderList = ({ item }) => {
    console.log(item.items);
    return (
        <View>
            <FlatList
                data={item.items}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (<OrderListItem item={item} />)}
            />
        </View>
    )
}

export default OrderList
