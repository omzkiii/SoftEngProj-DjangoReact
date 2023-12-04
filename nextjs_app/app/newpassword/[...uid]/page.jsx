'use client'
import React, { useId, useState } from 'react';
import Modal from '@/components/Modal';
import axios from 'axios';
import { useParams } from 'next/navigation';


const NewPasswordPage = ({params}) => { 
    const uid = params.uid[0]
    const token = params.uid[1];

    const [formData, setFormData] = useState({ uid: '', token: '', new_password: '', re_new_password: ''});
    const [showModal, setShowModal] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    formData.uid = uid;
    formData.token = token;
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
      const toggleShowPassword = (e) => {
        setShowPassword(e.target.checked)
    }
    const handleSend = async () => {
  
        try{
          const response = await axios.post('http://localhost:8000/auth/users/reset_password_confirm/', formData);
          if (response.status === 200) {
            console.log('Send success');
          } else {
            console.log(response.status);
            
          }
        }catch(error){
          console.log(error);
        }
        console.log(uid);
        console.log(token);
      }

    return (

        <div className="bg-green-100 min-h-screen flex flex-col items-center justify-center">
        <Modal isOpen={showModal} closeModal={()=>setShowModal(true)}>
        <div className="bg-green-500 text-black rounded-lg shadow-lg p-4">
        
        <input
            type={showPassword ? "text" : "password"}
            name="new_password"
            placeholder="Password"
            className="w-full px-3 py-2 mb-3 rounded-lg"
            value={formData.new_password}
            onChange={handleInputChange}
            />
            <input
            type={showPassword ? "text" : "password"}
            name="re_new_password"
            placeholder="Confirm Password"
            className="w-full px-3 py-2 mb-3 rounded-lg"
            value={formData.re_new_password}
            onChange={handleInputChange}
            />
            <div>
            <label>
                    <input
                        type="checkbox"
                        value="showPassword"
                        checked={showPassword}
                        onChange={toggleShowPassword}
                    />
                Show Password
                </label>
            </div>
            
            <button  
              className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800"
              onClick={handleSend}
            >
              Send
            </button>
          </div>
          </Modal>
        </div>
      );
};



export default NewPasswordPage;

