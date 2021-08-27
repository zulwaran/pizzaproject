import React, { useEffect } from 'react'
import { ScrollView, FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { firebase, db } from '../../../../firebase';
import OrderList from './OrderList';


const OrderListScreen = () => {
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
            <FlatList
                data={DATA}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (<OrderList item={item} />)}
            />
        </ScrollView>
    )
}

export default OrderListScreen