import React, { useState } from 'react'
import { StyleSheet, ScrollView, TextInput, Text, View, TouchableOpacity, FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

//Firebase DB
import { db, firebase } from '../../../../firebase'

//Icons
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

//Components
import CartItem from './CartItem'
import RadioButton from '../../reusable/RadioButton'
import OrderConfirmSelectTime from './OrderConfirmSections'



const OrderConfirm = ({ navigation }) => {
    const totalOrderSum = useSelector(state => state.cart.totalOrderSum);
    const DATA = useSelector(state => state.cart.userCart);
    const currentUser = useSelector(state => state.user.currentUser);
    const paymentType = useSelector(state => state.order.paymentType)
    const type = {
        cash: "Наличными",
        card: "Картой",
        now: "Ближайшее",
        later: "Позже",
    }
    const [street, setStreet] = useState("")
    const [home, setHome] = useState("")
    const [apartment, setApartment] = useState("")
    const [porch, setPorch] = useState("")
    const [floor, setFloor] = useState("")
    const [comment, setComment] = useState("")

    const createOrder = () => {
        const order = {
            id: Math.floor(Math.random() * 10000 + 1),
            uid: firebase.auth().currentUser.uid,
            userName: currentUser.name,
            userPhone: currentUser.phone,
            items: DATA.map((item) => {
                return {
                    title: item.title,
                    price: item.price,
                    link: item.link,
                }
            }),
            address: street + "-" + home + " квартира " + apartment + " подъезд " + porch + " этаж " + floor,
            comment: comment,
            paymentType: paymentType,
            cost: totalOrderSum,
            orderAcceptDate: getDate(),
            deliveryDate: getDate(),
            status: "Оформляется"
        }
        db.collection("orders").doc().set(order)
        clearCart()
        navigation.navigate("OrderConfirmAccepted", { orderId: order.id, deliveryDate: order.deliveryDate })
    }

    const getDate = () => {
        const date = new Date()
        let day = date.getDate()
        let month = date.getMonth() + 1
        let year = date.getFullYear()
        if (day < 10) {
            day = "0" + day
        }
        if (month <= 10) {
            month = "0" + month
        }
        return (day + "/" + month + "/" + year)
    }

    const dispatch = useDispatch();

    const togglePaymentType = (item) => {
        dispatch({ type: "TOGGLE_PAYMENT_TYPE", payload: item })
    }
    const toggleDeliveryType = (item) => {
        dispatch({ type: "TOGGLE_DELIVERY_TYPE", payload: item })
    }
    const clearCart = () => {
        dispatch({ type: "CLEAR_CART" })
    }


    return (
        <ScrollView style={styles.container}>
            <View style={styles.subtitleContainer}>
                <Ionicons
                    style={styles.icon}
                    name="location-sharp"
                    color="red"
                    size={26} />
                <Text style={styles.confirmSubtitle}>
                    Куда
                </Text>
            </View>
            <Text style={styles.inputLabel}>
                Улица
            </Text>
            <TextInput
                style={styles.input}
                onChange={(e) => {
                    setStreet(e.target.value)
                }} />
            <Text
                style={styles.inputLabel}>
                Дом
            </Text>
            <TextInput
                style={styles.input}
                onChange={(e) => {
                    setHome(e.target.value)
                }} />

            <Text
                style={styles.inputLabel}>
                Подъезд
            </Text>
            <TextInput
                style={styles.input}
                onChange={(e) => {
                    setPorch(e.target.value)
                }} />

            <Text
                style={styles.inputLabel}>
                Этаж
            </Text>
            <TextInput
                style={styles.input}
                onChange={(e) => {
                    setFloor(e.target.value)
                }} />

            <Text
                style={styles.inputLabel}>
                Квартира
            </Text>
            <TextInput
                style={styles.input}
                onChange={(e) => {
                    setApartment(e.target.value)
                }} />
            <View style={styles.subtitleContainer}>
                <MaterialCommunityIcons
                    style={styles.icon}
                    name="clock-time-four"
                    color="#11bd0d"
                    size={26} />
                <Text style={styles.confirmSubtitle}>
                    Когда
                </Text>
            </View>
            {/*             <TouchableOpacity
                style={styles.radioButton}
                onPress={() => { toggleDeliveryType(type.now) }}>
                <RadioButton type="Ближайшее" radioType="delivery" />
                <Text style={styles.paymentType}>
                    Как можно скорее
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.radioButton}
                onPress={() => { toggleDeliveryType(type.later) }}>
                <RadioButton type="Позже" radioType="delivery" />
                <Text style={styles.paymentType}>
                    На точное время
                </Text>
            </TouchableOpacity> */}
            <OrderConfirmSelectTime />
            <View style={styles.subtitleContainer}>
                <MaterialCommunityIcons
                    style={styles.icon}
                    name="glasses"
                    size={30} />
                <Text style={styles.confirmSubtitle}>
                    Ваши данные
                </Text>
            </View>
            <Text style={styles.inputLabel}>
                Имя
            </Text>
            <TextInput
                value={currentUser.name}
                style={styles.input} />
            <Text style={styles.inputLabel}>
                Телефон
            </Text>
            <TextInput
                value={currentUser.phone}
                style={styles.input} />
            <View style={styles.subtitleContainer}>
                <MaterialCommunityIcons
                    style={styles.icon}
                    name="microphone"
                    color="#ff9711"
                    size={30} />
                <Text style={styles.confirmSubtitle}>Комментарий</Text>
            </View>
            <TextInput
                onChange={(e) => {
                    setComment(e.target.value)
                }}
                style={styles.commentTextArea}
                numberOfLines={4}
                multiline
            />
            <View style={styles.subtitleContainer}>
                <Text style={styles.confirmSubtitle}>Убедитесь в правильности выбранных товаров
                </Text>
            </View>
            <FlatList
                data={DATA}
                keyExtractor={(item, index) => item.id.toString()}
                renderItem={({ item }) => (<CartItem item={item} />)}
            />
            <Text style={[styles.confirmSubtitle, { alignSelf: 'flex-start' }]}>
                = К оплате: {totalOrderSum} Р
            </Text>
            <View style={styles.subtitleContainer}>
                <Text style={styles.confirmSubtitle}>
                    Выберите вариант оплаты
                </Text>
            </View>
            <TouchableOpacity
                style={styles.radioButton}
                onPress={() => { togglePaymentType(type.cash) }}>
                <RadioButton type="Наличными" radioType="payment" />
                <Text style={styles.paymentType}>
                    Наличными
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.radioButton}
                onPress={() => { togglePaymentType(type.card) }}>
                <RadioButton
                    type="Картой" radioType="payment" />
                <Text style={styles.paymentType}>
                    Картой при получении
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.card__button}
                onPress={() => { createOrder({ DATA }) }}
            >
                <Text style={styles.card__buttonText}>Оформить заказ →</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 5,
        flexDirection: 'column',
    },
    subtitleContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 20,
    },
    confirmSubtitle: {
        fontSize: 28,
        textAlign: "center",
        alignSelf: "center",
    },
    input: {
        fontSize: 18,
        paddingHorizontal: 10,
        backgroundColor: "#fff",
        marginBottom: 20,
        borderWidth: 1,
        borderColor: "#ddd",
        borderStyle: "solid",
        borderRadius: 10,
    },
    inputLabel: {
        fontSize: 18,
    },
    icon: {
        paddingTop: 5,
        marginRight: 5,
    },
    radioButton: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 15,
    },
    commentTextArea: {
        padding: 10,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#ddd",
        borderStyle: "solid",
        borderRadius: 5,
    },
    paymentType: {
        fontSize: 17,
        marginLeft: 8,
    },
    card__button: {
        backgroundColor: "#FFC000",
        paddingVertical: 20,
        borderRadius: 10,
        marginVertical: 30,
    },
    card__buttonText: {
        fontWeight: "400",
        fontSize: 28,
        textAlign: "center",
    },
});

export default OrderConfirm
