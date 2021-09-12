import React from 'react'
import { Text, View } from 'react-native'

//Styles
import { EmptyFlatListStyles } from './EmptyFlatListStyles'

const EmptyFlatList = props => {
  switch (props.type) {
    case 'CartScreen':
      return (
        <View style={EmptyFlatListStyles.cartEmpty}>
          <Text>Корзина пуста</Text>
        </View>
      )
    case 'OrderListScreen':
      return <Text style={EmptyFlatListStyles.emptyList}>Заказов нет</Text>
    default:
      return null
  }
}
export default EmptyFlatList
