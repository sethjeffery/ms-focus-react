import React from 'react'
import { Basket } from './Basket'
import { mount } from 'enzyme'
import LineItems from './LineItems'

describe('without a basket', () => {
  it('fetches the basket', () => {
    const fetchBasket = jest.fn()
    const wrapper = mount(<Basket fetchBasket={fetchBasket} />)
    expect(fetchBasket.mock.calls.length).toEqual(1)
  })
})

describe('with an empty basket', () => {
  const basket = { items: [] }
  const wrapper = mount(<Basket basket={basket} />)
  
  it('renders an empty message', () => {
    expect(wrapper.find('p').text()).toEqual("Your basket is empty.")
  })

  it('has no line items', () => {
    expect(wrapper.find(LineItems).length).toEqual(0)
  })
})

describe('with a filled basket', () => {
  it('renders line items', () => {
    const basket = { items: [{ name: 'Item one', code: 'AB01' }] }
    const wrapper = mount(<Basket basket={basket} />)
    expect(wrapper.find(LineItems).length).toEqual(1)
  })
})
