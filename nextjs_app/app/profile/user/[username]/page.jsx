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
        <div className="bg-green-100 min-h-screen px-40 py-16 flex flex-col items-start justify-start">
            <div className="flex justify-center">
                <h1 className="font-extrabold text-green-500 m-4 text-5xl">Hello, {user.first_name}!</h1>
            </div>
            <div className="flex justify-center">
                <button value="order" onClick={toggleView} className="bg-green-500 text-white font-semibold py-2 px-4 rounded-lg mr-2 hover:bg-green-600">View Order History</button>
                <button value="profile" onClick={toggleView} className="bg-green-500 text-white font-semibold py-2 px-4 rounded-lg mr-2 hover:bg-green-600">View Profile</button>
            </div>

            {activeBtn === "order" && <OrderHistory user={user} orders={orders} products={products}/>}
            {activeBtn === "profile" && <ProfileDetails customer={customer} user={user}/>}
        </div>
    )
}

export default UserProfile