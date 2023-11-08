"use client"
import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

const LoginForm = ({onClose}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = (e) => {
        setShowPassword(e.target.checked)
    }


    //TODO: backend authentication
    const handleLogin = () => {
    console.log('Logging in with email:', email);
    onClose(); // Close the modal
  };

    return (
        <div className="text-green-900">
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
                <Link href="/">Forgot Password</Link>

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