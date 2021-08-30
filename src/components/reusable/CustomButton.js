import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'




const CustomButton = () => {
    const [active, setActive] = useState("")
    return (
        <TouchableOpacity
            style={styles.card__button}
            onPress={() => setActive("selected")}>
            <Text style={styles.card__buttonText}>Выбрать</Text>
        </TouchableOpacity>
    )
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
    card__priceBottom: {
        fontSize: 16,
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
        borderWidth: 5,
        borderColor: "#ffc000",
        borderStyle: "solid",
        borderRadius: 30,
    },
    card__buttonCircleLarge: {
        height: "4em",
        width: "4em",
        backgroundColor: "#fff",
        borderRadius: 50,
        borderWidth: 5,
        borderColor: "#ffc000",
        borderStyle: "solid",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 5,
    },
    card__buttonCircleMedium: {
        height: "3.5em",
        width: "3.5em",
        backgroundColor: "#fff",
        borderRadius: 50,
        borderWidth: 5,
        borderColor: "#ffc000",
        borderStyle: "solid",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 5,
    },
    card__buttonCircleSmall: {
        height: "3em",
        width: "3em",
        backgroundColor: "#fff",
        borderRadius: 50,
        borderWidth: 5,
        borderColor: "#ffc000",
        borderStyle: "solid",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 5,
    },
    card__buttonText: {
        fontWeight: "600",
        fontSize: 16,
    },
});

export default CustomButton