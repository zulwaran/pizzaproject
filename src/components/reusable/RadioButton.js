import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types'


export const RadioButton = ({ type, radioType }) => {
    const paymentType = useSelector(state => state.order.paymentType);
    const deliveryType = useSelector(state => state.order.deliveryType)
    switch (radioType) {
        case "payment":
            return (
                <View style={styles.radio}>
                    {
                        type === paymentType ?
                            <View style={styles.selected} />
                            : null
                    }
                </View>
            )
        case "delivery":
            return (
                <View style={styles.radio}>
                    {
                        type === deliveryType ?
                            <View style={styles.selected} />
                            : null
                    }
                </View>
            )
    }
}

const styles = StyleSheet.create({
    radio: {
        height: 18,
        width: 18,
        position: "relative",
        backgroundColor: "#fff",
        borderRadius: 50,
        borderColor: "#ddd",
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    selected: {
        width: "100%",
        height: "100%",
        position: "absolute",
        borderRadius: 50,
        backgroundColor: "#fff",
        borderWidth: 6,
        borderColor: "rgb(255, 192, 0)",
    }
})

RadioButton.propTypes = {
    type: PropTypes.string,
    radioType: PropTypes.string,
}

export default RadioButton
