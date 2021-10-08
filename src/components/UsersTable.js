import React, { useState, Fragment, useCallback } from "react";
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
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ResponsiveDialog from "./common/responsiveDialog/ResponsiveDialog";
import CustomPagination from "./common/customPagination/CustomPagination";

const UsersTable = (props) => {
  const [openResponsiveDialog, setOpenResponsiveDialog] = useState(false);
  const [userToBeDeleted, setUserToBeDeleted] = useState({});
  const [paginationData, setPaginationData] = useState({
    pageNumber: 0,
    numberOfRows: 5,
  });

  const handleResponsiveDialogClickOpen = (user) => {
    setUserToBeDeleted(user);
    setOpenResponsiveDialog(true);
    return user;
  };

  const handleResponsiveDialogClose = () => {
    setOpenResponsiveDialog(false);
  };

  const handleResponsiveDialogDelete = (user) => {
    props.onDelete(user);
  };

  const paginationHandler = useCallback((page, rowsPerPage) => {
    setPaginationData({ pageNumber: page, numberOfRows: rowsPerPage });
  }, []);

  const emptyRows =
    paginationData.numberOfRows -
    Math.min(
      paginationData.numberOfRows,
      props.users.length -
        paginationData.pageNumber * paginationData.numberOfRows
    );

  return (
    <Fragment>
      <ResponsiveDialog
        open={openResponsiveDialog}
        user={userToBeDeleted}
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
            {props.users
              .slice(
                paginationData.pageNumber * paginationData.numberOfRows,
                paginationData.pageNumber * paginationData.numberOfRows +
                  paginationData.numberOfRows
              )
              .map((user) => (
                <TableRow
                style={{height:80}}
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
                    <IconButton component={Link} to={`/edituser/${user.id}`}>
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
            {emptyRows > 0 && (
              <TableRow style={{ height: 80 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
        <CustomPagination
          totalRows={props.users.length}
          onPagination={paginationHandler}
        />
      </TableContainer>
    </Fragment>
  );
};

export default UsersTable;
