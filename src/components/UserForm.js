import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import useInput from "../hooks/useInput/UseInput";
import Button from "@material-ui/core/Button";
import ValidationTextFields from "../components/common/customValidationTextFields/CustomValidationTextFields";
import BasicCard from "./UI/Card";
// import users from "../api/users";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.trim() !== "" && value.includes("@");
const isButtonActive = "";

const UserForm = (props) => {
  const {
    value: userNameValue,
    hasError: userNameInputHasError,
    valueChangeHandler: userNameChangedHandler,
    inputBlurHandler: userNameBlurHandler,
  } = useInput(isNotEmpty);

  const {
    value: nameValue,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
  } = useInput(isNotEmpty);

  const {
    value: emailValue,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput(isEmail);

  const {
    value: websiteValue,
    // hasError: websiteInputHasError,
    valueChangeHandler: websiteChangeHandler,
    inputBlurHandler: websiteBlurHandler,
  } = useInput(isNotEmpty);

  const {
    value: companyNameValue,
    // hasError: companyNameInputHasError,
    valueChangeHandler: companyNameChangeHandler,
    inputBlurHandler: companyNameBlurHandler,
  } = useInput(isNotEmpty);

  const submitBoxHandler = (event) => {
    event.preventDefault();
    const newUser = {
      // key: props.users.length + 1,
      id: props.users.length + 1,
      name: nameValue,
      username: userNameValue,
      email: emailValue,
      address: {
        street: "",
        suite: "",
        city: "",
        zipcode: "",
        geo: { lat: "", lng: "" },
      },
      phone: "",
      website: websiteValue,
      company: { name: companyNameValue, catchPhrase: "", bs: "" },
    };

    console.log(newUser);
    props.onSubmit(newUser);
  };

  const labels = [
    "First name",
    "Last name",
    "Email",
    "Website",
    "Company name",
  ];

  return (
    // <BasicCard>
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "20ch" },
        width: "300px",
        position: "center",
        display: "block",
        margin: "auto",
      }}
      noValidate
      autoComplete="on"
      onSubmit={submitBoxHandler}
    >
      {userNameInputHasError ? (
        <ValidationTextFields defaultValue={labels[0]} />
      ) : (
        <TextField
          required
          id="username"
          label={labels[0]}
          variant="standard"
          value={userNameValue}
          onChange={userNameChangedHandler}
          onBlur={userNameBlurHandler}
        />
      )}
      {nameInputHasError ? (
        <ValidationTextFields defaultValue={labels[1]} />
      ) : (
        <TextField
          required
          id="name"
          label="Last name"
          variant="standard"
          value={nameValue}
          onChange={nameChangedHandler}
          onBlur={nameBlurHandler}
        />
      )}
      {emailInputHasError ? (
        <ValidationTextFields defaultValue={labels[2]} />
      ) : (
        <TextField
          required
          id="email"
          label="Email"
          variant="standard"
          value={emailValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
      )}
      <TextField
        id="website"
        label="Website"
        variant="standard"
        value={websiteValue}
        onChange={websiteChangeHandler}
        onBlur={websiteBlurHandler}
      />
      <TextField
        id="companyName"
        label="Company name"
        variant="standard"
        value={companyNameValue}
        onChange={companyNameChangeHandler}
        onBlur={companyNameBlurHandler}
      />
      <Button type="submit" isActive>
        Add user
      </Button>
    </Box>
    // </BasicCard>
  );
};

export default UserForm;
