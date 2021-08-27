import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';

//Icons
import AntDesign from 'react-native-vector-icons/AntDesign'

const largeSize = 'calc(18px + 16*(100vw / 1680))'
const mediumSize = 'calc(16px*(100vw / 1680))'



const CartItem = ({ item }) => {
    const dispatch = useDispatch();
    const DeleteItemFromCart = (item) => {
        dispatch({ type: "DELETE_FROM_CART", payload: item })
    }
    return (
        <View style={styles.card}>
            <View style={styles.card__halfBlock}>
                <Image
                    style={styles.card__img}
                    source={{
                        uri: item.link,
                    }}
                />
            </View>
            <View style={styles.card__halfBlock}>
                <TouchableOpacity onPress={() => { DeleteItemFromCart({ item }) }}>
                    <AntDesign
                        style={[{ position: "absolute", right: 25 }]}
                        name="closecircleo"
                        color="red"
                        size={26} />
                </TouchableOpacity>
                <Text
                    style={styles.card__title}>
                    {item.title} {item.size}см
                </Text>
                <Text>
                    {item.decription}
                </Text>
                <Text style={styles.card__title}>
                    {item.price} ₽
                </Text>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        marginTop: '20px',
        flexDirection: 'row',
        marginBottom: '20px',
        height: 300,
        borderBottomColor: 'rgba(157, 141, 143, 0.15)',
        borderBottomWidth: 2,
    },
    card__halfBlock: {
        width: '50%',
        height: '100%',
        justifyContent: 'center',
    },
    card__img: {
        height: '100%',
        resizeMode: 'contain',
    },
    card__title: {
        fontWeight: 600,
        fontSize: largeSize,
    },
    card__decription: {
        fontSize: mediumSize,
        marginBottom: 10
    },
    card__price: {
        fontSize: mediumSize,
        marginRight: 20,
    },
    card__order: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end'
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

export default CartItem