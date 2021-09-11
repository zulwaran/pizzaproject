import React, { useState } from 'react'
import { Text, TouchableOpacity, View, FlatList } from 'react-native'
import PropTypes from 'prop-types'

//Components
import CartItem from '../cart/CartItem'

//Icons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'

//Styles
import { text } from '../../../../assets/styles/text'
import { div } from '../../../../assets/styles/div'
import { container } from '../../../../assets/styles/container'
import { images } from '../../../../assets/styles/images'
import { buttons } from '../../../../assets/styles/buttons'

const OrderList = ({ item }) => {
  const [isActive, setIsActive] = useState(false)
  return (
    <TouchableOpacity onPress={() => setIsActive(!isActive)} style={container.OrderListItemContainer}>
      <View
        style={[
          {
            flexDirection: 'row',
            marginBottom: 20
          }
        ]}
      >
        <View style={div.OrderListLeftSide}>
          <View style={div.OrderListInfoBlock}>
            <MaterialCommunityIcons style={images.icon} name="clock-time-four" color="#11bd0d" size={24} />
            <Text style={text.textSmall}>{item.deliveryDate}</Text>
          </View>
          <View style={div.OrderListInfoBlock}>
            <Ionicons style={images.icon} name="location-sharp" color="red" size={24} />
            <Text style={text.textSmall}>{item.address}</Text>
          </View>
          <Text style={[text.textSmall, { marginLeft: 26 }]}>{item.paymentType}</Text>
        </View>
        <View style={div.OrderListRightSide}>
          <Text
            style={item.status === 'Готовим' || item.status === 'Везем' ? text.orderStatusActive : text.orderStatus}
          >
            {item.status}
          </Text>
          <Text>№ {item.id}</Text>
        </View>
      </View>
      {item.comment ? <Text style={[{ marginBottom: 10 }, text.textSmall]}>Комментарий: {item.comment}</Text> : null}
      <Text style={[text.textLarge, { marginBottom: 10 }]}>Стоимость заказа: {item.cost} ₽</Text>
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
        <MaterialIcons style={buttons.arrowButton} name="arrow-drop-up" color="#000" size={24} />
      ) : (
        <MaterialIcons style={buttons.arrowButton} name="arrow-drop-down" color="#000" size={24} />
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
