import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function ValidationTextFields(props) {

  console.log(props.defaultValue);
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '20ch' },width: "300px",
        position: "center",
        display: "block",
        margin: "auto", marginLeft:5
      }}
      noValidate
      autoComplete="off"
    >
      {/* <div>
        <TextField
          error
          id="outlined-error"
          label='Error'
          defaultValue={props}
        />
        <TextField
          error
          id="outlined-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
        />
      </div>
      <div>
        <TextField
          error
          id="filled-error"
          label="Error"
          defaultValue="Hello World"
          variant="filled"
        />
        <TextField
          error
          id="filled-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
          variant="filled"
        />
      </div> */}
      <div>
        <TextField
          error
          id="standard-error"
          label={props.defaultValue}
          // defaultValue={props.defaultValue}
          variant="standard"
        />
        {/* <TextField
          error
          id="standard-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
          variant="standard"
        /> */}
      </div>
    </Box>
  );
}