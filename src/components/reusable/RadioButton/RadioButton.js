import React from 'react'
import { View } from 'react-native'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'

//Styles
import { RadioButtonStyles } from './RadioButtonStyles'

export const RadioButton = props => {
  const deliveryType = useSelector(state => state.order.deliveryType)
  switch (props.radioType) {
    case 'payment':
      return (
        <View style={RadioButtonStyles.radio}>
          {props.type === props.paymentType ? <View style={RadioButtonStyles.selectedRadio} /> : null}
        </View>
      )
    case 'delivery':
      return (
        <View style={RadioButtonStyles.radio}>
          {props.type === deliveryType ? <View style={RadioButtonStyles.selectedRadio} /> : null}
        </View>
      )
  }
}

RadioButton.propTypes = {
  type: PropTypes.string,
  radioType: PropTypes.string,
  deliveryType: PropTypes.string
}

export default RadioButton
