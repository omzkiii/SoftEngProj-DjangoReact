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
  const [isClient, setIsClient] = useState(false)

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

  useEffect(() => {
    setIsClient(true)
  }, []);
  
  return (
    
    <nav className="p-2 bg-green">
      {isClient && <style>
      @import url('https://fonts.googleapis.com/css2?family=Bree+Serif&family=Montserrat:wght@700&display=swap');
      </style> }
        <div className="w-full h-28 border-b-[1px]">
          <div className="max-w-screen h-full mx-auto px-4 items-center justify-between flex cursor-pointer" >
          <ul className="flex items-center gap-3 uppercase ">
          <Image className="flex items-bottom" src="/logonobg.png" alt="Logo text-3xl mt-[-10px]" width={50} height={50}/>
          <h1 className="font-Bree text-3xl ">AgriAccess</h1>
          </ul>
            <ul className="flex items-center gap-20 uppercase font-semibold">
              {/*HOME */}
              <Link href="/"><li class="font-Mont group transition duration-300">
                Home
                <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
                </li></Link>
              {/*PRODUCTS */}
              <li class="group transition duration-300" href="/products" onMouseEnter={toggleProducts} onMouseLeave={toggleProducts}>Products {productsIsOpen && <ProductDropDown onClick={toggleProducts} />}
              <span class="font-Mont block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
              </li>
              <Link href="/about" >
              <li class="font-Mont group transition duration-300">Our Story
              <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
              </li> </Link>
              <Link href="/contact" >
              <li class="font-Mont group transition duration-300">Contact Us
              <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
              </li> </Link>
            </ul>
            <div>
              
              <ul className="flex items-center gap-3 uppercase font-semibold">
              
              {/*USER */}
              <li> 
                {isLoggedIn ? 
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
              </li>
              {/*CART */}
              <li> <Image className="flex items-bottom" src="/cartIcon.png" onClick={toggleSidebar} alt="Logo text-3xl mt-[-10px]" width={30} height={30}/> 
              {isSidebarOpen && <Cart isSidebarOpen={isSidebarOpen} closeSidebar={closeSidebar}/>}
              </li>
              {/*SEARCH */}
              <li class="relative text-green-700" data-te-input-wrapper-init>
              <input
                  type="search"
                  placeholder="Search..."
                  className="p-2 border border-green-300 rounded-md text-black"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                
              <button type="button" onClick={handleSearch} className="bg-green-700 text-white rounded-md p-2"> Search </button>
              </li>
              </ul>
            </div>

      

        

        
      </div>
    </div>
  </nav>

  );
};

export default Navbar;