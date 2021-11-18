import _ from 'lodash'
import * as actionType from '../action-type'

const initialState = {
  categoryList: [],
  page: 1,
  pageSize: 10,
  total: 0
}

const categoryReducer = (state = initialState, { type, payload }) => {
  const _state = _.cloneDeep(state)
  switch (type) {
  case actionType.GET_CATEGORY:
    _state.categoryList = payload.categoryList,
    _state.page = payload.page,
    _state.pageSize = payload.pageSize,
    _state.total = payload.total
    return _state
  case actionType.RESET_CATEGORY:
    _state.categoryList = [],
    _state.page = 1,
    _state.pageSize = 10,
    _state.total = 0
    return _state
  default:
    return _state;
  }
}

export default categoryReducer
