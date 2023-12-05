//checkout page

import React from 'react';

const checkOutPage = () => {
  return (
    <>
      <div className="h-screen w-screen bg-green-100">
        <div className="w-full flex flex-row">
          <div className="h-screen w-screen bg-green-400 font-bold flex flex-col">
            <h2 class="font-sans m-8 text-4xl text-green-900">Checkout</h2>

            <div class=" p-8 pt-0  rounded">
    
              <div className="mb-2 flex justify-center">
                  <div className="field1 pr-10 w-1/2">
                    <label htmlFor="field1" className="block text-gray-700 text-sm font-bold mb-2">NAME</label>
                    <input type="text" id="field1" name="field1" className="w-full p-2 text-black border border-gray-300 rounded-[45px]" />
                  </div>
                    <div className="flex-1 w-1/2">
                    <label htmlFor="field2" className="block text-gray-700 text-sm font-bold mb-2">CONTACT NO.</label>
                    <input type="text" id="field2" name="field2" className="w-full p-2 text-black border border-gray-300 rounded-[45px]" />
                  </div>
              </div>

    
              <div class="mb-2">
                <label for="field2" class="block text-gray-700 text-sm font-bold mb-2">ADDRESS</label>
                <input type="text" id="field2" name="field2" class="w-full p-2 border border-gray-300 text-black rounded-[45px]"></input>
              </div>
              </div>

              <h2 class="font-sans text-center mb-5 mt-8 text-4xl text-green-900">Payment</h2>
              <div className="mb-4 flex justify-center mx-auto font-sans font-bold gap-12"> 
              <div className="">
                <button type="radio" id="button3" className="px-9 p-3 border border-gray-300 rounded-[10px] bg-white text-green-900 hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300">
                  GCASH
                </button>
              </div>
              <div className="">
                <button type="radio" id="button4" className="px-9 p-3 border text-s border-gray-300 rounded-[10px] bg-white text-green-900 hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300">
                  CREDIT/DEBIT CARD
                </button>
              </div>
              <div className="">
                <button type="radio" id="button5" className="px-9 p-3 border border-gray-300 rounded-[10px] bg-white text-green-900 hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300">
                  MAYA
                </button>
              </div>
              </div>

               <div className="div flex justify-center">
              <button type="submit" class="bg-green-900  text-white p-2  hover:bg-blue-700 w-2/6  ">PLACE ORDER</button>
             </div>
             
            
              </div>
          {/* order summary */}
            <div className="w-2/5  text-black justify-center flex-col bg-white ">
            <h2 class="font-sans m-10 text-4xl font-semibold text-center text-green-900">Order Summary</h2>
            <div className="flex flex-row mx-10 ">
                <div class=" px-10 py-4 border-solid border-gray-200 text-center font-bold">
                <img src="orangUserIcon.png" alt="Image Description" class="w-20 h-20 object-cover mx-auto"></img></div>
                <div class="flex flex-col">
              <h1 class=" border-solid border-gray-200 font-sans font-bold text-4xl text-green-90 ">ubat</h1>
              <h1 class="px-full  border-solid  border-gray-200 font-sans font-semibold text-3xl text-green-900 ">P.500</h1>       
                </div>
            </div>

            <div className="flex flex-row mx-10 ">
                <div class=" px-10 py-4 border-solid border-gray-200 text-center font-bold">
                <img src="orangeUserIcon.png" alt="Image Description" class="w-20 h-20 object-cover mx-auto"></img></div>
                <div class="flex flex-col">
              <h1 class=" border-solid border-gray-200 font-sans font-bold text-4xl text-green-90 ">ubat</h1>
              <h1 class="px-full  border-solid  border-gray-200 font-sans font-semibold text-3xl text-green-900 ">P.500</h1>       
                </div>
            </div>

            <div className="flex flex-row mx-10 ">
                <div class=" px-10 py-4 border-solid border-gray-200 text-center font-bold">
                <img src="logobg.png" alt="Image Description" class="w-20 h-20 object-cover mx-auto"></img></div>
                <div class="flex flex-col">
              <h1 class=" border-solid border-gray-200 font-sans font-bold text-4xl text-green-90 ">ubat</h1>
              <h1 class="px-full  border-solid  border-gray-200 font-sans font-semibold text-3xl text-green-900 ">P.500</h1>       
                </div>
            </div>
            {/* tatlo lng baka sumabog */}
                    <div className=" flex flex-row justify-center text-xl text-green-900 font-sans font-semibold mx-10 mt-7">
                      <div class="w-1/2">SUBTOTAL</div> 
                      <div class="w-1/2">P1500.00</div>
                    </div>

                    <div className=" flex flex-row justify-center text-green-900 font-sans font-semibold mx-10 ">
                      <div class="w-1/2">DISCOUNT</div> 
                      <div class="w-1/2">P1000</div>
                    </div>

                    <div className=" flex flex-row justify-center text-orange-500 text-4xl font-sans font-bold mx-10">
                      <div class="w-1/2">TOTAL</div>
                      <div class="w-1/2">P2500</div>
                    </div>
            </div>

            <div>

            </div>
        
            </div>

          </div>
    </>
  );
};

export default checkOutPage;
