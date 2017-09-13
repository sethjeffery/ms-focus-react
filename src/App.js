import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { fetchProducts } from './api';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>M&amp;S Focus Store</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button color="primary" onClick={this.props.fetchProducts}>Get products</Button>
      </div>
    );
  }
}

export default connect(
  function mapStateToProps(state) {
    products: state.products
  },
  function mapDispatchToProps(dispatch) {
    return {
      fetchProducts: () => dispatch(fetchProducts())
    }
  }
)(App)
