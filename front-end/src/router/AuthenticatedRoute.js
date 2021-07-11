import React from "react";
import { Redirect, Route, useLocation } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

function AuthenticatedRoute({ path, component, ...rest }) {
  const { pathname } = useLocation();
  const { currentUser } = useAuth();

  return (
    <Route
      path={path}
      render={() =>
        currentUser ? (
          component
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
