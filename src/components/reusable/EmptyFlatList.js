import React from 'react'
import { Text, StyleSheet } from 'react-native'

const EmptyFlatList = () => {
    return (
        <Text style={styles.text}>
            Заказов нет
        </Text>
    )
}
const styles = StyleSheet.create({
    text: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
});
export default EmptyFlatList
