    "use client"
    import React, { useState } from 'react';
    import LoginForm from './Login';
    import RegisterForm from './Register';
    import Modal from './Modal';
    const AccountModal = ({ isModalOpen, onClose, login }) => {
      const [showLogIn, setShowLogIn] = useState(true);
      const [showSignUp, setShowSignUp] = useState(false);
      const [showResetPassword,setresetPassword] = useState(false);

      const toggleLogIn = () => { 
        setShowLogIn(true);
        setShowSignUp(false);
        setresetPassword(false);
      }

      const toggleSignUp = () => {
        setShowLogIn(false);
        setShowSignUp(true);
      }

      // const toggleShowPasword = () ={
        
      // }

      return (
        <Modal isOpen={isModalOpen} closeModal={onClose}>
          <div className={`rounded-lg shadow-lg p-4 ${showLogIn ? 'bg-white text-black' : 'bg-AgriAccessOrange text-white'}`}>
          
            <div className="flex justify-end mb-4">
              <button onClick={onClose} className="bg-transparent text-Lime px-2 py-0 border-2 border-AgriAccessOrange rounded-md hover:bg-orange-400 hover:text-white">
                x
              </button>
            </div>
        
          {showLogIn && (
          <div id="loginDiv" className='mb-4 flex justify-center'>
            <h1 className="font-Bree text-4xl text-AgriAccessOrange">LOGIN</h1>
          </div>
        )}
        
        {showSignUp && (
          <div id="registerDiv" className='mb-4 flex justify-center'>
            <h1 className="font-Bree text-4xl text-white">REGISTER</h1>
          </div>
        )}

              


            {showLogIn && <LoginForm onClose={onClose} toggleSignUp={toggleSignUp} />} {/* Pass toggleSignUp */}
            {showSignUp && <RegisterForm onClose={onClose} toggleLogIn={toggleLogIn} />}

            {/* <PasswordResetPage toggleLogIn={toggleLogIn} /> */}
          </div>
        </Modal>
      );
    };

    export default AccountModal;

