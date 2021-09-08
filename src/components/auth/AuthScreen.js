import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'

//Firebase
import { firebase } from '../../../firebase'

//Styles
import { buttons } from '../../../assets/styles/buttons'
import { container } from '../../../assets/styles/container'
import { inputs } from '../../../assets/styles/inputs'
import { text } from '../../../assets/styles/text'

const AuthScreen = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const signUp = () => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((result) => {
            })
            .catch((error) => {
                setError('Неверный логин или пароль')
            })
    }
    return (
        <View style={container.authContainer}>
            <TextInput
                style={[inputs.input, { paddingVertical: 10 }]}
                placeholder="Электронная почта"
                onChangeText={(email) => setEmail(email)} />
            <TextInput
                style={[inputs.input, { paddingVertical: 10 }]}
                placeholder="Пароль"
                secureTextEntry={true}
                onChangeText={(password) => setPassword(password)} />
            {
                error ? <Text style={text.errorMessage}>{error}</Text> : null
            }
            <TouchableOpacity style={buttons.authButton} onPress={() => signUp()}>
                <Text style={text.textSmall}>Вход</Text>
            </TouchableOpacity>
            <TouchableOpacity style={buttons.authButton} onPress={() => navigation.navigate("RegisterScreen")}>
                <Text style={[{ fontSize: 18 }]}>
                    Регистрация
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default AuthScreen
