import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';

//Reducers
import { TOGGLE_DELIVERY_TYPE } from '../../../reducers/order';
import { OPEN_MODAL } from '../../../reducers/modal';

//Components
import RadioButton from '../../reusable/RadioButton';
import ModalPopUp from '../../reusable/modalWindow/ModalPopUp';

//Styles
import { text } from '../../../../assets/styles/text';
import { inputs } from '../../../../assets/styles/inputs';
import { buttons } from '../../../../assets/styles/buttons';

const OrderConfirmSelectTime = () => {
    const dispatch = useDispatch();

    const type = {
        now: "Ближайшее",
        later: "Позже",
    }
    const deliveryType = useSelector(state => state.order.deliveryType)
    const deliveryDay = useSelector(state => state.order.deliveryDay)
    const deliveryTime = useSelector(state => state.order.deliveryTime)


    const toggleDeliveryType = (item) => {
        dispatch({ type: TOGGLE_DELIVERY_TYPE, payload: item })
    }
    const toggleModal = (type) => {
        dispatch({ type: OPEN_MODAL, payload: type })
    }
    return (
        <View>
            <TouchableOpacity
                style={buttons.radioButton}
                onPress={() => { toggleDeliveryType(type.now) }}>
                <RadioButton type={type.now} radioType="delivery" />
                <Text style={text.paymentType}>
                    Как можно скорее
                </Text>
            </TouchableOpacity>
            {
                deliveryType === type.later ?
                    <TouchableOpacity
                        style={buttons.radioButton}>
                        <RadioButton type={type.later} radioType="delivery" />
                        <Text
                            onPress={() => toggleModal("date")}
                            style={[inputs.inptTime, { width: '60%' }]}>
                            {deliveryDay}
                        </Text>
                        <Text
                            onPress={() => toggleModal("time")}
                            style={inputs.inptTime}>
                            {deliveryTime}
                        </Text>
                    </TouchableOpacity>
                    : <TouchableOpacity
                        style={buttons.radioButton}
                        onPress={() => { toggleDeliveryType(type.later) }}>
                        <RadioButton type={type.later} radioType="delivery" />
                        <Text style={text.paymentType}>
                            На точное время
                        </Text>
                    </TouchableOpacity>
            }
            <ModalPopUp />
        </View>
    )
}

export default OrderConfirmSelectTime