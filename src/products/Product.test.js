import React from 'react';
import Product from './Product';
import { shallow } from 'enzyme';
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
