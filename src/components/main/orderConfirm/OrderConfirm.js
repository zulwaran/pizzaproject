import React, { useState } from 'react'
import { StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

//Firebase DB
import { db, firebase } from '../../../../firebase'

//Functions
import { deliveryDate } from '../../../functions/DateFunctions'
import { Order } from '../../../functions/Constructors'
import { ADD_NEW_ORDER } from '../../../reducers/order'
import { CLEAR_CART } from '../../../reducers/cart'

//Components
import AddressSection from './AddressSection'
import TimeSection from './TimeSection'
import UserInfo from './UserInfo'
import CommentSection from './CommentSection'
import PaymentTypeSection from './PaymentTypeSection'
import ProductSection from './ProductSection'

const OrderConfirm = ({ navigation }) => {
    const dispatch = useDispatch();
    const uid = firebase.auth().currentUser.uid
    const totalOrderSum = useSelector(state => state.cart.totalOrderSum);
    const DATA = useSelector(state => state.cart.userCart);

    //Address
    const street = useSelector(state => state.order.street)
    const home = useSelector(state => state.order.home)
    const apartment = useSelector(state => state.order.apartment)
    const porch = useSelector(state => state.order.porch)
    const floor = useSelector(state => state.order.floor)

    //Payment Type
    const paymentType = useSelector(state => state.order.paymentType)

    //Time
    const deliveryType = useSelector(state => state.order.deliveryType)
    const deliveryDay = useSelector(state => state.order.deliveryDay)
    const deliveryTime = useSelector(state => state.order.deliveryTime)

    //Comment
    const comment = useSelector(state => state.order.comment)

    //User Info
    const name = useSelector(state => state.user.name)
    const phone = useSelector(state => state.user.phone)

    const [validation, setValidation] = useState("")

    const type = {
        cash: "Наличными",
        card: "Картой",
        now: "Ближайшее",
        later: "Позже",
    }
    const createOrder = () => {
        if (!street || !home || !name || !phone || (deliveryType !== 'Ближайшее' && !deliveryTime)) {
            setValidation('Не все обязательные поля были заполнены')
            return
        }

        let address = street + "-" + home + " квартира " + apartment + " подъезд " + porch + " этаж " + floor

        let order = new Order(uid, name, phone, DATA, address, comment, paymentType, totalOrderSum, deliveryDate(deliveryDay, deliveryTime))

        db.collection("orders").doc().set(Object.assign({}, order))
        addNewOrder(order)
        clearCart()
        navigation.navigate("OrderConfirmAccepted", { orderId: order.id, deliveryDate: order.deliveryDate })
    }

    const addNewOrder = (item) => {
        dispatch({ type: ADD_NEW_ORDER, payload: item })
    }
    const clearCart = () => {
        dispatch({ type: CLEAR_CART })
    }


    return (
        <ScrollView style={styles.container}>
            <AddressSection />
            <TimeSection />
            <UserInfo />
            <CommentSection />
            <ProductSection />
            <PaymentTypeSection />
            <TouchableOpacity
                disabled={totalOrderSum < 350 ? true : false}
                style={totalOrderSum < 350 ? [styles.card__button, { backgroundColor: '#767976' }] : styles.card__button}
                onPress={() => { createOrder({ DATA }) }}>
                {
                    totalOrderSum < 350 ?
                        <Text style={styles.card__buttonText, [{ fontSize: 18, textAlign: 'center' }]}>Сумма заказа должна быть не менее 350 Р</Text>
                        :
                        <Text style={styles.card__buttonText}>Оформить заказ →</Text>
                }
            </TouchableOpacity>
            {
                validation ?
                    <Text style={[{ color: 'red', fontSize: 16, marginBottom: 30 }]}>{validation}</Text>
                    : null
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 5,
        flexDirection: 'column',
    },
    card__button: {
        backgroundColor: "#FFC000",
        padding: 20,
        borderRadius: 10,
        marginVertical: 10,
    },
    card__buttonText: {
        fontWeight: "400",
        fontSize: 28,
        textAlign: "center",
    },
});

export default OrderConfirm
