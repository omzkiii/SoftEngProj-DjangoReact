"use client"
import { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useLoggedInContext } from '../contexts/LoggedInContext';
import AccountModal from "./Account";
import Cart from "./Cart"
import Link from "next/link";
import Image from "next/image";
import ProductDropDown from "./ProductDropDown";
import UserDropDown from "./UserDropDown";


<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@900&display=swap" rel="stylesheet">

</link>
</link>
</link>


const Navbar = () => {
  const { isLoggedIn, setIsLoggedIn} = useLoggedInContext();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");

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
  
  return (
    
    <nav className="p-2 bg-green">
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Bree+Serif&family=Montserrat:wght@700&display=swap');
      </style>
        <div className="w-full h-28 border-b-[1px]">
          <div className="max-w-screen h-full mx-auto px-4 items-center justify-between flex cursor-pointer" >
          <ul className="flex items-center gap-3 uppercase ">
          <Image className="flex items-bottom" src="/logo-white.png" alt="Logo text-3xl mt-[-10px]" width={50} height={50}/>
          <h1 className="font-Bree text-3xl ">AgriAccess</h1>
          </ul>
            <ul className="flex items-center gap-20 uppercase font-semibold">
              {/*HOME */}
              <li href="/" class="font-Mont group transition duration-300">
                Home
                <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
                </li>
              {/*PRODUCTS */}
              <li class="group transition duration-300" href="/products" onMouseEnter={toggleProducts} onMouseLeave={toggleProducts}>Products
              <span class="font-Mont block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
              </li>
              <li class="font-Mont group transition duration-300">Our Story
              <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
              </li>
            </ul>
            <div>
              {/*SEARCH */}
              <ul className="flex items-center gap-3 uppercase font-semibold">
              <li class="relative text-green-700" data-te-input-wrapper-init>
                <input type="search" id="SearchBar" placeholder="Search" 
                  class=" peer block min-h-[auto] w-full rounded border-green-300 bg-white px-3 py-[0.32rem] leading-[1.6] outline-white transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-green-700 dark:placeholder:text-green-300 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 text-green-600"/>
                <label for="SearchBar" class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-green-300 transition-all duration-200 ease-out peer-focus:-translate-y-[1.5rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-green-700 dark:peer-focus:text-white">
                  Search</label>
              </li>
              {/*CART */}
              <li> <Image className="flex items-bottom" src="/cart-white.png" onClick={toggleSidebar} alt="Logo text-3xl mt-[-10px]" width={30} height={30}/> 
              {isSidebarOpen && <Cart isSidebarOpen={isSidebarOpen} closeSidebar={closeSidebar}/>}
              </li>
              {/*USER */}
              <li> <Image className="flex items-bottom" src="/user-white.png" onClick={()=>toggleUserDropdown()} alt="Logo text-3xl mt-[-10px]" width={30} height={30}/>
              {params==='true' && <AccountModal onClose={closeModal} isModalOpen={isModalOpen}/>}
              {userDropdownOpen && <UserDropDown onClick={toggleUserDropdown} />}
              </li>
              </ul>
            </div>
            </div>
          </div>
      </nav>
      
  );
};

export default Navbar;