import React from 'react';

export default function Cart({ isSidebarOpen, closeSidebar }) {

    const calculateSubTotal = () => {
        const totalPrice = toOrder.reduce((acc, item) => {
          return acc + item.priceDouble;
        }, 0);
        return totalPrice.toFixed(2);
      };
    
      const calculateTotal = () => {
        const totalPrice = toOrder.reduce((acc, item) => {
          return acc + item.priceDouble;
        }, 0);
        return (totalPrice + shippingFee).toFixed(2);
      };
    
    var toOrder =
  [
    {
      img: '/blueberry.png',
      name: 'Blueberry',
      price: 'P120.00',
      priceDouble: 120.00,
      qty: 1,
      size: '3kg'
    },
    {
      img: '/strawberry.png',
      name: 'Strawberry',
      price: 'P150.00',
      priceDouble: 150.00,
      qty: 1,
      size: '3kg'
    },
    {
      img: '/blueberry.png',
      name: 'Blueberry',
      price: 'P120.00',
      priceDouble: 120.00,
      qty: 1,
      size: '3kg'
    },
    {
      img: '/blueberry.png',
      name: 'Blueberry',
      price: 'P120.00',
      priceDouble: 120.00,
      qty: 1,
      size: '3kg'
    },{
      img: '/blueberry.png',
      name: 'Blueberry',
      price: 'P120.00',
      priceDouble: 120.00,
      qty: 1,
      size: '3kg'
    },{
      img: '/blueberry.png',
      name: 'Blueberry',
      price: 'P120.00',
      priceDouble: 120.00,
      qty: 1,
      size: '3kg'
    },
    
  ]
   
  var shippingFee = 100.00;

  return (
    
    <div className={`fixed inset-y-0 right-0 bg-gray-800 bg-opacity-50 z-50 transform transition-transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} w-1/4`}>
              <div className={`absolute top-0 right-0 h-full bg-white min-w-full p-4 transform transition-transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} w-1/4  overflow-y-auto`}>

                <div className="flex flex-col justify-center ">
                  <button className="bg-transparent border-AgriAccessOrange text-AgriAccessOrange border-2 rounded-full px-3 py-2 font-extrabold font-Bree" onClick={closeSidebar}>
                    &lt; CONTINUE SHOPPING
                  </button>
                </div>
                <br />
                <div className="flex flex-row ml-4 py-4 items-center">
                  <h1 className="text-AgriAccessGreen text-7xl mr-16 font-Bree normal-case">Cart</h1>
                  <img src="/cartSideBarIcon.png" className="w-20 h-20" alt="cart" />
                </div>
                {/* Mapping through toOrder and displaying items */}
                <div className="text-AgriAccessOrange">
                  {toOrder.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-2 border-b">
                      <div className="flex items-center">
                        <div>
                          <img src={item.img} alt={item.name} width={140} height={140} className="mr-6 mt-12" />
                          <div className="text-2xl">
                            <h1 className='font-Mont text-green text mt-3'>{item.price}</h1>
                          </div>
                        </div>
                        <div classname="flex flex-col ">
                          <div className="flex flex-row text-xl justify-center">
                          <h1 className='font-Bree text-green text-2xl mr-2 normal-case text-black'> {item.name}</h1>
                          <sup className='font-Bree leading-snug text-5 mt-1.5'> / {item.size} </sup>
                          </div>

                        <div className="flex justify-center mt-2 mb-2">
                          <table className="font-extrabold ">
                            <tr>
                              <td className="bg-AgriAccessGreen px-2 border-t border-b border-AgriAccessGreen text-white" >
                               <button> - </button> 
                              </td>
                              <td className=" px-4 border-t border-b border-AgriAccessGreen text-green">
                                {item.qty}
                              </td>
                              <td className="bg-AgriAccessGreen px-2 border-t border-b border-AgriAccessGreen text-white">
                              <button> +   </button>
                              </td>
                            </tr>
                          </table>
                        </div>
                        

                        <div className="flex justify-center">
                          <button className="underline text-Lime font-Mont text-xs mt-1">Remove this item</button>
                        </div>
                        </div>                    
                      </div>
                    </div>
                  ))}
                </div>
                  <div className="mt-10  text-black">
                    <div className="flex flex-row justify-between text-AgriAccessGreen font-extrabold">

                    <div>
                      Subtotal
                    </div>

                    <div>
                      P{calculateSubTotal()} 
                    </div>
                    </div>

                    </div>
                    
                      <div className="flex flex-row justify-between text-AgriAccessGreen font-extrabold">
                        <div>
                            Delivery
                        </div>

                        <div>
                          P{shippingFee}
                        </div>

                      </div>

                      <div className="flex flex-row justify-between text-3xl text-AgriAccessOrange font-extrabold">
                        <div>
                          Total:
                        </div>
                        <div>
                          P{calculateTotal()}
                        </div>
                      </div>

                    <div className="mt-5">
                        <button className="bg-transparent border-Lime text-Lime border-2 rounded-full w-full py-2 font-extrabold">CHECKOUT</button>
                    </div>

                  </div>
            </div>
  )
}
