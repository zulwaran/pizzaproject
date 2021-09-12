import { TOGGLE_MENU, FETCH_PRODUCT_LIST, FETCH_SLIDER_ITEMS } from '../reducers/menu'

export const toggleMenuAction = payload => ({
  type: TOGGLE_MENU,
  payload
})

export const fetchProductListAction = payload => ({
  type: FETCH_PRODUCT_LIST,
  payload
})

export const fetchSliederItemsAction = payload => ({
  type: FETCH_SLIDER_ITEMS,
  payload
})
