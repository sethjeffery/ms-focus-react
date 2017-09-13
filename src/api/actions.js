import { get } from './request'

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS'

export const fetchProducts = () => get({
  type: FETCH_PRODUCTS,
  endpoint: '/api/products'
})
