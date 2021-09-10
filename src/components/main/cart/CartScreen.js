import React from 'react'
import { FlatList, TouchableOpacity, Text, View } from 'react-native'
import { useSelector } from 'react-redux'

//Components
import CartItem from './CartItem'

//Styles
import { container } from '../../../../assets/styles/container'
import { text } from '../../../../assets/styles/text'
import { buttons } from '../../../../assets/styles/buttons'

const CartScreen = ({ navigation }) => {
  const totalOrderSum = useSelector(state => state.cart.totalOrderSum)
  const DATA = useSelector(state => state.cart.userCart)
  if (DATA.length === 0) {
    return (
      <View style={text.cartTextEmpty}>
        <Text>Корзина пуста</Text>
      </View>
    )
  } else if (DATA.length > 0) {
    return (
      <View style={container.cartContainer}>
        <FlatList
          data={DATA}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => <CartItem item={item} index={index} />}
        />
        <TouchableOpacity
          onPress={() => {
            createOrder({ DATA })
          }}
        ></TouchableOpacity>
        <TouchableOpacity
          disabled={totalOrderSum < 350 ? true : false}
          style={totalOrderSum < 350 ? [buttons.cart__button, { backgroundColor: '#767976' }] : buttons.cart__button}
          onPress={() => navigation.navigate('OrderConfirm')}
        >
          {totalOrderSum < 350 ? (
            <Text style={[text.cartTextbutton, { fontSize: 18, textAlign: 'center' }]}>
              Сумма заказа должна быть не менее 350 ₽
            </Text>
          ) : (
            <Text style={text.cartTextbutton}>{totalOrderSum} ₽ Оформить заказ</Text>
          )}
        </TouchableOpacity>
      </View>
    )
  }
}

export default CartScreen
