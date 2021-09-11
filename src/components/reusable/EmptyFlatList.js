import React from 'react'
import { Text, View } from 'react-native'

//Styles
import { div } from '../../../assets/styles/div'

const EmptyFlatList = props => {
  switch (props.type) {
    case 'CartScreen':
      return (
        <View style={div.cartEmpty}>
          <Text>Корзина пуста</Text>
        </View>
      )
    case 'OrderListScreen':
      return <Text style={text.emptyList}>Заказов нет</Text>
    default:
      return null
  }
}
export default EmptyFlatList
