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
        const response = await axios.get('http://localhost:8000/api/products/search/?q='+query);
        setProducts(response.data);
      } catch (error){
        console.log('Error: ', error);
      }
    }

    fetchProducts();
  }, [query]);
    return (
      <div className="bg-green-100 min-h-screen">
        <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product}/>
          ))}
        </div>
        <p className="text-lg text-green-700 mb-8 text-center">OPEN nexjs_app/app/products/Vegetables/page.js to edit</p>
      </div>
    );
  };

export default ProductPage;
