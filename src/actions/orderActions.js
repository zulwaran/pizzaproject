import {
  GET_ORDER_LIST,
  SET_STREET,
  SET_HOME,
  SET_APARTMENT,
  SET_PORCH,
  SET_FLOOR,
  SELECT_DELIVERY_DAY,
  SELECT_DELIVERY_TIME,
  SET_COMMENT,
  TOGGLE_PAYMENT_TYPE,
  TOGGLE_DELIVERY_TYPE,
  ADD_NEW_ORDER
} from '../reducers/order'

export const getOrderListAction = payload => ({
  type: GET_ORDER_LIST,
  payload
})

export const setStreetAction = payload => ({
  type: SET_STREET,
  payload
})
export const setHomeAction = payload => ({
  type: SET_HOME,
  payload
})
export const setApartmentAction = payload => ({
  type: SET_APARTMENT,
  payload
})
export const setPorchAction = payload => ({
  type: SET_PORCH,
  payload
})
export const setFloorAction = payload => ({
  type: SET_FLOOR,
  payload
})

export const setCommentAction = payload => ({
  type: SET_COMMENT,
  payload
})

export const togglePaymentTypeAction = payload => ({
  type: TOGGLE_PAYMENT_TYPE,
  payload
})

export const toggleDeliveryTypeAction = payload => ({
  type: TOGGLE_DELIVERY_TYPE,
  payload
})

export const selectDeliveryDayAction = payload => ({
  type: SELECT_DELIVERY_DAY,
  payload
})

export const selectDeliveryTimeAction = payload => ({
  type: SELECT_DELIVERY_TIME,
  payload
})

export const addNewOrderAction = payload => ({
  type: ADD_NEW_ORDER,
  payload
})
