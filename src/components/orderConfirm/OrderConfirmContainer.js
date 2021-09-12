import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

//Firebase DB
import { db, firebase } from '../../../firebase'

//Reducers & Functions
import { deliveryDate } from '../../functions/DateFunctions'
import { Order } from '../../functions/Constructors'
import { openModalAction } from '../../actions/modalActions'
import { cartClearAction, deleteItemFromCartAction } from '../../actions/cartActions'
import {
  addNewOrderAction,
  setApartmentAction,
  setCommentAction,
  setFloorAction,
  setHomeAction,
  setPorchAction,
  setStreetAction,
  toggleDeliveryTypeAction,
  togglePaymentTypeAction
} from '../../actions/orderActions'

//Components
import AddressSection from './AddressSection'
import TimeSection from './TimeSection'
import UserInfo from './UserInfo'
import CommentSection from './CommentSection'
import PaymentTypeSection from './PaymentTypeSection'
import ProductSection from './ProductSection'
import CustomButton from '../reusable/CustomButton/CustomButton'
import ValidationMessage from '../reusable/ValidationMessage/ValidationMessage'

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
    dispatch(setStreetAction(street))
  }
  const setStateHome = () => {
    dispatch(setHomeAction(home))
  }
  const setStateApartment = () => {
    dispatch(setApartmentAction(apartment))
  }
  const setStatePorch = () => {
    dispatch(setPorchAction(porch))
  }
  const setStateFloor = () => {
    dispatch(setFloorAction(floor))
  }

  //User Info
  const [name, setName] = useState(useSelector(state => state.user.name))
  const [phone, setPhone] = useState(useSelector(state => state.user.phone))

  //Comment
  const [comment, setComment] = useState(useSelector(state => state.order.comment))
  const setStateComment = () => {
    dispatch(setCommentAction(comment))
  }

  //Payment Type
  const paymentType = useSelector(state => state.order.paymentType)
  const togglePaymentType = item => {
    dispatch(togglePaymentTypeAction(item))
  }

  //Time
  const deliveryType = useSelector(state => state.order.deliveryType)
  const deliveryDay = useSelector(state => state.order.deliveryDay)
  const deliveryTime = useSelector(state => state.order.deliveryTime)
  const toggleDeliveryType = item => {
    dispatch(toggleDeliveryTypeAction(item))
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
    dispatch(deleteItemFromCartAction(item))
  }
  const addNewOrder = item => {
    dispatch(addNewOrderAction(item))
  }
  const clearCart = () => {
    dispatch(cartClearAction())
  }
  const toggleModal = type => {
    dispatch(openModalAction(type))
  }

  return (
    <ScrollView>
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
