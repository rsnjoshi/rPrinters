import React, { Component } from "react";
import classes from "./Layout.module.css";
import Aux from "../../hoc/Aux";
import Navbar from "../Navigation/Navbar/Navbar";
import Sidebar from "../Navigation/Sidebar/Sidebar";
import { Grid } from "@material-ui/core";

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
    console.log("[layout.js] showsidedrawer ", this.state.showSideDrawer);
  };

  forceHide = () => {
    this.setState((prevState) => {
      return {showSideDrawer: false}
    })
  }

  render() {
    return (
      <Aux>
        <Navbar menuClicked={this.sideDrawerToggleHandler} route={this.props.route}/>
        <Sidebar
          showSideDrawer={this.state.showSideDrawer}
          hideSideDrawer={this.sideDrawerToggleHandler}
          clickHide={this.forceHide}
          route={this.props.route}
        />
        <Grid container className={classes.mainGridContainer}>
          {this.props.children}
        </Grid>
      </Aux>
    );
  }
}

export default Layout;
