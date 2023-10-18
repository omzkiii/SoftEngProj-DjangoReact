// pages/product.js
import React from 'react';

const products = [
  {
    id: 1,
    name: 'Kamote',
    category: 'Vegetable',
    description: 'Just a good kamote',
    price: 13,
  },
  {
    id: 2,
    name: 'Kangkong',
    category: 'Vegetable',
    description: 'Masarap',
    price: 20,
  },
  // Add more product objects here...
];

const ProductPage = () => {
  return (
    <div className="bg-green-100 min-h-screen">
      <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-lg p-4">
            <h1 className="text-3xl font-bold text-green-700">{product.name}</h1>
            <p className="text-green-600">Category: {product.category}</p>
            <p className="text-green-800 text-lg mt-4">{product.description}</p>
            <div className="mt-4 text-2xl text-green-700 font-semibold">PHP {product.price.toFixed(2)}</div>
            <button className="bg-green-500 text-white font-semibold py-2 px-4 rounded-lg mt-4 hover:bg-green-600">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
