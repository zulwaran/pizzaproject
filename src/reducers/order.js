const initialState = {
  street: '',
  home: '',
  apartment: '',
  porch: '',
  floor: '',
  comment: '',
  paymentType: 'Наличными',
  deliveryType: 'Ближайшее',
  orderList: [],
  deliveryDay: 'Сегодня',
  deliveryTime: ''
}

export const GET_ORDER_LIST = 'GET_ORDER_LIST'
export const SET_STREET = 'SET_STREET'
export const SET_HOME = 'SET_HOME'
export const SET_APARTMENT = 'SET_APARTMENT'
export const SET_PORCH = 'SET_PORCH'
export const SET_FLOOR = 'SET_FLOOR'
export const SELECT_DELIVERY_DAY = 'SELECT_DELIVERY_DAY'
export const SELECT_DELIVERY_TIME = 'SELECT_DELIVERY_TIME'
export const SET_COMMENT = 'SET_COMMENT'
export const TOGGLE_PAYMENT_TYPE = 'TOGGLE_PAYMENT_TYPE'
export const TOGGLE_DELIVERY_TYPE = 'TOGGLE_DELIVERY_TYPE'
export const ADD_NEW_ORDER = 'ADD_NEW_ORDER'

const order = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_STREET':
      return {
        ...state,
        street: action.payload
      }
    case 'SET_HOME':
      return {
        ...state,
        home: action.payload
      }
    case 'SET_APARTMENT':
      return {
        ...state,
        apartment: action.payload
      }
    case 'SET_PORCH':
      return {
        ...state,
        porch: action.payload
      }
    case 'SET_FLOOR':
      return {
        ...state,
        floor: action.payload
      }
    case 'SET_COMMENT':
      return {
        ...state,
        comment: action.payload
      }
    case 'TOGGLE_PAYMENT_TYPE':
      return {
        ...state,
        paymentType: action.payload
      }
    case 'TOGGLE_DELIVERY_TYPE':
      return {
        ...state,
        deliveryType: action.payload
      }
    case 'GET_ORDER_LIST':
      if (state.orderList === null) {
        state.orderList = []
      }
      return {
        ...state,
        orderList: action.payload
      }
    case 'ADD_NEW_ORDER':
      return {
        ...state,
        orderList: [...state.orderList, action.payload]
      }
    case 'SELECT_DELIVERY_DAY':
      return {
        ...state,
        deliveryDay: action.payload
      }
    case 'SELECT_DELIVERY_TIME':
      return {
        ...state,
        deliveryTime: action.payload
      }
    default:
      return state
  }
}

export default order
