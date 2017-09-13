import { fetchProducts, fetchBasket, addLineItem, removeLineItem } from './actions'
import { RSAA } from 'redux-api-middleware'

describe('fetchProducts', () => {
  it('generates a FETCH_PRODUCTS get-request action', () => {
    const dispatch = jest.fn();
    fetchProducts()(dispatch)
    expect(dispatch.mock.calls[0][0][RSAA]).toMatchObject({
      endpoint: "http://localhost:3000/api/products",
      method: 'GET',
      types: ["FETCH_PRODUCTS_REQUEST", "FETCH_PRODUCTS_SUCCESS", "FETCH_PRODUCTS_FAILURE"]
    })
  })
})

describe('fetchBasket', () => {
  it('generates a FETCH_BASKET get-request action', () => {
    const dispatch = jest.fn();
    fetchBasket()(dispatch)
    expect(dispatch.mock.calls[0][0][RSAA]).toMatchObject({
      endpoint: "http://localhost:3000/api/basket",
      method: 'GET',
      types: ["FETCH_BASKET_REQUEST", "FETCH_BASKET_SUCCESS", "FETCH_BASKET_FAILURE"]
    })
  })
})

describe('addLineItem', () => {
  it('generates a ADD_LINE_ITEM post-request action', () => {
    const dispatch = jest.fn();
    addLineItem('AB01')(dispatch)
    expect(dispatch.mock.calls[0][0][RSAA]).toMatchObject({
      endpoint: "http://localhost:3000/api/basket/add",
      method: 'POST',
      types: ["ADD_LINE_ITEM_REQUEST", "ADD_LINE_ITEM_SUCCESS", "ADD_LINE_ITEM_FAILURE"]
    })
  })
})

describe('removeLineItem', () => {
  it('generates a REMOVE_LINE_ITEM post-request action', () => {
    const dispatch = jest.fn();
    removeLineItem('AB01')(dispatch)
    expect(dispatch.mock.calls[0][0][RSAA]).toMatchObject({
      endpoint: "http://localhost:3000/api/basket/remove",
      method: 'POST',
      types: ["REMOVE_LINE_ITEM_REQUEST", "REMOVE_LINE_ITEM_SUCCESS", "REMOVE_LINE_ITEM_FAILURE"]
    })
  })
})
