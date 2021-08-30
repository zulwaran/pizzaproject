import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';

//Icons
import AntDesign from 'react-native-vector-icons/AntDesign'





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
        flexDirection: 'row',
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
        fontWeight: "600",
        fontSize: 22,
    },
    card__decription: {
        fontSize: 16,
        marginBottom: 10
    },
    card__price: {
        fontSize: 16,
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
        borderWidth: 5,
        borderColor: "#ffc000",
        borderStyle: "solid",
        borderRadius: 30,
    },
    card__buttonText: {
        fontWeight: "600",
        fontSize: 16,
    },
});

export default CartItem