'use client'
// pages/index.js
import React, { useState, useEffect } from 'react';
import axios from "axios";


const ContactPage = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    // Define an async function to fetch data
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:8000/api/product/');
        setItem(response.data[0].name);
        console.log(typeof(item));
      } catch (error) {
        console.error('Error:', error);
      }
    }
    
    // Call the async function to fetch data when the component mounts
    fetchData();
  }, [item]); 
  return (
    <div className="bg-green-100 min-h-screen flex flex-col items-center justify-center">
      <h1 className="font-extrabold text-green-500 mb-4 text-8xl">Contact Us</h1>
      <p className="text-lg text-green-700 mb-8">Harvesting Connection, Nourishing Futures. {item}</p>
      <p className="text-lg text-green-700 mb-8">OPEN nexjs_app/app/contact/page.js to edit</p>
    </div>
  );
};

export default ContactPage;
