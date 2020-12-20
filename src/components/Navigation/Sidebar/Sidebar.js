import React from "react";
// import classesM from "./Sidebar.module.css";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import NavbarItems from "../NavbarItems/NavbarItems";
import UserPortal from "../UserPortal/UserPortal";
import { Drawer } from "@material-ui/core";

const theme = createMuiTheme();
const useStyles = makeStyles({
  sidebarBackground: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
  },
  sidebar: {
    width: "250px",
    // display: "flex",
    // alignItems: "center",
    // flexDirection: "column",
  },
  header: {
    minHeight: "56px",
  },
  footer: {
    paddingLeft: "16px",
  },
});

const Sidebar = (props) => {
  let anchor = "left";
  const classes = useStyles();
  console.log(theme.palette.primary);

  return (
    <Drawer
      anchor={anchor}
      open={props.showSideDrawer}
      onClose={props.hideSideDrawer}
      classes={{
        paper: classes.sidebarBackground,
      }}
    >
      <div className={classes.sidebar} role="presentation">
        <div className={classes.header}></div>
        <NavbarItems />
        <div className={classes.footer}>
          <UserPortal />
        </div>
      </div>
    </Drawer>
  );
};

export default Sidebar;
