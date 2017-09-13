import { get, post } from './request'

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS'
export const FETCH_BASKET = 'FETCH_BASKET'
export const ADD_LINE_ITEM = 'ADD_LINE_ITEM'
export const REMOVE_LINE_ITEM = 'REMOVE_LINE_ITEM'

export const fetchProducts = () => get({
  type: FETCH_PRODUCTS,
  endpoint: '/api/products'
})

export const fetchBasket = () => get({
  type: FETCH_BASKET,
  endpoint: '/api/basket'
})

export const addLineItem = (code) => post({
  type: ADD_LINE_ITEM,
  endpoint: '/api/basket/add',
  body: { code }
})

export const removeLineItem = (code) => post({
  type: REMOVE_LINE_ITEM,
  endpoint: '/api/basket/remove',
  body: { code }
})
