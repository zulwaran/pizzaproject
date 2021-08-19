import React, { useState } from 'react'
import firebase from 'firebase'
import { StyleSheet, View, Button, TextInput } from 'react-native'

const RegisterScreen = ({ }) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signUp = () => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((result) => {
                console.log(result)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    return (
        <View >
            <TextInput
                placeholder="name"
                onChangeText={(name) => setName(name)} />
            <TextInput
                placeholder="email"
                onChangeText={(email) => setEmail(email)} />
            <TextInput
                placeholder="password"
                onChangeText={(password) => setPassword(password)} />
            <Button
                title="Sign Up"
                onPress={() => signUp()} />
        </View>
    )
}

const styles = StyleSheet.create({
});

export default RegisterScreen