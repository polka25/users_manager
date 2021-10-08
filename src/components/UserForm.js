import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import useInput from "../hooks/useInput/UseInput";
import Button from "@material-ui/core/Button";
import ValidationTextFields from "../components/common/customValidationTextFields/CustomValidationTextFields";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.trim() !== "" && value.includes("@");

const UserForm = (props) => {
  console.log(props);

  const defaultUserData = props.editedUser;
  console.log("editedUser:");
  console.log(props.editedUser);
  console.log(defaultUserData);

  const {
    value: nameValue,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
  } = useInput(isNotEmpty, defaultUserData && defaultUserData.name);

  const {
    value: emailValue,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput(isEmail, defaultUserData && defaultUserData.email);

  const {
    value: websiteValue,
    valueChangeHandler: websiteChangeHandler,
    inputBlurHandler: websiteBlurHandler,
  } = useInput(isNotEmpty, defaultUserData && defaultUserData.website);

  const {
    value: companyNameValue,
    valueChangeHandler: companyNameChangeHandler,
    inputBlurHandler: companyNameBlurHandler,
  } = useInput(isNotEmpty, defaultUserData && defaultUserData.company.name);

  const submitBoxHandler = (event) => {
    event.preventDefault();

    if (defaultUserData) {
      const newUser = {
        id: defaultUserData.id,
        name: nameValue,
        email: emailValue,
        address: {
          street: defaultUserData.address.street,
          suite: defaultUserData.address.suite,
          city: defaultUserData.address.city,
          zipcode: defaultUserData.address.zipcode,
          geo: {
            lat: defaultUserData.address.geo.lat,
            lng: defaultUserData.address.geo.lat,
          },
        },
        phone: defaultUserData.phone,
        website: websiteValue,
        company: {
          name: companyNameValue,
          catchPhrase: defaultUserData.company.catchPhrase,
          bs: defaultUserData.company.bs,
        },
      };

      console.log(newUser);
      props.onEdit(newUser);
    } else {
      const newUser = {
        id: props.users.length + 1,
        name: nameValue,
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
    }
  };

  const labels = ["Username", "Name", "Email", "Website", "Company name"];

  return (
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
      autoComplete="off"
      onSubmit={submitBoxHandler}
    >
      {nameInputHasError ? (
        <ValidationTextFields defaultValue={labels[1]} />
      ) : (
        <TextField
          required
          id="name"
          label="Name"
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
      <Button type="submit">{props.buttonName}</Button>
    </Box>
  );
};

export default UserForm;
