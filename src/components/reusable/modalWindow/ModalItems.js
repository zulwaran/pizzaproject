import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

const ModalItems = (props) => {
    const deliveryDay = useSelector(state => state.order.deliveryDay)
    const deliveryTime = useSelector(state => state.order.deliveryTime)
    const modalType = useSelector(state => state.modal.modalType)
    const dispatch = useDispatch();
    const getTime = (value) => {
        switch (modalType) {
            case 'date':
                dispatch({ type: "SELECT_DELIVERY_DAY", payload: value })
                break;
            case 'time':
                dispatch({ type: "SELECT_DELIVERY_TIME", payload: value })
                break;
        }
    }
    return (
        <TouchableOpacity
            style={
                props.item === deliveryDay || props.item === deliveryTime ?
                    [styles.button, { backgroundColor: "#FFC000" }]
                    : styles.button}
            onPress={() => { getTime(props.item) }}>
            <Text style={styles.text}>
                {props.item}
            </Text>
        </TouchableOpacity >
    )
}
const styles = StyleSheet.create({
    button: {
        borderColor: "#000",
        borderWidth: 2,
        borderRadius: 25,
        marginBottom: 10,
    },
    text: {
        fontSize: 18,
        paddingVertical: 5,
        paddingHorizontal: 30
    },
})
export default ModalItems