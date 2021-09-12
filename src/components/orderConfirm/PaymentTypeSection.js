import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import PropTypes from 'prop-types'

//Components
import RadioButton from '../reusable/RadioButton/RadioButton'

//Styles
import { OrderConfirmStyles } from './OrderConfirmStyles'

const PaymentTypeSection = props => {
  const type = {
    cash: 'Наличными',
    card: 'Картой'
  }
  return (
    <View>
      <View style={OrderConfirmStyles.subtitleContainer}>
        <Text style={OrderConfirmStyles.confirmSubtitle}>Выберите вариант оплаты</Text>
      </View>
      <TouchableOpacity
        style={OrderConfirmStyles.radioButton}
        onPress={() => {
          props.togglePaymentType(type.cash)
        }}
      >
        <RadioButton type={type.cash} radioType="payment" paymentType={props.paymentType} />
        <Text style={OrderConfirmStyles.paymentType}>Наличными</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={OrderConfirmStyles.radioButton}
        onPress={() => {
          props.togglePaymentType(type.card)
        }}
      >
        <RadioButton type={type.card} radioType="payment" paymentType={props.paymentType} />
        <Text style={OrderConfirmStyles.paymentType}>Картой при получении</Text>
      </TouchableOpacity>
    </View>
  )
}
PaymentTypeSection.propTypes = {
  paymentType: PropTypes.string,
  togglePaymentType: PropTypes.func
}
export default PaymentTypeSection
