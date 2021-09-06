import React from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native'
import { useSelector } from 'react-redux';
import CartItem from '../cart/CartItem'

const ProductSection = () => {
    const totalOrderSum = useSelector(state => state.cart.totalOrderSum);
    const DATA = useSelector(state => state.cart.userCart);
    return (
        DATA.length > 0 ?
            <View>
                <View style={styles.subtitleContainer}>
                    <Text style={styles.confirmSubtitle}>
                        Убедитесь в правильности выбранных товаров
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
            </View>
            : null
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
});

export default ProductSection

