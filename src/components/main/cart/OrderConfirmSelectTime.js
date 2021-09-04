import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import RadioButton from '../../reusable/RadioButton';
import ModalPopUp from './ModalPopUp';

const OrderConfirmSelectTime = () => {
    const toggleModal = (type) => {
        dispatch({ type: "OPEN_MODAL", payload: type })
    }
    const type = {
        now: "Ближайшее",
        later: "Позже",
    }
    const deliveryType = useSelector(state => state.order.deliveryType)
    const deliveryDay = useSelector(state => state.order.deliveryDay)
    const deliveryTime = useSelector(state => state.order.deliveryTime)
    const dispatch = useDispatch();
    const toggleDeliveryType = (item) => {
        dispatch({ type: "TOGGLE_DELIVERY_TYPE", payload: item })
    }
    return (
        <View>
            <TouchableOpacity
                style={styles.radioButton}
                onPress={() => { toggleDeliveryType(type.now) }}>
                <RadioButton type={type.now} radioType="delivery" />
                <Text style={styles.paymentType}>
                    Как можно скорее
                </Text>
            </TouchableOpacity>
            {
                deliveryType === type.later ?
                    <TouchableOpacity
                        style={styles.radioButton}>
                        <RadioButton type={type.later} radioType="delivery" />
                        <Text
                            onPress={() => toggleModal("date")}
                            style={[styles.input, { width: '60%' }]}>
                            {deliveryDay}
                        </Text>
                        <Text
                            onPress={() => toggleModal("time")}
                            style={styles.input}>
                            {deliveryTime}
                        </Text>
                    </TouchableOpacity>
                    : <TouchableOpacity
                        style={styles.radioButton}
                        onPress={() => { toggleDeliveryType(type.later) }}>
                        <RadioButton type={type.later} radioType="delivery" />
                        <Text style={styles.paymentType}>
                            На точное время
                        </Text>
                    </TouchableOpacity>
            }
            <ModalPopUp />
        </View>
    )
}
const styles = StyleSheet.create({
    input: {
        color: "black",
        fontSize: 18,
        marginLeft: 10,
        backgroundColor: "#fff",
        borderRadius: 25,
        borderWidth: 1,
        borderColor: "#ddd",
        borderStyle: "solid",
        paddingVertical: 5,
        paddingHorizontal: 10,
        width: "30%",
        textAlign: 'center'
    },
    radioButton: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 15,
    },
    paymentType: {
        fontSize: 17,
        marginLeft: 8,
        color: 'black'
    },
});

export default OrderConfirmSelectTime