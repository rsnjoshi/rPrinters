import React, { Component } from "react";
import Intro from "../Intro/Intro";
import ProductList from "../../components/ProductList/ProductList";
import Aux from "../../hoc/Aux";

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount() {
    // console.log('problem ==> ', this.props)
    const route = 'home'
    this.props.updateRoute(route)
  }

  render() {
    return (
      <Aux>
        <Intro />
        <ProductList />
      </Aux>
    );
  }
}
