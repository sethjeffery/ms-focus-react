import React from 'react';
import { ListGroupItem } from 'reactstrap';

export default ({ item }) => (
  <ListGroupItem>
    { item.quantity } x { item.name }
  </ListGroupItem>
)
