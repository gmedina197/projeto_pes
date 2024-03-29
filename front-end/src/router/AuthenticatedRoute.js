import React from "react";
import { Redirect, Route, useLocation } from "react-router-dom";

import { useAuth } from "../context/AuthContext";
import DesktopNavbar from "./Header";

function AuthenticatedRoute({ path, component: Component, ...rest }) {
  const { pathname } = useLocation();
  const { signed } = useAuth();

  return (
    <Route
      path={path}
      render={() =>
        signed ? (
          <React.Fragment>
            <DesktopNavbar />
            <Component {...rest} />
          </React.Fragment>
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: pathname },
            }}
          />
        )
      }
    />
  );
}

export default AuthenticatedRoute;
