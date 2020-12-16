import React, { Component } from "react";
import Layout from "./components/Layout/Layout";
import Aux from "./hoc/Aux";
import Intro from "./containers/Intro/Intro";

class App extends Component {
  render() {
    return (
      <Aux>
        <Layout>
          <Intro />
        </Layout>
      </Aux>
    );
  }
}

export default App;
