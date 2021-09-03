const initialState = {
    activeType: 'pizza',
    productList: [],
    sliderItems: [],
}

const menu = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_MENU':
            return {
                ...state,
                activeType: action.payload
            }
        case 'FETCH_PRODUCT_LIST':
            return {
                ...state,
                productList: action.payload
            }
        case 'FETCH_SLIDER_ITEMS':
            return {
                ...state,
                sliderItems: action.payload
            }
        default:
            return state
    }
}

export default menu
