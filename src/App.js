import React, { Component } from "react";
import Layout from "./components/Layout/Layout";
import Aux from "./hoc/Aux";
import Home from "./containers/Home/Home";
import Products from "./containers/Products/Products";
import Contact from "./containers/Contact/Contact";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Aux>
        <Router>
          <Layout>
            <Switch>
              <Route path="/products" component={Products} />
              <Route path="/contact" component={Contact} />
              <Route path="/" exact component={Home} />
              <Redirect to="/" />
            </Switch>
          </Layout>
        </Router>
      </Aux>
    );
  }
}

export default App;
