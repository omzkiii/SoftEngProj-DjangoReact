// components/ProductCard.js
"use client"
import Image from "next/image";
import React, { useState, useEffect } from 'react';
import Modal from '../components/Modal';
import axios from "axios";
import { useLoggedInContext } from "@/contexts/LoggedInContext";

const ProductCard = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const [quantity, setQuantity] = useState(0)

  const addQty = () => {
    setQuantity(quantity+1)
  }

  const minusQty = () => {
    if(quantity !== 0)
      setQuantity(quantity-1)    
  }

  const { user } = useLoggedInContext();
  const cartData = {
    "quantity": quantity,
    "customer": user.id,
    "product": product.id
  }

  const [cartUpdateFlag, setCartUpdateFlag] = useState(Date.now());
  const [carts, setCarts] = useState([]);
  useEffect(()=>{
    const currentCart = async () => {
      const response = await axios.get(`http://127.0.0.1:8000/api/cart/${user.username}`,
      {headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token ' + localStorage.getItem('token')
      }})
      if(response.status === 200){
        console.log("FETCH SUCCESS")
        setCarts(response.data)
      }
      else
        console.log("FETCH FAILED")
      }
    currentCart()
  },[cartUpdateFlag])


  const addToCart = async() => {
    try {
      const response = await axios.post(`http://127.0.0.1:8000/api/cart/${user.username}`,cartData,{
        headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token ' + localStorage.getItem('token')
      },})
      console.log("ERROR MESSAGE: "+ response.data)
      setCartUpdateFlag(Date.now());
      console.log("Cart Added")
      console.log(product)
    } catch (error) {
      const cart = carts.filter(cart=>cart.customer == user.id && cart.product == product.id);
      console.log("CART QUANTITY "+(cart[0].quantity))
      if(error.response.data.non_field_errors == "The fields customer, product must make a unique set."){
        try {
          const response = await axios.patch(`http://127.0.0.1:8000/api/cart/${user.username}/${product.id}`,{
            "quantity" : parseInt(cart[0].quantity) + quantity
          },
          {headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + localStorage.getItem('token')
          }})
          setCartUpdateFlag(Date.now());
        } catch (error) {
          
        }
      }
      console.log("ERROR MESSAGE: "+ (error.response.data.non_field_errors))
      console.log(cartData)
    }
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
            <button className="bg-green-500 text-white px-3 py-1 rounded" onClick={()=>addToCart()}>
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
                onClick={()=>{addToCart();closeModal}}
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
