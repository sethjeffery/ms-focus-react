import React, { Component } from 'react';
import { fetchBasket } from '../api';
import { connect } from 'react-redux';
import LineItems from './LineItems';

export class Basket extends Component {
  static defaultProps = {
    basket: {}
  }

  componentDidMount() {
    if (!this.props.basket.items) {
      this.props.fetchBasket();
    }
  }

  render() {
    if(this.props.basket.items) {
      if (this.props.basket.items.length) {
        return (
          <div>
            <h3>Basket</h3>
            <LineItems items={this.props.basket.items} />
          </div>
        )
      } else {
        return (
          <div>
            <h3>Basket</h3>
            <p>Your basket is empty.</p>
          </div>
        )
      }
    } else {
      return <div></div>
    }
  }
}

export default connect(
  function mapStateToProps(state) {
    return {
      basket: state.basket
    }
  },
  function mapDispatchToProps(dispatch) {
    return {
      fetchBasket: () => dispatch(fetchBasket())
    }
  }
)(Basket)
