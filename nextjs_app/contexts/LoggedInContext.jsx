"use client"
import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from "axios";

const LoggedInContext = createContext();

export const LoggedInProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [customer, setCustomer] = useState({})
  const [carts, setCarts] = useState({})
  const [products, setProducts] = useState({});


  

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

      const responseCart = await axios.get(`http://127.0.0.1:8000/api/cart/${response.data.username}`,{
        headers: {
          'Authorization': 'Token ' + localStorage.getItem('token')
        },})
          if(responseCart.status === 200){
            setCarts(responseCart.data)
          }
          else
            setCarts(localStorage.getItem('cart'))

      setUser(response.data)
      setCustomer(responseCust.data)
      console.log(response.data)
      console.log(responseCust.data)
      console.log(responseCart.data)


    } catch (error) {
      
    }
  }
  const currentCart = async () => {
    const response = await axios.get(`http://127.0.0.1:8000/api/cart/${user.id}`,
    {headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Token ' + localStorage.getItem('token')
    }})
    if(response.status === 200){
      setCarts(response.data)
    }
    else
      setCarts(localStorage.getItem('cart'))
}

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
        setIsLoggedIn(true)}
    getUser()
    localStorage.setItem('cart',{})
    currentCart()
    fetchProducts()
    console.log("CARTS")
    console.log(carts)  
    console.log(user)
  },[])

  return (
    <LoggedInContext.Provider value={{ isLoggedIn, login, logout, setIsLoggedIn, user, customer, carts, products }}>
      {children}
    </LoggedInContext.Provider>
  );
};

export const useLoggedInContext = () => {
  return useContext(LoggedInContext);
};
