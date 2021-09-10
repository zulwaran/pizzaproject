import { db } from '../../firebase'
import { GET_USER_INFO } from '../reducers/user'
import { GET_ORDER_LIST } from '../reducers/order'
import { FETCH_SLIDER_ITEMS, FETCH_PRODUCT_LIST } from '../reducers/menu'
import { FETCH_CART } from '../reducers/cart'




export const fetchUserInfo = async (dispatch, currentUser) => {
  const userRef = db.collection('users').doc(currentUser.uid)
  const doc = await userRef.get()
  dispatch({ type: GET_USER_INFO, payload: doc.data() })
}

export const fetchOrders = (dispatch, currentUser) => {
  db.collection('orders')
    .where('uid', '==', currentUser.uid)
    .get()
    .then(querySnapshot => {
      let orderList = []
      querySnapshot.forEach(doc => {
        orderList = [...orderList, doc.data()]
      })
      dispatch({ type: GET_ORDER_LIST, payload: orderList })
    })
}
export const fetchSlider = dispatch => {
  db.collection('slider')
    .get()
    .then(querySnapshot => {
      let sliderList = []
      querySnapshot.forEach(doc => {
        sliderList = [...sliderList, doc.data()]
      })
      dispatch({ type: FETCH_SLIDER_ITEMS, payload: sliderList })
    })
}
export const fetchProduct = dispatch => {
  db.collection('products')
    .get()
    .then(querySnapshot => {
      let productList = []
      querySnapshot.forEach(doc => {
        productList = [...productList, doc.data()]
      })
      dispatch({ type: FETCH_PRODUCT_LIST, payload: productList })
    })
}

export const fetchCart = (dispatch, currentUser) => {
  db.collection('cart')
    .where('uid', '==', currentUser.uid)
    .get()
    .then(querySnapshot => {
      let cartList = []
      querySnapshot.forEach(doc => {
        cartList = doc.data()
      })
      if (cartList.items) {
        dispatch({ type: FETCH_CART, payload: cartList })
      }
    })
}
