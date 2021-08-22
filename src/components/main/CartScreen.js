import React, { useEffect } from 'react'
import { StyleSheet, ScrollView, FlatList, TouchableOpacity, Text, View } from 'react-native'
import { useSelector } from 'react-redux';
import CartItem from '../CartItem';

const largeSize = 'calc(18px + 16*(100vw / 1680))'
const mediumSize = 'calc(16px*(100vw / 1680))'

const CartScreen = ({ navigation }) => {
    const totalOrderSum = useSelector(state => state.cart.totalOrderSum);
    const DATA = useSelector(state => state.cart.userCart);
    useEffect(() => {
        console.log(DATA);
    })
    if (DATA.length === 0) {
        return (
            <View style={styles.text}>
                <Text>
                    Корзина пуста
                </Text>
            </View>
        )
    }
    else if (DATA.length > 0) {
        return (
            <ScrollView style={styles.container}>
                <FlatList
                    data={DATA}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (<CartItem item={item} />)}
                />
                <Text>
                    К оплате {totalOrderSum} ₽
                </Text>
                <TouchableOpacity
                    style={styles.card__button}
                    onPress={() => navigation.navigate("OrderConfirm")}>
                    <Text style={styles.card__buttonText}>Оформить заказ</Text>
                </TouchableOpacity>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    text: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    card__button: {
        alignItems: "center",
        backgroundColor: "#fff",
        border: "5px solid #ffc000",
        borderRadius: 30,
        paddingVertical: '1vh',
        paddingHorizontal: '3vw',
        placeSelf: 'center',
    },
    card__buttonText: {
        fontWeight: 600,
        fontSize: mediumSize,
    },
});

export default CartScreen