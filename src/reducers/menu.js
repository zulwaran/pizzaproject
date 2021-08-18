const initialState = {
    activeType: 'trip'
}

const menu = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_MENU':
            return { activeType: action.payload }

        default:
            return state
    }
}

export default menu
