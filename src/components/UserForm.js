import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import useInput from "../hooks/useInput/UseInput";
import Button from "@material-ui/core/Button";

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
    isTouched:nameInputIsTouched,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
  } = useInput(isNotEmpty, defaultUserData && defaultUserData.name);

  const {
    value: emailValue,
    hasError: emailInputHasError,
    isTouched:emailInputIsTouched,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput(isEmail, defaultUserData && defaultUserData.email);

  const {
    value: websiteValue,
    // isTouched:websiteInputIsTouched,
    valueChangeHandler: websiteChangeHandler,
    inputBlurHandler: websiteBlurHandler,
  } = useInput(isNotEmpty, defaultUserData && defaultUserData.website);

  const {
    value: companyNameValue,
    // isTouched:companyNameInputIsTouched,
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

  const disableButtonCondition=(!(emailInputIsTouched||nameInputIsTouched)||(nameInputHasError||emailInputHasError));
console.log(nameInputIsTouched);
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
      <TextField
        error={nameInputHasError}
        required
        id="name"
        label="Name"
        variant="standard"
        value={nameValue}
        onChange={nameChangedHandler}
        onBlur={nameBlurHandler}
      />

      <TextField
        error={emailInputHasError}
        required
        id="email"
        label="Email"
        variant="standard"
        value={emailValue}
        onChange={emailChangeHandler}
        onBlur={emailBlurHandler}
      />

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
      <Button disabled={disableButtonCondition} type="submit">
        {props.buttonName}
      </Button>
    </Box>
  );
};

export default UserForm;
