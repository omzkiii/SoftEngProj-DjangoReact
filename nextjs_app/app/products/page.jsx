// pages/product.js
"use client"
import React from 'react';
import ProductCard from '../../components/ProductCard';
import axios from "axios";
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';



const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const searchParams = useSearchParams()
  let query = searchParams.get('q')

  
  useEffect(() => {
    console.log('search params', searchParams.get('q'))
    async function fetchProducts() {
      try {
        const response = query == null
        ? await axios.get('http://localhost:8000/api/products/')
        : await axios.get('http://localhost:8000/api/products/search/?q=' + query);

        setProducts(response.data);
      } catch (error){
        console.log('Error: ', error);
      }
    }

    fetchProducts();
  }, [query]);
    return (
      <div className="bg-white min-h-screen">
        <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product}/>
          ))}
        </div>
        
      </div>
    );
  };

export default ProductPage;
