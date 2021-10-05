import * as React from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
// import users from "../../../api/users";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomSnackbars(props) {
  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      {/* <Button variant="outlined" onClick={handleSnackbarClick}>
        Open success snackbar
      </Button> */}
      <Snackbar
        open={props.status}
        autoHideDuration={3000}
        onClose={props.onClose}
      >
        <Alert
          onClose={props.onClose}
          severity={props.type.severity}
          sx={{ width: "100%" }}
        >
          {props.type.message}
        </Alert>
      </Snackbar>
    </Stack>
  );
}
