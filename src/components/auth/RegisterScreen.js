import React, { useState } from 'react'
import { View, TextInput, Text, TouchableOpacity } from 'react-native'
import MaskInput from 'react-native-mask-input'
//Firebase
import { firebase, db } from '../../../firebase'

//Styles
import { buttons } from '../../../assets/styles/buttons'
import { inputs } from '../../../assets/styles/inputs'
import { container } from '../../../assets/styles/container'
import { text } from '../../../assets/styles/text'

const RegisterScreen = ({}) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')

  const [validationError, setValidationError] = useState('')

  const signUp = () => {
    if (!name) {
      setValidationError('Имя не может быть пустым')
      return
    }
    if (!phone) {
      setValidationError('Телефон не может быть пустым')
      return
    }
    if (phone.length < 10) {
      setValidationError('Неправильный формат телефона')
      return
    }
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(result => {
        db.collection('users').doc(result.user.uid).set({
          name: name,
          email: email,
          phone: phone
        })
        db.collection('cart').doc().set({
          uid: result.user.uid,
          items: []
        })
      })
      .catch(error => {
        validation(error.code)
      })
  }

  const validation = value => {
    switch (value) {
      case 'auth/invalid-email':
        setValidationError('Неверный формат электронной почты')
        break
      case 'auth/weak-password':
        setValidationError('Пароль должен быть не менее 6 символов')
    }
  }

  return (
    <View style={container.authContainer}>
      <TextInput
        value={name}
        style={[inputs.input, { paddingVertical: 10 }]}
        placeholder="Имя"
        onChangeText={name => setName(name)}
      />
      <TextInput
        value={email}
        style={[inputs.input, { paddingVertical: 10 }]}
        placeholder="Электронная почта"
        onChangeText={email => setEmail(email)}
      />
      <MaskInput
        value={phone}
        style={[inputs.input, { paddingVertical: 10 }]}
        placeholder="Телефон"
        keyboardType="numeric"
        maxLength={16}
        onChangeText={(masked, unmasked) => {
          setPhone(unmasked)
        }}
        mask={['+', '7', '(', /\d/, /\d/, /\d/, ')', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]}
      />
      <TextInput
        value={password}
        style={[inputs.input, { paddingVertical: 10 }]}
        placeholder="Пароль"
        secureTextEntry={true}
        onChangeText={password => setPassword(password)}
      />
      <TouchableOpacity style={buttons.authButton} onPress={() => signUp()}>
        <Text style={[{ fontSize: 18 }]}>Зарегистрироваться</Text>
      </TouchableOpacity>
      <Text style={text.errorMessage}>{validationError}</Text>
    </View>
  )
}

export default RegisterScreen
