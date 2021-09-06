import React from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useDispatch, useSelector } from 'react-redux';
import { SET_NAME, SET_PHONE } from '../../../reducers/user';

const UserInfo = () => {
    const dispatch = useDispatch();
    const name = useSelector(state => state.user.name);
    const phone = useSelector(state => state.user.phone);
    const setName = (item) => {
        dispatch({ type: SET_NAME, payload: item })
    }
    const setPhone = (item) => {
        dispatch({ type: SET_PHONE, payload: item })
    }
    return (
        <View>
            <View style={styles.subtitleContainer}>
                <MaterialCommunityIcons
                    style={styles.icon}
                    name="glasses"
                    size={30} />
                <Text style={styles.confirmSubtitle}>
                    Ваши данные
                </Text>
            </View>
            <Text style={styles.inputLabel}>
                Имя*
            </Text>
            <TextInput
                value={name}
                style={styles.input}
                onChangeText={setName} />
            <Text style={styles.inputLabel}>
                Телефон*
            </Text>
            <TextInput
                value={phone}
                keyboardType='numeric'
                style={styles.input}
                onChangeText={setPhone}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 5,
        flexDirection: 'column',
    },
    subtitleContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 20,
    },
    confirmSubtitle: {
        fontSize: 28,
        textAlign: "center",
        alignSelf: "center",
    },
    input: {
        fontSize: 18,
        paddingHorizontal: 10,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#ddd",
        borderStyle: "solid",
        borderRadius: 10,
    },
    inputLabel: {
        marginTop: 10,
        fontSize: 18,
    },
    icon: {
        paddingTop: 5,
        marginRight: 5,
    },
});

export default UserInfo
