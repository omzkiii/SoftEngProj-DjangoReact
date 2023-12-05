import React, { useState } from 'react';

const Modal = ({ isOpen, closeModal, children }) => {
  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const modalClasses = isOpen
    ? 'fixed top-0 left-0 w-full h-full flex items-center justify-center transition-all duration-300 z-50'
    : 'fixed top-0 left-0 w-full h-full flex items-center justify-center transition-all duration-300 bg-green-600 bg-opacity-0 scale-0';

  const modalContentClasses = isOpen
    ? 'bg-white p-4 rounded-lg duration-300 transition-all duration-300'
    : 'p-4 rounded-lg duration-300 transition-all duration-300 ';

    const loginModalClasses = isOpen
    ? 'fixed top-0 left-0 w-full h-full flex items-center justify-center transition-all duration-300'
    : 'fixed top-0 left-0 w-full h-full flex items-center justify-center transition-all duration-300 bg-green-600 bg-opacity-0 scale-0';

  const loginContentClasses = isOpen
    ? 'bg-white p-4 rounded-lg duration-300 transition-all duration-300'
    : 'p-4 rounded-lg duration-300 transition-all duration-300 ';

  return (
    <div
      className={modalClasses}
      onClick={handleBackgroundClick}
    >
      <div className={modalContentClasses}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
