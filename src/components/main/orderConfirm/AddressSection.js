import React from 'react'
import { StyleSheet, View, Text, TextInput, } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useDispatch } from 'react-redux';
import { SET_APARTMENT, SET_FLOOR, SET_HOME, SET_PORCH, SET_STREET } from '../../../reducers/order';

const AddressSection = () => {
    const dispatch = useDispatch();

    const setStreet = (item) => {
        dispatch({ type: SET_STREET, payload: item })
    }
    const setHome = (item) => {
        dispatch({ type: SET_HOME, payload: item })
    }
    const setApartment = (item) => {
        dispatch({ type: SET_APARTMENT, payload: item })
    }
    const setPorch = (item) => {
        dispatch({ type: SET_PORCH, payload: item })
    }
    const setFloor = (item) => {
        dispatch({ type: SET_FLOOR, payload: item })
    }

    return (
        <View>
            <View style={styles.subtitleContainer}>
                <Ionicons
                    style={styles.icon}
                    name="location-sharp"
                    color="red"
                    size={26} />
                <Text style={styles.confirmSubtitle}>
                    Куда
                </Text>
            </View>
            <Text style={styles.inputLabel}>
                Улица*
            </Text>
            <TextInput
                style={styles.input}
                onChangeText={setStreet} />
            <Text
                style={styles.inputLabel}>
                Дом*
            </Text>
            <TextInput
                style={styles.input}
                keyboardType='numeric'
                onChangeText={setHome} />
            <Text
                style={styles.inputLabel}>
                Подъезд
            </Text>
            <TextInput
                style={styles.input}
                keyboardType='numeric'
                onChangeText={setPorch} />

            <Text
                style={styles.inputLabel}>
                Этаж
            </Text>
            <TextInput
                style={styles.input}
                keyboardType='numeric'
                onChangeText={setFloor} />

            <Text
                style={styles.inputLabel}>
                Квартира
            </Text>
            <TextInput
                style={styles.input}
                keyboardType='numeric'
                onChangeText={setApartment} />
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

export default AddressSection