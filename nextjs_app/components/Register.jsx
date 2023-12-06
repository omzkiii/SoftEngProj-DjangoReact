        import React, { useState } from "react";
        import axios from "axios";
        import { useLoggedInContext } from '../contexts/LoggedInContext';

        const RegisterForm = ({ onClose, toggleLogIn }) => { 
          const { login } = useLoggedInContext();
          const [formData, setFormData] = useState({user:  {username:"", email:"", first_name:"", last_name:"", password:"", re_password:""}});
          const [showPassword, setShowPassword] = useState();
          const [showConfirmPassword, setShowConfirmPassword] = useState();
          const [error, setError] = useState(null);
          const [showLogin, setShowLogin] = useState(false); // State to toggle between forms
        // ... (other state and functions)

        const switchToLogin = () => {
          setShowLogin(true); // Set the state to show the login form
        };


          const toggleShowPassword = (e) => {
            setShowPassword(e.target.checked)
          }

          const toggleShowConfirmPassword = (e) => {
            setShowConfirmPassword(e.target.checked)
          }

          const handleInputChange = (e) => {
            const { name, value } = e.target;
            setFormData({ ...formData, [name]: value });
          };


          const handleRegister = async () => {
            try {
              const response = await axios.post("http://localhost:8000/register/", formData);

              if (response.status === 201) {
                // Registration successful
                setError(null);
                console.log("Registration success");
                login();
                onClose(); // Close the modal
              } else {
                // Handle registration errors
                setError("Registration failed");
              }
            } catch (error) {
              // Handle network errors
              setError("Network Error");
              console.log(error);
            }
          };

          return (
            <div>
              <div className="flex flex-col">
              {error && <p>{error}</p>}

            {/* DIV FOR USERNAME */}
              <div className="flex flex-col"> 

                <label className="font-Bree text-xl">
                  Username
                </label>


                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  className="w-1/1.5 px-2 py-1 mb-3 rounded-lg text-white border-white border-2 placeholder-ivory bg-transparent"
                  value={formData.username}
                  onChange={handleInputChange}/>
                  
              </div>
            
              {/* DIV FOR EMAIL    */}
              <div className="flex flex-col"> 

                <label className="font-Bree text-xl">
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-1/1.5 px-3 py-1 mb-3 rounded-lg text-white border-white border-2 placeholder-ivory bg-transparent"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                
              </div>


              {/* DIV FOR first_name    */}
              <div className="flex flex-col"> 

                <label className="font-Bree text-xl">
                  First Name
                </label>

              <input
                type="text"
                name="first_name"
                placeholder="First name"
                className="w-1/1.5 px-3 py-1 mb-3 rounded-lg text-white border-white border-2 placeholder-ivory bg-transparent"
                value={formData.first_name}
                onChange={handleInputChange}
              />

              </div>


              {/* DIV FOR last_name    */}
              <div className="flex flex-col"> 

              <label className="font-Bree text-xl">
                Last Name
              </label>
              <input
                type="text"
                name="last_name"
                placeholder="Last name"
                className="w-1/1.5 px-3 py-1 mb-3 rounded-lg text-white border-white border-2 placeholder-ivory bg-transparent"
                value={formData.last_name}
                onChange={handleInputChange}
              />
              
              </div>


              {/* DIV FOR password    */}
              <div className="flex flex-col"> 

              <label className="font-Bree text-xl">
                Password
              </label>
              
              <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  className="w-1/1.5 px-3 py-1 mb-3 rounded-lg text-white border-white border-2 placeholder-ivory bg-transparent"
                  value={formData.password}
                  onChange={handleInputChange}
                />

                </div>
                <label className="font-Bree">
                  <input
                    type="checkbox"
                    value="showPassword"
                    checked={showPassword}
                    onChange={toggleShowPassword}
                  />
                  Show Password
                </label>
              


                {/* DIV FOR re_password    */}
              <div className="flex flex-col mt-4"> 

              <label className="font-Bree text-xl">
                Confirm Password
              </label>

                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="re_password"
                  placeholder="Confirm Password"
                  className="w-1/1.5 px-3 py-1 mb-3 rounded-lg text-white border-white border-2 placeholder-ivory bg-transparent"                   value={formData.re_password}
                  onChange={handleInputChange}
                />

                </div>


                <label>
                  <input  
                    type="checkbox"
                    value="showConfirmPassword"
                    checked={showConfirmPassword}
                    onChange={toggleShowConfirmPassword}
                  />
                  Show Password
                </label>
              </div>
            




              <div className="mt-4 flex flex-row">
                <div>
                  <h1 className="text-black mr-2"> Already have an account?</h1>
                </div>
                <div>
                  <h1 onClick={toggleLogIn} className="text-blue-600 cursor-pointer px-4">Log in Now!</h1>
                </div>
              </div>

              <div className="mt-4">
                <button
                  onClick={handleRegister}
                  className="bg-AgriAccessGreen text-white w-full py-4 rounded-lg "
                >
                  Sign-up
                </button>
              </div>







          </div>
        );
      };

    export default RegisterForm;
