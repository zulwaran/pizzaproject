import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
const ProductList = ({ item }) => (
    <View style={styles.card}>
        <View style={styles.card__items}>
            <Image
                style={styles.pizzaImg}
                source={{
                    uri: item.link,
                }}
            />
            <View style={styles.cardContent}>
                <Text style={styles.title} >{item.title}</Text>
                <Text style={styles.decription}>{item.decription}</Text>
                <Text style={styles.price__low}>от <Text style={styles.price__high}>{item.minPrice}</Text> ₽</Text>
            </View>
        </View>
        <View style={styles.button__block}>
            <TouchableOpacity
                style={styles.button}
            >
                <Text style={styles.button__text}>Выбрать</Text>
            </TouchableOpacity>
        </View>
    </View>
);

const styles = StyleSheet.create({
    none: {
        display: 'flex',
    },
    card: {
        flexDirection: 'column',
        marginBottom: '20px',
    },
    card__items: {
        flexDirection: 'row',
    },
    pizzaImg: {
        width: '100px',
        height: '100px',
        maxWidth: '50vw',
        maxHeight: '50vh',
        marginRight: '10px'
    },
    cardContent: {
        maxWidth: '70%',
    },
    button__block: {
        alignItems: 'flex-end',
    },
    button: {
        alignItems: "center",
        backgroundColor: "#fff",
        border: "1px solid #ffc000",
        borderRadius: 30,
        paddingVertical: '10px',
        paddingHorizontal: '30px',
    },
    button__text: {
        fontWeight: 600,
        fontSize: 18
    },
    title: {
        fontSize: 28,
        fontWeight: 400,
    },
    decription: {
        fontSize: 16,
    },
    price__low: {
        fontSize: 18,
    },
    price__high: {
        fontSize: 28,
    }
});

export default ProductList