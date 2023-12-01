import axios from "axios";
import Link from "next/link";

const ProductDropDown = ({ onClick, setIsLoggedIn }) => {
    const categories = ['Profile', 'Logout'];
    const handleLogout = async() =>{
      try {
        const response = await axios.post('http://127.0.0.1:8000/auth/token/logout/',{},{
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + localStorage.getItem('token')
          },
        })
        if (response.status === 204){
          localStorage.removeItem('token');
          console.log("Logged out")
          setIsLoggedIn(false)
          onClick
        }
      } catch (error) {
        
      }
    }
        
    return (
        <>
            <ul className="absolute top-18 bg-green-600 border rounded shadow-lg">
                    <Link href={`/profile/user`}><li onClick={onClick} className="px-4 py-2 cursor-pointer hover:bg-gray-100 hover:text-green-950">
                      Profile
                    </li></Link>
                    <li onClick={handleLogout} 
                        className="px-4 py-2 cursor-pointer hover:bg-gray-100 hover:text-green-950"> Log out</li>
            </ul>
              
        </>
    )
}

export default ProductDropDown