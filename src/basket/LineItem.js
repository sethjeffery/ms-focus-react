import React from 'react';
import { ListGroupItem } from 'reactstrap';

export default ({ item }) => (
  <ListGroupItem>
    <div className='row'>
      <div className='col-6'>
        { item.quantity } x { item.name }
      </div>
      <div className='col-6 text-right'>
        { item.formatted_total_cost }
      </div>
    </div>
  </ListGroupItem>
)
