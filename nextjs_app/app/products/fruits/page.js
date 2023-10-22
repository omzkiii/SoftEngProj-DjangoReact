// pages/product.js
import React from 'react';
import ProductCard from '../../../components/ProductCard';

// TODO: Fetch data from backend
const products = [
  {
    id: 1,
    name: 'Apple',
    category: 'Fruit',
    description: 'Mamulamula',
    price: 14,
  },
  {
    id: 2,
    name: 'Orange',
    category: 'Fruit',
    description: 'Bilog',
    price: 13,
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
