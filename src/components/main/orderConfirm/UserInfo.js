import React from 'react'
import { View, Text, TextInput } from 'react-native'
import PropTypes from 'prop-types'
import MaskInput from 'react-native-mask-input'

//Icons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

//Styles
import { container } from '../../../../assets/styles/container'
import { images } from '../../../../assets/styles/images'
import { inputs } from '../../../../assets/styles/inputs'
import { text } from '../../../../assets/styles/text'

const UserInfo = props => {
  return (
    <View>
      <View style={container.subtitleContainer}>
        <MaterialCommunityIcons style={images.icon} name="glasses" size={30} />
        <Text style={text.confirmSubtitle}>Ваши данные</Text>
      </View>
      <Text style={text.inputLabel}>Имя*</Text>
      <TextInput value={props.name} style={inputs.input} onChangeText={props.setName} />
      <Text style={text.inputLabel}>Телефон*</Text>
      <MaskInput
        value={props.phone}
        keyboardType="numeric"
        style={inputs.input}
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
