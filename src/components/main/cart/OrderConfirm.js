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
import OrderConfirmSelectTime from './OrderConfirmSelectTime'



const OrderConfirm = ({ navigation }) => {
    const currentUser = useSelector(state => state.user.currentUser);
    const totalOrderSum = useSelector(state => state.cart.totalOrderSum);
    const DATA = useSelector(state => state.cart.userCart);
    const paymentType = useSelector(state => state.order.paymentType)
    const deliveryType = useSelector(state => state.order.deliveryType)
    const deliveryDay = useSelector(state => state.order.deliveryDay)
    const deliveryTime = useSelector(state => state.order.deliveryTime)


    const [street, setStreet] = useState("")
    const [home, setHome] = useState("")
    const [apartment, setApartment] = useState("")
    const [porch, setPorch] = useState("")
    const [floor, setFloor] = useState("")
    const [comment, setComment] = useState("")
    const [name, setName] = useState(currentUser.name)
    const [phone, setPhone] = useState(currentUser.phone)
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
        const order = {
            id: Math.floor(Math.random() * 10000 + 1),
            uid: firebase.auth().currentUser.uid,
            userName: name,
            userPhone: phone,
            items: DATA.map((item) => {
                return {
                    decription: item.decription,
                    title: item.title,
                    price: item.price,
                    link: item.link,
                }
            }),
            address: street + "-" + home + " квартира " + apartment + " подъезд " + porch + " этаж " + floor,
            comment: comment,
            paymentType: paymentType,
            cost: totalOrderSum,
            orderAcceptDate: new Date().toLocaleDateString(),
            deliveryDate: getDate(),
            status: "Оформляется"
        }
        db.collection("orders").doc().set(order)
        addNewOrder(order)
        clearCart()
        navigation.navigate("OrderConfirmAccepted", { orderId: order.id, deliveryDate: order.deliveryDate })
    }

    const getDate = () => {
        if (deliveryDay === 'Сегодня') {
            return new Date().toISOString().slice(0, 10) + ' ' + deliveryTime
        } else {
            return deliveryDay + ' ' + deliveryTime
        }
    }

    const dispatch = useDispatch();

    const togglePaymentType = (item) => {
        dispatch({ type: "TOGGLE_PAYMENT_TYPE", payload: item })
    }
    const toggleDeliveryType = (item) => {
        dispatch({ type: "TOGGLE_DELIVERY_TYPE", payload: item })
    }
    const addNewOrder = (item) => {
        dispatch({ type: "ADD_NEW_ORDER", payload: item })
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
                Улица*
            </Text>
            <TextInput
                style={styles.input}
                onChangeText={setStreet} />
            <Text
                style={styles.inputLabel}>
                Дом*
            </Text>
            <TextInput
                style={styles.input}
                keyboardType='numeric'
                onChangeText={setHome} />
            <Text
                style={styles.inputLabel}>
                Подъезд
            </Text>
            <TextInput
                style={styles.input}
                keyboardType='numeric'
                onChangeText={setPorch} />

            <Text
                style={styles.inputLabel}>
                Этаж
            </Text>
            <TextInput
                style={styles.input}
                keyboardType='numeric'
                onChangeText={setFloor} />

            <Text
                style={styles.inputLabel}>
                Квартира
            </Text>
            <TextInput
                style={styles.input}
                keyboardType='numeric'
                onChangeText={setApartment} />
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
                Имя*
            </Text>
            <TextInput
                value={name}
                style={styles.input}
                onChangeText={setName} />
            <Text style={styles.inputLabel}>
                Телефон*
            </Text>
            <TextInput
                value={phone}
                style={styles.input}
                onChangeText={setPhone}
            />
            <View style={styles.subtitleContainer}>
                <MaterialCommunityIcons
                    style={styles.icon}
                    name="microphone"
                    color="#ff9711"
                    size={30} />
                <Text style={styles.confirmSubtitle}>Комментарий</Text>
            </View>
            <TextInput
                onChangeText={setComment}
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
                disabled={totalOrderSum < 350 ? true : false}
                style={totalOrderSum < 350 ? [styles.card__button, { backgroundColor: '#767976' }] : styles.card__button}
                onPress={() => { createOrder({ DATA }) }}
            >
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
        borderWidth: 1,
        borderColor: "#ddd",
        borderStyle: "solid",
        borderRadius: 10,
    },
    inputLabel: {
        marginTop: 10,
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
        paddingHorizontal: 20,
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
