const InventoryReport = ({month, year}) => {

  //TODO: fetch categories
  const items = [
    {   
        productImg:'/kamotePic.jpg',
        name: "Kamote",
        qty: "54 kg",
        price: "120/kg",
    },
    {
        productImg:'/chickenBreastPic.jpg',
        name: "Chicken Breast",
        qty: "62 kg",
        price: "170/kg",
    }
  ]
  
    return (
        <div>
  
            <div className="text-center font-serif color text-amber-400 m-4 text-4xl font-extrabold">
                <h2> INVENTORY </h2>
            
              
            </div>
        
     
            <div className="overflow-x-auto text-black">
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

            {items.map((item, index) => (
              <tr key={index} className="py-4 text-center  items-center">
                <td className="align-middle">
                  {/* Items Display */}
                  <img src={item.productImg} alt={item.name} width={100} height={100}  />
                </td>
                <td>{item.name}</td>
                <td>{item.qty}</td>
                <td>{item.price}</td>
                <td className="items-center">
                  
                  <div className="space-x-2">
                    <button className="px-2 py-1 bg-blue-500 text-white rounded">View</button>
                    <button className="px-2 py-1 bg-red-500 text-white rounded">Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
                    
                        
                </table>
            </div>
        
                
                
        </div>
      
  )
}

export default InventoryReport