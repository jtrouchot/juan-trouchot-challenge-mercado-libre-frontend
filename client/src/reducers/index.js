import { combineReducers } from 'redux'
import product from './product'
import list from './list'

const rootReducer = combineReducers({
  list,
  product,
})

export default rootReducer
