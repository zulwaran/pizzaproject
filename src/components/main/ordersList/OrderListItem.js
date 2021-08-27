import React from 'react'
import { View, Text } from 'react-native';

const OrderListItem = ({ item }) => {
    return (
        <View>
            <Text>{item.title}</Text>
            <Text>{item.price}</Text>
        </View>
    )
}

export default OrderListItem
