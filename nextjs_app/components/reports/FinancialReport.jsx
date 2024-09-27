 //TODO: fetch analytics based on month and year props    
import axios from "axios";
import { useEffect, useState } from "react";
    
    const FinancialReport = () => {
      const [sales, setSales] = useState([]);
       
        const analytics =[
          {
            orders: "101", 
            revenue: 23301,
            profit: 12642
          },
        ];

        const monthOptions = [
          { value: 'january', label: 'January' },
          { value: 'february', label: 'February' },
          { value: 'march', label: 'March' },
          { value: 'april', label: 'April' },
          { value: 'may', label: 'May' },
          { value: 'june', label: 'June' },
          { value: 'july', label: 'July' },
          { value: 'august', label: 'August' },
          { value: 'september', label: 'September' },
          { value: 'october', label: 'October' },
          { value: 'november', label: 'November' },
          { value: 'december', label: 'December' },
        ];

        const yearOptions = [
          { value: 2023, label: 2023 },
          { value: 2022, label: 2022 },
          { value: 2021, label: 2021 },
          { value: 2020, label: 2020 },
          { value: 2019, label: 2019 },
          { value: 2018, label: 2018 },
          { value: 2017, label: 2017 },
          
        ];
  return(
        
    <div> 

      <div className=" font-serif color text-amber-400 m-4 text-4xl font-extrabold">
      <h2 className="text-AgriAccessOrange"> SALES REPORT  </h2>
      </div>

        <div className="flex">
            <div className=" ml-12 mr-4">
              <select className="text-black rounded-3xl border border-gray-300 px-4 py-2">
                <option value="monthly">Monthly</option>
                <option value="weekly">Weekly</option>
                <option value="yearly">Yearly</option>
              </select>
            </div>

            <div> 
              <h1 className="text-green-700 font-extrabold text-4xl">&gt;</h1> 
            </div>


            <div>

              {/* THE SELECT FIELD FOR MONTHS */}
              <select className="text-black rounded-3xl border border-gray-300 px-4 py-2">
                {monthOptions.map((option) => (
                  <option key={option.value} value={option.value}> {option.label}</option>
                  ))}
              </select>

              {/* THE SELECT FIELD FOR YEARS */}
              <select className="text-black rounded-3xl border border-gray-300 px-4 py-2 ml-6">
                {yearOptions.map((option2) => (
                  
                  <option key={option2.val} value={option2.value}> {option2.label}</option>

                ))}
                
              </select>
                  
            </div>
          </div>

        {/* BOXES BELOW DITO   */}
        {/* line-height: 300px; */}
    <div className="flex flex-wrap justify-center flex-items-center font-extrabold"> 
      <div className="w-1/4 h-96 shadow-xl m-10 text-center leading-snug text-3xl">
        <br/>
        <h1 className="text-4xl text-AgriAccessOrange"> ORDERS</h1>
        <br/>
        <h1 className="text-8xl text-AgriAccessOrange">{analytics[0].orders}</h1>
                  
      </div>
    
          
      <div className="w-1/4 h-96 shadow-xl m-10 text-center leading-tight text-3xl">
        <br/>
        <h1 className="text-4xl text-AgriAccessOrange"> REVENUE</h1>
        <br/>
        <h1 className="text-8xl text-AgriAccessOrange">{analytics[0].revenue}</h1>
      </div>
        
      <div className="w-1/4 h-96 shadow-xl m-10 text-center leading-tight text-3xl">
        <br/>
        <h1 className="text-4xl text-AgriAccessOrange"> PROFIT</h1>
        <br/>
        <h1 className="text-8xl text-AgriAccessOrange">{analytics[0].profit}</h1>
      </div>
    </div>
  </div>
            )
    }

    export default FinancialReport