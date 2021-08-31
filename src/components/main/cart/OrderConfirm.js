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



const OrderConfirm = () => {
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
    }

    const getDate = () => {
        const date = new Date()
        let day = date.getDate()
        let month = date.getMonth()
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
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.confirmTitle}>Оформление заказа</Text>
                <Text style={styles.confirmSubtitle}>
                    <Ionicons
                        style={styles.icon}
                        name="location-sharp"
                        color="red"
                        size={26} />
                    Куда
                </Text>

                <View style={styles.addressView}>
                    <Text style={styles.addressText}>
                        Улица
                        <TextInput
                            onChange={(e) => {
                                setStreet(e.target.value)
                            }}
                            style={styles.addressLargeInput} />
                    </Text>
                    <Text style={styles.addressText}>
                        Дом
                        <TextInput
                            onChange={(e) => {
                                setHome(e.target.value)
                            }}
                            style={styles.addressSmallInput} />
                    </Text>
                    <Text style={styles.addressText}>
                        Подъезд
                        <TextInput
                            onChange={(e) => {
                                setPorch(e.target.value)
                            }}
                            style={styles.addressSmallInput} />
                    </Text>
                    <Text style={styles.addressText}>
                        Этаж
                        <TextInput
                            onChange={(e) => {
                                setFloor(e.target.value)
                            }}
                            style={styles.addressSmallInput} />
                    </Text>
                    <Text style={styles.addressText}>
                        Квартира
                        <TextInput
                            onChange={(e) => {
                                setApartment(e.target.value)
                            }}
                            style={styles.addressSmallInput} />
                    </Text>
                </View>

                <View>
                    <Text style={styles.confirmSubtitle}>
                        <MaterialCommunityIcons
                            style={styles.icon}
                            name="clock-time-four"
                            color="#11bd0d"
                            size={26} />
                        Когда
                    </Text>
                    <View style={styles.timeOfDeliveryView}>
                        <TouchableOpacity
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
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.userInfoSection}>
                    <Text style={styles.confirmSubtitle}>
                        <MaterialCommunityIcons
                            style={styles.icon}
                            name="glasses"
                            size={30} />
                        Ваши данные
                    </Text>
                    <View>
                        <View style={styles.userInfoView}>
                            <Text style={styles.userInfoText}>
                                Имя
                            </Text>
                            <TextInput
                                value={currentUser.name}
                                style={styles.userInfoInput} />
                        </View>
                        <View style={styles.userInfoView}>
                            <Text style={styles.userInfoText}>
                                Телефон
                            </Text>
                            <TextInput
                                value={currentUser.phone}
                                style={styles.userInfoInput} />
                        </View>
                    </View>
                </View>

                <View style={styles.commentSection}>
                    <Text style={styles.confirmSubtitle}>Комментарий</Text>
                    <TextInput
                        onChange={(e) => {
                            setComment(e.target.value)
                        }}
                        style={styles.commentTextArea}
                        numberOfLines={4}
                        multiline
                    />
                </View>

                <View>
                    <Text style={styles.confirmSubtitle}>Убедитесь в правильности выбранных товаров</Text>
                    <FlatList
                        data={DATA}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (<CartItem item={item} />)}
                    />
                </View>

                <View>
                    <Text style={styles.price}>
                        = К оплате: {totalOrderSum} Р
                    </Text>
                </View>

                <View>
                    <Text style={styles.confirmSubtitle}>
                        Выберите вариант оплаты
                    </Text>
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
                </View>

                <View>
                    <TouchableOpacity
                        style={styles.card__button}
                        onPress={() => { createOrder({ DATA }) }}
                    >
                        <Text style={styles.card__buttonText}>Оформить заказ →</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10
    },
    confirmTitle: {
        marginVertical: 20,
        alignSelf: "center",
        fontSize: 28,
        fontWeight: "400",
    },
    confirmSubtitle: {
        marginBottom: 20,
        fontSize: 28,
        textAlign: "center",
        alignSelf: "center",
    },
    icon: {
        marginRight: 5,
    },

    addressView: {
        flex: 1,
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 10,
    },
    addressText: {
        paddingLeft: 20,
        fontSize: 16,
    },
    addressLargeInput: {
        padding: 10,
        backgroundColor: "#fff",
        marginBottom: 20,
        marginLeft: 5,
        borderWidth: 1,
        borderColor: "#ddd",
        borderStyle: "solid",
        borderRadius: 5,
    },
    addressSmallInput: {
        width: 50,
        padding: 10,
        backgroundColor: "#fff",
        marginBottom: 20,
        marginLeft: 5,
        borderWidth: 1,
        borderColor: "#ddd",
        borderStyle: "solid",
        borderRadius: 5,
    },

    timeOfDeliveryView: {
        flex: 1,
        flexDirection: "column",
    },
    radioButton: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 15,
    },

    userInfoSection: {
        flex: 1,
        alignItems: "flex-start",
        marginBottom: 10,
    },
    userInfoView: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
        marginBottom: 10,
    },
    userInfoText: {
        width: 60,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
    },
    userInfoInput: {
        borderWidth: 1,
        borderColor: "#ddd",
        borderStyle: "solid",
        borderRadius: 5,
        padding: 10,
        backgroundColor: "#fff",
        marginLeft: 5,
    },

    commentSection: {
        marginBottom: 10,
    },
    commentTextArea: {
        padding: 10,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#ddd",
        borderStyle: "solid",
        borderRadius: 5,
    },

    price: {
        fontSize: 32,
        textAlign: "left",
    },

    paymentType: {
        fontSize: 17,
        marginLeft: 8,
        flex: 1,
    },


    card__button: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#FFC000",
        height: 70,
        borderRadius: 10,
        paddingVertical: 25,
    },
    card__buttonText: {
        fontWeight: "400",
        fontSize: 28,
        textAlign: "center",
    },
});

export default OrderConfirm
