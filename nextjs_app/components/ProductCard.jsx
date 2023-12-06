// components/ProductCard.js
"use client"
import Image from "next/image";
import React, { useState, useEffect } from 'react';
import Modal from '../components/Modal';
import axios from "axios";
import { useLoggedInContext } from "@/contexts/LoggedInContext";

const ProductCard = ({ product }) => {
  const {  isLoggedIn, user, carts, getCart, cartUpdateFlag, setCartUpdateFlag } = useLoggedInContext();
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

  const cartData = {
    "quantity": quantity,
    "customer": user.id,
    "product": product.id
  }

  useEffect(()=>{
    if(isLoggedIn){
      getCart(user.username)
    }
    
  },[cartUpdateFlag])


  const addToCart = async() => {
    if(isLoggedIn){
      if(quantity!=0){
        try {
          const response = await axios.post(`http://127.0.0.1:8000/api/cart/${user.username}`,cartData,{
            headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + localStorage.getItem('token')
          },})
          console.log("ERROR MESSAGE: "+ response.data)
          setCartUpdateFlag(Date.now());
          console.log("Cart Added")
          setQuantity(0);
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
              setQuantity(0);
              setCartUpdateFlag(Date.now());
            } catch (error) {
              
            }
          }
          console.log("ERROR MESSAGE: "+ (error.response.data.non_field_errors))
          console.log(cartData)
        }
      }
    } else {
      if(quantity != 0){
        if(!localStorage.getItem('cart')){
          localStorage.setItem('cart',[JSON.stringify([])])
          console.log("Local Cart Created!")
        }
        const localCart = JSON.parse(localStorage.getItem('cart'));
        const hasProduct = localCart.some(localCart => localCart.product === product.id);
        if(hasProduct){
          console.log("ALREADY IN CART!")
          const cartToUpdate = localCart.find(localCart => localCart.product === product.id)
          cartToUpdate.quantity = cartToUpdate.quantity + quantity
          localStorage.setItem('cart',[JSON.stringify(localCart)])
          setCartUpdateFlag(Date.now());
        }else{
          localCart.push(cartData)
          localStorage.setItem('cart',[JSON.stringify(localCart)])
          console.log(localCart)
          setCartUpdateFlag(Date.now());
        } 
      }




    }
  }

  
  return (
      <div className="bg-white rounded-lg overflow-hidden shadow-lg p-4 text-green">
        
        <img src={product.image} alt="Product Image" onClick={openModal} width={600} height={600} /> 
        <div className="mt-4">
          <h2 className="text-2xl font-semibold text-gray-800 font-Bree">
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
            <button className="bg-green-500 text-green px-3 py-1 rounded font-bold font-Mont leading-none		" onClick={()=>addToCart()}>
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
                <p className="text-green-800 font-semibold mt-2 font-Mont">
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
