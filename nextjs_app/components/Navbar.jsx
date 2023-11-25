"use client"
import React, { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import AccountModal from "./Account";
import Link from "next/link";
import Image from "next/image";
import ProductDropDown from "./ProductDropDown";


const Navbar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = React.useState("");
  const params = searchParams.get('login');

  const handleSearch = () => {
    router.push(`/search?q=${searchQuery}`);
  };

  const [productsIsOpen, setProductsIsOpen] = useState(false);


  const toggleProducts = () => {
    setProductsIsOpen(!productsIsOpen)
  }
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    // <nav className="p-2 bg-green-600">
    //     <div className="max-w-7xl mx-auto flex justify-between items-center">
    //       <div className="text-white text-2xl font-bold flex justify-between items-center">
    //         <Link href="/"><Image src="/logonobg.png" alt="Logo" width={75} height={40} /> </Link>
    //         <Link href="/">AgriAccess</Link>
    //       </div>
    //       <div>
    //         <button onClick={toggleProducts} className="text-white">Products</button>
    //           {productsIsOpen &&<ProductDropDown onClick={toggleProducts}/>}
    //       </div>
    //         <Link href="/about" className="text-white" onClick={toggleProducts}>Our Story</Link>
    //         <Link href="/contact" className="text-white">Contact Us</Link>
            
    //         {/* TODO: Change to profile icon */}
    //         <Link href={'/?login=true'}>
    //           {/* <button type="button" className="bg-green-700 text-white rounded-md p-2 ml-4"> Login/Sign-up </button> */}
    //           <img src="/userIcon.png" alt="UserIcon">
    //           </img>
    //         </Link>

    //         {params==='true' && <LoginModal isOpen={true} onClose={router.back}/>}
    //         {/* <Link href="/cart" className="text-white">Cart</Link> */}
    //         <img src="cartIcon.png" alt="Cart ">
    //         </img>

    //         {/* <img src="/searchIcon.png" alt="searchIcon" >

    //         </img> */}
    //         <input
    //         type="search"
    //         placeholder="Search..."
    //         className="p-2 border border-green-300 rounded-md"
    //         value={searchQuery}
    //         onChange={(e) => setSearchQuery(e.target.value)}



    //         />
    //         <button type="button" onClick={handleSearch} className="bg-green-700 text-white rounded-md p-2"> Search </button>



    //     </div>
    //   </nav>
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
      <div className="flex flex-row justify-end items-center space-x-8">
        <Link href={'/?login=true'}>
          <img src="/userIcon.png" alt="UserIcon" onClick={openModal} />
        </Link>

        {params==='true' && <AccountModal onClose={closeModal} isModalOpen={isModalOpen}/>}

        <img src="cartIcon.png" alt="Cart " />
        <input
          type="search"
          placeholder="Search..."
          className="p-2 border border-green-300 rounded-md"
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