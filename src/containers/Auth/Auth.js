import React, { Component } from "react";
import { Paper, Grid } from "@material-ui/core";
import { Switch, Route } from "react-router-dom";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";
import classes from "./Auth.module.css";
import Aux from "../../hoc/Aux";

class Auth extends Component {
  render() {
    console.log(this.props.match.path);
    return (
      <Aux>
        <Grid item xs={12} lg={5} md={6} sm={9} className={classes.GridParent}>
          <Paper square elevation={7} className={classes.LoginForm}>
            <Switch>
              <Route
                path={this.props.match.path + "/signIn"}
                component={SignIn}
              />
              <Route
                path={this.props.match.path + "/signUp"}
                component={SignUp}
              />
            </Switch>
          </Paper>
        </Grid>
      </Aux>
    );
  }
}

export default Auth;
