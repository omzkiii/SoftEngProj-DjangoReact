import React from 'react'
import { useLoggedInContext } from '@/contexts/LoggedInContext';
import { useState, useEffect } from 'react';
import axios from 'axios';
export default function Cart({ isSidebarOpen, closeSidebar }) {
  const {  products, user } = useLoggedInContext();
  const [carts, setCarts] = useState([]);
  const [cartUpdateFlag, setCartUpdateFlag] = useState(Date.now());



    const calculateSubTotal = () => {
        const totalPrice = carts.reduce((acc, item) => {
          return acc + item.priceDouble;
        }, 0);
        return totalPrice.toFixed(2);
      };
    
      const calculateTotal = () => {
        const totalPrice = carts.reduce((acc, item) => {
          return acc + item.priceDouble;
        }, 0);
        return (totalPrice + 100).toFixed(2);
      };
      // let clicker = 0;
      // const onClick = () => {
      //   clicker=clicker+1;
      //   currentCart();
      // }

      
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
      

      const addQty = (quantity, product) => {
        quantity = parseFloat(quantity) + 1.00
        updateCart(quantity, product)
        setCartUpdateFlag(Date.now());
        console.log(quantity)
      }
      
      const minusQty = (quantity, product) => {
        if(quantity !== 0){
          quantity = quantity - 1.00
          updateCart(quantity, product)
          setCartUpdateFlag(Date.now());
        }
      }



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

    
    

  return (
    <div className={`fixed inset-y-0 right-0 bg-gray-800 bg-opacity-50 z-50 transform transition-transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} w-1/4`}>
              <div className={`absolute top-0 right-0 h-full bg-white min-w-full p-4 transform transition-transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} w-1/4  overflow-y-auto`}>
              
                <div className="flex flex-col justify-center ">
                  <button className="bg-transparent border-AgriAccessOrange text-AgriAccessOrange border-2 rounded-full px-3 py-2 font-extrabold " onClick={closeSidebar}>
                    &lt; CONTINUE SHOPPING 
                  </button>
                </div>
                <br />
                <div className="flex flex-row ml-4 py-4 items-center">
                  <h1 className="text-AgriAccessGreen text-6xl mr-16">Cart</h1>
                  <img src="/cartSideBarIcon.png" className="w-20 h-20" alt="cart" />
                </div>
                {/* Mapping through toOrder and displaying items */}
                <div className="text-AgriAccessOrange">
                  {carts.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-2 border-b">
                      <div className="flex items-center">
                        <div>
                          <img src={item.img} alt={item.product} width={100} height={100} className="mr-6" />
                          <div className="text-2xl">
                            <h1>{item.price}</h1>
                          </div>
                        </div>
                        <div classname="flex flex-col ">
                          <div className="flex flex-row text-xl justify-center">
                          <h1>{products[item.product].name}</h1>
                          </div>

                        <div className="flex justify-center mt-2 mb-2">
                          <table className="font-extrabold ">
                            <tr>
                              <td className="bg-AgriAccessGreen px-2 border-t border-b border-AgriAccessGreen" >
                               <button onClick={()=>{minusQty(item.quantity, item.product)}}> - </button> 
                              </td>
                              <td className=" px-4 border-t border-b border-AgriAccessGreen">
                                {item.quantity}
                               </td>
                              <td className="bg-AgriAccessGreen px-2 border-t border-b border-AgriAccessGreen">
                              <button onClick={()=>{addQty(item.quantity, item.product)}}> +   </button>
                              </td>
                            </tr>
                          </table>
                        </div>
                        

                        <div className="flex justify-center">
                          <button className="underline text-Lime">Remove this item</button>
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
                      P{calculateSubTotal()} 
                    </div>
                    </div>

                    </div>
                    
                      <div className="flex flex-row justify-between text-AgriAccessGreen font-extrabold">
                        <div>
                            Delivery
                        </div>

                        <div>
                          P 100
                        </div>

                      </div>

                      <div className="flex flex-row justify-between text-3xl text-AgriAccessOrange font-extrabold">
                        <div>
                          Total:
                        </div>
                        <div>
                          P{calculateTotal()}
                        </div>
                      </div>

                    <div className="mt-5">
                        <button className="bg-transparent border-Lime text-Lime border-2 rounded-full w-full py-2 font-extrabold">CHECKOUT</button>
                    </div>

                  </div>
            </div>
  )
}
