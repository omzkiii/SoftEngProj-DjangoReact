// pages/index.js
import React from 'react';

const MainPage = () => {
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
          

        </div>
        <div className="mx-18">
          <div className="p-10 rounded-lg shadow-md bg-light-grayish-blue text-center">
            <div>
            <h1 className="mb-4">INVENTORY</h1>
            </div>
            <div>
              <table className="text-center">
                
                <tr>
                  <th>PRODUCT</th>
                  <th>PRODUCT NAME</th>
                  <th>QTY</th>
                  <th>PRICE</th>
                  <th>OPERATION</th>
                </tr>

                <tr>
                  

                </tr>
              </table>
            </div>
          </div>
        </div>


        {/* <div className="mx-18 flex justify-center items-center h-screen">
  <div className="p-10 rounded-lg shadow-md bg-light-grayish-blue">
    <h1 className="text-2xl font-semibold text-center">INVENTORY</h1>
    <div>
      <table>
        <tr>
          <th>PRODUCT</th>
          <th>PRODUCT NAME</th>
          <th>QTY</th>
          <th>PRICE</th>
          <th>OPERATION</th>
        </tr>
      </table>
    </div>
  </div>
</div> */}

  </div>
  
  

  );
};

export default MainPage;

 