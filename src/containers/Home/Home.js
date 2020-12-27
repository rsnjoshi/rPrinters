import React, { Component } from "react";
import Intro from "../Intro/Intro";
import ProductList from "../../components/ProductList/ProductList";
import Aux from "../../hoc/Aux";

export default class Home extends Component {
  render() {
    return (
      <Aux>
        <Intro />
        <ProductList />
      </Aux>
    );
  }
}
