import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "../pages/Login";
import Products from "../pages/Products";
import SignUp from "../pages/SIgnUp";
import AuthenticatedRoute from "./AuthenticatedRoute";

function Router({ children }) {
  return (
    <BrowserRouter>
      {children}
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/sign-up" component={SignUp} />
        <AuthenticatedRoute
          exact
          path={["/products", "/home", "/"]}
          component={Products}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
