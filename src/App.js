import "./App.css";
import { Route } from "react-router-dom";

import MainHeader from "./components/UI/MainHeader";
import Home from "./pages/Home";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/adduser">
          <AddUser />
        </Route>
        <Route path="/edituser">
          <EditUser />
        </Route>
      </main>
    </div>
  );
}

export default App;
