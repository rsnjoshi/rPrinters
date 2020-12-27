import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import classes from "./NavbarItems.module.css";
import { NavLink } from "react-router-dom";

const navbarItems = (props) => {
  //   const flow = "row";
  let NavClass = [classes.NavbarItems];
  props.flow === "row"
    ? NavClass.push(classes.row)
    : NavClass.push(classes.column);
  return (
    <List className={NavClass.join(" ")}>
      <NavLink to="/" exact>
        <ListItem button>
          <ListItemText primary="Home" />
        </ListItem>
      </NavLink>
      <NavLink to="/products">
        <ListItem button>
          <ListItemText primary="Products" />
        </ListItem>
      </NavLink>
      <NavLink to="/contact">
        <ListItem button>
          <ListItemText primary="Contact" />
        </ListItem>
      </NavLink>
    </List>
  );
};

export default navbarItems;
