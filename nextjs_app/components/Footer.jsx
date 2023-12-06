import Image from "next/image"
import Link from "next/link"
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";


const Footer = () => {
  return (
    <footer className="p-2 bg-green">
        
        <div className=" max-w-7xl mx-auto flex justify-between">
            <div className="text-white text-xl font-semibold mt-[50px]">
                <Link href="/" className="font-Bree text-5xl ">AgriAccess</Link>
                <Link href="/">
                    <Image src="/logo-white.png" alt="Logo" width={100} height={100} 
                    className="mt-[10px]"/> </Link>
            </div>
            <div className="text-white text-xl  mt-[60px]">
                <p className="font-Bebas text-3xl text-AgriAccessOrange">Contact Us</p>
                <p className="font-Mont text-xl">+63912345678</p>
                <p className="font-Mont text-xl">agriaccess@gmail.com</p>
            </div>
        </div>
        <hr className="mt-[30px]"/>
        <div className=" max-w-7xl mx-auto flex justify-end mt-[20px]">
            {/* TODO: Change to socmed icons */}

            <Link href="https://www.facebook.com/"><FaFacebook size={35} className="mr-5"/> </Link>
            <Link href="https://www.x.com/"><FaXTwitter size={35} className="mr-5"/> </Link>
            <Link href="https://www.instagram.com/"><AiFillInstagram size={35} className="mr-5   "/> </Link>
        </div>

    </footer>
  )
}

export default Footer