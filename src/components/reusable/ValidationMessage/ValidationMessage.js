import React from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'

//Styles
import { ValidationMessageStyles } from './ValidationMessageStyles'

const ValidationMessage = props => {
  switch (props.type) {
    case 'OrderConfirmError':
    case 'Register':
    case 'Auth':
      return (
        <View>
          {props.validation ? <Text style={ValidationMessageStyles.errorMessage}>{props.validation}</Text> : null}
        </View>
      )
    default:
      break
  }
}

ValidationMessage.propTypes = {
  type: PropTypes.string,
  validation: PropTypes.string
}

export default ValidationMessage
