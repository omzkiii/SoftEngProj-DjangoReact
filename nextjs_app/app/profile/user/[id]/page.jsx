"use client"
import OrderHistory from "@/components/profile/OrderHistory"
import ProfileDetails from "@/components/profile/ProfileDetails"
import { useState } from "react"

const users = [
    {
        id: 1,
        name: "Maria Hiwaga",
        email: "mhiwaga@gmail.com",
        username: "mrhwg_123",
    },
    {
        id: 2,
        name: "Baby Girl",
        email: "babygirl@gmail.com",
        username: "bgirl_123",
    },
    {
        id: 3,
        name: "Baby Boy",
        email: "bboy@gmail.com",
        username: "bboy_123",
    }
]



const UserProfile = ({params}) => {
    const paramId = params.id
    const user = users.find((user) => user.username === paramId)
    const [activeBtn, setActiveBtn] = useState("order")

    const toggleView = (e) => {
        setActiveBtn(e.target.value)
    }

    return (
        <div className="bg-green-100 min-h-screen px-40 py-16 flex flex-col items-start justify-start">
            <div className="flex justify-center">
                <h1 className="font-extrabold text-green-500 m-4 text-5xl">Hello, {user.name}!</h1>
            </div>
            <div className="flex justify-center">
                <button value="order" onClick={toggleView} className="bg-green-500 text-white font-semibold py-2 px-4 rounded-lg mr-2 hover:bg-green-600">View Order History</button>
                <button value="profile" onClick={toggleView} className="bg-green-500 text-white font-semibold py-2 px-4 rounded-lg mr-2 hover:bg-green-600">View Profile</button>
            </div>

            {activeBtn === "order" && <OrderHistory user={user}/>}
            {activeBtn === "profile" && <ProfileDetails user={user}/>}
        </div>
    )
}

export default UserProfile