import React, { useState } from 'react'
import { ScrollView, Text, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

//Firebase DB
import { db, firebase } from '../../../../firebase'

//Reducers & Functions
import { deliveryDate } from '../../../functions/DateFunctions'
import { Order } from '../../../functions/Constructors'
import { ADD_NEW_ORDER } from '../../../reducers/order'
import { CLEAR_CART } from '../../../reducers/cart'

//Components
import AddressSection from './AddressSection'
import TimeSection from './TimeSection'
import UserInfo from './UserInfo'
import CommentSection from './CommentSection'
import PaymentTypeSection from './PaymentTypeSection'
import ProductSection from './ProductSection'

//Styles
import { buttons } from '../../../../assets/styles/buttons'
import { text } from '../../../../assets/styles/text'
import { container } from '../../../../assets/styles/container'

const OrderConfirm = ({ navigation }) => {
  const dispatch = useDispatch()
  const uid = firebase.auth().currentUser.uid
  const totalOrderSum = useSelector(state => state.cart.totalOrderSum)
  const DATA = useSelector(state => state.cart.userCart)

  //Address
  const street = useSelector(state => state.order.street)
  const home = useSelector(state => state.order.home)
  const apartment = useSelector(state => state.order.apartment)
  const porch = useSelector(state => state.order.porch)
  const floor = useSelector(state => state.order.floor)

  //Payment Type
  const paymentType = useSelector(state => state.order.paymentType)

  //Time
  const deliveryType = useSelector(state => state.order.deliveryType)
  const deliveryDay = useSelector(state => state.order.deliveryDay)
  const deliveryTime = useSelector(state => state.order.deliveryTime)

  //Comment
  const comment = useSelector(state => state.order.comment)

  //User Info
  const name = useSelector(state => state.user.name)
  const phone = useSelector(state => state.user.phone)

  const [validation, setValidation] = useState('')

  const type = {
    cash: 'Наличными',
    card: 'Картой',
    now: 'Ближайшее',
    later: 'Позже'
  }
  const createOrder = () => {
    if (!street || !home || !name || !phone || (deliveryType !== 'Ближайшее' && !deliveryTime)) {
      setValidation('Не все обязательные поля были заполнены')
      return
    }
    if (phone.length < 10) {
      setValidation('Неправильный формат телефона')
      return
    }

    let address = street + '-' + home + ' квартира ' + apartment + ' подъезд ' + porch + ' этаж ' + floor

    let order = new Order(
      uid,
      name,
      phone,
      DATA,
      address,
      comment,
      paymentType,
      totalOrderSum,
      deliveryDate(deliveryDay, deliveryTime)
    )

    db.collection('orders').doc().set(Object.assign({}, order))
    addNewOrder(order)
    clearCart()
    navigation.navigate('OrderConfirmAccepted', { orderId: order.id, deliveryDate: order.deliveryDate })
  }

  const addNewOrder = item => {
    dispatch({ type: ADD_NEW_ORDER, payload: item })
  }
  const clearCart = () => {
    dispatch({ type: CLEAR_CART })
  }

  return (
    <ScrollView style={container.confirmSectionContainer}>
      <AddressSection />
      <TimeSection />
      <UserInfo />
      <CommentSection />
      <ProductSection />
      <PaymentTypeSection />
      <TouchableOpacity
        disabled={totalOrderSum < 350 ? true : false}
        style={
          totalOrderSum < 350 ? [buttons.confirm__button, { backgroundColor: '#767976' }] : buttons.confirm__button
        }
        onPress={() => {
          createOrder({ DATA })
        }}
      >
        {totalOrderSum < 350 ? (
          <Text style={(text.confirmOrderButtonText, [{ fontSize: 18, textAlign: 'center' }])}>
            Сумма заказа должна быть не менее 350 Р
          </Text>
        ) : (
          <Text style={text.confirmOrderButtonText}>Оформить заказ →</Text>
        )}
      </TouchableOpacity>
      {validation ? <Text style={[{ color: 'red', fontSize: 16, marginBottom: 30 }]}>{validation}</Text> : null}
    </ScrollView>
  )
}

export default OrderConfirm
