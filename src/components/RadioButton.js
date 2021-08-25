import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useSelector } from 'react-redux';

const RadioButton = ({ type }) => {
    const paymentType = useSelector(state => state.order.paymentType);
    return (
        <View style={styles.radio}>
            {
                type === paymentType ?
                    <View style={styles.selected} />
                    : null
            }
        </View>
    )
}

const styles = StyleSheet.create({
    radio: {
        height: 18,
        width: 18,
        position: "relative",
        backgroundColor: "#fff",
        boxShadow: "0 0 0 1px #999",
        borderRadius: "50%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    selected: {
        width: "100%",
        height: "100%",
        position: "absolute",
        borderRadius: "50%",
        backgroundColor: "#fff",
        borderWidth: 6,
        borderColor: "rgb(255, 192, 0)",
        boxShadow: "0 0 0 1px #d2a408",
    }
})

export default RadioButton
