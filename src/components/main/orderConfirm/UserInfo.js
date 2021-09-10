import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import MaskInput from 'react-native-mask-input'

//Icons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

//Reducers
import { SET_NAME, SET_PHONE } from '../../../reducers/user'

//Styles
import { container } from '../../../../assets/styles/container'
import { images } from '../../../../assets/styles/images'
import { inputs } from '../../../../assets/styles/inputs'
import { text } from '../../../../assets/styles/text'

const UserInfo = () => {
  const dispatch = useDispatch()
  const [name, setName] = useState(useSelector(state => state.user.name))
  const [phone, setPhone] = useState(useSelector(state => state.user.phone))
  const writeName = () => {
    dispatch({ type: SET_NAME, payload: name })
  }
  const writePhone = () => {
    dispatch({ type: SET_PHONE, payload: phone })
  }
  return (
    <View>
      <View style={container.subtitleContainer}>
        <MaterialCommunityIcons style={images.icon} name="glasses" size={30} />
        <Text style={text.confirmSubtitle}>Ваши данные</Text>
      </View>
      <Text style={text.inputLabel}>Имя*</Text>
      <TextInput value={name} style={inputs.input} onChangeText={setName} onBlur={writeName} />
      <Text style={text.inputLabel}>Телефон*</Text>
      <MaskInput
        value={phone}
        keyboardType="numeric"
        style={inputs.input}
        maxLength={16}
        onChangeText={(masked, unmasked) => setPhone(unmasked)}
        onBlur={writePhone}
        mask={['+', '7', '(', /\d/, /\d/, /\d/, ')', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]}
      />
    </View>
  )
}
export default UserInfo
