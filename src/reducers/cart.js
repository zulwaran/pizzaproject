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
            return {
                userCart: state.userCart.filter((item) => {
                    return (item.id !== id)
                }),
                itemsInCart: state.itemsInCart - 1,
                totalOrderSum: state.totalOrderSum - Number(action.payload.item.price)
            }
        default:
            return state
    }
}

export default cart