import React, { useState, Fragment } from "react";
// import api from "../api/users";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
// import { MenuItem } from '@material-ui/core';
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ResponsiveDialog from "./common/responsiveDialog/ResponsiveDialog";

const UsersTable = (props) => {
  const [openResponsiveDialog, setOpenResponsiveDialog] = useState(false);
  const [userToBeDeleted, setUserToBeDeleted] = useState({});

  const handleResponsiveDialogClickOpen = (user) => {
    console.log(user);
    setUserToBeDeleted(user);
    setOpenResponsiveDialog(true);
    // console.log(userToBeDeleted);
    console.log(openResponsiveDialog);
    return user;
  };

  const handleResponsiveDialogClose = () => {
    setOpenResponsiveDialog(false);
  };

  const handleResponsiveDialogDelete = (userName) => {
    props.onDelete(userName);
    console.log("onDelete from usersTable");
    console.log(userName);
  };

  return (
    <Fragment>
      <ResponsiveDialog
        open={openResponsiveDialog}
        user={userToBeDeleted.name}
        onClose={handleResponsiveDialogClose}
        onDelete={handleResponsiveDialogDelete}
      />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Website</TableCell>
              <TableCell align="right">Company name</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.users.map((user) => (
              <TableRow
                key={user.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="user">
                  {user.name}
                </TableCell>
                <TableCell align="right">{user.email}</TableCell>
                <TableCell align="right">{user.website}</TableCell>
                <TableCell align="right">{user.company.name}</TableCell>
                <TableCell align="right">
                  {/* {editIcon}
                {deleteIcon} */}
                  {/* <IconButton component={Link} to={`/edituser/${user.name}`} > */}
                  <IconButton
                    component={Link}
                    to={`/edituser/${user.id}`}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => handleResponsiveDialogClickOpen(user)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Fragment>
  );
};

export default UsersTable;
