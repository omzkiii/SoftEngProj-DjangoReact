'use client'
import React, { useState } from 'react';
import Modal from '@/components/Modal';
import axios from 'axios';


const PasswordResetPage = () => {
  const [formData, setFormData] = useState({ email: '' });
  const [showModal, setShowModal] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
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
    <div className="bg-green-100 min-h-screen flex flex-col items-center justify-center">
      <Modal isOpen={showModal} closeModal={()=>setShowModal(true)}>
        <div className="bg-green-500 text-white rounded-lg shadow-lg p-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full px-6 py-2 mb-3 rounded-lg text-black"
            value={formData.email}
            onChange={handleInputChange}
          />
          <div className="flex justify-end">
            <button
              className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800"
              onClick={handleSend}
            >
              Send
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default PasswordResetPage;