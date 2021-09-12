import { db } from '../../firebase'
import { fetchCartAction } from '../actions/cartActions'
import { fetchProductListAction, fetchSliederItemsAction } from '../actions/menuActions'
import { getUserInfoAction } from '../actions/userActions'
import { getOrderListAction } from '../actions/orderActions'

export const fetchUserInfo = async (dispatch, currentUser) => {
  const userRef = db.collection('users').doc(currentUser.uid)
  const doc = await userRef.get()
  dispatch(getUserInfoAction(doc.data()))
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
      dispatch(getOrderListAction(orderList))
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
      dispatch(fetchSliederItemsAction(sliderList))
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
      dispatch(fetchProductListAction(productList))
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
        dispatch(fetchCartAction(cartList))
      }
    })
}
