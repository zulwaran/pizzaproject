import React from 'react'
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import MaskInput from 'react-native-mask-input'

//Styles
import { buttons } from '../../../assets/styles/buttons'
import { inputs } from '../../../assets/styles/inputs'
import { container } from '../../../assets/styles/container'
import ValidationMessage from '../reusable/ValidationMessage'

const RegisterScreen = props => {
  return (
    <View style={container.authContainer}>
      <TextInput
        value={props.name}
        style={StyleSheet.flatten([inputs.input, { paddingVertical: 10 }])}
        placeholder="Имя"
        onChangeText={name => props.setName(name)}
      />
      <TextInput
        value={props.email}
        style={StyleSheet.flatten([inputs.input, { paddingVertical: 10 }])}
        placeholder="Электронная почта"
        onChangeText={email => props.setEmail(email)}
      />
      <MaskInput
        value={props.phone}
        style={StyleSheet.flatten([inputs.input, { paddingVertical: 10 }])}
        placeholder="Телефон"
        keyboardType="numeric"
        maxLength={16}
        onChangeText={(masked, unmasked) => {
          props.setPhone(unmasked)
        }}
        mask={['+', '7', '(', /\d/, /\d/, /\d/, ')', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]}
      />
      <TextInput
        value={props.password}
        style={StyleSheet.flatten([inputs.input, { paddingVertical: 10 }])}
        placeholder="Пароль"
        secureTextEntry={true}
        onChangeText={password => props.setPassword(password)}
      />
      <TouchableOpacity style={buttons.authButton} onPress={() => props.signUp()}>
        <Text style={[{ fontSize: 18 }]}>Зарегистрироваться</Text>
      </TouchableOpacity>
      <ValidationMessage type={'Register'} validation={props.validationError} />
    </View>
  )
}

RegisterScreen.propTypes = {
  name: PropTypes.string,
  phon: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  validationError: PropTypes.string,
  setName: PropTypes.func,
  setPhone: PropTypes.func,
  setEmail: PropTypes.func,
  setPassword: PropTypes.func,
  signUp: PropTypes.func
}

export default RegisterScreen
