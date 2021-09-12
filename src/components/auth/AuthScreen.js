import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

//Styles
import { buttons } from '../../../assets/styles/buttons'
import { container } from '../../../assets/styles/container'
import { inputs } from '../../../assets/styles/inputs'
import { text } from '../../../assets/styles/text'

//Components
import ValidationMessage from '../reusable/ValidationMessage'

const AuthScreen = props => {
  return (
    <View style={container.authContainer}>
      <TextInput
        value={props.email}
        style={StyleSheet.flatten([inputs.input, { paddingVertical: 10 }])}
        placeholder="Электронная почта"
        onChangeText={email => props.setEmail(email)}
      />
      <TextInput
        value={props.password}
        style={StyleSheet.flatten([inputs.input, { paddingVertical: 10 }])}
        placeholder="Пароль"
        secureTextEntry={true}
        onChangeText={password => props.setPassword(password)}
      />
      <ValidationMessage type={'Auth'} validation={props.error} />
      <TouchableOpacity style={buttons.authButton} onPress={() => props.signUp()}>
        <Text style={text.textSmall}>Вход</Text>
      </TouchableOpacity>
      <TouchableOpacity style={buttons.authButton} onPress={() => props.navigation.navigate('RegisterContainer')}>
        <Text style={[{ fontSize: 18 }]}>Регистрация</Text>
      </TouchableOpacity>
    </View>
  )
}

AuthScreen.propTypes = {
  navigation: PropTypes.object,
  email: PropTypes.string,
  password: PropTypes.string,
  error: PropTypes.string,
  setEmail: PropTypes.func,
  setPassword: PropTypes.func,
  signUp: PropTypes.func
}

export default AuthScreen
