import firebaseApp from 'firebase/app'
import { db, firebase } from '../../firebase'
const initialState = {
  userCart: [],
  itemsInCart: null,
  totalOrderSum: 0
}
export const ADD_TO_CART = 'ADD_TO_CART'
export const DELETE_FROM_CART = 'DELETE_FROM_CART'
export const FETCH_CART = 'FETCH_CART'
export const CLEAR_CART = 'CLEAR_CART'

const cart = (state = initialState, action) => {
  const user = firebase.auth().currentUser
  switch (action.type) {
    case 'ADD_TO_CART':
      db.collection('cart')
        .where('uid', '==', user.uid)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            db.collection('cart')
              .doc(doc.id)
              .update({
                items: firebaseApp.firestore.FieldValue.arrayUnion(Object.assign({}, action.payload))
              })
          })
        })
      return {
        ...state,
        userCart: [...state.userCart, action.payload],
        itemsInCart: state.itemsInCart + 1,
        totalOrderSum: state.totalOrderSum + Number(action.payload.price)
      }
    case 'DELETE_FROM_CART':
      db.collection('cart')
        .where('uid', '==', user.uid)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            db.collection('cart')
              .doc(doc.id)
              .update({
                items: firebaseApp.firestore.FieldValue.arrayRemove(Object.assign({}, action.payload.item))
              })
          })
        })

      const id = action.payload.item.id
      state.userCart = state.userCart.filter(item => {
        return item.id !== id
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
    case 'FETCH_CART':
      action.payload.items.forEach(elem => {
        state.totalOrderSum += Number(elem.price)
      })

      state.itemsInCart = action.payload.items.length
      if (state.itemsInCart === 0) {
        state.itemsInCart = null
      }

      return {
        ...state,
        userCart: action.payload.items,
        itemsInCart: state.itemsInCart,
        totalOrderSum: state.totalOrderSum
      }
    case 'CLEAR_CART':
      db.collection('cart')
        .where('uid', '==', user.uid)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            db.collection('cart').doc(doc.id).update({
              items: firebaseApp.firestore.FieldValue.delete()
            })
          })
        })
      return {
        ...state,
        userCart: [],
        itemsInCart: null,
        totalOrderSum: 0
      }
    default:
      return state
  }
}

export default cart
