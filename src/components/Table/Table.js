import * as React from "react";
import { Link } from 'react-router-dom';
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

function createData(name, email, website, companyName, actions) {
  return { name, email, website, companyName, actions };
}

const rows = [
  createData(
    "John Black",
    "jb@gmail.com",
    "jb.com",
    "Accenture",
    "place for buttons"
  ),
  createData(
    "Charlotte Gainsbourg",
    "cg@gmail.com",
    "cg.com",
    "Accenture",
    "place for buttons"
  ),
  createData(
    "Jaques Cousteau",
    "jc@gmail.com",
    "jc.com",
    "Accenture",
    "place for buttons"
  ),
  createData(
    "Jean Pierre",
    "jp@gmail.com",
    "jp.com",
    "Accenture",
    "place for buttons"
  ),
  createData(
    "Francois Brel",
    "fb@gmail.com",
    "fb.com",
    "Accenture",
    "place for buttons"
  ),
];

const deleteHandler = () => {
  console.log("delete");
};

const editHandler = () => {
  console.log("edit");
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

export default function BasicTable() {
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
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.website}</TableCell>
              <TableCell align="right">{row.companyName}</TableCell>
              <TableCell align="right">{editIcon}{deleteIcon}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
