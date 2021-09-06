import React from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import { useDispatch } from 'react-redux'
import { TOGGLE_PAYMENT_TYPE } from '../../../reducers/order'
import RadioButton from '../../reusable/RadioButton'

const PaymentTypeSection = () => {
    const dispatch = useDispatch();
    const type = {
        cash: 'Наличными',
        card: 'Картой'
    }
    const togglePaymentType = (item) => {
        dispatch({ type: TOGGLE_PAYMENT_TYPE, payload: item })
    }
    return (
        <View>
            <View style={styles.subtitleContainer}>
                <Text style={styles.confirmSubtitle}>
                    Выберите вариант оплаты
                </Text>
            </View>
            <TouchableOpacity
                style={styles.radioButton}
                onPress={() => { togglePaymentType(type.cash) }}>
                <RadioButton type={type.cash} radioType="payment" />
                <Text style={styles.paymentType}>
                    Наличными
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.radioButton}
                onPress={() => { togglePaymentType(type.card) }}>
                <RadioButton
                    type={type.card} radioType="payment" />
                <Text style={styles.paymentType}>
                    Картой при получении
                </Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginHorizontal: 5,
        flexDirection: 'column',
    },
    subtitleContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 20,
    },
    confirmSubtitle: {
        fontSize: 28,
        textAlign: "center",
        alignSelf: "center",
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
    },

});
export default PaymentTypeSection
