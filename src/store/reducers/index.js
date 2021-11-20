import { combineReducers } from 'redux'
import userReducer from './user'
import articleReducer from './article'
import categoryReducer from './category'

export default combineReducers({
  user: userReducer,
  article: articleReducer,
  category: categoryReducer
})
