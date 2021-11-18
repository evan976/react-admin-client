import _ from 'lodash'
import * as actionType from '../action-type'

const initialState = {
  categoryList: []
}

const categoryReducer = (state = initialState, { type, payload }) => {
  const _state = _.cloneDeep(state)
  switch (type) {
  case actionType.GET_CATEGORY:
    _state.categoryList = payload.categoryList
    return _state

  case actionType.RESET_CATEGORY:
    _state.categoryList = []
    return _state

  default:
    return state
  }
}

export default categoryReducer
