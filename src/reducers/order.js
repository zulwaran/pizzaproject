const initialState = {
    paymentType: 'cash',
    deliveryType: 'now',
    orderList: null,
}

const order = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_PAYMENT_TYPE':
            return {
                paymentType: action.payload,
                deliveryType: state.deliveryType
            }
        case 'TOGGLE_DELIVERY_TYPE':
            return {
                deliveryType: action.payload,
                paymentType: state.paymentType,
            }
        case 'GET_ORDER_LIST':
            if (state.orderList === null) {
                state.orderList = []
            }
            return { orderList: [...state.orderList, action.payload] }
        default:
            return state
    }
}

export default order