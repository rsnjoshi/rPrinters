import React, { Component } from "react";

export class Products extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount() {
    // console.log('problem ==> ', this.props)
    const route = this.props.match.path
    this.props.updateRoute(route.substring(1, route.length))
  }

  render() {
    return (
      <div>
        <h3>Welcome to Products</h3>
      </div>
    );
  }
}

export default Products;
