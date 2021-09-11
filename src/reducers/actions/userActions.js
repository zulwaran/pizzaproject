import { GET_USER_INFO } from '../user'

export const getUserInfoAction = (payload) => ({
    type: GET_USER_INFO,
    payload
})