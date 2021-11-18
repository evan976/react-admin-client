import _ from 'lodash'
import * as actionType from '../action-type'

const initialState = {
  tagList: []
}

const tagReducer = (state = initialState, { type, payload }) => {
  const _state = _.cloneDeep(state)
  switch (type) {
  case actionType.GET_TAG:
    _state.tagList = payload.tagList
    return _state

  case actionType.RESET_TAG:
    _state.tagList = []
    return _state

  default:
    return state
  }
}

export default tagReducer
