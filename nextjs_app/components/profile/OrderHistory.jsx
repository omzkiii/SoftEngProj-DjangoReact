import Link from "next/link"

const orders = [
    {
        id: 1,
        orderNo: "0122132",
        products: ["apple", "orange", "brown rice"],
        amount: 5000,
        payment: "gcash",
        status: "completed",
        user:1,
    },
    {
        id: 2,
        orderNo: "0123232",
        products: ["mango", "chicken breast"],
        amount: 5000,
        payment: "gcash",
        status: "completed",
        user:1,
    },
    {
        id: 3,
        orderNo: "0343432",
        products: ["rice", "wagyu beef"],
        amount: 5000,
        payment: "gcash",
        status: "completed",
        user:2,
    },
    {
        id: 4,
        orderNo: "2342342",
        products: ["pineapple", "kangkong"],
        amount: 5000,
        payment: "gcash",
        status: "unpaid",
        user:2,
    },
    {
        id: 5,
        orderNo: "2321312",
        products: ["dragonfruit", "kamatis"],
        amount: 5000,
        payment: "gcash",
        status: "otw",
        user:3,
    }
]



const OrderHistory = ({user}) => {
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
                            <td className="border-2 border-green-950 px-6">Products</td>
                            <td className="border-2 border-green-950 px-6">Amount</td>
                            <td className="border-2 border-green-950 px-6">Payment</td>
                            <td className="border-2 border-green-950 px-6">Status</td>
                            <td className="border-2 border-green-950 px-6"></td>
                        </tr>
                    </thead>
                    <tbody className="text-green-950 text-center">
                        {orders.filter((order)=>order.user === user.id).map((order)=>(
                            <tr key={order.id} className="border-2 border-green-950">
                                <td className="border-2 border-green-950 px-6">{order.orderNo}</td>
                                <td className="border-2 border-green-950 px-6">{order.products}</td>
                                <td className="border-2 border-green-950 px-6">{order.amount}</td>
                                <td className="border-2 border-green-950 px-6">{order.payment}</td>
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