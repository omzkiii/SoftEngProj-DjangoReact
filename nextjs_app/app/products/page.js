// pages/product.js
"use client"
import React, {useState} from 'react';
import ProductCard from '../../components/ProductCard';
import Modal from '../../components/Modal';



const products = [
  {
    id: 1,
    name: 'Kamote',
    category: 'Vegetables',
    description: 'Just a good kamote',
    price: 1,
  },
  {
    id: 2,
    name: 'Chicken Breast',
    category: 'Meat',
    description: 'Tender that will make your heart surrender.',
    price: 420.69,
  },
  {
    id: 3,
    name: 'Chicken Wings',
    category: 'Meat',
    description: 'On the wings of love.',
    price: 420.69,
  },
  // Add more product objects here...
];

const ProductPage = () => {
 
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
