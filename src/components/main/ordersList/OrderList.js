import React, { useState } from 'react'
import { Text, TouchableOpacity, View, FlatList, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

//Components
import CartItem from '../cart/CartItem'

//Icons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'

//Styles
import { OrderListStyles } from './OrderListStyles'
import { BLACK_COLOR } from '../../../../assets/styles/common.style'

const OrderList = ({ item }) => {
  const [isActive, setIsActive] = useState(false)
  return (
    <TouchableOpacity onPress={() => setIsActive(!isActive)} style={OrderListStyles.orderListItemContainer}>
      <View style={{ flexDirection: 'row', marginBottom: 20 }}>
        <View style={OrderListStyles.orderListLeftSide}>
          <View style={OrderListStyles.orderListInfoBlock}>
            <MaterialCommunityIcons style={OrderListStyles.icon} name="clock-time-four" color="#11bd0d" size={24} />
            <Text style={OrderListStyles.textSmall}>{item.deliveryDate}</Text>
          </View>
          <View style={OrderListStyles.orderListInfoBlock}>
            <Ionicons style={OrderListStyles.icon} name="location-sharp" color="red" size={24} />
            <Text style={OrderListStyles.textSmall}>{item.address}</Text>
          </View>
          <Text style={[OrderListStyles.textSmall, { marginLeft: 26 }]}>{item.paymentType}</Text>
        </View>
        <View style={OrderListStyles.orderListRightSide}>
          <Text
            style={
              item.status === 'Готовим' || item.status === 'Везем'
                ? OrderListStyles.orderStatusActive
                : OrderListStyles.orderStatus
            }
          >
            {item.status}
          </Text>
          <Text>№ {item.id}</Text>
        </View>
      </View>
      {item.comment ? (
        <Text style={[{ marginBottom: 10 }, OrderListStyles.textSmall]}>Комментарий: {item.comment}</Text>
      ) : null}
      <Text style={StyleSheet.flatten([OrderListStyles.textLarge, { marginBottom: 10 }])}>
        Стоимость заказа: {item.cost} ₽
      </Text>
      {isActive === true ? (
        <FlatList
          style={[{ marginBottom: 10 }]}
          data={item.items}
          listKey={(item, index) => index.toString()}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <CartItem item={item} type={'OrderList'} />}
        />
      ) : null}
      {isActive === true ? (
        <MaterialIcons style={OrderListStyles.arrowButton} name="arrow-drop-up" color={BLACK_COLOR} size={24} />
      ) : (
        <MaterialIcons style={OrderListStyles.arrowButton} name="arrow-drop-down" color={BLACK_COLOR} size={24} />
      )}
    </TouchableOpacity>
  )
}

OrderList.propTypes = {
  item: PropTypes.shape({
    address: PropTypes.string,
    comment: PropTypes.string,
    cost: PropTypes.number,
    deliveryDate: PropTypes.string,
    id: PropTypes.number,
    paymentType: PropTypes.string,
    status: PropTypes.string,
    items: PropTypes.array
  })
}

export default OrderList
