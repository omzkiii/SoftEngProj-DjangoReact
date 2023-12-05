'use client'
import React, { useState } from 'react';
import Modal from '@/components/Modal';
import axios from 'axios';
import AccountModal from '@/components/Account';
import Link from 'next/link';
// const PasswordResetPage = ({ toggleLogIn }) => {
const PasswordResetPage = () => {
  const [formData, setFormData] = useState({ email: '' });
  const [showModal, setShowModal] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const toggleLogIn = () => {
    setShowLogIn(true);
    setShowSignUp(false);
  }

  const toggleSignUp = () => {
    setShowLogIn(false);
    setShowSignUp(true);
  }

  const handleSend = async () => {
  
    try{
      const response = await axios.post('http://localhost:8000/auth/users/reset_password/', formData);
      if (response.status === 200) {

        console.log('Send success');
      } else {
        console.log(response.status);
      }
    }catch(error){
      console.log(error);
    }
  }

  return (
    <div className="bg-blue-100 min-h-screen flex flex-col items-center justify-center">
      <Modal isOpen={showModal} closeModal={()=>setShowModal(true)}>
        <div className="bg-white text-black rounded-lg shadow-lg p-4">


          <label className="text-2xl text-black">
                Forgot Password Recovery
          </label>

            <p className="text-xl text-black">
              Please provide your registered email to the field below, we will be sending you a temporary password to login.
            </p>
            <input
              type="email"
              name="email"
              placeholder="JuanDelaCroix@gmail.com"
              className="w-full px-6 py-2 mb-3 rounded-lg text-black border-2 border-AgriAccessOrange"
              value={formData.email}
              onChange={handleInputChange}
            />
          <div className="flex justify-end">

          <div>
            <Link href={'/?login=true'}>
              <button className="bg-AgriAccessOrange text-white px-4 py-2 rounded-lg hover:bg-orange-400">
                Back
            </button>
              </Link>
          </div>
                    
          <Link href={'/?login=true'}>
          <button
              className="bg-AgriAccessGreen text-white px-4 py-2 rounded-lg hover:bg-green-800"
              onClick={handleSend}
            >
              Send
            </button> 
            </Link>

           
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default PasswordResetPage;