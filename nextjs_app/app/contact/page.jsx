'use client'
// pages/index.js
import React, { useState, useEffect } from 'react';
import axios from "axios";


const ContactPage = () => {

  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center">
      <div className='max-w w-full object-top top-[10px]'>
          <img src="https://eos.com/wp-content/uploads/2020/02/technologies-in-agriculture.jpg.webp"
          className='max-w w-full m-auto object-top md:brightness-50 relative'>
          </img>
          <p className="absolute text-white font-Bree text-9xl font-black tracking-widest	
          top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pb-24"
          >OUR STORY</p>

      </div>

      <h1 className="font-extrabold text-green mb-4 text-8xl">Contact Us</h1>
      <p className="text-lg text-green mb-8">Harvesting Connection, Nourishing Futures.</p>
      <p className="text-lg text-green mb-8">OPEN nexjs_app/app/contact/page.js to edit</p>
    </div>
  );
};

export default ContactPage;
