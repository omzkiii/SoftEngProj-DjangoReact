"use client"
import React, { useState } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import LoginModal from "../components/login";
import RegisterModal from "../components/register";

import Link from "next/link";


const Navbar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = React.useState("");
  const params = searchParams.get('');

  const handleSearch = () => {
    router.push(`/search?q=${searchQuery}`);
  };

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(true);
  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };
  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(true);
  const openRegisterModal = () => {
    setIsRegisterModalOpen(true);
  };
  const closeRegisterModal = () => {
    setIsRegisterModalOpen(false);
  };
  
  return (
    <nav className="p-2 bg-green-600">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-white text-2xl font-bold">
            <a href="/">AgriAccess</a>
          </div>
            <a href="/products" className="text-white">Products</a>
            <a href="/about" className="text-white">Our Story</a>
            <a href="/contact" className="text-white">Contact Us</a>
            <a href="/cart" className="text-white">Cart</a>
            <input
            type="search"
            placeholder="Search..."
            className="p-2 border border-green-300 rounded-md"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
            type="button"
            onClick={handleSearch}
            className="bg-green-700 text-white rounded-md p-2"
            >
            Search
            </button>
            <Link href={'?=login'}><button
            type="button"
            className="bg-green-700 text-white rounded-md p-2 ml-4"
            >
            Login
            </button></Link>
            <Link href={'?=register'}><button
            type="button"
            className="bg-green-700 text-white rounded-md p-2 ml-4"
            >
            Register
            </button></Link>
            {params == 'login' && <LoginModal isOpen={isLoginModalOpen} onClose={router.back}/>}
            {params == 'register' && <RegisterModal isOpen={isRegisterModalOpen} onClose={router.back}/>}            
        </div>
      </nav>
      
  );
};

export default Navbar;