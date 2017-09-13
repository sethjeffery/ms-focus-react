import reducer from './basket';

describe('FETCH_BASKET_SUCCESS', () => {
  it('saves the basket state', () => {
    const basket = { total: 1999, items: [{ name: 'First product' }, { name: 'Second product' }] }
    expect(reducer([], { type: 'FETCH_BASKET_SUCCESS', payload: basket })).toEqual(basket)
  })
})

describe('ADD_LINE_ITEM_SUCCESS', () => {
  it('saves the basket state', () => {
    const basket = { total: 1999, items: [{ name: 'First product' }, { name: 'Second product' }] }
    expect(reducer([], { type: 'ADD_LINE_ITEM_SUCCESS', payload: basket })).toEqual(basket)
  })
})

describe('REMOVE_LINE_ITEM_SUCCESS', () => {
  it('saves the basket state', () => {
    const basket = { total: 999, items: [{ name: 'First product' }] }
    expect(reducer([], { type: 'REMOVE_LINE_ITEM_SUCCESS', payload: basket })).toEqual(basket)
  })
})
