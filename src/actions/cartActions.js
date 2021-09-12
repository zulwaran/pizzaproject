import { ADD_TO_CART, DELETE_FROM_CART, CLEAR_CART, FETCH_CART } from '../reducers/cart'

export const fetchCartAction = payload => ({
  type: FETCH_CART,
  payload
})

export const addItemToCartAction = payload => ({
  type: ADD_TO_CART,
  payload
})

export const deleteItemFromCartAction = payload => ({
  type: DELETE_FROM_CART,
  payload
})

export const cartClearAction = () => ({
  type: CLEAR_CART
})
