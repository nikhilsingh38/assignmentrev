import logo from "./logo.svg";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import { AddCountry } from "./pages/AddCountry";
import { AddCity } from "./pages/AddCity";

function App() {
  return (
    <div className="App">
      <Link to="/">Home</Link>
      <Link to="/add-country">Add-Country</Link>
      <Link to="/add-city"> Add-City</Link>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/addUser" component={AddUser} />
        <Route path={"/add-country"} component={AddCountry} />
        <Route path={"/add-city"} component={AddCity} />
        <Route exact path="/editUser/:id" component={EditUser} />
      </Switch>
    </div>
  );
}

export default App;