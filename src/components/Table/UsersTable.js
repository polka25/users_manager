import React from "react";
import { useEffect, useState } from "react";
import api from "../../api/users";
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


  const deleteHandler = () => {
    console.log("delete");
  };

  const deleteIcon = (
    <IconButton onClick={deleteHandler}>
      <DeleteIcon />
    </IconButton>
  );

  const editIcon = (
    <IconButton component={Link} to="/edituser">
      <EditIcon />
    </IconButton>
  );

const UsersTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await api.get("/users/");
        console.log(response);
        console.log(response.data);
        setUsers(response.data);
      } catch (error) {
        if (error.reponse) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else {
          console.log(`Error: ${error.message}`);
        }
      }
    };
    fetchUsers();
  }, []);

  console.log(users);
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
          {users.map((user) => (
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
                {editIcon}
                {deleteIcon}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UsersTable;
