import React, { useState, useEffect } from "react";
import TablePagination from "@mui/material/TablePagination";

export default function CustomPagination(props) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const { totalRows, onPagination } = props;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  useEffect(() => {
    onPagination(page, rowsPerPage);
  }, [onPagination, page, rowsPerPage]);

  return (
    <TablePagination
      rowsPerPageOptions={[5, 10]}
      component="div"
      count={totalRows}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
}
