import ReportCard from "./ReportCard"


const InventoryReport = ({month, year}) => {
  //TODO: fetch data based on month and year props
  const analytics = {
    begBal: 200,
    add: 100,
    sales: 150,
    others: 50,
  }

  //TODO: fetch categories
  const categories = [
    {   
        id: 1,
        name: "Fruits",
        qty: 100,
    },
    {
        id: 2,
        name: "Vegetables",
        qty: 200,
    },
    {
        id: 3,
        name: "Meat",
        qty: 50,
    }

  ]
  
    return (
        <div className="bg-green-600 mb-6">
            <div className="w-96 p-4 flex justify-center">
                <table className="w-full">
                    <tbody>
                        <tr>
                            <td>Beginning Balance</td>
                            <td>{analytics.begBal}</td>
                        </tr>

                        <tr>
                            <td>Additions</td>
                            <td>{analytics.add}</td>
                        </tr>

                        <tr>
                            <td>Sales</td>
                            <td>{analytics.sales}</td>
                        </tr>

                        <tr>
                            <td>Others <hr/></td>
                            <td>{analytics.others} <hr/></td>
                        </tr>
                        <tr>
                            <td>Ending Balance</td>
                            <td>{analytics.begBal + analytics.add - analytics.sales + analytics.others}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            


            <div>
                <h2 className="font-extrabold text-white m-4 text-xl">Ending Inventory per Category</h2>
                {categories.map((cat)=> (
                    <ReportCard key={cat.id} title={cat.name} amount={cat.qty}/>
                ))}
            </div>

            



        </div>
  )
}

export default InventoryReport