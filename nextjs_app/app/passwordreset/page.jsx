'use client'
import React, { useState } from 'react';
import Modal from '@/components/Modal';

  

const PasswordResetPage = () => {
  const [showModal, setShowModal] = useState(true);

  return (
    <div className="bg-green-100 min-h-screen flex flex-col items-center justify-center">
      <Modal isOpen={showModal} closeModal={()=>setShowModal(true)}>
        <div className="bg-green-500 text-white rounded-lg shadow-lg p-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full px-6 py-2 mb-3 rounded-lg text-black"
          />
          <div className="flex justify-end">
            <button
              className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800"
              onClick={()=>setShowModal(false)}
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