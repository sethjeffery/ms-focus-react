import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { fetchProducts } from '../api';
import { connect } from 'react-redux';
import Product from './Product';
import { ListGroup } from 'reactstrap';

class Products extends Component {
  componentDidMount() {
    if (!this.props.products.length) {
      this.props.fetchProducts();
    }
  }

  render() {
    if(this.props.products.length) {
      return (
        <div>
          <h2>Products</h2>
          <ListGroup>
            {this.props.products.map((product) => (
              <Product product={product} key={product.code} />
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
      fetchProducts: () => dispatch(fetchProducts())
    }
  }
)(Products)
