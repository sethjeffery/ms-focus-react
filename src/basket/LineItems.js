import React from 'react';
import LineItem from './LineItem';
import { ListGroup } from 'reactstrap';

export default ({ items }) => (
  <ListGroup>
    {items.map((item) => <LineItem item={item} key={item.code} /> )}
  </ListGroup>
)
