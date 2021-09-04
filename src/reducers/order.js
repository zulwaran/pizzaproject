const initialState = {
    paymentType: 'Наличными',
    deliveryType: 'Ближайшее',
    orderList: [],
    deliveryDay: 'Сегодня',
    deliveryTime: '',
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
                orderList: action.payload,
            }
        case 'ADD_NEW_ORDER':
            return {
                ...state,
                orderList: [...state.orderList, action.payload]
            }
        case 'SELECT_DELIVERY_DAY':
            return {
                ...state,
                deliveryDay: action.payload,
            }
        case 'SELECT_DELIVERY_TIME':
            return {
                ...state,
                deliveryTime: action.payload,
            }
        default:
            return state
    }
}

export default order