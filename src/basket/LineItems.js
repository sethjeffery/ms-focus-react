import React from 'react';
import LineItem from './LineItem';
import { ListGroup, ListGroupItem } from 'reactstrap';

const DeliveryCharge = ({ charge }) => (
  <ListGroupItem>
    <div className='row'>
      <div className='col-6'>
        Delivery
      </div>
      <div className='col-6 text-right'>
        { charge && charge !== '£0.00' ? charge : 'FREE' }
      </div>
    </div>
  </ListGroupItem>
)

const Total = ({ total }) => (
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
)

export default ({ items, total, deliveryCharge }) => (
  <ListGroup>
    {items.map((item) => <LineItem item={item} key={item.code} /> )}
    <DeliveryCharge charge={deliveryCharge} />
    <Total total={total} />
  </ListGroup>
)
