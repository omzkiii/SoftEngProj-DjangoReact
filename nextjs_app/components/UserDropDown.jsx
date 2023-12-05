import axios from "axios";
import Link from "next/link";
import { useLoggedInContext } from '../contexts/LoggedInContext';
import { useRouter } from 'next/navigation';
import { useEffect } from "react";


const ProductDropDown = ({ onClick }) => {
    const { user, logout } = useLoggedInContext();
    const [isAdmin, setIsAdmin] = useState(false)
    const router = useRouter();

    const checkIfAdmin = async() => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/admin/',{
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + localStorage.getItem('token')
          }
        })

        console.log(response.data.is_admin)
      } catch (error) {
        
      }
    }
    

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
          logout()
          onClick()
          router.push('/');
        }
      } catch (error) {
        
      }
    }

    useEffect(() => {
      checkIfAdmin()
    }, []);
        
    return (
        <>
            <ul className="absolute top-18 bg-green-600 border rounded shadow-lg">
                    <Link href={`/profile/user/${user.username}`}><li onClick={onClick} className="px-4 py-2 cursor-pointer hover:bg-gray-100 hover:text-green-950">
                      Profile
                    </li></Link>
                    <li onClick={handleLogout} 
                        className="px-4 py-2 cursor-pointer hover:bg-gray-100 hover:text-green-950"> Log out</li>
            </ul>
              
        </>
    )
}

export default ProductDropDown