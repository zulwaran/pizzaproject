import React from 'react'
import { FlatList, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

//Components
import CartItem from './CartItem'
import EmptyFlatList from '../../reusable/EmptyFlatList'
import CustomButton from '../../reusable/customButton'

//Reducer
import { DELETE_FROM_CART } from '../../../reducers/cart'

//Styles
import { container } from '../../../../assets/styles/container'

const CartScreenContainer = ({ navigation }) => {
  const dispatch = useDispatch()
  const totalOrderSum = useSelector(state => state.cart.totalOrderSum)
  const DATA = useSelector(state => state.cart.userCart)
  const deleteItemFromCart = item => {
    dispatch({ type: DELETE_FROM_CART, payload: item })
  }

  if (DATA.length === 0) {
    return <EmptyFlatList type={'CartScreen'} />
  } else if (DATA.length > 0) {
    return (
      <View style={container.cartContainer}>
        <FlatList
          data={DATA}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <CartItem item={item} deleteItemFromCart={deleteItemFromCart} />}
        />
        <CustomButton type={'CartButton'} totalOrderSum={totalOrderSum} navigation={navigation} />
      </View>
    )
  }
}

export default CartScreenContainer
