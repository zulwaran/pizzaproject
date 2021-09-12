import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'

//Styles
import { OrderConfirmStyles } from './OrderConfirmStyles'

const OrderConfirmAccepted = ({ route, navigation }) => {
  const { orderId } = route.params
  const deliveryType = useSelector(state => state.order.deliveryType)
  const deliveryDay = useSelector(state => state.order.deliveryDay)
  const deliveryTime = useSelector(state => state.order.deliveryTime)

  return (
    <View style={OrderConfirmStyles.orderAcceptedContainer}>
      <Image
        style={OrderConfirmStyles.orderConfirmImage}
        source={{
          uri: 'https://pngimg.com/uploads/disco_ball/disco_ball_PNG2.png'
        }}
      />
      <View style={[{ alignItems: 'center' }]}>
        <Text style={OrderConfirmStyles.orderConfirmLargeText}>Ваш заказ принят!</Text>
        {deliveryType === 'Ближайшее' ? (
          <Text style={OrderConfirmStyles.smallText}>Мы доставим ваш заказ как можно скорее</Text>
        ) : (
          <Text style={OrderConfirmStyles.smallText}>
            Мы доставим ваш заказ {deliveryDay} к {deliveryTime}
          </Text>
        )}
        <Text style={OrderConfirmStyles.smallText}>Заказ № {orderId}</Text>
      </View>
      <TouchableOpacity
        style={OrderConfirmStyles.redirectingButton}
        onPress={() => navigation.navigate('OrderListContainer')}
      >
        <Text style={[{ fontSize: 16 }]}>Проверить статус заказа</Text>
      </TouchableOpacity>
      <Text style={OrderConfirmStyles.orderConfirmBottomText}>
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
