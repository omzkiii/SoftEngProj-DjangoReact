// components/RegisterModal.js
"use client"
import React, { useState } from 'react';

const RegisterForm = ({ onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const toggleShowPassword = (e) => {
      setShowPassword(e.target.checked)
  }

  const toggleShowConfirmPassword = (e) => {
    setShowConfirmPassword(e.target.checked)
}


  const handleRegister = () => {
    // Implement your registration logic here
    console.log('Registering with name:', name, 'email:', email);
    onClose(); // Close the modal
  };




  return (
      <div className="text-green-900">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full px-3 py-2 mb-3 rounded-lg"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full px-3 py-2 mb-3 rounded-lg"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Username"
          className="w-full px-3 py-2 mb-3 rounded-lg"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          className="w-full px-3 py-2 mb-3 rounded-lg"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
          placeholder="Confirm Password"
          className="w-full px-3 py-2 mb-3 rounded-lg"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
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
  );
};

export default RegisterForm;
