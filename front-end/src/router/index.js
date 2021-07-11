import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "../pages/Login";

function Router({ children }) {
  return (
    <BrowserRouter>
      {children}
      <Switch>
        <Route exact path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
