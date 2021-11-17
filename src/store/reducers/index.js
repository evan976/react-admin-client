import { combineReducers } from 'redux'
import userReducer from './user'
import articleReducer from './article'

export default combineReducers({
  user: userReducer,
  article: articleReducer
})
