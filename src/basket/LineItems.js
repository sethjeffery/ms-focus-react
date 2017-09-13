import React from 'react';
import LineItem from './LineItem';
import { ListGroup, ListGroupItem } from 'reactstrap';

export default ({ items, total }) => (
  <ListGroup>
    {items.map((item) => <LineItem item={item} key={item.code} /> )}

    <ListGroupItem>
      <div className='row'>
        <div className='col-6 font-weight-bold'>
          Total
        </div>
        <div className='col-6 text-right font-weight-bold'>
          { total }
        </div>
      </div>
    </ListGroupItem>
  </ListGroup>
)
