import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

//Firebase DB
import { db, firebase } from '../../../../firebase'

//Reducers & Functions
import { deliveryDate } from '../../../functions/DateFunctions'
import { Order } from '../../../functions/Constructors'
import {
  ADD_NEW_ORDER,
  SET_APARTMENT,
  SET_COMMENT,
  SET_FLOOR,
  SET_HOME,
  SET_PORCH,
  SET_STREET,
  TOGGLE_PAYMENT_TYPE,
  TOGGLE_DELIVERY_TYPE
} from '../../../reducers/order'
import { CLEAR_CART, DELETE_FROM_CART } from '../../../reducers/cart'
import { OPEN_MODAL } from '../../../reducers/modal'

//Components
import AddressSection from './AddressSection'
import TimeSection from './TimeSection'
import UserInfo from './UserInfo'
import CommentSection from './CommentSection'
import PaymentTypeSection from './PaymentTypeSection'
import ProductSection from './ProductSection'

//Styles
import { container } from '../../../../assets/styles/container'
import CustomButton from '../../reusable/CustomButton'
import ValidationMessage from '../../reusable/ValidationMessage'

const OrderConfirmContainer = ({ navigation }) => {
  const dispatch = useDispatch()
  const uid = firebase.auth().currentUser.uid
  const totalOrderSum = useSelector(state => state.cart.totalOrderSum)
  const DATA = useSelector(state => state.cart.userCart)

  const [validation, setValidation] = useState('')

  //Address
  const [street, setStreet] = useState(useSelector(state => state.order.street))
  const [home, setHome] = useState(useSelector(state => state.order.home))
  const [apartment, setApartment] = useState(useSelector(state => state.order.apartment))
  const [porch, setPorch] = useState(useSelector(state => state.order.porch))
  const [floor, setFloor] = useState(useSelector(state => state.order.floor))
  const setStateStreet = () => {
    dispatch({ type: SET_STREET, payload: street })
  }
  const setStateHome = () => {
    dispatch({ type: SET_HOME, payload: home })
  }
  const setStateApartment = () => {
    dispatch({ type: SET_APARTMENT, payload: apartment })
  }
  const setStatePorch = () => {
    dispatch({ type: SET_PORCH, payload: porch })
  }
  const setStateFloor = () => {
    dispatch({ type: SET_FLOOR, payload: floor })
  }

  //User Info
  const [name, setName] = useState(useSelector(state => state.user.name))
  const [phone, setPhone] = useState(useSelector(state => state.user.phone))

  //Comment
  const [comment, setComment] = useState(useSelector(state => state.order.comment))
  const setStateComment = () => {
    dispatch({ type: SET_COMMENT, payload: comment })
  }

  //Payment Type
  const paymentType = useSelector(state => state.order.paymentType)
  const togglePaymentType = item => {
    dispatch({ type: TOGGLE_PAYMENT_TYPE, payload: item })
  }

  //Time
  const deliveryType = useSelector(state => state.order.deliveryType)
  const deliveryDay = useSelector(state => state.order.deliveryDay)
  const deliveryTime = useSelector(state => state.order.deliveryTime)
  const toggleDeliveryType = item => {
    dispatch({ type: TOGGLE_DELIVERY_TYPE, payload: item })
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

  const deleteItemFromCart = item => {
    dispatch({ type: DELETE_FROM_CART, payload: item })
  }
  const addNewOrder = item => {
    dispatch({ type: ADD_NEW_ORDER, payload: item })
  }
  const clearCart = () => {
    dispatch({ type: CLEAR_CART })
  }
  const toggleModal = type => {
    dispatch({ type: OPEN_MODAL, payload: type })
  }

  return (
    <ScrollView style={container.confirmSectionContainer}>
      <AddressSection
        street={street}
        home={home}
        porch={porch}
        floor={floor}
        apartment={apartment}
        setStreet={setStreet}
        setHome={setHome}
        setPorch={setPorch}
        setFloor={setFloor}
        setApartment={setApartment}
        setStateStreet={setStateStreet}
        setStateHome={setStateHome}
        setStatePorch={setStatePorch}
        setStateFloor={setStateFloor}
        setStateApartment={setStateApartment}
      />
      <TimeSection
        deliveryType={deliveryType}
        deliveryDay={deliveryDay}
        deliveryTime={deliveryTime}
        toggleModal={toggleModal}
        toggleDeliveryType={toggleDeliveryType}
      />
      <UserInfo name={name} phone={phone} setName={setName} setPhone={setPhone} />
      <CommentSection comment={comment} setComment={setComment} setStateComment={setStateComment} />
      <ProductSection totalOrderSum={totalOrderSum} productList={DATA} deleteItemFromCart={deleteItemFromCart} />
      <PaymentTypeSection paymentType={paymentType} togglePaymentType={togglePaymentType} />
      <CustomButton
        type={'CreateOrderButton'}
        totalOrderSum={totalOrderSum}
        createOrder={createOrder}
        productList={DATA}
      />
      <ValidationMessage type={'OrderConfirmError'} validation={validation} />
    </ScrollView>
  )
}

export default OrderConfirmContainer
