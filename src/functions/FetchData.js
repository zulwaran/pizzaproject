import { axiosFirebase } from '../../axiosConfig';
import { db } from '../../firebase';

export const fetchUserInfo = async (dispatch, currentUser) => {
    axiosFirebase.get(`/users/${currentUser.uid}/.json?print=pretty`).then(response => {
        const usersRef = response.data
        dispatch({ type: "GET_USER_INFO", payload: usersRef })
    })
}

export const fetchOrders = (dispatch, currentUser) => {
    db.collection('orders').where("uid", "==", currentUser.uid).get().then((querySnapshot) => {
        let orderList = []
        querySnapshot.forEach((doc) => {
            orderList = [...orderList, doc.data()]
        })
        dispatch({ type: "GET_ORDER_LIST", payload: orderList })
    })
}
export const fetchSlider = (dispatch) => {
    db.collection('slider').get().then((querySnapshot) => {
        let sliderList = []
        querySnapshot.forEach((doc) => {
            sliderList = [...sliderList, doc.data()]
        })
        dispatch({ type: "FETCH_SLIDER_ITEMS", payload: sliderList })
    })
}
export const fetchProduct = (dispatch) => {
    db.collection('products').get().then((querySnapshot) => {
        let productList = []
        querySnapshot.forEach((doc) => {
            productList = [...productList, doc.data()]
        })
        dispatch({ type: "FETCH_PRODUCT_LIST", payload: productList })
    })
}

export const fetchCart = (dispatch, currentUser) => {
    axiosFirebase.get(`/cart/.json?`).then(response => {
        const cartRef = response.data
        let cartID = []
        for (let elem in cartRef) {
            if (cartRef[elem].uid === currentUser.uid) {
                cartID = elem
                axiosFirebase.get(`/cart/${cartID}/.json`).then(response => {
                    const cartItems = response.data.items
                    dispatch({ type: "FETCH_CART", payload: cartItems })
                })
            }
        }
        dispatch({ type: "FETCH_CART_ID", payload: cartID })
    })
}