"use client"
import React, { useState } from 'react';
import LoginForm from './Login';
import RegisterForm from './Register';
import Modal from './Modal';

const AccountModal = ({ isModalOpen, onClose }) => {
  const [showLogIn, setShowLogIn] = useState(true);
  const [showSignUp, setShowSignUp] = useState(false);


  const toggleLogIn = () => {
    setShowLogIn(true);
    setShowSignUp(false);
  }

  const toggleSignUp = () => {
    setShowLogIn(false);
    setShowSignUp(true);
  }

  


  return (
    <Modal isOpen={isModalOpen} closeModal={onClose}>
      <div className="bg-green-500 text-white rounded-lg shadow-lg p-4">
        {/* TODO: change to 'x' icon */}
        <div className='mb-2 flex justify-end'> 
          <button
            onClick={onClose}
            className="bg-green-200 text-green-800 px-2 py-0 rounded-lg hover:bg-green-300">
            x
          </button>
        </div>

        <div className='mb-4 flex justify-center'>
          {/* TODO: styling when clicked and styling when not clicked; positioning */}
          <button className={showLogIn ? 'text-green-700 bg-white rounded-md p-2': 'bg-green-700 text-white rounded-md p-2' } onClick={toggleLogIn}>Log-in</button>

          {/* TODO: styling when clicked and styling when not clicked; positioning */}
          <button className={showSignUp ? 'text-green-700 bg-white rounded-md p-2': 'bg-green-700 text-white rounded-md p-2' } onClick={toggleSignUp}>Sign up</button>

          
        </div>

        {showLogIn && <LoginForm onClose={onClose}/>}
        {showSignUp && <RegisterForm onClose={onClose}/>}
      </div>
    </Modal>
  );
};

export default AccountModal;