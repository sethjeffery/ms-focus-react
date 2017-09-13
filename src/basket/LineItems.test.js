import React from 'react'
import { shallow } from 'enzyme'
import LineItems from './LineItems'
import LineItem from './LineItem'

it('renders a list of LineItems', () => {
  const items = [{ name: 'Jeans', code: 'J' }, { name: 'Shirts', code: 'S' }]
  const wrapper = shallow(<LineItems items={items} />)
  expect(wrapper.find(LineItem).length).toEqual(2)
})
