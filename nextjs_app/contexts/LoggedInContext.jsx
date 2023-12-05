"use client"
import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from "axios";

const LoggedInContext = createContext();

export const LoggedInProvider = ({ children }) => {
  const [cartData, setCartData] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [customer, setCustomer] = useState({})
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);
  const [cartUpdateFlag, setCartUpdateFlag] = useState(Date.now());

  

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
      getCart(response.data.username)


    } catch (error) {
      if (error.response.data.detail == "Invalid token."){
        localStorage.removeItem('token');
      }
      
    }
  }

  //Carts
  const getCart = async (username) => {
    if (isLoggedIn){
      try{
        const response = await axios.get(`http://127.0.0.1:8000/api/cart/${username}`,
          {headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + localStorage.getItem('token')
          }})
        if(response.status === 200){
          console.log("FETCH SUCCESS")
          setCarts(response.data)
        }
        else
          console.log("FETCH FAILED")
      } catch(error) {
  
      }
    }
    else{
      setCarts(JSON.parse(localStorage.getItem('cart')))
    }
  }





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
    <LoggedInContext.Provider value={{ isLoggedIn, login, logout, setIsLoggedIn, 
                                        user, customer, products, fetchProducts, 
                                        carts, getCart, cartUpdateFlag, setCartUpdateFlag }}>
      {children}
    </LoggedInContext.Provider>
  );
};

export const useLoggedInContext = () => {
  return useContext(LoggedInContext);
};
