import React, { useState } from 'react'
import { firebase, db } from '../../../firebase'
import { StyleSheet, View, Button, TextInput, Text, TouchableOpacity } from 'react-native'

const RegisterScreen = ({ }) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signUp = () => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((result) => {
                db.collection("users").doc(result.user.uid).set({
                    name: name,
                    email: email
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }
    return (
        <View >
            <TextInput
                style={styles.input}
                placeholder="Имя"
                onChangeText={(name) => setName(name)} />
            <TextInput
                style={styles.input}
                placeholder="Электронная почта"
                onChangeText={(email) => setEmail(email)} />
            <TextInput
                style={styles.input}
                placeholder="Пароль"
                secureTextEntry={true}
                onChangeText={(password) => setPassword(password)} />
            <TouchableOpacity
                style={styles.button}
                onPress={() => signUp()} >
                <Text>
                    Зарегистрироваться
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        padding: 10,
        backgroundColor: "#fff",
        marginBottom: 5,
    },
    button: {
        marginTop: 5,
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
    }
});

export default RegisterScreen