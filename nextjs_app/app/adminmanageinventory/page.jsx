// //FRAMEWORK NECCESITIES
// // use client 
// import React from 'react';
// import { useState } from "react";

// //REPORT PAGES TO BE PULLED TO THE BOX
// import inventoryReport from '../../components/adminReports/inventory.jsx'
// import ordersReport from '../../components/adminReports/orders.jsx'
// import salesReport from '../../components/adminReports/sales.jsx'
 
// const MainPage = () => {

//   //VARIABLES AND BUTTON FUNCTION 

//   const [activeBtn, setActiveBtn] = useState(["inventoryReport"])

//   const toggleReport = (e) => {
//     //   setActiveBtn(e.target.value)
//     setActiveBtn(e.target.value)
//   }
  

//   //THE UI 
//   return (
//    <div> 
//     <div className="bg-green-100 min-h-screen px-8 py-2">
//                 <div className="mx-18 my-14">
//                 <div className="float-left mx-8">
//                     <img src="orangeUserIcon.png" className="mb-1" alt="User Icon" />
//                 </div>
            
//                 <h1 className="text-4xl text-amber-400 font-serif font-bold">Hello, Admin!</h1>
//                 <div className="space-x-2">
//                     <button value="inventory" onClick={toggleReport} className={activeBtn === "inventory" ? "rounded-full border border-black text-black bg-transparent  my-2 px-6 py-2 font-semibold font-serif text-base" : "rounded-full border border-black text-black bg-transparent  my-2 px-6 py-2 font-semibold font-serif text-base"}>
//                     MANAGE INVENTORY
//                     </button>
//                     <button value="order" onClick={toggleReport} className= {activeBtn === "order" ? "rounded-full border border-black text-black bg-transparent  my-2 px-6 py-2 font-semibold font-serif text-base" : "rounded-full border border-black text-black bg-transparent  my-2 px-6 py-2 font-semibold font-serif text-base"}>
//                     MANAGE ORDERS
//                     </button>
//                     <button value="reports" onClick={toggleReport} className= {activeBtn === "sales" ? "rounded-full border border-black text-black bg-transparent  my-2 px-6 py-2 font-semibold font-serif text-base" : "rounded-full border border-black text-black bg-transparent  my-2 px-6 py-2 font-semibold font-serif text-base"}>
//                     RETRIEVE REPORTS
//                     </button>
//                 </div>

//                 <div 
//                     className="mt-4 rounded-2xl border-t-2 border-green-700">
//                 </div>
                

//                 </div>
                
//                  <div className="mx-18">
//                 <div className="p-10 rounded-lg shadow-md bg-light-grayish-blue ">
//                 </div>
//             </div> 

//             {activeBtn === "inventory" && <inventoryReport /> }
//             {activeBtn === "order" && <orderReport /> }
//             {activeBtn === "sales" && <salesReport /> }
            
            
//         </div>

//     </div>
//   )
// }

// export default MainPage;

 

import AdminComponentPanel from '../../components/AdminComponentPanel'

const page = () => {
  return (
    <AdminComponentPanel />
    
  )
}

export default page