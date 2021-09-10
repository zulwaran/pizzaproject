import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { div } from '../../../assets/styles/div'

export const RadioButton = ({ type, radioType }) => {
  const paymentType = useSelector(state => state.order.paymentType)
  const deliveryType = useSelector(state => state.order.deliveryType)
  switch (radioType) {
    case 'payment':
      return <View style={div.radio}>{type === paymentType ? <View style={div.selectedRadio} /> : null}</View>
    case 'delivery':
      return <View style={div.radio}>{type === deliveryType ? <View style={div.selectedRadio} /> : null}</View>
  }
}

RadioButton.propTypes = {
  type: PropTypes.string,
  radioType: PropTypes.string
}

export default RadioButton
