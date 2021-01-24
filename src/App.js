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
import QuotationForm from "./components/QuotationForm/QuotationForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {route: 'home'}
    this.changeRoute = this.changeRoute.bind(this)
  }

  changeRoute(currentRoute) {
    this.setState({
      route: currentRoute
    })
  }


  render() {
    return (
      <Aux>
        <Router>
          <Layout route={this.state.route}>
            <Switch>
              <Route path="/quotation" component={QuotationForm} />
              <Route path="/products" render={(props) => <Products {...props} updateRoute={this.changeRoute} />} />
              <Route path="/contact" render={(props) => <Contact {...props} updateRoute={this.changeRoute} />} />
              <Route path="/" exact render={(props) => <Home {...props} updateRoute={this.changeRoute} />} />
              <Redirect to="/" />
            </Switch>
          </Layout>
        </Router>
      </Aux>
    );
  }
}

export default App;
