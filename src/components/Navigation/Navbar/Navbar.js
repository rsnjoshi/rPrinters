import React from "react";
import classes from "./Navbar.module.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import NavbarItems from "../NavbarItems/NavbarItems";
import UserPortal from "../UserPortal/UserPortal";

const navbar = (props) => {
  return (
    <AppBar className={classes.Appbar}>
      <Toolbar className={classes.Toolbar}>
        <Typography variant="h6">Ratna Printers</Typography>
        <NavbarItems />
        <UserPortal />
      </Toolbar>
    </AppBar>
  );
};

export default navbar;
