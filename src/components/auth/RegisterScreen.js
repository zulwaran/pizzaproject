import React, { useState } from 'react'
import { firebase, db } from '../../../firebase'
import { StyleSheet, View, TextInput, Text, TouchableOpacity } from 'react-native'

const RegisterScreen = ({ }) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')

    const [validationError, setValidationError] = useState('')

    const signUp = () => {
        if (!name) {
            setValidationError("Имя не может быть пустым")
            return
        }
        if (!phone) {
            setValidationError("Телефон не может быть пустым")
            return
        }
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((result) => {
                db.collection("users").doc(result.user.uid).set({
                    name: name,
                    email: email,
                    phone: phone,
                })
                db.collection("cart").doc().set({
                    uid: result.user.uid,
                    items: []
                })
            })
            .catch((error) => {
                validation(error.code)
            })
    }

    const validation = (value) => {
        switch (value) {
            case "auth/invalid-email":
                setValidationError("Неверный формат электронной почты")
                break;
            case "auth/weak-password":
                setValidationError("Пароль должен быть не менее 6 символов")
        }
    }

    return (
        <View style={styles.container}>
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
                placeholder="Телефон"
                onChangeText={(phone) => setPhone(phone)} />
            <TextInput
                style={styles.input}
                placeholder="Пароль"
                secureTextEntry={true}
                onChangeText={(password) => setPassword(password)} />
            <TouchableOpacity
                style={styles.button}
                onPress={() => signUp()} >
                <Text style={styles.buttonText}>
                    Зарегистрироваться
                </Text>
            </TouchableOpacity>
            <Text style={[{ color: 'red', marginLeft: 10 }]}>{validationError}</Text>
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
        marginBottom: 10,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#ddd",
        borderStyle: "solid",
        borderRadius: 10,
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

export default RegisterScreen