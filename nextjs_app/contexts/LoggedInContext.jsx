"use client"
import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from "axios";

const LoggedInContext = createContext();

export const LoggedInProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [customer, setCustomer] = useState({})
  const [products, setProducts] = useState([]);


  

  const login = () => {
    getUser()
  };

  const logout = () => {
    setIsLoggedIn(false);
  };


//User
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
      setIsLoggedIn(true);
      setUser(response.data)
      setCustomer(responseCust.data)


    } catch (error) {
      if (error.response.data.detail == "Invalid token."){
        localStorage.removeItem('token');
      }
      
    }
  }

  //Carts
  





//Products
const fetchProducts = async () => {
  try {
  const response = await axios.get(`http://127.0.0.1:8000/api/products/`)
  setProducts(response.data);
  if (response.status === 200){
  console.log("NUMBER 1")}
  console.log(products)
  } catch (error){
  console.log('ERROR ENCOUNTERED');
  }
}

  useEffect(() =>{
    if (localStorage.getItem('token')) {
      getUser()
      console.log(user)
    }
        
        
    fetchProducts();
  },[])

  return (
    <LoggedInContext.Provider value={{ isLoggedIn, login, logout, setIsLoggedIn, user, customer, products, fetchProducts }}>
      {children}
    </LoggedInContext.Provider>
  );
};

export const useLoggedInContext = () => {
  return useContext(LoggedInContext);
};
