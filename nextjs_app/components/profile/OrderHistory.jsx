import Link from "next/link"
import { useEffect, useState } from "react"


const OrderHistory = ({orders, products}) => {

    return (
        <div className="bg-green-100 flex flex-col items-center">
            <div>
                <h1 className="font-extrabold text-green-500 m-4 text-4xl">Order History</h1>
            </div>
            <div>
                <table className="text-green-500 m-4 text-xl w-max border-2 border-green-950">
                    <thead className="bg-green-900 text-white text-center">
                        <tr className="border-2 border-green-950">
                            <td className="border-2 border-green-950 px-6">Order Number</td>
                            <td className="border-2 border-green-950 px-6">Date Placed</td>
                            <td className="border-2 border-green-950 px-6">Products</td>
                            <td className="border-2 border-green-950 px-6">Amount</td>
                            <td className="border-2 border-green-950 px-6">Status</td>
                            <td className="border-2 border-green-950 px-6"></td>
                        </tr>
                    </thead>
                    <tbody className="text-green-950 text-center">
                        {orders.map((order)=>(
                            <tr key={order.id} className="border-2 border-green-950">
                                <td className="border-2 border-green-950 px-6">{order.id}</td>
                                <td className="border-2 border-green-950 px-6">{order.date_placed.split('T')[0]}</td>
                                <td className="border-2 border-green-950 px-6">{
                                    order.product.map(p=>(<ul key={p}><li>{products.find(product=>product.id==p).name}</li></ul>))
                                }</td>
                                <td className="border-2 border-green-950 px-6">{order.total_amount}</td>
                                <td className="border-2 border-green-950 px-6">{order.status}</td>
                                <td className="border-2 border-green-950 px-6"><Link href='/'>View details</Link></td>
                            </tr>
                        ))}                    
                    </tbody>
                </table>
            </div>
            

        </div>
    )
}

export default OrderHistory