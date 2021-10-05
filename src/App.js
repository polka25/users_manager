import "./App.css";
import { useState, useCallback, useEffect } from "react";
import api from "../src/api/users";
import { Route, useHistory } from "react-router-dom";

import MainHeader from "./components/UI/MainHeader";
import Home from "./components/pages/Home/Home";
import AddUser from "./components/pages/AddUser/AddUser";
import EditUser from "./components/pages/EditUser/EditUser";
import CustomSnackbars from "./components/common/customSnackBars/CustomSnackBars";

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState([false]);
  const [error, setError] = useState([null]);
  const [open, setOpen] = useState(false);
  const [snackbarType, setSnackbarType] = useState("");
  const history = useHistory();

  const snackBarData = {
    userNotAdded: {
      severity: "error",
      message: `Sorry, we couldn't add the user.`,
    },
    userAdded: {
      severity: "success",
      message: "The user has been added",
    },
    userNotEdited: {
      severity: "error",
      message: `Sorry, we couldn't edit the user.`,
    },
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const fetchUsersHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await api.get("/users/");
      console.log(response);
      console.log(response.data);

      setUsers(response.data);
      setIsLoading(false);
    } catch (error) {
      if (error.reponse) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else {
        console.log(`Error: ${error.message}`);
      }
    }
  }, []);

  useEffect(() => {
    fetchUsersHandler();
  }, [fetchUsersHandler]);

  const addUserHandler = async (newUser) => {
    try {
      console.log("New user ready to be pushed:");
      console.log(newUser);
      const response = await api.post("/users/", newUser);
      console.log("response");
      console.log(response.data);
      const allUsers = [...users, response.data];
      console.log("All users:");
      console.log(allUsers);
      setUsers(allUsers);
      setSnackbarType(snackBarData.userAdded);
      setOpen(true);
      history.push("/");
    } catch (error) {
      console.log(`Error: ${error.message}`);
      setSnackbarType(snackBarData.userNotAdded);
      setOpen(true);
    }
  };

  const deleteUserHandler = ()=>{console.log('delete him!')};

  // const addUserHandler=(props)=>{console.log('rops from addUserHandler:');
  // console.log(props);};

  // console.log(users);
  // props.onTableLoad(users);

  // const dataLoadHandler = (data) => {
  //   console.log("Data from the App");
  //   console.log(data);
  // };

  return (
    <div>
      <MainHeader />
      <main>
        <Route path="/" exact>
          <Home users={users} isLoading={isLoading} error={error} onDelete={deleteUserHandler}/>
          {open && (
            <CustomSnackbars
              status={open}
              type={snackbarType}
              onClose={handleClose}
            />
          )}
        </Route>
        <Route path="/adduser">
          <AddUser users={users} onAddUser={addUserHandler} />
          {open && (
            <CustomSnackbars
              status={open}
              type={snackbarType}
              onClose={handleClose}
            />
          )}
        </Route>
        <Route path="/edituser">
          <EditUser />
        </Route>
      </main>
    </div>
  );
}

export default App;
