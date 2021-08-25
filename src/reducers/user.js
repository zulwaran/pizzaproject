const initialState = {
    currentUser: [],
}

const user = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_USER_INFO':
            return {
                currentUser: action.payload
            }
        default:
            return state
    }
}

export default user