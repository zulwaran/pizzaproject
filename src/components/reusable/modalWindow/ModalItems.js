import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

//Styles
import { ModalStyles } from './ModalStyles'
import { PRIMARY_COLOR } from '../../../../assets/styles/common.style'

const ModalItems = props => {
  return (
    <TouchableOpacity
      style={
        props.item === props.deliveryDay || props.item === props.deliveryTime
          ? StyleSheet.flatten([ModalStyles.selectTimeButton, { backgroundColor: PRIMARY_COLOR }])
          : ModalStyles.selectTimeButton
      }
      onPress={() => {
        props.selectDateValue(props.item)
      }}
    >
      <Text style={ModalStyles.modalText}>{props.item}</Text>
    </TouchableOpacity>
  )
}
ModalItems.propTypes = {
  props: PropTypes.shape({
    item: PropTypes.string
  })
}
export default ModalItems
