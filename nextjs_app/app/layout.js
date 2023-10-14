import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AgriAccess',
  description: 'Harvesting Connection, Nourishing Futures',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="p-2 bg-green-600">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-white text-2xl font-bold">
            <a href="/">AgriAccess</a>
          </div>
          <ul className="flex space-x-10">
            <li><a href="/" className="text-white">Home</a></li>
            <li><a href="/products" className="text-white">Products</a></li>
            <li><a href="/about" className="text-white">Our Story</a></li>
            <li><a href="/contact" className="text-white">Contact Us</a></li>
            <li><a href="/login" className="text-white">Login/Register</a></li>
            <li><a href="/cart" className="text-white">Cart</a></li>
            <li><input
            type="text"
            placeholder="Search Item"
            className="focus:outline-none bg-green-900 w-24"/></li>
            <li><button className="bg-green-700 rounded-lg p-1">Search</button></li>
          </ul>
        </div>
      </nav>
      {children}</body>
    </html>
  )
}
