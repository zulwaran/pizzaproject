const initialState = {
  currentUser: [],
  name: '',
  phone: ''
}

export const GET_USER_INFO = 'GET_USER_INFO'
export const SET_NAME = 'SET_NAME'
export const SET_PHONE = 'SET_PHONE'

const user = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_INFO:
      return {
        ...state,
        currentUser: action.payload,
        name: action.payload.name,
        phone: action.payload.phone
      }
    case SET_NAME:
      return {
        ...state,
        name: action.payload
      }
    case SET_PHONE:
      return {
        ...state,
        phone: action.payload
      }
    default:
      return state
  }
}

export default user
