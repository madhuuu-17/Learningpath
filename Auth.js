import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const Auth = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);

  const login = (userData, userRole) => {
    setUser(userData);
    setRole(userRole);
  };

  const logout = () => {
    setUser(null);
    setRole(null);
  };

  const isRole = (roles) => role === roles;

  return (
    <AuthContext.Provider value={{user, login,logout,role,isRole}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
