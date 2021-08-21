import React from 'react'
import { StyleSheet, ScrollView, FlatList, TouchableOpacity, Text } from 'react-native'
import { useSelector } from 'react-redux';
import Test from '../Test';

const largeSize = 'calc(18px + 16*(100vw / 1680))'
const mediumSize = 'calc(16px*(100vw / 1680))'

const CartScreen = () => {
    const DATA = useSelector(state => state.cart.userCart);
    return (
        <ScrollView style={styles.container}>
            <FlatList
                data={DATA}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (<Test item={item} />)}
            />
            <TouchableOpacity
                style={styles.card__button}>
                <Text style={styles.card__buttonText}>Оформить заказ</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
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