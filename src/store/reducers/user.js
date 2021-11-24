import _ from 'lodash'
import * as actionType from '../action-type'

const initialState = {
  token: null,
  profile: null
}

const userReducer = (state = initialState, { type, payload }) => {
  const _state = _.cloneDeep(state)
  switch (type) {
  case actionType.LOGIN_SUCCESS:
    _state.token = payload.token
    return _state

  case actionType.SET_USERINFO:
    _state.profile = payload.profile
    return _state

  case actionType.LOGOUT:
  case actionType.USER_RESET:
    _state.token = null
    _state.profile = null
    return _state

  default:
    return state
  }
}

export default userReducer
