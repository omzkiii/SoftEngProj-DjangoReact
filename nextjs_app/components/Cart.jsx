
import React from 'react'
import { useLoggedInContext } from '@/contexts/LoggedInContext';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Cart({ isSidebarOpen, closeSidebar }) {
  const {  products, user, carts, getCart, cartUpdateFlag, setCartUpdateFlag } = useLoggedInContext();
  const [subtotal, setSubtotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [total, setTotal] = useState(0);


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
          console.log(error.response.status)
        }
      }
      
      const updateCart = async (quantity,product) => {
        try {
          const response = await axios.patch(`http://127.0.0.1:8000/api/cart/${user.username}/${product}`,{
            "quantity" : quantity
          },
          {headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + localStorage.getItem('token')
          }})
        } catch (error) {
          
        }
      }
      const deleteCart = async (product) => {
        try {
          const response = await axios.delete(`http://127.0.0.1:8000/api/cart/${user.username}/${product}`,
          {headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + localStorage.getItem('token')
          }})
          setCartUpdateFlag(Date.now());
          console.log("Product removed from cart")
        } catch (error) {
          
        }
      }
      

      const addQty = (quantity, product) => {
        quantity = parseFloat(quantity) + 1.00
        updateCart(quantity, product)
        setCartUpdateFlag(Date.now());
        console.log(quantity)
      }
      
      const minusQty = (quantity, product) => {
        if(quantity > 0){ 
          quantity = quantity - 1.00
          updateCart(quantity, product)
          console.log(quantity)
          setCartUpdateFlag(Date.now());
        }
        else{
          console.log("Product removed from cart because it equals to zero")
          deleteCart(product)
          setCartUpdateFlag(Date.now());
        }
      }

    useEffect(()=>{
      getCart(user.username)
      calculateCart()
    },[cartUpdateFlag])

    
    

  return (
    
    <div className={`fixed inset-y-0 right-0 bg-gray-800 bg-opacity-50 z-50 transform transition-transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} w-1/4`}>
              <div className={`absolute top-0 right-0 h-full bg-white min-w-full p-4 transform transition-transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} w-1/4  overflow-y-auto`}>

                <div className="flex flex-col justify-center ">
                  <button className="bg-transparent border-AgriAccessOrange text-AgriAccessOrange border-2 rounded-full px-3 py-2 font-extrabold font-Bree" onClick={closeSidebar}>
                    &lt; CONTINUE SHOPPING

                  </button>
                </div>
                <br />
                <div className="flex flex-row ml-4 py-4 items-center">
                  <h1 className="text-AgriAccessGreen text-7xl mr-16 font-Bree normal-case">Cart</h1>
                  <img src="/cartSideBarIcon.png" className="w-20 h-20" alt="cart" />
                </div>
                {/* Mapping through toOrder and displaying items */}
                <div className="text-AgriAccessOrange">
                  {carts.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-2 border-b">
                      <div className="flex items-center">
                        <div>
                          <img src={products.find(product=> product.id===item.product).image} alt={item.product} width={140} height={140} className="mr-6 mt-12" />

                          <div className="text-2xl">
                            <h1 className='font-Mont text-green text mt-3'>{products[item.product - 1].price}</h1>
                          </div>
                        </div>
                        <div classname="flex flex-col ">
                          <div className="flex flex-row text-xl justify-center">

                          <h1 className='font-Bree text-green text-2xl mr-2 normal-case'> {products[item.product - 1].name}</h1>
                          <sup className='font-Bree leading-snug text-5 mt-1.5'>  / {products[item.product - 1].unit} </sup>

                          </div>

                        <div className="flex justify-center mt-2 mb-2">
                          <table className="font-extrabold ">
                            <tr>

                              <td className="bg-AgriAccessGreen px-2 border-t border-b border-AgriAccessGreen text-white" >
                               <button onClick={()=>{minusQty(item.quantity, item.product)}}> - </button> 
                              </td>
                              <td className=" px-4 border-t border-b border-AgriAccessGreen text-green">
                                {item.quantity}
                              </td>
                              <td className="bg-AgriAccessGreen px-2 border-t border-b border-AgriAccessGreen text-white">
                              <button onClick={()=>{addQty(item.quantity, item.product)}}> +   </button>
                              </td>
                            </tr>
                          </table>
                        </div>
                        

                        <div className="flex justify-center">

                          <button className="underline text-Lime font-Mont text-xs mt-1" onClick={()=>deleteCart(item.product)}>Remove this item</button>

                        </div>
                        </div>                    
                      </div>
                    </div>
                  ))}
                </div>
                  <div className="mt-10  text-black">
                    <div className="flex flex-row justify-between text-AgriAccessGreen font-extrabold">

                    <div>
                      Subtotal
                    </div>

                    <div>
                      P{subtotal} 
                    </div>
                    </div>
                    <div className="flex flex-row justify-between text-AgriAccessGreen font-extrabold">

                    <div>
                      Discount
                    </div>

                    <div>
                      P{discount} 
                    </div>
                    </div>

                    </div>
                   

                      <div className="flex flex-row justify-between text-3xl text-AgriAccessOrange font-extrabold">
                        <div>
                          Total:
                        </div>
                        <div>
                          P{total}
                        </div>
                      </div>

                    <div className="mt-5">
                        <button className="bg-transparent border-Lime text-Lime border-2 rounded-full w-full py-2 font-extrabold">CHECKOUT</button>
                    </div>

                  </div>
            </div>
  )
}
