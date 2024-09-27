  //FRAMEWORK NECCESITIES
  "use client" 
  import React from 'react';
  import { useEffect, useState } from "react";

  //REPORT PAGES TO BE PULLED TO THE BOX
  import InventoryReport from '../components/reports/InventoryReport';
  import OrdersReport from  '../components/reports/OrderReport';
  import SalesReport from '../components/reports/FinancialReport';

  const MainPage = () => {
 
    //VARIABLES AND BUTTON FUNCTION 

    const [activeBtn, setActiveBtn] = useState("inventory");

    const toggleReport = (e) => {
      
      setActiveBtn(e.target.value)
    }
    

    //THE UI 
    return (
    
      <div className="bg-white min-h-screen px-8 py-2">
                  <div className="mx-18 my-14">
                    <div className="float-left mx-8">
                        <img src="orangeUserIcon.png" className="mb-1" alt="User Icon" />
                    </div>
                
                    <h1 className="text-4xl text-AgriAccessOrange font-serif font-bold">Hello, Admin!</h1>
                      <div className="space-x-2">
                          <button value="inventory" onClick={toggleReport} className={activeBtn === "inventory" ? "rounded-full border border-black text-black bg-transparent  my-2 px-6 py-2 font-semibold font-serif text-base" : "rounded-full border border-black text-black bg-transparent  my-2 px-6 py-2 font-semibold font-serif text-base"}>
                          MANAGE INVENTORY
                          </button>
                          <button value="orders" onClick={toggleReport} className= {activeBtn === "orders" ? "rounded-full border border-black text-black bg-transparent  my-2 px-6 py-2 font-semibold font-serif text-base" : "rounded-full border border-black text-black bg-transparent  my-2 px-6 py-2 font-semibold font-serif text-base"}>
                          MANAGE ORDERS
                          </button>
                          <button value="sales" onClick={toggleReport} className= {activeBtn === "sales" ? "rounded-full border border-black text-black bg-transparent  my-2 px-6 py-2 font-semibold font-serif text-base" : "rounded-full border border-black text-black bg-transparent  my-2 px-6 py-2 font-semibold font-serif text-base"}>
                          RETRIEVE REPORTS
                          </button>
                      </div>

                  <div className="mt-4 rounded-2xl border-t-2 border-green-700"> </div>
                  
                  <br/> 
                  {/* THE PANEL */}
                  <div className="mx-auto">
                  <div className="p-10 rounded-lg shadow-xl shadow-top shadow-offset-y-2"> 
                      {/* CONTENT OF THE PANEL */}

                      {activeBtn === "inventory" && <InventoryReport />}
                      {activeBtn === "orders" && <OrdersReport />} 
                      {activeBtn === "sales" && <SalesReport />}
                    </div>
                  </div>

              </div>

      </div>   


    )
  }

  export default MainPage;

  