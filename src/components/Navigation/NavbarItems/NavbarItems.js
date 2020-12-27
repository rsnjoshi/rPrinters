import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import classes from "./NavbarItems.module.css";
import { NavLink } from "react-router-dom";

const NavbarItems = (props) => {
  //   const flow = "row";
  let NavClass = [classes.NavbarItems];
  const [selected, setSelected] = React.useState('home')

  props.flow === "row"
    ? NavClass.push(classes.row)
    : NavClass.push(classes.column);

  const toggler = instance => () => {
    const currentSelected = selected
    if (currentSelected !== instance) {
      setSelected(instance)
    }
    if (props && props.hideSideBar) props.hideSideBar()
    
  }

  return (
    <List className={NavClass.join(" ")}>
      <NavLink to="/" exact style={{'text-decoration': 'none'}}>
        <ListItem 
        button
        onClick={toggler('home')}
        selected={selected === 'home'}
        >
          <ListItemText primary="Home" className={classes.navText}/>
        </ListItem>
      </NavLink>
      <NavLink to="/products" style={{'text-decoration': 'none'}}>
        <ListItem
        button
        onClick={toggler('products')}
        selected={selected === 'products'}
        >
          <ListItemText primary="Products" className={classes.navText}/>
        </ListItem>
      </NavLink>
      <NavLink to="/contact" style={{'text-decoration': 'none'}}>
        <ListItem
        button
        onClick={toggler('contact')}
        selected={selected === 'contact'}
        >
          <ListItemText primary="Contact" className={classes.navText}/>
        </ListItem>
      </NavLink>
    </List>
  );
};

export default NavbarItems;
