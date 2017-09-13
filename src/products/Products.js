import React, { Component } from 'react';
import { fetchProducts, addLineItem, removeLineItem } from '../api';
import { connect } from 'react-redux';
import Product from './Product';
import { ListGroup } from 'reactstrap';

export class Products extends Component {
  static defaultProps = {
    products: []
  };

  componentDidMount() {
    if (!this.props.products.length) {
      this.props.fetchProducts();
    }
  }

  render() {
    const { addLineItem, removeLineItem, products } = this.props

    if (products.length) {
      return (
        <div>
          <h3>Products</h3>
          <ListGroup>
            {this.props.products.map((product) => (
              <Product product={product} key={product.code} addLineItem={addLineItem} removeLineItem={removeLineItem} />
            ))}
          </ListGroup>
        </div>
      )
    } else {
      return (
        <div>Loading...</div>
      )
    }
  }
}

export default connect(
  function mapStateToProps(state) {
    return {
      products: state.products
    }
  },
  function mapDispatchToProps(dispatch) {
    return {
      fetchProducts: () => dispatch(fetchProducts()),
      addLineItem: (code) => dispatch(addLineItem(code)),
      removeLineItem: (code) => dispatch(removeLineItem(code)),
    }
  }
)(Products)
