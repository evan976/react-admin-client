import _ from 'lodash'
import * as actionType from '../action-type'

const initialState = {
  articleList: [],
  page: 1,
  pageSize: 10,
  total: 0
}

const articleReducer = (state = initialState, { type, payload }) => {
  const _state = _.cloneDeep(state)
  switch (type) {
  case actionType.GET_ARTICLE:
    _state.articleList = payload.articleList,
    _state.page = payload.page,
    _state.pageSize = payload.pageSize,
    _state.total = payload.total
    return _state
  case actionType.RESET_ARTICLE:
    _state.articleList = [],
    _state.page = 1,
    _state.pageSize = 10,
    _state.total = 0
    return _state
  default:
    return state
  }
}

export default articleReducer
