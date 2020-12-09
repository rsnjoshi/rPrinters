import React from "react";
import classes from "./Sidebar.module.css";

import NavbarItems from "../NavbarItems/NavbarItems";
import UserPortal from "../UserPortal/UserPortal";
import { Drawer } from "@material-ui/core";

const sidebar = (props) => {
  let anchor = "left";

  return (
    <Drawer
      anchor={anchor}
      open={props.showSideDrawer}
      onClose={props.hideSideDrawer}
    >
      <div className={classes.Sidebar} role="presentation">
        <NavbarItems />
        <UserPortal />
      </div>
    </Drawer>
  );
};

export default sidebar;
