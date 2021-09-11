import React, { useState } from 'react'

//Firebase
import { firebase, db } from '../../../firebase'

//Components
import RegisterScreen from './RegisterScreen'

const RegisterContainer = () => {
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
    <RegisterScreen
      name={name}
      email={email}
      password={password}
      phone={phone}
      validationError={validationError}
      setName={setName}
      setPhone={setPhone}
      setPassword={setPassword}
      setEmail={setEmail}
      signUp={signUp}
    />
  )
}

export default RegisterContainer
