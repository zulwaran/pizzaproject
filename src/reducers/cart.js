import firebaseApp from 'firebase/app'
import "firebase/auth";
import "firebase/firestore";
import { db } from "../../firebase"
const initialState = {
    userCart: [],
    itemsInCart: null,
    totalOrderSum: 0,
}

const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            db.collection("cart").doc("KnCMdvHWk5PY1HeXJKgPoULFlv63").update({
                items: firebaseApp.firestore.FieldValue.arrayUnion(action.payload)
            });
            return {
                ...state,
                userCart: [...state.userCart, action.payload],
                itemsInCart: state.itemsInCart + 1,
                totalOrderSum: state.totalOrderSum + Number(action.payload.price)
            }
        case 'DELETE_FROM_CART':
            console.log(action.payload.item);
            db.collection("cart").doc("KnCMdvHWk5PY1HeXJKgPoULFlv63").update({
                items: firebaseApp.firestore.FieldValue.arrayRemove(action.payload.item)
            });
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
                totalOrderSum: state.totalOrderSum,
            }
        default:
            return state
    }
}

export default cart