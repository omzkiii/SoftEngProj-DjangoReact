// pages/product.js
"use client"
import React, {useEffect, useState} from 'react';
import ProductCard from '../../components/ProductCard';
import Modal from '../../components/Modal';
import axios from "axios";


const ProductPage = () => {

  const [products, setProducts] = useState([]);
  
  useEffect(() => {
  
    async function fetchProducts() {
      try {
        const response = await axios.get('http://localhost:8000/api/products/');
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
