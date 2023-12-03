// components/ProductCard.js
"use client"
import Image from "next/image";
import React, { useState } from 'react';
import Modal from '../components/Modal';

const ProductCard = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const [quantity, setQuantity] =  useState(0)

  const addQty = () => {
    setQuantity(quantity+1)
  }

  const minusQty = () => {
    if(quantity !== 0)
      setQuantity(quantity-1)    
  }
  

  
  return (
      <div className="bg-white rounded-lg overflow-hidden shadow-lg p-4">
        <Image src="/productImg.png" alt="Product Image" onClick={openModal} width={600} height={600} /> 
        <div className="mt-4">
          <h2 className="text-xl font-semibold text-gray-800">
            {product.name}
          </h2> 
          <div className="mt-4 flex justify-between items-center bottom-0">
            <span className="text-black font-semibold">
              PHP {product.price}
            </span>
            <table className="font-extrabold ">
                  <tr>
                    <td className="bg-AgriAccessGreen px-2 border-t border-b border-AgriAccessGreen" >
                      <button onClick={minusQty}> - </button> 
                    </td>
                    <td className=" px-4 border-t border-b border-AgriAccessGreen text-black">
                      {quantity}
                    </td>
                    <td className="bg-AgriAccessGreen px-2 border-t border-b border-AgriAccessGreen">
                    <button onClick={addQty}> +   </button>
                    </td>
                  </tr>
                </table>
            <button className="bg-green-500 text-white px-3 py-1 rounded" >
              Add to Cart
            </button>
          </div>
        </div>
          <Modal isOpen={isModalOpen} closeModal={closeModal}>
            <div className="flex">
              <div className="w-1/2 pr-4">
                <Image src="/productImg.png" alt="Product Image" width={600} height={600} /> 
              </div>
              <div className="w-1/2">
                <h2 className="text-2xl font-semibold text-green-700">
                  {product.name}
                </h2>
                <p className="text-green-600">{product.description}</p>
                <p className="text-green-800 font-semibold mt-2">
                  PHP {product.price}
                </p>
                <table className="font-extrabold ">
                  <tr>
                    <td className="bg-AgriAccessGreen px-2 border-t border-b border-AgriAccessGreen" >
                      <button onClick={minusQty}> - </button> 
                    </td>
                    <td className=" px-4 border-t border-b border-AgriAccessGreen text-black">
                      {quantity}
                    </td>
                    <td className="bg-AgriAccessGreen px-2 border-t border-b border-AgriAccessGreen">
                    <button onClick={addQty}> +   </button>
                    </td>
                  </tr>
                </table>
                <button
                className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
                onClick={closeModal}
              >
                Add to Cart
              </button>
              </div>
            </div>
          </Modal>
        </div>
      
  );
};

export default ProductCard;
