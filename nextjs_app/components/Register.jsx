import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLoggedInContext } from '../contexts/LoggedInContext';

const RegisterForm = ({ onClose }) => {
  const { login, carts } = useLoggedInContext();
  const [formData, setFormData] = useState({user:  {username:"", email:"", first_name:"", last_name:"", password:"", re_password:""},cart:{}});
  const [showPassword, setShowPassword] = useState();
  const [showConfirmPassword, setShowConfirmPassword] = useState();
  const [error, setError] = useState(null);

  const toggleShowPassword = (e) => {
    setShowPassword(e.target.checked)
  }

  const toggleShowConfirmPassword = (e) => {
    setShowConfirmPassword(e.target.checked)
  }

  const handleInputChange = (e) => {
    
    const { name, value } = e.target;
    setFormData({ ...formData ,['user']:{...formData.user,[name]:value}});
    //const userFormData = formData;
    
    console.log("USER FORM" + JSON.stringify(formData))
  };


  const handleRegister = async () => {
    

    try {
      const response = await axios.post("http://localhost:8000/register/", formData);

      if (response.status === 201) {
        // Registration successful
        setError(null);
        console.log("Registration success");
        login();
        onClose(); // Close the modal
      } else {
        // Handle registration errors
        setError("Registration failed");
      }
    } catch (error) {
      // Handle network errors
      setError("Network Error");
      console.log(error);
      console.log(formData)
    }
  };
  useEffect(()=>{
    const updatedCart = carts.reduce((acc, cartItem) => {
      const { product, quantity } = cartItem; // Assuming each cartItem has 'product' and 'quantity' properties
      return {
        ...acc,
        [product]: quantity, // Assuming 'product' is a unique identifier for each cart item
      };},{})
    setFormData({ ...formData,  ['cart']:{...formData.cart,...updatedCart}})
    //const updatedCart = {...formData, cart:{...carts}}
    
    // Update formData state with the cart data
    //setFormData(formData => ({...formData,...updatedCart}))

    console.log(formData.user.last_name)
    //console.log(updatedCart)
  },[])

  return (
    <>
      <dib>
        {error && <p>{error}</p>}
      </dib>
      
      <div>
        <div>

          
        <input
            type="text"
            name="username"
            placeholder="Username"
            className="w-full px-3 py-2 mb-3 rounded-lg text-black"
            value={formData.username}
            onChange={handleInputChange}
          />


        </div>

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full px-3 py-2 mb-3 rounded-lg text-black"
            value={formData.email}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="first_name"
            placeholder="First name"
            className="w-full px-3 py-2 mb-3 rounded-lg text-black"
            value={formData.first_name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="last_name"
            placeholder="Last name"
            className="w-full px-3 py-2 mb-3 rounded-lg text-black"
            value={formData.last_name}
            onChange={handleInputChange}
          />
          
          <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              className="w-full px-3 py-2 mb-3 rounded-lg text-black"
              value={formData.password}
              onChange={handleInputChange}
            />
            <label>
              <input
                type="checkbox"
                value="showPassword"
                checked={showPassword}
                onChange={toggleShowPassword}
              />
              Show Password
            </label>
            <br/>
            <br/>
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="re_password"
              placeholder="Confirm Password"
              className="w-full px-3 py-2 mb-3 rounded-lg text-black"
              value={formData.re_password}
              onChange={handleInputChange}
            />
            <label>
              <input  
                type="checkbox"
                value="showConfirmPassword"
                checked={showConfirmPassword}
                onChange={toggleShowConfirmPassword}
              />
              Show Password
            </label>
            <br/>
            <br/>
          <button
            onClick={handleRegister}
            className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800"
          >
            Sign-up
          </button>
      </div>
    </>
  );
};

export default RegisterForm;
