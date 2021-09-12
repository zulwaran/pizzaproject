import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

//Components
import ModalContainer from '../reusable/modalWindow/ModalContainer'
import RadioButton from '../reusable/RadioButton/RadioButton'

//Styles
import { OrderConfirmStyles } from './OrderConfirmStyles'

const OrderConfirmSelectTime = props => {
  const type = {
    now: 'Ближайшее',
    later: 'Позже'
  }
  return (
    <View>
      <TouchableOpacity
        style={OrderConfirmStyles.radioButton}
        onPress={() => {
          props.toggleDeliveryType(type.now)
        }}
      >
        <RadioButton type={type.now} radioType="delivery" />
        <Text style={OrderConfirmStyles.paymentType}>Как можно скорее</Text>
      </TouchableOpacity>
      {props.deliveryType === type.later ? (
        <TouchableOpacity style={OrderConfirmStyles.radioButton}>
          <RadioButton type={type.later} radioType="delivery" deliveryType={props.deliveryType} />
          <Text
            onPress={() => props.toggleModal('date')}
            style={StyleSheet.flatten([OrderConfirmStyles.inptTime, { width: '60%' }])}
          >
            {props.deliveryDay}
          </Text>
          <Text onPress={() => props.toggleModal('time')} style={OrderConfirmStyles.inptTime}>
            {props.deliveryTime}
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={OrderConfirmStyles.radioButton}
          onPress={() => {
            props.toggleDeliveryType(type.later)
          }}
        >
          <RadioButton type={type.later} radioType="delivery" />
          <Text style={OrderConfirmStyles.paymentType}>На точное время</Text>
        </TouchableOpacity>
      )}
      <ModalContainer />
    </View>
  )
}

OrderConfirmSelectTime.propTypes = {
  deliveryType: PropTypes.string,
  deliveryDay: PropTypes.string,
  deliveryTime: PropTypes.string,
  toggleModal: PropTypes.func,
  toggleDeliveryType: PropTypes.func
}

export default OrderConfirmSelectTime
