import { combineReducers } from 'redux'
import { reducer as products } from './products'
import { reducer as basket } from './basket'

const app = (state = {}, action) => {
  return state
}

export default combineReducers({ app, products, basket })
