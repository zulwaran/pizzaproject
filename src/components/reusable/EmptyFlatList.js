import React from 'react'
import { Text } from 'react-native'

//Styles
import { text } from '../../../assets/styles/text';

const EmptyFlatList = () => {
    return (
        <Text style={text.emptyList}>
            Заказов нет
        </Text>
    )
}
export default EmptyFlatList
