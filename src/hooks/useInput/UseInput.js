import { useState,useEffect } from "react";

const useInput = (validateValue, defaultValue = "") => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  useEffect(()=>{
  if (defaultValue) {
    console.log(defaultValue)
    setEnteredValue(defaultValue);
  }},[defaultValue]);

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
    console.log(event.target.value);

    console.log(event.target);
  };
  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  return {
    value: enteredValue,
    hasError: hasError,
    valueChangeHandler,
    inputBlurHandler,
  };
};

export default useInput;
