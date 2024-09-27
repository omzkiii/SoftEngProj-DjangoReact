// pages/product.js
"use client"
import React from 'react';
import ProductCard from '@/components/ProductCard';
import axios from "axios";
import { useEffect, useState } from 'react';
import { useLoggedInContext } from "@/contexts/LoggedInContext";

const DiscountPage = ({params}) => {
  const { products } = useLoggedInContext();
  const discountId = params.id
  const [discount, setDiscount] = useState({});
  const [disc_prod, setProducts] = useState([]);
  
  const getProducts = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/discounts/${discountId}`);
      setDiscount(response.data);
      const temp_products = []
      if(products.length !== 0){
        response.data.products.map(pid=> temp_products.push(products.find(p=>p.id === pid)))
      }
      setProducts(temp_products)

    } catch (error){
      console.log('Error: ', error);
    }
  }

  useEffect(() => {  
    getProducts()

  }, [products]);

    return (
      <div className="bg-white min-h-screen">
        <h1 className="font-extrabold text-green-500 mb-4 text-8xl text-green">{discount.description}</h1>
        
        <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {disc_prod.map((product) => (
              
              <ProductCard key={product.id} product={product}/>
              
            ))}
        </div>
        
      </div>
    );
  };

export default DiscountPage;

