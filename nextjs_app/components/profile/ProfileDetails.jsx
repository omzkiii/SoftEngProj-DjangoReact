import { useState } from "react";
import axios from "axios";

const ProfileDetails = ({ customer, user, setIsEditing }) => {
    const [isEditing, setIsEditingState] = useState(false)
    const [formData, setFormData] = useState({email: '', first_name: '', last_name: '', contact_no: '', address: ''});

    const handleEditClick = () => setIsEditingState(!isEditing);
    
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };


    const handleEdit = async () => {
      try {
        const response = await axios.patch("http://localhost:8000/auth/users/me/", formData, {
          headers: {
            'Authorization': 'Token ' + localStorage.getItem('token')
          },
        });
        const response1 = await axios.patch(`http://localhost:8000/auth/updatecustomer/${user.id}`, formData, {
          headers: {
            'Authorization': 'Token ' + localStorage.getItem('token')
          },
        });

        if (response.status === 201 && response1.status === 201) {
          // Registration successful

          console.log("Registration success");
          setIsEditingState(!isEditing);
        } 
        else if (response.status === 200 && response1.status === 200){
          // Registration successful

          console.log("Registration success");
          setIsEditingState(!isEditing);
        }
        else {
          // Handle registration errors
          console.log(response.status);
          setIsEditingState(!isEditing);
        }
      } catch (error) {
        // Handle network errors
        console.log(error);
      }
        // Handle network errors
        console.log(formData);
      }

      return (
        <div className="bg-green-100 flex flex-col">
          <div className="flex justify-center">
            <h1 className="font-extrabold text-green-500 m-4 text-4xl ">Profile</h1>
          </div>
              <div className=" flex flex-col mb-2">
              {isEditing ? (
                  <>
                  
                  <div className="flex flex-row">
                      <label className="mr-4 text-green-500 text-2xl font-semibold">Email:</label>
                      <input
                      name="email"
                      className="border rounded text-black px-2 py-1"
                      defaultValue={formData.email}
                      onChange={handleInputChange}
                      />
                  </div>
  
                  <div className="flex flex-row">
                      <label className="mr-4 text-green-500 text-2xl font-semibold">First Name:</label>
                      <input
                      name="first_name"
                      className="border rounded text-black px-2 py-1"
                      defaultValue={formData.first_name}
                      onChange={handleInputChange}
                      />
                  </div>
  
                  <div className="flex flex-row">
                      <label className="mr-4 text-green-500 text-2xl font-semibold">Last Name:</label>
                      <input
                      name="last_name"
                      className="border rounded text-black px-2 py-1"
                      defaultValue={formData.last_name}
                      onChange={handleInputChange}
                      />
                  </div>
  
                  <div className="flex flex-row">
                      <label className="mr-4 text-green-500 text-2xl font-semibold">Contact No.:</label>
                      <input
                      name="contact_no"
                      className="border rounded text-black px-2 py-1"
                      defaultValue={formData.contact_no}
                      onChange={handleInputChange}
                      />
                  </div>
                
                  <div className="flex flex-row">
                      <label className="mr-4 text-green-500 text-2xl font-semibold">Address:</label>
                      <input
                      name="address"
                      className="border rounded text-black px-2 py-1"
                      defaultValue={formData.address}
                      onChange={handleInputChange}
                      />
                  </div>
                  <br>
                  </br>
                  <button
                      className="bg-green-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600"
                      onClick={handleEdit}
                  >
                      Save Changes
                  </button>
                  <br></br>
                  <button
                      className="bg-green-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600"
                      onClick={handleEditClick}
                  >
                      Back
                  </button>
                  
                  </>
              ) : (
                  <button
                  className="bg-green-500 text-white font-semibold py-2 px-4 rounded-lg mr-2 hover:bg-green-600"
                  onClick={handleEditClick}
                  >
                  Edit Profile
                  </button>
              )}
              </div>
    
          <ul className="text-green-500 text-2xl font-semibold">
            {!isEditing && (
              <>
                <li className="mb-2">Name: {`${user.first_name} ${user.last_name}`}</li>
                <li className="mb-2">Email: {user.email}</li>
                <li className="mb-2">Username: {user.username}</li>
                <li className="mb-2">Contact no: {customer.contact_no}</li>
                <li className="mb-2">Address: {customer.address}</li>
              </>
            )}
          </ul>
        </div>
      );
    };
  
  
  export default ProfileDetails;
  