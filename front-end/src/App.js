import React from "react";

import Router from "./router";
import { AuthProvider } from "./context/AuthContext";

function App() {
  const user = sessionStorage.getItem("user");

  return (
    <AuthProvider user={user}>
      <Router />
    </AuthProvider>
  );
}

export default App;
