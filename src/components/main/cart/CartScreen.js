import React from 'react'
import { StyleSheet, FlatList, TouchableOpacity, Text, View } from 'react-native'
import { useSelector } from 'react-redux';

//Components
import CartItem from './CartItem';



const CartScreen = ({ navigation }) => {
    const totalOrderSum = useSelector(state => state.cart.totalOrderSum);
    const DATA = useSelector(state => state.cart.userCart);
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
            <View style={styles.container}>
                <FlatList
                    data={DATA}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => (<CartItem item={item} index={index} />)}
                />
                <TouchableOpacity
                    onPress={() => { createOrder({ DATA }) }}>
                </TouchableOpacity>
                <TouchableOpacity
                    disabled={totalOrderSum < 350 ? true : false}
                    style={totalOrderSum < 350 ? [styles.card__button, { backgroundColor: '#767976' }] : styles.card__button}
                    onPress={() => navigation.navigate("OrderConfirm")}>
                    {
                        totalOrderSum < 350 ?
                            <Text style={styles.card__buttonText, [{ fontSize: 18, textAlign: 'center' }]}>
                                Сумма заказа должна быть не менее 350 ₽
                            </Text>
                            :
                            <Text style={styles.card__buttonText}>
                                {totalOrderSum} ₽ Оформить заказ
                            </Text>
                    }
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginHorizontal: 5
    },
    text: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    card__button: {
        alignItems: "center",
        backgroundColor: "#FFC000",
        borderRadius: 30,
        padding: 10,
        marginHorizontal: 20,
        marginBottom: 30,
    },
    card__buttonText: {
        fontWeight: "600",
        fontSize: 22,
    },
});

export default CartScreen