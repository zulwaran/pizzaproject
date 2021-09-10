import firebaseApp from 'firebase/app'
import { db, firebase } from "../../firebase"
import axios from 'axios'
import { axiosFirebase } from '../../axiosConfig'
const initialState = {
    userCart: [],
    itemsInCart: null,
    totalOrderSum: 0,
    cartId: '',
}
export const ADD_TO_CART = 'ADD_TO_CART'
export const DELETE_FROM_CART = 'DELETE_FROM_CART'
export const FETCH_CART = 'FETCH_CART'
export const CLEAR_CART = 'CLEAR_CART'

const cart = (state = initialState, action) => {
    const user = firebase.auth().currentUser;
    switch (action.type) {
        case 'ADD_TO_CART':
            axiosFirebase.post(`/cart/${state.cartId}/items/.json`)
            return {
                ...state,
                userCart: [...state.userCart, action.payload],
                itemsInCart: state.itemsInCart + 1,
                totalOrderSum: state.totalOrderSum + Number(action.payload.price)
            }
        case 'DELETE_FROM_CART':
            axiosFirebase.get(`/cart/${state.cartId}/items/.json`).then(response => {
                const itemsRef = response.data
                for (let elem in itemsRef) {
                    if (action.payload.item.id === itemsRef[elem].id) {
                        axiosFirebase.delete(`/cart/${state.cartId}/items/${elem}/.json`)
                    }
                }
            })
            const id = action.payload.item.id
            state.userCart = state.userCart.filter((item) => {
                return (item.id !== id)
            })

            state.itemsInCart = state.itemsInCart - 1
            if (state.itemsInCart === 0) {
                state.itemsInCart = null
            }

            state.totalOrderSum = state.totalOrderSum - Number(action.payload.item.price)

            return {
                ...state,
                userCart: state.userCart,
                itemsInCart: state.itemsInCart,
                totalOrderSum: state.totalOrderSum
            }
        case 'FETCH_CART_ID':
            return {
                ...state,
                cartId: action.payload,
            }
        case 'FETCH_CART':
            const cartItems = action.payload
            if (cartItems) {
                for (let item in cartItems) {
                    state.userCart.push(cartItems[item])
                    state.totalOrderSum += Number(cartItems[item].price)
                    state.itemsInCart += 1
                }
                if (state.itemsInCart === 0) {
                    state.itemsInCart = null
                }
            }
            return {
                ...state,
                userCart: state.userCart,
                itemsInCart: state.itemsInCart,
                totalOrderSum: state.totalOrderSum,
            }
        case 'CLEAR_CART':
            db.collection("cart").where("uid", "==", user.uid).get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    db.collection("cart").doc(doc.id).update({
                        items: firebaseApp.firestore.FieldValue.delete()
                    });
                })
            })
            return {
                ...state,
                userCart: [],
                itemsInCart: null,
                totalOrderSum: 0,
            }
        default:
            return state
    }
}

export default cart