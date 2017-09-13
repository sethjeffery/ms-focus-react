import React from 'react'
import { mount } from 'enzyme'
import LineItem from './LineItem'

it('renders the item name', () => {
  const item = { name: 'Jeans' }
  const wrapper = mount(<LineItem item={item} />)
  expect(wrapper.text()).toContain('Jeans')
})
