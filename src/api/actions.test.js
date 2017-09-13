import { fetchProducts, fetchBasket, addLineItem, removeLineItem } from './actions'
import { get, post } from './request'

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

describe('addLineItem', () => {
  it('generates a ADD_LINE_ITEM post-request action', () => {
    expect(addLineItem('AB01')).toEqual(post({ type: 'ADD_LINE_ITEM', endpoint: '/api/basket/add', body: { code: "AB01" } }))
  })
})

describe('removeLineItem', () => {
  it('generates a REMOVE_LINE_ITEM post-request action', () => {
    expect(removeLineItem('AB01')).toEqual(post({ type: 'REMOVE_LINE_ITEM', endpoint: '/api/basket/remove', body: { code: "AB01" } }))
  })
})
