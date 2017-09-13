import { get } from './request'

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS'
export const FETCH_BASKET = 'FETCH_BASKET'

export const fetchProducts = () => get({
  type: FETCH_PRODUCTS,
  endpoint: '/api/products'
})

export const fetchBasket = () => get({
  type: FETCH_BASKET,
  endpoint: '/api/basket'
})
