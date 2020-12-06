import React, { Component } from "react";
import classes from "./Navbar.module.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import NavbarItems from "../NavbarItems/NavbarItems";
import UserPortal from "../UserPortal/UserPortal";
import { Menu } from "@material-ui/icons";

class Navbar extends Component {
  render() {
    return (
      <AppBar className={classes.Appbar}>
        <Toolbar className={classes.Toolbar}>
          <Menu className={classes.Menu} />
          <Typography variant="h6">Ratna Printers</Typography>
          <NavbarItems flow="row" />
          <UserPortal />
        </Toolbar>
      </AppBar>
    );
  }
}

export default Navbar;
