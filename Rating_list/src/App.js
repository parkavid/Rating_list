import React, { Component } from "react";
import "./App.css";

import ProductPage from "./components/ProductPage";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as productActions from "./actionCreators/products";

class App extends Component {
  render() {
    return (
      <div>
        <ProductPage />       
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.products    
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(productActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
