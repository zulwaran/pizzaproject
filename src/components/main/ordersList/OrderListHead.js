import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import PropTypes from 'prop-types'

//Styles
import { OrderListStyles } from './OrderListStyles'

const OrderListHead = props => {
  return (
    <View style={OrderListStyles.orderListContainer}>
      <TouchableOpacity onPress={() => props.setToggleOrderStatus('actual')}>
        <Text
          style={
            props.toggleOrderStatus === 'actual' ? OrderListStyles.orderListMenuActive : OrderListStyles.orderListMenu
          }
        >
          Текущие заказы
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.setToggleOrderStatus('history')}>
        <Text
          style={
            props.toggleOrderStatus === 'history' ? OrderListStyles.orderListMenuActive : OrderListStyles.orderListMenu
          }
        >
          История заказов
        </Text>
      </TouchableOpacity>
    </View>
  )
}

OrderListHead.propTypes = {
  toggleOrderStatus: PropTypes.string,
  setToggleOrderStatus: PropTypes.func
}

export default OrderListHead
