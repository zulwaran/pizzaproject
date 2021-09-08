import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

//Reducers
import { SELECT_DELIVERY_DAY, SELECT_DELIVERY_TIME } from '../../../reducers/order'

//Styles
import { buttons } from '../../../../assets/styles/buttons'
import { text } from '../../../../assets/styles/text'


const ModalItems = (props) => {
    const deliveryDay = useSelector(state => state.order.deliveryDay)
    const deliveryTime = useSelector(state => state.order.deliveryTime)
    const modalType = useSelector(state => state.modal.modalType)
    const dispatch = useDispatch();
    const getTime = (value) => {
        switch (modalType) {
            case 'date':
                dispatch({ type: SELECT_DELIVERY_DAY, payload: value })
                break;
            case 'time':
                dispatch({ type: SELECT_DELIVERY_TIME, payload: value })
                break;
        }
    }
    return (
        <TouchableOpacity
            style={
                props.item === deliveryDay || props.item === deliveryTime ?
                    [buttons.selectTimeButton, { backgroundColor: "#FFC000" }]
                    : buttons.selectTimeButton}
            onPress={() => { getTime(props.item) }}>
            <Text style={text.modalText}>
                {props.item}
            </Text>
        </TouchableOpacity >
    )
}
export default ModalItems