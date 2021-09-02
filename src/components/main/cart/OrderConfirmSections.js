import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import RadioButton from '../../reusable/RadioButton';

const OrderConfirmSelectTime = () => {
    const type = {
        now: "Ближайшее",
        later: "Позже",
    }
    const deliveryType = useSelector(state => state.order.deliveryType)
    const dispatch = useDispatch();

    const toggleDeliveryType = (item) => {
        dispatch({ type: "TOGGLE_DELIVERY_TYPE", payload: item })
    }
    switch (deliveryType) {
        case 'Ближайшее':
            return (
                <View>
                    <TouchableOpacity
                        style={styles.radioButton}
                        onPress={() => { toggleDeliveryType(type.now) }}>
                        <RadioButton type={type.now} radioType="delivery" />
                        <Text style={styles.paymentType}>
                            Как можно скорее
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.radioButton}
                        onPress={() => { toggleDeliveryType(type.later) }}>
                        <RadioButton type={type.later} radioType="delivery" />
                        <Text style={styles.paymentType}>
                            На точное время
                        </Text>
                    </TouchableOpacity>
                </View>
            )
        case 'Позже':
            return (
                <View>
                    <TouchableOpacity
                        style={styles.radioButton}
                        onPress={() => { toggleDeliveryType(type.now) }}>
                        <RadioButton type={type.now} radioType="delivery" />
                        <Text style={styles.paymentType}>
                            Как можно скорее
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <RadioButton type={type.later} radioType="delivery" />
                        <Text style={styles.paymentType}>
                            ЙО
                        </Text>
                    </TouchableOpacity>
                </View>
            )
        default:
            break;
    }
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
        marginBottom: 20,
        borderWidth: 1,
        borderColor: "#ddd",
        borderStyle: "solid",
        borderRadius: 5,
    },
    inputLabel: {
        fontSize: 18,
    },
    icon: {
        paddingTop: 5,
        marginRight: 5,
    },
    radioButton: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 15,
    },
    commentTextArea: {
        padding: 10,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#ddd",
        borderStyle: "solid",
        borderRadius: 5,
    },
    paymentType: {
        fontSize: 17,
        marginLeft: 8,
    },
    card__button: {
        backgroundColor: "#FFC000",
        paddingVertical: 20,
        borderRadius: 10,
        marginVertical: 30,
    },
    card__buttonText: {
        fontWeight: "400",
        fontSize: 28,
        textAlign: "center",
    },
});

export default OrderConfirmSelectTime