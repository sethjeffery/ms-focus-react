import React from 'react';
import './App.css';
import Products from './products/Products';
import { Container } from 'reactstrap';

export default () => (
  <div className="App">
    <div className="App-header">
      <h2>M&amp;S Focus Store</h2>
    </div>
    <Container>
      <Products />
    </Container>
  </div>
)
