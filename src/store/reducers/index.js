import { combineReducers } from 'redux'
import userReducer from './user'
import articleReducer from './article'
import categoryReducer from './category'
import tagReducer from './tag'

export default combineReducers({
  user: userReducer,
  article: articleReducer,
  category: categoryReducer,
  tag: tagReducer
})
