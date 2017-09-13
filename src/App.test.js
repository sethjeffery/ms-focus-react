import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import { Products } from './products';

it('renders products', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(Products).length).toEqual(1);
})

it('renders a header', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(".App-header").text()).toEqual("M&S Focus Store");
})
