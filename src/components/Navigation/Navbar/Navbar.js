import React, { Component } from "react";
import classes from "./Navbar.module.css";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import NavbarItems from "../NavbarItems/NavbarItems";
import UserPortal from "../UserPortal/UserPortal";
import { Menu } from "@material-ui/icons";

class Navbar extends Component {
  eventListener = (event) => {
    console.log("[Navbar.js] event is", event.type);
    this.props.menuClicked();
  };

  render() {
    return (
      <AppBar className={classes.Appbar} position="sticky">
        <Toolbar className={classes.Toolbar}>
          <Menu className={classes.Menu} onClick={this.eventListener} />
          <Typography variant="h6">Ratna Printers</Typography>
          <NavbarItems flow="row" />
          <UserPortal className={classes.UserIcon} />
        </Toolbar>
      </AppBar>
    );
  }
}

export default Navbar;
