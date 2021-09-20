import React from "react";

import Router from "./router";
import { AuthProvider } from "./context/AuthContext";

function App() {
  const user = localStorage.getItem("user");

  return (
    <AuthProvider user={JSON.parse(user)}>
      <Router />
    </AuthProvider>
  );
}

export default App;
