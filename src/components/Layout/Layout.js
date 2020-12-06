import React, { Component } from "react";
import classes from "./Layout.module.css";
import Aux from "../../hoc/Aux";
import Navbar from "../Navigation/Navbar/Navbar";

class Layout extends Component {
  render() {
    return (
      <Aux>
        <Navbar />
        <main>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
