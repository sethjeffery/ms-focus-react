import React from 'react'
import { mount } from 'enzyme'
import { Products } from './Products'
import Product from './Product'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

describe('without products', () => {
  it('fetches the products', () => {
    const fetchProducts = jest.fn()
    const wrapper = mount(<Products fetchProducts={fetchProducts} />)
    expect(fetchProducts.mock.calls.length).toEqual(1)
  })
})

describe('with products', () => {
  it('renders a list of LineItems', () => {
    const products = [{ name: 'Jeans', code: 'J' }, { name: 'Shirts', code: 'S' }]
    const wrapper = mount(<Products products={products} />)
    expect(wrapper.find(Product).length).toEqual(2)
  })
})
