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
    const { items, formatted_total } = this.props.basket

    if(items) {
      if (items.length) {
        return (
          <div>
            <h3>Basket</h3>
            <LineItems items={items} total={formatted_total} />
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
