"use client"
import React, { useState } from 'react';
import LoginForm from './Login';
import RegisterForm from './Register';
import Modal from './Modal';

const AccountModal = ({ isModalOpen, onClose, login }) => {
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
      <div className={`rounded-lg shadow-lg p-4 ${showLogIn ? 'bg-white text-black' : 'bg-AgriAccessOrange text-white'}`}>
        {/* Rest of your code remains the same */}
        <button
            onClick={onClose}
            className="bg-green-200 text-green-800 px-2 py-0 rounded-lg hover:bg-green-300 ">
            x
          </button>
       
    

        <div className='mb-4 flex justify-center'>
          
        <button
            className={showLogIn 
              ? 'text-white bg-AgriAccessOrange font-extrabold rounded-md p-2 w-1/4 ' 
              : 'font-extrabold bg-white text-AgriAccessOrange rounded-md p-2'}
            onClick={toggleLogIn}
          >Log-in</button>
          
          <button
            className={showSignUp 
              ? 'text-whit font-extrabold rounded-xl shadow-2xl p-2 ' 
              : 'font-extrabold bg-white text-AgriAccessOrange rounded-xl border-2 border-black p-2 w-1/4 shadow-md shadow-gray-600'}
            onClick={toggleSignUp}
          >Sign up</button>
        </div>

        {showLogIn && <LoginForm onClose={onClose} />}
        {showSignUp && <RegisterForm onClose={onClose} />}
      </div>
    </Modal>
  );
};

export default AccountModal;

