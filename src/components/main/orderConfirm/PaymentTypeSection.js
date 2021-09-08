import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { useDispatch } from 'react-redux'
//Components
import RadioButton from '../../reusable/RadioButton'

//Reducers
import { TOGGLE_PAYMENT_TYPE } from '../../../reducers/order'

//Styles
import { text } from '../../../../assets/styles/text'
import { container } from '../../../../assets/styles/container'
import { buttons } from '../../../../assets/styles/buttons'

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
            <View style={container.subtitleContainer}>
                <Text style={text.confirmSubtitle}>
                    Выберите вариант оплаты
                </Text>
            </View>
            <TouchableOpacity
                style={buttons.radioButton}
                onPress={() => { togglePaymentType(type.cash) }}>
                <RadioButton type={type.cash} radioType="payment" />
                <Text style={text.paymentType}>
                    Наличными
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={buttons.radioButton}
                onPress={() => { togglePaymentType(type.card) }}>
                <RadioButton
                    type={type.card} radioType="payment" />
                <Text style={text.paymentType}>
                    Картой при получении
                </Text>
            </TouchableOpacity>
        </View>
    )
}
export default PaymentTypeSection
