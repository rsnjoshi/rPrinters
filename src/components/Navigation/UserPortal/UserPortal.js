import React, { useState } from "react";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Popover from "@material-ui/core/Popover";
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
} from "@material-ui/core";
import { Person, ShoppingCart, ExitToApp } from "@material-ui/icons";
import classes from "./UserPortal.module.css";
import Aux from "../../../hoc/Aux";

const UserPortal = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <Aux>
      <AccountCircle onClick={handleClick} />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <List disablePadding>
          <ListItem button>
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText primary="Namaste rPrinters" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <ShoppingCart />
            </ListItemIcon>
            <ListItemText primary="Verify Cart" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemIcon>
              <ExitToApp />
            </ListItemIcon>
            <ListItemText secondary="LogOut" />
          </ListItem>
        </List>
      </Popover>
    </Aux>
  );
};

export default UserPortal;
