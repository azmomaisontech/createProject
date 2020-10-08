import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./component/layout/NavBar";
import Dashboard from "./component/dashboard/Dashboard";
import ProjectDetails from "./component/projects/ProjectDetails";
import SignIn from "./component/auth/SignIn";
import SignUp from "./component/auth/SignUp";
import CreateProject from "./component/projects/CreateProject";
import "./App.css";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/project/:id" component={ProjectDetails} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/createproject" component={CreateProject} />
      </Switch>
    </Router>
  );
};

export default App;
