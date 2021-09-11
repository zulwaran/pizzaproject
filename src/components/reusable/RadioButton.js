import React from 'react'
import { View } from 'react-native'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { div } from '../../../assets/styles/div'

export const RadioButton = props => {
  const deliveryType = useSelector(state => state.order.deliveryType)
  switch (props.radioType) {
    case 'payment':
      return (
        <View style={div.radio}>{props.type === props.paymentType ? <View style={div.selectedRadio} /> : null}</View>
      )
    case 'delivery':
      return <View style={div.radio}>{props.type === deliveryType ? <View style={div.selectedRadio} /> : null}</View>
  }
}

RadioButton.propTypes = {
  type: PropTypes.string,
  radioType: PropTypes.string,
  deliveryType: PropTypes.string
}

export default RadioButton
