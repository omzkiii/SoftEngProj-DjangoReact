"use client"
import React, { createContext, useContext, useEffect, useState } from 'react';

const LoggedInContext = createContext();

export const LoggedInProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };
  useEffect(() =>{
    if (localStorage.getItem('token')) {
        setIsLoggedIn(true)}
  })

  return (
    <LoggedInContext.Provider value={{ isLoggedIn, login, logout, setIsLoggedIn }}>
      {children}
    </LoggedInContext.Provider>
  );
};

export const useLoggedInContext = () => {
  return useContext(LoggedInContext);
};
