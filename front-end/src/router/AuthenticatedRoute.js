import React from "react";
import { Redirect, Route, useLocation } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

function AuthenticatedRoute({ path, component: Component, ...rest }) {
  const { pathname } = useLocation();
  const { signed } = useAuth();

  return (
    <Route
      path={path}
      render={() =>
        signed ? (
          <Component {...rest} />
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
