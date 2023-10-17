"use client"
import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import LoginModal from "./Account";
import Link from "next/link";
import Image from "next/image";


const Navbar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = React.useState("");
  const params = searchParams.get('login');

  const handleSearch = () => {
    router.push(`/search?q=${searchQuery}`);
  };
  
  return (
    <nav className="p-2 bg-green-600">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-white text-2xl font-bold flex justify-between items-center">
            <Link href="/"><Image src="/logonobg.png" alt="Logo" width={75} height={40} /> </Link>
            <Link href="/">AgriAccess</Link>
          </div>
            <Link href="/products" className="text-white">Products</Link>
            <Link href="/about" className="text-white">Our Story</Link>
            <Link href="/contact" className="text-white">Contact Us</Link>
            <Link href="/cart" className="text-white">Cart</Link>
            <input
            type="search"
            placeholder="Search..."
            className="p-2 border border-green-300 rounded-md"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="button" onClick={handleSearch} className="bg-green-700 text-white rounded-md p-2"> Search </button>

            {/* TODO: Change to profile icon */}
            <Link href={'/?login=true'}>
              <button type="button" className="bg-green-700 text-white rounded-md p-2 ml-4"> Login/Sign-up </button>
            </Link>

            {params==='true' && <LoginModal isOpen={true} onClose={router.back}/>}     
        </div>
      </nav>
      
  );
};

export default Navbar;