import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

//Styles
import { buttons } from '../../../../assets/styles/buttons'
import { text } from '../../../../assets/styles/text'

const ModalItems = props => {
  return (
    <TouchableOpacity
      style={
        props.item === props.deliveryDay || props.item === props.deliveryTime
          ? StyleSheet.flatten([buttons.selectTimeButton, { backgroundColor: '#FFC000' }])
          : buttons.selectTimeButton
      }
      onPress={() => {
        props.selectDateValue(props.item)
      }}
    >
      <Text style={text.modalText}>{props.item}</Text>
    </TouchableOpacity>
  )
}
ModalItems.propTypes = {
  props: PropTypes.shape({
    item: PropTypes.string
  })
}
export default ModalItems
