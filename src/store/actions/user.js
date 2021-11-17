import * as actionType from '../action-type'

export const loginSuccessSyncAction = user => {
  const { token } = user
  return ({
    type: actionType.LOGIN_SUCCESS,
    payload: {
      token
    }
  })
}
