import React, { Component } from "react";
import Layout from "./components/Layout/Layout";
import Aux from "./hoc/Aux";
import Intro from "./containers/Intro/Intro";
import ProductList from "./components/ProductList/ProductList";

class App extends Component {
  render() {
    return (
      <Aux>
        <Layout>
          <Intro />
          <ProductList />
        </Layout>
      </Aux>
    );
  }
}

export default App;
