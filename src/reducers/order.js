const initialState = {
    paymentType: 'Наличными',
    deliveryType: 'Ближайшее',
    orderList: [],
}

const order = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_PAYMENT_TYPE':
            return {
                ...state,
                paymentType: action.payload,
            }
        case 'TOGGLE_DELIVERY_TYPE':
            return {
                ...state,
                deliveryType: action.payload,
            }
        case 'GET_ORDER_LIST':
            if (state.orderList === null) {
                state.orderList = []
            }
            return {
                ...state,
                orderList: [...state.orderList, action.payload],
            }
        default:
            return state
    }
}

export default order