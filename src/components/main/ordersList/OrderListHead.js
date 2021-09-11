import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import PropTypes from 'prop-types'

//Styles
import { text } from '../../../../assets/styles/text'
import { container } from '../../../../assets/styles/container'

const OrderListHead = props => {
  return (
    <View style={container.OrderListContainer}>
      <TouchableOpacity onPress={() => props.setToggleOrderStatus('actual')}>
        <Text style={props.toggleOrderStatus === 'actual' ? text.orderListMenuActive : text.orderListMenu}>
          Текущие заказы
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.setToggleOrderStatus('history')}>
        <Text style={props.toggleOrderStatus === 'history' ? text.orderListMenuActive : text.orderListMenu}>
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
