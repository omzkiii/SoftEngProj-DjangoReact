import React, { useState } from 'react';
import axios from 'axios';

axios.defaults.withCredentials = true

const LoginForm = ({ onClose }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async () => {
    console.log('Logging in with email:', formData.email);

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/users/login/', formData);
      
      if (response.status === 200) {
        // Successful login, handle user authentication and redirection
        setIsLoggedIn(true);
        setError(null);
        console.log('Log in success');
        console.log(response.user);
        onClose(); // Close the modal
      } else {
        // Handle login errors
        setError('Login failed');
      }
    } catch (error) {
      // Handle network errors
      setError('Network Error');
    }
  };

  return (
    <>
    
      {error && <p>{error}</p>}
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="w-full px-3 py-2 mb-3 rounded-lg text-black"
        value={formData.email}
        onChange={handleInputChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        className="w-full px-3 py-2 mb-3 rounded-lg text-black"
        value={formData.password}
        onChange={handleInputChange} 
      />
      
      <button
        onClick={handleLogin}
        className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800"
      >
        Log In
      </button>
      
      <a 
      className="w-full px-3"
      href="/passwordreset">Forgot password?</a>
    </>
  );
};

export default LoginForm;