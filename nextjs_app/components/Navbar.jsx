"use client"
import React, { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import AccountModal from "./Account";
import Link from "next/link";
import Image from "next/image";
import ProductDropDown from "./ProductDropDown";
import UserDropDown from "./UserDropDown";


const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = React.useState("");
  const params = searchParams.get('login');

  const handleSearch = () => {
    router.push(`/products?q=${searchQuery}`);
  };

  const [productsIsOpen, setProductsIsOpen] = useState(false);
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
                onClick={toggleUserDropdown}
                className="cursor-pointer"
              />
              {userDropdownOpen && <UserDropDown onClick={toggleUserDropdown} setIsLoggedIn={setIsLoggedIn} />}
            </div>

      : <Link href={'/?login=true'}>
          <img src="/userIcon.png" alt="UserIcon" onClick={openModal} />
        </Link>}
        {params==='true' && <AccountModal onClose={closeModal} isModalOpen={isModalOpen} setIsLoggedIn={setIsLoggedIn}/>}
        {/* {userDropdownOpen && <UserDropDown onClick={toggleUserDropdown} />} */}
        
        <img src="cartIcon.png" alt="Cart " />
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
