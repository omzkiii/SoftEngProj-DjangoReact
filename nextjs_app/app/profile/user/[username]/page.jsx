"use client"
import OrderHistory from "@/components/profile/OrderHistory"
import ProfileDetails from "@/components/profile/ProfileDetails"
import { useState, useEffect } from "react"
import { useLoggedInContext } from "@/contexts/LoggedInContext";
import axios from "axios";

const UserProfile = ({params}) => {
    const paramId = params.username
    const { user, customer, products } = useLoggedInContext();
    
    const [activeBtn, setActiveBtn] = useState("order")
    const [orders, setOrders] = useState([])

    const getOrders = async () => {

        try {
          const response = await axios.get(`http://127.0.0.1:8000/api/order/user/all/${user.id}`,{
            headers: {
              'Authorization': 'Token ' + localStorage.getItem('token')
            },
          })
          
          setOrders(response.data)
    
        } catch (error) {
          console.log(error)
        }
    }



    useEffect(() =>{
        getOrders()
    },[user])
    

    const toggleView = (e) => {
        setActiveBtn(e.target.value)
    }


    return (
        <div className="bg-green min-h-screen px-40 py-16 flex flex-col">
          <div className="flex item-center justify-center">
            <img src=".png" class="rounded-full w-32 h-32 bg-red-50"></img>
          </div>
            <div className="flex item-center justify-center">
                <h1 className="font-extrabold text-amber-400 m-4 text-5xl">Hello, {user.first_name}!</h1>
            </div>
            <div className="flex item-center justify-center">
                <button value="order" onClick={toggleView} className="bg-amber-400 text-white font-semibold py-2 px-4 rounded-lg mr-2 hover:bg-amber-400 hover:text-green">View Order History</button>
                <button value="profile" onClick={toggleView} className="bg-amber-400 text-white font-semibold py-2 px-4 rounded-lg mr-2 hover:bg-amber-400 hover:text-green">View Profile</button>
            </div>

            {activeBtn === "order" && <OrderHistory user={user} orders={orders} products={products}/>}
            {activeBtn === "profile" && <ProfileDetails customer={customer} user={user}/>}
        </div>
    )
}

export default UserProfile