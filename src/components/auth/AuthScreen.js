import React, { useState } from 'react'
import firebase from 'firebase'
import { StyleSheet, View, Button, TextInput } from 'react-native'

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
                placeholder="email"
                onChangeText={(email) => setEmail(email)} />
            <TextInput
                placeholder="password"
                onChangeText={(password) => setPassword(password)} />
            <Button title="Register" onPress={() => navigation.navigate("RegisterScreen")} />
            <Button title="Login" onPress={() => signUp()} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
});

export default AuthScreen
