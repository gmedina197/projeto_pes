import React, { useState } from "react";
import { makeLogin } from "../utils/calls";

const AuthContext = React.createContext();

function AuthProvider({ user, children }) {
  const [authInfo, setAuthInfo] = useState({ user });

  const signIn = async (email, password) => {
    try {
      const res = await makeLogin(email, password);

      setAuthInfo(res);
    } catch (error) {
      throw error;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser: authInfo.user,
        signed: Boolean(authInfo.user),
        signIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = React.useContext(AuthContext);

  if (!context) {
    throw new Error("useWidget must be used within a WidgetProvider");
  }

  return context;
}

export { AuthProvider, useAuth };
