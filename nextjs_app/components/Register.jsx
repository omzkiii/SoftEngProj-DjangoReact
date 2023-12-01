import React, { useState } from "react";
import axios from "axios";
import { useLoggedInContext } from '../contexts/LoggedInContext';

const RegisterForm = ({ onClose }) => {
  const { login } = useLoggedInContext();
  const [formData, setFormData] = useState({user:  {username:"", email:"", first_name:"", last_name:"", password:"", re_password:""} });
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
    setFormData({ ...formData, [name]: value });
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
    }
  };

  return (
    <>
      {error && <p>{error}</p>}
      <input
        type="text"
        name="username"
        placeholder="Username"
        className="w-full px-3 py-2 mb-3 rounded-lg text-black"
        value={formData.username}
        onChange={handleInputChange}
      />
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
    </>
  );
};

export default RegisterForm;
