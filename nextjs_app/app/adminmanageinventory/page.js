//FRAMEWORK NECCESITIES
import React from 'react';
import { useState } from "react"

//REPORT PAGES TO BE PULLED TO THE BOX
import InventoryReport from '../../components/adminReports/inventory.js'
import OrderReport from '../../components/adminReports/orders.js'
import SalesReport from '../../components/adminReports/sales.js'
 
const MainPage = () => {

  //VARIABLES AND BUTTON FUNCTION 

  const [activeBtn, setActiveBtn] = useState("inventory")
  const [selectedPeriod, setSelectedPeriod] = useState("monthly")

  const toggleReport = (e) => {
      setActiveBtn(e.target.value)
  }

  const handlePeriodChange = (e) => {
      setSelectedPeriod(e.target.value)
  }
  

  //THE UI 
  return (
    <div className="bg-green-100 min-h-screen px-8 py-2">
                <div className="mx-18 my-14">
                <div className="float-left mx-8">
                    <img src="orangeUserIcon.png" className="mb-1" alt="User Icon" />
                </div>
            
                <h1 className="text-4xl text-amber-400 font-serif font-bold">Hello, Admin!</h1>
                <div className="space-x-2">
                    <button className="rounded-full border border-black text-black bg-transparent  my-2 px-6 py-2 font-semibold font-serif text-base">
                    MANAGE INVENTORY
                    </button>
                    <button className="rounded-full border border-black text-black bg-transparent  my-2 px-6 py-2 font-semibold font-serif text-base">
                    MANAGE ORDERS
                    </button>
                    <button className="rounded-full border border-black text-black bg-transparent  my-2 px-6 py-2 font-semibold font-serif text-base">
                    RETRIEVE REPORTS
                    </button>
                </div>

                <div 
                    className="mt-4 rounded-2xl border-t-2 border-green-700">
                </div>
                

                </div>
                
                 <div className="mx-18">
                <div className="p-10 rounded-lg shadow-md bg-light-grayish-blue ">
                </div>
            </div> 


            

        </div>

  )
}

export default MainPage;

 