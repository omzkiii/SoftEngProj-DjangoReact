import React, { useState } from 'react';
import axios from 'axios';
import { useLoggedInContext } from '../contexts/LoggedInContext';

axios.defaults.withCredentials = true

const LoginForm = ({ onClose }) => {
  const { login } = useLoggedInContext();
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = (e) => {
      setShowPassword(e.target.checked)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async () => {
    console.log('Logging in with email:', formData.username);

    try {
      const response = await axios.post('http://127.0.0.1:8000/auth/token/login/', formData);
      
      if (response.status === 200) {
        // Successful login, handle user authentication and redirection
        localStorage.setItem('token', response.data.auth_token);
        login();
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
    <div className="text-green-900">
            <input
            type="text"
            name="username"
            placeholder="Username"
            className="w-full px-3 py-2 mb-3 rounded-lg"
            value={formData.username}
            onChange={handleInputChange}
            />
            <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            className="w-full px-3 py-2 mb-3 rounded-lg"
            value={formData.password}
            onChange={handleInputChange}
            />

            <div className="flex justify-between">

                <label>
                    <input
                        type="checkbox"
                        value="showPassword"
                        checked={showPassword}
                        onChange={toggleShowPassword}
                    />
                Show Password
                </label>
                <a href="/passwordreset">Forgot Password</a>

            </div>
            <br/>

            <button
            onClick={handleLogin}
            className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800"
            >
            Log In
            </button>
              
        </div>
  );
};

export default LoginForm;
