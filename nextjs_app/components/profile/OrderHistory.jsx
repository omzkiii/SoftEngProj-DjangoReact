import Link from "next/link"
import { useEffect, useState } from "react"


const OrderHistory = ({orders, products}) => {

    return (
        <div className="bg-green flex flex-col items-center">
            <div>
                <h1 className="font-extrabold text-amber-400 m-4 text-4xl">Order History</h1>
            </div>
            <div>
                <table className="text-amber-400 m-4 text-xl w-max border-2 border-amber-400">
                    <thead className="bg-amber-400 text-green text-center">
                        <tr className="border-2 border-amber-400">
                            <td className="border-2 border-amber-400 px-6">Order Number</td>
                            <td className="border-2 border-amber-400 px-6">Date Placed</td>
                            <td className="border-2 border-amber-400 px-6">Products</td>
                            <td className="border-2 border-amber-400 px-6">Amount</td>
                            <td className="border-2 border-amber-400 px-6">Status</td>
                            <td className="border-2 border-amber-400 px-6"></td>
                        </tr>
                    </thead>
                    <tbody className="text-green bg-white text-center">
                        {orders.map((order)=>(
                            <tr key={order.id} className="border-2 border-amber-400">
                                <td className="border-2 border-amber-400 px-6">{order.id}</td>
                                <td className="border-2 border-amber-400 px-6">{order.date_placed.split('T')[0]}</td>
                                <td className="border-2 border-amber-400 px-6">{
                                    order.product.map(p=>(<ul key={p}><li>{products.find(product=>product.id==p).name}</li></ul>))
                                }</td>
                                <td className="border-2 border-amber-400 px-6">{order.total_amount}</td>
                                <td className="border-2 border-amber-400 px-6">{order.status}</td>
                                <td className="border-2 text-blue-600 border-amber-400 px-6"><Link href='http://localhost:3000/userorderdetails'>View details</Link></td>
                            </tr>
                        ))}                    
                    </tbody>
                </table>
            </div>
            

        </div>
    )
}

export default OrderHistory