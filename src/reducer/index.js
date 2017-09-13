import { combineReducers } from 'redux'
import products from './products'
import basket from './basket'
import app from './app'

export default combineReducers({ app, products, basket })
