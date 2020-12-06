import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import classes from "./NavbarItems.module.css";

const navbarItems = (props) => {
  //   const flow = "row";
  let NavClass = [classes.NavbarItems];
  props.flow === "row"
    ? NavClass.push(classes.row)
    : NavClass.push(classes.column);
  return (
    <List className={NavClass.join(" ")}>
      <ListItem button>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Products" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Contact" />
      </ListItem>
    </List>
  );
};

export default navbarItems;
