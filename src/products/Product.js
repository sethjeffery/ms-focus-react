import React from 'react';
import { ListGroup, ListGroupItem, Button } from 'reactstrap'

export default ({ product }) => (
  <ListGroupItem className="Product" id={`product_${product.code}`}>
    <div className="row">
      <div className="col-sm-4 col-md-5 font-weight-bold">{ product.name }</div>
      <div className="col-sm-2 ">{ product.code }</div>
      <div className="col-sm-2">{ product.formatted_price }</div>
      <div className="col-sm-4 col-md-3 text-sm-right">
        <Button color='primary' size='sm'>Add</Button>
        &nbsp;
        <Button color='secondary' outline size='sm'>Remove</Button>
      </div>
    </div>
  </ListGroupItem>
)
