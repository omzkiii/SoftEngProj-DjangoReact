"use client"
import InventoryReport from "./reports/InventoryReport"
import OrderReport from "./reports/OrderReport"
import SalesReport from "./reports/SalesReport"
import FinancialReport from "./reports/FinancialReport"
import { useState } from "react"

const Reports = () => {
    const [activeBtn, setActiveBtn] = useState("inventory")
    const [selectedPeriod, setSelectedPeriod] = useState("monthly")

    const toggleReport = (e) => {
        setActiveBtn(e.target.value)
    }

    const handlePeriodChange = (e) => {
        setSelectedPeriod(e.target.value)
    }

    return (
        <div className="bg-green-100 min-h-screen flex flex-col items-center justify-center">
            <h1 aclassNme="font-extrabold text-green-500 m-4 text-5xl">Reports</h1>
            <div className="m-4">
                <button value="inventory" onClick={toggleReport} className={activeBtn === "inventory" ? "text-green-700 bg-white rounded-md p-2 mr-2": "bg-green-700 text-white rounded-md p-2 mr-2"}>Inventory Report</button>
                <button value="order" onClick={toggleReport} className={activeBtn === "order" ? "text-green-700 bg-white rounded-md p-2 mr-2": "bg-green-700 text-white rounded-md p-2 mr-2"}>Order Report</button>
                <button value="sales" onClick={toggleReport} className={activeBtn === "sales" ? "text-green-700 bg-white rounded-md p-2 mr-2": "bg-green-700 text-white rounded-md p-2 mr-2"}>Sales Report</button>
                <button value="financial" onClick={toggleReport} className={activeBtn === "financial" ? "text-green-700 bg-white rounded-md p-2 mr-2": "bg-green-700 text-white rounded-md p-2 mr-2"}>Financial Report</button>
            </div>

            <div className="m-4">
                <select value={selectedPeriod} onChange={handlePeriodChange} className="bg-green-700 text-white rounded-md p-2 mr-2">
                    <option value="monthly">Monthly</option>
                    <option value="annual">Annual</option>
                </select>

                {selectedPeriod === "monthly" && 
                    <select className="bg-green-700 text-white rounded-md p-2 mr-2">
                    <option value="jan">January</option>
                    <option value="feb">February</option>
                    <option value="mar">March</option>
                    <option value="apr">April</option>
                    <option value="may">May</option>
                    <option value="jun">June</option>
                    <option value="jul">July</option>
                    <option value="aug">August</option>
                    <option value="sep">September</option>
                    <option value="oct">October</option>
                    <option value="nov">November</option>
                    <option value="dec">December</option>
                    </select>
                }

                <select className="bg-green-700 text-white rounded-md p-2 mr-2">
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                </select>

            </div>

            {activeBtn === "inventory" && <InventoryReport /> }
            {activeBtn === "order" && <OrderReport /> }
            {activeBtn === "sales" && <SalesReport /> }
            {activeBtn === "financial" && <FinancialReport /> }
            

        </div>
    )
}

export default Reports