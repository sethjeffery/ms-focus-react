import React from 'react';
import { ListGroup, ListGroupItem, Button } from 'reactstrap'

export default ({ product, addLineItem, removeLineItem }) => (
  <ListGroupItem className="Product" id={`product_${product.code}`}>
    <div className="row">
      <div className="col-sm-4 col-md-5 font-weight-bold">{ product.name }</div>
      <div className="col-sm-2 ">{ product.code }</div>
      <div className="col-sm-2">{ product.formatted_price }</div>
      <div className="col-sm-4 col-md-3 text-sm-right">
        <Button className='btn-add' color='primary' size='sm' onClick={() => addLineItem(product.code)}>Add</Button>
        &nbsp;
        <Button className='btn-remove' color='secondary' outline size='sm' onClick={() => removeLineItem(product.code)}>Remove</Button>
      </div>
    </div>
  </ListGroupItem>
)
