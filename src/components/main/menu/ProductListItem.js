import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TO_CART } from '../../../reducers/cart';
import { AddItemToCart } from '../../../functions/Constructors';
import AntDesign from 'react-native-vector-icons/AntDesign'
import CustomButton from '../../reusable/customButton'
let deviceWidth = Dimensions.get('window').width


const ProductListItem = ({ item }) => {
    const type = useSelector(state => state.menu.activeType);
    const [active, setActive] = useState("")
    const dispatch = useDispatch();

    const toggleActive = () => {
        setActive("selected")
    }

    const addItemToCart = async (item, size) => {
        let price = ""
        let productSize = size
        switch (size) {
            case '25 см':
                price = item.smallPrice
                break;
            case '30 см':
                price = item.mediumPrice
                break;
            case '35 см':
                price = item.largePrice
                break;
            default:
                price = item.price
                productSize = ""
                break;
        }
        let newItem = new AddItemToCart(item.title, productSize, item.decription, item.link, price)
        dispatch({ type: ADD_TO_CART, payload: newItem })
    }

    if (item.type === type) {
        return (
            <View style={styles.container}>
                <View style={styles.productInfo}>
                    <Image
                        style={styles.productInfoImage}
                        source={{
                            uri: item.link,
                        }}
                    />
                    <View style={styles.productInfoRightHalf}>
                        <View
                            style={[{
                                flexDirection: 'row',
                                justifyContent: 'space-between'
                            }]}>
                            <Text style={styles.title}>
                                {item.title}
                            </Text>
                            {
                                active === 'selected' ?
                                    <TouchableOpacity
                                        style={[{ paddingRight: 20 }]}
                                        onPress={() => setActive("")}>
                                        <AntDesign
                                            name="closecircleo"
                                            color="red"
                                            size={26} />
                                    </TouchableOpacity>
                                    : null
                            }
                        </View>
                        <Text style={styles.decription}>
                            {item.decription}
                        </Text>
                    </View>
                </View>
                <CustomButton item={item} toggleActive={toggleActive} active={active} addItemToCart={addItemToCart} />
            </View>
        );
    } else {
        return null
    }
}

const styles = StyleSheet.create({
    container: {
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
        maxHeight: 300,
        resizeMode: 'contain'
    },
    productInfoRightHalf: {
        width: deviceWidth / 2
    },
    title: {
        maxWidth: '80%',
        fontWeight: '600',
        fontSize: 22,
    },
    decription: {
        fontWeight: '400',
        fontSize: 16,
        marginBottom: 5
    },
    priceContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginBottom: 20,
    },
    priceTextMedium: {
        alignSelf: 'center',
        marginRight: 10
    },
    priceTextLarge: {
        fontWeight: '600',
        fontSize: 18
    },
    select__button: {
        backgroundColor: "#fff",
        borderWidth: 5,
        borderColor: "#ffc000",
        borderStyle: "solid",
        borderRadius: 30,
        padding: 10,
    },
    buttonCircleContainer: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    buttonCircle: {
        backgroundColor: "#fff",
        borderRadius: 50,
        borderWidth: 5,
        borderColor: "#ffc000",
        borderStyle: "solid",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 5,
    },
});

export default ProductListItem