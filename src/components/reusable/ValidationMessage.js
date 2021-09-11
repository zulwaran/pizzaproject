import React from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'

const ValidationMessage = props => {
  switch (props.type) {
    case 'OrderConfirmError':
    case 'Register':
    case 'Auth':
      return (
        <View>
          {props.validation ? (
            <Text style={[{ color: 'red', fontSize: 16, marginBottom: 30 }]}>{props.validation}</Text>
          ) : null}
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
