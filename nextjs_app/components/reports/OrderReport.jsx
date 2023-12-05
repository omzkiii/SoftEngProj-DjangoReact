import ReportCard from "./ReportCard"
import axios from "axios"
import { useEffect, useState } from "react"


const OrderReport = () => {
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);

  async function getOrders() {
    try {
      const response = await axios.get('http://localhost:8000/api/order/',{
        headers: {
          'Authorization': 'Token ' + localStorage.getItem('token')
        },
      });
      setOrders(response.data);
    } catch (error){
      console.log('Error: ', error);
    }
  }
  const getProducts = async () => {

    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/products/`)
      console.log(response.data)
      setProducts(response.data)

    } catch (error) {
      console.log(error)
    }
}
useEffect(() => {
  getOrders();
  getProducts();
}, []);

return(
<div>

<div className="text-center font-serif color text-amber-400 m-4 text-4xl font-extrabold">
<h2> ORDERS </h2>
</div>

<div className="text-black">
<div className="overflow-x-auto">
<table className="min-w-full">
  <thead>
    <tr className="text-center bg-amber-400 font-extrabold  font-serif text-1xl">
      <th className="text-center">ORDER NO</th>
      <th className="text-center">DATE_PLACED</th>
      <th className="text-center">PRODUCTS</th>
      <th className="text-center">AMOUNT</th>
      <th className="text-center">STATUS</th>
    </tr>
  </thead>

  <tbody>
  {orders.map((order)=>(
    <tr key ={order.id} className="py-4 text-center">
      <td className="border-2 border-green-950 px-6">{order.id}</td>
      <td className="border-2 border-green-950 px-6">{order.date_placed.split('T')[0]}</td>
      <td className="border-2 border-green-950 px-6">{
        order.product.map(p=>(<ul key={p}><li>{products.find(product=>product.id==p).name}</li></ul>))
      }</td>
      <td className="border-2 border-green-950 px-6">{order.total_amount}</td>
      <td className="border-2 border-green-950 px-6">{order.status}</td>
      <button className="px-2 py-1 bg-blue-500 text-white rounded">View</button>
      <button className="px-2 py-1 bg-red-500 text-white rounded">Delete</button>
    </tr>
    ))} 
  </tbody>

  
</table>
</div>
</div>


</div>

)
}

export default OrderReport