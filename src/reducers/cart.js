const initialState = {
    userCart: [],
    itemsInCart: null,
}

const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            console.log(state.userCart)
            return {
                userCart: [...state.userCart, action.payload],
                itemsInCart: state.itemsInCart + 1,
            }
        default:
            return state
    }
}

export default cart