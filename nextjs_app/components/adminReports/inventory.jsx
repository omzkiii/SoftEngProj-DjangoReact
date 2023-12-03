const inventory = () => {
  const details = {
    orderNo: 123456,
    orderAmt: 1234,
    paymentMtd: "GCASH",
  };

  return (
      <div className="h-screen w-auto font-sans bg-green-100 text-lg flex-column">
      <div className="h-auto w-auto flex-column flex-start pt-5 pb-5 border-solid 2 border-orange-500 container mx-auto">
          <div class="w-max h-5">
          <button class="bg-green-900 text-amber-400 text-sm font-bold focus:ring-4 border-solid border border-l-orange-500 rounded-full px-5 py-1.5 text-center inline-flex items-center mr-2 dark:hover:bg-green-900 dark:hover:text-orange-500 dark:border-black">
             <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            VIEW ALL ORDERS
            </button>
          </div>
        </div>

        <div className="h-auto w-auto flex justify-space-between container mx-auto  text-black">
          <div class="h-auto flex justify-start font-bold">
            <p>ORDER NUMBER: {}</p>
          </div>
        </div>

        <div className="h-auto w-auto flex justify-space-between p-1 font-bold container mx-auto  text-black">
          <div class="w-3/4">
            <h1 class="text-5xl">#69696969{}</h1>
          </div>
        <td className="py-4 items-center">
          <select name="status" id="orderStatus">
            <option value="" disabled selected hidden>Choose a Status</option>
            <option value="completed" className="text-cyan-600">Completed</option>
            <option value="pending" className="text-green-400">Pending</option>
            <option value="cancelled" className="text-red-400">Cancelled</option>
            {/*  IDK kung pano tong part na to  */}
          </select>
        </td>
      </div>
     
      <div className="h-auto w-auto flex justify-space-between p-1  text-green-800 container mx-auto">
          <div class="w-3/4 font-bold">
            <h1 class>CUSTOMER: male{} </h1>
          </div>
          <div class="w-1/4 flex jutify-end font-bold">
            <h1 class>CONTACT NO.: 09696969 {}</h1>
          </div>
        </div>

        <div className="h-auto w-75 flex p-1 text-green-800 container mx-auto ">
          <div class="w-3/4 font-bold">
            <h1 class>ADDRESS: {}bahay 123 purok 0233 bayan ng blablabla lungsod ng tokyo</h1>
          </div>
          <div class="w-1/4 flex jutify-end text-green-800 font-bold ">
            <h1 class>PAYMENT: {}pera </h1>
          </div>
        </div>

       {/* Table inserted here */}
  <div className="h-auto w-auto flex flex-row justify-around justify-items-center border-2 solid mt-1 border-black container mx-auto text-black">
    <table className="w-full font-sans text-xl bg-white text-black">
      <colgroup>
        <col width="33.3333%"></col>
        <col width="16.6667%"></col>
        <col width="16.6667%"></col>
        <col width="16.6667%"></col>
      </colgroup>
      <thead>
        <tr className="bg-green-900 text-white text-4xl">
          <th className="px-6 py-3 uppercase font-semi-bold text-sm border-solid border-gray-200 text-center"></th>
          <th className="px-6 py-3 uppercase font-semi-bold text-xl border-solid border-gray-200 text-center">Product</th>
          <th className="px-6 py-3 uppercase font-semi-bold text-xl border-solid border-gray-200 text-center">Quantity</th>
          <th className="px-6 py-3 uppercase font-semi-bold text-xl border-solid border-gray-200 text-center">Price</th>
        </tr>
      </thead>
      <tbody>
      <tr>
        <td class="px-6 py-4 border-solid border-gray-200 text-center font-semi-bold">
        <img src="logobg.png" alt="Image Description" class="w-16 h-16 object-cover mx-auto"></img></td>
        <td class="px-6 py-4 border-solid text-green-900 font-semibold border-gray-200 text-center">data</td>
        <td class="px-6 py-4 border-solid text-green-900 font-semibold border-gray-200 text-center">data</td>
        <td class="px-6 py-4 border-solid text-green-900 font-semibold border-gray-200 text-center">data</td>
    </tr>

    <tr>
        <td class="px-6 py-4 border-solid border-gray-200 text-center font-semi-bold">
        <img src="logobg.png" alt="Image Description" class="w-16 h-16 object-cover mx-auto"></img></td>
        <td class="px-6 py-4 border-solid text-green-900 font-semibold border-gray-200 text-center">data</td>
        <td class="px-6 py-4 border-solid text-green-900 font-semibold border-gray-200 text-center">data</td>
        <td class="px-6 py-4 border-solid text-green-900 font-semibold border-gray-200 text-center">data</td>
    </tr>      
    <tr>
        <td class="px-6 py-4 border-solid border-gray-200 text-center">
        <img src="logobg.png" alt="Image Description" class="w-16 h-16 object-cover mx-auto"></img></td>
        <td class="px-6 py-4 border-solid text-green-900 font-semibold border-gray-200 text-center">data</td>
        <td class="px-6 py-4 border-solid text-green-900 font-semibold border-gray-200 text-center">data</td>
        <td class="px-6 py-4 border-solid text-green-900 font-semibold border-gray-200 text-center">data</td>
    </tr>      
  
        {/* nababa pag dinagdagan ng data*/}
      </tbody>
    </table>
  </div>

       <div className="h-auto w-auto flex flex-row text-green-900 justify-end font-sans font-semibold container mx-auto mt-10 items-end ">
            <div class="w-1/6">SUBTOTAL</div>
  
  
            <div class="w-1/6">$$$</div>
        </div>
        <div className="h-auto w-auto flex flex-row justify-end  container mx-auto font-sans font-semibold items-end text-green-900">
            <div class="w-1/6">DELIVERY</div>
  
  
            <div class="w-1/6">$$$</div>
        </div>
        <div className="h-auto w-auto flex flex-row justify-end  container mx-auto font-sans font-semibold items-end text-3xl text-orange-400">
            <div class="w-1/6 ">TOTAL</div>
  
  
            <div class="w-1/6">$$$</div>
        </div>  
      </div>
  );
};

export default inventory;

