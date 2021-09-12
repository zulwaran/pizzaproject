import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

//Icons
import AntDesign from 'react-native-vector-icons/AntDesign'

//Styles
import { CartScreenStyles } from './CartScreenStyles'

const CartItem = props => {
  return (
    <View>
      <View style={CartScreenStyles.productInfo}>
        <Image
          style={CartScreenStyles.productInfoImage}
          source={{
            uri: props.item.link
          }}
        />
        <View style={CartScreenStyles.productInfoRightHalf}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={StyleSheet.flatten([CartScreenStyles.productTextTitle, { marginBottom: 5 }])}>
              {props.item.title}
            </Text>
            {props.type === 'OrderList' ? null : (
              <TouchableOpacity
                style={[{ paddingRight: 20 }]}
                onPress={() => {
                  props.deleteItemFromCart(props.item)
                }}
              >
                <AntDesign name="closecircleo" color="red" size={26} />
              </TouchableOpacity>
            )}
          </View>
          <Text style={CartScreenStyles.productTextDecription}>{props.item.decription}</Text>
          <Text style={CartScreenStyles.productPriceMedium}>{props.item.price} ₽</Text>
        </View>
      </View>
    </View>
  )
}

CartItem.propTypes = {
  item: PropTypes.shape({
    link: PropTypes.string,
    title: PropTypes.string,
    decription: PropTypes.string,
    price: PropTypes.string
  }),
  type: PropTypes.string,
  deleteItemFromCart: PropTypes.func
}

export default CartItem
