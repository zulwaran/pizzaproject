import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
//Components
import RadioButton from '../../reusable/RadioButton'

//Styles
import { text } from '../../../../assets/styles/text'
import { inputs } from '../../../../assets/styles/inputs'
import { buttons } from '../../../../assets/styles/buttons'
import ModalContainer from '../../reusable/modalWindow/ModalContainer'

const OrderConfirmSelectTime = props => {
  const type = {
    now: 'Ближайшее',
    later: 'Позже'
  }
  return (
    <View>
      <TouchableOpacity
        style={buttons.radioButton}
        onPress={() => {
          props.toggleDeliveryType(type.now)
        }}
      >
        <RadioButton type={type.now} radioType="delivery" />
        <Text style={text.paymentType}>Как можно скорее</Text>
      </TouchableOpacity>
      {props.deliveryType === type.later ? (
        <TouchableOpacity style={buttons.radioButton}>
          <RadioButton type={type.later} radioType="delivery" deliveryType={props.deliveryType} />
          <Text
            onPress={() => props.toggleModal('date')}
            style={StyleSheet.flatten([inputs.inptTime, { width: '60%' }])}
          >
            {props.deliveryDay}
          </Text>
          <Text onPress={() => props.toggleModal('time')} style={inputs.inptTime}>
            {props.deliveryTime}
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={buttons.radioButton}
          onPress={() => {
            props.toggleDeliveryType(type.later)
          }}
        >
          <RadioButton type={type.later} radioType="delivery" />
          <Text style={text.paymentType}>На точное время</Text>
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
