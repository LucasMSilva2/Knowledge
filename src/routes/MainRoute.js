import React from "react";
import Navbar from "../compoents/Navbar";
import { BrowserRouter as Router, Route, Switch,Redirect } from "react-router-dom";
import Backend from "../screens/Backend";
import DataScience from "../screens/DataScience";
import Home from "../screens/Home";
import Frontend from "../screens/Frontend";
import Mobile from "../screens/Mobile";
import Cadastro from "../screens/Cadastro";
import Login from "../screens/Login";
import Dashboard from '../screens/Dashboard'
import Games from '../screens/Games'

export default () => {
  return (
    <Router>

      <Switch>
        <Route path="/home">
          <Home />
        </Route>

        <Route exact path="/">
          <Redirect to="/login" />
        </Route>

        <Route path="/backend">
          <Backend />
        </Route>

        <Route path="/datascience">
          <DataScience />
        </Route>

        <Route path="/frontend">
          <Frontend />
        </Route>

        <Route path="/mobile">
          <Mobile />
        </Route>

        <Route path="/cadastro">
          <Cadastro />
        </Route>

        <Route  path="/login">
          <Login />
        </Route>

        <Route  path="/dashboard">
          <Dashboard />
        </Route>

        <Route  path="/games">
          <Games />
        </Route>
      </Switch>
    </Router>
  );
};
