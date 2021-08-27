import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign'

const largeSize = 'calc(18px + 16*(100vw / 1680))'
const mediumSize = 'calc(16px*(100vw / 1680))'

const ProductListItem = ({ item }) => {
    const type = useSelector(state => state.menu.activeType);
    const [active, setActive] = useState("")

    const dispatch = useDispatch();
    const addItemToCart = (item, size) => {
        let price = ""
        switch (size) {
            case '25':
                price = item.item.smallPrice
                break;
            case '30':
                price = item.item.mediumPrice
                break;
            case '35':
                price = item.item.largePrice
                break;
        }
        const newItem = {
            title: item.item.title,
            decription: item.item.decription,
            link: item.item.link,
            size: size,
            price: price,
        }
        dispatch({ type: "ADD_TO_CART", payload: newItem })
    }

    if (item.type === type && active === "") {
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
                    <Text
                        style={styles.card__title}>
                        {item.title}
                    </Text>
                    <Text
                        style={styles.card__decription}>
                        {item.decription}
                    </Text>
                    <View style={styles.card__order}>
                        <Text style={styles.card__price}>от <Text style={styles.card__title}>{item.smallPrice}
                        </Text> ₽
                        </Text>
                        <TouchableOpacity
                            style={styles.card__button}
                            onPress={() => setActive("selected")}>
                            <Text style={styles.card__buttonText}>Выбрать</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View >
        );
    } else if (item.type === type && active === "selected") {
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
                    <TouchableOpacity
                        onPress={() => setActive("")}>
                        <AntDesign
                            style={[{ position: "absolute", right: 25 }]}
                            name="closecircleo"
                            color="red"
                            size={26} />
                    </TouchableOpacity>
                    <Text
                        style={styles.card__title}>
                        {item.title}
                    </Text>
                    <Text
                        style={styles.card__decription}>
                        {item.decription}
                    </Text>
                    <View style={[styles.card__order, { justifyContent: "center" }]}>
                        <View>
                            <TouchableOpacity
                                onPress={() => { addItemToCart({ item }, "25") }}
                                style={styles.card__buttonCircleSmall}>
                                <Text style={styles.card__buttonText}>25см</Text>
                            </TouchableOpacity>
                            <Text style={styles.card__priceBottom}>{item.smallPrice} ₽</Text>
                        </View>
                        <View>
                            <TouchableOpacity
                                onPress={() => { addItemToCart({ item }, "30") }}
                                style={styles.card__buttonCircleMedium}>
                                <Text style={styles.card__buttonText}>30см</Text>
                            </TouchableOpacity>
                            <Text style={styles.card__priceBottom}>{item.mediumPrice} ₽</Text>
                        </View>
                        <View>
                            <TouchableOpacity
                                onPress={() => { addItemToCart({ item }, "35") }}
                                style={styles.card__buttonCircleLarge}>
                                <Text style={styles.card__buttonText}>35см</Text>
                            </TouchableOpacity>
                            <Text style={styles.card__priceBottom}>{item.largePrice} ₽</Text>
                        </View>
                    </View>
                </View>
            </View >
        )
    } else {
        return (null)
    }
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        borderBottomColor: 'rgba(157, 141, 143, 0.15)',
        borderBottomWidth: 2,
        backgroundColor: "#fff",
        justifyContent: 'center',
    },
    card__halfBlock: {
        width: 300,
        height: '100%',
        justifyContent: 'center',
    },
    card__img: {
        height: 300,
        width: 300,
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
    card__priceBottom: {
        fontSize: mediumSize,
        textAlign: "center",
    },
    card__order: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: "center",
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
    card__buttonCircleLarge: {
        height: "4em",
        width: "4em",
        backgroundColor: "#fff",
        borderRadius: "50%",
        border: "5px solid #ffc000",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 5,
    },
    card__buttonCircleMedium: {
        height: "3.5em",
        width: "3.5em",
        backgroundColor: "#fff",
        borderRadius: "50%",
        border: "5px solid #ffc000",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 5,
    },
    card__buttonCircleSmall: {
        height: "3em",
        width: "3em",
        backgroundColor: "#fff",
        borderRadius: "50%",
        border: "5px solid #ffc000",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 5,
    },
    card__buttonText: {
        fontWeight: 600,
        fontSize: mediumSize,
    },
});

export default ProductListItem