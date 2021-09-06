import React, { useState } from 'react'
import { firebase } from '../../../firebase'
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native'

const AuthScreen = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const signUp = () => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((result) => {
                console.log(result)
            })
            .catch((error) => {
                console.log(error)
                setError('Неверный логин или пароль')
            })
    }
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Электронная почта"
                onChangeText={(email) => setEmail(email)} />
            <TextInput
                style={styles.input}
                placeholder="Пароль"
                secureTextEntry={true}
                onChangeText={(password) => setPassword(password)} />
            {
                error ? <Text style={styles.errorMessage}>{error}</Text> : null
            }
            <TouchableOpacity style={styles.button} onPress={() => signUp()}>
                <Text style={styles.buttonText}>Вход</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Регистрация")}>
                <Text style={styles.buttonText}>
                    Регистрация
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    input: {
        fontSize: 18,
        padding: 10,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#ddd",
        borderStyle: "solid",
        borderRadius: 10,
    },
    errorMessage: {
        color: "red",
        marginLeft: 10
    },
    button: {
        backgroundColor: "#ffc000",
        borderWidth: 5,
        borderColor: "#ffc000",
        borderStyle: "solid",
        borderRadius: 30,
        padding: 10,
        marginTop: 10,
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 18
    }
});

export default AuthScreen
