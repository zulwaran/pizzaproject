import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

//Styles
import { AuthStyles } from './AuthStyles'

//Components
import ValidationMessage from '../reusable/ValidationMessage/ValidationMessage'

const AuthScreen = props => {
  return (
    <View style={AuthStyles.authContainer}>
      <TextInput
        value={props.email}
        style={StyleSheet.flatten([AuthStyles.input, { paddingVertical: 10 }])}
        placeholder="Электронная почта"
        onChangeText={email => props.setEmail(email)}
      />
      <TextInput
        value={props.password}
        style={StyleSheet.flatten([AuthStyles.input, { paddingVertical: 10 }])}
        placeholder="Пароль"
        secureTextEntry={true}
        onChangeText={password => props.setPassword(password)}
      />
      <ValidationMessage type={'Auth'} validation={props.error} />
      <TouchableOpacity style={AuthStyles.authButton} onPress={() => props.signUp()}>
        <Text style={AuthStyles.textSmall}>Вход</Text>
      </TouchableOpacity>
      <TouchableOpacity style={AuthStyles.authButton} onPress={() => props.navigation.navigate('RegisterContainer')}>
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
