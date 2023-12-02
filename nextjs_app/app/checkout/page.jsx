// pages/index.js

import React from 'react';

const CheckOutPage = () => {
  return (
    <>
      <div className="h-screen w-screen bg-green-100">
        
          <div className="checkout-form h-screen w-screen bg-green-400 font-bold flex flex-col">
            <h2 class="font-sans m-8 text-4xl text-green-900">Checkout</h2>

            <form class=" p-8 pt-0  rounded shadow-md">
    
              <div className="mb-2 flex ">
                  <div className="field1 pr-10 w-1/2">
                    <label htmlFor="field1" className="block text-gray-700 text-sm font-bold mb-2">NAME</label>
                    <input type="text" id="field1" name="field1" className="w-full p-2 border border-gray-300 rounded-[45px]" />
                  </div>
                    <div className="flex-1 w-1/2">
                    <label htmlFor="field2" className="block text-gray-700 text-sm font-bold mb-2">CONTACT NO.</label>
                    <input type="text" id="field2" name="field2" className="w-full p-2 border border-gray-300 rounded-[45px]" />
                  </div>
              </div>

    
              <div class="mb-2">
                <label for="field2" class="block text-gray-700 text-sm font-bold mb-2">ADDRESS</label>
                <input type="text" id="field2" name="field2" class="w-full p-2 border border-gray-300 rounded-[45px]"></input>
              </div>

    
              <div class="mb-2">
                <label for="field3" class="block text-gray-700 text-sm font-bold mb-2">APPARTMENT,SUITE,FLOOR</label>
                <input type="text" id="field3" name="field3" class="w-full p-2 border border-gray-300 rounded-[45px]"></input>
              </div>

    
            <div className="mb-2 flex gap-12">
                <div className="flex-1">
                  <label htmlFor="field3" className="block text-gray-700 text-sm font-bold mb-2">REGION</label>
                  <input type="text" id="field3" name="field3" className="w-full p-2 border border-gray-300 rounded-[45px]" />
                </div>
                <div className="flex-1">
                  <label htmlFor="field4" className="block text-gray-700 text-sm font-bold mb-2">CITY</label>
                  <input type="text" id="field4" name="field4" className="w-full p-2 border border-gray-300 rounded-[45px]" />
                </div>
                <div className="flex-1">
                  <label htmlFor="field5" className="block text-gray-700 text-sm font-bold mb-2">POSTAL CODE</label>
                  <input type="text" id="field5" name="field5" className="w-full p-2 border border-gray-300 rounded-[45px]" />
                </div>
            </div>

              <h2 class="font-sans text-center mb-5 mt-8 text-4xl text-green-900">Payment</h2>

              <div className="mb-4 flex justify-center mx-auto font-sans font-bold gap-12"> 
              <div className="w ">
                <button type="button" id="button3" className="px-9 p-2 border border-gray-300 rounded-[10px] bg-white text-green-900 hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300">
                  GCASH
                </button>
              </div>
              <div className="">
                <button type="button" id="button4" className="px-8 py-2 border text-s border-gray-300 rounded-[10px] bg-white text-green-900 hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300">
                  CREDIT/DEBIT CARD
                </button>
              </div>
              <div className="">
                <button type="button" id="button5" className="px-9 p-2 border border-gray-300 rounded-[10px] bg-white text-green-900 hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300">
                  MAYA
                </button>
              </div>
            </div>



            <div className="div flex justify-center">
              <button type="submit" class="bg-green-900  text-white p-2  hover:bg-blue-700 w-2/3">PLACE ORDER</button>
            </div>
  </form>

            
          </div>
        
      </div>
    </>
  );
};

export default CheckOutPage;
