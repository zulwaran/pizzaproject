const initialState = {
  activeType: 'pizza',
  productList: [],
  sliderItems: []
}

export const TOGGLE_MENU = 'TOGGLE_MENU'
export const FETCH_PRODUCT_LIST = 'FETCH_PRODUCT_LIST'
export const FETCH_SLIDER_ITEMS = 'FETCH_SLIDER_ITEMS'

const menu = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_MENU':
      return {
        ...state,
        activeType: action.payload
      }
    case 'FETCH_PRODUCT_LIST':
      return {
        ...state,
        productList: action.payload
      }
    case 'FETCH_SLIDER_ITEMS':
      return {
        ...state,
        sliderItems: action.payload
      }
    default:
      return state
  }
}

export default menu
