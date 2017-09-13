import React from 'react';
import Product from './Product';
import { shallow, mount } from 'enzyme';
import { Button } from 'reactstrap';

const product = {
  name: 'Product',
  code: 'AB01',
  price: 150,
  formatted_price: '£1.50'
}

it('has buttons to add and remove', () => {
  const wrapper = shallow(<Product product={product} />);
  expect(wrapper.find(Button).length).toEqual(2);
})

describe('clicking add', () => {
  it('triggers addLineItem', () => {
    const addLineItem = jest.fn()
    const wrapper = mount(<Product product={product} addLineItem={addLineItem} />)
    wrapper.find('.btn-add').simulate('click')
    expect(addLineItem.mock.calls.length).toEqual(1)
  })
})

describe('clicking remove', () => {
  it('triggers removeLineItem', () => {
    const removeLineItem = jest.fn()
    const wrapper = mount(<Product product={product} removeLineItem={removeLineItem} />)
    wrapper.find('.btn-remove').simulate('click')
    expect(removeLineItem.mock.calls.length).toEqual(1)
  })
})
