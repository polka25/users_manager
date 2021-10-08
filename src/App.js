import "./App.css";
import { useState, useCallback, useEffect } from "react";
import api from "../src/api/users";
import { Route, useHistory } from "react-router-dom";

import MainHeader from "./components/UI/MainHeader";
import Home from "./components/pages/Home/Home";
import AddUser from "./components/pages/AddUser/AddUser";
import EditUser from "./components/pages/EditUser/EditUser";
import CustomSnackbars from "./components/common/customSnackBars/CustomSnackBars";
import { editUser } from "./api/api";

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
    userEdited: {
      severity: "success",
      message: "The user has been edited",
    },
    userNotDeleted: {
      severity: "error",
      message: `Sorry, we couldn't delete the user.`,
    },
    userDeleted: {
      severity: "success",
      message: "The user has been deleted",
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
      const response = await api.post("/users/", newUser);
      const allUsers = [...users, response.data];
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

  const deleteUserHandler = async (name) => {
    try {
      await api.delete(`/users/${name}`);
      const usersList = users.filter((user) => user.name !== name);
      console.log(usersList);
      setSnackbarType(snackBarData.userDeleted);
      setOpen(true);
      setUsers(usersList);
      history.push("/");
    } catch (err) {
      console.log(`Error:${err.message}`);
      setSnackbarType(snackBarData.userNotDeleted);
      setOpen(true);
    }
  };

  const editUserHandler = (updatedUser) => {
    try {
      editUser(updatedUser).then((response) => {
        setUsers(
          users.map((user) =>
            user.id === updatedUser.id ? response.data : user
          )
        );
        setSnackbarType(snackBarData.userEdited);
        setOpen(true);
        history.push("/");
      });
    } catch (err) {
      console.log(`Error:${err.message}`);
      setSnackbarType(snackBarData.userNotEdited);
      setOpen(true);
    }
  };

  return (
    <div>
      <MainHeader />
      <main>
        <Route path="/" exact>
          <Home
            users={users}
            isLoading={isLoading}
            error={error}
            onDelete={deleteUserHandler}
          />
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
        <Route path="/edituser/:userId">
          <EditUser onEditUser={editUserHandler} />
        </Route>
      </main>
    </div>
  );
}

export default App;
