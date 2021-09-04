import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

const ModalItems = (props) => {
    const modalType = useSelector(state => state.modal.modalType)
    const dispatch = useDispatch();
    const getTime = (value) => {
        let data = value
        switch (modalType) {
            case 'date':
                if (data === "Сегодня, на точное время") {
                    data = 'Сегодня'
                }
                dispatch({ type: "SELECT_DELIVERY_DAY", payload: data })
                break;
            case 'time':
                dispatch({ type: "SELECT_DELIVERY_TIME", payload: data })
                break;
        }
    }
    return (
        <TouchableOpacity
            style={[{ borderColor: "#000", borderWidth: 2, borderRadius: 25, marginBottom: 10 }]}
            onPress={() => { getTime(props.item) }}>
            <Text style={[{ fontSize: 18, paddingVertical: 5, paddingHorizontal: 30 }]}>
                {props.item}
            </Text>
        </TouchableOpacity>
    )
}
export default ModalItems