import reducer from './reducer';

describe('FETCH_PRODUCTS_SUCCESS', () => {
  it('saves the products in the state', () => {
    const products = [{ name: 'First product' }, { name: 'Second product' }]
    expect(reducer([], { type: 'FETCH_PRODUCTS_SUCCESS', payload: products })).toEqual(products)
  })
})

describe('default', () => {
  it('returns the same state', () => {
    const state = [{ foo: 'bar' }]
    expect(reducer(state, { type: 'default' })).toEqual(state)
  })
})
