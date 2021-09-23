import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import AddIcon from "@mui/icons-material/Add";
import HomeIcon from "@mui/icons-material/Home";
// import {SaveIcon, AddIcon} from "@material-ui/icons";
import classes from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar >
          <h1 className={classes.title}>Users Manager</h1>
          <div>
            <Button startIcon={<HomeIcon />} component={Link} to="/home">
              Home
            </Button>
            <Button startIcon={<AddIcon />} component={Link} to="/adduser">
              Add User
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default MainHeader;
