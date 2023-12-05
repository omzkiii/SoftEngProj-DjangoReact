// pages/product.js
"use client"
import React from 'react';
import ProductCard from '../../../components/ProductCard';
import axios from "axios";
import { useEffect, useState } from 'react';



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
      <div className="bg-green-100 min-h-screen">
        <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product}/>
          ))}
        </div>
        
      </div>
    );
  };

export default ProductPage;
