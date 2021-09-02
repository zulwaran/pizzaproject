import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import { useDispatch } from 'react-redux';

//Icons
import AntDesign from 'react-native-vector-icons/AntDesign'



let deviceWidth = Dimensions.get('window').width

const CartItem = ({ item }) => {
    const dispatch = useDispatch();
    const DeleteItemFromCart = (item) => {
        console.log(item);
        dispatch({ type: "DELETE_FROM_CART", payload: item })
    }
    return (
        <View
            style={styles.container}>
            <View
                style={styles.productInfo}>
                <Image
                    style={styles.productInfoImage}
                    source={{
                        uri: item.link,
                    }}
                />
                <View style={styles.productInfoRightHalf}>
                    <View style={[{
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }]}>
                        {<Text style={styles.title}>
                            {item.title}
                        </Text>}
                        <TouchableOpacity
                            style={[{ paddingRight: 20 }]}
                            onPress={() => { DeleteItemFromCart({ item }) }}>
                            <AntDesign
                                name="closecircleo"
                                color="red"
                                size={26} />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.decription}>
                        {item.decription}
                    </Text>
                    <Text
                        style={styles.priceTextLarge} >{item.price} ₽
                    </Text>
                </View>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginBottom: 30,
        marginRight: 10,
        borderBottomColor: 'rgba(157, 141, 143, 0.15)',
        borderBottomWidth: 2,
        backgroundColor: "#fff",
    },
    productInfo: {
        flexDirection: 'row',
    },
    productInfoImage: {
        width: deviceWidth / 2,
        height: deviceWidth / 2,
        alignSelf: 'center',
        maxWidth: 300,
        maxHeight: 300
    },
    productInfoRightHalf: {
        width: deviceWidth / 2
    },
    title: {
        maxWidth: '70%',
        fontWeight: '600',
        fontSize: 22,
    },
    decription: {
        fontWeight: '400',
        fontSize: 16,
        marginBottom: 5
    },
    priceTextLarge: {
        fontWeight: '600',
        fontSize: 22,
    },
});

export default CartItem