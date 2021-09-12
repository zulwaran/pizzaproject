import React from 'react'
import { FlatList, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

//Components
import CartItem from './CartItem'
import EmptyFlatList from '../../reusable/EmptyFlatList/EmptyFlatList'
import CustomButton from '../../reusable/CustomButton/CustomButton'

//Reducer
import { deleteItemFromCartAction } from '../../../actions/cartActions'

//Styles
import { CartScreenStyles } from './CartScreenStyles'

const CartScreenContainer = ({ navigation }) => {
  const dispatch = useDispatch()
  const totalOrderSum = useSelector(state => state.cart.totalOrderSum)
  const DATA = useSelector(state => state.cart.userCart)
  const deleteItemFromCart = item => {
    dispatch(deleteItemFromCartAction(item))
  }

  if (DATA.length === 0) {
    return <EmptyFlatList type={'CartScreen'} />
  } else if (DATA.length > 0) {
    return (
      <View style={CartScreenStyles.cartContainer}>
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
