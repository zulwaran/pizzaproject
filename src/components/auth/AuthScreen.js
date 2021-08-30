import React, { useState } from 'react'
import { firebase } from '../../../firebase'
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native'

const AuthScreen = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signUp = () => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((result) => {
                console.log(result)
            })
            .catch((error) => {
                console.log(error)
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
            <TouchableOpacity style={styles.button} onPress={() => signUp()}>
                <Text>Вход</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Регистрация")}>
                <Text>
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

export default AuthScreen
