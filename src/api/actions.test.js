import { fetchProducts, fetchBasket } from './actions'
import { get } from './request'

describe('fetchProducts', () => {
  it('generates a FETCH_PRODUCTS get-request action', () => {
    expect(fetchProducts()).toEqual(get({ type: 'FETCH_PRODUCTS', endpoint: '/api/products' }))
  })
})

describe('fetchBasket', () => {
  it('generates a FETCH_BASKET get-request action', () => {
    expect(fetchBasket()).toEqual(get({ type: 'FETCH_BASKET', endpoint: '/api/basket' }))
  })
})
