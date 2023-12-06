"use client"

import { useEffect, useState } from "react"
import { useLoggedInContext } from "@/contexts/LoggedInContext";
import axios from "axios";
import Link from "next/link";


const inventory = ({params}) => {
  const paramId = params.id
  const { user, customer, products } = useLoggedInContext();
  const [order, setOrder] = useState({})
  const [orderProd, setOrderProducts] = useState([])
  const [lineItems, setLineItems] = useState([])
  const [lineItemsEmpty, setLineItemsEmpty] = useState(true)
  
  // const details = {
  //   orderNo: 123456,
  //   orderAmt: 1234,
  //   paymentMtd: "GCASH",
  // };

  const getOrder = async() => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/order/user/${paramId}`,{
        headers: {
          'Authorization': 'Token ' + localStorage.getItem('token')
        },
      })
      
      if(response.status===200){
        setOrder(response.data)
      }
      

    } catch (error) {
      console.log(error.response.data)
    }
  }

  const getLineItems = async () => {
    try{
      const response_line = await axios.get(`http://127.0.0.1:8000/api/orderproducts/${paramId}`,{
        headers: {
          'Authorization': 'Token ' + localStorage.getItem('token')
        },
      })
      setLineItems(response_line.data)

    } catch(error){
        console.log(error.response.data)
    }
  }

  

  useEffect(() =>{
    getOrder().then(getLineItems).then(()=>{
      const temp = [] 
      if(order.product){
        order.product.map(p=>{
          temp.push(products.find(prod=>prod.id==p))
        })    
        setOrderProducts(temp)
      }
    })
    
    if(lineItems.length === 0){
      setLineItemsEmpty(!lineItemsEmpty)
    }

  },[user,lineItemsEmpty])


  return (
      <div className="h-screen w-auto font-sans bg-white text-lg flex-column">
            <div className="h-auto w-auto flex-column flex-start pt-5 pb-5 border-solid 2 border-orange-500 container mx-auto">
              <div class="w-max h-5">
                <Link href={`/profile/user/${user.username}`}><button class="bg-green text-amber-400 text-sm font-bold focus:ring-4 border-solid border border-l-orange-500 rounded-full px-5 py-1.5 text-center inline-flex items-center mr-2 dark:hover:bg-green-900 dark:hover:text-orange-500 dark:border-black">
                  <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                  </svg>
                  VIEW ALL ORDERS
                </button></Link>
              </div>
          </div>

        <div className="h-auto w-auto flex justify-space-between container mx-auto  text-black">
          <div class="h-auto flex justify-start font-bold">
            <p>ORDER NUMBER: {}</p>
          </div>
        </div>

        <div className="h-auto w-auto flex justify-space-between p-1 font-bold container mx-auto  text-black">
          <div class="w-3/4">
            <h1 class="text-5xl">#{order.id}</h1>
          </div>
      </div>
     
      <div className="h-auto w-auto flex justify-space-between p-1  text-green container mx-auto">
          <div class="w-3/4 font-bold">
            <h1 class>CUSTOMER: {`${user.first_name} ${user.last_name}`} </h1>
          </div>
          <div class="w-1/4 flex jutify-end font-bold">
            <h1 class>CONTACT NO.: {order.contact_no}</h1>
          </div>
        </div>

        <div className="h-auto w-75 flex p-1 text-green container mx-auto ">
          <div class="w-3/4 font-bold">
            <h1 class>ADDRESS: {order.address}</h1>
          </div>
          <div class="w-1/4 flex jutify-end text-green font-bold ">
            <h1 class>STATUS: {order.status} </h1>
          </div>
        </div>

       {/* Table inserted here */}
  <div className="h-auto w-auto flex flex-row justify-around justify-items-center border-2 solid mt-1 border-black container mx-auto text-black">
    <table className="w-full font-sans text-xl bg-white text-black">
      <colgroup>
        <col width="33.3333%"></col>
        <col width="16.6667%"></col>
        <col width="16.6667%"></col>
        <col width="16.6667%"></col>
      </colgroup>
      <thead>
        <tr className="bg-green text-white text-4xl">
          <th className="px-6 py-3 uppercase font-semi-bold text-sm border-solid border-gray-200 text-center"></th>
          <th className="px-6 py-3 uppercase font-semi-bold text-xl border-solid border-gray-200 text-center">Product</th>
          <th className="px-6 py-3 uppercase font-semi-bold text-xl border-solid border-gray-200 text-center">Quantity</th>
          <th className="px-6 py-3 uppercase font-semi-bold text-xl border-solid border-gray-200 text-center">Unit Price</th>
        </tr>
      </thead>
      <tbody>
      {orderProd.map(product=>(
        <tr>
        <td class="px-6 py-4 border-solid border-gray-200 text-center font-semi-bold">
        <img src={product.image} alt="Image Description" class="w-16 h-16 object-cover mx-auto"></img></td>
        <td class="px-6 py-4 border-solid text-green font-semibold border-gray-200 text-center">{product.name}</td>
        <td class="px-6 py-4 border-solid text-green font-semibold border-gray-200 text-center">{lineItems.find(item=>item.product == product.id).quantity}</td>
        <td class="px-6 py-4 border-solid text-green font-semibold border-gray-200 text-center">{lineItems.find(item=>item.product == product.id).unit_price}</td>
      </tr>

      ))}
            
          
  
        {/* nababa pag dinagdagan ng data*/}
      </tbody>
    </table>  
  </div>

       <div className="h-auto w-auto flex flex-row text-green justify-end font-sans font-semibold container mx-auto mt-10 items-end ">
            <div class="w-1/6">SUBTOTAL</div>
  
  
            <div class="w-1/6">{order.gross_amount}</div>
        </div>
        <div className="h-auto w-auto flex flex-row justify-end  container mx-auto font-sans font-semibold items-end text-green">
            <div class="w-1/6">DISCOUNT</div>
  
  
            <div class="w-1/6">{order.discount}</div>
        </div>
        <div className="h-auto w-auto flex flex-row justify-end  container mx-auto font-sans font-semibold items-end text-3xl text-orange-400">
            <div class="w-1/6 ">TOTAL</div>
  
  
            <div class="w-1/6">{order.total_amount}</div>
        </div>  
      </div>
  );
};

export default inventory;

