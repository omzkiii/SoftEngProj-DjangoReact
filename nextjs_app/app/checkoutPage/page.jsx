"use client"

import React from 'react';
import { useLoggedInContext } from "@/contexts/LoggedInContext";
import { useState, useEffect } from "react"
import axios from 'axios';
import { useRouter } from 'next/navigation';

const checkOutPage = () => {
  const { user, customer, carts, products, setCartUpdateFlag } = useLoggedInContext();
  const [cartProd, setCartProd] = useState([])
  const [subtotal, setSubtotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [total, setTotal] = useState(0);
  const [formData, setFormData] = useState({})
  const router = useRouter();


  const calculateCart = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/compute/${user.id}`,{
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Token ' + localStorage.getItem('token')
        }
      })
      
      if(response.status === 200){
        setSubtotal(response.data.subtotal)
        setDiscount(response.data.discount)
        setTotal(response.data.total)
      }

    } catch (error){
      console.log(error)
    }
       
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const placeOrder = async () => {
    try {
      const response = await axios.post(`http://127.0.0.1:8000/api/checkout/${user.id}`, formData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Token ' + localStorage.getItem('token')
        }
      });

      if (response.status === 200) {
        carts.map(async (item)=>{
          try{
            const response = await axios.delete(`http://127.0.0.1:8000/api/cart/${user.username}/${item.product}`, {
              headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + localStorage.getItem('token')
              }
            });
            setCartUpdateFlag(Date.now())

          } catch(error){
            console.log(error.response)
          }
        })
        


        console.log(response.data)
        router.push('/paymentinstruction')

      }

    } catch(error){

    }
  }


  useEffect(() =>{
    const temp = []
    carts.map(item => {
      temp.push(products.find(p=>p.id==item.product))
    })
    
    calculateCart().then(setCartProd(temp))
    setFormData({ name: `${user.first_name} ${user.last_name}`, contact_no: `${customer.contact_no}`, address: `${customer.address}` })
    

  },[products,carts])

  


  return (
    <>
      <div className="h-screen w-screen bg-green">
        <div className="w-full flex flex-row">
          <div className="h-screen w-screen bg-green font-bold flex flex-col">
            <h2 class="font-sans m-8 text-4xl text-amber-400">Checkout</h2>

            <div class=" p-8 pt-0  rounded">
    
              <div className="mb-2 flex justify-center">
                  <div className="field1 pr-10 w-1/2">
                    <label htmlFor="field1" className="block text-amber-400 text-sm font-bold mb-2">NAME</label>
                    <input value={formData.name} onChange={handleInputChange} type="text" id="field1" name="name" className="w-full p-2 text-black border border-gray-300 rounded-[45px]" />
                  </div>
                    <div className="flex-1 w-1/2">
                    <label htmlFor="field2" className="block text-amber-400 text-sm font-bold mb-2">CONTACT NO.</label>
                    <input value={formData.contact_no} onChange={handleInputChange} type="text" id="field2" name="contact_no" className="w-full p-2 text-black border border-gray-300 rounded-[45px]" />
                  </div>
              </div>

    
              <div class="mb-2">
                <label for="field2" class="block text-amber-400 text-sm font-bold mb-2">ADDRESS</label>
                <input value={formData.address} onChange={handleInputChange} type="text" id="field2" name="address" class="w-full p-2 border border-gray-300 text-black rounded-[45px]"></input>
              </div>
              </div>


               <div className="div flex justify-center">
              <button onClick={placeOrder} type="submit" class="bg-amber-400  text-white p-2 hover:bg-white hover:text-amber-400 w-2/6  ">PLACE ORDER</button>
             </div>
             
            
              </div>
          {/* order summary */}
            <div className="w-2/5  text-black justify-center flex-col bg-white overflow-y-auto h-screen">
            <h2 class="font-sans m-10 text-4xl font-semibold text-center text-green-900">Order Summary</h2>
            
              {cartProd.map((item)=>(
                <div className="flex flex-row mx-10 ">
                <div class=" px-10 py-4 border-solid border-gray-200 text-center font-bold">
                <img src={item.image} alt="Image Description" class="w-20 h-20 object-cover mx-auto"></img></div>
                <div class="flex flex-col">
                  <h1 class=" border-solid border-gray-200 font-sans font-bold text-4xl text-green ">{item.name}</h1>
                <h1 class="px-full  border-solid  border-gray-200 font-sans font-semibold text-m text-green ">{`Quantity: ${carts.find(c=>c.product==item.id).quantity}`}</h1>
                  <h1 class="px-full  border-solid  border-gray-200 font-sans font-semibold text-m text-green ">P{item.price}</h1>       
                </div>
                </div>


              ))}
            
            {/* tatlo lng baka sumabog */}
                    <div className=" flex flex-row justify-center text-xl text-green-900 font-sans font-semibold mx-10 mt-7">
                      <div class="w-1/2">SUBTOTAL</div> 
                      <div class="w-1/2">P{subtotal}</div>
                    </div>

                    <div className=" flex flex-row justify-center text-green-900 font-sans font-semibold mx-10 ">
                      <div class="w-1/2">DISCOUNT</div> 
                      <div class="w-1/2">P{discount}</div>
                    </div>

                    <div className=" flex flex-row justify-center text-orange-500 text-4xl font-sans font-bold mx-10">
                      <div class="w-1/2">TOTAL</div>
                      <div class="w-1/2">P{total}</div>
                    </div>
            </div>

            <div>

            </div>
        
            </div>

          </div>
    </>
  );
};

export default checkOutPage;
