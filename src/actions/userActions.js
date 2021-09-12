import { GET_USER_INFO } from '../reducers/user'

export const getUserInfoAction = payload => ({
  type: GET_USER_INFO,
  payload
})
