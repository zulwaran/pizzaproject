import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'

const CustomButton = (props) => {
    switch (props.item.type) {
        case "pizza":
        case "trip":
        case "monster":
            return (
                <View>
                    {
                        props.active === 'selected' ?
                            <View style={[styles.priceContainer, { alignItems: 'center' }]}>
                                <View style={styles.buttonCircleContainer}>
                                    <TouchableOpacity
                                        style={[{ width: 50, height: 50 }, styles.buttonCircle]}
                                        onPress={() => { props.addItemToCart(props.item, "25 см") }}>
                                        <Text>25см</Text>
                                    </TouchableOpacity>
                                    <Text style={styles.price}>
                                        {props.item.smallPrice} ₽
                                    </Text>
                                </View>
                                <View style={styles.buttonCircleContainer}>
                                    <TouchableOpacity
                                        style={[{ width: 60, height: 60 }, styles.buttonCircle]}
                                        onPress={() => { props.addItemToCart(props.item, "30 см") }}>
                                        <Text>30см</Text>
                                    </TouchableOpacity>
                                    <Text style={styles.price}>
                                        {props.item.mediumPrice} ₽
                                    </Text>
                                </View>
                                <View style={styles.buttonCircleContainer}>
                                    <TouchableOpacity
                                        style={[{ width: 70, height: 70 }, styles.buttonCircle]}
                                        onPress={() => { props.addItemToCart(props.item, "35 см") }}>
                                        <Text>35см</Text>
                                    </TouchableOpacity>
                                    <Text style={styles.price}>
                                        {props.item.largePrice} ₽
                                    </Text>
                                </View>
                            </View>
                            : <View style={styles.priceContainer}>
                                <Text style={styles.priceTextMedium}>от <Text
                                    style={styles.priceTextLarge} >{props.item.smallPrice}
                                </Text> ₽
                                </Text>
                                <TouchableOpacity
                                    style={styles.select__button}
                                    onPress={() => props.toggleActive("selected")}>
                                    <Text>Выбрать</Text>
                                </TouchableOpacity>
                            </View>
                    }
                </View>
            )
        case 'pasta':
        case 'snacks':
            return (
                <View style={styles.priceContainer}>
                    <Text style={[styles.priceTextLarge, { alignSelf: 'center', marginRight: 15 }]} >
                        {props.item.price} ₽
                    </Text>
                    <TouchableOpacity
                        style={styles.select__button}
                        onPress={() => props.addItemToCart(props.item)}>
                        <Text>Добавить</Text>
                    </TouchableOpacity>
                </View>
            )
        default:
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
export default CustomButton