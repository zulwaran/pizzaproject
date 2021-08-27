const initialState = {
    userCart: [],
    itemsInCart: null,
    totalOrderSum: 0,
}

const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                userCart: [...state.userCart, action.payload],
                itemsInCart: state.itemsInCart + 1,
                totalOrderSum: state.totalOrderSum + Number(action.payload.price)
            }
        case 'DELETE_FROM_CART':
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
                userCart: state.userCart,
                itemsInCart: state.itemsInCart,
                totalOrderSum: state.totalOrderSum
            }
        default:
            return state
    }
}

export default cart