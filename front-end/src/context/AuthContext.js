import React from "react";

const AuthContext = React.createContext();

function AuthProvider({ user, children }) {
  return (
    <AuthContext.Provider value={{ currentUser: user }}>
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
