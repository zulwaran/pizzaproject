const initialState = {
    visibleModal: false,
    modalType: '',
}

export const OPEN_MODAL = 'OPEN_MODAL'
export const CLOSE_MODAL = 'CLOSE_MODAL'

const modal = (state = initialState, action) => {
    switch (action.type) {
        case 'OPEN_MODAL':
            return {
                ...state,
                modalType: action.payload,
                visibleModal: true,
            }
        case 'CLOSE_MODAL':
            return {
                ...state,
                modalType: '',
                visibleModal: false,
            }
        default:
            return state
    }
}

export default modal