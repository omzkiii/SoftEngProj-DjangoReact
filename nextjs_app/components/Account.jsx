"use client"
import React, { useState } from 'react';
import LoginForm from './Login';
import RegisterForm from './Register';
import Modal from './Modal';
import './ModalStyles.css';
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
       
        <div className="flex justify-end mb-4">
          <button onClick={onClose} className="bg-transparent text-Lime px-2 py-0 border-2 border-AgriAccessOrange rounded-md hover:bg-orange-400 hover:text-white">
            x
          </button>
        </div>
    

        <div className='mb-4 flex justify-center'>
          
        <button
            className={showLogIn 
              //PAG NASA LOGIN
              ? 'text-white bg-AgriAccessOrange font-extrabold rounded-md p-2 w-1/4 ' 
              //PAG NASA SIGN UP
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

        <div className="bg">
          {/* switch */}
          <span className='switch'>
              {/* switcher */}
            <input type="checkbox"  id="loginInput" className="relative w-32 h-12 "/>
            <label htmlFor="login">Log in</label> {/* Use 'htmlFor' instead of 'for' */}
          </span>
        </div>
          


        {showLogIn && <LoginForm onClose={onClose} />}
        {showSignUp && <RegisterForm onClose={onClose} />}
        {/* <PasswordResetPage toggleLogIn={toggleLogIn} /> */}
      </div>
    </Modal>
  );
};

export default AccountModal;

