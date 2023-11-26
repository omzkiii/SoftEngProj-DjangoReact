const inventory = () => {
  const details = {
    orderNo: 123456,
    orderAmt: 1234,
    paymentMtd: "GCASH",
  };

  return (
    <div className="h-screen w-auto font-sans bg-green-100 text-lg flex-column">
      <div className="h-auto w-auto flex-column flex-start pt-5 pb-5 border-solid 2 border-black container mx-auto">
        <div class="w-max h-5">
          <button
            class="bg-white text-orange-500 text-sm focus:ring-4 border-solid 1 border-l-orange-500 rounded-full px-5 py-1.5 text-center inline-flex items-center mr-2 dark:hover:bg-black dark:hover:text-white"
          >
            --- VIEW ALL ORDERS ---
            {/* button to be fixed */}
          </button>
        </div>
      </div>

      <div className="h-auto w-auto flex justify-space-between container mx-auto text-black">
        <div class="h-auto flex justify-start ">
          <p>ORDER NUMBER: {}</p>
        </div>
      </div>

      <div className="h-auto w-75 flex justify-space-between p-1 container mx-auto text-black">
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
     
      <div className="h-auto w-75 flex justify-space-between p-1 text-black container mx-auto">
        <div class="w-3/4">
          <p class>CUSTOMER: male{} </p>
        </div>
        <div class="w-1/4 flex jutify-end">
          <p class>CONTACT NO.: 09696969 {}</p>
        </div>
      </div>

      <div className="h-auto w-75 flex p-1 container mx-auto text-black">
        <div class="w-3/4">
          <p class>ADDRESS: {}bahay 123 purok 0233 bayan ng blablabla lungsod ng tokyo</p>
        </div>
        <div class="w-1/4 flex jutify-end">
          <p class>PAYMENT: {}pera </p>
        </div>
      </div>

      {/* Table inserted here */}
      {/* all colors to be changed*/}
      <div className="h-auto w-auto flex flex-row justify-around border-2 solid mt-1 border-black container mx-auto text-black">
<table class="w-full font-sans text-xl bg-white text-black">
  <colgroup>
    <col width="33.3333%"></col>
    <col width="16.6667%"></col>
    <col width="16.6667%"></col>
    <col width="16.6667%"></col>
  </colgroup>
  <thead>
    <tr class="bg-green-500 text-white">
      <th class="px-6 py-3  uppercase font-medium text-sm border-solid border-gray-200 text-center"></th>
      <th class="px-6 py-3  uppercase font-medium text-sm border-solid border-gray-200 text-center">Product</th>
      <th class="px-6 py-3  uppercase font-medium text-sm border-solid border-gray-200 text-center">Quantity</th>
      <th class="px-6 py-3  uppercase font-medium text-sm border-solid border-gray-200 text-center">Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="px-6 py-4 border-solid border-gray-200 text-center">img</td>
      <td class="px-6 py-4 border-solid border-gray-200 text-center">data</td>
      <td class="px-6 py-4 border-solid border-gray-200 text-center">data</td>
      <td class="px-6 py-4 border-solid border-gray-200 text-center">data</td>
    </tr>
    <tr>
      <td class="px-6 py-4 border-solid border-gray-200 text-center">img</td>
      <td class="px-6 py-4 border-solid border-gray-200 text-center">data</td>
      <td class="px-6 py-4 border-solid border-gray-200 text-center">data</td>
      <td class="px-6 py-4 border-solid border-gray-200 text-center">data</td>
    </tr>
    <tr>
      <td class="px-6 py-4 border-solid border-gray-200 text-center">img</td>
      <td class="px-6 py-4 border-solid border-gray-200 text-center">data</td>
      <td class="px-6 py-4 border-solid border-gray-200 text-center">data</td>
      <td class="px-6 py-4 border-solid border-gray-200 text-center">data</td>
    </tr>
  </tbody>
</table>


</div>
<div className="h-auto w-auto flex flex-row text-black justify-end font-sans container mx-auto mt-10 items-end ">
          <div class="w-1/6">VOUCHER</div>


          <div class="w-1/6">$$$</div>
      </div>
      <div className="h-auto w-auto flex flex-row justify-end  container mx-auto  items-end text-black">
          <div class="w-1/6">SUBTOTAL</div>


          <div class="w-1/6">$$$</div>
      </div>
      <div className="h-auto w-auto flex flex-row justify-end  container mx-auto  items-end text-black">
          <div class="w-1/6">DELIVERY</div>


          <div class="w-1/6">$$$</div>
      </div>
      <div className="h-auto w-auto flex flex-row justify-end  container mx-auto  items-end text-3xl text-orange-400">
          <div class="w-1/6 ">TOTAL</div>


          <div class="w-1/6">$$$</div>
      </div>  
    </div>
  );
};

export default inventory;

