"use client"
import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';

const LoginForm = ({onClose}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //TODO: backend authentication
    const handleLogin = () => {
    console.log('Logging in with email:', email);
    onClose(); // Close the modal
  };

    return (
        <>
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
            onClick={handleLogin}
            className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800"
            >
            Log In
            </button>
            
        </>
    );
};

export default LoginForm;