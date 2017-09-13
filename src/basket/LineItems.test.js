import React from 'react'
import { mount } from 'enzyme'
import LineItems from './LineItems'
import LineItem from './LineItem'

it('renders a list of LineItems', () => {
  const items = [{ name: 'Jeans', code: 'J' }, { name: 'Shirts', code: 'S' }]
  const wrapper = mount(<LineItems items={items} />)
  expect(wrapper.find(LineItem).length).toEqual(2)
})
