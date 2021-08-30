import React from 'react'
import { Text, TouchableOpacity } from 'react-native';

const OrderList = ({ item, navigation }) => {
    const goTo = () => {
        navigation.navigate("OrderListItem", { item })
    }
    return (
        <TouchableOpacity
            onPress={() => goTo()}
            style={[{ display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center", height: 50, backgroundColor: "green", marginBottom: 10 }]}>
            <Text style={[{ width: "33%", textAlign: "center" }]}>
                {item.id}
            </Text>
            <Text style={[{ width: "33%", textAlign: "center" }]}>
                {item.orderAcceptDate}
            </Text>
            <Text style={[{ width: "33%", textAlign: "center" }]}>
                {item.cost}
            </Text>
        </TouchableOpacity>
    )
}

export default OrderList
