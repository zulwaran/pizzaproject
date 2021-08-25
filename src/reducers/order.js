const initialState = {
    paymentType: 'cash'
}

const order = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_PAYMENT_TYPE':
            return { paymentType: action.payload }

        default:
            return state
    }
}

export default order