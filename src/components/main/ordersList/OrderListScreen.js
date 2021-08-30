import React, { useEffect } from 'react'
import { ScrollView, FlatList, View, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { firebase, db } from '../../../../firebase';
import OrderList from './OrderList';


const OrderListScreen = ({ navigation }) => {
    const user = firebase.auth().currentUser;
    const DATA = useSelector(state => state.order.orderList);
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
            <Text style={[{ textAlign: "center", fontSize: 32, fontWeight: "600", marginVertical: 20 }]}>История заказов</Text>
            <View style={[{ display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center", height: 50, backgroundColor: "red", marginBottom: 10 }]}>
                <Text style={[{ width: "33%", textAlign: "center", fontSize: 16 }]}>Номер заказа:</Text>
                <Text style={[{ width: "33%", textAlign: "center", fontSize: 16 }]}>Дата:</Text>
                <Text style={[{ width: "33%", textAlign: "center", fontSize: 16 }]}>Сумма:</Text>
            </View>
            <FlatList
                data={DATA}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (<OrderList item={item} navigation={navigation} />)}
            />
        </ScrollView>
    )
}

export default OrderListScreen