import { combineReducers } from 'redux'
import products from './products'
import basket from './basket'

const app = (state = {}, action) => {
  return state
}

export default combineReducers({ app, products, basket })
