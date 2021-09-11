import React from 'react'
import { View, Text, FlatList } from 'react-native'
import PropTypes from 'prop-types'

//Components
import CartItem from '../cart/CartItem'

//Styles
import { container } from '../../../../assets/styles/container'
import { text } from '../../../../assets/styles/text'

const ProductSection = props => {
  return props.productList.length > 0 ? (
    <View>
      <View style={container.subtitleContainer}>
        <Text style={text.confirmSubtitle}>Убедитесь в правильности выбранных товаров</Text>
      </View>
      <FlatList
        data={props.productList}
        keyExtractor={(item, index) => item.id.toString()}
        renderItem={({ item }) => <CartItem item={item} deleteItemFromCart={props.deleteItemFromCart} />}
      />
      <Text style={[text.confirmSubtitle, { alignSelf: 'flex-start' }]}>= К оплате: {props.totalOrderSum} Р</Text>
    </View>
  ) : null
}

ProductSection.propTypes = {
  totalOrderSum: PropTypes.number,
  productList: PropTypes.array,
  deleteItemFromCart: PropTypes.func
}

export default ProductSection
