
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { LoggedInProvider } from '../contexts/LoggedInContext';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AgriAccess',
  description: 'Harvesting Connection, Nourishing Futures',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <LoggedInProvider>
          <Navbar/>
            {children}
          <Footer />
        </LoggedInProvider>
      </body>
    </html>
  )
}
