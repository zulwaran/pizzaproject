import { ADD_TO_CART, DELETE_FROM_CART, CLEAR_CART, FETCH_CART } from "../cart";
import { AddItemToCart } from '../../functions/Constructors'

export const fetchCartAction = (payload) => ({
    type: FETCH_CART,
    payload,
})

export const addItemToCartAction = (item, size) => {
    let price = ''
    let productSize = size
    switch (size) {
        case '25 см':
            price = item.smallPrice
            break
        case '30 см':
            price = item.mediumPrice
            break
        case '35 см':
            price = item.largePrice
            break
        default:
            price = item.price
            productSize = ''
            break
    }
    let newItem = new AddItemToCart(item.title, productSize, item.decription, item.link, price)
    return {
        type: ADD_TO_CART,
        payload: newItem
    }
}
export const deleteItemFromCartAction = (payload) => ({
    type: DELETE_FROM_CART,
    payload,
});

export const cartClearAction = () => ({
    type: CLEAR_CART,
})