"use client"
import React, { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useLoggedInContext } from '../contexts/LoggedInContext';
import AccountModal from "./Account";
import Link from "next/link";
import Image from "next/image";
import ProductDropDown from "./ProductDropDown";
import UserDropDown from "./UserDropDown";


const Navbar = () => {
  const { isLoggedIn, setIsLoggedIn} = useLoggedInContext();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = React.useState("");

  const params = searchParams.get("login");
  const [cartIcon, setCartIcon] = useState("/cartIcon.png");

  const handleSearch = () => {
    router.push(`/products?q=${searchQuery}`);
  };

  const [productsIsOpen, setProductsIsOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for sidebar


  const toggleProducts = () => {
    setProductsIsOpen(!productsIsOpen)
  }


  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const toggleUserDropdown = () => {
    setUserDropdownOpen(!userDropdownOpen);
  };
  

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setCartIcon(isSidebarOpen ? "/cartIcon.png" : "/cartIconNavbarSelected.png");
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
    setCartIcon("/cartIcon.png");
  };
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
      img: '/strawBerry.png',
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
    <nav className="p-2 bg-green-600">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <div className="flex flex-row justify-end items-center space-x-4">
        <Link href="/"><Image src="/logonobg.png" alt="Logo" width={75} height={40} /> </Link>
        <Link href="/">AgriAccess</Link>
        <a href="/products">
        <button onMouseEnter={toggleProducts} onMouseLeave={toggleProducts}className="text-white relative">Products{productsIsOpen && <ProductDropDown onClick={toggleProducts} />}</button>
        </a>
        <Link href="/about" className="text-white" >Our Story</Link>
        <Link href="/contact" className="text-white">Contact Us</Link>
      </div>
      <div className="flex flex-row justify-end items-center space-x-8 relative">
      {isLoggedIn 
      ? 
            <div className="relative">
              <img
                src="/userIcon.png"
                alt="UserIcon"
                onClick={()=>toggleUserDropdown()}
                className="cursor-pointer"
              />
              {userDropdownOpen && <UserDropDown onClick={()=>toggleUserDropdown()}/>}
            </div>

      : <Link href={'/?login=true'}>
          <img src="/userIcon.png" alt="UserIcon" onClick={openModal} />
        </Link>}
        {params==='true' && <AccountModal onClose={closeModal} isModalOpen={isModalOpen}/>}
        {/* {userDropdownOpen && <UserDropDown onClick={toggleUserDropdown} />} */}
        

      <div> 
        <img src={cartIcon} alt="Cart" onClick={toggleSidebar} className="cursor-pointer" width={60} height={60} />
          {/* THE SIDEBAR*/}
          {isSidebarOpen && (
            <div className={`fixed inset-y-0 right-0 bg-gray-800 bg-opacity-50 z-50 transform transition-transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} w-1/4`}>
              <div className={`absolute top-0 right-0 h-full bg-white min-w-full p-4 transform transition-transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} w-1/4  overflow-y-auto`}>
              
                <div className="flex flex-col justify-center ">
                  <button className="bg-transparent border-AgriAccessOrange text-AgriAccessOrange border-2 rounded-full px-3 py-2 font-extrabold " onClick={closeSidebar}>
                    &lt; CONTINUE SHOPPING
                  </button>
                </div>
                <br />
                <div className="flex flex-row ml-4 py-4 items-center">
                  <h1 className="text-AgriAccessGreen text-6xl mr-16">Cart</h1>
                  <img src="/cartSideBarIcon.png" className="w-20 h-20" alt="cart" />
                </div>
                {/* Mapping through toOrder and displaying items */}
                <div className="text-AgriAccessOrange">
                  {toOrder.map((item, index) => (


                    <div key={index} className="flex items-center justify-between p-2 border-b">

                      <div className="flex items-center">
                        <div>
                          <img src={item.img} alt={item.name} width={100} height={100} className="mr-6" />

                          <div className="text-2xl">
                            <h1>{item.price}</h1>
                          </div>

                        </div>

                        <div classname="flex flex-col ">
                          <div className="flex flex-row text-xl justify-center">
                            
                          <h1> {item.name} / </h1>
                      
                            
                         
                          <h3>  {item.size} </h3>
                         
                          </div>


                        <div className="flex justify-center mt-2 mb-2">
                          <table className="font-extrabold ">
                            <tr>
                              <td className="bg-AgriAccessGreen px-2 border-t border-b border-AgriAccessGreen" >
                               <button> - </button> 
                              </td>
                              <td className=" px-4 border-t border-b border-AgriAccessGreen">
                                {item.qty}
                              </td>
                              <td className="bg-AgriAccessGreen px-2 border-t border-b border-AgriAccessGreen">
                              <button> +   </button>
                              </td>
                            </tr>
                          </table>
                        </div>
                        

                        <div className="flex justify-center">
                          <button className="underline text-Lime">Remove this item</button>
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
          )}
        </div>

        

        <input
          type="search"
          placeholder="Search..."
          className="p-2 border border-green-300 rounded-md text-black"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        
        <button type="button" onClick={handleSearch} className="bg-green-700 text-white rounded-md p-2"> Search </button>
      </div>
    </div>
  </nav>
  );
};
  
export default Navbar;
