import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="p-2 bg-green-600">
        <div className=" max-w-7xl mx-auto flex justify-between">
            <div className="text-white text-xl font-bold">
                <Link href="/">AgriAccess</Link>
                <Link href="/"><Image src="/logonobg.png" alt="Logo" width={75} height={40} /> </Link>
            </div>
            <div className="text-white text-xl font-bold">
                <p>Contact Us</p>
                <p>+63912345678</p>
                <p>agriaccess@gmail.com</p>
            </div>
        </div>
        <hr/>
        <div className=" max-w-7xl mx-auto flex justify-end">
            {/* TODO: Change to socmed icons */}
            <Link href="/"><Image src="/logonobg.png" alt="Logo" width={75} height={40} /> </Link>
            <Link href="/"><Image src="/logonobg.png" alt="Logo" width={75} height={40} /> </Link>
            <Link href="/"><Image src="/logonobg.png" alt="Logo" width={75} height={40} /> </Link>
        </div>

    </footer>
  )
}

export default Footer