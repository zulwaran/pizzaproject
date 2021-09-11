import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import PropTypes from 'prop-types'

//Components
import RadioButton from '../../reusable/RadioButton'

//Styles
import { text } from '../../../../assets/styles/text'
import { container } from '../../../../assets/styles/container'
import { buttons } from '../../../../assets/styles/buttons'

const PaymentTypeSection = props => {
  const type = {
    cash: 'Наличными',
    card: 'Картой'
  }
  return (
    <View>
      <View style={container.subtitleContainer}>
        <Text style={text.confirmSubtitle}>Выберите вариант оплаты</Text>
      </View>
      <TouchableOpacity
        style={buttons.radioButton}
        onPress={() => {
          props.togglePaymentType(type.cash)
        }}
      >
        <RadioButton type={type.cash} radioType="payment" paymentType={props.paymentType} />
        <Text style={text.paymentType}>Наличными</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={buttons.radioButton}
        onPress={() => {
          props.togglePaymentType(type.card)
        }}
      >
        <RadioButton type={type.card} radioType="payment" paymentType={props.paymentType} />
        <Text style={text.paymentType}>Картой при получении</Text>
      </TouchableOpacity>
    </View>
  )
}
PaymentTypeSection.propTypes = {
  paymentType: PropTypes.string,
  togglePaymentType: PropTypes.func
}
export default PaymentTypeSection
