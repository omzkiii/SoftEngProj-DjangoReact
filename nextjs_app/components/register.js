// components/RegisterModal.js
"use client"
import React, { useState } from 'react';

const RegisterForm = ({ onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Implement your registration logic here
    console.log('Registering with name:', name, 'email:', email);
    onClose(); // Close the modal
  };

  return (
      <>
        <input
          type="text"
          placeholder="Name"
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
          type="password"
          placeholder="Password"
          className="w-full px-3 py-2 mb-3 rounded-lg"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
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
