import { combineReducers } from 'redux'
import products from './products'

const app = (state = {}, action) => {
  return state
}

export default combineReducers({ app, products })
