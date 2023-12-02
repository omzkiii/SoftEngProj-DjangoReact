"use client"
import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from "axios";

const LoggedInContext = createContext();

export const LoggedInProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [customer, setCustomer] = useState({})

  const login = () => {
    setIsLoggedIn(true);
    getUser()
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  const getUser = async () => {

    try {
      const response = await axios.get('http://127.0.0.1:8000/auth/users/me/',{
        headers: {
          'Authorization': 'Token ' + localStorage.getItem('token')
        },
      })

      const responseCust = await axios.get(`http://127.0.0.1:8000/auth/updatecustomer/${response.data.id}`,{
        headers: {
          'Authorization': 'Token ' + localStorage.getItem('token')
        },
      })

      setUser(response.data)
      setCustomer(responseCust.data)
      console.log(response.data)
      console.log(responseCust.data)


    } catch (error) {
      
    }
  }


  useEffect(() =>{
    if (localStorage.getItem('token')) {
        setIsLoggedIn(true)}
        getUser()      
  },[])

  return (
    <LoggedInContext.Provider value={{ isLoggedIn, login, logout, setIsLoggedIn, user, customer }}>
      {children}
    </LoggedInContext.Provider>
  );
};

export const useLoggedInContext = () => {
  return useContext(LoggedInContext);
};
