import React from 'react'
import { View, Text, TextInput, } from 'react-native'
import { useDispatch } from 'react-redux';

//Icons
import Ionicons from 'react-native-vector-icons/Ionicons'

//Reducers
import { SET_APARTMENT, SET_FLOOR, SET_HOME, SET_PORCH, SET_STREET } from '../../../reducers/order';

//Styles
import { container } from '../../../../assets/styles/container';
import { images } from '../../../../assets/styles/images';
import { inputs } from '../../../../assets/styles/inputs';
import { text } from '../../../../assets/styles/text';

const AddressSection = () => {
    const dispatch = useDispatch();

    // лучше создать файл с экшинами(это функции, которые будут возвращать объект с типом и payload)
    const setStreetAction = (payload) => ({
        type: SET_STREET,
        payload,
    });
    const setStreet = (item) => {
        dispatch(setStreetAction(item))
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
            <View style={container.subtitleContainer}>
                <Ionicons
                    style={images.icon}
                    name="location-sharp"
                    color="red"
                    size={26} />
                <Text style={text.confirmSubtitle}>
                    Куда
                </Text>
            </View>
            <Text style={text.inputLabel}>
                Улица*
            </Text>
            <TextInput
                style={inputs.input}
                // не очень разумно вызывать диспатч на onChangeText, лучше делать это на onBlur
                // инпуты должны быть контролируемые то есть иметь value, которое ты будешь хранить в seState
                onChangeText={setStreet} />
            <Text
                style={text.inputLabel}>
                Дом*
            </Text>
            <TextInput
                style={inputs.input}
                keyboardType='numeric'
                onChangeText={setHome} />
            <Text
                style={text.inputLabel}>
                Подъезд
            </Text>
            <TextInput
                style={inputs.input}
                keyboardType='numeric'
                onChangeText={setPorch} />

            <Text
                style={text.inputLabel}>
                Этаж
            </Text>
            <TextInput
                style={inputs.input}
                keyboardType='numeric'
                onChangeText={setFloor} />

            <Text
                style={text.inputLabel}>
                Квартира
            </Text>
            <TextInput
                style={inputs.input}
                keyboardType='numeric'
                onChangeText={setApartment} />
        </View>
    )
}

export default AddressSection
