import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

//Components
import CartItem from '../main/cart/CartItem'

//Styles
import { OrderConfirmStyles } from './OrderConfirmStyles'

const ProductSection = props => {
  return props.productList.length > 0 ? (
    <View>
      <View style={OrderConfirmStyles.subtitleContainer}>
        <Text style={OrderConfirmStyles.confirmSubtitle}>Убедитесь в правильности выбранных товаров</Text>
      </View>
      <FlatList
        data={props.productList}
        keyExtractor={(item, index) => item.id.toString()}
        renderItem={({ item }) => <CartItem item={item} deleteItemFromCart={props.deleteItemFromCart} />}
      />
      <Text style={StyleSheet.flatten([OrderConfirmStyles.confirmSubtitle, { alignSelf: 'flex-start' }])}>
        = К оплате: {props.totalOrderSum} Р
      </Text>
    </View>
  ) : null
}

ProductSection.propTypes = {
  totalOrderSum: PropTypes.number,
  productList: PropTypes.array,
  deleteItemFromCart: PropTypes.func
}

export default ProductSection
