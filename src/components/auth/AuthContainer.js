import React, { useState } from 'react'
import AuthScreen from './AuthScreen'

//Firebase
import { firebase } from '../../../firebase'

const AuthContainer = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const signUp = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(result => {})
      .catch(error => {
        setError('Неверный логин или пароль')
      })
  }
  return (
    <AuthScreen
      navigation={navigation}
      email={email}
      password={password}
      error={error}
      setEmail={setEmail}
      setPassword={setPassword}
      signUp={signUp}
    />
  )
}

export default AuthContainer
