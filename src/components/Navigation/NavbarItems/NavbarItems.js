import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import classes from "./NavbarItems.module.css";
import { NavLink } from "react-router-dom";

const NavbarItems = (props) => {
  //   const flow = "row";
  let NavClass = [classes.NavbarItems];

  props.flow === "row"
    ? NavClass.push(classes.row)
    : NavClass.push(classes.column);

  const toggler = () => () => {
    if (props && props.hideSideBar) props.hideSideBar()
  }

  return (
    <List className={NavClass.join(" ")}>
      <NavLink to="/" exact className={classes['nav-no-decoration']}>
        <ListItem 
        button
        onClick={toggler()}
        selected={props.route === 'home'}
        >
          <ListItemText primary="Home" className={classes.navText}/>
        </ListItem>
      </NavLink>
      <NavLink to="/products" className={classes['nav-no-decoration']}>
        <ListItem
        button
        onClick={toggler()}
        selected={props.route === 'products'}
        >
          <ListItemText primary="Products" className={classes.navText}/>
        </ListItem>
      </NavLink>
      <NavLink to="/contact" className={classes['nav-no-decoration']}>
        <ListItem
        button
        onClick={toggler()}
        selected={props.route === 'contact'}
        >
          <ListItemText primary="Contact" className={classes.navText}/>
        </ListItem>
      </NavLink>
    </List>
  );
};

export default NavbarItems;
