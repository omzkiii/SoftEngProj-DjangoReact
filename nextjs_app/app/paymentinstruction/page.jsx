"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const PaymentInstructions = () => {
  const [email, setEmail] = useState('');
  
  // Dummy seller bank accounts
  const sellerAccounts = [
    {
      accountNumber: '1234567890',
      bankName: 'BPI',
    },
    {
      accountNumber: '09876543211',
      bankName: 'GCASH',
    },
  ];


  const handleSubmit = () => {
    // Handle submitting email for receipt here
    console.log(`Email submitted: ${email}`);
    // You can add logic to send the receipt to the provided email
  };

  return (
    <div className="bg-green min-h-screen font-Bree flex flex-col items-center justify-center">
      <h1 className="font-extrabold text-amber-400 mb-4 text-8xl">Payment Instructions</h1>
      <h2 className="text-2xl font-bold text-white">Seller Bank Accounts</h2>
      <br>
      </br>
      <ul>
        {sellerAccounts.map((account, index) => (
          <li key={index}>
            <p className="text-lg mb-8 text-center" >Bank Name: {account.bankName}</p>
            <p className="text-lg mb-8">Account Number: {account.accountNumber}</p>
            
          </li>
        ))}
      </ul>
      <p className="text-lg mb-8">Please send the Receipt here</p>
      <p className="text-lg mb-8">agriaccess@gmail.com</p>
      <div>
        <button 
        onClick={handleSubmit}
        className="bg-amber-400 text-white px-4 py-2 rounded-lg hover:bg-white hover:text-green border-2 border-solid "
        ><Link href="/">Done</Link></button>
      </div>
    </div>
  );
};

export default PaymentInstructions;