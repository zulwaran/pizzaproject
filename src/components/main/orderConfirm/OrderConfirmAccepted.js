import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux';
import PropTypes, { shape } from 'prop-types'

//Styles
import { buttons } from '../../../../assets/styles/buttons';
import { container } from '../../../../assets/styles/container';
import { images } from '../../../../assets/styles/images';
import { text } from '../../../../assets/styles/text';

const OrderConfirmAccepted = ({ route, navigation }) => {
    const { orderId } = route.params;
    const deliveryType = useSelector(state => state.order.deliveryType)
    const deliveryDay = useSelector(state => state.order.deliveryDay)
    const deliveryTime = useSelector(state => state.order.deliveryTime)

    return (
        <View style={container.orderAcceptedContainer}>
            <Image
                style={images.orderConfirmImage}
                source={{
                    uri: 'https://pngimg.com/uploads/disco_ball/disco_ball_PNG2.png'
                }}
            />
            <View style={[{ alignItems: 'center', }]}>
                <Text style={text.orderConfirmLargeText}>
                    Ваш заказ принят!
                </Text>
                {
                    deliveryType === 'Ближайшее' ?
                        <Text style={text.smallText}>
                            Мы доставим ваш заказ как можно скорее
                        </Text>
                        :
                        <Text style={text.smallText}>
                            Мы доставим ваш заказ {deliveryDay} к {deliveryTime}
                        </Text>
                }
                <Text style={text.smallText}>
                    Заказ № {orderId}
                </Text>
            </View>
            <TouchableOpacity style={buttons.redirectingButton}
                onPress={() => navigation.navigate("OrderListScreen")}>
                <Text style={[{ fontSize: 16 }]}>
                    Проверить статус заказа
                </Text>
            </TouchableOpacity>
            <Text style={text.orderConfirmBottomText}>
                Если хотите изменить или отменить заказ, скорее звоните 999-999
            </Text>
        </View>
    )
}
OrderConfirmAccepted.propTypes = {
    route: PropTypes.shape({
        params: PropTypes.shape({
            deliveryDate: PropTypes.string,
            orderId: PropTypes.number
        })
    })
}
export default OrderConfirmAccepted
