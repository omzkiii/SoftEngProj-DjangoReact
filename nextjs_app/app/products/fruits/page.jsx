// pages/product.js
"use client"
import React from 'react';
import ProductCard from '../../../components/ProductCard';
import axios from "axios";
import { useEffect, useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { GiHamburgerMenu } from "react-icons/gi";



//THESE ARE THE TEMPORARY DATA FOR PRODUCTS:
// const products = [
//   {
//     id: 1,
//     name: 'Kamote',
//     category: 'Vegetable',
//     description: 'Just a good kamote',
//     price: 13,
//   },
//   {
//     id: 2,
//     name: 'Kangkong',
//     category: 'Vegetable',
//     description: 'Masarap',
//     price: 20,
//   },
//   // Add more product objects here...
// ];

const ProductPage = () => {

  const [products, setProducts] = useState([]);
  
  useEffect(() => {
  
    async function fetchProducts() {
      try {
        const response = await axios.get('http://localhost:8000/api/products/category/fruit');
        setProducts(response.data);
      } catch (error){
        console.log('Error: ', error);
      }
    }

    fetchProducts();
  }, []);
    return (

      
      <div className="bg-white min-h-screen h-[2000px]">
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Bree+Serif&family=Montserrat:wght@700&display=swap');
        </style>
        <div className='max-w w-full'>
          <img src="/fruit.png"
          className='max-w w-full m-auto object-top md:brightness-50 relative'>
          </img>
          <p className="absolute text-white font-Bree text-9xl font-black tracking-widest	
          top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pb-24"
          >FRUITS</p> 
        </div>



        <div className='max-w-[1500px] h-[780px] w-full m-auto py-16 relative group bg-white'>
        <a className='relative font-Bebas text-7xl left-7  text-Lime top-[50px] 
        hover:text-AgriAccessOrange transition-color ease-in duration-500 cursor-pointer'
        href='/products/vegetables'>
          VEGETABLES
        </a>
        <a className='relative font-Bebas text-7xl -left-[235px] top-[150px] text-Lime cursor-pointer
        hover:text-AgriAccessOrange transition-color ease-in duration-500'
        href="/products/fruits">
          FRUITS
        </a>

        <div class="absolute h-[700px] bg-gray-200 w-[3px] ml-96 mb-1 bottom-2"></div>

        <GiHamburgerMenu fill='AgriAccessGreen' size={40} className='absolute left-[380px] ml-10 top-[80px]'/>
        {/*SORT  */}
          <span className='absolute font-Bebas text-green text-[32px] left-[480px] top-[79px]
          tracking-widest	'>SORT BY : </span>
          <div className='absolute h-15 w-[190px] border-2 border-green	left-[650px] top-[79px] pl-3 pr-3
          rounded-full	hover:bg-green transition-color ease-in duration-500 cursor-pointer'>
              <span className='text-green text-[30px] font-Bebas top-[190px] pl-2 pt-2 hover:text-white' > HIGH-LOW PRICE </span>
          </div>
          <div className='absolute h-15 w-[190px] border-2 border-green	left-[920px] top-[79px] pl-3 pr-3
          rounded-full	hover:bg-green transition-color ease-in duration-500 cursor-pointer'>
              <span className='text-green text-[30px] font-Bebas top-[190px] pl-2 pt-2 hover:text-white' > LOW-HIGH PRICE </span>
          </div>
          <div className='absolute h-15 w-[190px] border-2 border-green	left-[1200px] top-[79px] pl-3 pr-3
          rounded-full	hover:bg-green transition-color ease-in duration-500 cursor-pointer'>
              <span className='text-green text-[30px] font-Bebas top-[190px] pl-16 pt-2 hover:text-white' > A-Z </span>
          </div>

          
        </div>

        <div className="absolute top-[1250px] ml-[1200px] max-w-[1000px] ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {products.map((product) => (
        <ProductCard key={product.id} product={product}/>
         ))}

          </div>
        </div>
        
      </div>
    );
  };

export default ProductPage;
