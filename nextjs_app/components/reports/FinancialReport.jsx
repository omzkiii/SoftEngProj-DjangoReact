const FinancialReport = () => {
    //TODO: fetch data based on month and year props
    const analytics = {
        sales: 300000,
        discount: 50000,
        cogs: 100000,
    }

    return(
<div>
  
  <div className="text-center font-serif color text-amber-400 m-4 text-4xl font-extrabold">
  <h2> INVENTORY </h2>
  </div>

  <div className="text-black">
<div className="overflow-x-auto">
  <table className="min-w-full">
    <thead>
      <tr className="text-center bg-amber-400 font-extrabold font-serif text-2xl">
        <th className="text-center">PRODUCT</th>
        <th className="text-center">PRODUCT NAME</th>
        <th className="text-center">QUANTITY</th>
        <th className="text-center">PRICE</th>
        <th className="text-center">OPERATION</th>
      </tr>
    </thead>

    <tbody>
      <tr className="py-4 text-center">
        <td> <p>display </p></td>
        <td> <p>display </p></td>
        <td><p>display </p></td>

        <td className="py-4 items-center">
          <select name="status" id="orderStatus">
            <option value="" disabled selected hidden>Choose a Status</option>
            <option value="completed" className="text-cyan-600">Completed</option>
            <option value="pending" className="text-green-400">Pending</option>
            <option value="cancelled" className="text-red-400">Cancelled</option>
          </select>
        </td>

        <td className="items-center space-x-2">
          <button className="px-2 py-1 bg-blue-500 text-white rounded">View</button>
          <button className="px-2 py-1 bg-red-500 text-white rounded">Delete</button>
        </td>
      </tr>
    </tbody>

    
  </table>
</div>
</div>


  </div>

        )
}

export default FinancialReport