import React from 'react'
import { View, Text, TextInput } from 'react-native'
import PropTypes from 'prop-types'
import MaskInput from 'react-native-mask-input'

//Icons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

//Styles
import { OrderConfirmStyles } from './OrderConfirmStyles'

const UserInfo = props => {
  return (
    <View>
      <View style={OrderConfirmStyles.subtitleContainer}>
        <MaterialCommunityIcons style={OrderConfirmStyles.icon} name="glasses" size={30} />
        <Text style={OrderConfirmStyles.confirmSubtitle}>Ваши данные</Text>
      </View>
      <Text style={OrderConfirmStyles.inputLabel}>Имя*</Text>
      <TextInput value={props.name} style={OrderConfirmStyles.input} onChangeText={props.setName} />
      <Text style={OrderConfirmStyles.inputLabel}>Телефон*</Text>
      <MaskInput
        value={props.phone}
        keyboardType="numeric"
        style={OrderConfirmStyles.input}
        maxLength={16}
        onChangeText={(masked, unmasked) => props.setPhone(unmasked)}
        mask={['+', '7', '(', /\d/, /\d/, /\d/, ')', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]}
      />
    </View>
  )
}
UserInfo.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
  setName: PropTypes.func,
  setPhone: PropTypes.func
}
export default UserInfo
