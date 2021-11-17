import _ from 'lodash'
import * as actionType from '../action-type'

const initialState = {
  articleList: [],
  pages: 1,
  total: 10
}

const articleReducer = (state = initialState, { type, payload }) => {
  const _state = _.cloneDeep(state)
  switch (type) {
  case actionType.GET_ARTICLE:
    _state.articleList = payload.articleList,
    _state.pages = payload.pages,
    _state.total = payload.total
    return _state
  case actionType.RESET_ARTICLE:
    _state.articleList = [],
    _state.pages = 1,
    _state.total = 10
    return _state
  default:
    return _state;
  }
}

export default articleReducer
