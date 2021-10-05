import React, { useState } from "react";
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

const UsersTable = (props) => {
  const [showPopper, setShowPopper] = useState(false);

  const deleteHandler = (props) => {
    console.log("delete");
    console.log(props.id);
    setShowPopper(true);
    console.log(showPopper);
    return props;
  };

  // const deleteIcon = (
  //   <IconButton onClick={deleteHandler}>
  //     <DeleteIcon />
  //   </IconButton>
  // );

  // const editIcon = (
  //   <IconButton component={Link} to="/edituser">
  //     <EditIcon />
  //   </IconButton>
  // );

  return (
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
              <TableCell id={user.id} component="th" scope="user">
                {user.name}
              </TableCell>
              <TableCell id={user.id} align="right">
                {user.email}
              </TableCell>
              <TableCell id={user.id} align="right">
                {user.website}
              </TableCell>
              <TableCell id={user.id} align="right">
                {user.company.name}
              </TableCell>
              <TableCell id={user.id} align="right">
                {/* {editIcon}
                {deleteIcon} */}
                <IconButton component={Link} to="/edituser">
                  <EditIcon />
                </IconButton>
                <IconButton id={5} onClick={deleteHandler}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UsersTable;
